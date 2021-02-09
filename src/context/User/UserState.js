import React, { useReducer } from 'react'
import UserReducer from './UseReducer'
import UserContext from './UserContext';
import axios from 'axios'
import { GET_PROFILE, GET_USERS } from '../types';

const UserState = ({children}) => {
    const initialState = {
        users: [],
        selectedUser: null
    }
    const [state, dispatch] = useReducer(UserReducer, initialState)
    const getUsers = async() => {
        const res = await axios.get(`https://reqres.in/api/users`);
        dispatch({
            payload: res.data.data,
            type: GET_USERS
        })
    }
    
    const getProfile = async (id) => {
        const url = `https://reqres.in/api/users/${id}`;
        const res = await axios.get(url);
        console.log('Single User ', res.data.data)
        dispatch({
            payload: res.data.data,
            type: GET_PROFILE
        })
    }
    return (
        <UserContext.Provider value={{
            users: state.users,
            selectedUser: state.selectedUser,
            getProfile,
            getUsers
        }}>
            { children }
        </UserContext.Provider>
    )
}

export default UserState
