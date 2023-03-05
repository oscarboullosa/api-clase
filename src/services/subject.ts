import { Subject } from "../interfaces/subject.interface";
import SubjectModel from "../models/subject";
import StudentModel from "../models/student";
import { Types } from "mongoose";

const insertSubject=async(item:Subject)=>{
    const responseInsert=await SubjectModel.create(item);
    return responseInsert;
};

const getSubjects=async()=>{
    const responseItem=await SubjectModel.find({});
    return responseItem;
};

const getSubject=async(idSubject:string)=>{
    const responseItem=await SubjectModel.findOne({_id:idSubject});
    return responseItem;
};

const updateSubject=async(idSubject:string,data:Subject)=>{
    const responseItem=await SubjectModel.findOneAndUpdate(
        {_id:idSubject},
        data,
        {
            new:true,
        }
    );
    return responseItem;
};

const deleteSubject=async(idSubject:string)=>{
    const responseItem=await SubjectModel.deleteOne({_id:idSubject});
    return responseItem;
}
const addSubjectToUser=async(idSubject:string,idUser:string)=>{
    const responseItem=await StudentModel.findOneAndUpdate({_id:idSubject},{$addToSet:{subjects:new Types.ObjectId(idSubject)}},{new:true}).populate('subjects');
}
export {insertSubject,getSubject,getSubjects,updateSubject,deleteSubject,addSubjectToUser};