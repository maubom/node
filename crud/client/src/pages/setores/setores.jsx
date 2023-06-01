import Navbar from "../../components/navbar/navbar";
import Setor from "../../components/setor/setores"
import { Link } from "react-router-dom";
import api from "../../components/api.js"
import { useEffect, useState } from "react";

function Setores(){
    const [data, setData] = useState([]);
    const getData = async  () =>{
        let res = await api.get("setores");
        setData(res.data);
    };
    useEffect(() => {
        getData();
    }, [setData]);
    return <>
        <Navbar />
        <div className="container-fluid mt-page form-impressora">
            <div className="ms-4 d-flex justify-content-between">
                <div>
                    <h2 className="d-inline">Setores</h2>
                    <Link className="btn btn-success ms-5 mb-2" to="/setores/incluir">Adicionar</Link>
                </div>
                
            </div>
        </div>
        <div className="mt-5 ms-4 me-4">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((d) => {
                            return <Setor key={d.id}
                                                id={d.id}
                                                nome={d.nome}                                                                                             
                                    />
                        })
                    }
                </tbody>
            </table>
        </div>
    </>
}

export default Setores;