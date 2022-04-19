import { useEffect } from "react"
import { animateSplashContent } from "../functions/Animations"
import { splashNavClick, splashContentResizeFix } from "../functions/Interactions"

export default () => {
    useEffect(() => {
        animateSplashContent();
        splashContentResizeFix();
    });
    return (
        <section id="splash" className="splash">
            <div className="splash-content">
                <div className="row">
                    {/* Image */}
                    <div className="splash-image-container col-md-6">
                        <div className="splash-image">
                            <figure>
                                <img src="" alt="Illustration of computer with code on it" />
                            </figure>
                        </div>
                    </div>
                    {/* Text content */}
                    <div className="splash-text col-md-6">
                        <div className="splash-text-content">
                            <h1>Jacob Ikola</h1>
                            <h2>Full stack web developer</h2>
                            <button onClick={() => splashNavClick()}>Continue reading</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}