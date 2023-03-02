import "dotenv/config";
import{connect} from "mongoose";


async function dbConnect(): Promise<void>{
    const DB_URI=<string>process.env.DB_URI;
    console.log('DB_URI:', DB_URI);
    await connect(DB_URI);
}

export default dbConnect;