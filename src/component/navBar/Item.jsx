import React, { useState } from "react";

function Item(props) {

    // const [onscrollsItem, setOnScrollItem] = useState("othersNavItemScroll");

    // window.addEventListener("scroll", () => {
    //   if (window.scrollY >= 1450) {
    //     setOnScrollItem("othersNavItemScroll");
    //   } else {
    //     setOnScrollItem("othersNavItemScroll");
    //   }
    // });
  

    return (
        <li className="nav-item">
            <a id="othersNavItemScroll" className="nav-link" href={props.linkIt}>{props.text}</a>
        </li>
    )
}


export default Item;