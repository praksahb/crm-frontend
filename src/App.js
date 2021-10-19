import React from "react";
import "./App.css";
import { DefaultLayout } from "./layout/DefaultLayout";

import { Entry } from "./pages/entry/Entry.page";

function App() {
	return (
		<div className="App">
			{/* <Entry /> */}
			<DefaultLayout>send page component</DefaultLayout>
		</div>
	);
}

export default App;
