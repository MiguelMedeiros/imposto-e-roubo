import { createBrowserHistory as createHistory } from "history";
import ReactGA from "react-ga";

const history = createHistory();

history.listen((location, action) => {
  ReactGA.pageview(window.location.pathname + window.location.search);
  if (action === "PUSH") {
    window.scrollTo(0, 0);
  }
});

export default history;
