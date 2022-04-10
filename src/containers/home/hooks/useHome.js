import { useState, useEffect } from "react"
import {useRouter} from "next/router";

const useHome = () =>{
    const [activity, setActivity] = useState([])
    const {push} = useRouter();

    const onSubmit = async (values) => {
        try {
            const payload = {
                id: Math.floor(Math.random() * 1000),
                text: values.text,
                status: values.status
            }
            const data = [...activity, payload]
            await setActivity(data)
            save(data);
        } catch (error) {
            console.log('error >', error)
        }
    }
    
    const completeTask =  (id) => {
        
        const completed = activity.filter(task => task.id === id );
        const filtered = activity.filter(task => task.id !== id );

        const marks = {
            id: completed[0].id,
            text: completed[0].text,
            status: true
        }
        const data = [
            ...filtered, marks
        ]
        setActivity(data)
        
        save(data)

    }

    const clearCompleted = () => {
        const filtered = activity.filter(item => item.status === false);
        setActivity(filtered)
        save(filtered)
    }

    const save = (data) => {
        localStorage.setItem('todos', JSON.stringify(data));
        window.location.href = '/';
    }
    const checkInitialData = () => {
        const initialData = localStorage.getItem('todos')
        console.log(initialData)
        if (initialData) {
            setActivity(JSON.parse(initialData))
        }
    }

    useEffect(() => {
        checkInitialData()
    }, [])
    return {
        onSubmit,
        completeTask,
        clearCompleted,
        activity
    }
}

export default useHome