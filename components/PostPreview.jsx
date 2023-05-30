import { useRouter } from 'next/navigation';

import Image from 'next/image';
import Link from 'next/link';

const PostPreview = ({ post }) => {
	const router = useRouter();
	const createdAt = new Date(post.createdAt);
	const formattedDate = createdAt.toLocaleString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

	const handleDelete = async () => {
		const hasConfirmed = confirm(
			'Are you sure you want to delete this prompt?'
		);

		if (hasConfirmed) {
			try {
				await fetch(`/api/posts/post/${post._id}`, {
					method: 'DELETE',
				});
				router.replace('/');
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<section className='w-full flex flex-col items-center my-8'>
			<h1 className='font-roboto w-[30rem] text-gray-800 font-semibold text-xl text-center'>
				{post.heading}
			</h1>
			<span className='w-[30rem] flex justify-between my-4'>
				<p className='font-roboto text-gray-400 text-sm text-center'>
					&#128198; {formattedDate}
				</p>
				<p className='font-roboto text-gray-400 text-sm text-center'>
					&#128065; {post.views}
				</p>
			</span>
			{post?.imageUrl && (
				<Image src={post.imageUrl} width={200} height={200} alt='post image' />
			)}
			<hr className='w-[60%] my-8 ' />
			<p className='w-[30rem] font-roboto text-gray-500 text-base text-justify'>
				{post.body}
			</p>
			<Link
				target='_blank'
				href={post.source_link || '#'}
				className='bg-js_black hover:bg-js_yellow text-white font-semibold py-2 mt-5 px-4 rounded-lg'
			>
				Read More
			</Link>
			<hr className='w-[60%] my-8 ' />
			<p className='w-[30rem] font-roboto text-gray-400 text-base text-justify italic '>
				Tags: {post?.tags && post.tags.map((tag) => ' #' + tag)}
			</p>
			<div className='flex w-[30rem] my-4 justify-between'>
				<Link className='custom_button' href={`/studio/posts/edit/${post._id}`}>
					Edit
				</Link>
				<button onClick={handleDelete} className='custom_button'>
					Delete
				</button>
			</div>
			<hr className='w-[60%] my-8 ' />
			{post?.creator && (
				<div className='w-[30rem] flex flex-row'>
					<div className='w-1/3 flex flex-col items-center gap-3'>
						<Image
							className='rounded-full'
							src={post.creator.imageUrl}
							width={60}
							height={60}
							alt='profile picture'
						/>
						<p className='font-roboto text-gray-600 font-medium text-base'>
							{post.creator.first_name} {post.creator.last_name}
						</p>
					</div>
					<div className='w-1/3 flex items-center justify-center'>
						<Link href={post.creator.facebook_link} className='w-8 h-8'>
							<Image
								alt='Facebook Icon'
								src='/assets/images/facebook-icon.svg'
								className='object-contain'
								width={28}
								height={28}
							/>
						</Link>
						<Link href={post.creator.twitter_link} className='w-8 h-8'>
							<Image
								alt='Twitter Icon'
								src='/assets/images/twitter-icon.svg'
								className='object-contain'
								width={28}
								height={28}
							/>
						</Link>
						<Link href={post.creator.github_link} className='w-8 h-8'>
							<Image
								alt='Github Icon'
								src='/assets/images/github-icon.svg'
								className='object-contain'
								width={24}
								height={24}
							/>
						</Link>
						<Link href={post.creator.linkedin_link} className='w-8 h-8'>
							<Image
								alt='LinkedIn Icon'
								src='/assets/images/linkedin-icon.svg'
								className='object-contain'
								width={28}
								height={28}
							/>
						</Link>
					</div>
				</div>
			)}
		</section>
	);
};

export default PostPreview;
