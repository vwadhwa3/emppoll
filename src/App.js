import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
 
function App() {

 

 const user = useSelector((store) => store.user.user)
 console.log(user)
  return (
    <div className="App">
      
            {user != null ?(
              <div>
                  <Headers/>
                  <Outlet/>
                </div>
            ) :(
              <Login/>
            ) }
                
    </div>
  );
}


const appRouter = createBrowserRouter([
  {
      path:"/",
      element:<AppLayout/>,
      children:[
          {
              path:"/",
              element:<Body/>
              
          },
          {
              path:"/about",
              element:<Suspense fallback= {<Shimmer/>}> <About/></Suspense> 
              
          },
          {
              path:"/contact",
              element:<Contact/>,
             
          },
          {
              path:"/Grocery",
              element:<Suspense fallback= {<Shimmer/>}>
                          <Grocery/>
                     </Suspense>  ,
             
          },
          {
              path: "/restaurants/:resId",
              element:<RestaurantMenu />
          }
      ],
      errorElement:<Error/>
  },
])



export default App;
