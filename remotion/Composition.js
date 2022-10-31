import { useCurrentFrame, AbsoluteFill, interpolate } from "remotion";
 
export const MyComposition = () => {
  const frame = useCurrentFrame();


  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        fontSize: 100,
        backgroundColor: "white"
      }}
    >
    </AbsoluteFill>
  );
};