import Navbar from "../../components/navbar/navbar";
import Impressora from "../../components/impressora/impressora"
import { Link } from "react-router-dom";
import "../pages.css"
import api from "../../components/api.js"
import { useEffect, useState } from "react";

function Impressoras(){

    //const impres =  api.get("http://localhost:8800/").then;
    const [data, setData] = useState([]);

    const getData = async  () =>{
        let res = await api.get("impressoras");
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
                    <h2 className="d-inline">Impressoras</h2>
                    <Link className="btn btn-success ms-5 mb-2" to="/impressoras/incluir">Adicionar</Link>
                </div>
                {/* <div>
                    <div className="form-control d-inline me-3">
                        <select name="status" id="status">
                            <option value="">Status</option>
                            <option value="A">Aberto</option>
                            <option value="F">Finalizado</option>
                        </select>
                    </div>
                    <button className="btn btn-primary">Filtrar</button>
                </div> */}
            </div>
        </div>

        <div className="mt-5 ms-4 me-4">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Fabricante</th>
                        <th scope="col">Modelo</th>
                        <th scope="col">Tipo</th> 
                        <th scope="col">Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((imp) => {
                            return <Impressora key={imp.id}
                                                id_impressora={imp.id}
                                                nome={imp.nome}
                                                fabricante={imp.fabricante}
                                                modelo={imp.modelo}
                                                tipo={imp.tipo}                                                                                              
                                    />
                        })
                    }
                </tbody>
            </table>
        </div>
    </>
}

export default Impressoras;