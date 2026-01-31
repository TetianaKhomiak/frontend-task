import { Link } from "react-router-dom";
import BlogUploadCard from "../common/BlogDownloadCard";

const BlogPostPage = () => {
  return (
    <div className="bg-[#ECF3ED]">
      <h1 className="font-(family-name:--font-montserrat) text-[32px] font-black max-w-[800px] m-auto py-20">
        Vzdrževanje WordPress Spletne Strani
      </h1>

      <div className="w-full bg-white bg-[radial-gradient(#d1d5db_1px,transparent_1px)] bg-[length:16px_16px]">
        <div className="max-w-[800px] m-auto text-[16px] font-(family-name:--font-anonymous) font-normal">
          <div className="flex flex-col gap-5 py-10">
            <p>
              <strong>
                Kaj vse je potrebno narediti na WordPress spletni strani, da ta
                ostane agilna, varna in ažurna?
              </strong>{" "}
              Če boste vzdrževanje opravljali redno, vam bo le-to vzelo malo
              časa, v »zahvalo« pa bo vaša spletna stran visoko zmogljiva.
            </p>
            <p>
              Najprej pa se nam pojavi vprašanje, kaj je to redno? Predlagamo
              vam, da naredite celoten pregled WordPress spletne strani{" "}
              <strong>vsaj na tri mesece.</strong> Odpravo varnostnih lukenj pa
              predlagamo takoj, ko se pojavijo.
            </p>
            <p>
              Če menite, da tega znanja nimate in da boste vzdrževanje težko
              opravili sami ali samo enostavno nimate časa, potem vam je tukaj
              lahko v pomoč naša WordPress tehnična podpora.{" "}
              <Link to="#" className="font-bold">
                Zabec.net{" "}
              </Link>{" "}
              vam namreč ponuja poseben{" "}
              <strong>
                paket vzdrževanja WordPress spletnih strani, paket Lokvanj –
              </strong>{" "}
              <Link
                to="#"
                className="text-[#6CB63F] underline decoration-[#6CB63F] font-bold">
                Več
              </Link>
              , vzdrževanje pa bo opravljeno <strong>vsak mesec!</strong>
            </p>
          </div>
          <div className="flex flex-col gap-3 pb-8">
            <h2 className="text-[#002A00] font-black font-(family-name:--font-montserrat) text-[24px]">
              10 osnovnih nalog vzdrževanja WordPress spletne strani
            </h2>
            <p className="text-[16px] font-(family-name:--font-anonymous) font-normal">
              Oglejmo si osnovne naloge vzdrževanja in kako jih najlažje
              izvedete.
            </p>
            <div className="max-w-[700px] flex justify-between text-[16px] font-(family-name:--font-anonymous) font-normal">
              <ol className="list-decimal pl-6">
                <li>Sprememba gesel</li>
                <li>Varnostna kopija spletne strani</li>
                <li>Posodobitev WordPressa</li>
                <li>Pregled in brisanje vsiljivih komentarjev</li>
                <li>Testiranje obrazcev</li>
              </ol>
              <ol className="list-decimal pl-6" start={6}>
                <li>Optimizacija podatkovne baze</li>
                <li>Ureditev 404 napak</li>
                <li>Ureditev zlomljenih povezav</li>
                <li>Optimizacija slik</li>
                <li>Pregled WordPress vpisov</li>
              </ol>
            </div>
          </div>
          <div className="flex flex-col gap-5 pb-8">
            <h3 className="font-black font-(family-name:--font-montserrat) text-[16px]">
              Sprememba gesel
            </h3>
            <p>
              Gesla so vaša prva obrambna linija, boljše ko bo geslo, težje ga
              bo ugotoviti. Predlagamo, da geslo vsebuje
              <strong>vsaj 7 znakov</strong>, med njimi naj bodo{" "}
              <strong>velika, mala začetnica, številka, poseben znak.</strong>{" "}
              Kljub temu, pa se tudi takšno geslo lahko ugotovi (sicer manj
              pogosto), prav zato je pomembno, da tudi gesla redno spreminjamo.
            </p>
            <p>
              Začnite pri spremembi administratorskega WordPress gesla, gesla za
              FTP in SSH dostop ter spremenite tudi geslo za WordPress
              podatkovno bazo. V kolikor imate več uporabnikov, ki pišejo za vas
              bloge ali imajo svoje dostope, naj svoja gesla prav tako redno
              spreminjajo.
            </p>
            <p>
              Naši varnostni strokovnjaki so na to temo pripravili obsežen
              e-vodič Varna WordPress spletna stran, ki si ga lahko prenesete{" "}
              <Link
                to="#"
                className="text-[#6CB63F] underline decoration-[#6CB63F] font-bold">
                tukaj
              </Link>
              .
            </p>
          </div>

          <div className="flex flex-col gap-5 pb-8">
            <h3 className="font-black font-(family-name:--font-montserrat) text-[16px]">
              Varnostna kopija spletne strani
            </h3>
            <p>
              Varnostna kopija je tudi pri vzdrževanju
              <strong> najpomembnejša stvar,</strong> kajti tudi pri vzdrževanju
              se lahko kaj zalomi, s tem pa lahko ostanemo brez dela ali celotne
              spletne strani. Pri{" "}
              <Link to="#" className="font-bold">
                Zabec.net{" "}
              </Link>{" "}
              vam ponujamo varnostne kopije, ki so shranjene do 30 dni za nazaj.
              Seveda pa vam prav tako predlagamo, da si jih ustvarite sami.
            </p>
            <p>
              Varnostno kopijo si najlažje ustvarite z WordPress vtičniki.
              Pripravili smo vam zapis –{" "}
              <Link
                to="#"
                className="text-[#6CB63F] underline decoration-[#6CB63F] font-bold">
                TOP 5 vtičnikov za Varnostno kopijo
              </Link>
              .
            </p>
            <p>
              Varnostno kopijo in restore WordPress spletne strani pa si lahko
              uredite tudi v kontrolni plošči gostovanja. Naša WordPress
              strokovna podpora, je pripravila zapisa, kako si varnosto kopijo
              in restore lahko uredite na kontrolni plošči Direct Admin:
            </p>
            <div className="flex gap-10">
              <BlogUploadCard
                text="Backup spletne strani v DirectAdmin (WordPress)"
                size="PDF, 15 mb"
              />
              <BlogUploadCard
                text="Backup spletne strani v DirectAdmin (WordPress)"
                size="PDF, 15 mb"
              />
            </div>

            <p className="mt-4">
              Naši varnostni strokovnjaki so na to temo pripravili obsežen{" "}
              <strong>e-vodič Varna WordPress spletna stran</strong>, ki si ga
              lahko prenesete{" "}
              <Link
                to="#"
                className="text-[#6CB63F] underline decoration-[#6CB63F] font-bold">
                tukaj
              </Link>
              .
            </p>
          </div>

          <div className="flex flex-col gap-5 pb-8">
            <h3 className="font-black font-(family-name:--font-montserrat) text-[16px]">
              Posodobitev WordPressa
            </h3>
            <p>
              Uporabljajte vedno zadnjo (<strong>najnovejšo različico</strong>)
              WordPress jedra, teme in vtičnikov. To lahko naredite tako, da pod
              WordPress Updates preverite ali vam je na voljo kakšna posodobitev
              in na kateri različici se nahajate sedaj.
            </p>
            <BlogUploadCard
              text="Kako posodobiti WordPress - Navodila"
              size="WORD, 116 mb"
              width="w-full"
              justify="start"
              textFullWidth={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
