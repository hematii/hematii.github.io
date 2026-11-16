import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex flex-col font-mono lg:flex-row flex-wrap">
      {/* Image and Text */}
      <div className="flex flex-col w-full lg:w-1/2 h-screen items-center p-2 place-content-evenly bg-zinc-950">
        {/* Image */}
        <div className="flex w-3/5 lg:w-2/5 bg-indigo-500 p-5 rounded-full">
          <Image
            src="/wigglypfp.gif"
            alt="incredible self portrait"
            width={1600}
            height={1600}
            className="aspect-square"
            // className="aspect-square animate-[spin_10s_linear_infinite]"
          />
        </div>
        {/* Text */}
        <div className="mx-2 antialiased flex flex-col justify-items-evenly gap-2">
          <h1 className="text-4xl lg:text-6xl font-semibold mx-4 bg-indigo-500 p-2">
            Hello!
          </h1>
          <p className="mx-4 p-2 text-l lg:text-2xl antialiased">
            Welcome to my personal site! I'm hemati, and I sing and write music!
            I didn't want to pay for a linktree, so I figured I'd make this
            website myself!
          </p>
        </div>
      </div>
      {/* Links */}
      <div className="flex flex-col w-full lg:w-1/2 h-screen bg-indigo-300 text-zinc-950 items-center place-content-center gap-10 text-l lg:text-2xl">
        <p className="w-2/3 items-center text-center">Here's all my links!</p>
        <a
          href="https://open.spotify.com/artist/3YYDdxz9quHhrw3rptfpf0"
          target="_blank"
        >
          <button className="bg-indigo-400 hover:bg-indigo-500 active:bg-indigo-500 p-4 rounded-xl cursor-pointer">
            SPOTIFY
          </button>
        </a>
        <a href="https://www.instagram.com/heyitshemati" target="_blank">
          <button className="bg-indigo-400 hover:bg-indigo-500 active:bg-indigo-500 p-4 rounded-xl cursor-pointer">
            INSTAGRAM
          </button>
        </a>
        <a href="https://www.tiktok.com/@heyitshemati" target="_blank">
          <button className="bg-indigo-400 hover:bg-indigo-500 active:bg-indigo-500 p-4 rounded-xl cursor-pointer">
            TIKTOK
          </button>
        </a>
        <a href="/music">
          <button className="bg-indigo-400 hover:bg-indigo-500 active:bg-indigo-500 p-4 rounded-xl cursor-pointer">
            uhhhhh
          </button>
        </a>
      </div>
    </div>
  );
}
