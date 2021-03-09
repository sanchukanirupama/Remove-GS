var video,c1,ctx1,c_tmp,ctx_tmp; 
      function init() {
        video = document.getElementById('video');
        c1 = document.getElementById('output-canvas');
        ctx1 = c1.getContext('2d');
        c_tmp = document.createElement('canvas');
        c_tmp.setAttribute('width', 800);
        c_tmp.setAttribute('height', 450);
        ctx_tmp = c_tmp.getContext('2d');

        video.addEventListener('play', computeFrame );
      }
   function computeFrame() {

    if (video.paused || video.ended) {
      return;
    }

    ctx_tmp.drawImage(video, 0, 0, 800, 450);
    var frame = ctx_tmp.getImageData(0, 0, 800 , 450 );

    for (let i = 0; i < frame.data.length /4; i++) {
      let r = frame.data[i * 4 + 0];
      let g = frame.data[i * 4 + 1];
      let b = frame.data[i * 4 + 2];

      if (r > 70 && r < 161 && g > 95 && g < 220 && b > 25 && b < 150) 
      {  
          frame.data[i * 4 + 3] = 0;
      }
    }
    ctx1.putImageData(frame, 0, 0);
    setTimeout(computeFrame, 0);
  }

    document.addEventListener("DOMContentLoaded", () => {
      init();
    });