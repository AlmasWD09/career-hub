import { useEffect, useState } from "react";
import JobCategorieCard from "./JobCategorieCard";

const JobCategory = () => {
    const [JobCategories,setJobCategories] = useState([]);
    useEffect(()=>{
       fetch('./categories.json')
       .then(res=>res.json())
       .then((data)=>setJobCategories(data))
    },[])
    return (
        <div>
            <div className="text-center">
            <h1 className="font-bold text-2xl">Job Category List</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 mt-10">
                {
                    JobCategories.map((singleCategorie,idx)=>{
                        return (
                            <JobCategorieCard
                             key={idx}
                             singleCategorie  = {singleCategorie}
                            > </JobCategorieCard>
                        )
                    })
                }

            </div>
        </div>
    );
};

export default JobCategory;