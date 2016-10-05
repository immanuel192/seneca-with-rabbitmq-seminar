let clientId = 1
let args = process.argv.slice(2)
if (args.length > 0) {
        clientId = args[0]
}

let client = require('seneca')()
        .use('seneca-amqp-transport')
        .client({
                type: 'amqp',
                pin: 'service:myService',
                url: 'amqp://username:password@rabbitmq-server:5672'
        })

let i = 0
setInterval(function () {
        client.act(`service:myService,cmd:create,clientId:${clientId},i:${i}`, function (err, ret) {
                console.log('Client: received i = ' + ret.i);
        });
        i++;
}, 100)

