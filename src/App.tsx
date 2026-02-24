import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import MainPage from './pages/MainPage/MainPage'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <MainPage/>
            }
        ]
    }
])

const App = () => <RouterProvider router={router}/>

export default App