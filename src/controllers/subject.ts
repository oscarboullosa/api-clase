import { Request,Response } from "express";
import { insertSubject,getSubject,getSubjects,updateSubject,deleteSubject } from "../services/subject";
import { handleHttp } from "../utils/error.handle";

const getTheme=async({params}:Request,res:Response)=>{
    try{
        const{id}=params;
        const response=await getSubject(id);
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
        const {id}=params;
        const response=await updateSubject(id,body);
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
        const {id}=params;
        const response=await deleteSubject(id);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_DELETE_ITEM");
    }
};
export{getTheme,getThemes,postTheme,updateTheme,deleteTheme};