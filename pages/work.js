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
  const projectsVideoEditing = [
    {
      title: "Video Editing Project",
      image: "/videoediting/EditingInternship.png",
      description: "As a video editing intern at Vaayu Robotics, I leveraged my skills in Premiere Pro and After Effects to produce high-quality and visually captivating content. Through the seamless integration of these powerful tools, I enhanced video narratives with polished effects, dynamic transitions, and professional-grade editing techniques. This internship not only honed my proficiency in industry-standard software but also allowed me to contribute creatively to the production of compelling and impactful video content for Vaayu Robotics.",
      instagramLink: "/links",
      buttonName: "View Work",
    },
  ];

  return (
    <Page>
      <h1 className="text-4xl font-bold mt-8 mb-8 text-center">Work</h1>

      <div className="text-2xl font-bold mb-4 text-center">Software Development</div>
      <div className="flex flex-wrap justify-center">
        {projectsSoftwareDev.map((project, index) => (
          <div key={index} className="max-w-md mx-4 mb-8 bg-white rounded-md overflow-hidden shadow-2xl">
            <Image src={project.image} alt={project.title} width={300} height={200} className="mx-auto mt-8" objectFit="cover" />
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2 text-center">{project.title}</h2>
              <p className="text-sm text-gray-600 text-balance">{project.description}</p>
              <div className="mt-4 text-center">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="bg-zinc-900 hover:bg-zinc-800 text-white font-bold py-2 px-4 rounded-full inline-block">
                  {project.buttonName}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="my-8" />

      <div className="text-2xl font-bold mb-4 text-center">Video Editing</div>
      <div className="flex flex-wrap justify-center">
        {projectsVideoEditing.map((project, index) => (
          <div key={index} className="max-w-md mx-4 mb-8 bg-white rounded-md overflow-hidden shadow-2xl">
            <Image src={project.image} alt={project.title} width={300} height={200} className="mx-auto" objectFit="cover" />
            <div className="p-4">
              <h1 className="text-2xl font-bold mb-2 text-center">{project.title}</h1>
              <p className="text-sm text-gray-600 text-balance">{project.description}</p>
              <div className="mt-4 text-center">
                <a href={project.instagramLink} target="_blank" rel="noopener noreferrer" className="bg-zinc-900 hover:bg-zinc-800 text-white font-bold py-2 px-4 rounded-full inline-block">
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