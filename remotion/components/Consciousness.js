import { FC } from 'react';

type ConsciousnessProps = {
 text: string;
};
export const Consciousness: FC<ConsciousnessProps> = ({ text }) => (
 
 <div
  style={{
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   flex: 1,
   backgroundColor: 'white',
   color: '#1C4ED8',
   fontSize: 100,
   fontFamily: 'Signika Negative sans-serif',
  }}
 >
  <div>{text}</div>
 </div>
);