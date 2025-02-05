import os from 'os'

console.log(os.platform())
console.log(os.arch())
console.log(os.cpus())
console.log(os.totalmem())
console.log(os.freemem())


let username = os.userInfo().username
console.log("hello", username)