import { RequestHandler } from "express";
import { User } from "../models/user";
import { comparePass, hashedPass, tknSignUser, verifiedUser } from "../services/auth";


export const allUsers: RequestHandler = async (req,res, next) => {
    let users = await User.findAll();
    res.status(200).json(users);
}

export const registerUser: RequestHandler = async (req, res, next) => {
    console.log(registerUser)

    let newUser: User = req.body;

    if (newUser.email && newUser.password) {
        let hashPass = await hashedPass(newUser.password);
        newUser.password = hashPass;
        let created = await User.create(newUser);
        res.status(200).json({
            email: created.email,
            userId: created.userId
        });
    }
    else {
        res.status(400).send('Email and password required.')
    }
}

export const signUser: RequestHandler = async (req, res, next) => {
    let validUser: User | null = await User.findOne({
        where: { email: req.body.email }
    });
    if (validUser) {
        let matchPass = await comparePass(req.body.password, validUser.password);

        if (matchPass) {
            let token = await tknSignUser(validUser);
            res.status(200).json({ token });
        }
        else {
            res.status(401).json('Password invalid');
        }
    }
    else {
        res.status(401).json('Email invalid');
    }
}

export const getUser: RequestHandler = async (req, res, next) => {
    let user: User | null = await verifiedUser(req);

    if (user) {
        let { email } = user;
        res.status(200).json({
            email
        });
    }
    else {
        res.status(401).send();
    }
}