import { Student } from "../interfaces/student.interface";
import StudentModel from "../models/student";
import SubjectModel from "../models/subject";
import { Types } from "mongoose";

//En Students me interesa más pasarle el ID porque pueden haber 2 estudiantes con el mismo nombre
const insertStudent=async(item:Student)=>{
    const responseInsert=await StudentModel.create(item);
    return responseInsert;
};

const getStudents=async()=>{
    const responseItem=await StudentModel.find({});
    return responseItem;
};

const getStudent=async(idUser:string)=>{
    const responseItem=await StudentModel.findOne({_id:idUser});
    return responseItem;
};

const updateStudent=async(idUser:string,data:Student)=>{
    const responseItem=await StudentModel.findOneAndUpdate(
        {_id:idUser},
        data,
        {
            new:true,
        }
    );
    return responseItem;
};

const deleteStudent=async(idUser:string)=>{
    //const responseItem=await StudentModel.remove({_name:name});
    const responseItem=await StudentModel.deleteOne({_id:idUser});
    return responseItem;
};
const addUserToSubject = async(idSubject: string, idUser: string) => {
    const responseItem = await SubjectModel.findOneAndUpdate({_id: idUser}, {$addToSet: {person: new Types.ObjectId(idUser)}}, {new: true}).populate('person');
    return responseItem;
};
export {insertStudent,getStudent,getStudents,updateStudent,deleteStudent,addUserToSubject};