import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../../Button';


function OwnerHome() {
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
    <div>OwnerHome</div>
    <Link to='/pages/OwnerProfile/OwnerPublicProfile'>
          {button && <Button buttonStyle='btn--outline' onClick={click}>MOSTRAR PERFIL</Button>}
    </Link>
    </>
  )
}

export default OwnerHome