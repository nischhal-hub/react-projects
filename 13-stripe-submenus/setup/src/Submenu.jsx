import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const {isSubmenuOpen, closeSubmenu,location,item} = useGlobalContext()
  const [columns, setColumns] = useState(2)
  const {page,links} = item
  const container = useRef(null);
  const noOflinks = links.length
  useEffect(()=>{
    setColumns(noOflinks)
    const {center,bottom} = location;
    container.current.style.left = `${center}px`;
    container.current.style.top = `${bottom}px`;
  },[location,noOflinks])
  return(
    
    <aside className={`${isSubmenuOpen?"submenu show":"submenu"}`} ref={container}>
      <h4>{page}</h4>
      <div className={`submenu-center col-${columns}`}>
        {links.map((link,index)=>{
          const {label,icon,url} = link;
          return(
          <a href={url} key={index}>{icon} {label}</a>)
        })}
      </div>
    </aside>
  )
}

export default Submenu
