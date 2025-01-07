import express from "express";
import { create, del, getall, getone, update } from "../controller/crud.js";

const route=express.Router()

route.post("/create",create)
route.get("/getall",getall)
route.put("/update/:id",update)
route.delete("/delete/:id",del)
route.get("/getone/:id",getone)

export default route