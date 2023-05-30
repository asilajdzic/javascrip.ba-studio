import Image from 'next/image';
import { useRouter } from 'next/navigation';

const PostCard = ({ post }) => {
	const router = useRouter();
	return (
		<div
			onClick={() => router.push(`/studio/posts/preview/${post._id}`)}
			className='min-w-[100px] mx-auto max-w-[200px] hover:shadow-inner flex flex-col items-center overflow-hidden cursor-pointer'
		>
			<Image
				src={post.imageUrl}
				width={120}
				height={120}
				alt='post image'
				className='transition-transform duration-700 transform hover:scale-110'
			/>
			<h3 className='font-roboto font-semibold mt-3 text-gray-900 text-center'>
				{post.heading}
			</h3>
		</div>
	);
};

export default PostCard;
