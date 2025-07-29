export default function music() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center font-mono text-2xl">
      <div className="border-b-2 border-[#ededed] m-4">
        <p>Here's some of the songs I've written!</p>
      </div>
      <div className="flex flex-col items-center gap-2 m-4">
        <p>With You</p>
        <audio controls>
          <source src="/site-wy.wav" type="audio/wav" />
        </audio>
      </div>
    </div>
  );
}
