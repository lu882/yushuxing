document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
  gsap.set("nav", { y: -150 });
  const digit1 = document.querySelector(".digit-1");
  const digit2 = document.querySelector(".digit-2");
  const digit3 = document.querySelector(".digit-3");

  function splitTextIntoSpans(selector) {
    var element = document.querySelector(selector);
    if (element) {
      var text = element.innerText;
      var splitText = text
        .split("")
        .map((char) => `<span>${char}</span>`)
        .join("");
      element.innerHTML = splitText;
    }
  }

  splitTextIntoSpans(".header h1");

  for (let i = 1; i < 2; i++) {
    for (let j = 1; j <= 9; j++) {
      const div = document.createElement("div");
      div.className = "num";
      div.textContent = j;
      digit3.appendChild(div);
    }
  }

  const finalDigit = document.createElement("div");
  finalDigit.className = "num";
  finalDigit.textContent = "0";
  digit3.appendChild(finalDigit);

  function animate(digit, duration, delay = 1) {
    const numHeight = digit.querySelector(".num").clientHeight;

    const totalDistance =
      (digit.querySelectorAll(".num").length - 1) * numHeight;
    gsap.to(digit, {
      y: -totalDistance,
      duration: duration,
      ease: "power2.inOut",
      delay: delay,
      // onComplete:()=>{
      //     digit.appendChild(digit.querySelector(".num"));
      // }
    });
  }

  animate(digit3, 5);
  animate(digit2, 6);
  animate(digit1, 2, 5);

  gsap.to(".progress-bar", {
    width: "30%",
    duration: 2,
    ease: "power4.out",
    delay: 7,
  
  });

  gsap.to(".progress-bar", {
    width: "100%",
    opacity: 0,
    duration: 2,
    ease: "power4.out",
    delay: 7,
    onComplete: () => {
      gsap.set(".pre-loader", {
        display: "none",
      });
       
    },
  });

  gsap.to(".hero-imgs > img", {
    clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
    duration: 1,
    ease: "power4.inOut",
    stagger: 0.25,
    delay: 9,
  });

  gsap.to(".hero", {
    scale: 1,
    duration: 3,
    ease: "power3.inOut",
    delay: 9,
  });

  gsap.to("nav", {
    y: 0,
    duration: 1,
    ease: "power3.out",
    delay: 11,
  });

  gsap.to("loading-all>h1,span", {
    top: "0px",
    stagger: 0.1,
    duration: 1,
    ease: "power3.out",
    delay: 11,
  });

  gsap.to(".last_images", {
    opacity: 1,
    // y:800,
    scale: 0.4,
    duration: 1,
    ease: "power3.out",
    delay: 1,
    // left:"0px",
    // top:"150vh",

    motionPath: {
      path: [
        { x: 0, y: 0 },
        { x: 10, y: 0 },
        { x: -100, y: 50 },
        { x: 10, y: 680 },
      ],
      type: "cubic",
    },

    scrollTrigger: {
      trigger: ".section-1", // 触发滚动的元素
      start: "top 90%", // 开始滚动的位置
      end: "bottom 20%", // 结束滚动的位置
      scrub: 1, // 平滑滚动效果
      // pin: true, // 固定图片
      toggleActions: "play none none reverse",
    },
  });

  gsap.to(".circulation", {
    x: "-17%",
    y: "-15%",
    opacity: 1,
    duration: 1,
    ease: "power3.out",
    delay: 1,
    scrollTrigger: {
      trigger: ".section-1", // 触发滚动的元素
      start: "top 60%", // 开始滚动的位置
      end: "bottom 20%", // 结束滚动的位置
      scrub: 1, // 平滑滚动效果
      // pin: true, // 固定图片
      toggleActions: "playnone none reverse",
    },
  });
  gsap.set(".intruduce", { x: "-115%", y: "-15%", opacity: 0 });

  gsap.to(".intruduce", {
    x: "10%",
    y: "5%",
    opacity: 1,
    duration: 1,
    ease: "power3.out",
    delay: 1,
    scrollTrigger: {
      trigger: ".section-1", // 触发滚动的元素
      start: "top 60%", // 开始滚动的位置
      end: "bottom 20%", // 结束滚动的位置
      scrub: 1, // 平滑滚动效果
      // pin: true, // 固定图片
      toggleActions: "playnone none reverse",
    },
  });

  const images1 = gsap.utils.toArray(".hero-img1");

