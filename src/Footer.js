import logo from './logo.svg'

function Footer() {
    return (
        <div className="container">
            <footer className="row row-cols-5 py-5 my-5 border-top">
                <div className="col">
                <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
                    <img src={logo} alt="Logo" width="64" />
                </a>
                <p className="text-muted">© 2021</p>
                </div>

                <div className="col">

                </div>

                <div className="col">
                <h5>Section</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="http://localhost:3000" className="nav-link p-0 text-muted">Home</a></li>
                    <li className="nav-item mb-2"><a href="http://localhost:3000" className="nav-link p-0 text-muted">Features</a></li>
                    <li className="nav-item mb-2"><a href="http://localhost:3000" className="nav-link p-0 text-muted">Pricing</a></li>
                    <li className="nav-item mb-2"><a href="http://localhost:3000" className="nav-link p-0 text-muted">FAQs</a></li>
                    <li className="nav-item mb-2"><a href="http://localhost:3000" className="nav-link p-0 text-muted">About</a></li>
                </ul>
                </div>

                <div className="col">
                <h5>Section</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="http://localhost:3000" className="nav-link p-0 text-muted">Home</a></li>
                    <li className="nav-item mb-2"><a href="http://localhost:3000" className="nav-link p-0 text-muted">Features</a></li>
                    <li className="nav-item mb-2"><a href="http://localhost:3000" className="nav-link p-0 text-muted">Pricing</a></li>
                    <li className="nav-item mb-2"><a href="http://localhost:3000" className="nav-link p-0 text-muted">FAQs</a></li>
                    <li className="nav-item mb-2"><a href="http://localhost:3000" className="nav-link p-0 text-muted">About</a></li>
                </ul>
                </div>

                <div className="col">
                <h5>Section</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="http://localhost:3000" className="nav-link p-0 text-muted">Home</a></li>
                    <li className="nav-item mb-2"><a href="http://localhost:3000" className="nav-link p-0 text-muted">Features</a></li>
                    <li className="nav-item mb-2"><a href="http://localhost:3000" className="nav-link p-0 text-muted">Pricing</a></li>
                    <li className="nav-item mb-2"><a href="http://localhost:3000" className="nav-link p-0 text-muted">FAQs</a></li>
                    <li className="nav-item mb-2"><a href="http://localhost:3000" className="nav-link p-0 text-muted">About</a></li>
                </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer;