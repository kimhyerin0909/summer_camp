import React, { useContext, useState } from "react";

export const UserDataContext = React.createContext("");

export const UserDataProvider = props => {
    const {children} = props;
    const initValue = "";
    return (
        <UserDataContext.Provider value={useState(initValue)}>
            {children}
        </UserDataContext.Provider>
    )
}

export const useUserDataContext = () => {
    const [state, setState] = useContext(UserDataContext);
    function removeData() {
        setState("")
    }

    function changeData(str) {
        setState(str);
    }

    return {
        state,
        removeData,
        changeData
    }
}