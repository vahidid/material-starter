import {createStyles, makeStyles, Theme} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            height: "100vh"
        },
        box: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "2.3em",
            '& > img': {
                width: "80%"
            }
        },
        title: {
            fontWeight: 700,
            margin: "1em 0",
            textShadow: "0px 0px 9px rgba(0,0,0,0.3)"
        },
        form: {
            display: "flex",
            flexWrap: "wrap",
            margin: theme.spacing(3,0),
            '& > *': {
                flexGrow: 2,
                margin: theme.spacing(1),
            },
            '& > .otp' : {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                "& > *": {
                    flexGrow: 1,
                    margin: theme.spacing(1),
                }
            }
        },
        account: {
            height: "100vh",
        },
        account_tabs: {
            flexGrow: 1,
            "& button": {
                flexGrow: 1
            },
            "& .MuiTabs-flexContainer": {
                justifyContent: "space-between"
            },
        }
    })
)

export default useStyles;