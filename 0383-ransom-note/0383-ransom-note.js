/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let obj={}
    
    ransomNote.split("").forEach((v)=>{
        obj[v]?obj[v]+=1:obj[v]=1
    })
    
    magazine.split("").forEach((v)=>{
        obj[v]?obj[v]-=1:obj[v]=0
    })
    for(item of Object.values(obj)){
        if(item!==0) return false
    }
    return true
};