const mongoose = require('mongoose')
const mongoURI = 'mongodb://127.0.0.1:27017/game'



const MongoToConnect=()=>{
    mongoose.connect(mongoURI)
}

// const connectToMongoDB = async () => {
//     try {
//       await mongoose.connect(process.env.MONGODB_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       });
//       console.log('Connected to MongoDB');
//     } catch (error) {
//       console.error('Error connecting to MongoDB:', error.message);
//       process.exit(1); // Exit the process if unable to connect
//     }
//   };

module.exports = MongoToConnect;