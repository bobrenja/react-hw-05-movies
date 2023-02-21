import { NavLink } from 'react-router-dom';
import styles from './navbarMenu.module.scss';
import { itemMenu } from './itemMenu';

const NavbarMenu = () => {
  const getClassname = ({ isActive }) => {
    return isActive ? `${styles.link} ${styles.active}` : styles.link;
  };

  const elements = itemMenu.map(({ id, to, text }) => (
    <li key={id}>
      <NavLink className={getClassname} to={to}>
        {text}
      </NavLink>
    </li>
  ));

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <span>LOGO</span>
          <ul className={styles.item}>{elements}</ul>
          <span>Search</span>
        </div>
      </nav>
    </header>
  );
};

export default NavbarMenu;
