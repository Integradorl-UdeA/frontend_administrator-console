import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';


interface ILoginJWTPayload {
	id: string;
	role: string;
	name: string;
	username: string;
	sub: string;
	iat: number;
	exp: number;
}

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

				if (user.error === true) throw user;
				return user;
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			return { ...token, ...user };
		},
		async session({ session, token }) {
			const decodedJWT = jwtDecode<ILoginJWTPayload>(token.token as string);
			console.log('decodedJWT: ', decodedJWT);
			session.user.name = decodedJWT.name;
			session.user.username = decodedJWT.username;
			session.user.id = decodedJWT.id;
			session.user.role = decodedJWT.role;
			session.token = token
			console.log('session.', session);
			return session;
		},
	},
	pages: {
		signIn: '/login',
	},
});

export { handler as GET, handler as POST };
