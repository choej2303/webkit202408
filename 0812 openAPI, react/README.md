네이버 뉴스에서 특정 페이지를 크롤링하고 이미지를 다운로드하는 Node.js 스크립트를 작성하는 방법을 안내해 드리겠습니다. 이 예제에서는 `axios`를 이용해 네이버 뉴스 페이지에서 데이터를 가져오고, `cheerio`를 이용해 원하는 데이터를 파싱한 후, `axios`를 사용해 이미지를 다운로드하는 기능을 포함할 것입니다.

### 1. 필요한 모듈 설치
먼저, 프로젝트 디렉토리에서 필요한 npm 패키지를 설치해야 합니다.

```bash
npm init -y
npm install axios cheerio fs path
```

### 2. Node.js 코드 작성
아래는 Node.js 스크립트의 예제 코드입니다.

```javascript
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
```

### 3. 코드 설명

- `axios`: HTTP 요청을 보내 데이터를 가져오기 위해 사용됩니다.
- `cheerio`: HTML 데이터를 파싱하여 jQuery와 유사한 방식으로 DOM 요소를 조작할 수 있게 해줍니다.
- `fs` 및 `path`: 파일 시스템을 조작하고, 이미지를 저장할 경로를 설정하는 데 사용됩니다.

### 4. 실행 방법

작성한 스크립트를 실행하려면 터미널에서 다음 명령어를 입력합니다:

```bash
node index.js
```

스크립트가 성공적으로 실행되면, `images` 폴더에 다운로드된 이미지들이 저장됩니다.

### 5. 주의 사항

- 크롤링은 웹사이트의 이용 약관을 준수해야 하며, 과도한 요청은 서버에 부하를 줄 수 있습니다.
- 실습용으로 사용하되, 실제 운영 환경에서는 적절한 요청 간격과 제한을 설정하는 것이 중요합니다.

이 예제는 기본적인 크롤링과 이미지 다운로드 방법을 설명합니다. 필요에 따라 코드를 확장해 다양한 기능을 추가할 수 있습니다.