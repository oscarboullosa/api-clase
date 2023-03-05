import{Schema,Types,model,Model} from "mongoose";
import { Subject } from "../interfaces/subject.interface";

const SubjectSchema=new Schema<Subject>({
    name:{
        type:String,
        required:true,
    },
    semmester:{
        type:Number,
        required:true,
    },
    difficulty:{
        type:String,
        enum:["easy","medium","hard"],
    },
    person:{
        type: [Schema.Types.ObjectId],
        ref:'students'
    },
},
    {
        timestamps:true,
        versionKey:false,
    }
);

const SubjectModel=model('subjects',SubjectSchema);
export default SubjectModel;
