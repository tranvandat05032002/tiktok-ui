import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';
import { useEffect, useState } from 'react';
import axios from 'axios';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label }) {
    // Hooks
    const [data, setData] = useState([]);
    const [visible, setVisible] = useState(label === 'Suggested accounts' ? 5 : 7);
    const [showAccount, setShowAccount] = useState(false);
    const [checkTippy, setCheckTippy] = useState(false);
    // var checkTippy = false;
    useEffect(() => {
        if (label === 'Suggested accounts') {
            setCheckTippy(true);
        } else {
            setCheckTippy(false);
        }
    }, [label]);
    useEffect(() => {
        async function fetAPI() {
            const requestUrl = 'http://localhost:3000/following';
            const responseJSON = await axios.get(requestUrl);
            return responseJSON;
        }

        fetAPI().then((res) => {
            setData(res.data);
        });
    }, []);

    // Handle
    const handleShowAccount = () => {
        setShowAccount(!showAccount);

        if (showAccount) {
            setVisible((prevValue) => prevValue - 1000000);
        } else {
            setVisible((prevValue) => prevValue + 1000000);
        }
    };
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItem suggested={data} visible={visible} checkTippy={checkTippy} />
            <p onClick={handleShowAccount} className={cx('more-btn')}>
                {showAccount ? 'See less' : 'See all'}
            </p>
        </div>
    );
}

PropTypes.SuggestedAccounts = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
