AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "3D- Modelling",
    cardImage: "assets/images/project-page/living_room.png",
    description:
      "A 3D model of a living room created using Blender.",
    Githublink: "https://github.com/mahima1911/3D_Model_LivingRoom",
  },
  {
    title: "NFT minting Web3 App",
    cardImage: "assets/images/project-page/nft-poster.png",
    description:
      "A web3 React dApp that lets people mint NFTs created by my smart Contract in Solidity on the blockchain.",
    Githublink: "https://github.com/mahima1911/Web3",
  },
  {
    title: "BiteSwift (Food Delivery App)",
    cardImage: "assets/images/project-page/delivery.png",
    description:
      "An on campus food delivery app for students and faculty linking the various unversity canteens.",

    Githublink: "https://github.com/Gokhulnath/swiggy_client_app_clone",
  },
  {
    title: "COVID-19 Analysis and Prediction",
    cardImage: "assets/images/project-page/covidanalysis.png",
    description:
      "Data analysis and Prediction of COVID-19 in India and Worldwide",

    Githublink: "https://github.com/mahima1911/COVID-19",
  },
  {
    title: "MedMapBot",
    cardImage: "assets/images/project-page/twitterbot.png",
    description:
      "Twitter Bot that responds to messages it is tagged in with a list of all nearby hospitals, and COVID-19 testing labs.",

    Githublink: "https://github.com/mahima1911/MedMapBot",
  },
  {
    title: "Face Recognition App",
    cardImage: "assets/images/project-page/facerecog.jpeg",
    description:
      "An Android app that by opening its camera scans an image and detects the faces by providing a bounding box around it.",

    Githublink: "https://github.com/mahima1911/FaceDetectionApp",
  },
  {
    title: "Screen Control",
    cardImage: "assets/images/project-page/screen.jpeg",
    description: "Computer Control by Gesture detection",

    Githublink: "https://github.com/mahima1911/Screen_Control",
  },
  {
    title: "Text Recognition App",
    cardImage: "assets/images/project-page/textrecog.jpeg",
    description:
      "Android app that uses MLKit by Firebase to recognise and display the text from an image.",

    Githublink: "https://github.com/mahima1911/TextRecognitionApp",
  },
  {
    title: "Tic Tac Toe Game",
    cardImage: "assets/images/project-page/ttt.png",
    description: "An Android application of the famous TicTacToe game.",

    Githublink: "https://github.com/mahima1911/TicTacToe",
  },
  {
    title: "Coin Man Game",
    cardImage: "assets/images/project-page/coinman.jpg",
    description: "An Android Game built using GDX.",

    Githublink: "https://github.com/mahima1911/CoinMan-Game",
  },
  {
    title: "Speech to Text App",
    cardImage: "assets/images/project-page/voice.png",
    description: "Android app that converts input speech to text.",

    Githublink: "https://github.com/mahima1911/SpeechToText_App",
  },
  {
    title: "Best Apartment",
    cardImage: "assets/images/project-page/apartment.jpeg",
    description:
      "Suitable apartment to move in based on location, rent, distance from workplace, neighbourhood and metro stations.",

    Githublink: "https://github.com/mahima1911/Coursera_Capstone",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, description, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper"  style="background: url(${cardImage}) center / cover no-repeat;">
          <a href="${Githublink}"/>
            <div class="header">
            </div>
            <div class="data">
              <div class="content"  >
              <div class="title-div">
                <h1 class="title"><a href="${Githublink}">${title}</a><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
                </h1>
                
                <p class = "title" ><a href="${Githublink}">${description}</a></p>
            
              </div>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
