import React from 'react'
import { NavGadgetHub } from "../Componentes/NavGadgetHub"
import { FooterGadgetHub } from "../Componentes/FooterGadgetHub"

export const ConsolePage = () => {
  return (
    <>
        <NavGadgetHub />

        <main className="main">
    
            <h1 className="h1-title">CONSOLE GAMING</h1>
            <section className="sectionMain">

                <article className="articleCardLeft">
                    <img className="imgCard" alt="imgCardLeft" src='assets/img/playstation.jpeg' />
                    <div className=" divImgTex">
                        <h4 className="imgTextH4">PLAYSTATION</h4>
                        <p className="pMain">Experience an all-new generation of incredible PlayStation games</p>
                        <p className="pLearnMore">Learn more </p>
                    </div>
                </article>

                <article className="articleCardCenter">
                    <img className="imgCard" alt="imgCardCenter" src="assets/img/xbox-one-x.webp" />
                    <div className="divImgTex">
                        <h4 className="imgTextH4">XBOX</h4>
                        <p className="pMain">Experience the new generation of games and entertainment with Xbox.</p>
                        <p className="pLearnMore">Learn more</p>
                    </div>
                </article>
                
                <article className="articleCardRight">
                    <img className="imgCard" alt="imgCardRight" src="assets/img/mandos.jpeg" />
                    <div className="divImgTex">
                        <h4 className="imgTextH4">ACCESORIES</h4>
                        <p className="pMain">Enjoy complete console on any platform with our high-performance headsets, controllers, and accessories</p>
                        <p className="pLearnMore">Learn more </p>
                    </div>
                </article>     

            </section>

        </main>

        <FooterGadgetHub/>
    </>
  )
}



