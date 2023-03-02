import { Student } from "../interfaces/student.interface";
import StudentModel from "../models/student";

//En Students me interesa más pasarle el ID porque pueden haber 2 estudiantes con el mismo nombre
const insertStudent=async(item:Student)=>{
    const responseInsert=await StudentModel.create(item);
    return responseInsert;
};

const getStudents=async()=>{
    const responseItem=await StudentModel.find({});
    return responseItem;
};

const getStudent=async(id:string)=>{
    const responseItem=await StudentModel.findOne({_id:id});
    return responseItem;
};

const updateStudent=async(id:string,data:Student)=>{
    const responseItem=await StudentModel.findOneAndUpdate(
        {_id:id},
        data,
        {
            new:true,
        }
    );
    return responseItem;
};

const deleteStudent=async(id:string)=>{
    //const responseItem=await StudentModel.remove({_name:name});
    const responseItem=await StudentModel.deleteOne({_id:id});
    return responseItem;
}
export {insertStudent,getStudent,getStudents,updateStudent,deleteStudent};