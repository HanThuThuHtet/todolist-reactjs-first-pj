import React from 'react'
import "./List.css"
import {BsTrash} from "react-icons/bs"
import {MdOutlineEdit} from "react-icons/md"
const List = ({data,age,isDone,onChecked,id,onDelete,onEdit}) => {
    console.log({data,age,isDone});
    // const style = {
    //     bgstyle:{
    //         backgroundColor: "gray",
    //         textDecoration: "line-through"
    //     }
    // }
    const handleChange = () => {
      onChecked(id);
    }
    const handleDelete = () => {
      onDelete(id);
    }
    const handleEdit = () => {
      onEdit(id);
    }
  return (
    // <div className='listContainer' style={isDone ? style.bgstyle : null}>
    //     <p>{data}</p>
    //     <p>{age}</p>
    // </div>
    <div className={`listContainer ${isDone && "done"}`}>
      
      <div className='textContainer'>
        <input checked={isDone} onChange={handleChange} type="checkbox" />
        <p>{data}</p>
        <p>{age}</p>
      </div>
      <div className='btnContainer'>
          <button onClick={handleDelete}><BsTrash/></button>
          <button onClick={handleEdit}><MdOutlineEdit/></button>
      </div>

      
       
    </div>
  )
}

export default List

//attribute => jsx => props => function(props) => props obj
//condtional style
//condtional style => attribute binding
