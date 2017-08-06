const net = require('net')

const HOST = '127.0.0.1'
const PORT = 6969

// 创建一个TCP服务器实例，调用listen函数开始监听指定端口
// 传入net.createServer()的回调函数将作为”connection“事件的处理函数
// 在每一个“connection”事件中，该回调函数接收到的socket对象是唯一的
const server = net.createServer()
server.listen(PORT, HOST)
// console.log('Server listening on ' +server.address().address + ':' + server.address().port)

server.on('connection', function(sock) {
    console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
})
