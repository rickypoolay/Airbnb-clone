import { format } from "date-fns";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, numOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd, MMMM yyyy");
  const formattedEndDate = format(new Date(endDate), "dd, MMMM yyyy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className="">
      <Header placeholder={`${location} | ${range} | ${numOfGuests}`} />

      <main className="flex max-w-7xl mx-auto px-8 sm:px-16 shadow-md">
        <section className="pt-14 px-6 mx-auto">
          <p className="text-xs">
            300+ Stays for {numOfGuests} {numOfGuests == 1 ? "guest" : "guests"}{" "}
            | {range}
          </p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="space-x-3 hidden lg:inline-flex mb-5 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibillity</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
          <div className="flex flex-col">
            {searchResults.map(
              ({
                img,
                location,
                title,
                description,
                lat,
                long,
                price,
                star,
                total,
              }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  lat={lat}
                  long={long}
                  price={price}
                  star={star}
                  total={total}
                />
              )
            )}
          </div>
        </section>

        <section className="xl:inline xl:min-w-[600px]">
          <div className="hidden sticky top-20 xl:flex">
            <Map searchResults={searchResults} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResults,
    },
  };
}
