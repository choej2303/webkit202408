const http = require('http');
const express = require('express');
const path = require("path");
const bodyParser = require("body-parser");
const fs = require('fs');
const multer = require('multer');
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const dataFilePath = path.join(__dirname, 'public/data/memberList.json');

// 정적 파일 제공을 위한 디렉토리 설정
app.use('/img', express.static(path.join(__dirname, 'public/img')));
app.use(express.static(path.join(__dirname, '../html')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'server/public/img/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

app.get('/members', function (req, res) {
    fs.readFile(dataFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading data file');
        }
        res.send(JSON.parse(data));
    });
});

app.post('/addMember', upload.single('image'), function (req, res) {
    fs.readFile(dataFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading data file');
        }

        let jsonData = JSON.parse(data);
        let newMember = {
            check: false,
            num: jsonData.numSeq++,
            image: req.file ? '/img/' + req.file.filename : '',
            name: req.body.name,
            dept: req.body.dept,
            level: req.body.level,
            replyList: []
        };

        jsonData.memberList.push(newMember);

        fs.writeFile(dataFilePath, JSON.stringify(jsonData, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Error writing data file');
            }
            res.send(jsonData);
        });
    });
});

app.post('/editMember', function (req, res) {
    fs.readFile(dataFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading data file');
        }

        let jsonData = JSON.parse(data);
        let member = jsonData.memberList.find(member => member.num === req.body.num);
        if (member) {
            member.name = req.body.name;
            member.dept = req.body.dept;
            member.level = req.body.level;
        }

        fs.writeFile(dataFilePath, JSON.stringify(jsonData, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Error writing data file');
            }
            res.send(jsonData);
        });
    });
});

app.post('/deleteMember', function (req, res) {
    fs.readFile(dataFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading data file');
        }

        let jsonData = JSON.parse(data);
        jsonData.memberList = jsonData.memberList.filter(member => member.num !== parseInt(req.body.num, 10));

        fs.writeFile(dataFilePath, JSON.stringify(jsonData, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Error writing data file');
            }
            res.send(jsonData);
        });
    });
});

const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
