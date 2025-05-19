

// all elements

let inputImage = document.getElementById("main-img")
let imgContainer = document.getElementById("img-container")
let mainEditableImg = document.getElementById("img-main")
let imgUploader = document.getElementById("image-uploader")
let pannerSettingHandeler = document.getElementById("panner-setting-handeler")
let settingMainPannel = document.getElementById("settings")
let seetingPannel = document.getElementById("setting-pannel")
let loaderBody = document.getElementById("loader")


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
    let imgUrl = URL.createObjectURL(imgObj)  // URL.createObj()
    mainEditableImg.src = imgUrl

    imgUploader.style.display = "none"
    imgContainer.style.display = "block"
})


//open setting pannel 

pannerSettingHandeler.addEventListener("click",()=>{
    settingMainPannel.style.display = "block"

})

settingMainPannel.addEventListener("click",()=>{
    settingMainPannel.style.display = "none"
})

seetingPannel.addEventListener("click",(e)=>{
    e.stopPropagation()
})

// setting events

brightness.addEventListener("change",()=>{
    mainEditableImg.style.filter = `brightness(${brightness.value - 10})`
})

contrast.addEventListener("change",()=>{
    mainEditableImg.style.filter = `contrast(${contrast.value})`
})

saturation.addEventListener("change",()=>{
    mainEditableImg.style.filter = `saturate(${saturation.value})`

})

grayscale.addEventListener("change",()=>{
    mainEditableImg.style.filter = `grayscale(${grayscale.value})`
})

invert.addEventListener("change",()=>{
    mainEditableImg.style.filter = `invert(${invert.value})`
})

sepia.addEventListener("change",()=>{
    mainEditableImg.style.filter = `sepia(${sepia.value})`
})

blurr.addEventListener("change",()=>{
    mainEditableImg.style.filter = `blur(${blurr.value}px)`
})




//setTimeOut

setTimeout(()=>{
    loaderBody.style.display="none"
},5000)
