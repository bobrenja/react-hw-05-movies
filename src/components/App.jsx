import NavbarMenu from "./NavbarMenu/NavbarMenu";
import UseRoutes from "./UseRoutes";

import styles from "./app.module.scss"
export const App = () => {
  return <div className={styles.main}>

<NavbarMenu/>
<UseRoutes/>
  </div>
};
