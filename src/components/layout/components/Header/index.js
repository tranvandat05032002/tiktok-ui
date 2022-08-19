import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import {
    faArrowRightFromBracket,
    faCircleQuestion,
    faCircleXmark,
    faEarthAsia,
    faEllipsisVertical,
    faGears,
    faKeyboard,
    faMagnifyingGlass,
    faPlus,
    faSignIn,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import Button from '~/components/Button';

import { Wrapper as PropperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/menu';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import { MessagesIcon, InboxIcon } from '~/components/icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/@tranvandat0503',
    },
    {
        icon: <FontAwesomeIcon icon={faBitcoin} />,
        title: 'Get coins',
        to: '/coins',
    },
    {
        icon: <FontAwesomeIcon icon={faGears} />,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEMS,

    {
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const currentUser = true;
    useEffect(() => {
        const timeout = setTimeout(() => {
            setSearchResult([]);
        }, 0);

        return () => {
            clearTimeout(timeout);
        };
    }, []);
    //handle logic
    const handleMenuOnchange = (menuItem) => {
        switch (menuItem.title) {
            case 'language':
                // handle something
                break;
            default:
            //return something when Your cases don't work
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>

                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PropperWrapper>
                                <h4 className={cx('search-title')}>Tài khoản</h4>

                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PropperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            type="text"
                            placeholder="Search accounts and videos"
                            spellCheck={false}
                            id={cx('input')}
                        />

                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>

                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            {/* <img src={images.search} alt="Search" /> */}
                        </button>
                    </div>
                </HeadlessTippy>

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button text>
                                <FontAwesomeIcon className={cx('btn-text-upload')} icon={faPlus} /> Upload
                            </Button>
                            <Tippy content="Messages" placement="bottom" delay={[0, 200]}>
                                <button className={cx('action-btn')}>
                                    <MessagesIcon width="26px" height="26px" />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom" delay={[0, 200]}>
                                <button className={cx('action-btn')}>
                                    <InboxIcon className={cx('action-btn_inbox')} width="32px" height="32px" />

                                    <div className={cx('action-btn_count')}>
                                        <p>13</p>
                                    </div>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>
                                {' '}
                                <FontAwesomeIcon className={cx('btn-text-upload')} icon={faPlus} />
                                Upload
                            </Button>
                            <Button primary={<FontAwesomeIcon icon={faSignIn} />}>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuOnchange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/1966fcda97fb1bc61ca3625ac98a5714~c5_100x100.jpeg?x-expires=1660942800&x-signature=xI79yw%2B8knx5mpkP95gZc9rs8L4%3D"
                                alt="Tran Van A"
                                // fallback="https://images.pexels.com/photos/6499190/pexels-photo-6499190.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}
export default Header;
