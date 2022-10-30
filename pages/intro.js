import Animation2 from "../components/Animation2";
import Bounce from '../components/Bounce'

export default function Intro() {
  return (
    <>
    <section className="container -mx-2 lg:mx-48">
      <div className="lg:flex flex-row py-24">
       <h1 className="font-amiri text-gray-800 text-2xl mx-10 my-2 lg:text-4xl lg:mx-24">Our mind has 8 aspects, or</h1>
       <h1 className="font-titan-one text-pure-blue text-2xl lg:pt-2 lg:text-4xl lg:-mx-20 mx-20 animate-pulse">
        "consciousnesses"
        </h1>
        <br/>
        <div>
        <h1 className="text-3xl p-4 lg:text-6xl lg:-mx-80 lg:my-20 ">...and 4 levels</h1>
        </div>
      
          <Animation2 />
      </div>
    </section>
      
    </>
  );
}

