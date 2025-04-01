import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            i have always been fascinated by the interaction of technology and
            design. As a front-end engineer, i love bringing ideas to life and
            crafting intuitive user experiences. i am confident in my ability to
            deliver innovative solutions that makes lasting impact.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
