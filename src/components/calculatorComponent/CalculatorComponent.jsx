import React from "react"
import "./style.css"
import { useHistory } from "react-router-dom"

export default function CalculatorComponent(){
   
    let mediaNecessaria = 7;
    let notaPB = 0;
    let notaSB = 0;
    let notaGlobal = 0;
    let notaFinal = 0;
    const history = useHistory();

    let _handleValidator = (notaFinal, mediaNecessaria) => {
         if(notaFinal >= mediaNecessaria){
            alert(`Parabéns, aprovado com média ${Math.round(notaFinal * 100) / 100}`);
            return history.push('/aprovado')
         }else{
            alert(`Reprovado infelizmente com média ${Math.round(notaFinal * 100) / 100}`);
             return history.push('/reprovado');
         }
    }

    return(
        <div id="component">
            <div className="calculator">
                <h2 className="title">Calcule Sua Média</h2>
                <form onSubmit={(event) => {
                    event.preventDefault();
                    notaFinal = (Number(notaPB) + Number(notaGlobal) + Number(notaSB))/3; 
                    return _handleValidator(Number(notaFinal), Number(mediaNecessaria));
                }}>
                    
                    <input type="number" placeholder="Nota do primeiro bimestre" onChange={(event)=>{
                        event.preventDefault();
                        return notaPB = event.target.value;
                    }} />
                    
                    <input type="number" placeholder="Nota da prova global" onChange={(event)=>{
                        event.preventDefault();
                        return notaGlobal = event.target.value;
                    }} />
                    
                    <input type="number" placeholder="Nota do segundo bimestre" onChange={(event)=>{
                        event.preventDefault();
                        return notaSB = event.target.value;
                    }}/>
                    <section className="section-signup-button"><button className="signup-button" type="submit"><p>CALCULAR</p></button></section>
                </form>
            </div>
        </div>
    );
}