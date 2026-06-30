import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/vansh-m/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — vansh-m
              </a>
            </p>
            <p>
              <a
                href="mailto:vansh281999@gmail.com"
                data-cursor="disable"
              >
                vansh281999@gmail.com
              </a>
            </p>
            <p>
              <a
                href="tel:+917006225284"
                data-cursor="disable"
              >
                +91 70062 25284
              </a>
            </p>
            <h4>Education</h4>
            <p>
              B.Tech, Computer Science &amp; Engineering, Vellore Institute of
              Technology — 2022–2026
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Vansh281999"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/vansh-m/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Vansh Mahajan</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
