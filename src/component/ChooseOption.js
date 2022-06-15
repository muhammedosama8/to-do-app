import React from "react";
const ChooseOption = ({handleChoose, checkOptions}) => (
    <div className="container">
        <div className=" chooseOption">
            <button onClick={handleChoose}
            disabled={checkOptions.length<=0}>
            What Should i do?
            </button>
        </div>
    </div>
);

export default ChooseOption;