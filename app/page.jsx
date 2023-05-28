'use client';

import { useSession } from 'next-auth/react';

const Home = () => {
	const { data: session } = useSession();
	return (
		<>{session ? <p>{session.user.email}</p> : <p>user not logged on</p>}</>
	);
};

export default Home;
