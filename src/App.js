import './App.css';
import Menubar from './component/Menubar';
import Header from './component/header';
import Sidebar from './component/sidebar';
import Footer from './component/footer';
import Mid from './component/Mid';
import{BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
      <Header></Header>
      <Menubar></Menubar>
      <div class="text-center">
     <img class="img-fluid" src="https://www.prosperity.com/application/files/thumbnails/small/1014/7801/9426/Nepal_header.jpg" />
    </div>
    
    <Sidebar></Sidebar>
    <Mid></Mid>
    <Footer></Footer>
    </BrowserRouter>

       </>

      
  );
}
export default App;