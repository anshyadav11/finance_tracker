const express = require("express");
const financialRecordModel = require("../schema/financial-record");
const router = express.Router();

router.get("/getAllByUserID/:userID", async (req, res) => {
    try {
        const userID = req.params.userID;
        const records = await financialRecordModel.find({ userId: userID });
        if (records.length === 0) {
            return res.status(404).send("No Records Found for the user");
        }
        res.status(200).send(records);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post("/", async (req, res) => {
    try {
        const newRecordBody = req.body;
        const newRecord = new financialRecordModel(newRecordBody);
        const savedRecord = await newRecord.save();
        res.status(200).send(savedRecord);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const newRecordBody = req.body;
        const updatedRecord = await financialRecordModel.findByIdAndUpdate(id, newRecordBody, { new: true });
        if (!updatedRecord) {
            res.status(404).send("No records found for the user");
        }
        res.status(200).send(updatedRecord);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const record = await financialRecordModel.findByIdAndDelete(id);
        if (!record) {
            res.status(404).send("No records found for the user");
        }
        res.status(200).send(record);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
