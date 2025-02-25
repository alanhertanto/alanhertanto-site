import HomeButton from "./HomeButton";

export default function PhoneFrame({ children }) {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900">
            <div className="relative w-[375px] h-[812px] bg-black rounded-[25px] shadow-lg overflow-hidden border-4 border-gray-600">
                {children}
                <HomeButton /> 
            </div>
        </div>
    );
}
