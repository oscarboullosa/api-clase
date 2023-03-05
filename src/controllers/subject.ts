import { Request,Response } from "express";
import { insertSubject,getSubject,getSubjects,updateSubject,deleteSubject,addSubjectToUser } from "../services/subject";
import { handleHttp } from "../utils/error.handle";

const getTheme=async({params}:Request,res:Response)=>{
    try{
        const{idSubject}=params;
        const response=await getSubject(idSubject);
        const data =response ? response:"NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res,"ERROR_GET_ITEM");
    }
};

const getThemes=async(req:Request,res:Response)=>{
    try {
        const response=await getSubjects();
        res.send(response);
    } catch (e) {
        handleHttp(res,"ERROR_GET_ITEMS");
    }
};

const updateTheme=async ({params,body}:Request,res:Response)=>{
try {
        const {idSubject}=params;
        const response=await updateSubject(idSubject,body);
        res.send(response);
} catch (e) {
    handleHttp(res,"ERROR_UPDATE_ITEM");
}
};

const postTheme=async ({body}:Request,res:Response)=>{
    try {
        const responseItem=await insertSubject(body);
        res.send(responseItem); 
    } catch (e) {
        handleHttp(res,"ERROR_POST_ITEM");
    }
};

const deleteTheme=async ({params}:Request,res:Response)=>{
    try{
        const {idSubject}=params;
        const response=await deleteSubject(idSubject);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_DELETE_ITEM");
    }
};
const addSubjectToPerson=async(req:Request,res:Response)=>{
    try {
        const { idUser, idSubject } = req.body;
        const response=await addSubjectToUser(idSubject,idUser);
            res.send(response);
    } catch (e) {
        handleHttp(res,"ERROR_ADD_SUBJECT_TO_USER");
    }
}
export{getTheme,getThemes,postTheme,updateTheme,deleteTheme,addSubjectToPerson};