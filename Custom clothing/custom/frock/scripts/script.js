$(document).ready(function () {

  $('#bgcolor').on('change', function (e) {
    var optionSelected = $("option:selected", this);
    var valueSelected = '#' + this.value;

    $("#background").css("background-color", valueSelected);
    $("#design").css("background-color", valueSelected);
    $(".left1").css("background-color", valueSelected);
    $(".squareShape").css("background-color", valueSelected);
    $(".left2").css("background-color", valueSelected);
    $(".left3").css("background-color", valueSelected);

  });
});



var textureNum = sessionStorage.getItem("textureChosen") != null ? Number(sessionStorage.getItem("textureChosen")) : 0;

var textureDesigns = ["url('')", "url('https://cdn.discordapp.com/attachments/508801763349102596/652641829141086208/texture1.jpg')", "url('https://cdn.discordapp.com/attachments/508801763349102596/652673936336879616/59543384_1066391113544824_5983366287777071104_n.jpg')", "url('https://cdn.discordapp.com/attachments/508801763349102596/652676396329467905/78842603_566593743909475_3867407519341084672_n.jpg')"]

function changeTexture(text) {
  if (text == 'plain') {
    textureNum = 0;
  } else if (text == 'fabric') {
    textureNum = 1;
  } else if (text == 'waves') {
    textureNum = 2;
  } else if (text == 'spotty') {
    textureNum = 3;
  }
  document.getElementById('design').style.backgroundImage = textureDesigns[textureNum];
  $(".squareShape").css("background-image", textureDesigns[textureNum]);
}



var neckNum = sessionStorage.getItem("neckNum") != null ? Number(sessionStorage.getItem("neckNum")) : 0;
var sleeveNum = sessionStorage.getItem("sleeveNum") != null ? Number(sessionStorage.getItem("sleeveNum")) : 0;
var waistNum = sessionStorage.getItem("waistNum") != null ? Number(sessionStorage.getItem("waistNum")) : 0;

var neckDesigns = ["./images/original.png", './images/vneck.png', './images/longsleeves.png', './images/longsleevesvneck.png', './images/croptop.png', './images/croptopvneck.png', './images/croptoplongsleeves.png', './images/croptoplongsleevesvneck.png']

function changeShape(shape) {
  if (shape == 'neck') {
    neckNum = neckNum == 0 ? 1 : 0;
    //console.log('neck changed to ' + neckNum);
  } else if (shape == 'sleeve') {
    sleeveNum = sleeveNum == 0 ? 2 : 0;
    //console.log('sleeve changed to ' + sleeveNum);
  } else if (shape == 'waist') {
    waistNum = waistNum == 0 ? 4 : 0;
    //console.log('waist changed to ' + waistNum);
  }

  var total = neckNum + sleeveNum + waistNum;
  document.getElementById('design').src = neckDesigns[total];
  console.log('design changed to ' + total);
}




var front = true;

var flipImage = ["./images/back.png", './images/backlongsleeves.png', './images/backcroptop.png', './images/backlongsleevescroptop.png']

function flipDesign() {
  front = !front;
  var total = neckNum + sleeveNum + waistNum;
  if (front) {
    document.getElementById('design').src = neckDesigns[total];
  } else {
    document.getElementById('design').src = flipImage[total - Math.round(total / 2)];
  }
}




function save() {
  console.log("SAVED!");

  // save design name
  var nameElement = document.getElementById("designName");
  var designName = nameElement.value;
  document.getElementById("designName").innerHTML = designName;
  sessionStorage.setItem("designName", nameElement.value);

  // save shape of design
  sessionStorage.setItem("neckNum", neckNum);
  sessionStorage.setItem("sleeveNum", sleeveNum);
  sessionStorage.setItem("waistNum", waistNum);

  // save color
  var colorChosen = document.getElementById("bgcolor");
  sessionStorage.setItem("colorChosen", "#" + colorChosen.value);

  // save texture
  sessionStorage.setItem("textureChosen", textureNum);
}

// called every session to retrieve saved design
var designName = sessionStorage.getItem("designName");
if (document.getElementById("designName") != null) {
  document.getElementById("designName").value = designName;
  console.log("Retrieved Neck: " + sessionStorage.getItem("neckNum"));
  console.log("Retrieved Sleeve: " + sessionStorage.getItem("sleeveNum"));
  console.log("Retrieved Waist: " + sessionStorage.getItem("waistNum"));
  var total = neckNum + sleeveNum + waistNum;
  document.getElementById('design').src = neckDesigns[total];
  console.log("Retrieved Design: " + total);

  var colorSelected = sessionStorage.getItem("colorChosen") != null ? sessionStorage.getItem("colorChosen") : "#ffffff";

  console.log("Retrieved Color: " + colorSelected);

  document.getElementById("bgcolor").value = colorSelected;
  document.getElementById("background").style.backgroundColor = colorSelected;
  $("#design").css("background-color", colorSelected);
  $(".left1").css("background-color", colorSelected);
  $(".left2").css("background-color", colorSelected);
  $(".left3").css("background-color", colorSelected);
  $(".squareShape").css("background-color", colorSelected);


  console.log("Retrieved texture: " + textureNum);
  var textureSelected = sessionStorage.getItem("textureChosen") != null ? sessionStorage.getItem("textureChosen") : 0;
  console.log(textureSelected);
  console.log(textureDesigns[textureSelected]);
  document.getElementById('design').style.backgroundImage = textureDesigns[textureSelected];
  $(".squareShape").css("background-image", textureDesigns[textureSelected]);
}



