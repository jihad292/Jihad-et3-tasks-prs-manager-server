import issueLibrary from "../libraries/issue";
import { Response,Request,NextFunction } from 'express';

const issueController = {
    async getIssues ({},res:Response,next: NextFunction){
        try {
            const result = issueLibrary.getIssues();
            res.status(200).json({result});
        } catch (error) {
            console.log(error);
            next(error);
        }
    }
}

export default issueController;