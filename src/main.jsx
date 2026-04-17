import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/home.jsx'
import App from './App.jsx'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import Rootlayout from './layout/rootlayout.jsx'
import Friend from './componants/friend.jsx'
import Timeline from './componants/timeline.jsx'
import Error from './componants/error.jsx'
let router = createBrowserRouter([
  {
    path: "/",
   element:<Rootlayout></Rootlayout>,
   children:[
    {
      path:'/',
      element:<Home></Home>
    },
    {
      path:'/timeline',
      element:<Timeline></Timeline>
    },
    {
      path:'/stat',
      element:<div>State </div>
    },
  {
    path: '/friend/:id',
    element: <Friend></Friend>
  }
   ],
   errorElement:<Error></Error>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
