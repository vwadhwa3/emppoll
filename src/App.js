import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { useEffect ,useState} from 'react';
import {_getUsers} from "../_DATA"
import {login} from "./reducers/AuthSlice"
 
function App() {

 const user = useSelector((store) => store.user.user)
const dispatch = useDispatch()
console.log("logged User " +user)
const [userList,setuserList]= useState();
 useEffect(() => {
   getUsers();
}, []);

const getUsers = async () => {
  debugger
  const data = await _getUsers()
  
  setuserList(data)
  typeof(userList)
}

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const handleClick = (event) => {
  debugger;
  setPassword(password);
  setUsername(username);
  if(username && password) {
    const user =  Object.entries(userList).filter(
      (val) => val[1].id === username && val[1].password === password
    );
    dispatch(login(username))
    }
  // else {
  //   // setError(true);
  //   // setSuccess(false);
  // }
  
}
  return (
    <div className="App">

            {user != null ?(
              <div>

                  <strong>logged in </strong>

                   {/* <Headers/>
                   <Outlet/> */}
                </div>
            ) :(
              <div>
                  <h2>Employee Polls</h2>
                  <form>
                          <label>User Name
                          <input type="text" className="" placeholder="username" onChange={ (e) => { setUsername(e.target.value)    }  } /> 
                          {username}
                          </label><br/>
                          <label>Password {password}
                          <input type="password" className="" placeholder="pasword" onChange={ (e) => { setPassword(e.target.value)  }  } /> </label><br/>
                          <input type="submit" value="submit" onClick={handleClick}/>
                   </form>
                </div>
            ) }

    </div>
  );
}


// const appRouter = createBrowserRouter([
//   {
//       path:"/",
//       element:<AppLayout/>,
//       children:[
//           {
//               path:"/",
//               element:<Body/>

//           },
//           {
//               path:"/about",
//               element:<Suspense fallback= {<Shimmer/>}> <About/></Suspense>

//           },
//           {
//               path:"/contact",
//               element:<Contact/>,

//           },
//           {
//               path:"/Grocery",
//               element:<Suspense fallback= {<Shimmer/>}>
//                           <Grocery/>
//                      </Suspense>  ,

//           },
//           {
//               path: "/restaurants/:resId",
//               element:<RestaurantMenu />
//           }
//       ],
//       errorElement:<Error/>
//   },
// ])



export default App;
