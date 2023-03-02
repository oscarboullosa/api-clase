import { Request, Response, Router } from "express";
import { deletePerson,getPerson,getPeople,postPerson,updatePerson } from "../controllers/student";

const router=Router();

router.get("/",getPeople);
router.get("/:id",getPerson);
router.post("/",postPerson);
router.put("/:id",updatePerson);
router.delete("/:id",deletePerson);
export{router};
