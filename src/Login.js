import react from "react";
import { ReactDOM } from "react";
import {LOGIN_IMG} from "./constants"
const Login =  ()=>{
    return(
        <div>
            <h2>Employee Polls</h2>
             <form>
                <label>User Name
                <input type="text" className="" placeholder="username" /> </label><br/>
                <label>Password
                <input type="password" className="" placeholder="pasword" /> </label><br/>
                <input type="submit" value="submit"/>
             </form>
        </div>
    )
}

export default Login;