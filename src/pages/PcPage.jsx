import React from 'react'
import { NavGadgetHub } from '../Componentes/NavGadgetHub';
import { FooterGadgetHub } from '../Componentes/FooterGadgetHub';

export const PcPage = () => {
  return (
    <>
        <NavGadgetHub />

        <main className="main">
    
            <h1 className="h1-title">LAPTOPS AND DESKTOPS</h1>
            <section className="sectionMain">

                <article className="articleCardLeft">
                    <img className="imgCard" alt="imgCardLeft" src="assets/img/razer-new.jpeg " />
                    <div className=" divImgTex">
                        <h4 className="imgTextH4">LAPTOPS</h4>
                        <p className="pMain">Sleek high-performance gaming laptops</p>
                        <p className="pLearnMore">Learn more </p>
                    </div>
                </article>

                <article className="articleCardCenter">
                    <img className="imgCard" alt="imgCardCenter" src="assets/img/pc.jpeg" />
                    <div className="divImgTex">
                        <h4 className="imgTextH4">DESKTOPS & COMPONENTS</h4>
                        <p className="pMain">Engineered for enthusiasts</p>
                        <p className="pLearnMore">Learn more </p>
                    </div>
                </article>
                
                <article className="articleCardRight">
                    <img className="imgCard" alt="imgCardRight" src="assets/img/auriculares-razer-accesories.webp" />
                    <div className="divImgTex">
                        <h4 className="imgTextH4">ACCESORIES</h4>
                        <p className="pMain">Crafting the perfect gaming experience</p>
                        <p className="pLearnMore">Learn more </p>
                    </div>
                </article>     

            </section>

        </main> 

        <FooterGadgetHub />
    
    </>
  )
}


    

