import { createMuiTheme } from "@material-ui/core/styles";
import { VazirRegularTtf, VazirRegularWoff, VazirRegularWoff2 } from "./fonts";

const theme = createMuiTheme({
	direction: "rtl",
	shape: {
		borderRadius: 10,
	},
	palette: {
		primary: {
			main: "#521A69",
			light: "#762F93",
			"200": "#B05DD2",
			"100": "#CB76EF",
		},
		secondary: {
			main: "#1E618E",
			light: "#3587BE",
			"200": "#4EA6E1",
			"100": "#78C9FF",
		},
		background: {
			default: "#f5f5f5",
			paper: "#fff",
		},
	},
	typography: {
		fontFamily: ["Vazir"].join(","),
	},

	overrides: {
		MuiCssBaseline: {
			"@global": {
				"@font-face": [VazirRegularTtf, VazirRegularWoff, VazirRegularWoff2],
			},
		},
		MuiButton: {
			containedPrimary: {
				borderRadius: "10px",
				boxShadow:
					"0 8px 17px 2px rgba(40, 52, 88, 0.14),0 3px 14px 2px rgba(40, 52, 88, 0.12),0 5px 5px -3px rgba(40, 52, 88, 0.3)",
			},
			containedSecondary: {
				borderRadius: "10px",
				boxShadow:
					"0 8px 17px 2px rgba(45, 60, 149, 0.14),0 3px 14px 2px rgba(45, 60, 149, 0.12),0 5px 5px -3px rgba(45, 60, 149, 0.3)",
			},
		},
		MuiCard: {
			root: {
				borderRadius: "30px",
				boxShadow:
					"0 16px 24px 2px rgba(220, 220, 220, 0.14),0 6px 30px 5px rgba(220, 220, 220, 0.12),0 8px 10px -7px rgba(220, 220, 220, 0.3)",
			},
		},
	},
});

export default theme;
