import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Search from '../Search'
import Footer from "../../Footer.js"
import TopVetReviews from "../../TopVetReviews"
import "./VetHome.css"


function VetHome() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
 

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);


  return (
    <>
    <div className='VetHomeContainer'> 

    <Search />     
    <Link to='/pages/VetProfile/VetPublicProfile' >
          {button && <button type="button" className="btn btn-dark" onClick={click}>Ver perfil</button>}
    </Link>
    <Footer />
    </div>
    </>
  )
}

export default VetHome