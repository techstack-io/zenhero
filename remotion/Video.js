import {Composition} from 'remotion';
import {MyComposition} from './Composition';
import {Consciousness} from './components/Consciousness'

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="MyComp"
				component={MyComposition}
				durationInFrames={240}
				fps={30}
				width={1280}
				height={720}
			/>
      <Composition
        id="Consciousness"
        component={Consciousness}
        durationInFrames={240}
        fps={60}
        width={1920}
        height={1080}
        defaultProps={{
          text: 'Our mind has 8 aspects, or "Consciousnesses"',
        }}
      />
		</>
	);
};