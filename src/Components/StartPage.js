import React, { useCallback } from "react";
import Logo from '../resources/zapLogo.svg';

export default function StartPage(setStatus) {
    return (
        <div className="start_page">
            <div className="page_logo">
                <img src={Logo} alt="" />
            </div>
            <div className="page_title">
                ZapRecall
            </div>
            <div onClick={() => {setStatus.setStatus(true)}} className="page_buttom">
                <div className="buttom_text">Começa ai!!!</div>
            </div>
        </div>
    );
};