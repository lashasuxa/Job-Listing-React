import { useState } from 'react';
import './App.css';
import data from './data.json';
import Remove from "./assets/icon-remove.svg"

function App() {
  const [jobs, setJobs] = useState(data);
  const [filterArray,setFilterArray]=useState([]);
  console.log(filterArray)

  const choiceHandler = (obj)=>{
    setFilterArray((state)=>{
      return [...state,obj]
    });
  }
  const buttonRemoveHandler =(index)=>{
    const copy=[...filterArray];
    copy.splice(index,1)
    setFilterArray(copy)
  }
  const clearHandler=()=>{
    setFilterArray([])
  }


  return (
    <div className="main">
      {filterArray.length>0 ? (<div className="filters">
        <div className="choice-btns">
          {filterArray.map((button, index)=>{
            console.log(button)
            return (
              <button className='filter-btn' key={button.value}>
                <h3>{button.value}</h3>
                <div className='remove-icon-box' onClick={()=>buttonRemoveHandler(index)}>
                  <img src={Remove} alt="" />
                </div>
              </button>
            );
          })}
        </div>
        <button className="clear-btn" onClick={clearHandler}>clear</button>
      </div>) : null}
      <section className="jobs"style={{marginTop:filterArray.length>0?"40px":"232px"}}>
        {jobs.map((job) => {
          return (
            <div key={job.id} className="job">
              <div className="job-left">
                <img src={job.logo} alt={`${job.company} logo`} />
                <div>
                  <div className="info-header">
                    <div className="company-title">{job.company}</div>
                    {job.new ? <div className="new-job">new</div> : null}
                    {job.featured ? <div className="featured-job">featured</div> : null}
                  </div>
                  <h2 className="job-position">{job.position}</h2>
                  <div className="info-footer">
                    <h3 className="extra">{job.postedAt}</h3>
                    <span className="circle"></span>
                    <h3 className="extra">{job.contract}</h3>
                    <span className="circle"></span>
                    <h3 className="extra">{job.location}</h3>
                  </div>
                </div>
              </div>
              <div className="job-right">
                <button className="prop-btn" onClick={()=>choiceHandler({
                  property:"role",
                  value:job.role,
                })}>{job.role}</button>
                <button className="prop-btn" onClick={()=>choiceHandler({
                  property:"level",
                  value:job.level,
                })}>{job.level}</button>
                {job.tools.map((tool) => {
                  return (<button key={tool} className="prop-btn" onClick={()=>choiceHandler({
                    property:"tools",
                    value:tool,
                  })}>{tool}</button>);
                })}
                {job.languages.map((language) => {
                  return (<button key={language} className="prop-btn" onClick={()=>choiceHandler({
                    property:"languages",
                    value:language,
                  })}>{language}</button>);
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
