import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label }) {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetAPI() {
            const requestUrl = 'http://localhost:3000/following';
            const response = await fetch(requestUrl);
            const responseJSON = response.json();

            return responseJSON;
        }

        fetAPI().then((res) => {
            setData(res);
        });
    }, []);
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItem suggested={data} />
            <p className={cx('more-btn')}>See all</p>
        </div>
    );
}

PropTypes.SuggestedAccounts = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
