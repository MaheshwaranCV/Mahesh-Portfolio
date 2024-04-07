AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Social Networks",
    cardImage: "assets/images/education-page/nptel2.png",
    moocLink: "https://onlinecourses.nptel.ac.in/noc20_cs78/preview",
  },
  {
    title: "IBM Data Science Specialization",
    cardImage: "assets/images/education-page/coursera1.png",
    moocLink:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/AT82J3B9HKKJ",
  },
  {
    title: "Data Science for Engineers",
    cardImage: "assets/images/education-page/nptel2.png",
    moocLink: "https://onlinecourses.nptel.ac.in/noc21_cs23/preview",
  },
  {
    title: "The Complete Android Oreo Developer Course",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink:
      "https://www.udemy.com/course/the-complete-android-oreo-developer-course/",
  },
  {
    title: "Deep Learning Specialization",
    cardImage: "assets/images/education-page/coursera1.png",
    moocLink:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/W4DYPGVJJSYU",
  },
  {
    title: "Python for Data Science",
    cardImage: "assets/images/education-page/nptel2.png",
    moocLink: "https://onlinecourses.nptel.ac.in/noc21_cs33/preview",
  },
  {
    title: "Finance for Engineers",
    cardImage: "assets/images/education-page/emory.jpeg",
    moocLink: "https://drive.google.com/file/d/15oxLdzUd7Fk0TLWVUz0FPtnoraymbE7F/view?usp=drivesdk",
  },
];

const experience = [
  {
    img: "assets/images/education-page/c1.png",
  },
  {
    img: "assets/images/education-page/c2.jpg",
  },
  {
    img: "assets/images/education-page/c3.png",
  },
  {
    img: "assets/images/education-page/c4.png",
  },
  {
    img: "assets/images/education-page/c5.jpg",
  },
];

let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", function () {
  showExperience();
});

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
    const item = experience[currentItem];
    img.src = item.img;
    currentItem++;
  }, 3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content"><a href="${moocLink}"/>
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
      (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

/* Timeline Section*/

const timeline = document.querySelector(".timeline-container");
const timelinesection = [
  // {
  //   heading: "University of Massachusetts at Amherst",
  //   image: "assets/images/education-page/umass.png",
  //   subheading: "Masters of Science, Computer Science, (2023-Present) ",
  //   description:
  //     "",
  // },
  {
    heading: "Sri Sairam Engineering College",
    image: "assets/images/education-page/sec_logo.png",
    subheading: "Bachelor of Engineering, Mechanical Engineering, (2019-2023) ",
    description:
      "<li>CGPA: 9.27</li><li>Event Head of Procode(Intra department coding club)</li><li>Member of Coding Club, ML Tech Club</li>",
  },

  {
    heading: "Sowdambikaa MBHSS, Thuraiyur",
    image: "assets/images/education-page/school.jpeg",
    subheading: "Higher Secondary, Computer Science, (2018-2019) ",
    description:
      "e<li>84.67% in HSC</li></li><li>Vice Captain and Captain of School house 2016-2018</li><li>Merit Rank Holder from 2008-2018</li><li>Member of Student Council</li>",
  },

  {
    heading: "Jawahar MHSS, Neyveli",
    image: "assets/images/education-page/jawahar.jpeg",
    subheading: "High School, (2016-2017) ",
    description:
      "<li>90.8% in SSLC</li><li>Vice Captain and Captain of School house 2016-2018</li><li>Merit Rank Holder from 2008-2018</li><li>Member of Student Council</li>",
  },
];

const showCards2 = () => {
  let output = "";
  timelinesection.forEach(
    ({ heading, image, subheading, description }) =>
      (output += `       
    <div class="timeline-item">
    <div class="timeline-img">
        
    </div>

    <div class="timeline-content js--fadeInLeft">
        <img src="${image}" class="featured-image">
    <div class="timeline-content-text">
      <h2>${heading}</h2>
      <h6>${subheading}</h6>
      <p>${description}</p>
     
    </div>
    </div>
  </div>`)
  );
  timeline.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);
