import mongoose from 'mongoose'

const connection = async()=>{

try {
  await mongoose.connect(process.env.MONGO);
} catch (error) {
  handleError(error);
}
}

export default connection