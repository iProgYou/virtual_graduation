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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _graduate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graduate */ \"./src/graduate.js\");\n/* harmony import */ var _ceremony__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ceremony */ \"./src/ceremony.js\");\n/* harmony import */ var _students_11_16_2020_sf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./students/11-16-2020-sf */ \"./src/students/11-16-2020-sf.js\");\n\n //there is no reason that these two imports are different. I was messing around with how you can import files\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    let canvas = document.getElementById(\"canvas\")\n    let nextStudentButton = document.getElementById(\"next-student\")\n    let ctx = canvas.getContext(\"2d\")\n    let ol1 = document.getElementById(\"ol1\")\n    let ol2 = document.getElementById(\"ol2\")\n    let punch = document.getElementById(\"punch\");\n    let submitButton = document.querySelector(\"#current-student-button\")\n\n    let graduates = [] \n    _students_11_16_2020_sf__WEBPACK_IMPORTED_MODULE_2__[\"default\"].forEach((student) => {\n        let graduate = new _graduate__WEBPACK_IMPORTED_MODULE_0__[\"Graduate\"](ctx,student.name,student.imageUrl)\n        graduates.push(graduate)\n    })\n\n    let mid = Math.floor(graduates.length/2)\n    ol2.start = mid + 1\n\n    for (let i = 0; i < mid;i++) {\n        let listItem = document.createElement(\"li\")\n        listItem.textContent = graduates[i].name\n        ol1.appendChild(listItem)\n    }\n\n    for (let i = mid; i < graduates.length;i++) {\n        let listItem = document.createElement(\"li\")\n        listItem.textContent = graduates[i].name\n        ol2.appendChild(listItem)\n    }\n\n    let ceremony = new _ceremony__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, graduates)\n    ceremony.sound = punch; // give sound to ceremony instance\n\n    submitButton.addEventListener(\"click\", () => {\n        let input = document.querySelector(\"input\");\n        ceremony.currentStudent = parseInt(input.value) - 1\n    })\n\n    ceremony.constructStage()\n\n\n    nextStudentButton.addEventListener(\"click\", (e) => {\n        ceremony.nextStudentMoves(e.target)\n    })\n\n\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/students/11-16-2020-sf.js":
/*!***************************************!*\
  !*** ./src/students/11-16-2020-sf.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst students = [\n    {\n      \"id\": 5554,\n      \"name\": \"Alexander (Alex) Lang\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/554/medium/alex_lang.jpg?1606929094\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 5794,\n      \"name\": \"Alexey Sergeev\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/794/medium/alexey_sergeev.jpg?1607127861\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 5772,\n      \"name\": \"Andrew Curd\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/772/medium/Screen_Shot_2020-12-01_at_9.49.51_PM.png?1606888216\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 5809,\n      \"name\": \"Annie Xu\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/809/medium/Annie_Xu.jpg?1606943391\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 5775,\n      \"name\": \"Brandon Estano\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/775/medium/Brandon_Estano.jpg?1611852246\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 5768,\n      \"name\": \"Bryce De Guzman\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/768/medium/bryce_deguzman.jpg?1606928931\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 5800,\n      \"name\": \"Brynn Johnson\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/800/medium/brynn_johnson.png?1606888171\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 5779,\n      \"name\": \"Cole Wendling\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/779/medium/cole_wendling.jpg?1606843766\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 5802,\n      \"name\": \"Colin Eckert\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/802/medium/colin_eckert.jpg?1606929111\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 5781,\n      \"name\": \"Dmitrii An\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/781/medium/Dmitrii_An.JPG?1606843779\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 5777,\n      \"name\": \"Dongsoo (Dongsoo/David) Cha\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/777/medium/dongsoo_cha.jpg?1606841727\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 5766,\n      \"name\": \"Edwin Cheng\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/766/medium/edwin_cheng.jpg?1606928999\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 5807,\n      \"name\": \"Edwin Zhou\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/807/medium/Edwin_Zhou.png?1606929126\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 5784,\n      \"name\": \"Fabio Raffaele (Fabio) Bortone\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/784/medium/fabio_raffaele_bortone.jpg?1606843817\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 5767,\n      \"name\": \"Gregory (Ethan) Del Carlo\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/767/medium/gregory_delcarlo.jpeg?1607127966\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 5808,\n      \"name\": \"Hyeyoung (Lena) Shin\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/808/medium/Lena_Shin.jpg?1606943407\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 5565,\n      \"name\": \"Itai Farhi\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/565/medium/itai_farhi.jpg?1607127800\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 5798,\n      \"name\": \"James Koenig\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/798/medium/James_Koenig.jpg?1607127839\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 5787,\n      \"name\": \"Janette Tinoco\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/787/medium/janette_tinoco.JPG?1606929049\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 5786,\n      \"name\": \"Jeffrey Bogart\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/786/medium/jeffrey_bogart.jpg?1606888285\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 5810,\n      \"name\": \"Jonathan Diaz\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/810/medium/Jonathan_Diaz.jpg?1606929177\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 5811,\n      \"name\": \"Joseph Sandoval\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/811/medium/joseph_sandoval.png?1606929160\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 5783,\n      \"name\": \"Joshua Clarence (Josh) Sadsad\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/783/medium/joshua_sadsad.jpg?1606929078\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 5778,\n      \"name\": \"Michael Noble\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/778/medium/michael_noble.JPG?1609725193\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 5765,\n      \"name\": \"Michelle Ha\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/765/medium/michelle_ha.jpg?1606929437\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 5771,\n      \"name\": \"Piaoyang (Roger) Hu\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/771/medium/piaoyang%28roger%29_hu.png?1606929062\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 5542,\n      \"name\": \"Qi Zhu\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/542/medium/qi_zhu_%281%29.jpg?1602196402\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 5124,\n      \"name\": \"Reed Haubenstock\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/124/medium/reed_haubenstock.jpg?1606888313\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 5790,\n      \"name\": \"Samuel (Sam) Dubner\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/790/medium/20201207_174022.jpg?1607391953\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 5774,\n      \"name\": \"Sediqa Fahimi\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/774/medium/sediqa_fahimi.jpg?1606943374\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 5804,\n      \"name\": \"Seth Schoenfeld\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/804/medium/20201229_124542.jpg?1609282291\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 5792,\n      \"name\": \"Timothy (Tim) Kim\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/792/medium/tim_kim.jpeg?1606929487\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 5812,\n      \"name\": \"Trevor Smith\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/812/medium/trevor_smith.jpeg?1607127996\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 5776,\n      \"name\": \"Tului Gantulga\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/776/medium/Tului_Gantulga.png?1607127675\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 5796,\n      \"name\": \"Yu Yan (Kenny) Zeng\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/796/medium/Kenny_Zeng.jpg?1607127823\",\n      \"occup\": \"student\"\n    }\n  ]\n\n  /* harmony default export */ __webpack_exports__[\"default\"] = (students);\n\n//# sourceURL=webpack:///./src/students/11-16-2020-sf.js?");

/***/ })

/******/ });