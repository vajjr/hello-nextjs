import Link from "next/link";

function Sobre() {
    return (
        <div>
            <h1>Sobre Teste</h1>
            <p>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </p>
        </div>
    );
}

export default Sobre;