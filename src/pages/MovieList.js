import { Card } from '../components/Card';
import { useFetch } from '../hooks/useFetch';

// fetching the apiPath passed by the current route
export const MovieList = ({ apiPath }) => {
  // useFetch will be called according to the routes called upon
  const { movies } = useFetch(apiPath);
  // †hen its movies data will be passed from the useFetch route

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {/* iterating the card element over the movies results */}
          {movies.map((movie) => (
            // key stays as the distinct id of each individual movie object
            // passing the movie object dynamically on the card element  so it us availavable on the card module as well
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
