import { db } from "../db.js";

export const getMoventsai = (_, res) => {
    const q = "SELECT * FROM moventsai";

    db.query(q, (err, data)=>{
        if (err) return res.json(err);
        return res.status(200).json(data);
    });
};

export const addMoventsai = (req, res) => {
    const q = "INSERT INTO moventsai(`funcionario`, `setor`, `data`,`enrtada`,`saida`,`ent2`,`sai2` ) VALUES (?)";
    const values = [
        req.body.funcionario,
        req.body.setor,
        req.body.data,
        req.body.entrada,
        req.body.saida,
        req.body.ent2,
        req.body.sai2
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Movimentação criada com sucesso!");
    });
};


export const updateMoventsai = (req, res) => {
    const q= "UPDATE moventsai SET `funcionario` = ?, `setor` = ?, `data` = ?, `entrada` = ?, `saida` = ?, `ent2` = ?, `sai2` = ? WHERE `id` = ?";
    const values = [
        req.body.funcionario,
        req.body.setor,
        req.body.data,
        req.body.entrada,
        req.body.saida,
        req.body.ent2,
        req.body.sai2
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Movimentação atualizada com sucesso!");
    });
};


export const deleteMoventsai = (req, res) => {
    const q = "DELETE FROM moventsai WHERE `id` = ?";

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Movimentação apagada com sucesso!");
    });
};

