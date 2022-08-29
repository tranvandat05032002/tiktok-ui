import classNames from 'classnames/bind';
import PropsTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';

// const cx = classNames.bind(styles);
const cx = classNames.bind(styles);

function MenuItem({ to, title, icon, activeIcon }) {
    return (
        <NavLink to={to} className={(acv) => cx('menu-item', { active: acv.isActive })}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('active-icon')}>{activeIcon}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    to: PropsTypes.string.isRequired,
    title: PropsTypes.string.isRequired,
    icon: PropsTypes.node.isRequired,
    activeIcon: PropsTypes.node.isRequired,
};

export default MenuItem;
