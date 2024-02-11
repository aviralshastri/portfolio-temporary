import Page from "@/components/page";
import React from 'react';

const LinkCard = ({ title, links }) => {
  return (
    <div className="w-2/3 mb:w-2/3 mx-auto mb-8">
      <div className="bg-white p-4 md:p-8 rounded-md shadow-2xl">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">{title}</h2>

        <div className="flex flex-col text-left mt-4 md:mt-6">
          {links.map((link, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 cursor-pointer text-base md:text-lg flex items-center justify-start overflow-hidden whitespace-nowrap mb-2"
            >
              <span className="mr-2">{index + 1}.</span>
              {link}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const LinkPage = () => {
  const linksData = [
    {
      title: "Vaayu Robotics",
      links: [
        "https://www.instagram.com/reel/Cu6qNx4pvdg/?igsh=MWdtbXpwNmFxd2s5cA==",
        "https://www.instagram.com/reel/Cx43IpbrOYN/?igsh=NDFoN3YyNWs4N2Rm",
        "https://www.instagram.com/reel/CxhpLhYIrvT/?igsh=MWtpdjNrbTVlNm5jOA==",
        "https://www.instagram.com/reel/Cw7OfYkvgAD/?igsh=MWl4dHR4cDhrdXZnbA=="
      ]
    },
  ];

  return (
    <Page>
      <div className="text-4xl md:text-6xl font-mono font-bold text-center mt-8 mb-8">
        Links
      </div>
      {linksData.map((data, index) => (
        <LinkCard key={index} title={data.title} links={data.links} />
      ))}
    </Page>
  );
};

export default LinkPage;
