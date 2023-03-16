import Search from "../Search";
import Footer from "../../Footer.js";
import "./VetHome.css";
import Video from "../../assets/video/vetHome.mp4";

function VetHome() {
 
  return (
    <>
      <div className="vetHomeContainer"> 
      <video src={Video} autoPlay loop muted />
      <div>
         <h1 className="vetTitle">Bienvenido a la pagina de veterinarios, aqui podras encontrar a tu veterinario favorito</h1>
       </div>        
        <div className="searchContainer">        
         <Search /> 
        </div>
        </div>       
      <Footer />
    </>
  );
}

export default VetHome;
