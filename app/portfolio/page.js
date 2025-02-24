import PhoneFrame from "../components/PhoneFrame";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default function Portfolio() {
  const projects = [
    { title: "Project A", desc: "Deskripsi singkat project A" },
    { title: "Project B", desc: "Deskripsi singkat project B" },
    { title: "Project C", desc: "Deskripsi singkat project C" },
  ];

  return (
    <PhoneFrame>
      <Navbar />
      <div className="p-4 text-white">
        <h1 className="text-2xl font-bold">Portfolio</h1>
        <div className="mt-4 grid gap-4">
          {projects.map((project, index) => (
            <Card key={index} title={project.title} desc={project.desc} />
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}
