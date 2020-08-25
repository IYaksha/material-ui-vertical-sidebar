import { makeStyles } from "@material-ui/core";
import { blue, indigo } from "@material-ui/core/colors";

const useDrawerStyles = makeStyles (theme => ({
  root: {
    backgroundColor: indigo[900],
    textAlign: "center",
    height: '100vh',
  },
  tabRoot: {
    minWidth: '100%', 
    width: '100%',
  },
  tabLabel: {
    fontSize: 12,
    color: "white",
  },
  tabIcon: {
    fontSize: 35,
    color: "white",
  },
  tabIndicator: {
    width: 4,
    backgroundColor: blue[500],
  },
  logoStyles: {
    width: "80%",
    marginTop: 8,
    marginBottom: 8,
  }
}));

export default useDrawerStyles;