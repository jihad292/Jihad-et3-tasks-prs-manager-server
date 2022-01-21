import issueLibrary from "../libraries/issue";
import { Response,Request,NextFunction } from 'express';
import issueModel from "../models/issue";



const issueController = {
    async getIssues ({},res:Response,next: NextFunction){
        try {
            const result = await issueLibrary.getIssues();
            res.json(result); 
        } catch (error) {
            console.log(error);
            next(error);
        }
    }
} 

export default issueController;