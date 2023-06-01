import { Link } from "react-router-dom";
import {BiTrash, BiEdit} from 'react-icons/bi';

function Ramais(props){
    return <tr>
        <td>{props.id}</td>
        <td>{props.nome}</td>
        <td>{props.setor}</td>
        <td>{props.ramal}</td>
        <td>
            <Link className="btn btn-info" to={"/ramais/editar/"+props.id}><BiEdit /></Link>
            <Link className="btn btn-danger" to={"/ramais/excluir/"+props.id}><BiTrash /></Link>
        </td>

    </tr>

}

export default Ramais;