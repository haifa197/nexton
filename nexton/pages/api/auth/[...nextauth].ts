import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { NextApiRequest, NextApiResponse } from "next"
import { NextAuthOptions } from "next-auth"

const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials) {
          return null
        }

        const res = await fetch("./users", {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        })

        const user = await res.json()

        if (res.ok && user) {
          return user
        }

        return null
      }
    })
  ],
  // Additional options can be added here
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  return NextAuth(req, res, options)
}
