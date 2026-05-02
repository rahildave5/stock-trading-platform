import React from 'react'
import homeHeroImage from '../../../../images/homeHero.png'

function Hero() {
    return (
        <section className='hero' style={{ paddingBottom: '70px' }}>
            <div className="container p-5">
                <div className="row text-center">
                    <img className='mb-5' style={{ marginLeft: '135px' }} src={homeHeroImage} alt='Hero Image' />
                    <h1 className='mt-4'>Invest in everything</h1>
                    <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                    <button className='mt-5 btn btn-primary fs-5' style={{ padding: "10px 30px", width: "21%", margin: "0 auto" }}>Sign up for free</button>
                </div>
            </div>
        </section>
    );
}

export default Hero;