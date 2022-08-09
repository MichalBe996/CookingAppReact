import { BrowserRouter, Routes, Route } from "react-router-dom"

import App from "../App"
import FormSignup from "./FormSignup";
import Form from "./Form";



const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/sign-up" element={<Form/>}/>
            
            
            </Routes>

        </BrowserRouter>
    )
}

export default RouteSwitch;