import Footer from "../Footer"
import Header from "../Header"
import vision from '../../static/vision.png'
import mission from '../../static/mission.png'
import howItWorks from '../../static/how-it-works.png'

const About = () => {
    return(
        <div className='About'>
            <Header/>
            <div className="container">
                <h1 className='text-center'>ABOUT US</h1>
                <div className="vision section flex">
                    <div className='content'>
                        <h2 className='title'>Our Vision</h2>
                        <p className="text">To help reduce stress associated with getting rid-of and sales of excess and unwanted items while also improving our client’s overall wellbeing.</p>
                    </div>
                    <div className='image-container'>
                        <img src={vision} alt="Vision"/>
                    </div>
                </div>

                <div className="mission section flex">
                    <div className='content'>
                        <h2 className='title'>Our Mission</h2>
                        <p className="text">To add value to our clients by ensuring that sellers of neatly used and new valuable items connect with buyers of same at affordable price.</p>
                    </div>
                    <div className='image-container'>
                        <img src={mission} alt="Mission"/>
                    </div>
                </div>

                <div className="how-it-works section flex">
                    <div className='content'>
                        <h2 className='title'>How it works</h2>
                        <p className="text">Eazzideclutter is a decluttering outfit. We connect sellers and buyers of neatly used and new items at affordable prices.

                            - Do you have any unwanted item of value and wondering what to do with them?
                            - Are you relocating and need to dispose your items?
                            - Are you changing apartments and need to upgrade or dispose some old items?
                            - Would you like to give to some items to people in dare need of them?

                            @ Eazzideclutter, we help Turn your Clutter to Cash.

                            Are you looking to buy items at reasonable prices, our promise is Value for less.
                        </p></div>
                    <div className='image-container'>
                        <img src={howItWorks} alt="How it works"/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default About