"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePitch = exports.updatePitch = exports.getPitchById = exports.makePitch = exports.allPitches = void 0;
const pitch_1 = require("../models/pitch");
const auth_1 = require("../services/auth");
const allPitches = async (req, res, next) => {
    let pitches = await pitch_1.Pitch.findAll();
    res.status(200).json(pitches);
};
exports.allPitches = allPitches;
const makePitch = async (req, res, next) => {
    let user = await (0, auth_1.verifiedUser)(req);
    if (!user) {
        return res.status(403).send();
    }
    let newPitch = req.body;
    newPitch.userId = user.userId;
    if (newPitch.post) {
        let generated = await pitch_1.Pitch.create(newPitch);
        res.status(201).json(generated);
    }
    else {
        res.status(400).send();
    }
};
exports.makePitch = makePitch;
const getPitchById = async (req, res, next) => {
    let user = await (0, auth_1.verifiedUser)(req);
    if (!user) {
        return res.status(403).send();
    }
    let pitchId = req.params.id;
    let newPitch = req.body;
    newPitch.userId = user.userId;
    let findPitch = await pitch_1.Pitch.findByPk(pitchId);
    if (findPitch) {
        res.status(200).json(findPitch);
    }
    else {
        res.status(404).json({});
    }
};
exports.getPitchById = getPitchById;
const updatePitch = async (req, res, next) => {
    let user = await (0, auth_1.verifiedUser)(req);
    if (!user) {
        return res.status(403).send();
    }
    let pitchId = req.params.id;
    let newPitch = req.body;
    newPitch.userId = user.userId;
    let findPitch = await pitch_1.Pitch.findByPk(pitchId);
    if (findPitch && findPitch.pitchId == newPitch.pitchId && newPitch.post) {
        await pitch_1.Pitch.update(newPitch, {
            where: { pitchId },
        });
        res.status(200).json();
    }
    else {
        res.status(400).json();
    }
};
exports.updatePitch = updatePitch;
const deletePitch = async (req, res, next) => {
    let user = await (0, auth_1.verifiedUser)(req);
    if (!user) {
        return res.status(403).send();
    }
    let pitchId = req.params.id;
    let findPitch = await pitch_1.Pitch.findByPk(pitchId);
    if (findPitch) {
        await pitch_1.Pitch.destroy({
            where: { pitchId },
        });
        res.status(200).json();
    }
    else {
        res.status(404).json();
    }
};
exports.deletePitch = deletePitch;
