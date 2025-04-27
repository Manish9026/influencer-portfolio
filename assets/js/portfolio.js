// import { video1 } from "../videos/video.js";

// console.log("port folio js");
const video1 = "assets/videos/test.mp4"
const video2 = "assets/videos/song.mp4"

const tab = ["short-video", "long-video", "graphics", "script"]
// const cardData = [
//   {

//     title: "short video title",
//     category: "",
//     priceRange: { min: 1500, max: 3000 },
//     discountPrice: 0,
//     completedAt: new Date(),
//     videoUrl: video1,
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rem quaerat cumque porro nulla, id culpa maxime, quo animi repellendus at. Obcaecati odit deserunt dolorem!",
//     videoType: "short-video",
//     duration: '2:5 minutes'
//   },
//   {

//     title: "long video ",
//     category: "",
//     priceRange: { min: 1000, max: 3000 },
//     discountPrice: 0,
//     completedAt: new Date(),
//     videoUrl: video1,
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rem quaerat cumque porro nulla, id culpa maxime, quo animi repellendus at. Obcaecati odit deserunt dolorem!",
//     videoType: "long-video"
//   },
//   {

//     title: "Graphic video One",
//     category: "",
//     priceRange: { min: 3000, max: 5000 },
//     discountPrice: 0,
//     completedAt: new Date(),
//     videoUrl: video1,
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rem quaerat cumque porro nulla, id culpa maxime, quo animi repellendus at. Obcaecati odit deserunt dolorem!.",
//     videoType: "graphics"
//   },
//   {
//     title: "script video One",
//     category: "",
//     priceRange: { min: 7000, max: 1200 },
//     discountPrice: 0,
//     completedAt: new Date(),
//     videoUrl: video1,
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rem quaerat cumque porro nulla, id culpa maxime, quo animi repellendus at. Obcaecati odit deserunt dolorem!",
//     videoType: "script"
//   }
// ];
const image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s'
const newCardData = [{
  title: "short_video",
  url: image,
  mimeType: "image",
  category: "short_video",
  content: [
    {
      title: "short video title 1",
      category: "",
      priceRange: { min: 1500, max: 3000 },
      discountPrice: 0,
      completedAt: new Date(),
      url: video1,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rem quaerat cumque porro nulla, id culpa maxime, quo animi repellendus at. Obcaecati odit deserunt dolorem!",
      videoType: "short-video",
      duration: '2:5 minutes',
      mimeType: "video"
    },
    {
      title: "short video title 2",
      category: "",
      priceRange: { min: 20000, max: 30000 },
      discountPrice: 0,
      completedAt: new Date(),
      url: video1,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rem quaerat cumque porro nulla, id culpa maxime, quo animi repellendus at. Obcaecati odit deserunt dolorem!",
      videoType: "short-video",
      duration: '2:5 minutes',
      mimeType: "video"
    },
  ]
},
{
  title: "long_video",
  url: image,
  mimeType: "image",
  category: "long_video",
  content: [
    {
      mimeType: "video",
      title: "long video title",
      category: "",
      priceRange: { min: 1500, max: 3000 },
      discountPrice: 0,
      completedAt: new Date(),
      url: video1,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rem quaerat cumque porro nulla, id culpa maxime, quo animi repellendus at. Obcaecati odit deserunt dolorem!",
      videoType: "short-video",
      duration: '2:5 minutes'
    },
  ]
},
{
  title: "script_video",
  url: image,
  mimeType: "image",
  category: "script_video",
  content: [
    {
      mimeType: "video",
      title: "script video title",
      category: "",
      priceRange: { min: 1500, max: 3000 },
      discountPrice: 0,
      completedAt: new Date(),
      url: video1,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rem quaerat cumque porro nulla, id culpa maxime, quo animi repellendus at. Obcaecati odit deserunt dolorem!",
      videoType: "short-video",
      duration: '2:5 minutes'
    },
  ]
},
{
  title: "graphics_video",
  url: image,
  mimeType: "image",
  category: "graphics_video",
  content: [
    {
      mimeType: "video",
      title: "graphics video title",
      category: "",
      priceRange: { min: 1500, max: 3000 },
      discountPrice: 0,
      completedAt: new Date(),
      url: video1,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rem quaerat cumque porro nulla, id culpa maxime, quo animi repellendus at. Obcaecati odit deserunt dolorem!",
      videoType: "short-video",
      duration: '2:5 minutes'
    },
  ]
}
]
function onPopup(e) {

  let { contentId, containerId } = e.target.closest('#popup').dataset;
  // console.log(containerId,contentId,);

  document.getElementById('prd-title').innerText = newCardData[containerId].content[contentId].title;
  document.getElementById('prd-category').innerText = newCardData[containerId].content[contentId].category;
  document.getElementById('prd-completed').innerText = newCardData[containerId].content[contentId].completedAt?.toLocaleString('default', { month: 'long' }) + " " + newCardData[containerId].content[contentId].completedAt?.getFullYear();
  document.getElementById('prd-duration').innerText = newCardData[containerId].content[contentId].duration;
  document.getElementById('prd-videoUrl').src = newCardData[containerId].content[contentId].url
  document.getElementById('prd-dis').innerText = newCardData[containerId].content[contentId].description;

}




