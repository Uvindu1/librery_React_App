import React from "react";
import "../../src/assets/styles/main.css";
import image from "../assets/images/anna-hunko-ajE5goOGzZc-unsplash.jpg";

const  WellComeImg = () =>{
    return(
        <div>
            <img className="wallpaper" src={image} alt='wallpaper'/>
        </div>
    );    
}
export default WellComeImg;