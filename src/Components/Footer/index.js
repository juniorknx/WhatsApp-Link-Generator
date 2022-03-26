import { FaGithub, FaLinkedin } from 'react-icons/fa';

import './styles.scss';

export function Footer() {
    return (
        <footer>
            <div className="footer_container">
                <div>
                    <a href="https://github.com/juniorknx" target="__blank">
                        <FaGithub size={24} />
                    </a>

                    <a href="https://www.linkedin.com/in/julio-junior-ba665015b/" target="__blank">
                        <FaLinkedin size={24} />
                    </a>
                </div>

                <div>
                    <span>
                        {(new Date().getFullYear())} © Link Generator
                    </span>
                </div>
            </div>
        </footer>
    )
}