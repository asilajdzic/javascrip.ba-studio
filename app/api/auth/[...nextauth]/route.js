import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';

import { connectToDB } from '@utils/database';

import Author from '@models/author';

const options = {
	providers: [
		CredentialsProvider({
			name: 'Email and password',
			credentials: {
				email: {
					label: 'Email',
					type: 'text',
					placeholder: 'your-email@example.com',
				},
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				const { email, password } = credentials;

				connectToDB();
				const user = await Author.findOne({ email });

				if (!user) {
					throw new Error('No user found');
				}

				const validPassword = await bcrypt.compare(password, user.password);

				if (!validPassword) {
					throw new Error('Invalid password');
				}
				return { id: user.id, email: user.email };
			},
		}),
	],
	pages: {
		signIn: '/auth/sign-in',
	},
	session: {
		jwt: true,
		maxAge: 30 * 24 * 60 * 60,
	},
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };
