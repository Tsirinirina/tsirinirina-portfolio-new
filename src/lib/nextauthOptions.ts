import { Auth } from "@/services/auth/auth.model";
import { authentication } from "@/services/auth/auth.service";
import { HttpStatusCode } from "axios";
import { NextAuthOptions } from "next-auth";
import CredentialsProviders from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProviders({
      type: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req): Promise<any> {
        try {
          const authData: Auth = {
            login: credentials?.username as string,
            password: credentials?.password as string,
          };

          const res = await authentication(authData);

          if (res.status === HttpStatusCode.Ok) {
            const token = res.data.data.token.toString();
            const userData = res.data.data.user;

            return {
              id: userData._id,
              username: userData.username,
              email: userData.email,
              role: userData.role,
              photo: userData.photo,
              accessToken: token,
            };
          }
          throw new Error("Unauthorized");
        } catch (error: any) {
          throw new Error("Unauthorized");
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      // Add accessToken to the session
      session.accessToken = token.accessToken as string;

      // Ensure session.user exists
      if (session.user) {
        session.user._id = token.id as string;
        session.user.username = token.username as string;
        session.user.role = token.role as string;
      } else {
        session.user = {
          _id: token.id as string,
          username: token.username as string,
          role: token.role as string,
          email: token.email as string,
          photo: token.photo as string,
        };
      }

      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.id = user.id;
        token.username = user.username;
        token.role = user.role;
        token.photo = user.photo;
      }
      return token;
    },
  },
};
