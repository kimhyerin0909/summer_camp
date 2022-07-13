import React, { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
interface TodoState {
    id:number;
    title:string;
    description:string;
    createAt:Date;
    isSuccess:boolean;
}

interface TodoListProviderProps {
    children:React.ReactNode;
}

interface TodoListDispatch {
    list:TodoState[];
    addTodo: (title:string, description:string) => void;
    removeTodo: (id:number) => void;
    completeTodo: (id:number) => void;
    failTodo: (id:number) => void;
}

const TodoListContext = createContext([{}]);

export const TodoListProvider = (props:TodoListProviderProps) => {
    const {children} = props;
    const initialState:TodoState[] = []; // {id:0, title:"공부하기",description:"리액트",createAt:new Date(),isSuccess:false}

    return (
        <TodoListContext.Provider value={useState(initialState)}>
            {children}
        </TodoListContext.Provider>
    )
}

export const useTodoList = () => {};

export const useTodoListContext = (): TodoListDispatch => {
    const [state, setState] = useContext(TodoListContext) as [
        TodoState[],
        Dispatch<SetStateAction<TodoState[]>>
    ]

    function addTodo(title:string, description:string) {
        setState((ls) => [...ls, {id:state.length + 1, title, description,createAt:new Date(),isSuccess:false}])
    }
    function removeTodo(id:number) {
        setState((ls) => ls.filter((data) => {
            return data.id !== id;
        }))
    }
    function completeTodo(id:number) {
        state.forEach(da => {
            
            if(da.id === id) da.isSuccess = true
        })
    }
    function failTodo(id:number) {}

    return {
        list:state,
        addTodo,
        removeTodo,
        completeTodo,
        failTodo,
    }
}

