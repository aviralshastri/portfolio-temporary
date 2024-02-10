import AnimatedTextAbout from "@/components/AnimatedTextAbout";
import Page from "@/components/page";
import Image from "next/image";

export default function About() {
  return (
    <Page>
      <div className="flex flex-col md:flex-row items-center self-center mt-12 mb-12 mx-4 md:mx-24">
        {/* Image */}
        <div className="md:w-1/3 mx-auto mb-4 md:mb-0">
          <Image src="/about.png" alt="About Image" width={600} height={600} />
        </div>

        {/* Text */}
        <div className="w-full md:w-2/3">
          <AnimatedTextAbout
            text="I'm Aviral Shastri, a multi-talented professional with expertise in web development, Android app development, Python programming, MySQL database management and video editing. With years of experience, I create innovative and user-friendly solutions. From crafting visually appealing websites and developing mobile apps, to writing efficient database queries and creating stunning videos, I'm committed to delivering high-quality results. Let's collaborate and bring your ideas to life!"
            className="text-xl text-left"
          />
        </div>
      </div>
    </Page>
  );
}
