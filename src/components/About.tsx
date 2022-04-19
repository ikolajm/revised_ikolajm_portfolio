import { useEffect } from "react"
import { aboutObserver } from "../functions/Interactions";

export default () => {
    useEffect(() => {
        aboutObserver();
    })
    return (
        <section id="about" className="about">
            <div className="about-content">
                <h1>About me</h1>
                
                <div className="about-text">
                    <p>I am a web developer able to help build solid digital experiences. I'm highly adaptable, detail-oriented, and constantly trying to approach problems with empathy for both the user and team involved. I graduated from Eleven Fifty Academy in 2019, and since then I have been trusted to assist in the design and development of various projects to solve problems.</p>

                    <p className="list-intro">Recently, I've been spending some time learning more about the following technologies:</p>
                    <ul>
                        <li><span>Inkscape</span></li>
                        <li><span>Gimp</span></li>
                        <li><span>User Interfaces</span></li>
                        <li><span>Scrapy</span></li>
                        <li><span>GraphQL</span></li>
                        <li><span>AWS <span>(S3, RDS, Beanstalk)</span></span></li>
                    </ul>

                    <p>When I'm not working, I have a variety of interests that keep me away from my keyboard - I like to get outside and be active when I can. I love running, pick up basketball and riding my skateboard! More recently, I've been trying my hand at playing the guitar and digital art. I get a lot of enjoyment from activities that I can experience and share with others!</p>
                </div>
            </div>
        </section>
    )
}