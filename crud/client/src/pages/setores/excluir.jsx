import { useEffect, useState } from "react";
import {Link, Navigate, useParams } from 'react-router-dom';
import Navbar from "../../components/navbar/navbar.jsx";
import api from "../../components/api.js"
import "../pages.css";

function SetorExcluir(){
    const [nome, setNome] = useState('')
    const [mensagem, setMensagem] = useState('');
    const [sucesso, setSucesso] = useState('N');
    const {id} = useParams();

    useEffect(()=>{        
            api.get("setores/"+id).then(res => {                
                setNome(res.data.nome)
            })
    },[id]);

    const handleClickButton = async () => {      
        setMensagem('');       
        await api.delete("setores/"+id)
        .then(({response}) => console.log(response))
        .catch(({response}) => console.log(response));
        setSucesso('S');        
    };   

    return <>
    <Navbar />
    
     <div className="container-fluid titulo">
        <div className="offset-lg-3 col-lg-6 " > 
            
            <h2 align="center">Excluir Setor</h2>  
                    
            <form> 
                <div className="mb-3">    
                    <label htmlFor="floatingInput" className="form-label">Nome</label>            
                    <input onChange={(e)=>setNome(e.target.value)} type="text" defaultValue={nome} className="form-control" id="floatingInput"  aria-describedby="nomeHelp" />                    
                </div>
                <div className="text-center">
                    <Link to="/setores" className="btn btn-outline-primary btn-acao" >Cancelar</Link>
                    <button onClick={handleClickButton} className="btn btn-primary btn-acao" type="button">Excluir</button>
                </div>

                {mensagem.length > 0 ? <div className="alert alert-danger mt-2" role="alert">{mensagem}</div> : null}
                {sucesso === 'S' ? <Navigate to='/setores' /> : null}

            </form>        
        </div>
    </div>

    </>
}

export default SetorExcluir;
