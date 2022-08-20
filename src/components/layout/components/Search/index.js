import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { Wrapper as PropperWrapper } from '~/components/Popper';
import { SearchIcon } from '~/components/icons';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

function Search() {
    //HOOK
    //useState
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    //useRef
    const inputRef = useRef();

    //useEffect
    useEffect(() => {
        const timeout = setTimeout(() => {
            setSearchResult([1, 1]);
        }, 0);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    //handle
    //handleClick
    const handleClick = () => {
        setSearchValue('');
        inputRef.current.focus();
    };
    const handleHideResult = () => {
        setShowResult(false);
    };
    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
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
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    type="text"
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    id={cx('input')}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />

                {!!searchValue && (
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} onClick={handleClick} />
                    </button>
                )}

                {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}

                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
