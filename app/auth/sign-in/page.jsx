'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const SignIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const router = useRouter();

	const handleSignIn = (e) => {
		e.preventDefault();

		signIn('credentials', {
			email,
			password,
			redirect: false,
		});
		router.replace('/');
	};

	return (
		<section className='flex justify-center items-center w-full min-h-[400px]'>
			<div className='flex flex-col items-center'>
				<h2 className='text-3xl font-bold mb-2 uppercase font-roboto'>
					Sign In
				</h2>
				<form className='flex flex-col w-80' onSubmit={handleSignIn}>
					<input
						type='text'
						placeholder='Email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className='border border-gray-300 rounded-md px-4 py-2 mb-4 w-full text-gray-800'
					/>
					<input
						type='password'
						placeholder='Password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className='border border-gray-300 rounded-md px-4 py-2 mb-4 w-full text-gray-800'
					/>
					<button className='custom_button' type='submit'>
						Sign In
					</button>
				</form>
			</div>
		</section>
	);
};

export default SignIn;
