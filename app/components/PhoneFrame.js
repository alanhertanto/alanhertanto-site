
export default function PhoneFrame({ children }) {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900">
            <div className="flex w-[380px] h-[820px] rounded-[55px] overflow-hidden border-4 border-gray-600">
                <div className="relative w-[375px] h-[812px] wallpaper1 rounded-[50px] shadow-lg overflow-hidden border-8 border-gray-800">
                    {children}
                </div>
            </div>
        </div>
    );
}