function clearBGColor() {
  sessionStorage.setItem("colorChosen", "none");
  sessionStorage.setItem("textureChosen", 0);
}


// SHARE FUNCTION

function sendMessageIndicator() {
  alert("Shared successfully!");
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("shareButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
if (btn != null) {
  btn.onclick = function () {
    modal.style.display = "block";
  }
}

// When the user clicks on <span> (x), close the modal
if (span != null) {
  span.onclick = function () {
    modal.style.display = "none";
  }
}

// When the user clicks anywhere outside of the modal, close it
if (window != null) {
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

function changeColor(button) {
  if (document.getElementById(button).style.color == 'gray') {
    document.getElementById(button).style.color = 'black';
  } else {
    document.getElementById(button).style.color = 'gray';
  }
}




function showImage(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $('#pic')
        .attr('src', e.target.result)
        .width(150);
      sessionStorage.setItem("currStoredPhoto", e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
  }
}

(function () {
  // The width and height of the captured photo. We will set the
  // width to the value defined here, but the height will be
  // calculated based on the aspect ratio of the input stream.

  var width = 320;    // We will scale the photo width to this
  var height = 0;     // This will be computed based on the input stream

  // |streaming| indicates whether or not we're currently streaming
  // video from the camera. Obviously, we start at false.

  var streaming = false;

  // The various HTML elements we need to configure or control. These
  // will be set by the startup() function.

  var video = null;
  var canvas = null;
  var photo = null;
  var startbutton = null;

  function startup() {
    video = document.getElementById('video');
    canvas = document.getElementById('canvas');
    photo = document.getElementById('photo');
    startbutton = document.getElementById('startbutton');

    if (video != null) {
      navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(function (stream) {
          video.srcObject = stream;
          video.play();
        })
        .catch(function (err) {
          console.log("An error occurred: " + err);
        });

      video.addEventListener('canplay', function (ev) {
        if (!streaming) {
          height = video.videoHeight / (video.videoWidth / width);

          // Firefox currently has a bug where the height can't be read from
          // the video, so we will make assumptions if this happens.

          if (isNaN(height)) {
            height = width / (4 / 3);
          }

          video.setAttribute('width', width);
          video.setAttribute('height', height);
          canvas.setAttribute('width', width);
          canvas.setAttribute('height', height);
          streaming = true;
        }
      }, false);


      startbutton.addEventListener('click', function (ev) {
        takepicture();
        ev.preventDefault();
      }, false);

      clearphoto();
    }
  }

  // Fill the photo with an indication that none has been
  // captured.

  function clearphoto() {
    var context = canvas.getContext('2d');
    context.fillStyle = "#AAA";
    context.fillRect(0, 0, canvas.width, canvas.height);

    var data = canvas.toDataURL('image/png');
    photo.setAttribute('src', data);
  }

  // Capture a photo by fetching the current contents of the video
  // and drawing it into a canvas, then converting that to a PNG
  // format data URL. By drawing it on an offscreen canvas and then
  // drawing that to the screen, we can change its size and/or apply
  // other changes before drawing it.

  function takepicture() {
    var context = canvas.getContext('2d');
    if (width && height) {
      canvas.width = width;
      canvas.height = height;
      context.drawImage(video, 0, 0, width, height);

      var data = canvas.toDataURL('image/png');
      photo.setAttribute('src', data);
    } else {
      clearphoto();
    }
  }

  // Set up our event listener to run the startup process
  // once loading is complete.
  window.addEventListener('load', startup, false);
})();

function transferTakenPhoto() {
  // This ideally transfer photo back to tshirt.html
  // document.getElementById('finalImage').setAttribute('src', canvas.toDataURL('image/png'));
  var context = canvas.getContext('2d');
  var width = 300
  var height = 200
  canvas.width = width;
  canvas.height = height;
  context.drawImage(video, 0, 0, width, height);

  var data = canvas.toDataURL('image/png');
  returnImage.setAttribute('src', data);

  sessionStorage.setItem("userImage", data);
}

function transferStoredPhoto() {
  // This ideally transfer pic back to tshirt.html
  sessionStorage.setItem("userImage", sessionStorage.getItem("currStoredPhoto"));
}

var userImageData = sessionStorage.getItem("userImage");
if (document.getElementById("userUpload") != null) {
  userUpload.src = userImageData;
}
