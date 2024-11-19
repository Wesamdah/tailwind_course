import React, { useState } from "react";
import ridingRocket from "../imgs/ridingRocket.jpg";
import onRocket from "../imgs/onRocket.jpg";

export default function Home() {
  const [openMenu, setOpenMneu] = useState(false);
  return (
    <div className="min-h-screen    dark:text-white">
      <header className="bg-teal-700 text-white sticky top-0 z-10">
        <section className="max-w-4xl mx-auto p-4 flex justify-between items-center ">
          <h1 className="font-medium text-3xl">
            <a href="#hero">🚀 Acme Rocket</a>
          </h1>
          <div>
            <button
              id="hamburger-button"
              onClick={() => setOpenMneu(!openMenu)}
              className={` ${
                openMenu ? "toggle-btn" : ""
              } text-3xl md:hidden cursor-pointer w-8 h-8 relative`}
            >
              <div
                className={` absolute bg-white w-8 h-1 rounded top-4 -mt-0.5 transition-all duration-500 before:content-[''] before:absolute before:bg-white before:rounded before:w-8 before:h-1 before:-translate-x-4 before:-translate-y-3  after:content-[''] after:absolute after:bg-white after:rounded after:w-8 after:h-1 after:-translate-x-4 after:translate-y-3 after:transition-all after:duration-500 before:transition-all before:duration-500`}
              ></div>
            </button>
            {/* space-x-8 for child elements whether mx-8 for the parent element  */}
            <nav className="hidden md:block space-x-8" aria-label="main">
              <a href="#rockets" className="hover:opacity-90">
                Our Rockets
              </a>
              <a href="#testimonials" className="hover:opacity-90">
                Testimonials
              </a>
              <a href="#contact" className="hover:opacity-90">
                Contact Us
              </a>
            </nav>
          </div>
        </section>
        <section
          id="mobile-menu"
          onClick={() => setOpenMneu(!openMenu)}
          className={`w-full absolute text-5xl top-68 ${
            openMenu ? "flex" : "hidden"
          }  flex-col bg-black justify-center origin-top animate-open-menu`}
        >
          {/* <button className="text-8xl self-end px-6">
            &times;</button> */}
          <nav
            className="min-h-screen flex flex-col items-center py-8"
            aria-label="mobile"
          >
            <a
              href="#hero"
              className="w-full text-center py-6 hover:opacity-90"
            >
              Home
            </a>
            <a
              href="#rockets"
              className="w-full text-center py-6 hover:opacity-90"
            >
              Our Rockets
            </a>
            <a
              href="#testimonials"
              className="w-full text-center py-6 hover:opacity-90"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="w-full text-center py-6 hover:opacity-90"
            >
              Contact Us
            </a>
            <a
              href="#footer"
              className="w-full text-center py-6 hover:opacity-90"
            >
              Legal
            </a>
          </nav>
        </section>
      </header>
      <main className="max-w-4xl mx-auto">
        <section
          id="hero"
          className="flex flex-col-reverse sm:flex-row justify-center p-6 items-center gap-8 mb-12 scroll-mt-40 wideScreen:section-min-height tallScreen:section-min-height tabletScreen:section-min-height"
        >
          <article className="sm:w-1/2">
            <h2 className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white">
              We Boldy Go{" "}
              <span className="text-indigo-700 dark:text-indigo-300">
                Where No Reockets{" "}
              </span>
              Has Gone Before...
            </h2>
            <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
              We're bulding rockets for the next century today. From the moon to
              Mars, Jupiter and beyond...
            </p>
            <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
              Think Acme Rockets
            </p>
          </article>
          <img
            src={ridingRocket}
            alt="Rocket Dab"
            className="w-1/2 rounded-full"
          />
        </section>
        <hr className="w-1/2 lg:w-full bg-black dark:bg-white mx-auto" />
        <section
          id="rockets"
          className="p-6 my-12 scroll-mt-20  wideScreen:section-min-height tallScreen:section-min-height "
        >
          <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
            Our Rockets
          </h2>
          <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
            <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-indigo-900 py-6 px-2 rounded-3xl shadow-xl ">
              <img
                src={onRocket}
                alt="Explore"
                className="w-1/2 mb-6 rounded-full"
              />
              <h3 className="text-3xl text-center text-slate-900 dark:text-white">
                Explorer
              </h3>
              <p className="hidden sm:block text-3xl text-center text-slate-500 dark:text-slate-400 mt-2">
                $
              </p>
              <p className=" sm:hidden text-2xl text-center text-slate-500 dark:text-slate-400 mt-2">
                Affordable Exploration
              </p>
            </li>
            <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white  dark:bg-indigo-900 py-6 px-2 rounded-3xl shadow-xl ">
              <img
                src={onRocket}
                alt="Adventurer"
                className="w-1/2 mb-6 rounded-full"
              />
              <h3 className="text-3xl text-center text-slate-900 dark:text-white">
                Adventurer
              </h3>
              <p className="hidden sm:block text-3xl text-center text-slate-500 dark:text-slate-400 mt-2">
                $$
              </p>
              <p className=" sm:hidden text-2xl text-center text-slate-500 dark:text-slate-400 mt-2">
                Best Selling Rocket!
              </p>
            </li>
            <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white  dark:bg-indigo-900 py-6 px-2 rounded-3xl shadow-xl ">
              <img
                src={onRocket}
                alt="Infinity"
                className="w-1/2 mb-6 rounded-full"
              />
              <h3 className="text-3xl text-center text-slate-900 dark:text-white">
                Infinity
              </h3>
              <p className="hidden sm:block text-3xl text-center text-slate-500 dark:text-slate-400 mt-2">
                $$$
              </p>
              <p className=" sm:hidden text-2xl text-center text-slate-500 dark:text-slate-400 mt-2">
                Luxury Starship
              </p>
            </li>
          </ul>
        </section>

        <hr className="w-1/2 lg:w-full bg-black dark:bg-white mx-auto" />

        <section
          id="testimonials"
          className="p-6 my-12  wideScreen:section-min-height tallScreen:section-min-height scroll-mt-20 "
        >
          <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
            Testimonials
          </h2>
          <figure className="my-12">
            <blockquote className="bg-teal-600 dark:bg-indigo-900 pl-14 pr-8 py-12 rounded-3xl relative">
              <p
                className="text-2xl sm:text-3xl text-left mt-8 text-white dark:text-slate-400 before:content-['\201C'] before:font-sans before:absolute before:top-0 befor:left-0 before:text-9xl before:text-white before:opacity-25 before:translate-x-2 before:translate-y-2 before:transform 
              after:content-['\201D'] after:font-sans after:absolute after:-bottom-20 after:right-0 after:text-9xl after:text-white after:opacity-25 after:-translate-x-6 after:-translate-y-6 after:transform
              "
              >
                Acme has always been there for me. Their Explorer rocket arrived
                in a wooden create as expected. Life-long customer! A++ shopping
                experience.
              </p>
            </blockquote>
            <figcaption className="italic text-xl sm:text-2xl text-right mt-8 text-slate-500 dark:text-slate-400">
              &#8212;Wile E. Coyote, Genius
            </figcaption>
          </figure>
          <figure className="my-12">
            <blockquote className="bg-teal-600 dark:bg-indigo-900 pl-14 pr-8 py-12 rounded-3xl relative">
              <p
                className="text-2xl sm:text-3xl text-left mt-8 text-white dark:text-slate-400 before:content-['\201C'] before:font-sans before:absolute before:top-0 befor:left-0 before:text-9xl before:text-white before:opacity-25 before:translate-x-2 before:translate-y-2 before:transform 
              after:content-['\201D'] after:font-sans after:absolute after:-bottom-20 after:right-0 after:text-9xl after:text-white after:opacity-25 after:-translate-x-6 after:-translate-y-6 after:transform
              "
              >
                Acme has always been there for me. Their Explorer rocket arrived
                in a wooden create as expected.{" "}
                <span className="italic underline underline-offset-3 text-red-500">
                  This makes me very very angrey
                </span>{" "}
                Life-long customer! A++ shopping experience.
              </p>
            </blockquote>
            <figcaption className="italic text-xl sm:text-2xl text-right mt-8 text-slate-500 dark:text-slate-400">
              &#8212;Wile E. Coyote, Genius
            </figcaption>
          </figure>
          <figure className="my-12">
            <blockquote className="bg-teal-600 dark:bg-indigo-900 pl-14 pr-8 py-12 rounded-3xl relative">
              <p
                className="text-2xl sm:text-3xl text-left mt-8 text-white dark:text-slate-400 before:content-['\201C'] before:font-sans before:absolute before:top-0 befor:left-0 before:text-9xl before:text-white before:opacity-25 before:translate-x-2 before:translate-y-2 before:transform 
              after:content-['\201D'] after:font-sans after:absolute after:-bottom-20 after:right-0 after:text-9xl after:text-white after:opacity-25 after:-translate-x-6 after:-translate-y-6 after:transform
              "
              >
                Acme has always been there for me. Their Explorer rocket arrived
                in a wooden create as expected. Life-long customer! A++ shopping
                experience.
              </p>
            </blockquote>
            <figcaption className="italic text-xl sm:text-2xl text-right mt-8 text-slate-500 dark:text-slate-400">
              &#8212;Wile E. Coyote, Genius
            </figcaption>
          </figure>
        </section>

        <hr className="w-1/2 lg:w-full bg-black dark:bg-white mx-auto" />

        <section
          id="contact"
          className="p-6 my-12 mt-16  wideScreen:section-min-height tallScreen:section-min-height scroll-mt-16"
        >
          <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
            Contact Us
          </h2>
          <form
            action=""
            className="max-w-4xl mx-auto text-2xl sm:text-3xl flex flex-col  items-start gap-4"
          >
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              required
              minLength={"3"}
              maxLength={"60"}
              placeholder="Your Subject"
              className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none focus:outline-none dark:text-gray-400"
            />
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              id="message"
              cols={"30"}
              rows={"10"}
              placeholder="Your Message "
              required
              className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border bodred-solid border-slate-900 dark:border-none focus:outline-none dark:text-gray-400 resize-none"
            ></textarea>
            <button className="bg-teal-700 hover:bg-teal-600 active:bg-teal-900 text-white  p-3 w-48 rounded-xl boder border-solid border-slate-900 dark:border-none ">
              Submit
            </button>
          </form>
        </section>
      </main>
      <footer id="footer" className="bg-teal-700 text-white text-xl">
        <section className="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between ">
          <address>
            <h2>Acme Rocket-Powered products, Inc.</h2>
            555 Astro Way
            <br />
            Fairfield,New Jersy 12345-5555
            <br />
            Email{" "}
            <a href="malto:inquries@hotmail.com">Inquries@AcmeRockets.com</a>
            <br />
            Phone:<a href="tel:55555555">(555)-555-555</a>
          </address>
          <nav className="hidden sm:flex flex-col gap-2 " aria-label="footer">
            <a href="#rockets" className="hover:opacity-90">
              Our Rockets
            </a>
            <a href="#testimonials" className="hover:opacity-90">
              Testimonials
            </a>
            <a href="#contact" className="hover:opacity-90">
              Contact Us
            </a>
          </nav>
          <div className="flex flex-col sm:gap-2">
            <p className="text-right">
              Copyright &copy; <span id="year">2024</span>
            </p>
            <p className="text-right">All Rights Reserved</p>
          </div>
        </section>
      </footer>
    </div>
  );
}
