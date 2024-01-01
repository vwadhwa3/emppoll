import react from "react";
import { ReactDOM } from "react";
import { Form } from "react-router-dom";
import {LOGIN_IMG} from "constant"
const Login =  ()=>{
    return(
        <div>
            <h2>Employee Polls</h2>
            <image src={LOGIN_IMG} className="" alt="LOGIN_IMG" />
             <Form>
                <label>User Name</label>
                <input type="text" className="" />
                <label>Password</label>
                <input type="password" className="" />
                <input type="submit" value="submit"/>
             </Form>
        </div>
    )
}

export default Login;