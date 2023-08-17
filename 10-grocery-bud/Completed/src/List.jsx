import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({id,title,handleDelete, handleEdit}) => {
  //console.log(items)
  const [isChecked, setIsChecked] = useState(false)
  return (
    <div className="grocery-list">
          <article key={id} className="grocery-item">
            <input type="checkbox" onClick={()=>setIsChecked(v=>!v)} />
            {isChecked?<strike><p className="title">{title}</p></strike>:<p className="title">{title}</p>}
            <div className="form-operation">
              <button className="edit-btn"onClick={()=>handleEdit(id)}>
                <FaEdit />
              </button>
              <button className="delete-btn" onClick={()=>handleDelete(id)}>
                <FaTrash />
              </button>
            </div>
          </article>
    </div>
  );
};

export default List;
