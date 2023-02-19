import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

export default function Contact() {
  return (
    <section>
      <Header />
      <main className="relative">
        <div className="overflow-y-hidden">
          <div className=" w-11/12 mx-auto mt-12 lg:mt-0 ">
            <div className="lg:pb-16 grid grid-cols-1 lg:grid-cols-12 ">
              <div className="col-span-1 lg:col-span-6 flex flex-col justify-center gap-8">
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1548808322-cecbb52dcb8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt=""
                    className="w-full object-cover h-[550px]"
                  />
                </div>
                <iframe
                  title="google-map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.0523975974793!2d28.97065431602333!3d41.02410957929921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9e62e87337d%3A0x60d3f2467c31dd49!2sVoyvoda%20Han!5e0!3m2!1str!2str!4v1669758851604!5m2!1str!2str"
                  width="100%"
                  height="550px"
                ></iframe>
              </div>
              <div className="flex col-span-1 lg:col-span-6 flex-col pt-16  lg:py-16">
                <div className="text-right  flex lg:ml-16 justify-center border-y-2 p-16 items-center text-2xl">
                  <ul className="flex gap-16 flex-col ">
                    <li className="flex gap-2 flex-col ">
                      <h1 className="text-left font-semibold text-2xl ">
                        ADDRESS
                      </h1>
                      <span className="text-left text-3xl block ">
                        Bankalar Cd. No:19 Voyvoda Han 306, İstanbul
                      </span>
                    </li>
                    <li className="flex gap-2 flex-col ">
                      <h1 className=" font-semibold text-2xl ">PHONE NUMBER</h1>
                      <span className=" block text-3xl">1234 567 89 10</span>
                    </li>
                    <li className="flex gap-2 flex-col ">
                      <h1 className="text-left font-semibold text-2xl ">
                        PHONE NUMBER
                      </h1>
                      <span className="text-left block text-3xl">
                        info@ssaarch.com
                      </span>
                    </li>
                  </ul>
                </div>
                <div className=" border-y-2 p-6 xl:p-16 flex lg:ml-16 flex-col justify-center items-start  text-2xl">
                  <h1 className=" font-semibold text-3xl mb-8">
                    Get Contact With Us
                  </h1>
                  <form action="" className="w-full">
                    <div className="w-full  flex gap-8">
                      <div className="flex flex-col  w-1/2 gap-3">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          id="name"
                          className="border rounded-lg focus:outline-0 focus:border-black px-2 py-1 text-lg "
                        />
                      </div>
                      <div className="flex flex-col  w-1/2 gap-3">
                        <label htmlFor="surname">Surname</label>
                        <input
                          type="text"
                          id="surname"
                          className="border rounded-lg focus:outline-0 focus:border-black px-2 py-1 text-lg "
                        />
                      </div>
                    </div>
                    <div className="w-full my-3 flex flex-col gap-3 ">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        id="email"
                        className="border rounded-lg focus:outline-0 focus:border-black px-2 py-1 text-lg "
                      />
                    </div>
                    <div className="w-full my-3 flex flex-col gap-3 ">
                      <label htmlFor="message">Your Message</label>
                      <textarea
                        name="message"
                        id="message"
                        rows="10"
                        className="w-full border resize-none rounded-lg focus:outline-0 focus:border-black px-2 py-1 text-lg"
                      ></textarea>
                    </div>
                    <button
                      className="px-5 py-2 float-right text-center border rounded-lg mt-5 hover:bg-black hover:text-white transition-all duration-500 hover:border-black active:scale-[98%] active:bg-opacity-70 "
                      type="submit"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </section>
  );
}
