import Page from "@/components/page";
import Image from "next/image";

const Work = () => {
  const projectsSoftwareDev = [
    {
      title: "ChatBot using NLP",
      image: "/projectChatbot.png",
      description: "A project description goes here. Briefly describe the ChatBot using NLP.",
      githubLink: "https://github.com/yourusername/chatbot-nlp",
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
          </div>
        </div>
      ))}
    </div>

    <div className="my-8" />

    <div className="text-4xl font-bold mb-12 mt-4 text-center">Video Editing</div>
      <div className="flex flex-wrap mt-12 justify-center">
        {projectsVideoEditing.map((project, index) => (
          <div key={index} className="max-w-md mx-4 mb-8 bg-white rounded-md overflow-hidden shadow-2xl">
            <Image src={project.image} alt={project.title} width={300} height={200} className="mx-auto" objectFit="cover" />
            <div className="p-4">
              <h1 className="text-2xl font-bold mb-2 text-center">{project.title}</h1>
              <p className="text-sm text-gray-600 text-balance">{project.description}</p>
              <div className="mt-4 text-center">
                <a href={project.Link} target="_blank" rel="noopener noreferrer" className="bg-zinc-900 hover:bg-zinc-800 text-white font-bold py-2 px-4 rounded-full inline-block">
                  {project.buttonName}
                </a>
              </div>
            </div>
          </div>
        ))}
    </div>
  </Page>
);

};

export default Work;
