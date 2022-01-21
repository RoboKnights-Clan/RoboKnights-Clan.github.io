import Header from "~/components/Header";
import Hero from "~/components/Home/Hero";
import Sponsors from "~/components/Home/Sponsors";
import useTitle from "~/hooks/use-title";

export default function Index() {
  useTitle("Home");
  return (
    <div>
      <Header />
      <Hero />
      <Sponsors />
    </div>
  );
}
