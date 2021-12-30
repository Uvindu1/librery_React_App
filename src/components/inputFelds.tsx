import React from "react";
import "../assets/styles/main.css"
interface Prop{
    InputName: string;
}

const InputFelds: React.FC<Prop> = ({InputName}) =>{
    return(
        <div className="inputFeeld">
            <h4>{InputName}</h4>
            <input className="row" type="text" name='value'></input>
        </div>
    );
}
export default InputFelds;