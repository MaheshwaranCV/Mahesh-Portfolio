AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
   {
    title: "Associate Software Engineer ",
    cardImage: "assets/images/experience-page/navis.png",
    place: "Navis",
    time: "(Aug, 2022 - Aug, 2023)",
    desp: "<li> Built monitoring dashboards to facilitate 15 international terminals to analyze their performance in real-time operations. </li> <li> Developed modules as part of Navis Analytics and OpsView products, which allow visualization of terminal operations through dashboards using Power BI and reports to increase their daily performance. </li> <li> Tested software for bugs and operating speed, fixing bugs and increasing efficiency. </li>",
  },
  {
    title: "Associate Software Engineering Intern",
    cardImage: "assets/images/experience-page/navis.png",
    place: "Navis",
    time: "(Jan, 2022 - July, 2022)",
    desp: "<li>Programmed, developed, and optimized ETL logic using Pentaho and SQL which increased overall efficiency. </li> <li> Optimized data processing logic using Java and helped in migration while upgrading from one version to another. </li> <li> Created multiple unit and integration test cases using Groovy to enhance the product performance. </li>",
  },
   {
    title: "Software Development Intern",
    cardImage: "assets/images/experience-page/LV.jpeg",
    place: "LatentView Analytics",
    time: "(May, 2021 - Aug, 2021)",
    desp: "<li>Super enhanced and deployed a fully automated chatbot made with React to answer multi-tenant questions. Streamlined bot communication with the rest API backend made with python and flask. Tested the same with Postman.Pre-processed different types of files and file formats to ingest into Azure QnA maker to finally deploy the chatbot.</li> <li>Created and developed a whole new tool using Excel and coded it completely using VBA. Used Jira tool for project management and employed agile methodologies. Drastically improved performance and performed unit testing multiple times.</li>",
  },
  {
    title: "Career Mentorship Program ",
    cardImage: "assets/images/experience-page/wellsfargo.png",
    place: "Wells Fargo",
    time: "(Apr, 2021 - Sep, 2021)",
    desp: "<li>Attended a series of mentorship sessions on dealing with challenges and setbacks in the professional world. </li> <li>Focussed on FinTech, CLV and AI in the finance sector.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
      ({ title, cardImage, place, time, desp }) =>
          (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Google Developer Student Clubs 2020-2021",
    cardImage: "assets/images/experience-page/gdsc.png",
    description: "",
  },
  {
    title: "Google Women Techmakers",
    cardImage: "assets/images/experience-page/womenTech.jpeg",
    description: " ",
  },
  {
    title: "Google Developers Group 2020",
    cardImage: "assets/images/experience-page/gdg.png",
    description: " ",
  },
  {
    title: "Wells Fargo Career Mentorship Program 2021",
    cardImage: "assets/images/experience-page/wellsfargo.png",
    description: " ",
  },
  {
    title: "Procode 2018-2022",
    cardImage: "assets/images/experience-page/procode.jpeg",
    description: " ",
  },
  {
    title: "SSN Coding Club 2018-2022",
    cardImage: "assets/images/experience-page/coding_club.png",
    description: " ",
  },
  {
    title: "National Service Scheme 2018-2022",
    cardImage: "assets/images/experience-page/nss.png",
    description: " ",
  },

  {
    title: "IEEE 2020-2022",
    cardImage: "assets/images/experience-page/ieee.png",
    description: " ",
  },
];
const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
      ({ title, cardImage, description }) =>
          (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section
const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
    {
    title: "AWS ML Scholarship 2021",
    subtitle: "",
    image: "assets/images/experience-page/aws.png",
    desp: "AWS Machine Learning Scholarship Program by Udacity.",
  },
  {
    title: "She Hacks-Wells Fargo Shaastra 2021, IIT Madras",
    subtitle: "Finalist",
    image: "assets/images/experience-page/shaastra1.jpeg",
    desp: "Was placed 6th out of multiple teams from over 100+ colleges around India. Solved a Machine Learning problem statement given with over 92.7% accuracy by applying Random Forrest Classifier with Principal Component Analysis",
  },
  {
    title: "DevFest SSNCE 2020",
    subtitle: "Winner",
    image: "assets/images/experience-page/ssnce.png",
    desp: "Created HospitalBot: a Twitter Bot that responds to messages it is tagged in with a list of all nearby hospitals, and which if those offer testing and treatment for COVID­19.",
  },
  {
    title: "IEEEXTREME 14.0",
    subtitle: "Top 130",
    image: "assets/images/experience-page/ieeextreme.jpeg",
    desp: "Placed in the top 130 teams nationwide in the 48 hour programming competition.",
  },
  {
    title: "Merit Scholarship",
    subtitle: "Winner",
    image: "assets/images/experience-page/ssnce.png",
    desp: "Placed 5th in the entire Department and received a merit scholarship.",
  },
  {
    title: "Hackerrank",
    subtitle: "",
    image: "assets/images/experience-page/badges.jpeg",
    desp: "Badges in Problem Solving, Python, JavaScript & Statistics",
  }   
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
         
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
