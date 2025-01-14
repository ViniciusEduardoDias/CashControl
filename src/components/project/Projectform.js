import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'


import styles from './Projectform.module.css'

function Projectform({btnText}){
    return(
        <form className={styles.form}>
            <Input
                type="text"
                text="Nome do Projeto"
                name="name"
                placeholder="Insira o nome do projeto"
            />
            <Input
                type="number"
                text="Orçamento do Projeto"
                name="budged"
                placeholder="Insira o orçamento do projeto"
            />
            <Select
                name="category_id"
                text="Selecione a categoria"
            />
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default Projectform