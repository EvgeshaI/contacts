const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)
// Add custom routes before JSON Server router
server.post('/login', (req, res) => {
    if(req.body.email === "email@email.ru" && req.body.password === "password"){
        res.jsonp({"token": "123456"})
    } else {
        res.sendStatus(500)
    }
})
server.use((req, res, next) => {
    if (isAuthorized(req)) { // add your authorization logic here
        next() // continue to JSON Server router
    } else {
        res.sendStatus(401)
    }
})
function isAuthorized(req) {
    return req.headers['authorization'] === 'Bearer 123456'
}
server.use(router)
server.listen(3001, () => {
    console.log('JSON Server is running')
})