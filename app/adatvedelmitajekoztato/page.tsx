import React from "react";

const Adatvedelmitajekoztato = () => {
  return (
    <main className="container mx-auto px-8 xl:px-24 py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-12">
        Adatvédelmi tájékoztató (GDPR)
      </h1>

      {/* 1. Az adatkezelő adatai */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
          1. Az adatkezelő adatai
        </h2>
        <div className="space-y-3 text-gray-700">
          <p>
            <span className="font-bold">Adatkezelő neve:</span> Apró Lépések
            Fejlesztőház
          </p>
          <p>
            <span className="font-bold">Székhely:</span> 2013 Pomáz, Sicambria
            utca 2.
          </p>
          <p>
            <span className="font-bold">E-mail: </span>
            aprolepesekfejlesztohaz@gmail.com
          </p>
          <p>
            Az adatkezeléssel kapcsolatos kérdésekkel, kérésekkel ezen az e-mail
            címen lehet élni.
          </p>
        </div>
      </section>

      {/* 2. A kezelt személyes adatok köre */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
          2. A kezelt személyes adatok köre
        </h2>
        <div className="space-y-4 text-gray-700">
          <div>
            <p className="mb-2">
              A honlapon keresztül történő kapcsolatfelvétel során az alábbi
              adatokat kezeljük:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>név</li>
              <li>e-mail cím</li>
              <li>telefonszám (ha a szülő megadja)</li>
              <li>az üzenet tartalma</li>
              <li>technikai adatok (cookie-k alapján, lásd lentebb)</li>
            </ul>
          </div>
          <div>
            <p className="mb-2">
              A Fejlesztőház szolgáltatásainak igénybevételéhez az alábbi adatok
              kezelhetők:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>gyermek neve és életkora</li>
              <li>szülő neve, elérhetősége</li>
              <li>
                fejlesztéssel kapcsolatos adminisztratív adatok (időpontkérés,
                egyeztetés)
              </li>
            </ul>
          </div>
          <p>Egészségügyi adatot nem gyűjtünk, nem tárolunk.</p>
        </div>
      </section>

      {/* 3. Az adatkezelés célja */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
          3. Az adatkezelés célja
        </h2>
        <div className="space-y-3 text-gray-700">
          <p className="mb-2">
            A személyes adatok kizárólag az alábbi célokra használhatók:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>kapcsolatfelvétel megválaszolása</li>
            <li>időpont egyeztetése (ha bevezetésre kerül)</li>
            <li>szolgáltatásaink biztosítása</li>
            <li>adminisztráció, számlázás (ha szükséges)</li>
            <li>jogi kötelezettségek teljesítése</li>
          </ul>
          <p>
            Személyes adatokat soha nem használunk marketing célra,
            hírlevélküldésre vagy továbbértékesítésre.
          </p>
        </div>
      </section>

      {/* 4. Az adatkezelés jogalapja */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
          4. Az adatkezelés jogalapja
        </h2>
        <div className="space-y-3 text-gray-700">
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Kapcsolatfelvétel:</strong> a felhasználó hozzájárulása
              (GDPR 6. cikk (1) a)).
            </li>
            <li>
              <strong>Szolgáltatás nyújtása:</strong> szerződés teljesítése
              (GDPR 6. cikk (1) b)).
            </li>
            <li>
              <strong>Könyvelési/számlázási adatok:</strong> jogi kötelezettség
              (GDPR 6. cikk (1) c)).
            </li>
            <li>
              <strong>Cookie-kezelés:</strong> felhasználó hozzájárulása (GDPR
              6. cikk (1) a)).
            </li>
          </ul>
        </div>
      </section>

      {/* 5. Az adatok megőrzési ideje */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
          5. Az adatok megőrzési ideje
        </h2>
        <div className="space-y-3 text-gray-700">
          <ul className="list-disc list-inside space-y-1">
            <li>kapcsolatfelvétel során megadott adatok: 1 év</li>
            <li>
              szolgáltatással kapcsolatos adatok: a jogviszony megszűnését
              követő 1 év
            </li>
            <li>számlázási adatok: 8 év (kötelező)</li>
            <li>cookie-k: 30 nap–2 év (a sütik típusától függően)</li>
          </ul>
        </div>
      </section>

      {/* 6. Adattovábbítás és hozzáférés */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
          6. Adattovábbítás és hozzáférés
        </h2>
        <div className="space-y-3 text-gray-700">
          <p className="mb-2">Az Ön személyes adataihoz hozzáférhetnek:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              az Apró Lépések Fejlesztőház szakemberei (csak szükség esetén)
            </li>
            <li>a honlap üzemeltetője (technikai feladatok ellátásához)</li>
          </ul>
          <p>
            Személyes adatokat harmadik félnek nem adjuk át, nem értékesítünk,
            és nem kerülnek külföldre.
          </p>
        </div>
      </section>

      {/* 7. Sütik (cookie-k) kezelése */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
          7. Sütik (cookie-k) kezelése
        </h2>
        <div className="space-y-3 text-gray-700">
          <p>
            A weboldal a megfelelő működés biztosítása érdekében technikai
            sütiket használ. Ezek:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>a böngészéshez szükségesek</li>
            <li>nem gyűjtenek személyes adatot</li>
            <li>nem alkalmasak az Ön azonosítására</li>
          </ul>
          <p>
            A később bevezetésre kerülő szolgáltatások (pl. időpontfoglaló
            rendszer, statisztikai kód) működése további sütik használatát
            teheti szükségessé.
          </p>
          <p>
            Ezekről a honlapon külön felugró ablak (cookie banner) fog
            tájékoztatni.
          </p>
        </div>
      </section>

      {/* 8. Az érintettek jogai */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
          8. Az érintettek jogai
        </h2>
        <div className="space-y-3 text-gray-700">
          <ul className="list-disc list-inside space-y-1">
            <li>tájékoztatást kérni az adatkezelésről</li>
            <li>hozzáférést kérni a saját adataihoz</li>
            <li>kérni az adatok helyesbítését</li>
            <li>
              kérni az adatok törlését („elfeledtetéshez való jog”), ha ez
              jogszerű
            </li>
            <li>tiltakozni az adatkezelés ellen</li>
            <li>kérni az adatkezelés korlátozását</li>
          </ul>
          <p>
            A kérelmeket az aprolepesekfejlesztohaz@gmail.com címen fogadjuk.
          </p>
        </div>
      </section>

      {/* 9. Panasztételi lehetőség */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
          9. Panasztételi lehetőség
        </h2>
        <div className="space-y-3 text-gray-700">
          <p>
            Ha úgy érzi, hogy személyes adatai kezelése nem felel meg a GDPR
            előírásainak, panaszt tehet:
          </p>
          <div className="ml-0 md:ml-6 space-y-1">
            <p className="font-bold">
              Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH)
            </p>
            <p>
              <span className="font-bold">Cím:</span> 1055 Budapest, Falk Miksa
              utca 9–11.
            </p>
            <p>
              <span className="font-bold">Web:</span> www.naih.hu
            </p>
          </div>
        </div>
      </section>

      {/* 10. A szabályzat módosítása */}
      <section>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
          10. A szabályzat módosítása
        </h2>
        <div className="space-y-3 text-gray-700">
          <p>
            Az Apró Lépések Fejlesztőház fenntartja a jogot, hogy a szabályzatot
            szükség esetén módosítsa. A változások a honlapon való közzétételt
            követően lépnek hatályba.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Adatvedelmitajekoztato;
