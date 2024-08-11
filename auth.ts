import NextAuth from "next-auth";
import Passage from "next-auth/providers/passage";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Passage],
});
