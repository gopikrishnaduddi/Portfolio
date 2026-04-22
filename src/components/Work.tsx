import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    name: "Dcode E-Commerce",
    category: "Full Stack",
    tools: "React.js, Node.js, Express.js, MongoDB",
    image: "/images/ecommerce_project.png",
  },
  {
    name: "Campus Management System",
    category: "Full Stack",
    tools: "Node.js, MongoDB, React.js, Express.js",
    image: "/images/cms_project.png",
  },
  {
    name: "Hitachi Enterprise Apps",
    category: "Full Stack",
    tools: "React.js, Angular, Node.js, MySQL",
    image: "/images/enterprise_app_project.png",
  },
  {
    name: "Sangeetha Mobiles Website",
    category: "Frontend",
    tools: "Angular, HTML5, CSS3, JavaScript",
    image: "/images/sangeetha_mobiles.png",
  },
  {
    name: "Pai Mobiles Website",
    category: "Frontend",
    tools: "React.js, HTML5, CSS3, JavaScript",
    image: "/images/pai_mobiles.png",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const workContainer = document.querySelector(".work-container");
      if (!box || box.length === 0 || !workContainer) return;
      
      const rectLeft = workContainer.getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parent = box[0].parentElement;
      if (!parent) return;
      
      const parentWidth = parent.getBoundingClientRect().width;
      let padding: number = parseInt(window.getComputedStyle(box[0]).padding) / 2 || 0;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Clean up
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
