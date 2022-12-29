import React from "react";
import Nav3 from "./Navs/Nav3";
import PostColumn from "./colums/PostColumn";
import AdColumn from "../components/colums/AdColumn";

function MainContainer(){   
    return(
        <div className="d-flex" style={{height: "100%"}}>
            <Nav3/>
            <PostColumn/>
            <AdColumn/>
        </div> 
    )
}

export default MainContainer;