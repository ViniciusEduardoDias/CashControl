import { useState } from 'react'

import styles from '../project/Projectform.module.css'

import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

function ServiceForm({ handleSubmit, btnText, projectData}){

    const [service, setService] = useState({})

    function submit(e){
        e.preventDefault()
        console.log(projectData)
        projectData.services.push(service)
        handleSubmit(projectData)
    }

    function handleChange(e){
        setService({...service, [e.target.name]: e.target.value})
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input 
                type='text'
                text='Nome do Serviço'
                name='name'
                placeholder="Insira o nome do serviço"
                handleOnChange={handleChange}
            />
             <Input 
                type='number'
                text='Custo do Serviço'
                name='cost'
                placeholder="Insira o valor total"
                handleOnChange={handleChange}
            />
             <Input 
                type='text'
                text='Descrição do serviço'
                name='description'
                placeholder="Descreva o serviço"
                handleOnChange={handleChange}
            />
            <SubmitButton 
                text={btnText}
            />

        </form>
    )
}

export default ServiceForm