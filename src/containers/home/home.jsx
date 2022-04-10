import { useState } from "react"
import Image from "next/image"
import styles from "../../styles/Home.module.css"
import List from "./elements/list"
import Input from "../../components/input"
import Button from "../../components/button"

import { useFormik, getIn } from "formik"
import * as Yup from "yup"
import useHome from "./hooks/useHome"

import {XIcon, CheckIcon, PencilAltIcon} from "@heroicons/react/outline"

const validationSchema = Yup.object({
    text: Yup.string().required()
})

const initialValues ={
    text:"",
    status: false,
}



const HomeContainer = () =>{
   const {
       activity,
       onSubmit,
       completeTask,
       clearCompleted
   } = useHome()
   
 

    const {
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        touched
    } = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    })
    return(
        <div className="w-screen h-screen bg-slate-900 flex items-center justify-center">
            <Image src="/bg.jpg" layout="fill" className="object-cover fixed" alt="background-image" />
            <div className={styles.glass}>
                <div className="w-full ">
                    <form onSubmit={handleSubmit}>
                     
                         <div className="sticky  ">
                            <h1 className="text-xl font-bold">To do List</h1>
                            <div className="flex flex-col md:flex-row items-end md:items-center mt-5">
                                <Input type="text" name="text" placeholder="type something here" className={styles.glassInput} onChange={handleChange} onBlur={handleBlur}/>
                                <Button type="submit" text="add todo" />
                            </div>
                        </div>
                    </form>
                </div>
                <hr className="my-10"/>
                <div className="w-full h-full overflow-auto no-scrollbar">
                    <div className="w-full h-full">
                        {activity.length != 0 ? activity.map((item, i) =>(
                            <div className={`mb-6 md:mb-10 w-full md:items-center flex flex-col md:flex-row ${item.status ? '': ''}`}   key={i}>
                                <p className={`w-full md:w-8/12 ${item.status ? 'line-through text-gray-400': ''}`} > {item.text}</p>
                                <div className="w-full md:w-1/4 flex justify-start mt-3 md:mt-0 md:justify-between ">
                                    {!item.status ? (
                                        <button onClick={()=> completeTask(item.id)} className="border-white hover:bg-white  text-white hover:text-black transition-all border rounded-full w-10 h-6 m-1 p-1 md:px-3 flex items-center justify-center"><CheckIcon className="  w-3 h-3"/></button>

                                    ):""}
                                </div>
                            </div>                 
                        )): ''}
                    </div>
                   
                </div>
                <hr className="mt-10"/>
                <button onClick={() => clearCompleted()} className="w-full transition-all text-gray-400 hover:text-white hover:bg-red-600 p-1 rounded-full uppercase mt-2">delete all completed task</button>
            </div>

        </div>
    )
}

export default HomeContainer