import { Redirect, Route } from "react-router-dom"
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react"
import { IonReactRouter } from "@ionic/react-router"
import Home from "./pages/Home"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { httpBatchLink } from "@trpc/client"
import React, { useState } from "react"
import { trpc } from "./utils/trpc"

/* Tailwind Css */
import "./theme/tailwind.css"

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css"

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css"
import "@ionic/react/css/structure.css"
import "@ionic/react/css/typography.css"

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css"
import "@ionic/react/css/float-elements.css"
import "@ionic/react/css/text-alignment.css"
import "@ionic/react/css/text-transformation.css"
import "@ionic/react/css/flex-utils.css"
import "@ionic/react/css/display.css"

/* Theme variables */
import "./theme/variables.css"

setupIonicReact()

const App: React.FC = () => {
	const [queryClient] = useState(() => new QueryClient())
	const [trpcClient] = useState(() =>
		trpc.createClient({
			links: [
				httpBatchLink({
					url: "http://localhost:3000",
				}),
			],
		}),
	)
	return (
		<trpc.Provider client={trpcClient} queryClient={queryClient}>
			<QueryClientProvider client={queryClient}>
				<IonApp>
					<IonReactRouter>
						<IonRouterOutlet>
							<Route exact={true} path="/home">
								<Home />
							</Route>
							<Route exact={true} path="/">
								<Redirect to="/home" />
							</Route>
						</IonRouterOutlet>
					</IonReactRouter>
				</IonApp>
			</QueryClientProvider>
		</trpc.Provider>
	)
}

export default App
