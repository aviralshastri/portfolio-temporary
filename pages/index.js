import Page from "@/components/page";
import Image from "next/image";
import me from '@/public/me.jpg';
import Link from 'next/link';

export default function Home() {
    return (
        <Page>
            <div className="flex flex-col items-center mb-8 mt-12">
                <div className="bg-white rounded-lg p-4 md:flex md:items-center md:space-x-12">
                    <div className="mx-auto mb-4 md:mb-0 md:w-1/2">
                        <Image src={me} alt="My Image" width={500} height={500} className="me" />
                    </div>
                    <div className="text-center md:text-left md:w-1/2 mt-4 md:mt-0 space-y-6">
                        <h1 className="text-4xl text-dark">
                            I am <span className="font-bold">Aviral Shastri</span>
                        </h1>
                        <p className="text-2xl mt-4 md:mt-2">
                            Welcome to my personal website. Feel free to explore!
                        </p>
                        <div className="flex items-center mt-4 space-x-4 social">

                                <a className="hover:opacity-80" href="https://x.com/AviralShastri?t=YlyiZv2oekkVLiQN3JvOxQ&s=09">
                                    <Image src="/twitter.png" alt="Twitter" width={60} height={60} />
                                </a>


                                <a className="hover:opacity-80" href="https://github.com/aviralshastri">
                                    <Image src="/github.png" alt="GitHub" width={45} height={45} />
                                </a>


                                <a className="hover:opacity-80" href="https://www.instagram.com/wateproofhelicopter?igsh=MXA0bTQwMGRvMXIwcA==">
                                    <Image src="/instagram.png" alt="Instagram" width={45} height={45} />
                                </a>


                                <a className="hover:opacity-80" href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGjUhnQOvUjhgAAAY2T595YbonfC2u0pohFvnf-MOR0aeqq-XTX2W1v13JThSlGPBCzulMyfClis36kF5TEhdWLrK81BulTapHFIWP744WMIAawJtZp2iCJfjK-kgHxM4NriKQ=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Faviral-shastri-104944270%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app">
                                    <Image src="/linkedin.png" alt="LinkedIn" width={40} height={40} />
                                </a>

                        </div>
                    </div>
                </div>
            </div>
        </Page>
    );
}
