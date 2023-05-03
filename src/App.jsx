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
                  <div></div>
                </div>
                <div className="job-right"></div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;
