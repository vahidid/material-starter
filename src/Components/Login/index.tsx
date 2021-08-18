import { Button, Card, Grid, TextField, Typography } from "@material-ui/core";
import useStyles from "./styles";
import LoginSVG from "./../../Assets/images/login.svg";
import { useHistory } from "react-router-dom";

export default function Login() {
	const history = useHistory();
	const classes = useStyles();

	return (
		<div className="login">
			<Grid
				container
				justify={"center"}
				alignContent={"center"}
				className={classes.container}
			>
				<Grid item md={3}>
					<Card className={classes.box}>
						<img src={LoginSVG} alt={"LoginSVG"} />

						<Typography variant={"h5"} className={classes.title}>
							Machine Learning Trader
						</Typography>

						<Typography variant={"caption"}>
							لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
							استفاده از طراحان گرافیک است.
						</Typography>

						<form className={classes.form} noValidate autoComplete="off">
							<TextField className={"phoneNumber"} label="شماره تلفن همراه" />
							<TextField label="رمزعبور" />
						</form>

						<Button
							variant={"contained"}
							color={"primary"}
							fullWidth
							onClick={() => history.push("/panel")}
						>
							ورود
						</Button>
					</Card>
				</Grid>
			</Grid>
		</div>
	);
}
