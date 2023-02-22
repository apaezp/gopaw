import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../../Button';


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
    <div>VetHome</div>
    <Link to='/pages/VetProfile/VetPublicProfile'>
          {button && <Button buttonStyle='btn--outline' onClick={click}>MOSTRAR PERFIL</Button>}
    </Link>
    </>
  )
}

export default VetHome