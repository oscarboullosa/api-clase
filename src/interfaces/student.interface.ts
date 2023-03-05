import { ObjectId } from "mongoose";
export interface Student{
    name:string;
    surname:string;
    subjects:ObjectId[];
    semmester:number;
    age:number;
}