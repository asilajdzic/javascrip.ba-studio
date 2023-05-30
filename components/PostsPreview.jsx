import PostCard from './PostCard';

const PostsPreview = ({ posts }) => {
	return (
		<section className='w-full flex flex-col items-center shadow-xl'>
			<h1 className='font-roboto w-full my-6 text-gray-800 font-semibold text-3xl text-center'>
				Your Posts
			</h1>
			<div className='w-full max-w-screen-lg my-10'>
				<div className='grid gap-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] justify-around items-center'>
					{posts.map((post) => (
						<PostCard key={post._id} post={post} />
					))}
				</div>
			</div>
		</section>
	);
};

export default PostsPreview;
