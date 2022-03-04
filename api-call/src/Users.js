import useAsync from './useAsync';
import { getUsers } from './asyncFunc';

const Users = ()=>{
    const [state, refetch] = useAsync(getUsers,[],true);
    const {loading, data: users, error} = state;

    if(loading) return <div>로딩중...</div>;
    if(error) return <div>에러 발생</div>;
    if(!users) return <button onClick={refetch}>불러오기</button>;
    return(
        <>
            <ul>
                {users.map(user=>(
                    <li key={user.id}>
                        {user.username} ({user.name})
                    </li>
                ))}
            </ul>
            <button onClick={refetch}>다시 요청하기</button>
        </>
    );
}

export default Users;