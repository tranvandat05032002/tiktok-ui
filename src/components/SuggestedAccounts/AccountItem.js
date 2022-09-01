import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
// eslint-disable-next-line
import { Wrapper as PropperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

// const renderPreview = ({ props, suggested }) => {
//     console.log(suggested);
//     return (
//         <div tabIndex="-1" {...props}>
//             <PropperWrapper>
//                 <div className={cx('preview')}>
//                     <AccountPreview />
//                 </div>
//             </PropperWrapper>
//         </div>
//     );
// };

function AccountItem({ suggested }) {
    return (
        //Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context
        <div>
            {suggested.map((data) => (
                <div key={data.id}>
                    <Tippy
                        interactive
                        delay={[900, 0]}
                        placement="bottom"
                        offset={[-18, 0]}
                        render={(props) => {
                            return (
                                <div tabIndex="-1" {...props}>
                                    <PropperWrapper>
                                        <div className={cx('preview')}>
                                            <AccountPreview suggestedTippy={data} />
                                        </div>
                                    </PropperWrapper>
                                </div>
                            );
                        }}
                    >
                        <div className={cx('account-item')}>
                            <img className={cx('avatar')} src={data.avatar} alt="" />

                            <div className={cx('item-info')}>
                                <div className={cx('nickname')}>
                                    <strong>{data.nickname}</strong>
                                    {data.tick && <FontAwesomeIcon className={cx('checkbox')} icon={faCheckCircle} />}
                                </div>
                                <p className={cx('name')}>{data.full_name}</p>
                            </div>
                        </div>
                    </Tippy>
                </div>
            ))}
        </div>
    );
}
PropTypes.AccountItem = {};
export default AccountItem;
