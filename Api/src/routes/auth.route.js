import { user } from "../models/user.js";
import express from "express";
import jwt from "jsonwebtoken";

const SECRET_KEY='ADNFALNLAFDI9020932EKLW2NO123H12HE3';

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { username, password, email } = req.body;
    await user.create({ username, password, email });
    return res.status(200).send({ message: "Registered Successfully" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // create service find user by Email

    const dbuser = await user.findOne({ email });
  

    if (!dbuser) {
      return res.status(500).send({ message: "No user with such Email" });
    }

    if (dbuser.password !== password) {
      return res.status(500).send({ message: "Password didnot match please try again" });
    }

    const token =jwt.sign({email},SECRET_KEY,{expiresIn:"48h"});
    return res.status(200).send({token})
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
export default router;
