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
				try {
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
				} catch (error: any) {
					throw Boolean(error.response?.data) || error.message;
				}
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			return { ...token, ...user };
		},
		async session({ session, token }) {
			const { name, username, id, role } = jwtDecode<ILoginJWTPayload>(
				token.token as string,
			);
			session.user = {
				name,
				username,
				id,
				role,
			};
			session.token = token;
			return session;
		},
	},
	session: {
		strategy: 'jwt',
		maxAge: 60 * 60 * 2,
	},
	secret: process.env.NEXTAUTH_SECRET,
	pages: {
		signIn: '/login',
	},
});

export { handler as GET, handler as POST };
