import React from "react";

export default function ContactUs() {
  return (
    <section className="-mt-10 pb-16" id="contact">
      <div className="w-3/4 flex mx-auto bg-transparent rounded-xl text-black  bg-opacity-40 p-5 gap-40">
        <div className="w-1/2 flex flex-col gap-5 font-bold">
          <a href="#begin">
            
          </a>
          <div className="flex flex-col gap-2">
            <div>
              <span>Email: </span>
              <span className="font-normal">info@ssaarch.com</span>
            </div>
            <div>
              <span>Phone Number: </span>
              <span className="font-normal">1234 567 89 10</span>
            </div>
            <div>
              <span>Address: </span>
              
            </div>
            <div className="mt-5 font-normal text-sm">
              <span>
                © 2022 SSARCH. Website created by{" "}
                <a href="#!" className="underline">
                  Hasan Koman
                </a>
                . <a href="#!"> Privacy Policy</a>
              </span>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full">
          <form action="" className="flex flex-col">
            <div className="flex gap-10">
              <div className=" w-1/2 custom-border">
                <input
                  type="tel"
                  id="phone-input"
                  className=" px-[11px] py-3 peer text-black  focus:outline-0 z-10 focus-visible:outline-0 border-0 bg-transparent placeholder:text-black "
                  placeholder="Name"
                />
              </div>
              <div className=" w-1/2  custom-border">
                <input
                  type="tel"
                  id="phone-input"
                  className=" px-[11px] py-3 peer text-black  focus:outline-0 z-10 focus-visible:outline-0 border-0 bg-transparent placeholder:text-black "
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="my-5 custom-border">
              <textarea
                name=""
                id=""
                className="w-full focus:outline-none bg-transparent resize-none  h-24 px-[11px] py-1 placeholder:text-black"
                placeholder="Write a message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-4 py-2  text-lg rounded-md border  border-black text-black hover:bg-black hover:text-white transition-all active:scale-95"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
      <a
        href="#begin"
        className="absolute bottom-14 right-14 text-5xl text-slate-300 cursor-pointer "
      >
        <i class="fa-solid fa-circle-arrow-up"></i>
      </a>
    </section>
  );
}
