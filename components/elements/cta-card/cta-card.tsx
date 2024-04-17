import Image from 'next/image';
const CTACard = () => {
  return (
    <div className="rounded-md bg-slate-100 px-6 py-10 relative overflow-hidden">
      <div className="absolute z-10 inset-0 bg-gradient-to-br from-white/95 via-white/70 to-white/30"></div>
      <Image
        fill
        alt="CTA Card image"
        className="object-cover object-center"
        src="https://images.unsplash.com/photo-1585970480901-90d6bb2a48b5?ixid=MnwzODU2NTF8MHwxfHNlYXJjaHwxOHx8RWxlcGhhbnRzJTIwdGhhaWxhbmR8ZW58MHx8fHwxNjcwMzIyNzUx&ixlib=rb-4.0.3"
      />
      <div className="relative z-20">
        <div className="font-medium text-lg">#exploretheworld</div>
        <h3 className="text-4xl font-semibold mt-3">
          Explore the world with me!
        </h3>
        <p className="mt-2 text-lg max-w-lg">
          Explore the world with me! I&apos;m travelling around the world.
          I&apos;ve visited most of the great cities. Join me!
        </p>
        <form className="mt-6 flex items-center gap-2 w-full">
          <input
            placeholder="Write your email."
            className="w-full md:w-auto placeholder:text-sm bg-white text-base rounded-md py-2 px-3 outline-none focues:ring-2 ring-neutral-600 bg-white/80"
          />
          <button className="whitespace-nowrap bg-neutral-900 rounded-md px-3 py-2 text-neutral-200">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default CTACard;
