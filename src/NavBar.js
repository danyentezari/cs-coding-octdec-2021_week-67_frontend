import logo from './logo.svg'

function NavBar() {
    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <img src={logo} alt="logo" width="64" /> 
                <span className="fs-4">Simple header</span>
            </a>

            <ul className="nav nav-pills">
                <li className="nav-item"><a href="http://localhost:3000" className="nav-link active">Home</a></li>
                <li className="nav-item"><a href="http://localhost:3000" className="nav-link">Features</a></li>
                <li className="nav-item"><a href="http://localhost:3000" className="nav-link">Pricing</a></li>
                <li className="nav-item"><a href="http://localhost:3000" className="nav-link">FAQs</a></li>
                <li className="nav-item"><a href="http://localhost:3000" className="nav-link">About</a></li>
            </ul>
            </header>
        </div>
    )
}

export default NavBar;