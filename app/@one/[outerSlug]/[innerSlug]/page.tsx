type Props = {
    params: {
        outerSlug: string;
        innerSlug: number;
    }
}

export default async function One({params: {outerSlug, innerSlug}}: Props) {
    return (
        <div>
            <h1>One</h1>
            <p>{`On the outside, it seems ${outerSlug}; but on the inside: ${innerSlug}`}</p>
        </div>
    );
}