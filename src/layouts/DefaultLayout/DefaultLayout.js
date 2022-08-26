import classNames from 'classnames/bind';

import styles from './DefaultLayout.module.scss';
import Header from '~/layouts/components/Header';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
    const cx = classNames.bind(styles);
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
