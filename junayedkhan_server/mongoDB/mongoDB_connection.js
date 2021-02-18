const mongoose = require('mongoose');
//
mongoose_uri = 'mongodb+srv://junayedkhan:khan_0258@cluster0.sir31.mongodb.net/junayedkhan?retryWrites=true&w=majority'
//
const mongoDB_connections = async ()=> {
    try {
        const connection = await mongoose.connect(mongoose_uri, {
            useNewUrlParser:true,
            useCreateIndex:true,
            useUnifiedTopology:true
        })
        console.log(`mongoDB connected with ${connection.connections[0].host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
//
module.exports = mongoDB_connections;