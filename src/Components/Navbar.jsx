

const Navbar = () => {
    return (
        <>
            <div className="navbar px-5 ">
                <div className="navbar-start">
                    <div className="dropdown rounded-sm p-2">
                        <div tabIndex={0} role="button" className="">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="#071739">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Homepage</a></li>
                            <li><a>Portfolio</a></li>
                            <li><a>About</a></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-end">
                    <div className="navbar-center">
                        <a className="btn btn-ghost text-md font-poppins text-[#071739] ">Diyogusti Putra Setiwan</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar