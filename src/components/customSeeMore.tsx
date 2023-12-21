export const customeSeeMore = (text: string) => {
    return ({ toggleMore }: { toggleMore: Function}) => (
        <p
            onClick={() => toggleMore(true)}
            style={{
                color: 'white',
                textAlign: 'center',
            }}
        >
            {text} →
        </p>
    )
}