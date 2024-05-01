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
