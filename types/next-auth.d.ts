// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from 'next-auth';
import type { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
	interface Session {
		user: {
			name: string;
			username: string;
			role: string;
			id: string;
		},
        token: JWT
	}
}
