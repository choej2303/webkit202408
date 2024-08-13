const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

// 네이버 뉴스 URL
const url = 'https://news.naver.com/main/ranking/popularDay.naver?mid=etc&sid1=111';

// 이미지 저장 디렉토리 설정
const downloadDir = path.join(__dirname, 'images');

// 디렉토리 생성
if (!fs.existsSync(downloadDir)) {
    fs.mkdirSync(downloadDir);
}

// 이미지 다운로드 함수
async function downloadImage(imageUrl, fileName) {
    const filePath = path.join(downloadDir, fileName);
    const writer = fs.createWriteStream(filePath);

    const response = await axios({
        url: imageUrl,
        method: 'GET',
        responseType: 'stream'
    });

    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
    });
}

// 메인 크롤링 함수
async function scrapeNaverNews() {
    try {
        // 네이버 뉴스 페이지 가져오기
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        // 이미지 URL과 파일명 추출
        $('img').each(async (index, element) => {
            const imgSrc = $(element).attr('src');
            if (imgSrc && imgSrc.startsWith('http')) {
                const fileName = `image${index}.jpg`;
                console.log(`다운로드 중: ${imgSrc}`);
                await downloadImage(imgSrc, fileName);
                console.log(`다운로드 완료: ${fileName}`);
            }
        });

        console.log('모든 이미지 다운로드 완료');
    } catch (error) {
        console.error('크롤링 중 오류 발생:', error);
    }
}

// 크롤링 실행
scrapeNaverNews();
