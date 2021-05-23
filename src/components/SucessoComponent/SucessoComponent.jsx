import React from "react";
import "./style.css"

import {ReactComponent as Festa1Svg} from "../../svgs/festa1.svg"
import {ReactComponent as Festa2Svg} from "../../svgs/festa2.svg"

export default function SucessoComponent(props){
    return(
        <div className="aprovado-component">
            <div className="aprovado-box">
                <h1 className="title-sucesso"> Parabéns, você foi aprovado!</h1>
                {/** Pegar a propriedade notaFinal e apresentar na tag p*/}
                <p className="text-body">
                    
                </p>
                <Festa1Svg className="festa1-svg"/>
                <Festa2Svg className="festa2-svg"/>
            </div>
        </div>
    );
}