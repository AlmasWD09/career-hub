
const JobCategorieCard = ({singleCategorie}) => {
    // console.log(singleCategorie);
    const {logo,category_name,availability} = singleCategorie || {};
    return (
        <div className="lg:w-[250px] border p-8 hidden">
        <img  src={logo} alt="" />
        <h3 className="font-bold">{category_name}</h3>
        <p>{availability}</p>
    </div>
    );
};

export default JobCategorieCard;