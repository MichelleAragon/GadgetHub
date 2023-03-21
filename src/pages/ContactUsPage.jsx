 import React from 'react';
import { NavGadgetHub } from '../Componentes/NavGadgetHub';
import { FooterGadgetHub } from '../Componentes/FooterGadgetHub';


 export const ContactUsPage = () => {
   return (
     <>
        <NavGadgetHub />

        <main className="main">

            <h1 className="h1-title">CONTACT US</h1>
            <section className="contactUsContainer">

                <article className="articleContactUs">
                        <h3 className="h3ContactUs">Contact</h3>

                        <div className="divContact">
                            <div className="divBase divDirection">
                                <i className="fa-solid fa-location-dot"></i>
                                <p>Prebo. Valencia Estado Carabobo</p>
                            </div>

                            <div className="divBase divEmail">
                                <i className="fa-solid fa-at"></i>
                                <p>gadgethub@gmail.com</p>
                            </div>

                            <div className="divBase divNumber">
                                <i className="fa-solid fa-phone"></i>
                                <p>0424555555</p>
                            </div>

                            <div className="divBase divUrl">
                                <i className="fa-solid fa-globe"></i>
                                <p>www.gadgethub.com</p>
                            </div>
                        </div>
                        <div className="divIframe" >
                            <iframe width="80%" height="80%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                                src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=es&amp;q=prebo%20valencia%20+(Location)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                                <a href="https://www.gps.ie/car-satnav-gps/">GPS car tracker</a>
                            </iframe>
                        </div>
                </article>


                <article className="articleGetInTouch">
                    <div className="divGetInTouch">
                        <h3 className="h3GetInTouch">Get in touch</h3>
                        <form className="formGetInTouch">
                            <label className="labelFormGetInTouch">Feel free to drop us a line below!</label>
                            <input type="text" placeholder="Name"/>
                            <input type="email" placeholder="Email"/>
                            <textarea className="formTextarea" placeholder="Message"></textarea>
                            <button>Send</button>
                        </form>
                    </div>
                </article>
                
            </section>

            <aside className="asideWhatsapp">
                <botton className="bottonWhatsapp">
                    <a href="https://www.whatsapp.com/" target="_blank">
                        <img className="imgLogoWhatsapp" alt="imgLogoWhatsapps" src="assets/img/logodewhatsapp.jpeg"/>
                    </a>
                </botton>
            </aside>

        </main>

        <FooterGadgetHub />
     </>
   )
 }
 

    
    
    



