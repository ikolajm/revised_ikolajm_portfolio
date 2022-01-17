export default () => {
    return (
        <footer id="footer" className="footer">
            <div className="footer-content container">
                <div className="split-content">
                    <div className="left">
                        <h1>Thank you for stopping by!</h1>
                        <h2>If you are interested in learning more about me:</h2>
                        <div className="connect-links">
                            <div className="link">
                                <span>Add me on LinkedIn:</span>
                                <a href="">https://www.linkedin.com/in/jmi/</a>
                            </div>
                            <div className="link">
                                <span>Follow me on Github:</span>
                                <a href="">https://github.com/ikolajm</a>
                            </div>
                            <div className="link">
                                <span>Or email me at:</span>
                                <a href="">ikolajm@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <ul>
                            <li><a className="nav-link footer-link" href="#splash">Home</a></li>
                            <li><a className="nav-link footer-link" href="#about">About</a></li>
                            <li><a className="nav-link footer-link" href="#work">Work</a></li>
                            <li><a className="nav-link footer-link" href="#toolkit">Toolkit</a></li>
                            <li><a className="nav-link footer-link end" href="#repos">Repos</a></li>
                        </ul>
                    </div>
                </div>
                <div className="last-thoughts">
                    <div className="lt-container">
                        <span>Designed and built by Jacob Ikola</span>
                        <span>&#169; Jacob Ikola 2022</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}