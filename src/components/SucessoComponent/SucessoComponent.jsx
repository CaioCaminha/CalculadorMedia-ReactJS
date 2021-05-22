import React from "react";
import "./style.css"

import {ReactComponent as GithubSvg} from "../../svgs/githubSvg.svg"
import {ReactComponent as CopyrightSvg} from "../../svgs/copyrightSvg.svg"
import {ReactComponent as LinkedinSvg} from "../../svgs/linkedinSvg.svg"
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
            <footer>
                    <CopyrightSvg className="footer-copyright"/>
                    <a href="https://github.com/CaioCaminha"><GithubSvg className="footer-github"/></a>
                    <a href="https://www.linkedin.com/in/caio-caminha-53b2a6205/"><LinkedinSvg className="footer-linkedin"/></a>
                    <p>By Caio Freitas Caminha</p>
            </footer>
        </div>
    );
}