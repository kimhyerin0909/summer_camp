import { BodyContainer, HeaderContainer } from './container';
import styled from 'styled-components';
import { TodoListProvider } from './context/todoListContext';

function App() {
  return (
    <TodoListProvider>
      <Positioner>
        <Wrapper> 
          <div className="App">
            <HeaderContainer />
            <BodyContainer />
          </div>
        </Wrapper>
      </Positioner>
    </TodoListProvider>
  );
}

export default App;

const Positioner = styled.div`
  height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
`

const Wrapper = styled.div`
  width:920px;
  height:100%;
`