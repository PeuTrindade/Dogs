import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { userContext } from '../../UserContext'
import {ReactComponent as MinhasFotos} from "../../Assets/feed.svg";
import {ReactComponent as Estatisticas} from "../../Assets/estatisticas.svg";
import {ReactComponent as Adicionar} from "../../Assets/adicionar.svg";
import {ReactComponent as Sair} from "../../Assets/sair.svg";
import styles from './UserHeaderNav.module.css';
import UseMedia from '../../Hooks/UseMedia';

const UserHeaderNav = () => {
    const {userLogout} = React.useContext(userContext);
    const mobile = UseMedia('(max-width:40rem)');
    const [mobileMenu,setMobileMenu] = React.useState(false);

    const {pathname} = useLocation();

    React.useEffect(()=>{
      setMobileMenu(false)
    },[pathname])

    return (
        <>
        {mobile && <button aria-label="Menu" className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`} onClick={()=> setMobileMenu(!mobileMenu)}></button>}
        <nav className={`${mobile? styles.navMobile:styles.nav} ${mobileMenu && styles.navMobileActive}`}>
          <NavLink activeClassName={styles.active} to="/conta" end><MinhasFotos/> {mobile && "Minhas fotos"}</NavLink>
          <NavLink activeClassName={styles.active} to="/conta/estatisticas"><Estatisticas/>{mobile && "Estatísticas"}</NavLink>
          <NavLink activeClassName={styles.active} to="/conta/postar"><Adicionar/>{mobile && "Adicionar foto"}</NavLink>
          <button onClick={userLogout}><Sair/>{mobile && "Sair"}</button>
        </nav>
        </>
    )
}

export default UserHeaderNav
