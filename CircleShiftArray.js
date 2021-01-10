// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    let len = A.length;
    if (len <= 1){
        return A;
    }else{
        let minK = K % len;
        for(let i =0; i<minK; i++){
            let popout = A.shift();
            A.push(popout);
        }
        return A;
    }
}
