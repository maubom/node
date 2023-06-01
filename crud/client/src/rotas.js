import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard"
import Impressoras from "./pages/impressoras/impressoras"
import ImpressoraEditar from "./pages/impressoras/editar";
import ImpressoraIncluir from "./pages/impressoras/incluir";
import ImpressoraExcluir from "./pages/impressoras/excluir";
import Ramais from "./pages/ramais/ramais";
import RamalIncluir from './pages/ramais/incluir';
import RamalEditar from './pages/ramais/editar';
import RamalExcluir from './pages/ramais/excluir';
import Setores from "./pages/setores/setores";
import SetorIncluir from './pages/setores/incluir';
import SetorEditar from './pages/setores/editar';
import SetorExcluir from './pages/setores/excluir';
import Funcionarios from "./pages/funcionarios/funcionarios";
import FuncionarioIncluir from './pages/funcionarios/incluir';
import FuncionarioEditar from './pages/funcionarios/editar';
import FuncionarioExcluir from './pages/funcionarios/excluir';

function Rotas(){
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/impressoras" element={<Impressoras />} />
            <Route path="/impressoras/incluir" element={<ImpressoraIncluir />} />
            <Route path="/impressoras/editar/:id" element={<ImpressoraEditar />} />
            <Route path="/impressoras/excluir/:id" element={<ImpressoraExcluir />} />
            <Route path="/ramais" element={<Ramais />} />
            <Route path="/ramais/incluir" element={<RamalIncluir />} />
            <Route path="/ramais/editar/:id" element={<RamalEditar />} />
            <Route path="/ramais/excluir/:id" element={<RamalExcluir />} />
            <Route path="/setores" element={<Setores />} />
            <Route path="/setores/incluir" element={<SetorIncluir />} />
            <Route path="/setores/editar/:id" element={<SetorEditar />} />
            <Route path="/setores/excluir/:id" element={<SetorExcluir />} />
            <Route path="/funcionarios" element={<Funcionarios />} />
            <Route path="/funcionarios/incluir" element={<FuncionarioIncluir />} />
            <Route path="/funcionarios/editar/:id" element={<FuncionarioEditar />} />
            <Route path="/funcionarios/excluir/:id" element={<FuncionarioExcluir />} />
        </Routes>
    </BrowserRouter>

}

export default Rotas;