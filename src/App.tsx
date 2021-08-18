import { Suspense, lazy } from "react";
import "./Assets/bootstrap/bootstrap-utilities.min.css";
import { CssBaseline, StylesProvider, jssPreset } from "@material-ui/core";
import { create } from "jss";
import rtl from "jss-rtl";
import { Route, Switch } from "react-router-dom";
import Auth from "./Pages/Auth";
import { IconlyProvider } from "react-iconly";

const Panel = lazy(() => import("./Pages/Panel"));

function App() {
	const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
	return (
		<StylesProvider jss={jss}>
			<div className="App">
				<IconlyProvider set="broken" primaryColor="currentColor">
					<CssBaseline />
					<Suspense fallback={<div>Loading...</div>}>
						<Switch>
							<Route path={"/login"} component={Auth} />
							<Route path={"/panel"} component={Panel} />
						</Switch>
					</Suspense>
				</IconlyProvider>
			</div>
		</StylesProvider>
	);
}

export default App;
