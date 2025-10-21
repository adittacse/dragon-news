
import swimmingImage from "../../assets/swimming.png";
import classImage from "../../assets/class.png";
import playGroundImage from "../../assets/playground.png";
import bgImage from "../../assets/bg.png";

const QZone = () => {
    return (
        <div className="bg-base-200 p-4">
            <h3 className="text-[20px] font-semibold mb-5">Q-Zone</h3>
            <div className="space-y-5">
                <img src={swimmingImage} alt="Swimming image" />
                <img src={classImage} alt="Class image" />
                <img src={playGroundImage} alt="Play ground image" />
                <img src={bgImage} alt="Bg image" />
            </div>
        </div>
    );
};

export default QZone;