import { useEffect, useState } from "react";
import { getJobsApplication } from "../Utlity/localStorage";
import ApplyCard from "./ApplyCard";
// import { useLoaderData } from "react-router-dom";

const AppliedJobs = () => {
  const [apply, setApply] = useState([])

  useEffect(() => {
    const result = getJobsApplication();
    setApply(result)
  }, [])



  return (
    <div className="h-screen flex justify-center items-center">
      <div>
        <h1 className="font-bold text-center my-7 underline">TotalApplyJobs: {apply.length}</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          {
            apply.map((item,idx)=>{
              return (
                <ApplyCard key={idx}
                item = {item}
                ></ApplyCard>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;