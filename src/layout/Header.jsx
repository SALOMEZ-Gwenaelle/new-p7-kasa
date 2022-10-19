import { NavLink, Link } from 'react-router-dom'
import Logo from './../assets/logoHeader.png'

function Header(){
    return (
        <header> 
          <div className="headerContainer">
            <Link to="/">
              <img src={Logo} alt='Kasa' className='kasaLogo' />
            </Link>
            <nav>
              <ul>
                <li> <NavLink to='/' end className={(nav) => (nav.isActive ? 'active' : '')}>Accueil</NavLink></li>
                <li> <NavLink to='/about' className={(nav) => (nav.isActive ? 'active' : '')}>À Propos</NavLink></li>
              </ul>
            </nav>
          </div>
        </header>
      );
    
}

export default Header;