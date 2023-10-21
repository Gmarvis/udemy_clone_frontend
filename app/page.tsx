import Logos from "./components/molecules/logos";
import SliderComponent from "./components/organisms/slide/Slider";
import HeroSection from "./components/organisms/heroSection";
import AbroadSelection from "./components/organisms/abroadSelection/AbroadSelectionLandingPage";

export default function Home({
  searchParams,
}: {
  searchParams: { ["showDialog"]: string };
}) {
  return (
    <main>
      <HeroSection />
      <Logos />
      <AbroadSelection
        title="A broad selection of courses"
        textContent="Choose from over 210,000 online video courses with new additions
        published every month"
      />
      <SliderComponent title="Learners are viewing" />
    </main>
  );
}
