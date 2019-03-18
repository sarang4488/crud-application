import React, { Component } from "react";
import Navbar from "./components/navbar";
import "./App.css";
import { withStyles } from "@material-ui/core/styles";

// import _ from "lodash";
import { Provider } from "react-redux";
import store from "./redux/store";
import SimpleTable from "../src/components/table";

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  }
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Navbar />
          <SimpleTable />
        </div>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
