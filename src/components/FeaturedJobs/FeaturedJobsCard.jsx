import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const FeaturedJobsCard = ({ singleFeatureJob }) => {
    // console.log(singleFeatureJob);
    const {id,logo,job_title,company_name,location,salary,remote_or_onsite,job_type} = singleFeatureJob || {};
    const navigate = useNavigate()
    return (
        <div className=" border space-y-3 transition hover:scale-105">
                <div className="">
                <img className="w-full object-cover h-auto" src={logo} alt="" />
                </div>
                <div className="p-4 space-y-3">
                <h3 className="font-bold">{job_title}</h3>
                <p>{company_name}</p>
                <div className="flex gap-3">
                    <button className="border-2 border-indigo-400 px-8 py-2 font-bold">{remote_or_onsite}</button>
                    <button className="border-2 border-indigo-400 px-8 py-2 font-bold">{job_type}</button>
                </div>
                <div className="flex gap-4">
                    <div className="flex items-center">
                        <p><CiLocationOn /></p>
                        <p>{location}</p>
                    </div>
                    <div className="flex items-center">
                        <p><CiLocationOn /></p>
                        <p>{salary}</p>
                    </div>
                </div>
                <div>
                    <button 
                    onClick={()=>navigate(`/feature/${id}`)}
                    className="btn btn-primary px-8 py-2 font-bold">View Details</button>
                </div>
                </div>

            </div>
    );
};

export default FeaturedJobsCard;