
import { useLoaderData,useParams } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { saveJobApplication } from "../Utlity/localStorage";



const Features = () => {
    const featuresAll = useLoaderData();
    const {id} = useParams();
    const convertId = parseInt(id);
    const featureJob = featuresAll.find(singleJob => singleJob.id === convertId);
    // console.log(featureJob);


    const handleJobApply = () =>{
     saveJobApplication(featureJob)
    }
   
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-4  gap-5 my-5">
  
           <div className="border-2 col-span-3 p-4">
            <div className="space-y-3">
            <p><span className="font-bold">Job Description</span>: {featureJob.job_description}</p>
            <p><span className="font-bold">Job Responsibility</span>: {featureJob.job_responsibility}</p>
            <h3 className="font-bold">Educational Requirements:</h3>
            <p>{featureJob.educational_requirements}</p>
            <h1 className="font-bold">Experiences:</h1>
            <p>{featureJob.experiences}</p>
            </div>

           </div>

           {/* right side  */}
                <div className="border-2 p-4">
                    <h3 className="font-bold underline  pb-3">Job Details</h3>
                    <div className="flex items-center gap-1">
                        <p className="font-bold text-2xl"><CiLocationOn /></p>
                        <p><span className="font-bold">salary</span>: {featureJob.salary}</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <p className="font-bold text-2xl"><CiLocationOn /></p>
                        <p><span className="font-bold">salary</span>: {featureJob.job_title}</p>
                    </div>
                    <h1 className="font-bold underline my-2">Contact Information</h1>

                <div className="space-y-2">
                <div className="flex items-center gap-1">
                        <p className="font-bold text-2xl"><CiLocationOn /></p>
                        <p><span className="font-bold">Phone</span>: {featureJob.contact_information.phone}</p>
                    </div>
                <div className="flex items-center gap-1">
                        <p className="font-bold text-2xl"><CiLocationOn /></p>
                        <p><span className="font-bold">Email</span>: {featureJob.contact_information.email}</p>
                    </div>
                <div className="flex items-center gap-1">
                        <p className="font-bold text-2xl"><CiLocationOn /></p>
                        <p><span className="font-bold">Address</span>: {featureJob.contact_information.address}</p>
                    </div>
  
                </div>
                {/* apply button */}
                <div>
                    <button 
                    onClick={handleJobApply}
                    className="w-full btn btn-primary my-3">Apply Now</button>
                </div>
                </div>
           </div>
            </div>
    );
};

export default Features;