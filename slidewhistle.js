var SlideWhistle = function(id_of_container, interval){

  var id_of_container = id_of_container || "image_container"
    , images = []
    , ms = interval || 1000
    , currentImage = 0
    , children = document.getElementById(id_of_container).childNodes

  var isImage = function(element){
    return element.tagName == "IMG"
  }

  var swapVisibleImage = function(){
    if (images[currentImage+1] !== undefined){
      // hide next
      images[currentImage].style.display = "none"
      images[currentImage+1].style.display = "inline"
      currentImage += 1
    } else {
      // start over
      images[currentImage].style.display = "none"
      images[0].style.display = "inline"
      currentImage = 0
    }
  }

  for (var i = 0; i < children.length; i+=1 ){
    if ( isImage(children[i]) ) images.push(children[i])
  }

  // hide all images
  images.forEach(function(image){
    if (!image.style.display || image.style.display !== "none") image.style.display = "none"
  })

  // show first image
  images[0].style.display = "inline"
  setInterval(swapVisibleImage, ms)

}