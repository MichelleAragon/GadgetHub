
import React from 'react'
import { NavGadgetHub } from '../Componentes/NavGadgetHub';
import { FooterGadgetHub } from '../Componentes/FooterGadgetHub';

export const MobilePage = () => {
  return (
    <>
        <NavGadgetHub/>

        <main className="main">
    
            <h1 className="h1-title">MOBILES</h1>
            <section className="sectionMain">

                <article className="articleCardLeft">
                    <img className="imgCard" alt="imgCardLeft" src="assets/img/iphone.png" />
                    <div className=" divImgTex">
                        <h4 className="imgTextH4">IPHONE</h4>
                        <p className="pMain">Designed to make a difference</p>
                        <p className="pLearnMore">Learn more </p>
                    </div>
                </article>

                <article className="articleCardCenter">
                    <img className="imgCard" alt="imgCardCenter" src="assets/img/samsung.webp" />
                    <div className="divImgTex">
                        <h4 className="imgTextH4">SAMSUNG</h4>
                        <p className="pMain">Capture life with a new perspective</p>
                        <p className="pLearnMore">Learn more </p>
                    </div>
                </article>
                
                <article className="articleCardRight">
                    <img className="imgCard" alt="imgCardRight" src="assets/img/airpods.png" />
                    <div className="divImgTex">
                        <h4 className="imgTextH4">ACCESORIES</h4>
                        <p className="pMain">Featured phone accessories</p>
                        <p className="pLearnMore">Learn more </p>
                    </div>
                </article>     

            </section>

        </main>

        <FooterGadgetHub/>
    </>
  )
}






