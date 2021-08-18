import { Route, Switch } from "react-router-dom";
import Login from "../../Components/Login";

export default function Auth() {
	return (
		<div id={"auth"}>
			<Switch>
				<Route exact path={"/login"} component={Login} />
			</Switch>
		</div>
	);
}
