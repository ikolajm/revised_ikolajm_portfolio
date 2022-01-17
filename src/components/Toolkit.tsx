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

export default () => {
    return (
        <section id="toolkit" className="toolkit">
            <div className="toolkit-content">
                <h1>My current toolkit</h1>

                <div className="icon-row">
                    <figure className="icon html">
                        <img src={html} alt="HTML logo" />
                    </figure>
                    <figure className="icon css">
                        <img src={css} alt="CSS logo" />
                    </figure>
                    <figure className="icon sass">
                        <img src={sass} alt="SASS logo" />
                    </figure>
                    <figure className="icon">
                        <img src={js} alt="JavaScript logo" />
                    </figure>
                    <figure className="icon react">
                        <img src={react} alt="React logo" />
                    </figure>
                    <figure className="icon">
                        <img src={node} alt="Node logo" />
                    </figure>
                    <figure className="icon">
                        <img src={cs} alt="C# logo" />
                    </figure>
                    <figure className="icon">
                        <img src={python} alt="Python logo" />
                    </figure>
                    <figure className="icon pg">
                        <img src={pg} alt="PostgreSQL logo" />
                    </figure>
                    <figure className="icon heroku">
                        <img src={heroku} alt="Heroku logo" />
                    </figure>
                    <figure className="icon">
                        <img src={netlify} alt="Netlify logo" />
                    </figure>
                    <figure className="icon aws">
                        <img src={aws} alt="AWS logo" />
                    </figure>
                    <figure className="icon git">
                        <img src={git} alt="Git logo" />
                    </figure>
                    <figure className="icon github">
                        <img src={github} alt="Github logo" />
                    </figure>
                    <figure className="icon vscode">
                        <img src={vscode} alt="Visual Studio Code logo" />
                    </figure>
                    <figure className="icon figma">
                        <img src={figma} alt="Figma logo" />
                    </figure>
                </div>
            </div>
        </section>
    )
}