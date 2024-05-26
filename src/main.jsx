import React from "react";
import ReactDOM from "react-dom/client";

import { SingIn } from "./pages/SingIn";
import { SingUp } from "./pages/SingUp";

import { Home } from "./pages/Home";
import { DishView } from "./pages/DishView";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Home />
        </ThemeProvider>
    </React.StrictMode>
);