import React from 'react'


const Navbar = ({filterItem,menulist}) => {
  return (
    <div>
        <nav className='navbar'>
        <div className='btn-group'>
            {
                menulist.map((curElem)=>{
                    return(
                        <button className='btn-group__item' onClick={()=>filterItem(curElem)}>{curElem}</button>
                    )
                })
            }
        </div>
        </nav>
  
    </div>
  )
}

export default Navbar
