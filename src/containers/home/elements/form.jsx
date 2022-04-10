import styles from "../../../styles/Home.module.css"
const Form = ({onChange, onBlur}) => (
    <div className="sticky  ">
        <h1 className="text-xl font-bold">To do List</h1>
        <div className="flex flex-col md:flex-row items-end md:items-center mt-5">
            <input type="text" name="text" placeholder="type something here" className={styles.glassInput} onChange={onChange} onBlur={onBlur}/>
            <button type="submit" className="bg-red-200 p-1 px-3.5 rounded-full min-w-max ml-3 text-red-800 mt-3 md:mt-0">add to do</button>
        </div>
    </div>
)

export default Form