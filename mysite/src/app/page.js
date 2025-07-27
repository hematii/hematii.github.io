import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen items-center lg:flex-row">
      <div className="flex lg:h-full w-4/5 lg:w-2/5 lg:p-8 items-center">
        <Image
          src="/bigjimage.png"
          alt="incredible self portrait"
          width={1600}
          height={1600}
          className="aspect-square"
        />
      </div>
      <div className="m-2 flex-1 font-mono antialiased">
        <h1 className="text-4xl lg:text-6xl font-semibold m-4 bg-blue-500 p-1">
          Hello!
        </h1>
        <p className="m-4 p-2 text-l lg:text-2xl antialiased">
          Welcome to my personal site! My name is Hemati. I'm a college graduate
          with a bachelor's in computer science currently on the job hunt, and I
          also sing and write music in my free time. My other interests include
          volleyball, snowboarding, mechanical keyboards, and Pokémon.
        </p>
      </div>
    </div>
  );
}
