import HomeButton from "./HomeButton";

export default function BezelBottom() {
    return (
      <div className="absolute h-[71px] bottom-0 w-full h-8 bg-gray-800 flex items-center justify-between px-4 text-white text-sm">
        <HomeButton />
      </div>
    );
  }
  