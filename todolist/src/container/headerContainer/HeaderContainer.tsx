import React, { useState } from 'react'
import styled from 'styled-components';
import { useTodoListContext } from '../../context/todoListContext';

export const HeaderContainer = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const {list, addTodo, removeTodo, completeTodo, failTodo,} = useTodoListContext();
  return (
    <Header>
      <InputBox>
        <Input onChange={(e:any) => setTitle(e.target.value)} placeholder='todo 제목 입력' />
        <Textarea onChange={(e:any) => setDesc(e.target.value)} placeholder='todo 내용 입력' />
      </InputBox>
      <button onClick={() => addTodo(title, desc)}>추가</button>
    </Header>
  )
}

const InputBox = styled.div`
  width: 80%;
`

const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`

const Input = styled.input`
  display: block;
  width:100%;
  height:30px;
`

const Textarea = styled.input`
  display: block;
  width:100%;
  height:30px;
`