import React from "react";
import experience from "../experience.json";
import projects from "../projects.json";
import { FaGithub } from "react-icons/fa";
import { MdEmail, MdDescription } from "react-icons/md";
import { IoLogoFacebook } from "react-icons/io";
import { TiSocialLinkedin } from "react-icons/ti";
import Background from "@/components/background";

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
    <div>
      <div className="page_wrapper absolute flex h-screen w-screen flex-wrap bg-[#070729] opacity-70">
        <div className="left_menu font-masterpiece flex h-screen w-[45%] flex-col justify-evenly bg-slate-400 text-slate-700">
          <div className="title_section flex h-[60%] flex-col items-center p-3 sm:p-5">
            <div className="flex flex-col items-center pb-2 pt-5 text-3xl font-semibold sm:justify-between lg:flex-row lg:text-5xl">
              <h1 className="lg:pr-2">Valentin</h1>
              <h1>Shindarov</h1>
            </div>

            <h2 className="pb-2 text-center font-serif text-xl">
              Junior Fullstack Developer
            </h2>
            <h3 className="flex flex-col items-center justify-center text-center font-extralight">
              I specialize in developing a variety of websites and applications.
            </h3>
          </div>

          <div className="buttons_leftMenu flex h-[40%] flex-col items-center p-3 font-mono">
            <a href="#about">
              <button className="transition duration-300 hover:rounded-full hover:text-xl hover:text-white">
                About
              </button>
            </a>
            <a href="#experience">
              <button className="transition duration-300 hover:rounded-full hover:text-xl hover:text-white">
                Experience
              </button>
            </a>
            <a href="#projects">
              <button className="transition duration-300 hover:rounded-full hover:text-xl hover:text-white">
                Projects
              </button>
            </a>
          </div>
          <div className="socials_section flex h-[20%] flex-wrap items-center justify-center">
            <a href="https://github.com/SqnkaBG" className="lg:pr-2">
              <FaGithub size={30} />
            </a>
            <a href="mailto:biznesvalio@gmail.com" className="lg:pr-2">
              <MdEmail size={30} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100088659195380"
              className="lg:pr-2"
            >
              <IoLogoFacebook size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/valentin-shindarov-a85367231/"
              className="lg:pr-2"
            >
              <TiSocialLinkedin size={30} />
            </a>
            <a href="https://drive.google.com/file/d/1_KicwdPzLIauSiBYqcv8TnSnl4C4Ye2B/view?usp=drive_link">
              <MdDescription size={30} />
            </a>
          </div>
        </div>
        <div className="showcasing_block scrollbar-transparent flex h-[100] max-h-[100%] w-[55%] flex-col overflow-y-auto px-2 py-2 text-white scrollbar-none">
          <section
            id="about"
            className="flex h-auto w-[100%] flex-col items-center pt-3"
          >
            <h3 className="about_me pb-5 text-3xl font-semibold"> About me</h3>
            <p className="mx-2 flex items-center text-center font-serif">
              I`m a {years}-old from Sofia, Bulgaria, who is new to the world of
              software development. Currently, I have a growing interest in
              programming and have completed a couple of projects in my spare
              time. Programming fascinates me because it allows me to bring
              ideas to life through code. I`m enthusiastic about learning new
              technologies and improving my skills continuously. Outside of
              coding, I enjoy biking and fitness to maintain a balanced
              lifestyle. I`m eager to expand my knowledge and collaborate on
              exciting projects. Feel free to connect with me to discuss
              programming or anything tech-related!
            </p>
          </section>
          <section id="experience" className="px-4">
            <div className="title_experience flex flex-row items-end justify-center text-center">
              <h3 className="experience flex justify-end pt-5 text-center text-3xl font-semibold">
                Experience
              </h3>
            </div>
            <div className="flex flex-col py-2">
              {experience.map((el) => {
                return (
                  <>
                    <div className="py-3" />
                    <div className="experience_card group justify-evenly rounded-3xl py-2 text-center transition hover:border-2 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200">
                      <a href={`https://${el.link}`}>
                        <h3 className="position text-lg font-bold transition-all duration-300 group-hover:text-2xl">
                          {el.name}
                        </h3>
                        <div className="company font-extralight transition-all duration-300 group-hover:text-lg">
                          {el.company}
                        </div>
                        <p className="dates font-serif transition-all duration-300 group-hover:text-lg">
                          {el.dates}
                        </p>
                        <div className="flex flex-wrap items-center justify-center font-light transition-all duration-300 group-hover:text-lg">
                          <p className="location pr-2">{el.location}</p>
                          <p className="work_type">{el.workType}</p>
                        </div>
                        <p className="description font-thin transition-all duration-300 group-hover:text-lg">
                          {el.responsibilities}
                        </p>
                      </a>
                    </div>
                  </>
                );
              })}
            </div>
          </section>
          <section id="projects" className="px-4">
            <h3 className="projects pt-5 text-center text-3xl font-semibold">
              Projects
            </h3>
            <div className="flex flex-col py-2">
              {projects.map((el) => {
                return (
                  <>
                    <div className="py-3" />
                    <div className="project_card group justify-evenly rounded-3xl py-2 text-center transition hover:border-2 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200">
                      <a href={`${el.link}`}>
                        <h3 className="name text-lg font-bold transition-all duration-300 group-hover:text-2xl">
                          {el.name}
                        </h3>
                        <div className="type font-medium transition-all duration-300 group-hover:text-lg">
                          {el.type}
                        </div>
                        <p className="description font-thin transition-all duration-300 group-hover:text-lg">
                          {el.description}
                        </p>
                      </a>
                    </div>
                  </>
                );
              })}
            </div>
          </section>
        </div>
      </div>
      <Background />
    </div>
  );
};
export default GeneralPage;
