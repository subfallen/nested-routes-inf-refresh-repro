import Wrapper from "./react/Wrapper";

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
                : (<a href={"/a/1"}>Go to reproduction</a>)}
        </Wrapper>
        </body>
        </html>
    )
}
