function Nav(props) {

    return (

        <>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: `${props.bgclr}` }}>
                <div className="container">
                    <span className="navbar-brand">Your Brand</span>
                    <input type="text" placeholder="Search Here" className="" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#NavBar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="NavBar">
                        <ul className="navbar-nav">
                            <li className="nav-item mt-0 mb-0 m-5">
                                <a href="#" style={{ color: `${props.clr}` }} className="nav-link">{props.link1}</a>
                            </li>
                            <li className="nav-item mt-0 mb-0 m-5">
                                <a href="#" style={{ color: `${props.clr}` }} className="nav-link">{props.link2}</a>
                            </li>
                            <li className="nav-item mt-0 mb-0 m-5">
                                <a href="#" style={{ color: `${props.clr}` }} className="nav-link">{props.link3}</a>
                            </li>
                            <li className="nav-item mt-0 mb-0 m-5">
                                <a href="#" style={{ color: `${props.clr}` }} className="nav-link">{props.link4}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>

    )

}

export default Nav;