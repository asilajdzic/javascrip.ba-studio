import { connectToDB } from '@utils/database';
import bcrypt from 'bcrypt';

import Author from '@models/author';

export const POST = async (req) => {
	const {
		first_name,
		last_name,
		email,
		password,
		imageUrl,
		github_link,
		facebook_link,
		linkedin_link,
		twitter_link,
	} = await req.json();
	try {
		await connectToDB();

		const hashedPassword = await bcrypt.hash(password, 10);

		const newAuthor = new Author({
			first_name,
			last_name,
			email,
			password: hashedPassword,
			imageUrl,
			github_link,
			facebook_link,
			linkedin_link,
			twitter_link,
		});
		await newAuthor.save();
		return new Response(JSON.stringify(newAuthor), { status: 201 });
	} catch (error) {
		console.log(error);
		return new Response('Failed to create a new Author', { status: 500 });
	}
};
