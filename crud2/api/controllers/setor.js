import { db } from "../db.js";

export const getSetor = (_, res) => {
    const q = "SELECT * FROM setores";

    db.query(q, (err, data)=>{
        if (err) return res.json(err);
        return res.status(200).json(data);
    });
};

export const addSetor = (req, res) => {
    const q = "INSERT INTO setores(`nome` ) VALUES (?)";
    const values = [        
        req.body.nome
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Setor criado com sucesso!");
    });
};


export const updateSetor = (req, res) => {
    const q= "UPDATE setores SET  `nome` = ? WHERE `id` = ?";
    const values = [
        req.body.nome
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Setor atualizado com sucesso!");
    });
};


export const deleteSetor = (req, res) => {
    const q = "DELETE FROM setores WHERE `id` = ?";

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Setor deletado com sucesso!");
    });
};

