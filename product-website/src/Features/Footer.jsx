

function Footer() {
    return (
        <footer className="bg-[var(--footer-bg)] p-10 flex flex-col items-center justify-center text-white">
            <ul className="flex items-center justify-center gap-2">
                <li>Facebook/</li>
                <li>Twitter/</li>
                <li>Instagram/</li>
                <li>LinkedIn/</li>
                <li>WhatsApp/</li>
                <li>+234-80123456789</li>
            </ul>
            <p className="mt-8">123 Kasali str, Off pellinghton drive, Palmgrove.</p>
            <p className="mt-16">&copy;C 2023. This website is a Product of <span className="text-[var(--gold)] font-semibold"> RockTeaPl</span></p>
        </footer>
    )
}

export default Footer
