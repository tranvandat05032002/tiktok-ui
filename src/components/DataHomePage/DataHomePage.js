import classNames from 'classnames/bind';
import styles from './DataHomePage.module.scss';
// eslint-disable-next-line
import PropTypes from 'prop-types';

import PostHomePage from './PostHomePage';
import Button from '../Button';

const cx = classNames.bind(styles);

function DataHomePage() {
    return (
        <div className={cx('wrapper')}>
            <PostHomePage />

            <Button className={cx('btn-getApp')} rounded>
                Get app
            </Button>
        </div>
    );
}

DataHomePage.propTypes = {};

export default DataHomePage;
