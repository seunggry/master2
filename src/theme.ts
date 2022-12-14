import {DefaultTheme} from "styled-components";

export const darkTheme: DefaultTheme = {
    bgColor: "#2f3640",
    textColor: "#f5f6fa",
    accentColor: "#9c88ff",
    cardBgColor: "transparent",
}

declare module 'styled-components' {
    export interface DefaultTheme{
        bgColor: string;
        textColor: string;
        accentColor: string;
        cardBgColor: string;
    }
}