import { Link } from "react-router-dom";
import { HeaderWallet } from ".";

const Header = () => {
  /* This should open a dialog for user to change
  their wallet address to a new one */
  return (
    <header className="header">
      <div className="header__search">
        <Link to="/">
          <img src="./images/logo.svg" alt="NFT Logo" />
        </Link>
        <div className="header__search-box">
          <img src="./images/search.svg" alt="Search" />
          <input type="text" placeholder="Search Foundation..." />
        </div>
      </div>
      {/* Navigation for the app */}
      <div className="header__navigation">
        <p className="header__navigation-text">
          <Link to="/new">New</Link>
        </p>
        <p className="header__navigation-text">
          <Link to="/about">About</Link>
        </p>
        <p className="header__navigation-text">
          <Link to="/blog">Blog</Link>
        </p>
      </div>
      <HeaderWallet />
    </header>
  );
};

export default Header;
