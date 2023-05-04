import { useState } from "react";
import "./App.css";
import data from "./data.json";
import Filters from "./components/Filters";

function App() {
  const [jobs, setJobs] = useState(data);
  const [filterArray, setFilterArray] = useState([]);

  const filteredData =
    filterArray.length === 0
      ? jobs
      : jobs.filter((job) => {
          return filterArray.every((button) => {
            return (
              job[button.property] === button.value ||
              job[button.property].includes(button.value)
            );
          });
        });

        const choiceHandler = (obj) => {
          if (!filterArray.some((item) => item.property === obj.property && item.value === obj.value)) {
            setFilterArray((state) => {
              return [...state, obj];
            });
          }
        };
  const clearFilterArray = () => {
    setFilterArray([]);
  };

  return (
    <div className="main">
      {filterArray.length > 0 ? (
        <Filters  jobs={filterArray}
        clearFilterArray={clearFilterArray} />
      ) : null}
      <section
        className="jobs"
        style={{ marginTop: filterArray.length > 0 ? "40px" : "232px" }}
      >
        {filteredData.map((job) => {
          return (
            <div className="job" key={job.id}>
              <div className="job-left">
                <img src={job.logo} alt="" />
                <div>
                  <div className="info-header">
                    <div className="company-title">{job.company}</div>
                    {job.new ? <div className="new-job">new</div> : null}
                    {job.featured ? (
                      <div className="featured-job">FEATURED</div>
                    ) : null}
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
                <button
                  className="prop-btn"
                  onClick={() =>
                    choiceHandler({
                      property: "role",
                      value: job.role,
                    })
                  }
                >
                  {job.role}
                </button>
                <button
                  className="prop-btn"
                  onClick={() =>
                    choiceHandler({
                      property: "level",
                      value: job.level,
                    })
                  }
                >
                  {job.level}
                </button>
                {job.tools.map((tool) => {
                  return (
                    <button
                      className="prop-btn"
                      key={tool}
                      onClick={() =>
                        choiceHandler({
                          property: "tools",
                          value: tool,
                        })
                      }
                    >
                      {tool}
                    </button>
                  );
                })}
                {job.languages.map((language) => {
                  return (
                    <button
                      className="prop-btn"
                      key={language}
                      onClick={() =>
                        choiceHandler({
                          property: "languages",
                          value: language,
                        })
                      }
                    >
                      {language}
                    </button>
                  );
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
