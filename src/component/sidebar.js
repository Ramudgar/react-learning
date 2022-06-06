import { Component } from "react";


 
class Sidebar extends Component{
    render(){
        return( 
<div className="container mt-5">
<div className="row">
  <div className="col-sm-4">
    <div className="card">
    <img src={process.env.PUBLIC_URL+"images/hd.webp"} />
    {/* <img class="img-fluid" src="https://www.prosperity.com/application/files/thumbnails/small/1014/7801/9426/Nepal_header.jpg" /> */}
   
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div className="col-sm-8">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
</div>
                )
    }
}
export default Sidebar;