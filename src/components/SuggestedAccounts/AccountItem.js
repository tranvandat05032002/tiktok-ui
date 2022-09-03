import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PropperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({ suggested, visible, checkTippy }) {
    console.log(checkTippy);
    return (
        //Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context
        <div>
            {suggested.slice(0, visible).map((data) => (
                <div key={data.id}>
                    <Tippy
                        interactive
                        delay={[900, 0]}
                        placement="bottom"
                        offset={[-18, 0]}
                        render={(props) => {
                            return (
                                <div tabIndex="-1" {...props}>
                                    {checkTippy && (
                                        <PropperWrapper>
                                            <div className={cx('preview')}>
                                                <AccountPreview suggestedTippy={data} />
                                            </div>
                                        </PropperWrapper>
                                    )}
                                </div>
                            );
                        }}
                    >
                        <Link to={`/@ ${data.nickname}`}>
                            <div className={cx('account-item')}>
                                <img className={cx('avatar')} src={data.avatar} alt="" />

                                <div className={cx('item-info')}>
                                    <div className={cx('nickname')}>
                                        <strong>{data.nickname}</strong>
                                        {data.tick && (
                                            <FontAwesomeIcon className={cx('checkbox')} icon={faCheckCircle} />
                                        )}
                                    </div>
                                    <p className={cx('name')}>{data.full_name}</p>
                                </div>
                            </div>
                        </Link>
                    </Tippy>
                </div>
            ))}
        </div>
    );
}
PropTypes.AccountItem = {};
export default AccountItem;
