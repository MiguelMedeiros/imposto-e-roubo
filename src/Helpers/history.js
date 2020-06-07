import { createBrowserHistory } from "history";
import ReactGA from "react-ga";

const history = createBrowserHistory();

history.listen((location, action) => {
  ReactGA.pageview(window.location.pathname + window.location.search);
  if (action === "PUSH") {
    if (location.hash.includes("#") === false) {
      window.scrollTo(0, 0);
    }
  }
});

export default history;
