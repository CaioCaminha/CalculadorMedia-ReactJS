import React, { useState } from "react"
import {ReactComponent as GithubSvg} from "../../svgs/githubSvg.svg"
import {ReactComponent as CopyrightSvg} from "../../svgs/copyrightSvg.svg"
import {ReactComponent as LinkedinSvg} from "../../svgs/linkedinSvg.svg"
import "./style.css"
import { Link } from "react-router-dom"

export default function CalculatorComponent(){
    const [mediaNecessaria, setMediaNecessaria] = useState(0)
    const [notaPB, setNotaPB] = useState(0);
    const [notaGlobal, setNotaGlobal] = useState(0);
    const [notaSB, setNotaSB] = useState(0);
    const [notaFinal, setNotaFinal] = useState(0);
    const [aprovado, setAprovado] = useState(false);


    let _handleValidator = (notaFinal, mediaNecessaria) => {
         if(notaFinal >= mediaNecessaria || notaFinal <= 4){
             alert(`Parabéns, aprovado com média ${notaFinal}`);
            return setAprovado(true);
         }else{
             alert('Reprovado infelizmente')
             return setAprovado(false);
         }
    }

    return(
        <div id="component">
            <div className="calculator">
                <h2 className="title">Calcule Sua Média</h2>
                <form onSubmit={(event) => {
                    event.preventDefault();
                    setNotaFinal((Number(notaPB) + Number(notaGlobal) + Number(notaSB))/3); 
                    return _handleValidator(notaFinal, mediaNecessaria)
                }}>
                    
                    <input type="number" placeholder="Insira a média necessária" onChange={(event)=>{
                        event.preventDefault();
                        return setMediaNecessaria(event.target.value)
                    }} />
                    
                    <input type="number" placeholder="Nota do primeiro bimestre" onChange={(event)=>{
                        event.preventDefault();
                        return setNotaPB(event.target.value)
                    }} />
                    
                    <input type="number" placeholder="Nota da prova global" onChange={(event)=>{
                        event.preventDefault();
                        return setNotaGlobal(event.target.value)
                    }} />
                    
                    <input type="number" placeholder="Nota do segundo bimestre" onChange={(event)=>{
                        event.preventDefault();
                        return setNotaSB(event.target.value);
                    }}/>
                    <section className="section-signup-button"><button className="signup-button" type="submit"><p>CALCULAR</p></button></section>
                </form>
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