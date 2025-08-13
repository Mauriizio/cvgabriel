import SobreMi from "../components/SobreMi";
import FilosofiaDocente from "../components/FilosofiaDocente";

export const metadata = { title: "Sobre mí" };
export default function Page() {
  return (
    <main>
      <SobreMi />
      <FilosofiaDocente />
    </main>
  );
}