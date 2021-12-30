import React from "react";
import '../assets/styles/main.css';

interface prop {
    HName: string;
}

const CreateArea: React.FC<prop> = ({ HName }) => {
    return (

        <div>
            <div className="CAH_name"><u>{HName}</u></div>
            <div className="closs_BTN"><i className="far fa-times-circle"></i></div>
        </div>

    );
}
export default CreateArea;

