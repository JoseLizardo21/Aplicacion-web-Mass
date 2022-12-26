import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './routes/Home'
import {modifySession} from './feachures/auth/authSlice'
import {useSelector, useDispatch} from 'react-redux'
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  }
]);
const isLoggedIn = async()=>{
  const res = await this.API.get('api', {
    mode: 'cors',
    credentials: 'include'
  });
  return res.isLoggedIn;
}
function App() {
  const session = useSelector(state=>state.auth);
  const dispatch = useDispatch();
  dispatch(modifySession())
  return (
    <div>
      <RouterProvider router={routes}/>
    </div>
  )
}

export default App