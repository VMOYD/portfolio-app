import { FaGithub, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.icons}>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
                    <FaGithub />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
                    <FaTwitter />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
                    <FaLinkedin />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
                    <FaYoutube />
                </a>
            </div>
            <p style={styles.copyright}>© Vyom Dubey</p>
        </footer>
    );
};

const styles = {
    footer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        color: 'white',
    },
    icons: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '10px',
    },
    icon: {
        margin: '0 10px',
        color: 'white',
        fontSize: '24px',
        textDecoration: 'none',
    },
    copyright: {
        margin: 0,
    },
};

export default Footer;