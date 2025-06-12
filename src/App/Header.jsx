import Typewriter from 'typewriter-effect';
import Navbar from './Navbar.jsx';

import logo from '../assets/logo.png';

function Header({ className }) {
  return (
    <header className={className}>
      <div className="hidden xl:flex items-center gap-x-2">
        <img className="h-10 w-10" src={logo} alt="Logo" />
        <h1 className="text-xl">
          <Typewriter
            options={{
              strings: ['Javier HM', 'Developer'],
              autoStart: true,
              loop: true,
              pauseFor: 1000,
            }}
          />
        </h1>
      </div>

      <Navbar className='fixed top-8 left-1/2 -translate-x-1/2 w-fit' />
    </header>
  );
}

export default Header;
