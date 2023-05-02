const EventsPerCityPage = ({data}) => {
  return (
    <div>
      <h1>Events in London</h1>
      <div>
        {data.map(ev => (
          <a key={ev.id} href={`/events/${ev.city}/${ev.id}`}>
            <img src={ev.image} alt={ev.title} />
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default EventsPerCityPage;

export async function getStaticPaths() {
  const { events_categories } = await import('/data/data.json');
  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        categories: ev.id.toString(),
      },
    };
  });
  console.log(allPaths);
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const id = context?.params.categories;
  const { allEvents } = await import('/data/data.json');

  const data = allEvents.filter((ev) => ev.city === id);

  return { props: { data, pageName: id } };
}