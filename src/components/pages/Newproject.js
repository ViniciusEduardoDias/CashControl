import Projectform from '../project/Projectform'
import styles from './Newprojects.module.css'

function Newproject(){
    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <Projectform btnText="Criar Projeto"/>
        </div>
    )
}

export default Newproject