import EventItem from "../../components/EventItem";
import {API_URL} from "../../config/index";

export default function EventsPage({events}) {
    return (
      <>
      <div className="lg:mx-60 p-6 lg:w-full relative grid grid-cols-1 gap-x-14 md:grid-cols-2">
        <section className="mt-12">
        <h2 className="font-zen-antique-soft text-blue-800 text-5xl text-gray-900">upcoming events...</h2>
        <br/>
        <hr/>
        <br/>
        {events.length === 0 && <h3>No events to show</h3>}
        {events.map((evt) => (
          <EventItem key={evt.id} evt={evt} />
        ))}
      </section>
      </div>
      </>
    );
  }

  export async function getServerSideProps() {
    const res = await fetch(`${API_URL}/api/events`)
    const events = await res.json()
  
    return {
      props: {events},
    }
  }