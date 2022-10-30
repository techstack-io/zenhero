import Lottie from "react-lottie";
import animationData from "../lib/lottie/brain-launch-icon.json";

function Animation1() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    loop: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={400} width={400} />;
}

export default Animation1;