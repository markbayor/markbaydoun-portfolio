import React from "react"

const Education = () => {

  return (
    <section className="section section__education">
      <h3 className='heading--tertiary'>Education</h3>
      <hr className="hr" />
      <ul className='edu__list'>
        <li className="edu__item">
          <div className="edu__img-container">
            <img src="/fullstack-logo.png" alt="Fullstack Acadademy logo" className="edu__img" />
          </div>
          <div className="edu__item-content" id='education'>
            <h4 className='edu__title'>Fullstack Academy <span>New York</span><span>Jan 2020 - July 2020</span></h4>
            <div className="edu__description">
              Currently ranked the #1 Coding Bootcamp in the US. Enrolled for the Part-time Flex Program,
              as I was going to University as well. Finished remotely from April to July, due to pandemic.
            </div>
          </div>
        </li>
        <li className="edu__item">
          <div className="edu__img-container">
            <img src="eae-logo.jpg" alt="EAE Business School logo" className="edu__img" />
          </div>
          <div className="edu__item-content">
            <h4 className='edu__title'>EAE Business School<span>Barcelona</span> <span>2017 - 2021</span></h4>
            <div className="edu__description">
              Currently enrolled in the final course of a Business Administration Bachelor. Ranked #2 Business University in Spain.
              Schedules are pretty flexible, so it should be no issue for work.
            </div>
          </div>
        </li>
        <li className="edu__item">
          <div className="edu__img-container">
            <img src="pace-logo.png" alt="Pace University logo" className="edu__img" />
          </div>
          <div className="edu__item-content">
            <h4 className='edu__title'>Pace University<span>New York</span><span>2019 - 2020</span></h4>
            <div className="edu__description">
              Did the exchange program with my parent University in Spain. Lived in NYC for the whole
              year until the pandemic hit, and I had to finish the course remotely as well.
            </div>
          </div>
        </li>
      </ul>
    </section>
  )
}

export { Education }