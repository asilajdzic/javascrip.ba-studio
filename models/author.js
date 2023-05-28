import { Schema, model, models } from 'mongoose';

const AuthorSchema = new Schema({
	first_name: {
		type: String,
		required: [true, 'Author must have a first name'],
	},
	last_name: {
		type: String,
		required: [true, 'Author must have a last name'],
	},
	email: {
		type: String,
		required: [true, 'Author must have an email'],
	},
	password: {
		type: String,
		required: [true, 'Author must have a password'],
	},
	imageUrl: {
		type: String,
	},
	github_link: {
		type: String,
	},
	facebook_link: {
		type: String,
	},
	twitter_link: {
		type: String,
	},
	linkedin_link: {
		type: String,
	},
});

const Author = models.Author || model('Author', AuthorSchema);

export default Author;
