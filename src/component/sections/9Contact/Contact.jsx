
import React from "react";

function Contact() {

    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    return (


        <div>

            <div className= "contactSection">
            <hr />

            <div className="contact-header-container-l col-sm-3 col-md-6">
                <p data-aos="fade-down" data-aos-duration="1500" id="hireMe" className="headerParagrafe">CONTACT</p>
                <h1 data-aos="fade-down" data-aos-duration="1000" id="contact" className="headerTitle">Contact With Me</h1>
            </div>

            <div className="contact-container">
                <div className="left-contact" >
                    <div className="contact-img-container">
                        <img className="contact-img" src="\img\yasser-portfolio-images\island-of-the-last-survivor-Screenshots\pac22.png" alt="" />
                    </div>
                     <p className="card-Header"></p>
                    <h3 className="Cards-title">Yasser Allam</h3>
                    <p className="contact-describtion">Game Developer</p>

                    <div className="description1">
                        <p>I am available for freelance work. Connect with me via and call in to my account.
                        </p>
                        <span className="phone"> Phone: <a href="tel:01284839372">+01015603786</a></span>
                        <span className="mail">Email: <a href="mailto:ahmedallam0101560@gmail.com">ahmedallam0101560@gmail.com</a></span>
                    </div>

                    <div className="social-area">
                        <div className="name">FIND WITH ME</div>
                        <div className="social-icone">
                            <a data-aos="fade-up" data-aos-duration="1500" href="https://www.facebook.com/allam.mado/"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                            <a data-aos="fade-up" data-aos-duration="1750" href="https://www.linkedin.com/in/ahmed-allam-45b317207/"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                            <a data-aos="fade-up" data-aos-duration="2000" href="https://www.instagram.com/ahmedmohamed0111/"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                        </div>
                    </div>

                </div>

                <div className="right-contact">
                    <form className="rnt-contact-form rwt-dynamic-form row" id="contact-form" method="POST" action="mailto:ahmedallam0101560@gmail.com">

                        <div className="col-lg-6">
                            <div className="form-group">
                                <label for="contact-name">Your Name</label>
                                <input  name="contact-name" id="contact-name" autoComplete="off" type="text" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="form-group">
                                <label for="contact-phone">Phone Number</label>
                                <input  name="contact-phone" type="text" autoComplete="off" required />
                            </div> 
                        </div>

                        <div className="col-lg-12">
                            <div className="form-group">
                                <label for="contact-email">Email</label>
                                <input  name="contact-email" type="email" autoComplete="off" required />
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="form-group">
                                <label for="subject">subject</label>
                                <input  name="subject" type="text" autoComplete="off" required />
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="form-group">
                                <label for="contact-message">Your Message</label>
                                <textarea name="contact-message" id="contact-message" autoComplete="off" cols="30" rows="10" required ></textarea>
                            </div>
                        </div>

                        <div className="contact-btn col-lg-12">
                            <button  href="mailto:ahmedallam0101560@gmail.com" name="submit" type="submit" id="submit" className="rn-btn">
                                <span>SEND MESSAGE</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>


        </div>

























    )
}

export default Contact;
