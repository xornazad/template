const toggleBtn = document.getElementById("toggleSidebarBtn");
  const toggleIcon = document.getElementById("toggleIcon");
  const sidebar = document.getElementById("sidebar");
  const chatBody = document.getElementById("chatBody");
  const image = document.getElementById("image");
  const bodyContent = document.querySelector(".body");
  let isSidebarVisible = true;
const screenWidth = window.innerWidth;
document.addEventListener("DOMContentLoaded", function () {
  if (screenWidth < 1050 && screenWidth > 992) {
    if(image !==null){
      image.style.height ="385px";
    }
    toggleBtn.style.left = "234px";
  }else if(screenWidth < 992 && screenWidth > 800){
    if(image !==null){
      image.style.height ="300px";
    }
    toggleBtn.style.left = "182px";
  }else if(screenWidth < 800){
    if(image !==null){
      image.style.height ="300px";
    }
    toggleBtn.style.left = "170px";
  }else{
    if(image !==null){
      image.style.height ="565px";
    }
  }
});
  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("d-none");
    // icon of button will change
    const newIcon = isSidebarVisible
    ? "../assets/img/polygon-l.png"
    : "../assets/img/polygon-r.png";
    toggleIcon.src = newIcon;

    if (sidebar.classList.contains("d-none")) {
      chatBody.classList.remove("col-9");
      chatBody.classList.add("col-12");
      bodyContent.style.paddingLeft = "35px";
    } else {
      chatBody.classList.remove("col-12");
      chatBody.classList.add("col-9");
      bodyContent.style.paddingLeft = "20px";
    }

    
  if (screenWidth < 1050 && screenWidth > 992) {
    if (isSidebarVisible) {
      toggleBtn.style.left = "-7px";
      if(image !==null){
        image.style.height ="520px";
      }
    } else {
      toggleBtn.style.left = "234px";
      if(image !==null){
        image.style.height ="385px";
      }
    }
  }else if (screenWidth < 992 && screenWidth > 800) {
    // Mobile/tablet screen
    if (isSidebarVisible) {
      toggleBtn.style.left = "-7px";
      if(image !==null){
        image.style.height ="385px";
      }
    } else {
      toggleBtn.style.left = "182px";
      if(image !==null){
        image.style.height ="300px";
      }
    }
    } else if(screenWidth < 800){
        // Desktop screen
        if (isSidebarVisible) {
        toggleBtn.style.left = "-7px";
        if(image !==null){
          image.style.height ="400px";
        }
        } else {
          toggleBtn.style.left = "170px";
          if(image !==null){
            image.style.height ="300px";
          }
        }
    }else{
      // Desktop screen
        if (isSidebarVisible) {
        toggleBtn.style.left = "-7px";
        if(image !==null){
          image.style.height ="750px";
        }
        } else {
        toggleBtn.style.left = "338px";
        if(image !==null){
          image.style.height ="565px";
        }
        }
    }
    isSidebarVisible = !isSidebarVisible;
  });