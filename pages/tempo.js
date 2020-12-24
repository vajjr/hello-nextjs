function Tempo(props) {

    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return (
        <div>
            <h1>Diâmico</h1>
            <p>
                {dynamicDateString} (dinâmico)
            </p>
            <p>
                {props.staticDateString} (estáticoc)
            </p>
        </div>
    );
}

export function getStaticProps() {
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props: {
            staticDateString
        }, revalidate: 1
    }
}

export default Tempo;