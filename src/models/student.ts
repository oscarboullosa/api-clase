import{Schema,Types,model,Model} from "mongoose";
import { Student } from "../interfaces/student.interface";

const StudentSchema=new Schema<Student>({
    name:{
        type:String,
        required:true,
    },
    surname:{
        type:String,
        required:true,
    },
    semmester:{
        type:Number,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    subjects:{
        type:[Schema.Types.ObjectId],
        ref:'subjects'
    },
},
    {
        timestamps:true,
        versionKey:false,
    }
);

const StudentModel=model('students',StudentSchema);
export default StudentModel;
