import { createStyles, makeStyles, Theme } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: "flex",
		},
		appBar: {
			transition: theme.transitions.create(["margin", "width"], {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			marginLeft: drawerWidth,
			width: `calc(100% - ${drawerWidth + 32}px)`,
			margin: theme.spacing(2),
			borderRadius: "10px",
		},
		appBarShift: {
			transition: theme.transitions.create(["margin", "width"], {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
		},
		title: {
			flexGrow: 1,
		},
		hide: {
			display: "none",
		},
		drawer: {
			width: drawerWidth,
			flexShrink: 0,
		},
		drawerPaper: {
			width: drawerWidth,
			backgroundColor: theme.palette.primary.light,
			borderRight: 0,
			overflow: "inherit",
		},
		drawerHeader: {
			display: "flex",
			alignItems: "center",
			padding: theme.spacing(0, 1),
			// necessary for content to be below app bar
			...theme.mixins.toolbar,
			justifyContent: "flex-start",
		},
		content: {
			flexGrow: 1,
			margin: theme.spacing(2),
			marginTop: theme.spacing(12),
			backgroundColor: theme.palette.background.paper,
			borderRadius: theme.shape.borderRadius,
			padding: theme.spacing(2),
			boxShadow:
				"0 8px 17px 2px rgba(203, 118, 239, 0.14),0 3px 14px 2px rgba(203, 118, 239, 0.12),0 5px 5px -3px rgba(203, 118, 239, 0.3);",
		},
		menuItem: {
			margin: theme.spacing(3, 0, 0, 2),
			width: "inherit",
			transition: theme.transitions.create("background-color", {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.shortest,
			}),
			position: "relative",
			color: theme.palette.grey[100],
		},
		selectedMenuText: {
			color: theme.palette.common.black,
		},
		menuItemSelected: {
			backgroundColor: theme.palette.background.default,
			position: "absolute",
			width: `calc(100% - ${theme.spacing(2)}px)`,
			height: "100%",
			left: theme.spacing(2),
			top: 0,
			zIndex: 1,
			borderRadius: "10px 0 0 10px",
			transition: theme.transitions.create("top", {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			"&::before": {
				content: '""',
				position: "absolute",
				backgroundColor: theme.palette.primary.light,
				bottom: -24,
				height: 24,
				width: 35,
				right: 0,
				borderTopRightRadius: 25,
				boxShadow: `14px -5px 0 0 ${theme.palette.background.default}`,
			},
			"&::after": {
				content: '""',
				position: "absolute",
				backgroundColor: theme.palette.primary.light,
				top: -24,
				height: 24,
				width: 35,
				right: 0,
				borderBottomRightRadius: 25,
				boxShadow: `14px 5px 0 0 ${theme.palette.background.default}`,
			},
		},
		profile: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			flexDirection: "column",
			padding: theme.spacing(5, 5, 0, 5),
		},
		profileName: {
			fontSize: "12px",
			padding: theme.spacing(2, 0, 0, 0),
			color: theme.palette.grey[100],
		},
	})
);

export default useStyles;

// , {
//     [classes.active]: index === open,
// }
