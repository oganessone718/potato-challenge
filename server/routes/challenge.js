const express = require('express');
const ChallengeModel = require('../models/challenge');

const router = express.Router();

class ChallengeDB {
    static _inst_;
    static getInst = () => {
        if ( !ChallengeDB._inst_ ) ChallengeDB._inst_ = new ChallengeDB();
        return ChallengeDB._inst_;
    }

    constructor() { console.log("[Challenge-DB] DB Init Completed"); }

    insertItem = async () => {
        try {
            const newItem = new ChallengeModel({bool: true});
            const res = await newItem.save();
            return true;
        } catch (e) {
            console.log(`[Challenge-DB] Insert Error: ${ e }`);
            return false;
        }
    }
}

const ChallengeDBInst = ChallengeDB.getInst();

router.post('/testChallenge', async (req, res) => {
    try {
        const addResult = await ChallengeDBInst.insertItem({});
        if (!addResult) return res.status(500).json({ error: dbRes.data })
        else return res.status(200).json({ isOK: true });
    } catch (e) {
        return res.status(500).json({ error: e });
    }
});

module.exports = router;