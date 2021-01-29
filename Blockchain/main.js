const sha256 = require("crypto-js/sha256");

class Block {
    constructor(data, previousHash) {
        this.data = data;
        this.previousHash = previousHash;
        this.nonce = 1;
        this.hash = this.computeHash();
    }

    computeHash() {
        return sha256(this.data + this.previousHash + this.nonce).toString();
    }

    getAnswer(difficulty) {
        let answer = '';
        for (let i = 0; i < difficulty; i++) {
            answer += '0'
        }
        return answer;
    }

    mine(difficulty) {
        while (true) {
            this.hash = this.computeHash();
            if (this.hash.substring(0, difficulty) !== this.getAnswer(difficulty)) {
                this.nonce ++;
                this.hash = this.computeHash();
            } else {
                break;
            }
        }
        console.log('finish mining', this.hash);
    }
}

class Chain {
    constructor() {
        this.chain = [this.bigBang()];
        this.difficulty = 4;
    }

    bigBang() {
        const genesisBlock = new Block('Genesis', '');
        return genesisBlock;
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlockToChain(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.computeHash();
        newBlock.mine(this.difficulty);
        this.chain.push(newBlock);
    }

    validateChain() {
        if (this.chain.length == 1) {
            if (this.chain[0].hash !== this.chain[0].computeHash()) {
                return false;
            }
            return true;
        }

        for (let i = 1; i < this.chain.length; i++) {
            const blockToValidate = this.chain[i];
            if (blockToValidate.hash !== blockToValidate.computeHash()) {
                return false;
            }
            const previousBlock = this.chain[i-1];
            if (blockToValidate.previousHash !== previousBlock.hash) {
                return false;
            }
        }
        return true;
    }
}

const haoboChain = new Chain();
console.log(haoboChain.validateChain());
const newBlock1 = new Block('block1', '');
haoboChain.addBlockToChain(newBlock1);
const newBlock2 = new Block('block2', '');
haoboChain.addBlockToChain(newBlock2);

haoboChain.chain[1].data = 'block11';
haoboChain.chain[1].mine(4);

console.log(haoboChain);
console.log(haoboChain.validateChain());