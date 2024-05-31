import { useState, useEffect } from 'react';
import JobInfo from './JobInfo';
import BtnContainer from './BtnContainer';

const url = 'https://www.course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  const fetchJobs = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const jobs = await response.json();
      setJobs(jobs);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  console.log(jobs);

  if (isLoading) {
    return (
      <section className='jobs-center'>
        <div className='loading'></div>
      </section>
    );
  }
  return (
    <section className='jobs-center'>
      <BtnContainer
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
};
export default App;
