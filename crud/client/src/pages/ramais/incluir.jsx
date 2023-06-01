import  {  useState } from "react";
import {Link, Navigate } from 'react-router-dom';
import Navbar from "../../components/navbar/navbar.jsx";
import api from "../../components/api.js"
import "../pages.css";

function RamalIncluir(){
    const [nome, setNome] = useState('');
    const [setor, setSetor] = useState('');
    const [ramal, setRamal] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [sucesso, setSucesso] = useState('N');

    const handleClickButton = async () => {      
        setMensagem('');  
        if(nome === '' || setor === '' || ramal === '') {
            setMensagem('Informe todos os campos');
        };
        await api.post("ramais",  {
            nome: nome,
            setor: setor,            
            ramal: ramal 
        })
        .then(({response}) => console.log(response))
        .catch(({response}) => console.log(response));
        setSucesso('S');        
    };   

    return <>
    <Navbar />
    
     <div className="container-fluid titulo">
        <div className="offset-lg-3 col-lg-6 " > 
            
            <h2 align="center">Cadastra Ramal</h2>  
                    
            <form> 
                <div className="mb-3">    
                    <label htmlFor="floatingInput" className="form-label">Nome</label>            
                    <input onChange={(e)=>setNome(e.target.value)} type="text" className="form-control" id="floatingInput"  aria-describedby="nomeHelp" />                    
                </div>
                <div className="mb-3">    
                    <label htmlFor="floatingInput" className="form-label">setor</label>            
                    <input onChange={(e)=>setSetor(e.target.value)} type="text" className="form-control" id="floatingInput"  aria-describedby="nomeHelp" />                    
                </div>
                
                <div className="mb-3">    
                    <label htmlFor="floatingInput" className="form-label">Ramal</label>            
                    <input onChange={(e)=>setRamal(e.target.value)} type="text" className="form-control" id="floatingInput"  aria-describedby="nomeHelp" />                    
                </div>
                <div className="text-center">
                    <Link to="/ramais" className="btn btn-outline-primary btn-acao" >Cancelar</Link>
                    <button onClick={handleClickButton} className="btn btn-primary btn-acao" type="button">Salvar</button>
                </div>

                {mensagem.length > 0 ? <div className="alert alert-danger mt-2" role="alert">{mensagem}</div> : null}
                {sucesso === 'S' ? <Navigate to='/ramais' /> : null}

            </form>        
        </div>
    </div>

    </>
}

export default RamalIncluir;
