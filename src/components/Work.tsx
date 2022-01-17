export default () => {
    return (
        <section id="work" className="work">
            <div className="work-content">
                <h1>Recent work experience</h1>

                <div className="experience__details">
                    <nav>
                        <div className="experience-button-container">
                            <button type="button" id="left-btn" disabled>
                                <i className="fas fa-long-arrow-alt-left"></i>
                            </button>
                            <span id="position-indicator">
                                1/3
                            </span>
                            <button type="button" id="right-btn">
                                <i className="fas fa-long-arrow-alt-right"></i>
                            </button>
                        </div>
                        <ul>
                            <li id="efa-li" className="experience-list-item active">
                                <button type="button">
                                    Eleven Fifty Academy
                                </button>
                            </li>
                            <li id="propelup-li" className="experience-list-item">
                                <button type="button">
                                    PropelUp
                                </button>
                            </li>
                            <li id="freelance-li" className="experience-list-item">
                                <button type="button">
                                    Freelance
                                </button>
                            </li>
                        </ul>
                    </nav>
                    <div className="jobs-container visible">
                        <article id="efa-desc" className="job-container active">
                            <h3 className="experience">
                                Student 
                                <div className="highlight-container">
                                    <span className="at">@</span>
                                    <span className="company">
                                        <a href="https://elevenfifty.org/" target="_blank" tabIndex={0}>
                                            Eleven&nbsp;Fifty&nbsp;Academy
                                        </a>
                                    </span>
                                </div>
                            </h3>
                            <span className="date">
                                Jan. 2019 - Apr. 2019
                            </span>
                            <div className="description">
                                <p>Eleven Fifty Academy is a nonprofit dedicated to bridging the tech talent gap in Indiana. Their aim is to impact the lives of career changers, professionals looking to skill-up, and those just starting to launch their career. When I attended, I was a part of the Javascript cohort where we were tasked with building full stack web applications using technologies such as React, Angular, Node, and PostgreSQL.</p>
                                <ul>
                                    <li>
                                        <span>500+ hours of supervised web development experience</span>
                                    </li>
                                    <li>
                                        <span>Built various full stack web applications as a part of 1-4 person teams</span>
                                    </li>
                                    <li>
                                        <span>Awarded the teamwork award by class vote for my willingness to help my peers</span>
                                    </li>
                                </ul>
                            </div>
                        </article>
                        <article id="propelup-desc" className="job-container">
                            <h3 className="experience">
                                Software Developer 
                                <div className="highlight-container">
                                    <span className="at">@</span>
                                    <span className="company">
                                        <a href="https://twitter.com/propelup?lang=en" target="_blank" tabIndex={0}>
                                            PropelUp
                                        </a>
                                    </span>
                                </div>
                            </h3>
                            <span className="date">
                                May 2019 - July 2020
                            </span>
                            <div className="description">
                                <p>PropelUp is a Learning Management System by Nick Birch. The goal of PropelUp is to help companies retain software developers with continous learning.
                                Here I was a part of a team that worked on a skill confidence measurement system able to go through a successful beta test for a small group of volunteers.</p>
                                <ul>
                                    <li>
                                        <span>Developed and maintained databases using Express, Node, Postgres, and Heroku</span>
                                        
                                    </li>
                                    <li>
                                        <span>Designed and developed a web dashboard using React</span>
                                    </li>
                                    <li>
                                        <span>Communicated with multidisciniplinary teams for sales meetings, user onboarding, user interviews, and technical support</span>
                                    </li>
                                </ul>
                            </div>
                        </article>
                        <article id="freelance-desc" className="job-container">
                            <h3 className="experience">
                                Freelance Web Developer 
                            </h3>
                            <span className="date">
                                (March 2021 - Present)
                            </span>
                            <div className="description">
                                <p>After my time at PropelUp, I set out to improve my design skills, working in Figma, Inkscape, and Gimp. I also studied to see where my UX/UI knowledge lacked and began finding ways to incorporate those principles into my layouts. This led me to some freelance opportunities where I was able to work on projects that had me participating in both design and development discussions.</p>
                                <ul>
                                    <li>
                                        <span>
                                            Responsible for the hosting and deployment of production websites and development environments with technologies like Netlify and cPanel
                                        </span>
                                    </li>
                                    <li>
                                        <span>Worked independently and collaboratively in a remote environment to create full-stack applications with JavaScript</span>
                                    </li>
                                    <li>
                                        <span>Created wireframes, mockups, and prototypes for client walkthroughs using Figma</span>
                                    </li>
                                </ul>
                            </div>
                        </article>

                        {/* Bumper entry - longest */}
                        <article className="job-container bumper">
                            <h3 className="experience">
                                Web Developer 
                                <span className="at">@</span>
                                <span className="company">
                                    <a tabIndex={0}>
                                        Freelance
                                    </a>
                                </span>
                            </h3>
                            <span className="date">
                                (March 2021 - Present)
                            </span>
                            <div className="description">
                                <p>After my time at PropelUp, I took some time to improve my design skills, working in Figma, Inkscape, and Gimp. I also spent more time looking to find ways to make websites more interactive, all the while remaining lightweight and easy to navigate. This lead me to some freelance opportunities where I was able to work on projects that allowed me to have a lot of design and development responsibility.</p>
                                <ul>
                                    <li>
                                        <span>
                                            Responsible for the hosting and deployment of production websites and development environments
                                        </span>
                                        
                                    </li>
                                    <li>
                                        <span>Worked independently and collaboratively in a remote team environment to create full-stack applications with JavaScript</span>
                                        
                                    </li>
                                    <li>
                                        <span>Created prototypes for client walkthroughs using Figma</span>
                                        
                                    </li>
                                </ul>
                            </div>
                        </article>

                    </div>
                </div>
            </div>
        </section>
    )
}