import styles from "../../styles/Home.module.css";

const Input = ({onChange, onBlur, type, name, placeholder}) => {
    return(
        <input type={type} name={name} placeholder={placeholder} className={styles.glassInput} onChange={onChange} onBlur={onBlur}/>
    )
}

export default Input