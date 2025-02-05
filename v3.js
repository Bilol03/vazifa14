import path from 'path'

let nomi = path.basename('v3.js', '.js')
console.log(nomi);
let direktoriya = path.dirname('v3.js')
console.log(direktoriya);
let kengaytma = path.extname('v3.js')
console.log(kengaytma);

console.log(path.join(`${nomi}${kengaytma}`))