import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage=()=>{
  let items = localStorage.getItem('items')
  if(items){
    return JSON.parse(items)
  }
  else
    return []
}

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState(getLocalStorage);
  const [editId, setEditId] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
 
  const [alert, setAlert] = useState({show:false, type:"", msg:""})

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!input){
      showAlert(true, "danger", "Invalid input")
    }
    else if(input && isEditing){
      setItems(items.map(item=>{
        if(item.id === editId){
          return {...item, title: input}
        }
      }))
      setEditId(null)
      setInput('')
      setIsEditing(false) 
      showAlert(true,'success',"Item have been edited.")
    }
    else{
    let newItem = { id: new Date().getTime().toString(), title: input }
    setItems([...items, newItem])
    setInput("")
    showAlert(true, "success", "Item has been added.")
  }
  };
  const handleDelete = (id)=>{
    setItems(items.filter(item=>item.id !== id))
    showAlert(true, "danger", "Item have been removed")
  }

  const handleEdit = (id)=>{
    const specificItem = items.find(item=>item.id === id)
    setIsEditing(true)
    setEditId(specificItem.id)
    setInput(specificItem.title) 
  }


  const showAlert = (show=false, type='', msg='')=>{
    setAlert({show , type , msg})
  }
  useEffect(()=>{
    localStorage.setItem('items' ,JSON.stringify(items))
  },[items])
  return (
    <>
      <section className="section-center">
        {alert.show?<Alert removeAlert={showAlert} {...alert} items={items}/>:null}
        <form className="grocery-form" onSubmit={handleSubmit}>
          <h3>Grocery bud</h3>
          <div className="form-control">
            <input
              type="text"
              className="grocery"
              placeholder="e.g Eggs"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <button className="submit-btn">{isEditing?"Edit":"Submit"}</button>
          </div>
        </form>
        <div className="grocery-container">
          {items.map(item=>{
            return <List key={item.id} {...item} handleDelete={handleDelete} handleEdit={handleEdit}/>
          })}
          
        </div>
      </section>
    </>
  );
}

export default App;
