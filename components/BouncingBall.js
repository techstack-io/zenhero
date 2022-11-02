import { motion } from "framer-motion"


const ballStyle = {
    display: "block",
    width: "1rem",
    height: "1rem",
    backgroundColor: "black",
    borderRadius: "0.5rem"

}

export default function BouncingBall() {
  return (
    <>
    <div
        style={{
            width: "2rem ",
            height: "2rem",
            display: "flex",
            justifyContent: "space-around"
        }}
    >
        <motion.span style={ballStyle} />
    </div>


    </>
  );
}

