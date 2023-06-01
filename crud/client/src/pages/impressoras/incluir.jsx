import  {  useState } from "react";
import {Link, Navigate } from 'react-router-dom';
import Navbar from "../../components/navbar/navbar.jsx";
import api from "../../components/api.js"
import "../pages.css";

function ImpressoraIncluir(){
    const [nome, setNome] = useState('');
    const [fabricante, setFabricante] = useState('');
    const [modelo, setModelo] = useState('');
    const [tipo, setTipo] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [sucesso, setSucesso] = useState('N');

    /* const handleChangeValues = (value) =>{
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
    } ; */

    const handleClickButton = async () => {      
        setMensagem('');  
        if(nome === '' || fabricante === '' || modelo === '' || tipo === '') {
            setMensagem('Informe todos os campos');
        };
        await api.post("impressoras",  {
            nome: nome,
            fabricante: fabricante,
            modelo: modelo,
            tipo: tipo 
        })
        .then(({response}) => console.log(response))
        .catch(({response}) => console.log(response));
        setSucesso('S');        
    };   

    return <>
    <Navbar />
    
     <div className="container-fluid titulo">
        <div className="offset-lg-3 col-lg-6 " > 
            
            <h2 align="center">Cadastra Impressora</h2>  
                    
            <form> 
                <div className="mb-3">    
                    <label htmlFor="floatingInput" className="form-label">Nome</label>            
                    <input onChange={(e)=>setNome(e.target.value)} type="text" className="form-control" id="floatingInput"  aria-describedby="nomeHelp" />                    
                </div>
                <div className="mb-3">    
                    <label htmlFor="floatingInput" className="form-label">Fabricante</label>            
                    <input onChange={(e)=>setFabricante(e.target.value)} type="text" className="form-control" id="floatingInput"  aria-describedby="nomeHelp" />                    
                </div>
                <div className="mb-3">    
                    <label htmlFor="floatingInput" className="form-label">Modelo</label>            
                    <input onChange={(e)=>setModelo(e.target.value)} type="text" className="form-control" id="floatingInput"  aria-describedby="nomeHelp" />                    
                </div>
                <div className="mb-3">    
                    <label htmlFor="floatingInput" className="form-label">Tipo</label>            
                    <input onChange={(e)=>setTipo(e.target.value)} type="text" className="form-control" id="floatingInput"  aria-describedby="nomeHelp" />                    
                </div>
                <div className="text-center">
                    <Link to="/impressoras" className="btn btn-outline-primary btn-acao" >Cancelar</Link>
                    <button onClick={handleClickButton} className="btn btn-primary btn-acao" type="button">Salvar</button>
                </div>

                {mensagem.length > 0 ? <div className="alert alert-danger mt-2" role="alert">{mensagem}</div> : null}
                {sucesso === 'S' ? <Navigate to='/impressoras' /> : null}

            </form>        
        </div>
    </div>

    </>
}

export default ImpressoraIncluir;
