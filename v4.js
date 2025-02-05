import url from 'url'

let link = url.parse('https://example.com:8080/home?page=1&sort=asc')
console.log(link.hostname);
console.log(link.protocol);
console.log(link.query);

// 2-masala

let link2 = url.parse('https://mysite.com/profile?user=JohnDoe')
console.log(link2.search.split('=')[1]);
