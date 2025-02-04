import { FiLoader } from 'react-icons/fi';

import styles from './Loading.module.css'


function Loading(){
    return (
        <div className={styles.loader_container}>
            <FiLoader className={styles.loader_icon} style={{ fontSize: '3rem', animation: 'spin 1s linear infinite' }} />
        </div>
    )
}

export default Loading