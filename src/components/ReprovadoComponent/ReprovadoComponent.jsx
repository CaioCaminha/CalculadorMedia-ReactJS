import React from "react"
import "./style.css"

import {ReactComponent as GithubSvg} from "../../svgs/githubSvg.svg"
import {ReactComponent as CopyrightSvg} from "../../svgs/copyrightSvg.svg"
import {ReactComponent as LinkedinSvg} from "../../svgs/linkedinSvg.svg"

export default function ReprovadoComponent(){
    return(
        <div className="reprovado-component">
            <div className="reprovado-box">
                <h1 className="title-reprovado">Infelizmente você foi reprovado!</h1>
                <p className="x1">X</p>
                <p className="x2">X</p>
                
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