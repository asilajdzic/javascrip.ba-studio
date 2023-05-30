import { connectToDB } from '@utils/database';

import Post from '@models/post';

export const GET = async (req, { params }) => {
	try {
		await connectToDB();

		const post = await Post.findById(params.id).populate('creator');
		if (!post) return new Response('Post not found', { status: 404 });
		return new Response(JSON.stringify(post), { status: 200 });
	} catch (error) {
		return new Response('Failed to fetch post', { status: 500 });
	}
};

export const PATCH = async (req, { params }) => {
	const { technology, category, heading, body, imageUrl, tags, source_link } =
		await req.json();

	try {
		await connectToDB();

		const exsistingPost = await Post.findById(params.id);

		if (!exsistingPost) return new Response('Post not found', { status: 404 });

		exsistingPost.technology = technology;
		exsistingPost.category = category;
		exsistingPost.heading = heading;
		exsistingPost.body = body;
		exsistingPost.imageUrl = imageUrl;
		exsistingPost.tags = tags;
		exsistingPost.source_link = source_link;

		await exsistingPost.save();

		return new Response(JSON.stringify(exsistingPost), { status: 200 });
	} catch (error) {
		return new Response('Failed to update post', { status: 500 });
	}
};

export const DELETE = async (req, { params }) => {
	try {
		await connectToDB();

		await Post.findByIdAndRemove(params.id);

		return new Response('Post deleted', { status: 200 });
	} catch (error) {
		return new Response('Failed to delete post', { status: 500 });
	}
};
