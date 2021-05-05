const express = require('express');
const router = express.Router();

router.post('/upload', (req, res) => {
    let sampleFile;
    let uploadPath;

    sampleFile = req.files.file;
    uploadPath = __dirname + sampleFile.name;

    sampleFile.mv(uploadPath, function(err) {
        if (err)
          return res.status(500).send(err);
    
        res.status(201).send('File uploaded!');
      });
})

module.exports = router;