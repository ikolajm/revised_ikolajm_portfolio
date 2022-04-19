import { useEffect } from "react"
import { repoObserver } from "../functions/Interactions"

export default () => {
    useEffect(() => {
        repoObserver();
    })
    return (
        <section id="repos" className="repos">
            <div className="repos-content">
                <h1 className="title">Featured repositories</h1>

                <div className="repo-row">
                    <div className="project-card-container">
                        <div className="project-card">
                            {/* Head */}
                            <div className="head">
                                <span>In Development</span>
                                <a href="https://github.com/ikolajm/SignalR_React_client" target="_blank">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                            {/* Title */}
                            <h1>Chat application with React and SignalR - Frontend</h1>
                            {/* Body/Description */}
                            <p>Similar to Tellem, this is a real time chat application built on a single project using React, .NET and SignalR.</p>
                            {/* Footer */}
                            <div className="foot">
                                <ul>
                                    <li>React</li>
                                    <li>.NET CORE</li>
                                    <li>Entity Framework</li>
                                    <li>SignalR</li>
                                    <li>Blob Storage</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="project-card-container">
                        <div className="project-card">
                            {/* Head */}
                            <div className="head">
                                <span>In Development</span>
                                <a href="https://github.com/ikolajm/SignalR_React_Server" target="_blank">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                            {/* Title */}
                            <h1>Chat application with React and SignalR - Backend</h1>
                            {/* Body/Description */}
                            <p>Similar to Tellem, this is a real time chat application built on a single project using React, .NET and SignalR.</p>
                            {/* Footer */}
                            <div className="foot">
                                <ul>
                                    <li>React</li>
                                    <li>.NET CORE</li>
                                    <li>Entity Framework</li>
                                    <li>SignalR</li>
                                    <li>Blob Storage</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="project-card-container">
                        <div className="project-card">
                            {/* Head */}
                            <div className="head">
                                <i className="fas fa-folder-open"></i>
                                <a href="https://github.com/ikolajm/DOTNET_BlogAnywhere_API" target="_blank">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                            {/* Title */}
                            <h1>Blog API Made With ASP.NET CORE</h1>
                            {/* Body/Description */}
                            <p>A simple blog API built on .NET to interact with an already developed frontend. Secured with JWT authentication.</p>
                            {/* Footer */}
                            <div className="foot">
                                <ul>
                                    <li>.NET CORE</li>
                                    <li>Entity Framework</li>
                                    <li>PostgreSQL</li>
                                    <li>RDS</li>
                                    <li>S3</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="project-card-container">
                        <div className="project-card">
                            {/* Head */}
                            <div className="head">
                                <i className="fas fa-folder-open"></i>
                                <a href="https://github.com/ikolajm/Django_BlogAnywhere_GITFIX" target="_blank">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                            {/* Title */}
                            <h1>BlogAnywhere - Django</h1>
                            {/* Body/Description */}
                            <p>A blog application where the user can like, comment, and create posts. Built using the Django framework and AWS services for storage and hosting.</p>
                            {/* Footer */}
                            <div className="foot">
                                <ul>
                                    <li>Python</li>
                                    <li>Django</li>
                                    <li>RDS</li>
                                    <li>S3</li>
                                    <li>Elastic Beanstalk</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="project-card-container">
                        <div className="project-card">
                            {/* Head */}
                            <div className="head">
                                <i className="fas fa-folder-open"></i>
                                <a href="https://github.com/ikolajm/BlogAnywhereNode" target="_blank">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                            {/* Title */}
                            <h1>BlogAnywhere API - Node.js</h1>
                            {/* Body/Description */}
                            <p>A blog application REST API where the user can like, comment, and create posts. Built using Node.js as well as Heroku and AWS services for storage and hosting.</p>
                            {/* Footer */}
                            <div className="foot">
                                <ul>
                                    <li>Node.js</li>
                                    <li>Express</li>
                                    <li>RDS</li>
                                    <li>S3</li>
                                    <li>Heroku</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="project-card-container">
                        <div className="project-card">
                            {/* Head */}
                            <div className="head">
                                <i className="fas fa-folder-open"></i>
                                <a href="https://github.com/ikolajm/Tellem-Revised-Client" target="_blank">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                            {/* Title */}
                            <h1>Tellem - Frontend</h1>
                            {/* Body/Description */}
                            <p>The frontend for Tellem, a real time chat application built using TypeScript, Node, and Socket.IO</p>
                            {/* Footer */}
                            <div className="foot">
                                <ul>
                                    <li>React</li>
                                    <li>TypeScript</li>
                                    <li>SCSS</li>
                                    <li>Netlify</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="project-card-container">
                        <div className="project-card">
                            {/* Head */}
                            <div className="head">
                                <i className="fas fa-folder-open"></i>
                                <a href="https://github.com/ikolajm/Tellem_Revised_Server" target="_blank">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                            {/* Title */}
                            <h1>Tellem - API</h1>
                            {/* Body/Description */}
                            <p>The REST API for Tellem, a real time chat application built using TypeScript, Node, and Socket.IO.</p>
                            {/* Footer */}
                            <div className="foot">
                                <ul>
                                    <li>Node.js</li>
                                    <li>Express</li>
                                    <li>RDS</li>
                                    <li>S3</li>
                                    <li>Heroku</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}