var express = require('express');
var friends = require('../data/friends');


module.exports = function () {
    var router = express.Router();

    router.get('/api/friends', function (req, res) {
        return res.json(friends);
    });

    router.post('/api/friends', function (req, res) {
        if (tables.length > 0) {
            tables.push(req.body);

            return res.json(true);
        }
        // message: You're the first entry!
        return res.json(false);
    });

    router.post('/api/clear', function (req, res) {
        friends = [];

        res.json(true);
    });

    return router;
};
