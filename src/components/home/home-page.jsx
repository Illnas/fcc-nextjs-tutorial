import Link from "next/link";

export const homePage = () => {
  <main className={styles.main}>
    {data &&
      data.map((ev) => (
        <Link href={`/events/${ev.id}`} key={ev.id} passHref>
          <img src={ev.image} alt="" width={200} height={200} />
          <h2>{ev.title}</h2>
          <p>{ev.description}</p>
        </Link>
      ))}
  </main>;
};

export default homePage;
