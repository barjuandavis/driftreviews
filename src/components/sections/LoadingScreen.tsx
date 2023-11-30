import "@dotlottie/player-component";

function LoadingScreen() {
  return (
    <div className="w-full h-full flex justify-center items-center bg-black bg-opacity-70 absolute top-0 left-0 z-50">
      <dotlottie-player
        src="/loading.lottie"
        autoplay
        loop
        style={{ height: "100%", width: "100%", maxWidth: "250px" }}
      />
    </div>
  );
}

export default LoadingScreen;
