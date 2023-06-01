import mysql from "mysql";

export const db = mysql.createConnection({
    host: process.env.SERVIDOR,
    port: 3306,
    user: "user",
    password: "user",
    database: "kfestamp"
});

