import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { loginAsync, selectLogged,aboutAsync,contactAsync,logout } from './loginSlice'

const Login = () => {
    const dispatch = useAppDispatch();
    const logged = useAppSelector(selectLogged);
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    return (
        <div>
            Login
            User name<input onChange={(e)=>setusername(e.target.value)}/>
            Password<input onChange={(e)=>setpassword(e.target.value)}/>
            {logged ? <button onClick={() => dispatch(logout())}>Logout</button> :

             <button onClick={() => dispatch(loginAsync({ username, password}))}>Login</button>}

             <button onClick={() => dispatch(aboutAsync())}>About</button>
             <button onClick={() => dispatch(contactAsync())}>Contact</button>
        </div>
    )
}

export default Login