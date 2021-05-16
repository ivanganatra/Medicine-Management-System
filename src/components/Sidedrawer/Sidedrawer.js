import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Sidedrawer = ({show}) => {
    const [closing, setClosing] = useState(false);

    return (
        <div className={"Sidedrawer" + (closing ? "Sidedrawer_Close" : "Sidedrawer_Open")}>
            <ul>
                <li>
                    <Link to="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/orders">
                        Orders
                    </Link>
                </li>
                {
                    
                }
            </ul>
        </div>
    )
}

export default Sidedrawer;