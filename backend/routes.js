const express = require('express')
const router = express.Router();
const dao  = require('./DAO')

router.get('/getData', async (req, res) => {
    try {
        const data = await dao.readAllJSON()
        res.status(200).json(data).end();
    } catch (error) {
        // console.log(error);
        res.status(500).json(error).end();
    }
});

module.exports = router