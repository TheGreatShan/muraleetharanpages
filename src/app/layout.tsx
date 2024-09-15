import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Shansai Muraleetharan",
    description: "Portfolio from Shansai Muraleetharan",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {

    return (
        <html lang="en">
        <body>
        {children}
        </body>
        </html>
    );
}
