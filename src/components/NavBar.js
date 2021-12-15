import React from "react";
import { Link } from "react-router-dom";


function NavBar() {
    return (
        <div>
            <nav>
                <h1 class="Nav"></h1>
                <div>
                    <ul className="navitems">
                        {/* <li>
                            <Link to="/"></Link>
                        </li> */}

                        <li>
                            <Link to="/Profile">Profile</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;