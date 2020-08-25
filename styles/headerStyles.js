import { makeStyles } from "@material-ui/core";
import { white, blue } from "@material-ui/core/colors";

const useHeaderStyles = makeStyles(theme => ({
  rootHeaderSearch: {
    flex: 1,
    display: 'flex',
  },
  inputBaseStyles: {
    flex: 1,
  },
  createServerButtonStyles: {
    backgroundColor: theme.palette.success.main,
    color: "white",
  }
}));

export default useHeaderStyles;