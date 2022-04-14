import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux'
import {useTypeSelector} from '../hooks/useTypeSelector'
import {fetchTodos, setTodoPage} from '../action/todo'

const TodoList: React.FC = () => {
   const {page, error, loading, todos, limit} = useTypeSelector(state => state.todo)
   const dispatch = useDispatch()
   const pages = [1, 2, 3, 4, 5]

   useEffect(()=>{
      dispatch(fetchTodos(page, limit))
   }, [page])

   if(loading){
      return <h1>Идет загрузка...</h1>
   }
   if(error){
      return <h1>{error}</h1>
   }

   return (
      <div className="todo-list">
         <ul>
            {todos.map(todo =>
               <li key={todo.id}>{todo.id} - {todo.title}</li>   
            )}
         </ul>
         <div>
            {pages.map((p, index)=>
               <button 
                  key = {index}
                  style={{border:p === page ? "2px solid blue":"1px solid gray"}} 
                  onClick={() => dispatch(setTodoPage(p))}
               >{p}</button>
            )}
         </div>
      </div>
   );
};

export default TodoList;