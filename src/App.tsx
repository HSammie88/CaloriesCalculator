import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import ErrorPage from './pages/ErrorPage/ErrorPage'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <></>
            }
        ]
    }
])

const App = () => <RouterProvider router={router}/>

export default App