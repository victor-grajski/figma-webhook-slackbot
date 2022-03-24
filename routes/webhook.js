var express = require('express');
var router = express.Router();
const axios = require('axios').default;

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
    res.send('Got a POST request');
    console.log(req.body);

    const headers = {
        'Content-type': 'application/json',
    }

    const data = {
        text: "Hello, World!"
    }

    // axios.post('https://hooks.slack.com/services/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', data, {
    //     headers: headers
    //   })
    //   .then(function (response) {
    //     // console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
});

module.exports = router;
