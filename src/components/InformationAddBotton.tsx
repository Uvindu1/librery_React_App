import React from "react";
import "../assets/styles/main.css";
interface Prop{
    BTNName: string;
}

const InformationAddBotton: React.FC<Prop> = ({BTNName}) =>{
    return(
        <div>
            <button type="submit" ><i className="fas fa-plus">{BTNName}</i></button>
        </div>
    );
}

export default InformationAddBotton;