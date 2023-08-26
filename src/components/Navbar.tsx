function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top shadow-sm bg-white" id="navBar">
            <div className="container">
                <a className="navbar-brand" href="index.php">
                    <svg width="34" height="46" viewBox="0 0 34 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_82_4)">
                    <path d="M7.13747 19.4613V30.7046C7.13747 32.6202 7.92722 34.4573 9.33298 35.8118C10.7387 37.1663 12.6454 37.9273 14.6334 37.9273C16.6215 37.9273 18.5281 37.1663 19.9338 35.8118C21.3396 34.4573 22.1293 32.6202 22.1293 30.7046V23.3884H29.2631V30.7046C29.2631 34.4437 27.7215 38.0296 24.9776 40.6735C22.2337 43.3174 18.5121 44.8028 14.6315 44.8028C10.751 44.8028 7.02942 43.3174 4.28548 40.6735C1.54153 38.0296 0 34.4437 0 30.7046V12.5876H33.3406V19.4613H7.13747Z" fill="#4D4E4E"/>
                    <path d="M3.5678 8.65872C5.53824 8.65872 7.1356 7.11959 7.1356 5.22098C7.1356 3.32236 5.53824 1.78323 3.5678 1.78323C1.59736 1.78323 0 3.32236 0 5.22098C0 7.11959 1.59736 8.65872 3.5678 8.65872Z" fill="#C83898"/>
                    <path d="M14.6315 8.65872C16.602 8.65872 18.1993 7.11959 18.1993 5.22098C18.1993 3.32236 16.602 1.78323 14.6315 1.78323C12.6611 1.78323 11.0637 3.32236 11.0637 5.22098C11.0637 7.11959 12.6611 8.65872 14.6315 8.65872Z" fill="#F79F28"/>
                    <path d="M25.6952 8.65872C27.6657 8.65872 29.263 7.11959 29.263 5.22098C29.263 3.32236 27.6657 1.78323 25.6952 1.78323C23.7248 1.78323 22.1274 3.32236 22.1274 5.22098C22.1274 7.11959 23.7248 8.65872 25.6952 8.65872Z" fill="#3778B8"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_82_4">
                    <rect width="33.3406" height="45.4644" fill="white" transform="translate(0 0.267792)"/>
                    </clipPath>
                    </defs>
                    </svg>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="bar-1"></span>
                <span className="bar-2"></span>
                <span className="bar-3"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <button className="close-mobile-menu" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                &times;
                </button>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Courses
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="">Techie Mod</a></li>
                        <li><a className="dropdown-item" href="">Front-end Dev</a></li>
                        <li><a className="dropdown-item" href="">Back-end Dev</a></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="">About Us</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="">Blog</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="">Contact Us</a>
                    </li>
                </ul>

                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link btn btn-white" href="https://lms.techsyiq.com/login/">Log In</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link btn btn-outline-main" href="#">Apply Now</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        
    );
}

export default Navbar;
