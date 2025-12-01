import { Title } from "@solidjs/meta";
import Sidebar from "~/components/layout/Sidebar";
import Footer from "~/components/layout/Footer";
import { A } from "@solidjs/router";
import PageHeader from "~/components/layout/PageHeader";

export default function Home() {
  return (
    <>
      <Title>TIK Merchandise - TIKREX</Title>
      <Sidebar />

      <main class="min-h-screen bg-white">
        {/* Hero Section */}
        <div class="min-h-screen w-screen relative flex flex-col items-center justify-center bg-linear-to-b from-white via-[#E4EBF3] to-[#0C507B]">
          <PageHeader />
        </div>

        {/* Banner Section */}
        <section class="relative flex flex-col items-center bg-[#0C507B] py-10">
          <div class="w-full max-w-6xl px-4">
            <div class="mb-2 ml-5 flex gap-2 text-white items-center">
              <img src="./instagram_icon.svg" alt="Instagram Icon" class="w-8 h-8" />
              <span class="font-varela text-2xl">@barnabyx.co</span>
            </div>
          </div>

          <div class="relative group mb-8">
            <img src="./landing.png" alt="Landing Image" />
          </div>

          <h3 class="text-[110px] font-black text-center mb-12 tracking-wider" style="text-shadow: 2px 2px 4px rgba(0,0,0,0.1)">
            <span class="text-white font-Gajraj">
              From TIK, For TIK.
            </span>
          </h3>
        </section>
        <section class="relative flex flex-col items-center py-10 bg-linear-to-b from-[#0C507B] via-[#E4EBF3] to-white">
          {/* Merchandise Section */}
          <div class="w-full max-w-7xl px-4">
            <h2 class="text-center text-[40px] mb-12 text-white uppercase font-varela">
              Merchandise
            </h2>

            <div class="relative mb-20">
              <div class="grid grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
                <div class="text-center">
                  <span class="inline-block bg-[#260F26] text-white px-10 py-4 rounded-xl text-2xl font-varela font-bold mb-6">
                    T-shirt
                  </span>
                  <div class="flex items-center justify-center gap-6">
                    <img src="./t-shirt.png" alt="T-shirts" class="w-full max-w-md" />
                  </div>
                </div>
                <div class="text-center">
                  <span class="inline-block bg-[#260F26] text-white px-10 py-4 rounded-xl text-2xl font-varela font-bold mb-6">
                    Workshirt
                  </span>
                  <div class="flex items-center justify-center">
                    <img src="./workshirt.png" alt="Workshirt" class="w-full max-w-xs" />
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-3 items-end mb-12">
                <div class="text-left pb-10">
                  <p class="text-2xl text-black mb-4 font-varela">
                    Interested in our Products?
                  </p>
                  <A href="/items" class="bg-[#004B87] hover:bg-[#003666] text-white font-bold py-6 px-12 rounded-lg text-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    Check Products
                  </A>
                </div>
                <div class="text-center">
                  <span class="inline-block bg-[#260F26] text-white px-10 py-4 rounded-xl text-2xl font-varela font-bold mb-6">
                    Name Tag
                  </span>
                  <div class="flex items-center justify-center">
                    <img src="./lanyard.png" alt="Name Tag" class="w-full max-w-xs" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
