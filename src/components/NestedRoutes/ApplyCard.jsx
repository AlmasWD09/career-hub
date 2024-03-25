

const ApplyCard = ({item}) => {
  const {job_title,logo} = item || {};
    return (
        <div>
            <img src={logo} alt="" />
            <h1>{job_title}</h1>
        </div>
    );
};

export default ApplyCard;