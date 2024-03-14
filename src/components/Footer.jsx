import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = (props) => {
    return (
        <footer id="contact">
            <div className="footer-grid-container">
                <div className="grid-item">
                    <h3>SkinFace</h3>
                    <ol>
                        <li>Craft your dream complexion. Let's chat.</li>
                    </ol>
                </div>
                <div className="grid-item">
                    <h3>Contact us</h3>
                    <ol>
                        <li className="flex-icons">
                            <FontAwesomeIcon icon={faTwitter} />
                            <FontAwesomeIcon icon={faFacebook} />
                            <FontAwesomeIcon icon={faInstagram} />
                        </li>
                        {props.data && props.data.contact.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ol>
                </div>
                <div className="grid-item">
                    <h3>Our services</h3>
                    <ol>
                        {props.data && props.data.services.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ol>
                </div>
                <div className="grid-item">
                    <h3>Zamblera Lucas Daniel 2023</h3>
                    <ol>
                        {props.data && props.data.company.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
