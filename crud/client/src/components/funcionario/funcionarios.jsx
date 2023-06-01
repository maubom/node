import  {  useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {BiTrash, BiEdit} from 'react-icons/bi';
//import api from "../../components/api.js"

function Funcionario(props){
   // const res =  api.get("setores/"+props.id);
    return <tr>
        <td>{props.id}</td>
        <td>{props.nome}</td>
        <td>{props.setor}</td>
        <td>
            <Link className="btn btn-info" to={"/funcionarios/editar/"+props.id}><BiEdit /></Link>
            <Link className="btn btn-danger" to={"/funcionarios/excluir/"+props.id}><BiTrash /></Link>
        </td>

    </tr>

}

export default Funcionario;