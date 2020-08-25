import { makeStyles } from "@material-ui/core";
import { white, blue } from "@material-ui/core/colors";

const useHeaderStyles = makeStyles({
  rootHeaderSearch: {
    flex: 1,
    display: 'flex',
  },
  inputBaseStyles: {
    flex: 1,
  },
  createServerButtonStyles: {
    color: "white",
    backgroundColor: "blue",
  }
});

export default useHeaderStyles;