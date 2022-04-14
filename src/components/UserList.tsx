import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux'
import {useTypeSelector} from '../hooks/useTypeSelector'
//Свой хук потому что useSelector не дружет с типами
import {fetchUsers} from '../action/user'

const UserList: React.FC = () => {
   const {users, error, loading} = useTypeSelector(state => state.user)
   const dispatch = useDispatch()
   useEffect(()=>{
      dispatch(fetchUsers())
   }, [])

   if(loading){
      return <h1>Идет загрузка...</h1>
   }
   if(error){
      return <h1>{error}</h1>
   }
   return (
      <div className="user-list">
         <ul>
            {users.map(user =>
               <li key={user.id}>{user.name}</li>
            )}
         </ul>
      </div>
   );
};

export default UserList;