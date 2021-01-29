const sha256 = require("crypto-js/sha256");

console.log(sha256('haoboxuxu1').toString())
console.log(sha256('haoboxuxu2').toString())

function proofOfWork() {
    let data = 'haoboxuxu'
    let x = 1
    while (true) {
        if (sha256(data + x).toString().substring(0, 4) !== '0000') {
            x = x + 1;
        } else {
            console.log(sha256(data + x).toString());
            console.log(x);
            break;
        }
    }
}

proofOfWork()