import {Background} from './src/components/Background';
import {Providers} from "./src/Providers";
import {Routes} from "./src/Routes";
import React from "react";

export default function App() {
    return (
        <Providers>
            <Background>
                <Routes />
            </Background>
        </Providers>
    )
}

