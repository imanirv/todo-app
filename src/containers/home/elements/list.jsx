
import {XIcon, CheckIcon, PencilAltIcon} from "@heroicons/react/outline"
import useHome from "../hooks/useHome"

const ListItem = ({name, id}) => { 

    const {completeTask} = useHome()
    
    return(
        <div className="  mb-6 md:mb-10 w-full md:items-center flex flex-col md:flex-row">
            <p className="w-full md:w-8/12">{id} - {name}</p>
            <div className="w-full md:w-1/4 flex justify-start mt-3 md:mt-0 md:justify-between ">
                <button onClick={()=> completeTask(id)} className="border-white border rounded-full w-10 h-6 m-1 p-1 md:px-3 flex items-center justify-center"><CheckIcon className="text-white w-3 h-3"/></button>
                {/* <button className="border-white border rounded-full w-10 h-6 m-1 p-1 md:px-3 flex items-center justify-center"><PencilAltIcon className="text-white w-3 h-3"/></button> */}
                {/* <button  onClick={()=> deleteTask(id)} className="border-white border rounded-full w-10 h-6 m-1 p-1 md:px-3 flex items-center justify-center"><XIcon className="text-white w-3 h-3"/></button> */}
            
            </div>
        </div>
    )
}
const List = ({items}) => {
  
    return(
        <div className="w-full h-full">
            {items.length != 0 ? items.map((item, i) =>(
                <ListItem key={i} name={item.text} id={item.id} />                  
            )): ''}
        </div>
    )
}


export default List