import React from "react";

function Item(props) {

    return (
        <li className="nav-item" >
            <a id="othersNavItemScroll" style={props.style} className="nav-link" href={props.linkIt}>{props.text}</a>
        </li>
    )
}


export default Item;