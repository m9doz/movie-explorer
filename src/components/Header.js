import { NavLink } from "react-router-dom";

function Header() {
  // Style for the page you are currently on
  const activeStyle = {
    marginRight: "10px",
    marginLeft: "10px",
    color: "red", // This shows you which page is active
    textDecoration: "underline",
    fontSize: "18px"
  };

  // Style for the other pages
  const normalStyle = {
    marginRight: "10px",
    marginLeft: "10px",
    color: "blue",
    textDecoration: "underline",
    fontSize: "18px"
  };

  return (
    <header style={{ padding: "10px", backgroundColor: "#f0f0f0", borderBottom: "1px solid #ccc" }}>
      <h2 style={{ margin: "0 0 10px 0" }}>Movie Explorer</h2>
      <nav style={{ display: "flex", alignItems: "center" }}>
        <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : normalStyle)}>
          Main
        </NavLink>
        <span style={{ color: "#000" }}>|</span>
        
        <NavLink to="/about" style={({ isActive }) => (isActive ? activeStyle : normalStyle)}>
          About
        </NavLink>
        <span style={{ color: "#000" }}>|</span>
        
        <NavLink to="/login" style={({ isActive }) => (isActive ? activeStyle : normalStyle)}>
          Login
        </NavLink>
        <span style={{ color: "#000" }}>|</span>
        
        <NavLink to="/register" style={({ isActive }) => (isActive ? activeStyle : normalStyle)}>
          Register
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;