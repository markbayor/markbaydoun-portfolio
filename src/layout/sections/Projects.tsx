import React from 'react'
import {
  NodeIcon,
  TypescriptIcon,
  ApiGatewayIcon,
  CloudFormationIcon,
  LambdaIcon,
  S3Icon,
  MongoIcon,
  NextJsIcon,
  ReactJsIcon,
  SassIcon,
  ServerlessIcon,
  StrapiIcon,
  DigitalOceanIcon,
  JwtIcon,
  ExpoIcon,
  ExpressIcon,
  PostgresIcon,
  DockerIcon,
  GmapsIcon,
  SocketIcon,
  AntdIcon,
  BabelIcon,
  ElectronIcon,
  HerokuIcon,
  JavascriptIcon,
  PassportIcon,
  ReduxIcon,
  WebpackIcon
} from '../../assets';

const Projects = () => {

  return (
    <section className="section section__projects" >
      <h3 className='heading--tertiary' id='projects'>Projects</h3>
      <hr className="hr" />
      <div className="projects">
        <div className="project">
          <img src="/danielorpi_web.png" alt="Daniel Orpi website sample image" className="project__img--small u-hover-scale-right" />
          <div className="project__content">
            <h4 className="heading--quaternary u-margin-bottom-small">Daniel Orpi's website</h4>
            <p className="project__content-paragraph">
              Designed and built my brother's DJ website, with a complete CMS he can use, as well as his brand's website and shop, which
              I'm currently working on.
            <br /> The front end of the main site is currently in development, as we are still waiting for a few assets from designers.
            It's built with NextJS, and the whole project is written in TypeScript.
          </p>
            <div className="project__content-techstack">
              <div className="icon"><a href="https://www.typescriptlang.org/" className="icon__a"><TypescriptIcon /></a></div>
              <div className="icon"><a href="https://nodejs.org/en/" className="icon__a"><NodeIcon /></a></div>
              <div className="icon"><a href="https://aws.amazon.com/api-gateway/" className="icon__a"><ApiGatewayIcon /></a></div>
              <div className="icon"><a href="https://aws.amazon.com/cloudformation/" className="icon__a"><CloudFormationIcon /></a></div>
              <div className="icon"><a href="https://aws.amazon.com/lambda/" className="icon__a"><LambdaIcon /></a></div>
              <div className="icon"><a href="https://aws.amazon.com/s3/" className="icon__a"><S3Icon /></a></div>
              <div className="icon"><a href="https://www.mongodb.com/" className="icon__a"><MongoIcon /></a></div>
              <div className="icon"><a href="https://nextjs.org/" className="icon__a"><NextJsIcon /></a></div>
              <div className="icon"><a href="https://reactjs.org/" className="icon__a"><ReactJsIcon /></a></div>
              <div className="icon"><a href="https://sass-lang.com/" className="icon__a"><SassIcon /></a></div>
              <div className="icon"><a href="https://www.serverless.com/" className="icon__a"><ServerlessIcon /></a></div>
              <div className="icon"><a href="https://strapi.io/" className="icon__a"><StrapiIcon /></a></div>
            </div>
          </div>
        </div>
        <hr className="hr--small" />
        <div className="project">
          <div className="project__content">
            <h4 className="heading--quaternary u-margin-bottom-small">Squadify</h4>
            <p className="project__content-paragraph">
              This was a capstone project. We built a mobile app using React Native, with a headless CMS. It is essentially a
              social organizer for you and your friends, with functionality for finding events and managing spendings in groups. I built most of
            the backend and a big chunk of the frontend. See the <a className='a__link' href="https://www.youtube.com/watch?v=qc7WzIidqaQ&feature=youtu.be"> demo on YouTube</a>.
          </p>
            <div className="project__content-techstack">
              <div className="icon"><a href="https://www.typescriptlang.org/" className="icon__a"><TypescriptIcon /></a></div>
              <div className="icon"><a href="https://nodejs.org/en/" className="icon__a"><NodeIcon /></a></div>
              <div className="icon"><a href="https://reactnative.dev/" className="icon__a"><ReactJsIcon /></a></div>
              <div className="icon"><a href="https://expo.io/" className="icon__a"><ExpoIcon /></a></div>
              <div className="icon"><a href="https://expressjs.com/" className="icon__a"><ExpressIcon /></a></div>
              <div className="icon"><a href="https://socket.io/" className="icon__a"><SocketIcon /></a></div>
              <div className="icon"><a href="https://jwt.io/" className="icon__a"><JwtIcon /></a></div>
              <div className="icon"><a href="https://www.digitalocean.com/" className="icon__a"><DigitalOceanIcon /></a></div>
              <div className="icon"><a href="https://www.docker.com/" className="icon__a"><DockerIcon /></a></div>
              <div className="icon"><a href="https://www.postgresql.org/" className="icon__a"><PostgresIcon /></a></div>
              <div className="icon"><a href="https://developers.google.com/maps/documentation" className="icon__a"><GmapsIcon /></a></div>
            </div>
          </div>
          <img src="/squadify-bg.png" alt="Squadify demo sample image" className="project__img u-hover-scale-left u-shrink-img u-shrink-img-2" />
        </div>
        <hr className="hr--small" />
        <div className="project">
          <img src="/drocsid-bg.png" alt="Drocsid demo sample image" className="project__img u-hover-scale-right u-shrink-img u-shrink-img-2" />
          <div className="project__content">
            <h4 className="heading--quaternary">Drocsid</h4>
            <p className="project__content-paragraph">
              Short project we were told to do to learn new technologies. I wanted to learn Electron so I made a very basic
              desktop chatting app with a persistent backend that also served a website, which is similar to the app but in the browser.
            See the <a className='a__link' href="https://drocsid-web.herokuapp.com/">live demo here</a>.
          </p>
            <div className="project__content-techstack">
              <div className="icon"><a href="https://www.javascript.com/" className="icon__a"><JavascriptIcon /></a></div>
              <div className="icon"><a href="https://www.typescriptlang.org/" className="icon__a"><TypescriptIcon /></a></div>
              <div className="icon"><a href="https://nodejs.org/en/" className="icon__a"><NodeIcon /></a></div>
              <div className="icon"><a href="https://expressjs.com/" className="icon__a"><ExpressIcon /></a></div>
              <div className="icon"><a href="https://reactjs.org/" className="icon__a"><ReactJsIcon /></a></div>
              <div className="icon"><a href="https://redux.js.org/" className="icon__a"><ReduxIcon /></a></div>
              <div className="icon"><a href="https://www.electronjs.org/" className="icon__a"><ElectronIcon /></a></div>
              <div className="icon"><a href="https://socket.io/" className="icon__a"><SocketIcon /></a></div>
              <div className="icon"><a href="https://jwt.io/" className="icon__a"><JwtIcon /></a></div>
              <div className="icon"><a href="http://www.passportjs.org/" className="icon__a"><PassportIcon /></a></div>
              <div className="icon"><a href="https://www.postgresql.org/" className="icon__a"><PostgresIcon /></a></div>
              <div className="icon"><a href="https://ant.design/" className="icon__a"><AntdIcon /></a></div>
              <div className="icon"><a href="https://www.heroku.com/" className="icon__a"><HerokuIcon /></a></div>
              <div className="icon"><a href="https://webpack.js.org/" className="icon__a"><WebpackIcon /></a></div>
              <div className="icon"><a href="https://babeljs.io/" className="icon__a"><BabelIcon /></a></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Projects }