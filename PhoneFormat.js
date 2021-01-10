// function solution(A, B, P) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     let match = [];
//     B.forEach(function (item, index) { 
//         let tmp = item.indexOf(P);
//         if (tmp < 0) {
//             //nothing
//         } else {
//             match.push(index);
//         }
//     });
//     if (match.length == 0) {
//         return "NO CONTACT";
//     } else {
//         let matchNames = [];
//         for (value of match) {
//             matchNames.push(A[value]);
//         }
//         matchNames.sort();
//         return matchNames[0];
//     }
// }

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let str = S.replace(/-+/g, "");
    str = str.replace(/\s+/g, "");
    let remainder = str.length % 3;
    let group = Math.floor(str.length / 3);
    let response;
    if (remainder === 0) {
        response =  display(str, group);
    } else if (remainder === 1) {
        response = display(str, group - 1) + str.substr(-4, 2) + '-' + str.substr(-2, 2);
    } else if (remainder === 2) {
        response =  display(str, group) + str.substr(-2, 2);
    }
    return ('-' === response.substr(-1)) ? response.substr(0, response.length - 1) : response;

}

function display(str, group) {
    let res = [];
    let cnt = 1;
    let index = 0;
    let j = 0; // j should < group
    
    for (let i = 1; i <= str.length; i++){
        res.push(str[i-1]);
        if (i % 3 === 0) { 
            res.push('-');
            j += 1;
            if (j >= group) {
                break;
            }
        } 
    }
    
    
    return res.join("");
}

console.log(solution("22"));
console.log(solution("22 -22 -22 -22 -22"));
console.log(solution("22 -22 -22 -22 -222"));
console.log(solution("22 -22 -22 -22 -2222"));