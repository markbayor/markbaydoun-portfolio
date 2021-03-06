import React, { useState } from "react"

const Resume = () => {
  const [show, setShow] = useState(false)

  return (
    <section className="section section__resume">
      <h3 className='heading--tertiary'>Resume</h3>
      <hr className="hr" />
      <h4 className="heading--quaternary">To view or download my resume, use one of the three buttons below.</h4>
      <div className="resume__container" id='resume'>
        <a href='#' onClick={() => setShow(true)} className="btn btn--download">Preview here</a>
        <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/uc?export=download&id=1oY9IS1hZghcDY5IJ--fbv3_KMU3T4fOr" className="btn btn--download">Download</a>
        <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1oY9IS1hZghcDY5IJ--fbv3_KMU3T4fOr/view?usp=sharing" className="btn btn--download">View on Google Drive</a>
        {show && <div className="resume__preview--container">
          <div className="contact__bg" onClick={() => setShow(false)}>
            <div className="contact__bg" onClick={() => setShow(false)}></div>
            <iframe className='resume__preview' src="https://drive.google.com/file/d/1oY9IS1hZghcDY5IJ--fbv3_KMU3T4fOr/preview" ></iframe>
          </div>
        </div>}
      </div>
    </section>
  )
}

export { Resume }