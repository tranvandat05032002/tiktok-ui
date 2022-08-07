import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/ddcb57a7bcd8bf0fc01c18338b2caf59~c5_300x300.webp?x-expires=1660017600&x-signature=joL8KtWuaIXwi%2BboB8U2IuHHhyo%3D"
                alt="hoaa"
                className={cx('avatar')}
            />

            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>hoaa.hanassiii</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>hoaa.hanassii</span>
            </div>
        </div>
    );
}

export default AccountItem;
