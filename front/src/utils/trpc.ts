import { createTRPCReact } from "@trpc/react-query"
import type { AppRouter } from "../../../back/index"

export const trpc = createTRPCReact<AppRouter>()
