

// all elements

let inputImage = document.getElementById("main-img")
let imgContainer = document.getElementById("img-container")
let mainEditableImg = document.getElementById("img-main")
let imgUploader = document.getElementById("image-uploader")
let pannerSettingHandeler = document.getElementById("panner-setting-handeler")
let settingMainPannel = document.getElementById("settings")
let seetingPannel = document.getElementById("setting-pannel")
let loaderBody = document.getElementById("loader")

let notificationBar = document.getElementById("notificationBar")
let notificationText = document.getElementById("notificationText")

let ranDomImgContainer = document.getElementById("random-img-container")
let randomsettingHeader = document.getElementById("random-img-header")

let exportBtn =  document.getElementById("export-btn")
let deleteBtn = document.getElementById("delete")

// notification function

 
const notification =(text="deafult message",time=1000,type = "success")=>{
    
    notificationBar.style.left = "-1%"
    notificationText.innerText = text
    
    if(type == "success"){
        
        notificationBar.style.borderRight = "10px solid green"
        
     }else{
         notificationBar.style.borderRight = "10px solid red"
     }

   
    setTimeout(()=>{
        notificationBar.style.left = "-100%"
    },time)

}

const loadLocalImg=()=>{
     let imgUrl = localStorage.getItem("IMG_URL")
    // console.log(imgUrl)
    if(imgUrl){
        mainEditableImg.src = imgUrl
        imgUploader.style.display = "none"
        imgContainer.style.display = "block"

    }else{
         notification("old image not found",2000,"error")
    }

}

document.addEventListener("DOMContentLoaded",loadLocalImg)





// all image control setting

let brightness = document.getElementById("Brightness")
let contrast = document.getElementById("Contrast")
let saturation = document.getElementById("Saturation")
let grayscale = document.getElementById("Grayscale")
let invert = document.getElementById("Invert")
let sepia = document.getElementById("Sepia")
let blurr = document.getElementById("Blur")


// functions 



//events 

inputImage.addEventListener("change", () => {  // add event on input file

    let imgObj = inputImage.files[0]
    if (!imgObj) return  // .file[0]
    let imgUrl = URL.createObjectURL(imgObj) 
     // URL.createObj()
     localStorage.setItem("IMG_URL",imgUrl)
    mainEditableImg.src = imgUrl


    imgUploader.style.display = "none"
    imgContainer.style.display = "block"
})


//open setting pannel 

pannerSettingHandeler.addEventListener("click", () => {
    settingMainPannel.style.display = "block"

})

settingMainPannel.addEventListener("click", () => {
    settingMainPannel.style.display = "none"
})

seetingPannel.addEventListener("click", (e) => {
    e.stopPropagation()
})

// setting events

brightness.addEventListener("change", () => {
    mainEditableImg.style.filter = `brightness(${brightness.value - 10})`
})

contrast.addEventListener("change", () => {
    mainEditableImg.style.filter = `contrast(${contrast.value})`
})

saturation.addEventListener("change", () => {
    mainEditableImg.style.filter = `saturate(${saturation.value})`

})

grayscale.addEventListener("change", () => {
    mainEditableImg.style.filter = `grayscale(${grayscale.value})`
})

invert.addEventListener("change", () => {
    mainEditableImg.style.filter = `invert(${invert.value})`
})

sepia.addEventListener("change", () => {
    mainEditableImg.style.filter = `sepia(${sepia.value})`
})

blurr.addEventListener("change", () => {
    mainEditableImg.style.filter = `blur(${blurr.value}px)`
})




//setTimeOut

setTimeout(() => {
    loaderBody.style.display = "none"
}, 5000)

/// getiing all filters 

let filters = document.getElementsByClassName("filters")

for (let filter of filters) {

    filter.addEventListener("click", () => {
        let att = filter.getAttribute("class").split(" ")[1]
        mainEditableImg.setAttribute("class", att)
        notification("filter applied successfully",2000,"success");
    })

}


async function loadData() {
   let responce = await fetch("https://picsum.photos/v2/list")
   let data = await responce.json()
   return data
}







randomsettingHeader.addEventListener("click",async ()=>{
      ranDomImgContainer.style.display ="flex"
      let images = await loadData()
      
    let randomImageDivs = ""

       for(let imageInfo of images){
          let imgUrl = imageInfo.download_url
          
          randomImageDivs += `<div class="random-img-div" onclick='handelChangeImage("${imgUrl}")'>
            <img src=${imageInfo.download_url} class="img"> 
          </div>`
       }

       ranDomImgContainer.innerHTML = randomImageDivs
       notification("images load sucessfully",2000,"success")      
})


function handelChangeImage(url){
    mainEditableImg.src = url
    localStorage.setItem("IMG_URL",url)
    ranDomImgContainer.style.display ="none"
    notification("image changed sucessfully",2000,"success")
}

exportBtn.addEventListener("click", () => {
    exportBtn.setAttribute("href",mainEditableImg.src);
    exportBtn.setAttribute("download", "edited-image.jpg"); // Give it a filename
});

deleteBtn.addEventListener("click",()=>{
     localStorage.clear()
     loadLocalImg()
})