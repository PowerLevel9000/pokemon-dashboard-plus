import { Link } from "react-router-dom";

const Navigation = () => {
    const navItems = [
        { name: "Home", path: "/" },
        { name: "Favorite", path: "/favorites" },
        { name: "Search", path: "/search" }
    ];

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Pokedex</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {navItems.map((item, index) => (
                            <li className="nav-item" key={index}>
                                <Link className="nav-link" to={item.path}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;