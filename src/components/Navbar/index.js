import {Link} from 'react-router-dom'
import {NavbarContainer, Logo} from './styleComponent'

const Navbar = () => (
  <NavbarContainer>
    <Link to="/">
      <Logo
        src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
        alt="website logo"
      />
    </Link>
  </NavbarContainer>
)
export default Navbar
