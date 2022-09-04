import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccountPreview.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountPreview({ suggestedTippy }) {
    const [button, setButton] = useState(true);
    const handleChangeButton = () => {
        setTimeout(() => {
            setButton(!button);
        }, 700);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Link to={`/@${suggestedTippy.nickname}`}>
                    <img className={cx('avatar')} src={suggestedTippy.avatar} alt="" />
                </Link>
                {button ? (
                    <Button onClick={handleChangeButton} className={cx('follow-btn')} primary>
                        Follow
                    </Button>
                ) : (
                    <Button onClick={handleChangeButton} className={cx('follow-btn')} text>
                        Following
                    </Button>
                )}
                {/* button ? (
                    <Button onClick={handleChangeButton} className={cx('follow-btn')} primary>
                        Follow
                    </Button>
                ) : (
                    <Button onClick={handleChangeButton} className={cx('follow-btn')} text>
                        Following
                    </Button>
                ) */}
            </div>

            <div className={cx('body')}>
                <Link to={`/@${suggestedTippy.nickname}`}>
                    <p className={cx('nickname')}>
                        <strong>{suggestedTippy.nickname}</strong>
                        {suggestedTippy.tick && <FontAwesomeIcon className={cx('checkbox')} icon={faCheckCircle} />}
                    </p>
                    <p className={cx('name')}>{suggestedTippy.full_name}</p>
                </Link>
                <p className={cx('analytics')}>
                    <strong data-follow-counter="number" className={cx('value')}>
                        {suggestedTippy.followings_count}M
                    </strong>
                    <span data-follow="string" className={cx('label')}>
                        Follower
                    </span>
                    <strong data-like-counter="number" className={cx('value')}>
                        {suggestedTippy.likes_count}M
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
