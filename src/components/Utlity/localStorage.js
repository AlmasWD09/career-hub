export const getJobsApplication = () =>{
    let jobsApply = [];
    const storedJobApply = localStorage.getItem('job-application');
    if(storedJobApply){
        jobsApply = JSON.parse(storedJobApply)
    }
    return jobsApply;
}

export const saveJobApplication = job =>{ // handle click thaka object  patitaci  (job para meter a first a array astaca second a  array of oi object ta astaca)
    const jobsApply = getJobsApplication();
    console.log(jobsApply);
    const isExist = jobsApply.find(jobId=>jobId.id === job.id) // aikha na shodo id dila hova na 
    if(isExist){
        return alert('alredy aca vhi')
    }
        jobsApply.push(job)
        localStorage.setItem('job-application', JSON.stringify(jobsApply))
        alert('save successfully')
}