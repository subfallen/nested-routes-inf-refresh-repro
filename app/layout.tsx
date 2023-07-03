import Wrapper from "./react/Wrapper";
import Link from "next/link";

type Props = {
    one: React.ReactNode;
    two: React.ReactNode;
}

let renderCount = 0;

export default function RootLayout({one, two}: Props) {
    console.log("RootLayout rendering", renderCount++);
    return (
        <html>
        <head/>
        <body>
        <Wrapper>
            {one && two ?
                (<div> {one} {two} </div>)
                : linkToReproduction()}
        </Wrapper>
        </body>
        </html>
    )
}

function linkToReproduction() {
    return (
        <a href={"/a/1"}>Go to reproduction</a>
    )

    // Does NOT reproduce using Link
    // return (
    //     <Link href={"/a/1"}>Go to reproduction</Link>
    // )
}
