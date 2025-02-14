import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import serverAxios from "./axios-server";

declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      username?: string | null;
      role: string | null;
    };
  }

  interface User {
    id?: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    username?: string | null;
    role?: string | null;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credential",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          if (
            credentials.username === "superman" &&
            credentials.password === "1150"
          ) {
            return {
              name: "Super Admin",
              username: "Super Admin",
              role: "super_admin",
            };
          } else if (
            credentials.username === "admin" &&
            credentials.password === "1234"
          ) {
            return { name: "Admin", username: "Admin", role: "admin" };
          } else {
            return {
              name: "May Be Someone",
              username: `${credentials.username}` || "May Be Someone",
              role: "user",
            };
          }
          // const response = await serverAxios.post("/login", {
          const response = await serverAxios.post("/Authentications/Login", {
            // username: credentials?.username,
            username: credentials?.username,
            password: credentials?.password,
          });
          // console.log("check login", response.data);
          const user = response.data;
          if (user) {
            // console.log("check user data return from api", user);
            // return {
            //   id: user.user.id,
            //   name: user.user.fname + " " + user.user.lname,
            //   email: user.user.email,
            //   username: user.user.username,
            //   avatar: user.user.avatar,
            // };
            // return { ...user };
            return { name: "Admin", username: "Admin" };
          } else {
            return null;
          }
        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: `/login`,
  },
  session: {
    strategy: "jwt",
    maxAge: Number(process.env.NEXT_PUBLIC_TOKEN_EXP) || 1800,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.username = user.username;
        token.picture = user.image;
        token.role = user.role;
      }
      // console.log("token", token);
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          id: typeof token.id === "string" ? token.id : "",
          name: typeof token.name === "string" ? token.name : "",
          email: typeof token.email === "string" ? token.email : "",
          username: typeof token.username === "string" ? token.username : "",
          image: typeof token.picture === "string" ? token.picture : "",
          role: typeof token.role === "string" ? token.role : "",
          emailVerified: null,
        };
      }
      // console.log("session: ", session);
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
});
