import styles from "./Input.module.css"

function Input({ type, text, name, placeholder, handleOnChange, value }){
    return(
        <div className={styles.form_cost}>
            <label htmlFor={name}>{text}:</label>
            <input 
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value}
            />
        </div>
    )
}

export default Input