const tl = gsap.timeline();

  images1.forEach((img, index) => {
    gsap.set(img, {
      left: 100 * index + "%",
      top: "80%", // 从屏幕上方开始

      opacity: 0, // 初始透明度


    });

    tl.to(img, {
      duration:1, // 每个图片动画持续时间不同
      left: "-=100%",
      top: "90%", // 随机垂直位置

      scale: 1, // 放大到正常大小
      opacity: 1, // 完全显示
      ease: "power1.out",
      stagger: 0.2, // 交错时间
      rotate: 0,
      onComplete: () => {
        // 动画完成后可以执行其他操作
      },
scrollTrigger: {
        trigger: ".scroll-imges", // 触发滚动的元素
        start: "top top", // 开始滚动的位置
        end: "bottom 70%", // 结束滚动的位置
        scrub: 1, // 平滑滚动效果
        pin: true, // 固定图片
        toggleActions: "playnone none reverse",
      }

    });
  });

  const images2 = gsap.utils.toArray(".mycardImg");

  images2.forEach((img1, index1) => {
    let index2 = index1 + 1;


    tl.from(img1, {
    delay:1,
    left:"120vw",
     top: 0,
      // duration: 3, // 每个图片动画持续时间不同
     // 随机垂直位置
      scale: 1, // 放大到正常大小
      opacity: 1, // 完全显示
      ease: "power1.out",
      stagger: 2, // 交错时间
  
      onComplete: () => {
        // 动画完成后可以执行其他操作
      },

scrollTrigger: {
        trigger: ".scroll-imges", // 触发滚动的元素
        start: "top top", // 开始滚动的位置
        end: "bottom 80%", // 结束滚动的位置
        scrub: 1, // 平滑滚动效果
        pin: true, // 固定图片
        toggleActions: "playnone none reverse",
      }

    },
    
    );


 

  });


gsap.set(".circle", { yPercent: -5});
gsap.set(".dotsBlue", { yPercent: 10});
gsap.set(".owlHorned", { yPercent: -20});
gsap.set(".clusterGreat", { yPercent: 5});

gsap.to(".circle", {
  yPercent: 5,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterGreat",
    scrub: 1
  }, 
});

gsap.to(".dotsBlue", {
  yPercent: -10,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterGreat",
    scrub: 1
  }, 
});


gsap.to(".owlHorned", {
  yPercent: 20,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterGreat",
    scrub: 1
  }, 
});

gsap.to(".caption", {
  yPercent: 100,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterGreat",
  // markers:true,
    end: "bottom center",
    scrub: 1
  }, 
});

gsap.to(".clusterGreat", {
  yPercent: -5,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterGreat",
    end: "bottom center",
    scrub: 1
  }, 
});



/* ------Burrowing Owl Sequence------  */
gsap.set(".triangle", { yPercent: 25, rotation:-90});
gsap.set(".dotsWhite", { yPercent: 10});
gsap.set(".owlBurrowing", { yPercent: -20});
gsap.set(".clusterBurrowing", { yPercent: 5});

gsap.to(".triangle", {
  yPercent: -5,
  rotation: 40,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterBurrowing",
    scrub: 1
  }, 
});

gsap.to(".dotsWhite", {
  yPercent: -10,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterBurrowing",
    scrub: 1
  }, 
});


gsap.to(".owlBurrowing", {
  yPercent: 20,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterBurrowing",
    scrub: 1
  }, 
});

gsap.to(".captionBurrowing", {
  yPercent: 200,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterBurrowing",
  // markers:true,
    end: "bottom center",
    scrub: 1
  }, 
});

gsap.to(".clusterBurrowing", {
  yPercent: -5,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterBurrowing",
  // markers:true,
    end: "bottom center",
    scrub: 1
  }, 
});


/*
gsap.set("#wrappie", {transformOrigin:"top left"});

function sizeAll() {
	var w = document.body.clientWidth;
  	console.log(w);
	if ( w < 960) {
     gsap.set("#wrappie",  {scale:w/100*.125}); 
		} 
}

window.onresize = sizeAll;

sizeAll();
*/

/*
const quotes = document.querySelectorAll(".title");

function setupSplits() {
  quotes.forEach(quote => {
    // Reset if needed
    if(quote.anim) {
      quote.anim.progress(1).kill();
      quote.childSplit.revert();
      quote.parentSplit.revert();
    }
    
    // Set up the splits
    quote.parentSplit = new SplitText(quote, {
      type: "lines",
      linesClass: "split-parent"
    });

    quote.childSplit = new SplitText(quote, { type: "lines" });

    // Set up the anim
    quote.anim = gsap.from(quote.childSplit.chars, {
      scrollTrigger: {
        trigger: quote,
        toggleActions: "restart pause resume reverse",
        start: "top 50%",
      },
      duration: 0.6, 
      ease: "circ.out", 
      y: 10,
      opacity:0,
      stagger: 0.02,
    });
  });
}

ScrollTrigger.addEventListener("refresh", setupSplits);
setupSplits();
*/


