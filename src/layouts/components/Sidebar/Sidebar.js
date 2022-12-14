import SimpleBarReact from 'simplebar-react';
import 'simplebar/src/simplebar.css';
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
import SuggestedAccounts from '~/components/SuggestedAccounts';

const cx = classNames.bind(styles);
function Sidebar() {
    // console.log(config.routes.home);
    return (
        <aside className={cx('wrapper')}>
            <SimpleBarReact style={{ maxHeight: 530 }}>
                <Menu>
                    <MenuItem
                        to={config.routes.home}
                        title="For You"
                        icon={<HomeIcon />}
                        activeIcon={<HomeSolidIcon />}
                    />
                    <MenuItem
                        to={config.routes.flowing}
                        title="Following"
                        icon={<UserGroupIcon />}
                        activeIcon={<UserGroupSolidIcon />}
                    />
                    <MenuItem to={config.routes.live} title="LIVE" icon={<LiveIcon />} activeIcon={<LiveSolidIcon />} />
                </Menu>

                <SuggestedAccounts label="Suggested accounts" />
                <SuggestedAccounts label="Following accounts" />
            </SimpleBarReact>
        </aside>
    );
}

export default Sidebar;
