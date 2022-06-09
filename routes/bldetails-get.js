import express from "express";
import pool from "../db.js";
const getbldetails_all = express();
const getbldetails_blLevel = express();

getbldetails_all.get("/bldetails_all/", async (req, res) => {
  try {
    //const { id, username } = req.body;
    console.log("hello");
    const bl = await pool.query("Select * from bl_details");
    res.json(bl);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

getbldetails_blLevel.get("/bldetails_blLevel/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const bl = await pool.query("Select * from bl_details Where levels=$1",[id]);
    res.json(bl);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

export { getbldetails_all, getbldetails_blLevel };
