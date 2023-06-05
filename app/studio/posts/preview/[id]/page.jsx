'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useSession } from 'next-auth/react';

import PostPreview from '@components/PostPreview';
import BlockedContent from '@components/BlockedContent';

const Post = () => {
	const [post, setPost] = useState(null);
	const params = useParams();
	const { data: session } = useSession();

	useEffect(() => {
		const fetchPost = async () => {
			const response = await fetch(`/api/posts/post/${params.id}`);
			const data = await response.json();

			setPost(data);
		};
		fetchPost();
	}, [params.id]);
	return (
		<>{session ? post && <PostPreview post={post} /> : <BlockedContent />}</>
	);
};

export default Post;
