import { Request, Response, Router } from "express";
import { deleteTheme,getTheme,getThemes,postTheme,updateTheme } from "../controllers/subject";

const router=Router();

router.get("/",getThemes);
router.get("/:id",getTheme);
router.post("/",postTheme);
router.put("/:id",updateTheme);
router.delete("/:id",deleteTheme);
export{router};