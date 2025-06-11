  const toggleBtn = document.getElementById("toggleSidebarBtn");
  const side = document.getElementById("side");
  const toggleIcon = document.getElementById("toggleIcon");
  const sidebar = document.getElementById("sidebar");
  const chatBody = document.getElementById("chatBody");
  const image = document.getElementById("image");
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
      
      side.style.marginLeft = "12px"
      chatBody.classList.remove("col-9");
      chatBody.classList.add("col-11");
    } else {
      
      side.style.marginLeft = "0px"
      chatBody.classList.remove("col-11");
      chatBody.classList.add("col-9");
    }

    
  if (screenWidth < 1050 && screenWidth > 992) {
    if (isSidebarVisible) {
      if(image !==null){
        image.style.height ="520px";
      }
    } else {
      if(image !==null){
        image.style.height ="385px";
      }
    }
  }else if (screenWidth < 992 && screenWidth > 800) {
    // Mobile/tablet screen
    if (isSidebarVisible) {
      if(image !==null){
        image.style.height ="385px";
      }
    } else {
      if(image !==null){
        image.style.height ="300px";
      }
    }
    } else if(screenWidth < 800){
        // Desktop screen
        if (isSidebarVisible) {
        if(image !==null){
          image.style.height ="400px";
        }
        } else {
          if(image !==null){
            image.style.height ="300px";
          }
        }
    }else{
      // Desktop screen
        if (isSidebarVisible) {
        if(image !==null){
          image.style.height ="750px";
        }
        } else {
        if(image !==null){
          image.style.height ="565px";
        }
        }
    }
    isSidebarVisible = !isSidebarVisible;
  });