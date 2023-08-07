import ReactDOM from 'react-dom/client'
import './index.css'
import './reset.css'
import {RouterProvider} from "react-router-dom";
import index from "./routing";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={index}/>
)
