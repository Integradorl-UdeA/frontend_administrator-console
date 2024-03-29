'use client'
import { useSession } from 'next-auth/react';
import React from 'react';

const Home = () => {
	const {data: session, status} = useSession()
	console.log({session, status})
	return (
		<main>
			<h1>algo</h1>
		</main>
	);
};

export default Home;
