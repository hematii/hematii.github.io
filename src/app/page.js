import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex flex-col font-mono lg:flex-row flex-wrap">
      <div className="flex flex-col w-full lg:w-3/5 h-screen items-center p-2 place-content-evenly bg-zinc-900">
        {/* Image */}
        <div className="flex w-4/5 lg:w-2/5">
          <Image
            src="/bigjimage.png"
            alt="incredible self portrait"
            width={1600}
            height={1600}
            className="aspect-square"
          />
        </div>
        {/* Text */}
        <div className="mx-2 antialiased flex flex-col justify-items-evenly gap-2">
          <h1 className="text-4xl lg:text-6xl font-semibold mx-6 bg-indigo-500 p-2">
            Hello!
          </h1>
          <p className="mx-4 p-2 text-l lg:text-2xl antialiased">
            Welcome to my personal site! My name is Hemati (pictured above). I'm
            a college graduate with a bachelor's in computer science, and I'm
            currently on the job hunt. When I'm not worrying about employment, I
            write music! Some of my other hobbies include mechanical keyboards,
            playing volleyball, and snowboarding.
          </p>
        </div>
      </div>
      {/* Audio */}
      <div className="flex flex-col w-full lg:w-2/5 h-screen bg-indigo-300 text-zinc-950 items-center place-content-center gap-10">
        <p className="w-2/3 text-l lg:text-2xl items-center">
          Check out some of my unreleased music! I wrote, sang, and played
          everything!
        </p>
        <audio controls className="w-2/3 max-w-md mx-2">
          <source src="/site-wy.wav" type="audio/wav" />
          Your browser does not support the audio element.
        </audio>
      </div>
      <div className="h-screen w-full bg-indigo-900"></div>
    </div>
  );
}
