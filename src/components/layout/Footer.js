import styles from './Footer.module.css'
import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa"
function Footer(){
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li><FaFacebook/></li>
                <li><FaLinkedin/></li>
                <li><FaInstagram/></li>
            </ul>
            <p className={styles.copy_right}>
                <span>CashControl</span> &copy; 2025
            </p>
        </footer>
    )
}

export default Footer