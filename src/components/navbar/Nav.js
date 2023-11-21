import ContactLink from "./OnClick"

export default function Navbar() {
    return (
        <nav className="nav">
            <a href="/" className="page-title">Woody Umstead</a>
            <ul>
                <li>
                    <a id="contact" onClick={ContactLink} href="./contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
}
