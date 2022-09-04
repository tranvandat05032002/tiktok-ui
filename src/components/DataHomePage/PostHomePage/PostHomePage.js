import classNames from 'classnames/bind';
import PostHome from './PostHome';
import styles from './PostHomePage.module.scss';

const cx = classNames.bind(styles);

function PostHomePage() {
    return (
        <div className={cx('wrapper')}>
            <PostHome />
            <PostHome />
            <PostHome />
        </div>
    );
}

export default PostHomePage;
