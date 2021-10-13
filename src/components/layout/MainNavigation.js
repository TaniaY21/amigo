import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>InspoQuotes🌟</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Daily Quote</Link>
          </li>
          <li>
            <Link to='/new-quote'>Add New Quote</Link>
          </li>
          {/* <li>
            <Link to='/favorites'>My Favorites</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
