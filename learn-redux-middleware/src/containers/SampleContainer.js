import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Sample from '../components/Sample';
import {getPost,getUsers} from '../modules/sample';

const {useEffect} = React;
const SampleContainer = ({
    loadingPost,
    loadingUsers
}) => {

    const post = useSelector(state=>state.sample.post);
    const users = useSelector(state=>state.sample.users);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPost(1));
        dispatch(getUsers(1));
    },[dispatch]);

    return(
        <Sample
            post={post}
            users={users}
            loadingPost={loadingPost}
            loadingUsers={loadingUsers}
        />
    );
};

export default SampleContainer;