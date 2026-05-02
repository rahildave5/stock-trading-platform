import React from 'react'
import ecosystem from '../../../../images/ecosystem.png'
import pressLogos from '../../../../images/pressLogos.png'

function Awards() {
    return (
        <section className="ecosystem">
            <div className="container">
                <div className="row">

                    <div className="col-5 awards-copy" >
                        <h2 className="awards-heading ">Trust with confidence</h2>
                        <div className="z-functions">
                            <h3>Customer-first always</h3>
                            <div className="why-us">
                                <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India's largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                            </div>
                        </div>
                        <div className="z-functions">
                            <h3>No spam or gimmicks</h3>
                            <div className="why-us">
                                <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href="/">Our philosophies.</a></p>
                            </div>
                        </div>
                        <div className="z-functions">
                            <h3>The Zerodha universe</h3>
                            <div className="why-us">
                                <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                            </div>
                        </div>
                        <div className="z-functions">
                            <h3>Do better with money</h3>
                            <div className="why-us">
                                <p>With initiatives like <a href="/">Nudge</a> and <a href="/">Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-7">
                        <div className="text-center">
                            <img className='awards-img' src={ecosystem} alt="Ecosystem" />
                        </div>
                        <p className='text-center' style={{ margin: '16px 0 15px' }}>
                            <a href="/">Explore our demo <i class="fa-solid fa-arrow-right"></i></a>
                            <a href="/" style={{ margin: '0 0 0 24px' }}>Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
                        </p>
                    </div>
                    <div className="press">
                        <a href='/media'>
                            <img src={pressLogos} alt="Press Logos" />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Awards;
