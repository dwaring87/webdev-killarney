<template>
  <div class="bg-gray-50 w-full min-h-screen h-full">
    
    <div v-show="isCameraOpen && isLoading">
      <p class="text-gray-800">Loading...</p>
    </div>
    
    <div v-if="isCameraOpen" v-show="!isLoading">
      <video class="max-w-screen max-h-screen" v-show="!isPhotoTaken" ref="camera" autoplay></video>
      <canvas class="border-2 border-green-500 max-w-screen max-h-screen" v-show="isPhotoTaken" id="photoTaken" ref="canvas" :width="450" :height="337.5"></canvas>
    </div>

    <div class="max-w-xl px-2 sm:pt-3 fixed top-0 right-0" style="z-index: 9999">
        <div class="mx-auto flex gap-2">
          <div v-if="!this.isCameraOpen">
            <a href="#" class="btn" @click="toggleCamera">
              <span v-if="!isCameraOpen">Open Camera</span>
              <span v-else>Close Camera</span>
            </a>
          </div>
          <div v-if="isPhotoTaken && isCameraOpen">
            <a href="#" class="btn-camera" @click="downloadImage">
              <i class="ri-save-3-fill"></i>
            </a>
          </div>
          <div v-if="isCameraOpen && !isLoading">
            <a href="#" class="btn-camera" @click="takePhoto">
              <i class="ri-camera-fill"></i>
            </a>
          </div>
        </div>
    </div>

  </div>
</template>


<script>
const FLASH_TIMEOUT = 50;

export default {

  data: function() {
    return {
      id: undefined,
      back: undefined,
      pop: false,
      isCameraOpen: false,
      isPhotoTaken: false,
      isShotPhoto: false,
      isLoading: false,
      link: '#'
    }
  },

  mounted: async function() {
    this.id = this.$route.query.id;
    this.back = this.$route.query.back;
    this.pop = this.$route.query.pop === 'true';
    this.toggleCamera();
  },
  
  methods: {
    
    toggleCamera() {
      if(this.isCameraOpen) {
        this.isCameraOpen = false;
        this.isPhotoTaken = false;
        this.isShotPhoto = false;
        this.stopCameraStream();
      } else {
        this.isCameraOpen = true;
        this.createCameraElement();
      }
    },
    
    createCameraElement() {
      this.isLoading = true;
      
      const constraints = (window.constraints = {
				audio: false,
				video: true
			});

			navigator.mediaDevices
				.getUserMedia(constraints)
				.then(stream => {
          this.isLoading = false;
					this.$refs.camera.srcObject = stream;
				})
				.catch(error => {
          this.isLoading = false;
					alert("May the browser didn't support or there is some errors.");
				});
    },
    
    stopCameraStream() {
      let tracks = this.$refs.camera.srcObject.getTracks();
			tracks.forEach(track => {
				track.stop();
			});
    },
    
    takePhoto() {
      if(!this.isPhotoTaken) {
        this.isShotPhoto = true;
        setTimeout(() => {
          this.isShotPhoto = false;
        }, FLASH_TIMEOUT);
      }
      this.isPhotoTaken = !this.isPhotoTaken;
      const context = this.$refs.canvas.getContext('2d');
      context.drawImage(this.$refs.camera, 0, 0, 450, 337.5);
    },
    
    downloadImage() {
      const download = document.getElementById("downloadPhoto");
      const canvas = document.getElementById("photoTaken").toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
      console.log(canvas);
      this.$storage.setUniversal(this.id, canvas);
      window.location = this.back;
    }
  }

}
</script>