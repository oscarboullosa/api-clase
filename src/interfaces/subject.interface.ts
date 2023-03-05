import { ObjectId } from "mongoose";
export interface Subject{
    name:string;
    person:ObjectId[];
    semmester:number;
    difficulty:"easy"|"medium"|"hard";
}