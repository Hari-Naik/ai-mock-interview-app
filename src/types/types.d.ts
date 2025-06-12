import { type DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      /** The user's id. */
      id: string;
    } & DefaultSession["user"];
  }
}

// The `JWT` interface can be found in the `next-auth/jwt` submodule

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
  interface JWT {
    userId: string;
  }
}
