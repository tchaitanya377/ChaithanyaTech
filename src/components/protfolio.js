import  profile  from "./profile4.png"
import "./portfolio.css"
import { Nav } from "./navbar"

export const Portfolio = () => {

    return(
        
        <div>
            <Nav />
            <div className="main">
            <div className="title">
                <h1 className="heading"> Starting from Scratch: A Portfolio for " Chaithanya " Newcomers</h1>
              
            </div>

            <div className="image">
            <img src={profile} alt="profile"  height="500rem" />
            </div>
        </div>
        </div>
    )
}