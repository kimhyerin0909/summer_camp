import React, { useContext } from 'react'
import { UserDataContext } from '../context/userDataContext'

export const Gcom = ({children, value}) => {
  const context = useContext(UserDataContext);
  return (
    <div>
        <span>G</span>
        {children}
        <strong>{context}</strong>
    </div>
  )
}