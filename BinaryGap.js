// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');


/**
 * 
 * Given a number, count the longest continuous 0s between two 1s
 */
function solution(N) {
    if (N == 1) {
        return 0;
    }
    let str = N.toString(2);
    let start = 0;
    let a1, a2;
    let ret = [];
    
    a1 = getIndexOfOne(str, start);
    while (a1 < str.length - 1) {
        if (a1 < 0 || a1 >= str.length - 2) {
            ret.push(0);
            break;
        } else {
            a2 = getIndexOfOne(str, a1 + 1);
            if (a2 < 0) {
                ret.push(0);
                break;
            } else {
                ret.push(a2 - a1 - 1);
                // then a1-> a2+1,
                a1 = a2;
            }
        }
    }
    if (ret.length <= 1) {
        return ret[0];
    } else {
        ret.sort((a,b)=> b-a);
        return ret[0];
    }
}



function getIndexOfOne(str, start){
    return str.indexOf('1', start);
}


console.log((1).toString(2))
console.log(solution(1))

console.log((2147483647).toString(2))
console.log(solution(2147483647))

console.log((21474836).toString(2))
console.log(solution(21474836))
