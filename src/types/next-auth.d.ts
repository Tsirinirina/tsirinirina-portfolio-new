import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    user: {
      _id: string;
      username: string;
      email: string;
      role: string;
      photo?: string;
    };
  }
  interface JWT {
    accessToken?: string;
    _id: string;
    username: string;
    email: string;
    role: string;
    photo?: string;
  }

  interface User {
    _id: string;
    username: string;
    email: string;
    role: string;
    photo: string;
    accessToken: string;
  }
}
