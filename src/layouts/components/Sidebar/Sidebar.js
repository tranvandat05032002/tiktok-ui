import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    UserGroupIcon,
    LiveIcon,
    HomeSolidIcon,
    UserGroupSolidIcon,
    LiveSolidIcon,
} from '~/components/icons';
import config from '~/config';

const cx = classNames.bind(styles);
function Sidebar() {
    // console.log(config.routes.home);
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem to={config.routes.home} title="For you" icon={<HomeIcon />} activeIcon={<HomeSolidIcon />} />
                <MenuItem
                    to={config.routes.flowing}
                    title="Following"
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupSolidIcon />}
                />
                <MenuItem to={config.routes.live} title="LIVE" icon={<LiveIcon />} activeIcon={<LiveSolidIcon />} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
