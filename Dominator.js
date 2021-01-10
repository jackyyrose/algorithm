
// function solution(A) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     let len = A.length;
//     if(len <= 1){
//         return len - 1;
//     }else{
//         //length >=2
//         let B = Array.from(A);
//         B.sort((a, b) => a - b);
//         // find 1st occur and last occur, gap is length
//         let i = 0;
//         while (i < len / 2) {
//             let initV = B[i];
//             let leftIndex = B.indexOf(initV);
//             let rightIndex = B.lastIndexOf(initV);
//             let occurences = rightIndex - leftIndex + 1;
//             if (occurences > len / 2) {
//                 return A.indexOf(initV);
//             } else {
//                 i = rightIndex + 1;
//             }
//         }
//         return -1;
        
//     }
// }

// if a number in an array is greater than half the number of array length, then this number is dominator. 
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let len = A.length;
    if(len<=1){
        return len-1;
    }else{
        let B = [];
        for(index in A){
            let v = A[index];
            if(B[v]){
                B[v] += 1;
            }else{
                B[v] = 1;
            }
        }
        for(index in B){
            if (B[index] && (B[index]>len/2)){
                return A.indexOf(parseInt(index));
            }else{
                
            }
        }
        return -1;
    }
}

console.log(solution([3, 4, 3, 2, 3, -1, 3, 3]))