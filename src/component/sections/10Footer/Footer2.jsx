import React, { useState } from "react";
import emailjs from "emailjs-com"


function Footer() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const sendMail = (e) => {
        e.preventDefault();

        const { name, email, message } = formData;

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        const serviceID = 'service_3wz5s79';
        const templateID = 'template_2jsmfa5';
        const userID = 'Iogu1peRabHurp_c-';

        const templateParams = {
            from_name: name,
            user_email: email,
            message: message,
        };

        emailjs.send(serviceID, templateID, templateParams, userID)
            .then((response) => {
                alert('Email sent successfully!');
                console.log('SUCCESS!', response.status, response.text);
                setFormData({ name: '', email: '', message: '' });
            })
            .catch((err) => {
                console.error('FAILED...', err);
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <div id="EndPage">
            <hr />

            <div className="footerItems">

                <div className="item1">
                    <a href="/">
                        <svg
                            width="67pt"
                            height="67pt"
                            version="1.1"
                            viewBox="0 0 700 700"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill="transparent"
                                className="path"
                                stroke="#c4cfde"
                                strokeWidth="30"
                                d="m570.5 197.75v-113.75c0-14-10.5-24.5-24.5-24.5h-113.75c-21 0-42 7-59.5 17.5-8.75 5.25-15.75 12.25-22.75 21-19.25-22.75-49-38.5-82.25-38.5h-113.75c-14 0-24.5 10.5-24.5 24.5v113.75c0 33.25 15.75 61.25 38.5 82.25-22.75 19.25-38.5 49-38.5 82.25v113.75c0 14 10.5 24.5 24.5 24.5h113.75c14 0 24.5-10.5 24.5-24.5s-10.5-24.5-24.5-24.5h-89.25v-89.25c0-31.5 24.5-56 56-56h89.25v89.25c0 59.5 47.25 106.75 106.75 106.75h113.75c14 0 24.5-10.5 24.5-24.5v-113.75c0-33.25-15.75-61.25-38.5-82.25 26.25-21 40.25-50.75 40.25-84zm-334.25 57.75c-31.5 0-56-24.5-56-56v-91h89.25c31.5 0 56 24.5 56 56v89.25h-89.25zm285.25 106.75v89.25h-89.25c-31.5 0-56-24.5-56-56v-89.25h89.25c29.75-1.75 56 24.5 56 56zm-147-106.75v-89.25c0-19.25 8.75-36.75 24.5-47.25 8.75-7 21-10.5 31.5-10.5h89.25v89.25c0 31.5-24.5 56-56 56h-89.25z"
                            />
                        </svg>
                    </a>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis non, fugit totam vel laboriosam vitae.</p>
                    <div id="contact" className="iconsEndPage">

                        <div className="Icons">
                            <i title="facebook" className="ico fab fa-facebook-f" />
                            <i title="facebook" className="ico2 fab fa-facebook-f" />
                        </div>


                        <div className="Icons">
                            <i title="linkedin" className="ico fab fa-linkedin-in"></i>
                            <i title="linkedin" className="ico2 fab fa-linkedin-in"></i>
                        </div>
                        <div className="Icons">

                            <i title="github" className="ico fab fa-github"></i>
                            <i title="github" className="ico2 fab fa-github"></i>
                        </div>

                    </div>
                </div>


                <div className="item4">
                    {/* <form className="rnt-contact-form rwt-dynamic-form row" id="contact-form" method="POST" action="mailto:ahmedallam0101560@gmail.com">
                        <h3 className="footerHeaderText">Mail Me</h3>

                    <div className="mailInserter">
                        <input className="footerInput" placeholder="info@yourmail.com" />

                    <button href="mailto:ahmedallam0101560@gmail.com" name="submit" type="submit"  className="footerBtn">
                        <i className="fal fa-paper-plane" style={{ fontSize: "18px" }}></i>
                    </button>
                    </div>
                    </form> */}


                    <form className="rnt-contact-form rwt-dynamic-form row" onSubmit={sendMail}>
                        <h3 className="footerHeaderText">Mail Me</h3>
                        <div className="mailInserter">
                            {/* <input
                                type="text"
                                name="name"
                                className="footerInput"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                className="footerInput"
                                placeholder="info@yourmail.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                className="footerInput"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                            <button type="submit" className="footerBtn">
                                <i className="fal fa-paper-plane" style={{ fontSize: "18px" }}></i>
                            </button> */}









                            {/* <form className="rnt-contact-form rwt-dynamic-form row" onSubmit={sendMail}> */}
                                <ul className="wrapper">

                                    <li style={{ '--i': 4 }}>
                                        <input
                                            className="input" type="text"
                                            name="name"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required />
                                    </li>
                                    <li style={{ '--i': 3 }}>
                                        <input
                                            className="input" type="email"
                                            name="email"
                                            placeholder="info@yourmail.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required />
                                    </li>
                                    <li style={{ '--i': 2 }}>
                                        <input
                                         className="input" name="message"
                                            placeholder="Your Message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required />
                                    </li>
                                    <button type="submit" style={{ '--i': 1 }}>Submit</button>
                                </ul>
                            {/* </form> */}

                        </div>

                    </form>
                </div>

            </div>

            <div className="footer">
                <p className="footerText1">©2024, All Rights Reserved.</p>
                <p className="footerText2">Made with <span><i className="fas fa-heart" style={{ fontSize: "18px;" }}></i></span> By Ahmed Allam</p>
            </div>

        </div>
    )
}

export default Footer;