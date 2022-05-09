import express from "express";
import pool from "../db.js";

const getqp = express();
getqp.get("/qp", async (req, res) => {
  try {
    //const { id, username } = req.body;
    console.log("hello");
    const qp = await pool.query("Select * from qpdetails");
    res.json(qp);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

export default getqp;
