/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ceremony.js":
/*!*************************!*\
  !*** ./src/ceremony.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Ceremony {\n    constructor(ctx, graduates, currentStudent = 0) {\n        this.ctx = ctx;\n        this.graduates = graduates;\n        this.currentStudent = currentStudent;\n        this.potatSpriteSheet = new Image();\n        this.megamanSpriteSheet = new Image();\n        this.bananacatSpriteSheet = new Image();\n        this.stage = new Image();\n        this.audienceChairs = new Image();\n        this.diploma = new Image();\n        this.aalogo = new Image();\n\n        this.potatSpriteSheet.src = \"./dist/assets/potat-sprite-sheet.png\";\n        this.megamanSpriteSheet.src = \"./dist/assets/megaman_sprite_sheet.png\";\n        this.bananacatSpriteSheet.src = \"./dist/assets/bananacat.png\"\n        this.stage.src = './dist/assets/pixel_art_stage.png';\n        this.stage.src = './dist/assets/new_stage.png';\n        this.audienceChairs.src = \"./dist/assets/theatre_chairs.png\";\n        this.diploma.src = \"./dist/assets/diploma.png\";\n        this.aalogo.src = \"./dist/assets/logo.png\";\n    }\n\n    constructStage() {\n        // potat below\n        // let waitingSprite = [750, 0];\n        // let spriteSize = [375, 500]\n\n        // megaman below\n        // let waitingSprite = [100, 100];\n        // let spriteSize = [50, 50]\n\n        //bananacat\n        let waitingSprite = [-80, -150]\n        let spriteSize = [350, 400];\n\n        this.interval = setInterval(() => {\n            this.ctx.drawImage(this.stage, 20, 50, 850, 300);\n            this.ctx.drawImage(this.audienceChairs, 20, 349, 850, 70)\n            this.ctx.drawImage(this.audienceChairs, 20, 349, 850, 130)\n            // this.ctx.drawImage(this.potatSpriteSheet,\n            this.ctx.drawImage(this.bananacatSpriteSheet,\n                waitingSprite[0], waitingSprite[1],\n                spriteSize[0], spriteSize[1],\n                80, 245,\n                // spriteSize[0], spriteSize[1])\n                80, 80)\n                // clearInterval(this.interval)\n        },100)\n    }\n\n    nextStudentMoves(button) {\n        button.disabled = true\n        this.graduates[this.currentStudent].moveAcrossScreen(this, button)\n        this.currentStudent += 1\n    }\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ceremony);\n\n//# sourceURL=webpack:///./src/ceremony.js?");

/***/ }),

/***/ "./src/graduate.js":
/*!*************************!*\
  !*** ./src/graduate.js ***!
  \*************************/
