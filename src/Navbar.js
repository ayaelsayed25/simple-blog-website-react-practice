import {Link} from 'react-router-dom';
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Daisies Blog</h1>
            <img src="https://image.flaticon.com/icons/png/512/1531/1531016.png" alt="" className="icon" width="30"
            height="30"/>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: "#4FFFAF",
                    border: "2 px",
                    borderRadius: "5px",
                    padding: "6px"
                }}>New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;