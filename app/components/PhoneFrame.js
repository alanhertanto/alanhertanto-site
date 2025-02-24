import HomeButton from "./HomeButton";

export default function PhoneFrame({ children }) {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900">
            <div className="relative w-[375px] h-[812px] bg-black rounded-[40px] shadow-lg overflow-hidden">
                {children}
                <HomeButton /> 
            </div>
        </div>
    );
}
