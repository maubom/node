import Navbar from "../../components/navbar/navbar.jsx";
import Grafico from "../../components/grafico/grafico"

function Dashboard(){
    const dados_cli = [
        ["Cliente","Vendas"],
        ["Microsoft", 5200],
        ["IBM", 4900],
        ["Apple", 8250],
        ["Goole", 2140],
        
    ];

    const dados_vendas = [
        ["1","Vendas"],
        ["2", 5200],
        ["3", 4900],
        ["4", 8250],
        ["5", 2140],
        ["6", 5200],
        ["7", 4900],
        ["8", 8250],
        ["9", 2140],
        ["10", 4900],
        ["11", 8250],
        ["12", 2140]
    ];

    const dados_produtos = [
        ["Produto","Vendas"],
        ["Teclado",5200],
        ["Monitor",4900],
        ["HD",4200],
        ["Mouse",3250],
        ["Webcam",2142]
        
    ]

    const dados_cidades = [
        ["Cidade","Vendas"],
        ["São paulo",5200],
        ["Rio de Janeiro",4900],
        ["Campinas",4200],
        ["Bauru",3250],
        ["Curitiba",2142]
        
    ]


    return <>
     <Navbar />
     <div className="container-fluid mt-page">
        <div className="ms-4 d-flex justify-content-between">
            <h2>Dashboard</h2>
            <button className="btn btn-primary me-4"><i className="fas fa-plus">Atualizar</i></button>
        </div>

        <div className="row">
            <div className="col-md-6 p-5">
                <Grafico titulo="Vendas por cliente (TOP 5)"
                        chartType="Bar"
                        dados={dados_cli}
                        legenda={false}
                    />
            </div>

            <div className="col-md-6 p-5">
                <Grafico titulo="Vendas anual"
                        chartType="Line"
                        dados={dados_vendas}
                        legenda={false}
                    />
            </div>

            <div className="col-md-6 p-5">
                <Grafico titulo="Vendas por produtos (TOP 5)"
                        chartType="PieChart"
                        dados={dados_produtos}
                        legenda={true}
                    />
            </div>
            
            <div className="col-md-6 p-5">
                <Grafico titulo="Vendas por cidade"
                        chartType="BarChart"
                        dados={dados_cidades}
                        legenda={false}
                    />
            </div>
        </div>
     </div>
    </>
}

export default Dashboard;