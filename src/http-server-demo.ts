import http from 'http'

const user = {
    name: 'Rikky',
    birthday: new Date('1990/12/25'),
    describe: 'very sexy'
}

const server = http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'application/json'
    })
    response.end(JSON.stringify(user))
})

server.listen(3000)
