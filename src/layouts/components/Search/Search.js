import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';

import * as searchService from '~/services/searchService';
import styles from './Search.module.scss';
import { Wrapper as PropperWrapper } from '~/components/Popper';
import { SearchIcon } from '~/components/icons';
// import AccountItem from '~/components/AccountItem';
import { useDebounce } from '~/hooks';
import RenderList from './RenderList';

const cx = classNames.bind(styles);

function Search() {
    //HOOK
    //useState
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    // debounce
    // const debouncedValue = useRef(null);
    const debouncedValue = useDebounce(searchValue, 500);
    //useRef
    const inputRef = useRef();
    //useEffect

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }

        //axios/service
        const fetchApi = async () => {
            setLoading(true);
            const result = await searchService.search(debouncedValue);
            setSearchResult(result);

            setLoading(false);
        };
        fetchApi();
    }, [debouncedValue]);

    // const

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
        //Using a wrapper <div> tag around the reference element
        // solves this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PropperWrapper>
                            <h4 className={cx('search-title')}>Tài khoản</h4>
                            <RenderList searchResult={searchResult} />
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

                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
