import { Request,Response } from "express";
import { insertStudent,getStudent,getStudents,updateStudent,deleteStudent } from "../services/student";
import { handleHttp } from "../utils/error.handle";

const getPerson=async({params}:Request,res:Response)=>{
    try{
        const{id}=params;
        const response=await getStudent(id);
        const data =response ? response:"NOT_FOUND";
        console.log(data);
        res.send(data);
    } catch(e){
        handleHttp(res,"ERROR_GET_ITEM");
    }
};

const getPeople=async(req:Request,res:Response)=>{
    try {
        const response=await getStudents();
        res.send(response);
    } catch (e) {
        handleHttp(res,"ERROR_GET_ITEMS");
    }
};

const updatePerson=async ({params,body}:Request,res:Response)=>{
try {
        const {id}=params;
        const response=await updateStudent(id,body);
        res.send(response);
} catch (e) {
    handleHttp(res,"ERROR_UPDATE_ITEM");
}
};

const postPerson=async ({body}:Request,res:Response)=>{
    try {
        console.log(body);
        console.log(insertStudent(body));
        const responseItem=await insertStudent(body);
        res.send(responseItem); 
    } catch (e) {
        handleHttp(res,"ERROR_POST_ITEM");
    }
};

const deletePerson=async ({params}:Request,res:Response)=>{
    try{
        const {id}=params;
        const response=await deleteStudent(id);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_DELETE_ITEM");
    }
};
export{getPerson,getPeople,postPerson,updatePerson,deletePerson};