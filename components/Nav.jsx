'use client';

import { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';

import Link from 'next/link';

const Nav = () => {
	const [toggleDropdown, setToggleDropdown] = useState(false);
	const { data: session } = useSession();

	const handleSignOut = () => {
		signOut();
	};

	return (
		<nav className='nav'>
			<div className='sm:flex hidden'>
				<div className='flex gap-5 flex-wrap'>
					{session ? (
						<>
							{' '}
							<Link className='nav_link' href='/'>
								Home
							</Link>
							<Link className='nav_link' href='/studio/posts/add-post'>
								Add Post
							</Link>
							<Link className='nav_link' href='/studio/authors/add-author'>
								Add Author
							</Link>
							<button onClick={handleSignOut} className='nav_link'>
								Sign Out
							</button>
						</>
					) : (
						<Link className='nav_link' href='auth/sign-in'>
							Sign In
						</Link>
					)}
				</div>
			</div>
			<div className='sm:hidden flex'>
				{session ? (
					<span
						className='nav_link cursor-pointer'
						onClick={() => setToggleDropdown((prev) => !prev)}
					>
						Menu
						{toggleDropdown && (
							<div className='dropdown'>
								<Link className='nav_link' href='/'>
									Home
								</Link>
								<Link className='nav_link' href='/studio/posts/add-post'>
									Add Post
								</Link>
								<Link className='nav_link' href='/studio/authors/add-author'>
									Add Author
								</Link>
								<button onClick={handleSignOut} className='nav_link'>
									Sign Out
								</button>
							</div>
						)}
					</span>
				) : (
					<Link className='nav_link' href='auth/sign-in'>
						Sign In
					</Link>
				)}
			</div>
		</nav>
	);
};

export default Nav;
