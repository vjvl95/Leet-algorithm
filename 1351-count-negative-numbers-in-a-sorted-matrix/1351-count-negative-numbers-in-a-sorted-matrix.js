/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count=0
    
    grid.forEach((v)=>{
        for(let i=0;i<v.length;i++){
            if(v[i]<0) count++
        }
    })
    return count
};