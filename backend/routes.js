const express = require('express')
const router = express.Router();
const dao  = require('./DAO')

router.get('/getData', async (req, res) => {
    console.log(req.baseUrl+req.url)
    try {
        const data = await dao.readAllJSON()
        res.status(200).json(data).end();
    } catch (error) {
        // console.log(error);
        res.status(500).json(error).end();
    }
});

module.exports = router