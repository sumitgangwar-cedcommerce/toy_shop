import React, { createContext, useState } from 'react'


export const data = createContext()
const DataContext = (props) => {
    const [lopen , setLopen] = useState(false)
    const [user , setUser] = useState()
    const [cart , setCart] = useState([])
  return (
    <data.Provider value={{cart:[cart , setCart] , lmodal:[lopen , setLopen] , user:[user , setUser]}}>
        {props.children}
    </data.Provider>
  )
}

export default DataContext