import  {  useState, useEffect } from "react";
import {Link, Navigate } from 'react-router-dom';
import Navbar from "../../components/navbar/navbar.jsx";
import api from "../../components/api.js"
import "../pages.css";

function FuncionarioIncluir(){
    const [nome, setNome] = useState('');
    const [setor, setSetor] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [sucesso, setSucesso] = useState('N');
   const [data, setData] = useState([]);
    const getData = async  () =>{
        let res = await api.get("setores");
        setData(res.data);
    };
    useEffect(() => {
        getData();
    }, [setData]);

    const handleClickButton = async () => {      
        setMensagem('');  
        if(nome === '' || setor === '' ) {
            setMensagem('Informe todos os campos');
        };
        await api.post("funcionarios",  {
            nome: nome,
            setor: setor
        })
        .then(({response}) => console.log(response))
        .catch(({response}) => console.log(response));
        setSucesso('S');        
    };   

    return <>
    <Navbar />
    
     <div className="container-fluid titulo">
        <div className="offset-lg-3 col-lg-6 " > 
            
            <h2 align="center">Cadastra Funcionario</h2>  
                    
            <form> 
                <div className="mb-3">    
                    <label htmlFor="floatingInput" className="form-label">Nome</label>            
                    <input onChange={(e)=>setNome(e.target.value)} type="text" className="form-control" id="floatingInput"  aria-describedby="nomeHelp" />                    
                </div>
                <div className="mb-3">
                         
                    {/* <label htmlFor="floatingInput" className="form-label">setor</label>            
                    <input onChange={(e)=>setSetor(e.target.value)} type="text" className="form-control" id="floatingInput"  aria-describedby="nomeHelp" />                    
                  */}
                     <select className="form-control" name="setor" id="" onChange={(e)=>setSetor(e.target.value)}>
                         {
                            data.map((s)=> {
                             return <option value={s.id}>{s.nome}</option>                        
                            })
                         }                      
                    </select> 
                 </div>
                
                <div className="text-center">
                    <Link to="/funcionarios" className="btn btn-outline-primary btn-acao" >Cancelar</Link>
                    <button onClick={handleClickButton} className="btn btn-primary btn-acao" type="button">Salvar</button>
                </div>

                {mensagem.length > 0 ? <div className="alert alert-danger mt-2" role="alert">{mensagem}</div> : null}
                {sucesso === 'S' ? <Navigate to='/funcionarios' /> : null}

            </form>        
        </div>
    </div>

    </>
}

export default FuncionarioIncluir;
