export default function Footer() {
    return (
        <footer className="bg-[var(--primary-color)] text-center text-lg p-2">
            <p>Copyright &copy; {new Date().getFullYear()} | The Church of Jesus Christ of Latter-day Saints | All rights reserved.</p>
        </footer>
    );
}