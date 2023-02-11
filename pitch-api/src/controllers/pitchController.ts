import { RequestHandler } from "express";
import { Pitch } from "../models/pitch";
import { User } from "../models/user";
import { verifiedUser } from "../services/auth";

export const allPitches: RequestHandler = async (req,res, next) => {
    let pitches = await Pitch.findAll();
    res.status(200).json(pitches);
}

export const makePitch: RequestHandler = async (req, res, next) => {
    let user: User | null = await verifiedUser(req);
    
    if (!user){
        return res.status(403).send();
    }
    let newPitch: Pitch = req.body;
    newPitch.userId = user.userId;
    
    if (newPitch.post){
        let generated = await Pitch.create(newPitch);
        res.status(201).json(generated); 
    }
    else {
        res.status(400).send();
    }
}

export const getPitchById: RequestHandler = async (req, res,next)=> {
    let user: User  | null = await verifiedUser(req);

    if (!user) {
        return res.status(403).send();
    }

    let pitchId = req.params.id;
    let newPitch: Pitch = req.body;
    newPitch.userId = user.userId;

    let findPitch = await Pitch.findByPk(pitchId);
    if (findPitch) {
        res.status(200).json(findPitch);
    }
    else {
        res.status(404).json({});
    }
}

export const updatePitch: RequestHandler = async (req, res, next) =>{
    let user: User | null = await verifiedUser(req);

    if (!user) {
        return res.status(403).send();
    }
    let pitchId = req.params.id;
    let newPitch: Pitch = req.body;
    newPitch.userId = user.userId;

    let findPitch = await Pitch.findByPk(pitchId);

    if (findPitch && findPitch.pitchId == newPitch.pitchId && newPitch.post){
        await Pitch.update(newPitch, {
            where: { pitchId }
        });
        res.status(200).json();
    }
    else {
        res.status(400).json();
    }
}

export const deletePitch: RequestHandler = async (req, res, next) => {
    let user: User | null = await verifiedUser(req);

    if (!user) {
        return res.status(403).send();
    }
    let pitchId = req.params.id;
    let findPitch = await Pitch.findByPk(pitchId);

    if (findPitch){
        await Pitch.destroy({
            where: { pitchId }
        });
        res.status(200).json();
    }
    else {
        res.status(404).json();
    }
}