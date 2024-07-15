import React from "react";
import experience from "../experience.json";

const GeneralPage = (years: any, months: any) => {
  const calculateAge = () => {
    years = new Date().getFullYear() - 2002;
    months = new Date().getMonth() + 1 - 8;

    if (months < 0) {
      years--;
      months += 12;
    }
    return years;
  };
  const age = calculateAge();

  return (
    <div className="page_wrapper flex h-screen w-screen flex-wrap bg-[#070729]">
      <div className="left_menu font-masterpiece flex h-screen w-[45%] flex-col justify-evenly bg-slate-400 text-slate-700">
        <div className="title_section flex h-[60%] flex-col items-center p-3">
          <h1 className="pb-2 pt-5 text-5xl font-semibold">
            Valentin Shindarov
          </h1>
          <h2 className="pb-2 font-serif text-xl">
            Junior Fullstack Developer
          </h2>
          <h3 className="font-extralight">
            I build different websites and apps.
          </h3>
        </div>
        <div className="buttons_leftMenu flex h-[40%] flex-col items-center p-3 font-mono">
          <a
            className="hover:rounded-full hover:text-xl hover:text-white"
            href="#about"
          >
            About me
          </a>
          <a
            className="hover:rounded-full hover:text-xl hover:text-white"
            href="#experience"
          >
            Experience
          </a>
          <a
            className="hover:rounded-full hover:text-xl hover:text-white"
            href="#projects"
          >
            Projects
          </a>
        </div>
      </div>
      <div className="showcasing_block flex h-[100] w-[55%] flex-col">
        <section
          id="about"
          className="flex h-auto w-[100%] flex-col items-center pt-3"
        >
          <h3 className="about_me pb-5 text-3xl font-semibold"> About me</h3>
          <p>
            Hello, my name is Valentin! I am {age} years old from Sofia. I love
            to make programs in my free time.
          </p>
        </section>
        <section id="experience" className="px-4">
          <h3 className="experience pt-5 text-center text-3xl font-semibold">
            Experience
          </h3>
          <div className="scrollbar-transparent flex max-h-[500px] flex-col overflow-y-auto py-2 scrollbar-none">
            {experience.map((el) => {
              return (
                <>
                  <div className="py-3" />
                  <div className="experience_card justify-evenly rounded-3xl py-2 text-center transition hover:border-2 hover:border-slate-200 hover:text-xl hover:shadow-xl hover:shadow-slate-200">
                    <a href={`https://${el.link}`}>
                      <h3 className="possition font-bold">{el.name}</h3>
                      <div className="company font-extralight">
                        {el.company}
                      </div>
                      <p className="dates font-serif">{el.dates}</p>
                      <div className="flex flex-wrap items-center justify-center font-light">
                        <p className="location pr-2">{el.location}</p>
                        <p className="work_type">{el.workType}</p>
                      </div>
                      <p className="description font-thin">
                        {el.responsibilities}
                      </p>
                    </a>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>

      <div className="background"></div>
    </div>
  );
};
export default GeneralPage;
