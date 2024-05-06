import IndexStreamDisplay from "@/src/1widgets/IndexStreamDisplay";
import PopularCategorySection from "@/src/3entities/stream/ui/PopularCategorySection";
import PopularStreamSection from "@/src/3entities/stream/ui/PopularStreamSection";
export default function Home() {
  return (
    <div>
      <IndexStreamDisplay />
      <PopularStreamSection />
      <PopularCategorySection />
    </div>
  );
}
