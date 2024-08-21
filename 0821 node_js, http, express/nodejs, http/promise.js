function task1(fulfilled, reject) {
    console.log('1. Task1 시작');
    let num = 0;
    setTimeout(function() {
        num = 1004;
        fulfilled('3. Task1 결과', num);
    }, 300);
    console.log('2. Task1 끝', num);
}

function fulfilled(result, num) {
    console.log('fulfilled : ', result, num);
}

function rejected(err) {
    console.log('rejected : ', err);
}

new Promise(task1).then(fulfilled, rejected);
