import Button from "@/components/Button";
import Container from "@/components/Container";
import MarqueeImg from "@/components/marquee-img";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const Home = () => {
  return (
    <main className="pb-24">
      <Container className="flex flex-col gap-8">
        <div className="mt-8">
          <h1 className="text-3xl text-center md:text-left md:text-6xl">
            <span className="text-white text-shadow-outline font-extrabold md:text-8xl">
              AI Superpower
            </span>
            <span className="text-gray-500 font-extrabold">
              {" "}
              - A better way to
            </span>
            <br />
            Improve your interview chances and skills
          </h1>
          <p className="mt-4 text-[#767676] text-sm">
            Boost your interview skills and increase your rate with AI-driven
            insights. Discover a smarter way to prepare, practice, and standout.
          </p>
        </div>
        <div className="w-full flex items-center justify-evenly md:px-12 md:py-16 md:items-center md:justify-center gap-12">
          <p className="text-3xl font-semibold text-gray-900 text-center">
            250k+
          </p>
          <p className="text-3xl font-semibold text-gray-900 text-center">
            1.2M+
            <span className="block text-xl text-muted-foreground font-normal">
              Interview Aced
            </span>
          </p>
        </div>

        <div className="relative w-full h-[420px]">
          <Image
            src={"/assets/img/hero.jpg"}
            fill
            alt=""
            className="object-cover rounded-lg"
          />

          <div className="absolute top-4 left-4 px-4 py-2 bg-white/40 rounded-md">
            <span className="text-sm font-medium">Inteviews Copilot&copy;</span>
          </div>

          <div className="hidden md:block absolute bottom-4 right-4 w-80 px-4 py-2 rounded-md bg-white/60">
            <h2 className="text-neutral-800 font-semibold">Developer</h2>
            <p className="text-sm text-neutral-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              distinctio natus, quos voluptatibus magni sapiente.
            </p>
            <Button
              text={"Generate"}
              icon={<Sparkles size={15} className="order-2" />}
              className="flex items-center gap-2 mt-2"
            />
          </div>
        </div>
      </Container>

      <div className="w-full my-15 px-6 overflow-hidden">
        <Marquee pauseOnHover>
          <MarqueeImg img="/assets/img/logo/firebase.png" />
          <MarqueeImg img="/assets/img/logo/meet.png" />
          <MarqueeImg img="/assets/img/logo/zoom.png" />
          <MarqueeImg img="/assets/img/logo/firebase.png" />
          <MarqueeImg img="/assets/img/logo/microsoft.png" />
          <MarqueeImg img="/assets/img/logo/meet.png" />
          <MarqueeImg img="/assets/img/logo/tailwindcss.png" />
          <MarqueeImg img="/assets/img/logo/microsoft.png" />
        </Marquee>
      </div>

      <Container className="py-8 space-y-8">
        <h2 className="text-xl text-gray-800 font-semibold tracking-wide">
          Unleash your potential with personalized AI insights and targeted
          interview practice.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-3 items-center">
          <div className="w-full h-[420px] relative col-span-1 md:col-span-3">
            <Image
              src={"/assets/img/office.jpg"}
              fill
              alt=""
              className="object-cover rounded-lg"
            />
          </div>

          <div className="col-span-1 md:col-span-2">
            <p className=" text-[#767676] text-center mb-7">
              Transform the way you prepare, gain confidence, and boost your
              chances of landing your dream job. Let AI be your edge in
              today&apos;s competitive job market.
            </p>
            <Link href={"/interviews"} className="w-full">
              <Button
                className="w-3/4 flex items-center justify-center gap-2 mx-auto"
                text="Genetate"
                icon={<Sparkles size={15} className="order-2" />}
              />
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Home;
