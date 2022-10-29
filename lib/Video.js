import { Composition } from "remotion";
 
export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        component={Component}
        durationInFrames={300}
        width={1080}
        height={1080}
        fps={30}
        id="test-render"
        defaultProps={{}}
      />
      {/* Additional compositions can be rendered */}
    </>
  );
};