import Page from "@/components/page";
import Image from "next/image";

const Work = () => {
  const projectsSoftwareDev = [
    {
      title: "ChatBot using NLP",
      image: "/softwaredev/projectChatbot.jpg",
      description:
        "Crafted a Python chatbot that not only harnesses the power of NLTK for robust natural language processing but also incorporates Flet for a visually appealing graphical user interface. This chatbot stands out by injecting a touch of humor into its responses, making interactions not only informative but also delightful. Users can engage in witty conversations, creating a unique and enjoyable experience with the blend of NLP sophistication and a whimsical sense of humor.",
      Link: "https://github.com/aviralshastri/Basic-Chatbot-with-NLTK.git",
      buttonName: "View on GitHub",
      liveDemoLink: "",
    },
    {
      title: "Portfolio Website",
      image: "/softwaredev/projectPortfolio.png",
      description:
        "Introducing my comprehensive portfolio, meticulously crafted using the powerful Next.js framework, Tailwind CSS for a refined design system, and Framer Motion to infuse dynamic animations. This triad of technologies ensures not only a highly functional and responsive web application but also a visually stunning and interactive showcase of my skills and projects. The Next.js framework brings efficiency and speed to the forefront, Tailwind CSS facilitates a sleek and modern design aesthetic, while Framer Motion elevates the overall user experience with smooth and captivating animations. From seamless navigation to captivating transitions, my portfolio embodies the synergy of cutting-edge web development, offering visitors an immersive journey through my professional endeavors and capabilities.",
      Link: "https://github.com/aviralshastri/portfolio-temporary.git",
      buttonName: "View on GitHub",
      liveDemoLink: "https://aviral-shastri-portfolio.vercel.app/",
    },
    {
      title: "Secure Password Generator",
      image: "/softwaredev/projectPasswordGenrator.png",
      description:
        "Built a secure password generator using Next.js and Tailwind CSS. This application empowers users to generate strong and unique passwords with customizable settings, ensuring robust protection against cyber threats. Tailwind CSS provides a streamlined approach to crafting a user-friendly interface, while Next.js guarantees a performant and efficient user experience.",
      Link: "https://github.com/aviralshastri/password-generator",
      buttonName: "View on GitHub",
      liveDemoLink: "https://password-generator-lac-five.vercel.app/",
    },
    {
      title: "Interactive Dictionary App",
      image: "/softwaredev/projectDictionary.png",
      description:
        "Developed an interactive dictionary app using Next.js, Tailwind CSS, and a free dictionary API. This comprehensive tool allows users to search for word definitions, access phonetic pronunciations, and even listen to audio samples of the pronunciations. The combination of Next.js and Tailwind CSS fosters a visually appealing and responsive user interface, while the free dictionary API grants access to a vast database of words and their definitions.",
      Link: "https://github.com/aviralshastri/Dictionary-app-using-nextjs",
      buttonName: "View on GitHub",
      liveDemoLink: "https://dictionary-alpha-liard.vercel.app/",
    },
  ];

  const projectsVideoEditing = [
    {
      title: "Video Editing Project",
      image: "/videoediting/EditingInternship.png",
      description:
        "As a video editing intern at Vaayu Robotics, I leveraged my skills in Premiere Pro and After Effects to produce high-quality and visually captivating content. Through the seamless integration of these powerful tools, I enhanced video narratives with polished effects, dynamic transitions, and professional-grade editing techniques. This internship not only honed my proficiency in industry-standard software but also allowed me to contribute creatively to the production of compelling and impactful video content for Vaayu Robotics.",
      Link: "/links",
      buttonName: "View Work",
    },
  ];

  return (
    <Page>
      <div id="work" className="pt-16"></div>
      <h1 className="text-6xl font-bold mt-8 mb-8 text-center">Work</h1>
      <div className="text-2xl font-bold mb-4 text-center">
        Software Development
      </div>
      <div className="flex flex-wrap justify-center workImg">
        {projectsSoftwareDev.map((project, index) => (
          <div
            key={index}
            className="max-w-md mx-4 mb-8 bg-lavinder rounded-md overflow-hidden shadow-lg"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={300}
              height={200}
              className="mx-auto mt-8 rounded-md"
              objectFit="cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2 text-center">
                {project.title}
              </h2>
              <p className="text-sm text-gray-600 text-balance">
                {project.description}
              </p>
              <div className="mt-4 text-center">
                <a
                  href={project.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-900 hover:bg-zinc-800 text-white font-bold py-2 px-8 rounded-full inline-block"
                >
                  {project.buttonName}
                </a>
              </div>
              {project.liveDemoLink && (
                <div className="mt-4 text-center">
                  <a
                    href={project.liveDemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-zinc-800 text-zinc-900 border border-solid border-zinc-900 font-bold py-2 px-8 rounded-full inline-block"
                  >
                    Live Demo
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="my-8" />

      <div className="text-2xl font-bold mb-4 text-center">Video Editing</div>
      <div className="flex flex-wrap justify-center workImg">
        {projectsVideoEditing.map((project, index) => (
          <div
            key={index}
            className="max-w-md mx-4 mb-8 bg-lavinder rounded-md overflow-hidden shadow-lg"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={300}
              height={200}
              className="mx-auto rounded-md"
              objectFit="cover"
            />
            <div className="p-4">
              <h1 className="text-2xl font-bold mb-2 text-center">
                {project.title}
              </h1>
              <p className="text-sm text-gray-600 text-balance">
                {project.description}
              </p>
              <div className="mt-4 text-center">
                <a
                  href={project.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-900 hover:bg-zinc-800 text-white font-bold py-2 px-8 rounded-full inline-block"
                >
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
