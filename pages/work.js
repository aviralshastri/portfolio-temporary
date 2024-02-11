import Page from "@/components/page";
import Image from "next/image";

const Work = () => {
  const projects = [
    {
      title: "ChatBot using NLP",
      image: "https://drive.google.com/file/d/1gRywQ8zdsFJCccZWf_Nnv_hGca9SnoOI/view?usp=sharing",
      description: "A project description goes here. Briefly describe the ChatBot using NLP.",
      githubLink: "https://github.com/aviralshastri/Basic-Chatbot-with-NLTK.git",
    },
  ];

  return (
    <Page>
      <h1 className="text-8xl font-bold mt-8 mb-8 text-center">Work</h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 cursor-pointer transition-transform transform hover:scale-105">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex">
                <div className="w-1/2">
                  <Image
                    src={'/projectChatbot.png'}
                    alt={`Project ${index}`}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover rounded-md"
                  />
                </div>
                <div className="w-1/2 ml-4">
                  <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </Page>
  );
};

export default Work;
