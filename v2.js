import fs from 'fs'

// 1-masala

let data = fs.readFileSync('data.txt', 'utf-8')
console.log(data);


// 2-masala shu masalada exist ekanligi ham tekshirildi

let users = fs.existsSync('./users.json') ? fs.readFileSync('./users.json', 'utf-8') : fs.writeFileSync('./users.json', JSON.stringify())

users = users ? JSON.parse(users) : []
let new_user = {
    id: users.length + 1, 
    name: 'Bilol'
}
users.push(new_user)
fs.writeFileSync('./users.json', JSON.stringify(users, null, 4))
console.log(users);
