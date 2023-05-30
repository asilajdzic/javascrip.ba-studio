'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

import PostForm from '@components/PostForm';
import BlockedContent from '@components/BlockedContent';

const defaultFormFields = {
	technology: 'javascript',
	category: 'tutorials',
	heading: '',
	body: '',
	imageUrl: '',
	tags: '',
	source_link: '',
};

const EditPost = () => {
	const [post, setPost] = useState(defaultFormFields);
	const params = useParams();
	const router = useRouter();

	useEffect(() => {
		const fetchPost = async () => {
			const response = await fetch(`/api/posts/post/${params.id}`);
			const data = await response.json();

			setPost({ ...data, tags: data.tags.join(' ') });
		};
		fetchPost();
	}, [params.id]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setPost({ ...post, [name]: value });
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch(`/api/posts/post/${params.id}`, {
				method: 'PATCH',
				body: JSON.stringify({
					technology: post.technology,
					category: post.category,
					heading: post.heading,
					body: post.body,
					imageUrl: post.imageUrl,
					tags: post.tags.trim().split(' '),
					source_link: post.source_link,
				}),
			});
			if (response.ok) router.replace(`/studio/posts/preview/${params.id}`);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			{session ? (
				<PostForm
					type={'Edit Post'}
					formFields={formFields}
					handleChange={handleChange}
					handleFormSubmit={handleFormSubmit}
				/>
			) : (
				<BlockedContent />
			)}
		</>
	);
};

export default EditPost;
