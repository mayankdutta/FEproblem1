import "./navbar.styles.css";

const Navbar = () => {
  const handleReset = () => window.location.reload(true);
  return (
    <div className="Navbar">
      <div className="navitems">
        <div className="navitem">Geek Trust Home</div>
        <div className="navitem" onClick={handleReset}>Reset</div>
      </div>
    </div>
  );
};

export default Navbar;
