import { publicProcedure, router } from "./trpc"
import { createHTTPServer } from "@trpc/server/adapters/standalone"
import { z } from "zod"
import cors from "cors"

const appRouter = router({
	userList: publicProcedure.query(async () => {
		const users = ["user1", "user2", "user3"]
		return users
	}),
	userById: publicProcedure.input(z.string()).query(async (opts) => {
		const { input } = opts
		const user = `user ${input}`
		return user
	}),
	userCreate: publicProcedure
		.input(z.object({ name: z.string() }))
		.mutation(async (opts) => {
			const { input } = opts
			const user = `user ${input.name}`
			return user
		}),
})

const server = createHTTPServer({
	middleware: cors(),
	router: appRouter,
})

server.listen(3000)

export type AppRouter = typeof appRouter