/*! exports provided: Graduate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Graduate\", function() { return Graduate; });\nclass Graduate {\n    constructor(ctx, name, img_url) {\n        this.ctx = ctx\n        this.name = name\n        this.img_url = new Image()\n        this.img_url.src = img_url\n    }\n\n    drawGraduate(ceremony, i, startingPosition, jumpHeight){\n      // potat\n      // let spriteSize = [375, 500]\n      // let runningSprites = [[0, 0], [375, 0], [0, 0]];\n      // let dashSprites = [[0, 0], [375, 0], [0, 0]];\n      // let jumpSprite = [1125, 0];\n      // let grabSprite = [0, 500];\n\n      // megaman\n      // let spriteSize = [50, 50]\n      // let runningSprites = [[150, 0], [200, 0], [250, 0]];\n      // let dashSprites = [[350, 250], [400, 250], [450, 250]];\n      // let jumpSprite = [300, 150]\n\n      // bananacat\n      let spriteSize = [350, 400];\n      let runningSprites = [[-80, -150], [650,-120], [-80,-150]];\n      let dashSprites = [[-80, -150], [650, -120], [-80, -150]];\n      let flipSprites = [[900,40], [1200,-100], [1500,-100], [1780,-100], [2000, 0], [2300,-100], [2600,-100]]\n\n      this.ctx.clearRect(0, 0, 1000, 1000);\n\n      this.ctx.drawImage(ceremony.stage, 20, 50, 850, 300);\n      this.ctx.drawImage(ceremony.audienceChairs, 20, 349, 850, 70);\n      this.ctx.drawImage(ceremony.audienceChairs, 20, 349, 850, 130);\n\n      this.scaleGraduateImg();\n\n      if (startingPosition[0] >= 390 && startingPosition[0] <= 490) {\n        // grabbing diploma\n        if (startingPosition[0] <= 420) {\n          jumpHeight[0] = jumpHeight[0]; // + 11 for megaman, +5 for potat \n        } else {\n          jumpHeight[0] = jumpHeight[0]-10; // -5 for potat, -11 for megaman\n        }\n        this.ctx.drawImage(\n          ceremony.bananacatSpriteSheet,\n          // grabSprite[0],\n          // grabSprite[1], // potat\n          // jumpSprite[0], jumpSprite[1], // megaman\n          flipSprites[0][0], //banancat\n          flipSprites[0][1], //banancat\n          spriteSize[0],\n          spriteSize[1],\n          startingPosition[0],\n          startingPosition[1] - jumpHeight,\n          80,\n          80\n        );\n      } else if (startingPosition[0] >= 350 && startingPosition[0] <= 490) {\n        if (startingPosition[0] <= 420) {\n          jumpHeight[0] = jumpHeight[0];\n        } else {\n          jumpHeight[0] = jumpHeight[0];\n        }\n\n        this.ctx.drawImage(\n          ceremony.bananacatSpriteSheet,\n          // runningSprites[i % runningSprites.length][0], runningSprites[i % runningSprites.length][1],\n          flipSprites[4][0], //bananacat\n          flipSprites[4][1], //bananacat\n          spriteSize[0],\n          spriteSize[1],\n          startingPosition[0],\n          startingPosition[1] - jumpHeight,\n          80,\n          80\n        );\n      } else if (startingPosition[0] > 490) {\n        // after landing from diploma catch\n        this.ctx.drawImage(\n          ceremony.bananacatSpriteSheet,\n          dashSprites[i % dashSprites.length][0],\n          dashSprites[i % runningSprites.length][1],\n          spriteSize[0],\n          spriteSize[1],\n          startingPosition[0],\n          startingPosition[1],\n          80,\n          80\n        );\n      } else {\n        this.ctx.drawImage(\n          ceremony.bananacatSpriteSheet,\n          runningSprites[i % runningSprites.length][0],\n          runningSprites[i % runningSprites.length][1],\n          spriteSize[0],\n          spriteSize[1],\n          startingPosition[0],\n          startingPosition[1],\n          80,\n          80\n        );\n      }\n\n      if (startingPosition[0] < 440) {\n        this.ctx.drawImage(ceremony.diploma, 440, 235, 20, 20); //draw diploma\n      } else if (startingPosition[0] === 440) {\n        ceremony.sound.play();\n      } else {\n        this.ctx.drawImage(ceremony.aalogo, 365, 55, 170, 150);\n      }\n    }\n\n    moveAcrossScreen(ceremony,button) {\n        clearInterval(ceremony.interval);\n        let startingPosition = [80, 245]\n        let flipSprite = [300, 100] //might get to use this later\n        let studentName = document.querySelector(\"#student\")\n        studentName.innerHTML = this.name\n        let i = 0;\n        let jumpHeight = [0];\n\n        let interval = setInterval(() => {\n            startingPosition[0] += 20\n            i++\n\n            this.drawGraduate(ceremony,i, startingPosition, jumpHeight)\n\n            if (startingPosition[0] >= 740) {\n                clearInterval(interval)\n                this.ctx.clearRect(0, 0, 1000, 1000)\n                ceremony.constructStage()\n                button.disabled = false\n                studentName.innerHTML  = \"\"\n            }\n        }, 100)\n    }\n\n    scaleGraduateImg() {\n        let scale = Math.max(150 / this.img_url.width, 170 / this.img_url.height);\n        let x = 450 - ((this.img_url.width / 2) * scale);\n        let y = 140 - ((this.img_url.height / 2) * scale);\n        this.ctx.drawImage(this.img_url, x, y, this.img_url.width * scale, this.img_url.height * scale);\n    }\n\n    jumpAndGrabDiploma(ceremony, i, startingPosition) {\n\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/graduate.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _graduate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graduate */ \"./src/graduate.js\");\n/* harmony import */ var _ceremony__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ceremony */ \"./src/ceremony.js\");\n/* harmony import */ var _students_03_15_2021__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./students/03-15-2021 */ \"./src/students/03-15-2021.js\");\n\n //there is no reason that these two imports are different. I was messing around with how you can import files\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    let canvas = document.getElementById(\"canvas\")\n    let nextStudentButton = document.getElementById(\"next-student\")\n    let ctx = canvas.getContext(\"2d\")\n    let ol1 = document.getElementById(\"ol1\")\n    let ol2 = document.getElementById(\"ol2\")\n    let punch = document.getElementById(\"punch\");\n    let submitButton = document.querySelector(\"#current-student-button\")\n\n    let graduates = [] \n    _students_03_15_2021__WEBPACK_IMPORTED_MODULE_2__[\"default\"].forEach((student) => {\n        let graduate = new _graduate__WEBPACK_IMPORTED_MODULE_0__[\"Graduate\"](ctx,student.name,student.imageUrl)\n        graduates.push(graduate)\n    })\n\n    let mid = Math.floor(graduates.length/2)\n    ol2.start = mid + 1\n\n    for (let i = 0; i < mid;i++) {\n        let listItem = document.createElement(\"li\")\n        listItem.textContent = graduates[i].name\n        ol1.appendChild(listItem)\n    }\n\n    for (let i = mid; i < graduates.length;i++) {\n        let listItem = document.createElement(\"li\")\n        listItem.textContent = graduates[i].name\n        ol2.appendChild(listItem)\n    }\n\n    let ceremony = new _ceremony__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, graduates)\n    ceremony.sound = punch; // give sound to ceremony instance\n\n    submitButton.addEventListener(\"click\", () => {\n        let input = document.querySelector(\"input\");\n        ceremony.currentStudent = parseInt(input.value) - 1\n    })\n\n    ceremony.constructStage()\n\n\n    nextStudentButton.addEventListener(\"click\", (e) => {\n        ceremony.nextStudentMoves(e.target)\n    })\n\n\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/students/03-15-2021.js":
/*!************************************!*\
  !*** ./src/students/03-15-2021.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst students = [\n  {\n    \"id\": 6290,\n    \"name\": \"Alfredo Ramirez Mendez\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/006/290/medium/20190512_092046_2.jpg?1617378798\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6278,\n    \"name\": \"Anthony Chen\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/0390126871b9f952dd35d11894f3edfe?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6272,\n    \"name\": \"Arianne Macleod\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/006/272/medium/Arianne_MacLeod.jpg?1617217599\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6259,\n    \"name\": \"Brandon Fang\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/2af994d7316af4f3fd441a76869bc287?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6281,\n    \"name\": \"Brenda Jiang\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/006/281/medium/Brenda_Jiang.jpg?1617218113\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6298,\n    \"name\": \"Brian Codington\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/a8134950680a9b9f44ea90917fc52b44?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6266,\n    \"name\": \"Daniel Bogart\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/006/266/medium/Daniel_Bogart.jpg?1617217703\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6269,\n    \"name\": \"David Lai\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/006/269/medium/david_lai.JPG?1617217950\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4641,\n    \"name\": \"David Ross\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/641/medium/david_ross.jpg?1617217884\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6292,\n    \"name\": \"Dennis Yu\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/006/292/medium/dennis_yu.jpg?1617218297\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6270,\n    \"name\": \"Elijah Ally\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/b36e2312348d0ef24a4b7523da06efd8?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6271,\n    \"name\": \"Fuller Le\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/006/271/medium/fuller_le.jpg?1617217987\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6192,\n    \"name\": \"Guocong Pan\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/006/192/medium/Guocong_Pan.JPG?1617293294\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6285,\n    \"name\": \"Hua (Roger) Yang\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/1ded394cad311e9c4ab993e95ad23aa5?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6080,\n    \"name\": \"Ibrahim Ali\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/006/080/medium/ibrahim_ali.jpeg?1617218046\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6294,\n    \"name\": \"Inho (Joe) Lee\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/35dbc422335e6de5b3781639992a3cf3?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6286,\n    \"name\": \"Jacqueline (Jackie) Marsh\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/006/286/medium/Jackie_Marsh.png?1617218352\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6273,\n    \"name\": \"Jennifer Tran\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/56b9f284b1be5912862baf50b68bf037?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6287,\n    \"name\": \"Jonathan Hill\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/10788ade97024222a368f014ff37a02b?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5968,\n    \"name\": \"Jonathan (Jon) Yu\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/968/medium/Jonathan_Yu.jpg?1617217913\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6284,\n    \"name\": \"Josiah Leon\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/006/284/medium/Josiah_Leon.png?1617218502\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6267,\n    \"name\": \"Juan Barba\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/b669e43f9e84ce111575d350e632cfdc?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6283,\n    \"name\": \"Kazuki (Kaz) Debear\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/006/283/medium/kaz_debear.jpg?1617218415\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6078,\n    \"name\": \"Kevin Oconnor\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/006/078/medium/Kevin_OConnor.jpg?1612373962\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6261,\n    \"name\": \"Kevin Yunas\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/006/261/medium/Kevin_Yunas.jpeg?1617218444\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6262,\n    \"name\": \"Linda Xiao\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/006/262/medium/linda_xiao.png?1617218545\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6276,\n    \"name\": \"Mason Saia\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/006/276/medium/mason_saia.jpg?1617218609\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6279,\n    \"name\": \"Matthew Barnes\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/006/279/medium/matthew_barnes.jpg?1617831447\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6181,\n    \"name\": \"Matthew (Matt) Yu\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/966f47c94ac225311808ff46a55ebb23?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6295,\n    \"name\": \"Melissa Flynn\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/006/295/medium/Melissa_Flynn.PNG?1617217565\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6275,\n    \"name\": \"Michael Lau\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/006/275/medium/michael_lau.jpg?1617217736\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6182,\n    \"name\": \"Mohammad Ali (Mohammad) Taghva\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/006/182/medium/Mohammad_Profile_Photo.jpg?1617378768\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6297,\n    \"name\": \"Moustafa Garcia\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/a4ca1adb68c3c6d972de5a0fe7f3e240?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6291,\n    \"name\": \"Nathan Luu\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/4bad2f75dd91d4221bdc74199b778a89?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6264,\n    \"name\": \"Patrick Schramm\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/df693fc691059c444d71bb6052568d61?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6256,\n    \"name\": \"Steven Tran\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/006/256/medium/steven_tran.png?1617217903\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6296,\n    \"name\": \"William Ku\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/006/296/medium/William_Ku.jpg?1617217635\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6277,\n    \"name\": \"Ying Chen\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/006/277/medium/Ying_Chen.jpg?1617293283\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6257,\n    \"name\": \"Zionette Sanchez-Ferrer\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/006/257/medium/zionette_sanchez.jpg?1617378844\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6188,\n    \"name\": \"Adrian Sanchez\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/26130147bf17bbfb52bf3453484569eb?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6260,\n    \"name\": \"Amanda Hinton\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/006/260/medium/amanda_hinton.jpeg?1617217585\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6289,\n    \"name\": \"Bogdan Gordin\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/9ec28a0c5fe6a19c784005834230f305?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6299,\n    \"name\": \"Canberk (John) Varli\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/61e497f4208b5af659f0773f61d94ee0?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6282,\n    \"name\": \"Emily Harris\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/abb1ed2a8b712be688ed6869e8a69661?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6268,\n    \"name\": \"Franco Vera\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/b64de5f9137646eb648e64513f1cde00?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5994,\n    \"name\": \"Kien Nguyen\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/994/medium/kien_nguyen.jpg?1617326853\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6280,\n    \"name\": \"Marcus Quintana\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/414da0acbc3a367f606121c70c83430d?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6274,\n    \"name\": \"Minghuan (Leo) Cao\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/7f3f67c8e42411b2bc8250e63cc1c97e?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6293,\n    \"name\": \"Nicha Thongpanchang\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/eb750731663da26ac9f44d735d6c9899?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6300,\n    \"name\": \"Priyesh Shah\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/042c6b2b45f4fd08c3feb98761fec8b4?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6258,\n    \"name\": \"Zamin Kugshia\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/006/258/medium/zamin_kugshia.jpeg?1617217756\",\n    \"occup\": \"student\"\n  }\n]\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (students);\n\n\n//# sourceURL=webpack:///./src/students/03-15-2021.js?");

/***/ })

/******/ });