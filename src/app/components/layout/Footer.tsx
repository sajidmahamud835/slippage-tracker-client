const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="text-center mt-3">
            © {currentYear} Slippage Tracker. All rights reserved.
        </footer>
    );
};

export default Footer;