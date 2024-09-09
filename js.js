debugger
let imgArr = ["./img/analyze-x-data.png", "./img/images.jpeg", "./img/software_tools-for-qualitative-data-analysis.png", "./img/structural-coding.png"]

let div = document.querySelector("#nkarner");

let current = 0;

let monitorImage = document.querySelector("#monitorImage")
monitorImage.setAttribute("src", imgArr[current])

imgArr.forEach((img, index) => {
    const imgEl = document.createElement("img");
    imgEl.setAttribute("src", img);
    imgEl.addEventListener("click", () => sexmelNkariVra(img, index))
    imgEl.setAttribute("id", `image${index}`)
    monitorImage.style.cssText = `
    width: 700px;
    height: 100%;`
    div.append(imgEl)
})

function sexmelNkariVra(img, index) {
    hanelKoxqer(current)
    current = index
    gcelKoxqer(current)
    monitorImage.setAttribute("src", img)
}

function onNextClick() {
    hanelKoxqer(current)
    if (current === imgArr.length - 1) {
        current = 0
    } else {
        current++
    }
    
    let imgElement = document.querySelector("img")
    imgElement.setAttribute("src", imgArr[current])
    gcelKoxqer(current)
}

function onPrevClick() {
    hanelKoxqer(current)
    if (current === 0) {
        current = imgArr.length - 1
    } else {
        current--
    }
    
    let imgElement = document.querySelector("img")
    imgElement.setAttribute("src", imgArr[current])
    gcelKoxqer(current)
}

function gcelKoxqer(nkariHamar) {
    const selectedImage = document.getElementById(`image${nkariHamar}`)
    selectedImage.style.cssText = `
    border: 2px solid blue;   `
}

function hanelKoxqer(nkariHamar) {
    const selectedImage = document.getElementById(`image${nkariHamar}`)
    selectedImage.style.cssText = `
    border: none;   `
}
