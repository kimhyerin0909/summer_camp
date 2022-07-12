import React, { useContext } from 'react'
import { useUserDataContext } from '../context/userDataContext'

export const Ccom = ({children, onChange}) => {
  const {state, removeData, changeData} =  useUserDataContext();
  return (
    <div>
        <span>C</span>
        {children}
        <input placeholder='Name' value={state} onChange={e => changeData(e.target.value)} />
        <button onClick={removeData}>Click</button>
    </div>
  )
}