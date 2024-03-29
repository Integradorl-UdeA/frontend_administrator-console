import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';

const handler = NextAuth({
	providers: [
		CredentialsProvider({
			name: 'Credentials',

			credentials: {
				username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials, req) {
				const response = await axios.post(
					`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
					{
						username: credentials?.username,
						password: credentials?.password,
					},
					{
						headers: {
							'Content-Type': 'application/json',
						},
					},
				);
				const user = response.data;
                console.log(user)

				if (user.error === true) throw user;
				return user;
			},
		}),
	],
});

export { handler as GET, handler as POST };
