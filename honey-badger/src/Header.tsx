import honey_badger_logo from './assets/honey_badger_logo.svg';

function Header() {
  return (
    <header className="header">
        <img src={honey_badger_logo} className="header-icon" alt="Honey Badger Icon" width="200" height="200"/>
      <h1>Honey Badger</h1>
    </header>
  );
}

export default Header;