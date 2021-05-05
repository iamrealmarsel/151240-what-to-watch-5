import { createBrowserHistory } from "history";
import { basename } from "./const";

const browserHistory = createBrowserHistory({ basename: basename });

export default browserHistory;
