import React,{useReducer, useRef, useCallback} from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function todoReducer(todos,action){
  switch(action.type){
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter(todo=>todo.id !== action.id);
    case 'TOGGLE':
      return todos.map(todo => todo.id === action.id ? {...todo,checked:!todo.checked}: todo);
    default:
      return todos;
  }
}

function createBulkTodos(){
  const array=[];
  for (let i =1 ; i<=2500; i++){
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false
    });;
  }
  return array;
}

const App =()=>{
  const [todos,dispatch] = useReducer(todoReducer,undefined, createBulkTodos); // 맨처음 렌더링할때만 createBulkTodos 실행되기 위함

  const nextId = useRef(2501);

  const onInsert = useCallback( //text 를 input 으로 todo 만들고 변경하는 Hook
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      dispatch({type: 'INSERT', todo});
      nextId.current += 1;
    },
    [],
  );

  const onRemove = useCallback( //id 를 input 으로 todos 중에 id 필드가 input id 와 같은것 제외해서 setTodos 하는 Hook
    id =>{
      dispatch({type:'REMOVE',id})
    },
    [],
  );

  const onToggle = useCallback(
    id=>{
      dispatch({type:'TOGGLE',id});
    },
    [],
  );

  return (
  <TodoTemplate>
    <TodoInsert onInsert={onInsert}/>
    <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
  </TodoTemplate>)
};

export default App;