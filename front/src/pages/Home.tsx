import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react"
import ExploreContainer from "../components/ExploreContainer"

const Home: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Blank</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen={true}>
				<ExploreContainer />
			</IonContent>
		</IonPage>
	)
}

export default Home
