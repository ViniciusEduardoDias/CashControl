import { useNavigate } from 'react-router-dom';

import Projectform from '../project/Projectform';

import styles from './Newprojects.module.css';

function Newproject() {
    const navigate = useNavigate();

    function createPost(project) {
        // Inicializar propriedades padrão do projeto
        project.cost = 0;
        project.services = [];

        fetch("http://localhost:5000/projects", { // URL corrigida para 'http'
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Corrigido 'application-json'
            },
            body: JSON.stringify(project),
        })
            .then((resp) => {
                if (!resp.ok) {
                    throw new Error("Falha ao criar o projeto"); // Exceção para erro HTTP
                }
                return resp.json();
            })
            .then((data) => {
                console.log(data);
                // Redirecionar para '/projects' com mensagem de sucesso
                navigate('/projects', { state: { message: 'Projeto criado com sucesso!' } });
            })
            .catch((err) => console.error("Erro na criação do projeto:", err)); 
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <Projectform handleSubmit={createPost} btnText="Criar Projeto" />
        </div>
    );
}

export default Newproject;
