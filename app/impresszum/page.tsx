import React from "react";

const Impresszum = () => {
  return (
    <main className="container mx-auto px-8 xl:px-24 py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-12">
        Impresszum
      </h1>

      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
          Vállalkozás adatai
        </h2>
        <div className="space-y-3 text-gray-700">
          <p>
            <span className="font-bold">Cégnév:</span> Apró Lépések Fejlesztőház
          </p>
          <p>
            <span className="font-bold">Székhely:</span> 2013 Pomáz, Sicambria
            utca 2.
          </p>
          <p>
            <span className="font-bold">Telefonszám:</span> +36 20 558 6148
          </p>
          <p>
            <span className="font-bold">E-mail cím:</span>{" "}
            aprolepesekfejlesztohaz@gmail.com
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
          Tárhelyszolgáltató adatai
        </h2>
        <div className="space-y-3 text-gray-700">
          <p>
            <span className="font-bold">Cégnév:</span> Vercel Inc.
          </p>
          <p>
            <span className="font-bold">Cím:</span> 340 S Lemon Ave #4133
            Walnut, CA 91789, USA
          </p>
          <p>
            <span className="font-bold">Elérhetőség:</span> privacy@vercel.com /
            https://vercel.com
          </p>
        </div>
      </section>
    </main>
  );
};

export default Impresszum;
