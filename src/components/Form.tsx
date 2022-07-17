import React, { ReactNode, useState } from "react";
import { isDOMComponent } from "react-dom/test-utils";
import { useForm } from "react-hook-form";
import './Form.css';
import Tab from "./Tab";


type Abas = {
  titulo: string[];
  conteudo: string[];
};

export function Form(){ 

  const [num, setNum] = useState("1");

  const [conteudos, setConteudos] = useState([""]);
  const [titulos, setTitulos] = useState([""]);

  const {register, handleSubmit, formState: { errors }} = useForm<Abas>()

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const numero = event.target.value;
    setNum(numero);
  };

  const salvarTabs = handleSubmit((data) => {
    setTitulos(data.titulo)
    setConteudos(data.conteudo)
  })

  function list(loop: string) {
    let rows = [];
    let aux = parseInt(loop)
    for (let i = 0; i < aux; i++) {
      rows.push(i);
    }
    return rows;
  }


  let lista  = list(num);


  return (


    <div className="principal">
      <div>
            <div>
              <label htmlFor="numTabs" className="numTabs">Número de Tabs</label>
              <input placeholder="1" type="text" id="numTabs" className="texto" onChange={inputHandler}/>
              {num == '0'? <div className="error"> O valor deve ser diferente de zero.</div>: null }
              <hr />

            </div>
              <form onSubmit={salvarTabs}>
                {lista .map((id, index) => 
                  <div>
                    <div>
                      <label>Título: </label>
                      <input {...register(`titulo.${index}`, {required: true})} type="text" id="titulo" className="texto" />
                      {
                        errors.titulo?.[index] && <div className="error"> Campo obrigatório!</div>
                      }
                    </div>
                    <div>
                      <label>Conteúdo: </label>
                      <br></br>
                      <textarea {...register(`conteudo.${index}`, {required: true})}  id="conteudo" className="textoConteudo" />
                      {
                       errors.conteudo?.[index] && <div className="error"> Campo obrigatório!</div>
                      }
                    </div>
                  </div>)
                }
                  <div>
                    <input  type="submit" className="botao" value="Salvar" />
                  </div>
              </form>
      </div>
      <div className="tabs">
        <Tab topo={titulos} corpo={conteudos}/>
      </div>
    </div>
  );
};
export default Form;