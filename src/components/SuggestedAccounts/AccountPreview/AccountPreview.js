import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccountPreview.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/8a97ef3da44f0b2c4962a2ca835220de~c5_100x100.jpeg?x-expires=1662012000&x-signature=C%2Fi4HYeM%2B2rTtqmKOFn8n7gcf70%3D"
                    alt=""
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>

            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>manhtienkhoi_</strong>
                    <FontAwesomeIcon className={cx('checkbox')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Mạnh Tiến Khôi</p>
                <p className={cx('analytics')}>
                    <strong data-follow-counter="number" className={cx('value')}>
                        4.6M
                    </strong>
                    <span data-follow="string" className={cx('label')}>
                        Follower
                    </span>
                    <strong data-like-counter="number" className={cx('value')}>
                        302.1M
                    </strong>
                    <span data-like="string" className={cx('label')}>
                        Likes
                    </span>
                </p>
            </div>
        </div>
    );
}

PropTypes.AccountPreview = {};

export default AccountPreview;
