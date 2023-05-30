'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';

import BlockedContent from '@components/BlockedContent';

const defaultFormFields = {
	creator: '',
	first_name: '',
	last_name: '',
	email: '',
	password: '',
	imageUrl: '',
	github_link: '',
	facebook_link: '',
	twitter_link: '',
	linkedin_link: '',
};

const AddAuthor = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { data: session } = useSession();

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		console.log(formFields);
		try {
			await fetch('/api/authors/add-author', {
				method: 'POST',
				body: JSON.stringify({
					creator: session.user.id,
					first_name: formFields.first_name,
					last_name: formFields.last_name,
					email: formFields.email,
					password: formFields.password,
					imageUrl: formFields.imageUrl,
					github_link: formFields.github_link,
					facebook_link: formFields.facebook_link,
					twitter_link: formFields.twitter_link,
					linkedin_link: formFields.linkedin_link,
				}),
			});
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
				<section className='w-full flex flex-col items-center my-4 font-roboto'>
					<h2 className='text-3xl font-bold mb-2 uppercase font-roboto'>
						Add Author
					</h2>
					<form
						onSubmit={handleFormSubmit}
						className='flex shadow-2xl p-10 flex-col items-center'
					>
						<input
							className='border border-gray-300 rounded-md px-4 py-2 mb-4 w-80 text-gray-800'
							name='first_name'
							value={formFields.first_name}
							onChange={handleChange}
							placeholder='First Name'
							required
						/>
						<input
							className='border border-gray-300 rounded-md px-4 py-2 mb-4 w-80 text-gray-800'
							name='last_name'
							value={formFields.last_name}
							onChange={handleChange}
							placeholder='Last Name'
							required
						/>
						<input
							className='border border-gray-300 rounded-md px-4 py-2 mb-4 w-80 text-gray-800'
							name='email'
							value={formFields.email}
							onChange={handleChange}
							placeholder='Email'
							type='email'
							required
						/>
						<input
							className='border border-gray-300 rounded-md px-4 py-2 mb-4 w-80 text-gray-800'
							name='password'
							value={formFields.password}
							onChange={handleChange}
							placeholder='Password'
							type='password'
							required
						/>
						<input
							className='border border-gray-300 rounded-md px-4 py-2 mb-4 w-80 text-gray-800'
							name='imageUrl'
							value={formFields.imageUrl}
							onChange={handleChange}
							placeholder='Image URL'
							required
						/>
						<input
							className='border border-gray-300 rounded-md px-4 py-2 mb-4 w-80 text-gray-800'
							name='github_link'
							value={formFields.github_link}
							onChange={handleChange}
							placeholder='GitHub Link'
							required
						/>
						<input
							className='border border-gray-300 rounded-md px-4 py-2 mb-4 w-80 text-gray-800'
							name='facebook_link'
							value={formFields.facebook_link}
							onChange={handleChange}
							placeholder='Facebook Link'
							required
						/>
						<input
							className='border border-gray-300 rounded-md px-4 py-2 mb-4 w-80 text-gray-800'
							name='twitter_link'
							value={formFields.twitter_link}
							onChange={handleChange}
							placeholder='Twitter Link'
							required
						/>
						<input
							className='border border-gray-300 rounded-md px-4 py-2 mb-4 w-80 text-gray-800'
							name='linkedin_link'
							value={formFields.linkedin_link}
							onChange={handleChange}
							placeholder='LinkedIn Link'
							required
						/>
						<button className='custom_button' type='submit'>
							Add Author
						</button>
					</form>
				</section>
			) : (
				<BlockedContent />
			)}
		</>
	);
};

export default AddAuthor;
