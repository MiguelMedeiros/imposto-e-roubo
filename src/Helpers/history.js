import { createBrowserHistory as createHistory } from "history";
import ReactGA from "react-ga";
import ReactPixel from "react-facebook-pixel";

const history = createHistory();

history.listen((location, action) => {
  ReactGA.pageview(window.location.pathname + window.location.search);
  ReactPixel.pageView();
  if (action === "PUSH") {
    window.scrollTo(0, 0);
  }
});

export default history;
