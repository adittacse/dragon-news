import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-[50px]">
            <img className="w-[471px] h-[60px]" src={logo} alt="logo" />
            <p className="mt-5">Journalism Without Fear or Favour</p>
        </div>
    );
};

export default Header;