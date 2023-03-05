import { Request, Response, Router } from "express";
import { deleteTheme,getTheme,getThemes,postTheme,updateTheme,addSubjectToPerson } from "../controllers/subject";

const router=Router();

router.get("/all",getThemes);
router.get("/:idSubject",getTheme);
router.post("/",postTheme);
router.put("/:idSubject",updateTheme);
router.delete("/:idSubject",deleteTheme);
router.post("/add",addSubjectToPerson);
export{router};