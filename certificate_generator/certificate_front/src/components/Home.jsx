import { Link } from "react-router-dom";
import Photo from "../assets/Certificate.jpg";
import { MdVerified } from "react-icons/md";
import "./CSS/Home.css";

export default function Home() {
  return (
    <div className="p-5">
      <section id="1">
        <div className="flex justify-center items-center my-8">
          <div className="flex flex-col gap-10 lg:gap-16 text-center">
            <p className="font-bold text-3xl md:text-5xl">
              Online Certificate Maker
            </p>
            <p className="md:text-xl">
              Generate beautiful certificates for your students or colleagues
              and download in PDF format
            </p>
            <div className="flex justify-center items-center">
              <Link to={"/Form"}>
                <div className="p-4 border-2 border-black shadow-xl bg-pink-400 rounded-lg md:text-4xl font-semibold text-center CreatePDF">
                  <button>Create a Certificate Now</button>
                </div>
              </Link>
            </div>
            <div className="flex justify-center items-center gap-2">
              <MdVerified className="text-4xl text-green-500" />
              <p>100 % Free -- Download in PDF Format</p>
            </div>
          </div>
        </div>
      </section>

      <section id="2">
        <div className="flex justify-around items-center flex-wrap md:flex-nowrap curve-top px-4">
          <div className="w-full mt-5">
            <div className="max-md:text-center md:w-3/4 flex flex-col text-center gap-4 xl:gap-8 text-m lg:text-xl">
              <p className="text-xl md:text-3xl xl:text-4xl font-bold ">
                Create Certificates Online or Auto Generate via API
              </p>
              <p>
                Easily create certificates and awards online to recognize the
                achievements of your employees, speakers, students etc.
              </p>
              <p>
                Simply enter some details and generate your certificate PDF in
                one click. You can download up to 5 beautiful PDF certificates
                per day for free.
              </p>
              <p>
                Creating a lot of certificates and need to automate the process?
                Look into our API or Nocode automations to generate PDF
                certificates in bulk.
              </p>
            </div>
          </div>
          <div className="max-md:m-5 md:w-[50%] p-4 ">
            <img src={Photo} alt="photo" className="lg:w-[80%]" />
          </div>
        </div>
        <div class="curve hidden md:block">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </section>

      <section id="3">
        <div className="flex justify-center">
          <div className="md:w-[85%]">
            <div className="flex flex-col max-md:m-5 gap-2 text-center text-m md:text-xl">
              <p className="text-xl md:text-3xl xl:text-4xl font-bold">
                High Quality Templates
              </p>
              <p>
                We don't have as many templates as some other tools, but the
                ones we have look great and are in high quality vector format —
                download your certificates and print them at high resolutions.
              </p>
            </div>
            <div className="flex flex-col m-5 gap-2 text-center text-m md:text-xl">
              <p className="text-xl md:text-3xl xl:text-4xl font-bold">
                No Design Skills Needed
              </p>
              <p>
                If you're a professional in any field, this is the certificate
                tool for you. No design skills needed to create stunning
                certificates of achievement or other documents that represent
                your awards and achievements.
              </p>
            </div>
            <div className="flex flex-col m-5 gap-2 text-center text-m md:text-xl">
              <p className="text-xl md:text-3xl xl:text-4xl font-bold">
                Download for Free
              </p>
              <p>
                The certificate maker tool is designed as a free way to quickly
                create and download certificates for anything you want. Create
                PDFs on your computer, iPad or iPhone - wherever you are, and
                download them instantly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
