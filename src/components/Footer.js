import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { FaPaw, FaTiktok} from 'react-icons/fa';
import {AiOutlineInstagram, AiOutlineYoutube} from 'react-icons/ai';
import {FiFacebook, FiTwitter} from 'react-icons/fi';
import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';


function Footer() {
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
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Suscribete a nuestro boletin GoPaw para recibir nuestros ultimas actualizaciones!
        </p>
        <p className='footer-subscription-text'>
          Puedes cancelar tu suscripcion en cualquier momento.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Sobre nosotros</h2>
            <Link to='./pages/ContactPage'>Como funciona</Link>          
            
            <Link to='./pages/TermsAndConditions' onClick={click}>Terminos y condiciones</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contactanos</h2>
            <Link to='./pages/ContactInfo'>Contacto</Link>
            <Link to='./pages/ContactHelp'>Ayuda</Link>
            
          </div>
        </div>
       
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              GoPaw
              <FaPaw />
            </Link>
          </div>
          <small className='website-rights'>We do not own any of the copyrights © 2023</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FiFacebook />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <AiOutlineInstagram />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <AiOutlineYoutube />
            </Link>            
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FiTwitter />
            </Link>
            <Link
              className='social-icon-link tiktok'
              to='/'
              target='_blank'
              aria-label='TikTok'
            >
              <FaTiktok />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;