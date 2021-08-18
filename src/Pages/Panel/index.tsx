import clsx from "clsx";
import useStyles from "./styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useRef, useEffect, Suspense, lazy } from "react";
import { Iconly } from "react-iconly";
import MenuItems from "./../../Components/Sidebar/SidebarItems";
import { IconButton } from "@material-ui/core";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";

const UserDashboard = lazy(
	() => import("../../Components/Dashboard/UserDashboard")
);
const Markets = lazy(() => import("../../Pages/Markets"));

export default function Panel() {
	const location = useLocation();
	const history = useHistory();

	const classes = useStyles();

	const selectedMenu = useRef<HTMLDivElement>(null);
	const menuItemRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (selectedMenu.current && menuItemRef.current) {
			selectedMenu.current.style.height =
				menuItemRef.current.clientHeight.toString() + "px";

			selectedMenu.current.style.top =
				menuItemRef.current.offsetTop.toString() + "px";
		}

		return () => {
			console.log("cleanup");
		};
	}, [selectedMenu, menuItemRef]);

	useEffect(() => {
		if (selectedMenu.current && menuItemRef.current) {
			selectedMenu.current.style.height =
				menuItemRef.current.clientHeight.toString() + "px";

			selectedMenu.current.style.top =
				menuItemRef.current.offsetTop.toString() + "px";
		}

		console.log();
		return () => {
			console.log("cleanup");
		};
	}, [location]);

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					<Typography variant="h6" noWrap className={classes.title}>
						{MenuItems.find((item) => item.route === location.pathname)?.name}
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant="permanent"
				anchor="left"
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<div className={classes.profile}>
					<Iconly name="User" size={"xlarge"} primaryColor={"white"} />
					<Typography
						variant="subtitle1"
						noWrap
						className={classes.profileName}
					>
						برنامه نویس
					</Typography>
					<IconButton color="default">
						<Iconly name="Lock" primaryColor={"white"} />
					</IconButton>
				</div>
				<List>
					{MenuItems.map((item, index) => (
						<ListItem
							button
							key={index}
							onClick={() => history.push(item.route)}
							className={clsx(classes.menuItem, {
								[classes.selectedMenuText]: item.route === location.pathname,
							})}
							ref={item.route === location.pathname ? menuItemRef : null}
						>
							<ListItemIcon style={{ zIndex: 2 }}>
								<Iconly
									name={item.icon}
									primaryColor={
										item.route === location.pathname ? "blueviolet" : "white"
									}
								/>
							</ListItemIcon>
							<ListItemText primary={item.name} style={{ zIndex: 2 }} />
						</ListItem>
					))}
					<div ref={selectedMenu} className={classes.menuItemSelected}></div>
				</List>
			</Drawer>

			<main className={classes.content}>
				{/* <div className={classes.drawerHeader} /> */}
				<Suspense fallback={<div>Loading...</div>}>
					<Switch location={location}>
						<Route path="/panel/dashboard" exact component={UserDashboard} />
						<Route path="/panel/markets" component={Markets} />
					</Switch>
				</Suspense>
			</main>
		</div>
	);
}
