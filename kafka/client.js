const {Kafka}= require('kafkajs')

exports.kafka=new Kafka({
    clientId: 'my-app',
    brokers:['localhost:192.168.48.183:9092']
})