import Events from "./Events";
import Routine from "./Routine";
import Gallery from "./gallery";
import Home from "./home";
import Register from "./rigister";
import {Routes,Route} from "react-router-dom";


const Mid=()=>{
    return(
<>
<Routes >
<Route path="/event" element={<Events/>}></Route>
<Route path="/routine" element={<Routine/>}></Route>
<Route path="/gallery" element={<Gallery/>}></Route>
<Route path="/" element={<Home/>}></Route>
<Route path="/register" element={<Register/>}></Route>
</Routes>
</>
    )
};
export default Mid;