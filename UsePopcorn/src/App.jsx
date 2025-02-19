import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";

export default function App({ movies }) {
  return (
    <>
      <Navbar movies={movies} />
      <Main />
    </>
  );
}
