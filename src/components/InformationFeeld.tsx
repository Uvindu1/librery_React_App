import React from "react";
import "../assets/styles/main.css"

const InformationFeeld = () => {
    return (
        <div className="infotmatinFeeld">
            <div className="dataSenter">
                <div id="index">1.</div>
                <div className="allName">book 1 Name</div>
            </div>
            <div className="buttonSenter">
                <div className="editBTN"><i className="fas fa-edit"></i></div>
                <div className="deleteBTN"><i className="far fa-trash-alt"></i></div>
            </div>
        </div>
    );
}
export default InformationFeeld;