document.addEventListener('DOMContentLoaded', function () {
  initPortfolioFilters();
  // updateTabCard()
  document.getElementById('portfolioModal1').addEventListener('hidden.bs.modal', function () {
    const video = document.getElementById('prd-videoUrl');
    video.pause();
    video.src = '';
    video.load();
  });

  // document.getElementById('fi').addEventListener("click")
})

/**
* Portfolio Filtering functionality
*/
function initPortfolioFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  // const portfolioItems = document.querySelectorAll('.portfolio-item');
  let initSelectItem = undefined;
  // const cardContainer = document.getElementById("cardList");

  if (!filterBtns.length) return;


  filterBtns.forEach(item => {
    if (item.classList.contains("active")) {

      if (!initSelectItem) {
        initSelectItem = item;

      }
    }


  })


  updateTabCard(initSelectItem.getAttribute('data-filter'))




  // Handle filter button clicks
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(btn => btn.classList.remove('active'));
      console.log(btn);

      // Add active class to clicked button
      const filterValue = btn.getAttribute('data-filter');
      btn.classList.add('active');
      updateTabCard(filterValue)


    });
  });

  // Check for hash in URL for direct filtering
  if (window.location.hash) {
    const hash = window.location.hash.substring(1); // Remove the # character
    const targetBtn = document.querySelector(`.filter-btn[data-filter="${hash}"]`);
    console.log(hash, targetBtn);

    if (targetBtn) {
      targetBtn.click();

      // Scroll to the portfolio section
      const portfolioSection = document.querySelector('.portfolio-section');
      if (portfolioSection) {
        setTimeout(() => {
          portfolioSection.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }
}

const updateTabCard = (selected = "all") => {
  const cardContainer = document.getElementById("cardList");
  window.scrollTo({
    top: 200,
    behavior: 'smooth'
    ,

    // makes it smooth scrolling
  });
  cardContainer.innerHTML = "";
  if (selected === 'all') {
    newCardData.forEach((card, index) => {
      const cardDiv = document.createElement("div");
      cardDiv.className = "col-lg-4 col-md-6 mb-4 portfolio-item " + card?.category;
      cardDiv.innerHTML = `
       <div class="portfolio-card">
                          <div class="portfolio-thumb video-container">
                         ${card?.mimeType == "video" ? `<video preload="metadata"  style="width: 100%; height: auto;"  src="./${card?.url}"></video>` : `<img   style="width: 100%; height: auto; position:absolute; top:0; left:0; object-fit:cover; " src="${card?.url}">`}
  
           
                          <!--   <img src="assets/images/portfolio/portfolio-1.jpg" alt="Commercial Video Editing" >--> 
                              <div class="portfolio-overlay">
                                  <!--<div class="overlay-content">
                                      <a href="#portfolioModal1" 
                                      data-bs-toggle="modal" class="overlay-icon"
                                      id="popup"
                                      
                                      data-tab-id=${index}
                                     >
                                      <i class="fas fa-expand"></i></a>
                                  </div>-->
                              </div> 
                          </div>
                          <div class="portfolio-info">
                              <h4>${card?.title}</h4>
                           <button  id="exploreBtn" data-filter="${card?.category}">Explore more</button>
                          </div>
                      </div>
      `;
      cardDiv.style.opacity = 0
      cardDiv.style.transform = 'translatey(10px)';

      setTimeout(() => {
        cardDiv.style.opacity = 1
        cardDiv.style.transform = 'translatex(0px)';

      }, 30)
      cardContainer.appendChild(cardDiv);

      // const links = document.querySelectorAll('#popup');


      // links.forEach(link => {
      //   link.addEventListener('click', onPopup);
      // });

    }

    );

    const exploreBtn = document.querySelectorAll("#exploreBtn");

    exploreBtn.forEach(btn => {

      btn.addEventListener('click', (e) => {
        const filterBtns = document.querySelectorAll('.filter-btn');
        let selectValue = e?.target?.dataset?.filter
        // console.log(e.target?.dataset?.filter);
        if (!selectValue) return
        filterBtns.forEach(btn => {
          // console.log(btn.getAttribute('data-filter')===selectValue);

          if (btn.getAttribute('data-filter') === selectValue) {
            btn.classList.add('active')
          }
          else {

            btn.classList.remove('active')
          }



        });
        // console.log(filterBtns);

        updateTabCard(selectValue)

      })
    })
  }
  else {
    newCardData.forEach((card, index) => {

      if (card.category === selected) {
        card.content.map((item, indx) => {

          const cardDiv = document.createElement("div");
          cardDiv.className = "col-lg-4 col-md-6 mb-4 portfolio-item " + card?.category;
          cardDiv.innerHTML = `
           <div class="portfolio-card">
                              <div class="portfolio-thumb video-container">
                             ${item?.mimeType == "video" ? `<video preload="metadata"  style="width: 100%; height: auto;"  src="./${item?.url}"></video>` : `<img preload="metadata"  style="width: 100%; height: auto;"  src="./${item?.url}">`}
      
               
                              <!--   <img src="assets/images/portfolio/portfolio-1.jpg" alt="Commercial Video Editing" >--> 
                                  <div class="portfolio-overlay">
                                      <div class="overlay-content">
                                          <a href="#portfolioModal1" 
                                          data-bs-toggle="modal" class="overlay-icon"
                                          id="popup"
                                          
                                          data-content-id=${indx}
                                          data-container-id=${index}
                                         >
                                          <i class="fas fa-expand"></i></a>
                                      </div>
                                  </div>
                              </div>
                              <div class="portfolio-info">
                                  <h4>${item?.title}</h4>
                                <p>₹ ${(item?.priceRange?.min ? item?.priceRange?.min : 0) + (item?.priceRange?.max && " - ₹" + item?.priceRange?.max)}</p>
                              </div>
                          </div>
          `;
          cardDiv.style.opacity = 0
          cardDiv.style.transform = 'translatey(10px)';

          setTimeout(() => {
            cardDiv.style.opacity = 1
            cardDiv.style.transform = 'translatex(0px)';

          }, 30)
          cardContainer.appendChild(cardDiv);


          const links = document.querySelectorAll('#popup');

          links.forEach(link => {
            link.addEventListener('click', onPopup);
          });
        })


      }
    });

  }
  // cardContainer.style.opacity=1;
  // cardContainer.style.transform="translatey(0px)"
}