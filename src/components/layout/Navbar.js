import { Link } from "react-router-dom"
import Container from "./Container"
//import styles from "./Navbar.module.css"
import logo from '../../img/logo.png'
import styles from './Navbar.module.css'

function Navbar(){
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to='/'>
                    <img src={logo} className={styles.logo} alt="Costs"></img>
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to='/'>Home</Link></li>
                    <li className={styles.item}><Link to='/projects'>Projetos</Link></li>
                    <li className={styles.item}><Link to='/empresa'>Empresa</Link></li>
                    <li className={styles.item}><Link to='/contato'>Contato</Link></li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar

