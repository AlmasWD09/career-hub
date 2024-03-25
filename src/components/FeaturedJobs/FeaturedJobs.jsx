
import featuresPhoto from "../../assets/logo/netflix.png"
import { useEffect, useState } from "react";
import FeaturedJobsCard from "./FeaturedJobsCard";

const FeaturedJobs = () => {
    const [featuresJobs,setFeaturesJob] = useState([]);
    const [dataLength,setDataLength] = useState(4);
    useEffect(()=>{
        fetch('./jobs.json')
        .then(res=>res.json())
        .then((data)=>setFeaturesJob(data))
     },[])
    return (
        <div>
            <div className="text-center">
                <h1 className="font-bold text-2xl">Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-8 my-10 ">
                {
                    featuresJobs.slice(0,dataLength).map((singleFeatureJob,idx)=>{
                        return (
                            <FeaturedJobsCard
                            key={idx}
                            singleFeatureJob={singleFeatureJob}
                            ></FeaturedJobsCard>
                        )
                    })
                }
            </div>
            <div className={`w-full text-center my-3 ${dataLength === featuresJobs.length && 'hidden'}`}>
                <button 
                onClick={()=> setDataLength(featuresJobs.length)}
                className="btn btn-primary px-8 py-2 font-bold">Show All</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;