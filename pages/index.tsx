import { NextPage } from "next";
import { createStore } from "redux";
import { Provider } from "react-redux";
import RejectionReducer from "../store/RejectionReducers";
import Form from "../components/Form";
import Points from "../components/Points";
import Questions from "../components/Questions";

const HomePage: NextPage = () => {
	const store = createStore(RejectionReducer);

	return (
		<Provider store={store}>
			<Form />
			<Points />
			<Questions />
		</Provider>
	);
};

export default HomePage;
