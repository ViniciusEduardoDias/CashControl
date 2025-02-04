import LinkButton from '../layout/Linkbutton'
import styles from './Home.module.css'
import savings from '../../img/moneypig.svg'

function Home(){
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>CashControl</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to='/newproject' text='Criar projetos'/>
            <img src={savings} alt='chashcost'></img>
        </section>
    )
}

export default Home