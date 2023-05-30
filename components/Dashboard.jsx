'use client';

import { useState, useEffect } from 'react';

import PostsPreview from './PostsPreview';

const Dashboard = ({ id }) => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const response = await fetch(`/api/posts/author/${id}`);
			const data = await response.json();
			setPosts(data);
		};
		fetchPosts();
	}, [id]);

	return (
		<section className='dashboard'>
			<PostsPreview posts={posts} />
		</section>
	);
};

export default Dashboard;
