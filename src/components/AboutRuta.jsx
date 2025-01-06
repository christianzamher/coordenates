import React from "react";

export const AboutRuta = () => {
  return (
    <>
      <section className="ezy__contents1 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-stone-900 dark:text-white">
        <div className="container px-16 md:px-8 lg:px-28">
          <div className="grid grid-cols-12 justify-center">
            {/* <!-- heading --> */}
            <div className="col-span-12 md:col-span-8 md:col-start-3 text-center">
              <h1 className="font-bold text-3xl lg:text-[45px] leading-none mb-4">
                DeCamino Maps Guia 
              </h1>
              <p className="text-lg leading-6 opacity-80 mb-2">
                Instrucciones de uso completo
              </p>
            </div>
            {/* <!-- banner --> */}
            <div className="col-span-12">
              <img
                src="https://cdn.easyfrontend.com/pictures/contents/contents-banner.jpg"
                alt=""
                className="h-auto max-w-full my-4 md:my-12 rounded-md"
              />
            </div>
            <div className="col-span-12 md:col-span-8 md:col-start-3">
              <p className="text-[17px] leading-6 opacity-80 mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, odio. Hic, nisi! Perspiciatis veritatis quibusdam
                esse! Corrupti aut unde neque sit alias repudiandae ratione
                debitis id pariatur? Nesciunt quam officia enim repudiandae,
                voluptatibus, culpa veniam sapiente sunt nisi ratione tenetur.
              </p>
              <br />
              <hr className="bg-slate-300" />
              <br />
              <h4 className="text-2xl font-medium opacity-80 mb-2">
                The standard Lorem Ipsum
              </h4>
              <p className="text-[17px] leading-6 opacity-80 mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, odio. Hic, nisi! Perspiciatis veritatis quibusdam
                esse! Corrupti aut unde neque sit alias repudiandae ratione
                debitis id pariatur? Nesciunt quam officia enim repudiandae,
                voluptatibus, culpa veniam sapiente sunt nisi ratione tenetur.
              </p>
              <br />
              <blockquote
                cite="https://easyfrontend.com"
                className="border-l-[2px] border-blue-600 p-8 text-xl leading-snug font-medium"
              >
                <b>
                  For 50 years, WWF has been protecting the future of nature.
                  The world's leading conservation organization, WWF works in
                  100 countries and is supported by 1.2 million members in the
                  United States and close to 5 million globally
                </b>
                <p className="text-[17px] leading-6 opacity-80 mb-2"></p>
                <p className="text-[17px] leading-6 opacity-80 mb-2">
                  - John Doe, CEO & Founder
                </p>
              </blockquote>
              <br />
              <p className="text-[17px] leading-6 opacity-80 mb-2">
                Lorem ipsum dolor sit amet consectetur
                <a href="#" className="text-blue-600 underline opacity-80">
                  adipisicing elit
                </a>
                . Pariatur, odio. Hic, nisi! Perspiciatis veritatis quibusdam
                esse! Corrupti aut unde neque sit alias repudiandae ratione
                debitis id pariatur? Nesciunt quam officia enim repudiandae,
                voluptatibus, culpa veniam sapiente sunt nisi ratione tenetur.
              </p>

              <br />
              <img
                src="https://cdn.easyfrontend.com/pictures/blog/blog_4.jpg"
                alt=""
                className="max-w-full h-auto rounded-md mb-2 opacity-70"
              />
              <p className="text-[17px] leading-6 opacity-80 mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                explicabo doloremque.
              </p>

              <br />
              <h4 className="text-2xl font-medium mb-2">
                1914 translation by H.
              </h4>
              <p className="text-[17px] leading-6 opacity-80 mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                alias quam ut at voluptatem, illum id repudiandae libero labore
                deserunt voluptates vero accusantium suscipit quae possimus
                beatae velit. Repellat cupiditate amet, consequatur eaque vel
                autem accusantium excepturi sed unde sunt pariatur nobis qui
                nam, minima ullam. Quos quasi quidem consequatur sequi veniam
                doloribus quisquam, ipsam cum provident hic impedit eos!
              </p>
            </div>
            {/* <!-- contents --> */}
            <div className="col-span-12 md:col-span-8 md:col-start-3">
              <hr className="bg-slate-300 my-6 lg:my-12" />
             
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
