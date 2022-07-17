import React, { ReactNode, useState } from "react";
import { isDOMComponent } from "react-dom/test-utils";
import { useForm } from "react-hook-form";
import './Tab.css';

interface Tab {
  topo: string[],
  corpo: string[]
}

export function Tab(props : Tab) {
  
  const [escolhida, setEscolhida] = useState("0");
  const j = ""+props.topo.length;

  function list(loop: string) {
    let rows = [];
    let aux = parseInt(loop)
    for (let i = 0; i < aux; i++) {
      rows.push(i);
    }
    return rows;
  }


  let lista = list(j);

    return (
      <div className="tab">
        {lista.map((id, index) => 
        <button className="botoes" onClick={() =>  setEscolhida(""+index)}>{props.topo[index]}</button>
        )
        }
        <div className="corpos">
        <p>{props.corpo[parseInt(escolhida)] }</p>
        </div>
      </div>
    );
  };
export default Tab;