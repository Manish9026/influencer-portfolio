// import { video1 } from "../videos/video.js";

// console.log("port folio js");
const video1="assets/videos/test.mp4"
const tab=["short-video","long-video","graphics","script"]
const cardData = [
    { 

        title: "short video title",
        category:"",
        priceRange:{min:1500,max:3000},
        discountPrice:0,
        completedAt:new Date(),
        videoUrl:video1,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rem quaerat cumque porro nulla, id culpa maxime, quo animi repellendus at. Obcaecati odit deserunt dolorem!",
        videoType:"short-video",
        duration:'2:5 minutes'
     },
     { 

        title: "long video ",
        category:"",
        priceRange:{min:1000,max:3000},
        discountPrice:0,
        completedAt:new Date(),
        videoUrl:video1,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rem quaerat cumque porro nulla, id culpa maxime, quo animi repellendus at. Obcaecati odit deserunt dolorem!",
        videoType:"long-video"
     },
     { 

        title: "Graphic video One",
        category:"",
        priceRange:{min:3000,max:5000},
        discountPrice:0,
        completedAt:new Date(),
        videoUrl:video1,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rem quaerat cumque porro nulla, id culpa maxime, quo animi repellendus at. Obcaecati odit deserunt dolorem!.",
        videoType:"graphics"
     },
     { 

        title: "script video One",
        category:"",
        priceRange:{min:7000,max:1200},
        discountPrice:0,
        completedAt:new Date(),
        videoUrl:video1,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rem quaerat cumque porro nulla, id culpa maxime, quo animi repellendus at. Obcaecati odit deserunt dolorem!",
        videoType:"script"
     }
  ];
function onPopup(e){
    
    let i=e.target.closest('#popup').dataset.tabId;
    document.getElementById('prd-title').innerText=cardData[i].title;
    document.getElementById('prd-category').innerText=cardData[i].category;
    document.getElementById('prd-completed').innerText=cardData[i].completedAt?.toLocaleString('default', { month: 'long' }) + " " + cardData[i].completedAt?.getFullYear();
    document.getElementById('prd-duration').innerText=cardData[i].duration;
    document.getElementById('prd-videoUrl').src=cardData[i].videoUrl
    document.getElementById('prd-dis').innerText=cardData[i].description;

}


document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById("cardList");
  
//   console.log(container,container);
  cardData.forEach((card,index) => {
    const cardDiv = document.createElement("div");
    cardDiv.className = "col-lg-4 col-md-6 mb-4 portfolio-item " + card?.videoType;
    cardDiv.innerHTML = `
     <div class="portfolio-card">
                        <div class="portfolio-thumb video-container">
                        <video preload="metadata"  style="width: 100%; height: auto;"  src="./${card?.videoUrl}"></video>

         
                        <!--   <img src="assets/images/portfolio/portfolio-1.jpg" alt="Commercial Video Editing" >--> 
                            <div class="portfolio-overlay">
                                <div class="overlay-content">
                                    <a href="#portfolioModal1" 
                                    data-bs-toggle="modal" class="overlay-icon"
                                    id="popup"
                                    
                                    data-tab-id=${index}
                                   >
                                    <i class="fas fa-expand"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="portfolio-info">
                            <h4>${card?.title}</h4>
                            <p>₹ ${(card?.priceRange?.min?card?.priceRange?.min:0) +  (card?.priceRange?.max && " - ₹" + card?.priceRange?.max)}</p>
                        </div>
                    </div>
    `;
    container.appendChild(cardDiv);
    // document.getElementById("popup").addEventListener("click", onPopup);
    const links = document.querySelectorAll('#popup');

  links.forEach(link => {
    link.addEventListener('click',onPopup);
  });
  });
  
  })