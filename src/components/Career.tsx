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
                <h4>Web Dev &amp; Hosting Intern</h4>
                <h5>CT Software Solutions</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              May–Jul 2025. Optimized SQL queries and UI interactivity for the
              Fitness360 admin panel using Laravel, AJAX and DataTables; built
              five Highcharts dashboards; improved UI/UX with Bootstrap.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Engineer Intern</h4>
                <h5>KalkiFI AI Solutions</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Mar–Aug 2024. Processed structured datasets with Python, Pandas
              and NumPy; built ETL pipelines and optimized SQL workflows;
              developed analytical dashboards using Power BI and Matplotlib.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech, CSE</h4>
                <h5>Vellore Institute of Technology</h5>
              </div>
              <h3>2022–26</h3>
            </div>
            <p>
              Built a strong academic foundation in Computer Science and Engineering 
              at Vellore Institute of Technology (2022–2026), achieving a CGPA of 
              8.75. Complemented classroom learning with leadership as a Core 
              Committee Member of the Soft Computing Research Society, industry-
              recognized certifications, and practical experience through 
              internships and real-world software projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
