import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import GlobalStyle from "./globalStyle";
import Home from "./pages/Home";

function App() {
  const theme = {
    colors: {
      primary: {
        Cyan: "hsl(180, 66%, 49%)",
        DarkViolet: "hsl(257, 27%, 26%)",
      },
      secondary: {
        Red: "hsl(0, 87%, 67%)",
      },
      neutral: {
        Gray: "hsl(0, 0%, 75%)",
        GrayishViolet: "hsl(257, 7%, 63%)",
        VeryDarkBlue: "hsl(255, 11%, 22%)",
        VeryDarkViolet: "hsl(260, 8%, 14%)",
      },
    },
  };

  return (
    <Router>
      <div className="App">
        <ThemeProvider theme={theme}>
          <GlobalStyle />

          <Header />
          <Switch>
            <Route path="/shortly-frontend-coding-challenge">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
