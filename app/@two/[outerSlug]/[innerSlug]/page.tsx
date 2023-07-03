type Props = {
    params: {
        outerSlug: string;
        innerSlug: number;
    }
}

export default async function Two({params: {outerSlug, innerSlug}}: Props) {
    return (
        <div>
            <h1>Two</h1>
            <p>{`From ${innerSlug} to ${outerSlug}`}</p>
        </div>
    );
}
