import type {Metadata} from "next";
import "./globals.css";
import Template from "./template";

export const metadata: Metadata = {
    title: {
        template: '%s | Muraleetharan',
        default: 'Shansai Muraleetharan',
      },
    description: "Portfolio from Shansai Muraleetharan",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {

    return (
        <html lang="en" data-theme="winter">
        <body>
        <Template>{children}</Template>
        </body>
        </html>
    );
}
