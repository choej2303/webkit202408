const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// 초기 제품 목록
let productList = [
    { no: 1, name: "냉장고", price: 300 },
    { no: 2, name: "세탁기", price: 200 },
    { no: 3, name: "오디오", price: 100 },
    { no: 4, name: "테레비", price: 150 },
    { no: 5, name: "압력솥", price: 50 },
    { no: 6, name: "에어콘", price: 100 },
    { no: 7, name: "건조기", price: 100 },
    { no: 8, name: "전자랜지", price: 20 },
    { no: 9, name: "에어프라이기", price: 30 }
];

let topNo = productList.length;

// 제품 목록 제공 엔드포인트
app.get('/', (req, res) => {
    res.render('shop', {productList});
});

// 새로운 제품 추가 엔드포인트
app.post('/', (req, res) => {
    const { name, price } = req.body;
    topNo += 1;
    const newProduct = { no: topNo, name, price: Number(price) };
    productList.push(newProduct);
    res.json(newProduct);
});

// 정적 파일 제공
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
