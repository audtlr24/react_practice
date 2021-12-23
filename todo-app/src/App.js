import React,{useState, useRef, useCallback} from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

const App =()=>{
  const [todos,setTodos] = useState([
    {
      id:1,
      text: '리엑트 기초 알기',
      checked: true,
    },
    {
      id:2,
      text: '컴포넌트 스타일링해 보기',
      checked: true,
    },
    {
      id:3,
      text: '일정관리 앱 만들어 보기',
      checked: false,
    },
  ])

  const nextId = useRef(4);

  const onInsert = useCallback( //text 를 input 으로 todo 만들고 setTodo 통해서 state 변경 하는 Hook
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  const onRemove = useCallback( //id 를 input 으로 todos 중에 id 필드가 input id 와 같은것 제외해서 setTodos 하는 Hook
    id =>{
      setTodos(todos.filter(todo=> todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    id=>{
      setTodos(todos.map(todo=> todo.id === id ? {...todo,checked: !todo.checked}: todo)
      );
    },
    [todos],
  );

  return (
  <TodoTemplate>
    <TodoInsert onInsert={onInsert}/>
    <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
  </TodoTemplate>)
};

export default App;