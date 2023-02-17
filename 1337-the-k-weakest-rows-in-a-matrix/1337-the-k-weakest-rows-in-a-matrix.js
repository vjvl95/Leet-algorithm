/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    let arr=[]
    let res=[]
    mat.forEach((v,i)=>{
        arr.push([v.filter((v)=>v===1).length,i])
    })
    
    arr.sort((a,b)=>a[0]-b[0] || a[1]-b[1])
    
    for(let i=0;i<k;i++){
        res.push(arr[i][1])
    }
    return res    
};