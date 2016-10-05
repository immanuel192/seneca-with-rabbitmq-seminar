var seneca = require('seneca')()
        .use('seneca-amqp-transport')
        .add('service:myService,cmd:create', function (args, done) {
                console.log(`From client ${args.clientId}: ${args.i}`);
                done(null, { i: args.i })
        })
        .listen({
                type: 'amqp',
                pin: 'service:myService',
                url: 'amqp://username:password@rabbitmq-server:5672'
        }) 
