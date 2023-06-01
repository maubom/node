import { Link } from "react-router-dom";
import {BiTrash, BiEdit} from 'react-icons/bi';

function Impressora(props){
    return <tr>
        <td>{props.id_impressora}</td>
        <td>{props.nome}</td>
        <td>{props.fabricante}</td>
        <td>{props.modelo}</td>
        <td>{props.tipo}</td>        
        <td>
            {/* <div className="dropdown">
                <button className="btn btn-outline-secundary dropdown-toggle" type="button" 
                        data-bs-toggle="dropdown" aria-expanded="false">
                    Opções
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href={"/impressoras/editar/"+props.id_impressora} >Editar</a></li>
                    <li><a className="dropdown-item" href={"/impressoras/excluir/"+props.id_impressora} >Excluir</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="/#">Finalizar</a></li>
                    <li><a className="dropdown-item" href="/#">Reabrir</a></li>
                </ul>
            </div> */}
            <Link className="btn btn-info" to={"/impressoras/editar/"+props.id_impressora}><BiEdit /></Link>
            <Link className="btn btn-danger" to={"/impressoras/excluir/"+props.id_impressora}><BiTrash /></Link>
        </td>
    </tr>

}

export default Impressora;
