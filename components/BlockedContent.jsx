import Link from 'next/link';

const BlockedContent = () => {
	return (
		<section className='flex justify-center items-center w-full min-h-[400px] flex-col'>
			<h2 className='text-3xl font-bold mb-4 uppercase font-roboto text-center'>
				You are not signed in!
				<p className='text-xl font-semibold'>
					To access this page you need to sign in
				</p>
			</h2>
			<Link
				href='/auth/sign-in'
				className=' bg-js_black hover:bg-js_yellow text-white font-semibold py-2 px-4 rounded-lg'
			>
				Sign in
			</Link>
		</section>
	);
};

export default BlockedContent;
