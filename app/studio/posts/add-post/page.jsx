'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';

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

const AddPost = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const session = useSession();

	const handleFormSubmit = async (e) => {
		e.preventDefault();

		try {
			await fetch('/api/posts/add-post', {
				method: 'POST',
				body: JSON.stringify({
					creator: session.user.id,
					technology: formFields.technology,
					category: formFields.category,
					heading: formFields.heading,
					body: formFields.body,
					imageUrl: formFields.imageUrl,
					tags: formFields.tags.trim().split(' '),
					createdAt: new Date(),
					views: 0,
					source_link: formFields.source_link,
				}),
			});
			setFormFields(defaultFormFields);
		} catch (error) {
			console.log(error);
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<>
			{session ? (
				<PostForm
					type={'Add Post'}
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

export default AddPost;
