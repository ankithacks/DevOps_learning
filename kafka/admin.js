import {kafka} from '../kafka-app/client.js'

async function init(){
    const admin=kafka.admin();
    console.log("admin connecting...")
    admin.connect()
    console.log("admin connected success")

    console.log('creating topics')
    await admin.createTopics({
        topics: 'rider-updates',
        numPartitions: 2
    })
    console.log('created successfully')
    console.log('disconnecting admin')
    await admin.disconnect()
}

init()