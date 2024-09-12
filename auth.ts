import NextAuth from "next-auth";
import Passage from "next-auth/providers/passage";
import { SupabaseAdapter } from "@auth/supabase-adapter";
import jwt from "jsonwebtoken";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Passage({
      clientId: process.env.AUTH_PASSAGE_ID as string,
      clientSecret: process.env.AUTH_PASSAGE_SECRET as string,
      issuer: process.env.AUTH_PASSAGE_ISSUER as string,
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  adapter: SupabaseAdapter({
    url: process.env.SUPABASE_URL as string,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY as string,
  }),
  callbacks: {
    async session({ session, user }) {
      const signingSecret = process.env.SUPABASE_JWT_SECRET;
      if (signingSecret) {
        const payload = {
          aud: "authenticated",
          exp: Math.floor(new Date(session.expires).getTime() / 1000),
          sub: user.id,
          email: user.email,
          role: "authenticated",
        };
        (session as any).supabaseAccessToken = jwt.sign(payload, signingSecret);
      }
      return session;
    },
  },
});
