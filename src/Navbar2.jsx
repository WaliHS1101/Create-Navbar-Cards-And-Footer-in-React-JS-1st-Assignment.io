function Navbar2(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <span className="navbar-brand">New Nav</span>
                <input type="text" placeholder="Search Here 2" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#NavBar2">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="NavBar2">
                    <ul className="navbar-nav">
                        {
                            props.Links2.map(
                                (elements) => {
                                    return (
                                        <li className="nav-item mt-0 mb-0 m-5">
                                            <a href="#" className="nav-link">{elements}</a>
                                        </li>
                                    )
                                }
                            )
                        }
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default Navbar2;