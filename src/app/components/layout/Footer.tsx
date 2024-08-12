const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="text-center">
            © {currentYear} Slippage Tracker. All rights reserved.
        </footer>
    );
};

export default Footer;