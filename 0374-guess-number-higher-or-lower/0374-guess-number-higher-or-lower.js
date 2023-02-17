/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let l=0
    let r=n
    let result;
    let mid;
    while(1){
        mid=Math.trunc((l+r)/2)
        result=guess(mid)

        if(result===-1){
           r=mid-1
        }
        else if(result===1){
                        l=mid+1
        }
        else{
            break
        }
    }
    return mid
};