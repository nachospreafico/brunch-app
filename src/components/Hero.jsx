const Hero = () => {
  return (
    <main className="max-w-1640px mx-auto p-4">
      <div className="max-h-[500px] relative">
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/50 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            The Best <span className="text-[tomato]">Brunch!</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Delivered
          </h1>
        </div>
        <img
          src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="pancakes"
          className="w-full max-h-[500px] object-cover"
        ></img>
      </div>
    </main>
  );
};

export default Hero;
