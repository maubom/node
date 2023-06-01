import Navbar from "../../components/navbar/navbar";
import Funcionario from "../../components/funcionario/funcionarios"
import { Link } from "react-router-dom";
import api from "../../components/api.js"
import { useEffect, useState } from "react";
import "../pages.css";

function Funcionarios(){
    const [data, setData] = useState([]);
    const getData = async  () =>{
        let res = await api.get("/funcionarios");
        setData(res.data);
    };
    useEffect(() => {
        getData();
    }, [setData]);
    return <>
        <Navbar />
        <div className="container-fluid mt-page form-page">
            <div className="ms-4 d-flex justify-content-between">
                <div>
                    <h2 className="d-inline">Funcionarios</h2>
                    <Link className="btn btn-success ms-5 mb-2" to="/funcionarios/incluir">Adicionar</Link>
                </div>
                
            </div>
        </div>
        <div className="mt-5 ms-4 me-4">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Setor</th>                        
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((d) => {
                            return <Funcionario key={d.id}
                                                id={d.id}
                                                nome={d.nome}
                                                setor={d.setore.nome}                                                                                                                                           
                                    />
                        })
                    }
                </tbody>
            </table>
        </div>
    </>
}

export default Funcionarios;