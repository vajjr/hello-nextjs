import Link from "next/link";

function Home() {
    return (
    <div>
        <h1>Home 2 Teste</h1>
        <p>
            <Link href="/sobre">
                <a>Sobre</a>
            </Link>
        </p>
    </div>
    );
}

export default Home;