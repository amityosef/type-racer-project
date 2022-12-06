import "core-js/features/array/flat-map";
import "core-js/features/map";
import "core-js/features/promise";
import "core-js/features/set";
import "raf/polyfill";
import "whatwg-fetch";
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();

import { HomePage } from "./pages/homePage/homePage";

const container = document.getElementById("app-root")!;
const root = createRoot(container);

root.render(
    <QueryClientProvider client={queryClient}>
        <HomePage />
    </QueryClientProvider>
);
