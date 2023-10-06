import "./Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav() {
    const svgStyle = {
        fill: '#abefe6',
        enableBackground: 'new 0 0 512 512',
        xmlSpace: 'preserve',
        width: '40px', // Set the width to your desired size
        height: '40px', // Set the height to your desired size
    };

    const pathStyle = {
        fill: '#abefe6',
    };
    return (
        <div>
            <header className="header">
                <nav className="navbar">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={svgStyle}>
                        <path style={pathStyle} d="M474.081 256c-43.526 75.263-124.888 125.905-218.077 125.905-38.729 0-75.412-8.74-108.189-24.373C101.709 335.565 63.353 299.985 37.914 256c43.526-75.263 124.888-125.905 218.09-125.905 93.189 0 174.551 50.642 218.077 125.905z" />
                        {/* Rest of your SVG path elements */}
                    </svg>
                    <a></a>
                    <a></a>
                    <a href="#">About</a>
                    <a href="#">Signup</a>
                    <i className="bx bx-menu" id="menu-icon"></i>
                </nav>
            </header>
            <div className="nav-bg"></div>
        </div>
    );
}

export default Nav;