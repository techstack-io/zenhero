import Lottie from "react-lottie";
import animationData from "../lib/lottie/lf30_editor_fqh7xbud.json";

function Animation2() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={400} width={400} />;
}

export default Animation2;