import React from "react";

function Hero() {
  return (
    <section class="bg-transparent">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Build your dream keybords
          </h1>
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            From 87-Key to 62-Key Custom Mechanical Keyboards, take your
            keyboard setup up a notch or two.
          </p>
          <a
            href="#"
            class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:ring-indigo-300"
          >
            Customize Now
            <svg
              class="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
          >
            Take Inspiration
          </a>
        </div>
        <div class="pt-28 lg:mt-0 lg:col-span-5 lg:flex mix-blend-multiply">
          <img
            src="https://m.media-amazon.com/images/I/61f2zxfQGUL._AC_SY450_.jpg"
            alt="mockup"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;