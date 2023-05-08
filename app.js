// home page 

// Select the hamburger menu button and navigation links
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Add an event listener to the hamburger menu button
hamburgerMenu.addEventListener('click', () => {
  // Toggle the "change" class on the navigation wrapper element
  document.querySelector('.nav-wrapper').classList.toggle('change');
});

// Add event listeners to each navigation link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Remove the "change" class from the navigation wrapper element
    document.querySelector('.nav-wrapper').classList.remove('change');
  });
});




// for Skills page 

const heading = 'Array of Skills Stacks';
let i = 0;

const typing = () => {
    if (i < heading.length) {
        document.querySelector('.heading').innerHTML += heading.charAt(i);
        i++;
        setTimeout(typing, 150);
    } else {
        setTimeout(() => {
            i = 0;
            document.querySelector('.heading').innerHTML = '';
            typing();
        }, 1500);
    }
}

typing();


/// end of Skills 

/// Project section 


const container = document.querySelector(".container");
const projects = document.querySelectorAll(".project");
const projectHideBtn = document.querySelector(".project-hide-btn");

projects.forEach((project, i) => {
    project.addEventListener("mouseenter", () => {
        project.firstElementChild.style.top = `-${project.firstElementChild.offsetHeight - project.offsetHeight + 20
            }px`;
    });

    project.addEventListener("mouseleave", () => {
        project.firstElementChild.style.top = "2rem";
    });

    // Big Project Image
    project.addEventListener("click", () => {
        const bigImgWrapper = document.createElement("div");
        bigImgWrapper.className = "project-img-wrapper";
        container.appendChild(bigImgWrapper);

        const bigImg = document.createElement("img");
        bigImg.className = "project-img";
        const imgPath = project.firstElementChild.getAttribute("src").split(".")[0];
        bigImg.setAttribute("src", `${imgPath}-big.jpg`);
        bigImgWrapper.appendChild(bigImg);
        document.body.style.overflowY = "hidden";

        document.removeEventListener("scroll" , scrollFn);

      //

        projectHideBtn.classList.add("change");

        projectHideBtn.onclick = () => {
            projectHideBtn.classList.remove("change");
            bigImgWrapper.remove();
            document.body.style.overflowY = "scroll";

            document.addEventListener("scroll");

            progressBarFn();
        };


    });
    // End of Big Project Image

    i >= 6 && (project.style.cssText = "display: none; opacity: 0");
});

// Projects Button
const projectSection = document.querySelector(".project-section");
const projectsBtn = document.querySelector(".projects-btn");
const projectsBtnText = document.querySelector(".projects-btn span");
let showHideBool = true;

const showProjects = (project, i) => {
    setTimeout(() => {
        project.style.display = "flex";
        projectSection.scrollIntoView({ block: "end" });
    }, 600);

    setTimeout(() => {
        project.style.opacity = "1";
    }, i * 200);
};

const hideProjects = (project, i) => {
    setTimeout(() => {
        project.style.display = "none";
        projectSection.scrollIntoView({ block: "end" });
    }, 1200);

    setTimeout(() => {
        project.style.opacity = "0";
    }, i * 100);
};

projectsBtn.addEventListener("click", (e) => {
    e.preventDefault();

    projectsBtn.firstElementChild.nextElementSibling.classList.toggle("change");

    showHideBool
        ? (projectsBtnText.textContent = "Show Less")
        : (projectsBtnText.textContent = "Show More");

    projects.forEach((project, i) => {
        i >= 6 &&
            (showHideBool ? showProjects(project, i) : hideProjects(project, i));
    });
    showHideBool = !showHideBool;
});

// Main Button
const mainBtns = document.querySelectorAll(".main-btn");

mainBtns.forEach((btn) => {
    let ripple;

    btn.addEventListener("mouseenter", (e) => {
        console.log("hi");
        const left = e.clientX - e.target.getBoundingClientRect().left;
        const top = e.clientY - e.target.getBoundingClientRect().top;

        ripple = document.createElement("div");
        ripple.classList.add("ripple");
        ripple.style.left = `${left}px`;
        ripple.style.top = `${top}px`;
        btn.prepend(ripple);
    });

    btn.addEventListener("mouseleave", () => {
        btn.removeChild(ripple);
    });
});

// End of Main Button

const scrollFn = () => {
    menuIcon.classList.add("show-menu-icon");
    navbar.classList.add("hide-navbar");
  
    if (window.scrollY === 0) {
      menuIcon.classList.remove("show-menu-icon");
      navbar.classList.remove("hide-navbar");
    }
  
    progressBarFn();
  };
  


  // Contact 



  document.querySelector(".card-btn").addEventListener("click", () => {
    document.querySelector(".contact-container").classList.toggle("change");
  });
  


  //back to top

  // Get the button
var backToTopButton = document.querySelector('.back-to-top');

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
}
