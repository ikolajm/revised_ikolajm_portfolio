import html from '../assets/html.png';
import css from '../assets/css3.png';
import sass from '../assets/sass.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import node from '../assets/node.png';
import cs from '../assets/csharp.png';
import python from '../assets/python.png';
import pg from '../assets/pgsql.png';
import aws from '../assets/aws.png';
import github from '../assets/github.png';
import git from '../assets/git.png';
import heroku from '../assets/heroku.png';
import netlify from '../assets/netlify.png';
import figma from '../assets/figma.png';
import vscode from '../assets/vscode.png';
import graphql from '../assets/graphql.png';
import { useEffect } from 'react';
import { toolObserver } from '../functions/Interactions';

export default () => {
    useEffect(() => {
        toolObserver();
    })
    return (
        <section id="toolkit" className="toolkit">
            <div className="toolkit-content">
                <h1>My current toolkit</h1>

                <div className="icon-row">
                    <figure className="icon html">
                        <img src={html} alt="HTML logo" />
                        <figcaption>HTML5</figcaption>
                    </figure>
                    <figure className="icon css">
                        <img src={css} alt="CSS logo" />
                        <figcaption>CSS3</figcaption>
                    </figure>
                    <figure className="icon sass">
                        <img src={sass} alt="SASS logo" />
                        <figcaption>SASS</figcaption>
                    </figure>
                    <figure className="icon">
                        <img src={js} alt="JavaScript logo" />
                        <figcaption>JavaScript</figcaption>
                    </figure>
                    <figure className="icon react">
                        <img src={react} alt="React logo" />
                        <figcaption>React</figcaption>
                    </figure>
                    <figure className="icon">
                        <img src={node} alt="Node logo" />
                        <figcaption>Node</figcaption>
                    </figure>
                    <figure className="icon gql">
                        <img src={graphql} alt="GraphQL logo" />
                        <figcaption>GraphQL</figcaption>
                    </figure>
                    <figure className="icon">
                        <img src={python} alt="Python logo" />
                        <figcaption>Python</figcaption>
                    </figure>
                    <figure className="icon pg">
                        <img src={pg} alt="PostgreSQL logo" />
                        <figcaption>PostgreSQL</figcaption>
                    </figure>
                    <figure className="icon heroku">
                        <img src={heroku} alt="Heroku logo" />
                        <figcaption>Heroku</figcaption>
                    </figure>
                    <figure className="icon">
                        <img src={netlify} alt="Netlify logo" />
                        <figcaption>Netlify</figcaption>
                    </figure>
                    <figure className="icon aws">
                        <img src={aws} alt="AWS logo" />
                        <figcaption>AWS</figcaption>
                    </figure>
                    <figure className="icon git">
                        <img src={git} alt="Git logo" />
                        <figcaption>Git</figcaption>
                    </figure>
                    <figure className="icon github">
                        <img src={github} alt="Github logo" />
                        <figcaption>Github</figcaption>
                    </figure>
                    <figure className="icon vscode">
                        <img src={vscode} alt="Visual Studio Code logo" />
                        <figcaption>VS Code</figcaption>
                    </figure>
                    <figure className="icon figma">
                        <img src={figma} alt="Figma logo" />
                        <figcaption>Figma</figcaption>
                    </figure>
                </div>
            </div>
        </section>
    )
}