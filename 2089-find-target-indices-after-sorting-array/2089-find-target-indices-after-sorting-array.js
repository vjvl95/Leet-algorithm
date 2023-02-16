/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let arr=[]
    if(nums.indexOf(target)===-1) return []
    nums.sort((a,b)=>a-b)
    let index=nums.indexOf(target)
    while(1){
        if(nums[index]===target) arr.push(index)
        else break
        
        index++
    } 
    return arr
};