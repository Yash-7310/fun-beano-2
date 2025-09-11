const Loading = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <video autoPlay muted playsInline className="w-32 sm:w-40 h-auto">
        <source src="/RotatingLogo.webm" type="video/webm"></source>
        <source src="/RotatingLogo.mp4" type="video/mp4"></source>
        <img src="/RotatingLogo.png" alt="Rotating Logo" />
      </video>
      <h1 className="sunny-spells text-xl md:text-4xl lg:text-7xl bg-gradient-to-b from-orange-500 via-orange-500 to-red-600 bg-clip-text text-transparent">
        Loading...
      </h1>
    </div>
  );
};

export default Loading;
