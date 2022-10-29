import Showcase from "../components/Showcase";

export default function Intro() {
  return (
    <>
     <center>
     <video controls src={"img/video.mp4"} className="w-1/2 pt-12"/>
     <img
            src="img/box-1.svg"
            className="inline-block p-4"
            alt="image"
            loading="lazy"
            width="125"
            height="125"
          />
     </center>
    </>
  );
}
