import linked from './linkedin.png'
import youtbe from './youtube.png'
import twitter from './twitter.png'
import "./about.css"
import { Nav } from './navbar'

export const About = () =>{
    return(
        <div>
            <Nav />
              <div className="content">
            <h1 className='heading'> About</h1>
            <div className="text">
                <p>Our mission is to provide valuable and insightful content that inspires, educates, and entertains our readers.
                     We strive to create a platform that fosters discussion and community, where people can connect and engage with each 
                     other on a variety of topics. We believe that through thoughtful and meaningful content, we can make a positive impact 
                     on our readers' lives and the world around us.</p>
            </div>
            <div className="socialmead">
                    <h1 className='social'>Social Media </h1>
                    <div className='images'>
                        <a href="https://www.linkedin.com/in/chaithanyatech/" target="_blank"> <img src={linked} alt="linked"/></a>
                        <a href="https://www.youtube.com/@chaithanyatech" target="_blank"> <img src={youtbe} alt="linked"/></a>
                        <a href="https://twitter.com/chaitanya_377" target="_blank"> <img src={twitter} alt="linked"/></a>
                    </div>
            </div>
        </div>
        </div>
    )
}