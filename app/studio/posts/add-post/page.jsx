'use client';

import { useState } from 'react';

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

	const handleFormSubmit = async (e) => {
		e.preventDefault();

		try {
			await fetch('/api/posts/add-post', {
				method: 'POST',
				body: JSON.stringify({
					creator: '64685f82e321da82c3d96ee2',
					technology: formFields.technology,
					category: formFields.category,
					heading: formFields.heading,
					body: formFields.body,
					imageUrl: formFields.imageUrl,
					tags: formFields.tags.split(' '),
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
		<section className='w-full flex flex-col items-center my-10 font-roboto'>
			<form
				className='flex flex-col shadow-2xl p-10 items-center'
				onSubmit={handleFormSubmit}
			>
				<select
					className='border border-gray-300 rounded-md px-4 py-2 mb-4 w-80 text-gray-800'
					name='technology'
					value={formFields.technology}
					onChange={handleChange}
					placeholder='Technology'
				>
					<option value={'javascript'}>JavaScript</option>
					<option value={'typescript'}>TypeScript</option>
					<option value={'nodejs'}>Node</option>
					<option value={'denojs'}>Deno</option>
					<option value={'reactjs'}>React</option>
					<option value={'angularjs'}>Angular</option>
					<option value={'vuejs'}>Vue</option>
					<option value={'emberjs'}>Ember</option>
					<option value={'jquerry'}>jQuerry</option>
					<option value={'meteorjs'}>Meteor</option>
					<option value={'other'}>Other</option>
				</select>
				<select
					className='border border-gray-300 rounded-md px-4 py-2 mb-4 w-80 text-gray-800'
					name='category'
					value={formFields.category}
					onChange={handleChange}
					placeholder='Category'
				>
					<option value={'tutorials'}>Tutorials</option>
					<option value={'blogs'}>Blogs</option>
					<option value={'news'}>News</option>
					<option value={'videos'}>Videos</option>
					<option value={'meetups'}>Meetups</option>
					<option value={'jobs'}>Jobs</option>
				</select>
				<input
					className='border border-gray-300 rounded-md px-4 py-2 mb-4 w-80 text-gray-800'
					name='heading'
					value={formFields.heading}
					onChange={handleChange}
					placeholder='Heading'
				/>
				<textarea
					className='border border-gray-300 rounded-md px-4 py-2 mb-4 w-80 text-gray-800'
					rows={4}
					name='body'
					value={formFields.body}
					onChange={handleChange}
					placeholder='Body'
				/>
				<input
					className='border border-gray-300 rounded-md px-4 py-2 mb-4 w-80 text-gray-800'
					name='imageUrl'
					value={formFields.imageUrl}
					onChange={handleChange}
					placeholder='Image URL'
				/>
				<input
					className='border border-gray-300 rounded-md px-4 py-2 mb-4 w-80 text-gray-800'
					name='tags'
					value={formFields.tags}
					onChange={handleChange}
					placeholder='Tags'
				/>
				<input
					className='border border-gray-300 rounded-md px-4 py-2 mb-4 w-80 text-gray-800'
					name='source_link'
					value={formFields.source_link}
					onChange={handleChange}
					placeholder='Source Link'
				/>
				<button className='custom_button' type='submit'>
					Add Post
				</button>
			</form>
		</section>
	);
};

export default AddPost;