/* --- Split the text, Great Horned Owl --- */
var SplitGreat;
    SplitGreat = new SplitText(".titleGreathorned", {type:"words,chars"}), 
    chars = SplitGreat.chars;


tl.from(chars, {
  duration: 0.8,
  opacity:0,
  y:10,
  ease:"circ.out",
  stagger: 0.02,
onComplete: () => {SplitGreat.revert()}

}, "+=0");



/* --- Split the text, Burrowing Owl --- */
function setupSplits() {
  
var tlSplitBurrowing = gsap.timeline(), 
    SplitBurrowing = new SplitText(".titleBurrowing", {type:"words,chars"}), 
    chars = SplitBurrowing.chars; //an array of all the divs that wrap each character


tlSplitBurrowing.from(chars, {
  duration: 0.8,
  opacity:0,
  y:10,
  ease:"circ.out",
  stagger: 0.02,
scrollTrigger: {
    trigger: ".titleBurrowing",
//markers:true,
    start: "top 75%",
   end: "bottom center",
    scrub:1
  }
//,   onComplete: () => {SplitBurrowing.revert()}
}, "+=0");

// window.addEventListener('resize', function() {
  // SplitBurrowing.revert();
// });
  
};

/*
ScrollTrigger.addEventListener("scrollEnd", function() {
    SplitBurrowing.revert();
});
*/

ScrollTrigger.addEventListener("refresh", setupSplits);
//ScrollTrigger.addEventListener("scrollEnd", () => SplitBurrowing.revert());
setupSplits();


/*
// Alternate way of resizing the cluster elements since they are absolutely positioned
$(window).resize(function (){
if(window.matchMedia("(max-width: 500px)").matches){
    gsap.set(".clusterGreat", {scale: 0.2, transformOrigin: "center center"});
} else {
  gsap.set(".clusterGreat", {scale: 1, transformOrigin: "center center"});
          }
});
*/

tl.to(".myindwsd", {
  motionPath: {
   path: [
   {x:550, y:0},
    {x:1220, y:0}, 
    {x:1530, y:150}, 
    {x:1350, y:250},
     {x:220, y:320}, 
    {x:1530, y:450}, 
    {x:1350, y:550},
     {x:220, y:620}, 
    {x:1530, y:750}, 
    {x:1350, y:850},
    {x:220, y:920}, 
 {x:1530, y:1050}, 
 {x:1350, y:1100},
 {x:220, y:1250}, 
 {x:1530, y:1300}, 
 {x:1350, y:1450},
 {x:220, y:1500}, 
 {x:1530, y:1650}, 
 {x:1350, y:1700},
 {x:220, y:1840}, 
 {x:1530, y:1900}, 
 {x:1350, y:2050},
 {x:220, y:2140}, 
 {x:1530, y:2200}, 
 {x:1350, y:2350},
 {x:220, y:2440}, 
 {x:1530, y:2500}, 
 {x:1350, y:3050},
 {x:220, y:3140}, 
 {x:1530, y:3200}, 
 {x:1350, y:3350},
{x:220, y:3440}, 
 {x:1530, y:3500}, 
 {x:1350, y:3650},

    ],
  type: "cubic",
    align: ".text-1",
    alignOrigin: [0.5, 0.5],
    autoRotate: true,
  },
  transformOrigin: "50% 50%",
  // duration: 8,
  ease: "linear",
  delay:1,
  stagger: 2,
 scrollTrigger: {
   
      trigger: ".mytext", // 触发滚动的元素
      start: "top 20%", // 开始滚动的位置
      end: "+=3050", // 结束滚动的位置
      scrub: 1, // 平滑滚动效果
    }

});




//   tl.from(".text-1", {
//   // x: "150vh",
//   opacity: 0,
// scale: 1,
//     duration: .1,
//     ease: "power2.out",
//     scrollTrigger: {
//       trigger: ".text-1", // 触发滚动的元素
//       start: "top top", // 开始滚动的位置
//       end: "bottom bottom", // 结束滚动的位置
//       scrub: 1, // 平滑滚动效果
//     }
//   })

 tl.from(".footer", {
  y: "5vh",
  opacity: 0,
scale: 1,
    duration: .1,
    ease: "power2.out",
    scrollTrigger: {
  
      trigger: ".footer", // 触发滚动的元素
      // start: "top 50%", // 开始滚动的位置
      // end: "bottom bottom", // 结束滚动的位置
      scrub: 1, // 平滑滚动效果
    }
  })

});
