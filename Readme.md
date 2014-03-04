#slidewhistle.js

This is a jQuery-less plugin that will turn any HTML element full of IMG tags into a slideshow of those images.

Style the containing element and the images in your stylesheet as you wish and this plugin will just reveal them in their respective ordering in the HTML.

##Usage

To use, add the ```slidewhistle.js``` file to your HEAD tag:

```html
<script src="slidewhistle.js"></script>
```

then this somewhere in your BODY tag:

```html
<div id='image_container'>
  <img src='images/image1.jpg' />
</div>
```

Finally, load a new instance of SlideWhistle on page load or anytime a new image container is created (just be sure to give each one a unique ID on the DOM)

```javascript
window.onload = function(){
  // you can specify the ID of the containing element in the first argument
  // you can set the milliseconds between each change by changing 1000 to something else
  new SlideWhistle("image_container", 1000)
}
```