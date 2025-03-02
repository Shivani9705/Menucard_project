import React, { useState } from 'react'
import Menu from './Menuapi'
import Menucard from './Menucard'
import './style.css'
import Navbar from './Navbar'


const uniqueList=[
  ...new Set(Menu.map((curElem)=>{
  return curElem.category
}))]

console.log(uniqueList)

const Restaurent = () => {
    const[menudata,setMenudata]= useState(Menu);
    const[menulist,setMenulist]=useState(uniqueList)

    const filterItem=(category)=>{
      if(category === "All"){
        setMenudata(Menu);
        return;
      }

      const updatedList=Menu.filter((curElem)=>{
        return curElem.category === category
      })

      setMenudata(updatedList)
    }

  return (
    <div>
      <Navbar filterItem={filterItem} menulist={menulist}/>
      <Menucard menudata={menudata}/>
    </div>
  )
}

export default Restaurent
