import styles from './Project.module.css'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { parse, v4 as uuidv4 } from 'uuid'

import Loading from '../layout/Loading'
import Container from '../layout/Container'
import Projectform from '../project/Projectform'
import Message from '../layout/Message'
import ServiceForm from '../services/ServiceForm'
import ServiceCard from '../services/ServiceCard'

function Project(){
    const { id } = useParams()
    const [project, setProject] = useState({})
    const [services, setServices] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)
    const [message, setMessage] = useState()
    const [type, setType] = useState()

    useEffect(()=>{
      setTimeout(()=>{
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers:{
                'Content-type' : 'application/json'
            }
        }).then((res) => res.json())
            .then(data => {
                setProject(data)
                setServices(data.services)
            })
            .catch(err => console.log(err))
      }, 300)
    }, [id])

    function editPost(project){
        console.log(project)
        //budget validation
        setMessage('')
        if(project.budget < project.cost){
            setMessage('O orçamento não pode ser menor que o custo do projeto!')
            setType('error')
            return false
        }
            

        fetch(`http://localhost:5000/projects/${id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(project)
        })
            .then((res)=>res.json())
            .then((data)=>{
                setProject(data)
                setShowProjectForm(false)
                setMessage('Projeto atualizado!')
                setType('success')
            })
            .catch(err => console.log(err))
    }

    function createService(project){
        
        setMessage('')
        //last service
        const lastService = project.services[project.services.length - 1]
        lastService.id = uuidv4()
        const lastServiceCost = lastService.cost
        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)

        //maximun value validation
        if(newCost > parseFloat(project.budget)){
            setMessage('Orçamento ultrapassado! Verifique o valor do serviço!')
            setType('error')
            project.services.pop()
            return false
        }
        //add service cost to project total
        project.cost = newCost
        //update project
        fetch(`http://localhost:5000/projects/${project.id}`, {
            method:"PATCH",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        }).then((res) => res.json())
            .then((data) => {
                setShowServiceForm(false)
                setMessage('Serviço criado com sucesso!')
                setType('success')
            })
            .catch(error=>console.log(error))
    }
    function toggleProjectForm(){
        setShowProjectForm(!showProjectForm)
    }

    function toggleServiceForm(){
        setShowServiceForm(!showServiceForm)
    }

    function removeService(id, cost){
        const servicesUpdated = project.services.filter((service) => service.id !== id)

        const projectUpdated = project
        projectUpdated.services = servicesUpdated
        
        projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost)

        fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
            method: 'PATCH',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(projectUpdated)
        }).then((res)=>res.json())
            .then((data)=>{
                setProject(projectUpdated)
                setServices(servicesUpdated)
                setMessage("Serviço removido com sucesso!")
                setType('success')
            })
            .catch((error) => console.log(error))
    }


    return (
        <>
            {project.name ? (
                <div className={styles.project_details}>
                    <Container customClass='column'>
                        {message &&
                            <Message type={type} msg={message}></Message>
                        }
                        <div className={styles.details_container}>
                            <h1>Projeto: {project.name}</h1>
                            <button className={styles.btn} onClick={toggleProjectForm}>
                                {!showProjectForm ? 'Editar projeto' : 'Fechar'}
                            </button>

                            {!showProjectForm ? (
                                <div className={styles.project_info}>
                                    <p>
                                        <span>Categoria: </span> {project.category.name}
                                    </p>
                                    <p>
                                        <span>Total de Orçamento: </span> R$ {project.budget}
                                    </p>
                                    <p>
                                        <span>Total Utilizado: </span> R$ {project.cost}
                                    </p>
                                </div>
                            ) : (
                                <div className={styles.project_info}>
                                    <Projectform 
                                        handleSubmit={editPost} 
                                        btnText="Concluir edição" 
                                        projectData={project}>
                                    </Projectform> 
                                </div>
                            )}
                        </div>
                        <div className={styles.service_form_container}>
                            <h2>Adicione um serviço:</h2>
                            <button className={styles.btn} onClick={toggleServiceForm}>
                                {!showServiceForm ? 'Adicionar Serviço' : 'Fechar'}
                            </button>
                            <div className={styles.project_info}>
                                {
                                showServiceForm &&
                                    <ServiceForm
                                        handleSubmit={createService}
                                        btnText='Adicionar Serviço'
                                        projectData={project}
                                    />
                                }
                            </div>
                        </div>
                        <h2>Serviços</h2>
                        <Container customClass='start'>
                            {services.length > 0 &&
                                services.map((service) => (
                                    <ServiceCard
                                        id={service.id}
                                        name={service.name}
                                        cost={service.cost}
                                        description={service.description}
                                        key={service.id}
                                        handleRemove={removeService}
                                    />
                                ))
                            }
                            {services.length === 0 &&
                                <p>Não há serviços para exibir!</p>
                            }
                        </Container>
                    </Container>
                </div> 
                )
                :(
                <Loading />
                )}
        </>
    )
}

export default Project