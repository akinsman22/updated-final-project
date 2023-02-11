import bcrypt from 'bcrypt';
import { Request } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/user';

const secret = 'I am singing in the rain.';

export const hashedPass = async (plainText: string) => {
    const saltRound = 18;
    const hashP = await bcrypt.hash(plainText, saltRound);
    return hashP;
}

export const comparePass = async (plainText: string, hashedPass: string) => {
    return await bcrypt.compare(plainText, hashedPass);
}

export const tknSignUser = async (user: User) => {
    let token = jwt.sign(
        { userId: user.userId },
        secret,
        { expiresIn: '1hr' }
    );
    return token;
}

export const verifiedUser = async (req: Request) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        try {
            let decode: any = await jwt.verify(token, secret);
            return await User.findByPk(decode.userId);
        }
        catch (err) {
            return null;
        }
    }
    else {
        return null;
    }

}