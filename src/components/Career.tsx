import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer Intern</h4>
                <h5>Netzary Infodynamics</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Contributed to the design and development of responsive web
              applications for retail clients including Sangeetha Mobiles and
              Pai Mobiles using Angular and React.js. Built reusable UI
              components and integrated frontend with backend APIs.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Olga Technologies Pvt Ltd</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed and maintained full-stack web applications for Hitachi
              using React.js, Angular, Node.js, Express.js, MongoDB, and MySQL.
              Built secure and scalable backend services with RESTful APIs for
              data processing and third-party integrations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Dalvkot Utility Enterprises Pvt Ltd</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Leading frontend architecture for Dcode e-commerce platform and
              engineering backend services. Developed and deployed a Campus
              Management System for Vydehi Medical College and MVJ Medical
              College in production environments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
