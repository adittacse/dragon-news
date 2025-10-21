import { format } from "date-fns";
import logo from "../assets/logo.png"
import { Link } from "react-router";

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-[50px]">
            <Link to="/"><img className="w-[471px] h-[60px]" src={logo} alt="logo" /></Link>
            <p className="text-accent text-lg mt-5">Journalism Without Fear or Favour</p>
            <p className="font-medium text-[20px] mt-2.5"><span className="text-primary">{format(new Date(), "EEEE")},</span> <span className="text-accent">{format(new Date(), "MMMM dd, yyyy")}</span></p>
        </div>
    );
};

export default Header;