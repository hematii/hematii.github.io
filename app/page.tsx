import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex flex-col font-mono lg:flex-row flex-wrap">
      <div className="flex flex-col w-full lg:w-1/2 h-screen items-center p-2 place-content-evenly bg-zinc-950">
        {/* Image */}
        <div className="flex w-3/5 lg:w-2/5">
          <Image
            src="/bigjimage.png"
            alt="incredible self portrait"
            width={1600}
            height={1600}
            className="aspect-square animate-[spin_10s_linear_infinite]"
          />
        </div>
        {/* Text */}
        <div className="mx-2 antialiased flex flex-col justify-items-evenly gap-2">
          <h1 className="text-4xl lg:text-6xl font-semibold mx-4 bg-indigo-500 p-2">
            Hello!
          </h1>
          <p className="mx-4 p-2 text-l lg:text-2xl antialiased">
            Welcome to my personal site! My name is Caleb (pictured above). I'm
            a college graduate with a bachelor's in computer science, and I'm
            currently on the job hunt. When I'm not worrying about employment, I
            write music! Some of my other interests include mechanical
            keyboards, video games, volleyball, and snowboarding.
          </p>
        </div>
      </div>
      {/* Audio */}
      <div className="flex flex-col w-full lg:w-1/2 h-screen bg-indigo-300 text-zinc-950 items-center place-content-center gap-10 text-l lg:text-2xl">
        <p className="w-2/3 items-center text-center">
          Check out some of my unreleased music!
        </p>
        <a href="/music">
          <button className="bg-indigo-400 hover:bg-indigo-500 active:bg-indigo-500 p-4 rounded-xl cursor-pointer">
            OKAY HEHE
          </button>
        </a>
      </div>
    </div>
  );
}
