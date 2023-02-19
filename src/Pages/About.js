import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

export default function About() {
  return (
    <section className="bg-white">
      <Header />
      <main className="relative  ">
        <div className="overflow-y-hidden">
          <div className=" w-11/12 mx-auto mt-32 ">
            <div className="pb-16 border-b grid grid-cols-1  md:grid-cols-2 gap-8 md:gap-16 ">
              <div className="col-span-1 ">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                  alt=""
                  className="w-full"
                />
              </div>
              <div className="col-span-1  md:text-right min-h-full flex  justify-center items-center text-2xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Exercitationem inventore obcaecati sed, aperiam repellendus
                accusantium, nisi ipsum expedita sequi nesciunt impedit itaque
                nulla deserunt. Suscipit, quas eius nulla harum magni velit,
                quae recusandae natus corporis explicabo voluptate? Quia,
                provident optio. Nisi, ad voluptas enim debitis in excepturi
                accusamus. Amet fuga iure doloribus soluta quae nihil facilis
                consectetur. Odio provident totam ducimus qui iste omnis earum
                quisquam dicta maiores repellat eligendi dolor itaque nostrum,
                cumque aliquid modi veritatis non vero consequuntur deleniti.
                Ipsa ex provident, odit eius quaerat, unde officia beatae quod,
                iusto laudantium quis fuga ipsum. Iure laborum velit ullam.
              </div>
            </div>
            <div className="mt-16 pb-16 border-b">
              <h2 className="text-3xl font-semibold">Partners</h2>
              <ul className="w-full grid grid-cols-1 xl:grid-cols-3 my-16 grid-rows-1 ">
                <li className="col-span-1 row-span-1 flex justify-start items-center py-5 lg:px-5  lg:py-0  flex-col">
                  <div className="w-10/12 flex justify-center items-center border-b pb-8">
                    <img
                      src="https://randomuser.me/api/portraits/women/68.jpg"
                      alt=""
                    />
                  </div>
                  <div className="mt-5 ">
                    <p className="text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aspernatur in necessitatibus quibusdam officiis soluta,
                      commodi ad odio rem minima adipisci fugiat inventore ut
                      consectetur non! Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Molestiae, ab.
                    </p>
                  </div>
                </li>
                <li className="col-span-1 row-span-1 flex justify-start items-center py-5 lg:px-5 lg:py-0 lg:border-x flex-col">
                  <div className="w-10/12 flex justify-center items-center border-b pb-8">
                    <img
                      src="https://randomuser.me/api/portraits/women/68.jpg"
                      alt=""
                    />
                  </div>
                  <div className="mt-5">
                    <p className="text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aspernatur in necessitatibus quibusdam officiis soluta,
                      commodi ad odio rem minima adipisci fugiat inventore ut
                      consectetur non! Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Molestiae, ab.
                    </p>
                  </div>
                </li>
                <li className="col-span-1 row-span-1 flex justify-start items-center py-5 lg:px-5  lg:py-0 flex-col">
                  <div className="w-10/12 flex justify-center items-center border-b pb-8">
                    <img
                      src="https://randomuser.me/api/portraits/women/68.jpg"
                      alt=""
                    />
                  </div>
                  <div className="mt-5 ">
                    <p className="text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aspernatur in necessitatibu
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </section>
  );
}
