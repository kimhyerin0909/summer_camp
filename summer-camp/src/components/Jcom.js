import React from 'react'
import { useUserDataContext } from '../context/userDataContext'

export const Jcom = ({children}) => {
  const { state } = useUserDataContext();
    return (
      <div>
          <span>J</span>
          {children}
          <strong>{state}</strong>
      </div>
    )
  }
  