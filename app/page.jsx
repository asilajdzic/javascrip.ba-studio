'use client';

import { useSession } from 'next-auth/react';

import BlockedContent from '@components/BlockedContent';
import Dashboard from '@components/Dashboard';

const Home = () => {
	const { data: session } = useSession();
	console.log(session);
	return (
		<>{session ? <Dashboard id={session.user.id} /> : <BlockedContent />}</>
	);
};

export default Home;
