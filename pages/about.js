import TextAbout from "@/components/TextAbout";
import Page from "@/components/page";
import Image from "next/image";

export default function About() {
  return (
    <Page>
      <div className="flex flex-col md:flex-row overflow-x-hidden items-center self-center mt-4 mb-12 mx-4 md:mx-24">

        <div className="md:w-1/3 mx-auto mb-4 md:mb-0">
          <Image src="/about.png" alt="About Image" width={600} height={600} />
        </div>
        <div className="w-full md:w-2/3">
          <TextAbout
            text="I'm Aviral Shastri, a multi-talented professional with expertise in web development, Python programming, MySQL database management and video editing in Adobe Premier Pro and Adobe After Effects. I create innovative and user-friendly solutions. From crafting visually appealing websites to writing efficient database queries and creating stunning videos, I'm committed to delivering high-quality results. Let's collaborate and bring your ideas to life!"
            className="text-xl text-balance "
          />
        </div>
      </div>
    </Page>
  );
}
