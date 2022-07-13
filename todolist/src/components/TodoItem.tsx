import React, { useEffect } from 'react'
import styled from 'styled-components';
import { useTodoListContext } from '../context/todoListContext'

export const TodoItem = () => {
    const {list, removeTodo, completeTodo, failTodo,} = useTodoListContext();
    // useEffect(() => {}, [list])
    return (
        <div>
            {list.map(li => {
                if(li.isSuccess) {
                    const a = <List key={li.id} id={`li${li.id}`} >
                        <span>{li.title}</span>
                        {/* <span>{li.description}</span> */}
                        <span>{li.createAt.getFullYear()}년 {li.createAt.getMonth() + 1}월 {li.createAt.getDate()}일</span>
                        <button onClick={() => removeTodo(li.id)}>삭제</button>
                        <button onClick={() => completeTodo(li.id)}>성공</button>
                        <button onClick={() => failTodo(li.id)}>실패</button>
                    </List>
                    
                    return a;
                }
                const a = <div key={li.id} id={`li${li.id}`} >
                    <span>{li.title}</span>
                    {/* <span>{li.description}</span> */}
                    <span>{li.createAt.getFullYear()}년 {li.createAt.getMonth() + 1}월 {li.createAt.getDate()}일</span>
                    <button onClick={() => removeTodo(li.id)}>삭제</button>
                    <button onClick={() => completeTodo(li.id)}>성공</button>
                    <button onClick={() => failTodo(li.id)}>실패</button>
                </div>
                return a;
            })}
        </div>
    )
}

const List = styled.div`
background-color: red;
`