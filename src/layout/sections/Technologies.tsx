import React from "react"

const Technologies = () => {

  return (
    <section className="section technologies">
      <h3 className='heading--tertiary' id='technologies'>Technologies</h3>
      <hr className="hr" />
      <div className="tech__container">
        <div className="tech__section">
          <h4 className="heading--quaternary u-no-animation">Proficient:</h4>
          <ul className="tech__list">
            <li className="tech__item">Typescript</li>
            <li className="tech__item">Javascript</li>
            <li className="tech__item">Node.js</li>
            <li className="tech__item">HTML</li>
            <li className="tech__item">CSS / Sass</li>
            <li className="tech__item">React</li>
            <li className="tech__item">Redux</li>
            <li className="tech__item">Webpack / Babel</li>
            <li className="tech__item">Git</li>
            <li className="tech__item">Express</li>
            <li className="tech__item">Socket.io</li>
            <li className="tech__item">JWT</li>
            <li className="tech__item">Passport.js</li>
            <li className="tech__item">OAuth</li>
            <li className="tech__item">PostgreSQL</li>
            <li className="tech__item">TypeORM</li>
            <li className="tech__item">Sequelize</li>
          </ul>
        </div>
        <div className="tech__section">
          <h4 className="heading--quaternary u-no-animation">Knowledgeable:</h4>
          <ul className="tech__list">
            <li className="tech__item">React Native</li>
            <li className="tech__item">NextJS</li>
            <li className="tech__item">Strapi</li>
            <li className="tech__item">Serverless framework</li>
            <li className="tech__item">MongoDB</li>
            <li className="tech__item">GraphQL (Apollo for frontend)</li>
            <li className="tech__item">Docker</li>
            <li className="tech__item">Heroku</li>
            <li className="tech__item">VMWare</li>
            <li className="tech__item">Linux (Ubuntu / Kali)</li>
          </ul>
        </div>
        <div className="tech__section">
          <h4 className="heading--quaternary u-no-animation">Some experience:</h4>
          <ul className="tech__list">
            <li className="tech__item">Python</li>
            <li className="tech__item">ElectronJS</li>
            <li className="tech__item">GatsbyJS</li>
            <li className="tech__item">AWS Lambda</li>
            <li className="tech__item">AWS CloudFormation</li>
            <li className="tech__item">AWS S3</li>
            <li className="tech__item">AWS API-Gateway</li>
            <li className="tech__item">AWS CloudWatch</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export { Technologies }