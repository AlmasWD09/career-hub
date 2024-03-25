
import profile from "../../assets/images/profile.png"
const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200 hidden">
            <div className="flex justify-center items-center gap-4">
                <div className="w-[40%]">
                    <h1 className="text-5xl font-bold">One Step Closer To Your <span className="text-indigo-400">Dream Job</span></h1>
                    <p className="py-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish..</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
                <div className="w-[60%]">
                <img src={profile} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;