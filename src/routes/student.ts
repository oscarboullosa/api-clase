import { Request, Response, Router } from "express";
import { deletePerson,getPerson,getPeople,postPerson,updatePerson,addPersonToSubject } from "../controllers/student";

const router=Router();

router.get("/all",getPeople);
router.get("/:idUser",getPerson);
router.post("/",postPerson);
router.put("/:idUser",updatePerson);
router.delete("/:idUser",deletePerson);
router.post("/add",addPersonToSubject);
export{router};
