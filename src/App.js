import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './routes/Home';
import Start from './routes/Start';
import { useDispatch} from 'react-redux';
import { getAuth } from './feachures/auth/authSlice';
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Start/>
  },
  {
    path: '/home',
    element: <Home/>
  }
]);

function App() {
  const dispatch = useDispatch();
  dispatch(getAuth());
  return (
    <div>
      <RouterProvider router={routes}/>
    </div>
  )
}

export default App