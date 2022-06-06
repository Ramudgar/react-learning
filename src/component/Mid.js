import Events from "./Events";
import Routine from "./Routine";
import Gallery from "./gallery";
import Home from "./home";
import {Routes,Route} from "react-router-dom";


const Mid=()=>{
    return(
<>
<Routes >
<Route path="/event" element={<Events/>}></Route>
<Route path="/routine" element={<Routine/>}></Route>
<Route path="/gallery" element={<Gallery/>}></Route>
<Route path="/" element={<Home/>}></Route>
</Routes>
</>
    )
};
export default Mid;