import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
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
    const [loading, setLoading] = useState(false);

    //useRef
    const inputRef = useRef();
    console.log(searchValue);

    //useEffect
    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [searchValue]);

    //handle
    //handleClick
    const handleClick = () => {
        setSearchValue('');
        inputRef.current.focus();
    };
    const handleHideResult = () => {
        setShowResult(false);
    };
    const handleSpace = (e) => {
        if (e.target.value.startsWith(' ')) {
            return;
        } else {
            setSearchValue(e.target.value);
        }
    };
    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PropperWrapper>
                        <h4 className={cx('search-title')}>Tài khoản</h4>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
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
                    // onChange={(e) => setSearchValue(e.target.value)}
                    onChange={handleSpace}
                    onFocus={() => setShowResult(true)}
                />

                {!!searchValue && !loading && (
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} onClick={handleClick} />
                    </button>
                )}

                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
