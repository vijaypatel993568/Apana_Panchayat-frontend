import { NavLink } from 'react-router-dom';
import links from '../utils/links';

const NavLinks = ({ toggleSidebar }) => {
  return (
    <div className='nav-links'>
      {links.map((link) => {
        const { text, path, id, icon } = link;
        return (
          <NavLink
            to={path}
            className='nav-link'
            key={id}
            onClick={toggleSidebar}
            end
          >
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
export default NavLinks;
