import fb from "../../assets/fb.png";
import x from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";

const FindUs = () => {
    return (
        <div>
            <h3 className="text-[20px] font-semibold mb-5">Find Us On</h3>
            <div className="join join-vertical w-full">
                <button className="btn bg-base-100 justify-start join-item"><img className="p-2 bg-base-200 rounded-full mr-2.5" src={fb} alt="fb icon" /> Facebook</button>
                <button className="btn bg-base-100 justify-start join-item"><img className="p-2 bg-base-200 rounded-full mr-2.5" src={x} alt="fb icon" /> X</button>
                <button className="btn bg-base-100 justify-start join-item"><img className="p-2 bg-base-200 rounded-full mr-2.5" src={instagram} alt="fb icon" /> Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;