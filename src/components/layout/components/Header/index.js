import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSignIn, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';

import { Wrapper as PropperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setSearchResult([]);
        }, 0);

        return () => {
            clearTimeout(timeout);
        };
    }, []);
    const cx = classNames.bind(styles);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>

                <Tippy
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
                </Tippy>

                <div className={cx('actions')}>
                    <Button text>Upload</Button>
                    {/* <Button primary>Log in</Button> */}
                    <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                        Log in
                    </Button>
                </div>
            </div>
        </header>
    );
}
export default Header;
