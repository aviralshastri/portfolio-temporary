import Page from "@/components/page";
import Image from "next/image";

const Work = () => {
  const projectsSoftwareDev = [
    {
      title: "ChatBot using NLP",
      image: "/softwaredev/projectChatbot.jpg",
      description: "Crafted a Python chatbot that not only harnesses the power of NLTK for robust natural language processing but also incorporates Flet for a visually appealing graphical user interface. This chatbot stands out by injecting a touch of humor into its responses, making interactions not only informative but also delightful. Users can engage in witty conversations, creating a unique and enjoyable experience with the blend of NLP sophistication and a whimsical sense of humor.",
      githubLink: "https://github.com/aviralshastri/Basic-Chatbot-with-NLTK.git",
      buttonName:"View on GitHub"
    },
    {
      title: "Portfolio Website",
      image: "/softwaredev/projectPortfolio.png",
      description: "Introducing my comprehensive portfolio, meticulously crafted using the powerful Next.js framework, Tailwind CSS for a refined design system, and Framer Motion to infuse dynamic animations. This triad of technologies ensures not only a highly functional and responsive web application but also a visually stunning and interactive showcase of my skills and projects. The Next.js framework brings efficiency and speed to the forefront, Tailwind CSS facilitates a sleek and modern design aesthetic, while Framer Motion elevates the overall user experience with smooth and captivating animations. From seamless navigation to captivating transitions, my portfolio embodies the synergy of cutting-edge web development, offering visitors an immersive journey through my professional endeavors and capabilities.",
      githubLink: "https://github.com/aviralshastri/portfolio-temporary.git",
      buttonName:"View on GitHub"
    },
    
  ];

  const projectsVideoEditing = [
    {
      title: "Video Editing Internship",
      image: "/videoediting/EditingInternship.png",
      description: "As a video editing intern at Vaayu Robotics, I leveraged my skills in Premiere Pro and After Effects to produce high-quality and visually captivating content. Through the seamless integration of these powerful tools, I enhanced video narratives with polished effects, dynamic transitions, and professional-grade editing techniques. This internship not only honed my proficiency in industry-standard software but also allowed me to contribute creatively to the production of compelling and impactful video content for Vaayu Robotics.",
      Link: "/links",
      buttonName:"View Work"
    },
  ];


return (
  <Page>
    <h1 className="text-4xl font-bold mt-8 mb-8 text-center">Work</h1>

    <div className="text-4xl font-bold mb-4 text-center">Software Development</div>
    <div className="flex flex-wrap justify-center ">
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
