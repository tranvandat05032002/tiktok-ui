import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
// eslint-disable-next-line
import { Wrapper as PropperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';
// import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

const renderPreview = (props) => {
    return (
        <div tabIndex="-1" {...props}>
            <PropperWrapper>
                <div className={cx('preview')}>
                    <AccountPreview />
                </div>
            </PropperWrapper>
        </div>
    );
};

function AccountItem() {
    return (
        //Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context
        <div>
            <Tippy interactive delay={[900, 0]} placement="bottom" offset={[-18, 0]} render={renderPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/8a97ef3da44f0b2c4962a2ca835220de~c5_100x100.jpeg?x-expires=1662012000&x-signature=C%2Fi4HYeM%2B2rTtqmKOFn8n7gcf70%3D"
                        alt=""
                    />

                    <div className={cx('item-info')}>
                        <div className={cx('nickname')}>
                            <strong>manhtienkhoi_</strong>
                            <FontAwesomeIcon className={cx('checkbox')} icon={faCheckCircle} />
                        </div>
                        <p className={cx('name')}>Mạnh Tiến Khôi</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}
PropTypes.AccountItem = {};
export default AccountItem;
