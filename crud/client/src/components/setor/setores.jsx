import { Link } from "react-router-dom";
import {BiTrash, BiEdit} from 'react-icons/bi';

function Setor(props){
    return <tr>
        <td>{props.id}</td>
        <td>{props.nome}</td>
        <td>
            <Link className="btn btn-info" to={"/setores/editar/"+props.id}><BiEdit /></Link>
            <Link className="btn btn-danger" to={"/setores/excluir/"+props.id}><BiTrash /></Link>
        </td>

    </tr>

}

export default Setor;