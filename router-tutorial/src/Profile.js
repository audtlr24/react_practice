import React from 'react';
import { useParams } from 'react-router-dom';

const data = {
    audtlr24:{
        name:"공명식",
        descrpition:"개발자"
    },
    gildong:{
        name:"홍길동",
        descrpition:"주인공"
    },
};

const Profile = () =>{
    const {username} = useParams();
    const profile = data[username];
    if(!profile){
        return <div>존재하지 않는 사용자 입니다.</div>
    }
    return(
        <div>
            <h3>{username}({profile.name})</h3>
            <p>{profile.descrpition}</p>
        </div>
    );
};

export default Profile;