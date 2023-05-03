import { useState } from 'react';
import './App.css';
import data from './data.json';


function App() {
  const [jobs, setJobs] = useState(data);

  return (
    <div className="main">
      <div className="filters">
        <div className="choice-btns"></div>
        <button className="clear-btn">clear</button>
      </div>
      <section className="jobs">
        {jobs.map((job) => {
          return (
            <div key={job.id} className="job">
                <div className="job-left">
                  <img src={job.logo} alt="" />
                  <div>
                    <div className="info-header">
                      <div className="company-title">{job.company}</div>
                     {job.new ? <div className="new-job">new</div> : null}   
                     {/* conditional rendering */}
                      {job.featured ? <div className="featured-job">featured</div>: null}
                    </div>
                    <h2 className='job-position'>{job.position}</h2>
                    <div className="info-footer">
                      <h3 className='extra'>{job.postedAt}</h3>
                      <span className='circle'></span>
                      <h3 className='extra'>{job.contract}</h3>
                      <span className='circle'></span>
                      <h3 className='extra'>{job.location}</h3>
                      
                    </div>
                  </div>
                </div>
                <div className="job-right">
                  <button className='prop-btn'>{job.role}</button>
                  <button className='prop-btn'>{job.level}</button>
                  {job.tools.map((tool) => {
                    return (<button key={tool} className="prop-btn">{tool}</button>);
                  })}
                   {job.languages.map((language) => {
                    return (<button key={language} className="prop-btn">{language}</button>);
                  })}

                </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;
