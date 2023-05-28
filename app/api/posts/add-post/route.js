import { connectToDB } from '@utils/database';

import Post from '@models/post';

export const POST = async (req) => {
	const {
		creator,
		technology,
		category,
		heading,
		body,
		imageUrl,
		tags,
		createdAt,
		views,
		source_link,
	} = await req.json();
	try {
		await connectToDB();

		const newPost = new Post({
			creator,
			technology,
			category,
			heading,
			body,
			imageUrl,
			tags,
			createdAt,
			views,
			source_link,
		});
		await newPost.save();
		return new Response(JSON.stringify(newPost), { status: 201 });
	} catch (error) {
		console.log(error);
		return new Response('Failed to create a new Post', { status: 500 });
	}
};
