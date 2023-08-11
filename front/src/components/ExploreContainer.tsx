import { trpc } from "../utils/trpc"

const ExploreContainer = () => {
	const userQuery = trpc.userById.useQuery("1")

	if (userQuery.status === "loading") {
		return <div>Loading...</div>
	}

	if (userQuery.status === "error") {
		return <div>Error: {userQuery.error.message}</div>
	}

	return (
		<div className="w-full h-full flex flex-col justify-center items-center">
			<strong>Ready to create an app?</strong>
			<p>{userQuery.data}</p>
			<p>
				Start with Ionic with{" "}
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://ionicframework.com/docs/components"
				>
					UI Components
				</a>
			</p>
		</div>
	)
}

export default ExploreContainer
