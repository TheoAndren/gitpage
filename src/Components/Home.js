import {Link} from "react-router-dom";

export default function Home(){
    return(
        <>
        <nav>
            <ul className="my-list">
                <li>Home</li>
                <li>
                    <Link to="/gitpage/portfolio">Portfolio</Link>
                </li>
            </ul>
        </nav>
        <main>
            <h2>Home</h2>
        </main>
    </>
    );
}