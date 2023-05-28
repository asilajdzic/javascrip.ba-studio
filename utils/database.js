import mongoose from 'mongoose';

export const connectToDB = async () => {
	try {
		if (mongoose.connection.readyState === 1) {
			console.log('MongoDB is already connected');
			return;
		}

		await mongoose.connect(process.env.MONGO_URI, {
			dbName: 'javascriptBA',
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log('MongoDB connected');
	} catch (error) {
		console.error('MongoDB connection error:', error);
	}
};
