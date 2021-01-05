import React from 'react';

import './footer.styles.css';

const Footer = () => {
    return (
        <footer>
            <p>Copyright {(new Date().getFullYear())} &copy; Alco Group</p>
        </footer>
    );
}

export default Footer;