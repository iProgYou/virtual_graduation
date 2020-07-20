!function(a){var e={};function t(s){if(e[s])return e[s].exports;var r=e[s]={i:s,l:!1,exports:{}};return a[s].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=a,t.c=e,t.d=function(a,e,s){t.o(a,e)||Object.defineProperty(a,e,{enumerable:!0,get:s})},t.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},t.t=function(a,e){if(1&e&&(a=t(a)),8&e)return a;if(4&e&&"object"==typeof a&&a&&a.__esModule)return a;var s=Object.create(null);if(t.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:a}),2&e&&"string"!=typeof a)for(var r in a)t.d(s,r,function(e){return a[e]}.bind(null,r));return s},t.n=function(a){var e=a&&a.__esModule?function(){return a.default}:function(){return a};return t.d(e,"a",e),e},t.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},t.p="",t(t.s=0)}([function(a,e,t){"use strict";t.r(e);var s=class{constructor(a,e,t=0){this.ctx=a,this.graduates=e,this.currentStudent=t,this.potatSpriteSheet=new Image,this.megamanSpriteSheet=new Image,this.stage=new Image,this.audienceChairs=new Image,this.diploma=new Image,this.aalogo=new Image,this.potatSpriteSheet.src="./dist/assets/potat-sprite-sheet.png",this.megamanSpriteSheet.src="./dist/assets/megaman_sprite_sheet.png",this.stage.src="./dist/assets/pixel_art_stage.png",this.stage.src="./dist/assets/new_stage.png",this.audienceChairs.src="./dist/assets/theatre_chairs.png",this.diploma.src="./dist/assets/diploma.png",this.aalogo.src="./dist/assets/logo.png"}constructStage(){let a=[100,100],e=[50,50];this.interval=setInterval(()=>{this.ctx.drawImage(this.stage,20,50,850,300),this.ctx.drawImage(this.audienceChairs,20,349,850,70),this.ctx.drawImage(this.audienceChairs,20,349,850,130),this.ctx.drawImage(this.megamanSpriteSheet,a[0],a[1],e[0],e[1],80,245,80,80)},100)}nextStudentMoves(a){a.disabled=!0,this.graduates[this.currentStudent].moveAcrossScreen(this,a),this.currentStudent+=1}};var r=[{id:4723,name:"Alvin Zhao",imageUrl:"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/723/medium/Alvin_Zhao_1.JPG?1583202420",occup:"student"},{id:4742,name:"Ben Hafner",imageUrl:"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/742/medium/Ben_Hafner_2.JPG?1583202580",occup:"student"},{id:4733,name:"Brian Wan",imageUrl:"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/733/medium/Brian_Wan_4.JPG?1583203194",occup:"student"},{id:4740,name:"Brittany Hasty",imageUrl:"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/740/medium/Brittany_Hasty_3.JPG?1583204091",occup:"student"},{id:4730,name:"Bryan Linda",imageUrl:"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/730/medium/Bryan_Linda_3.JPG?1583204232",occup:"student"},{id:4726,name:"Charles Coombs Esmail",imageUrl:"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/726/medium/Charles_Combs-Esmail_3.JPG?1583204545",occup:"student"},{id:4751,name:"Chef Pangburn",imageUrl:"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/751/medium/Shaphen_Chef_Pangburn_2.JPG?1583209655",occup:"student"},{id:4717,name:"Daniel Lancaster",imageUrl:"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/717/medium/Daniel_Lancaster_1.JPG?1583205087",occup:"student"},{id:4755,name:"Danny Huang",imageUrl:"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/755/medium/Danny_Huang_4.JPG?1583205253",occup:"student"},{id:4801,name:"Darrick Yong",imageUrl:"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/801/medium/Darrick_Yong_1.JPG?1583205427",occup:"student"},{id:4731,name:"Dias Iskrayev",imageUrl:"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/731/medium/Dias_Iskrayev_2.JPG?1583205548",occup:"student"},{id:4746,name:"Dillon Rice",imageUrl:"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/746/medium/Dillon_Rice_1.JPG?1583205690",occup:"student"},{id:4732,name:"Dorian Izaiah Brown",imageUrl:"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/732/medium/Dorian_Brown_1.JPG?1583205842",occup:"student"},{id:4744,name:"Eddie Rosas",imageUrl:"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/744/medium/Eddie_Rosas_2.JPG?1583205937",occup:"student"},{id:4807,name:"Eric Chen",imageUrl:"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/807/medium/Eric_Chen_1.JPG?1583206121",occup:"student"},{id:4792,name:"Eric Hsieh",imageUrl:"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/792/medium/Eric_Hsieh_3.JPG?1583206209",occup:"student"},{id:4729,name:"Erick Santos",imageUrl:"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/729/medium/Erick_Santos_4.JPG?1583206333",occup:"student"},{id:4711,name:"Eyal Garbi",imageUrl:"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/711/medium/Eyal_Garbi_1.JPG?1583206458",occup:"student"},{id:4750,name:"Glen Park",imageUrl:"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/750/medium/Glen_Park_1.JPG?1583206658",occup:"student"},{id:4793,name:"Grant Kleinman",imageUrl:"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/793/medium/Grant_Kleinman_2.JPG?1583206732",occup:"student"},{id:4810,name:"Hari Sachdeva",imageUrl:"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/810/medium/Hari_Sachdeva_1.JPG?1583206886",occup:"student"},{id:4796,name:"Helena Zarazua",imageUrl:"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/796/medium/Helena_Zarazua_3.JPG?1583207009",occup:"student"},{id:4712,name:"Isaac Yoon",imageUrl:"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/712/medium/Issac_Yoon_4.JPG?1583207228",occup:"student"},{id:4738,name:"Iulia Heinrich",imageUrl:"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/738/medium/Iulia_Heinrich_2.JPG?1583207306",occup:"student"},{id:4721,name:"James Jiang",imageUrl:"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/721/medium/James_Jiang_1.JPG?1583207459",occup:"student"},{id:4805,name:"Jared Lester",imageUrl:"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/805/medium/Jared_Lester_1.JPG?1583207531",occup:"student"},{id:4720,name:"Jason Wintery",imageUrl:"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/720/medium/Jason_Wintery_3.JPG?1583204677",occup:"student"},{id:4713,name:"Javier Castro",imageUrl:"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/713/medium/Javier_Castro_3.JPG?1583207627",occup:"student"},{id:4710,name:"Jenn Huynh",imageUrl:"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/710/medium/Jennifer_Huynh_1.JPG?1583207759",occup:"student"},{id:4724,name:"Joseph Deng",imageUrl:"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/724/medium/Joseph_Deng_4.JPG?1583210390",occup:"student"},{id:4715,name:"Joshua Silva-Roland",imageUrl:"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/715/medium/Joshua_Silva-Roland_3.JPG?1583207880",occup:"student"},{id:4747,name:"Miguel Delacruz",imageUrl:"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/747/medium/Miguel_Delacruz_3.JPG?1583208109",occup:"student"},{id:4716,name:"Michael Murry",imageUrl:"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/716/medium/Michael_Murry_1.JPG?1583208264",occup:"student"},{id:4803,name:"Natalie Chen",imageUrl:"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/803/medium/IMG_4826.JPG?1584409622",occup:"student"},{id:4741,name:"Ngoc Ly",imageUrl:"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/741/medium/Ngoc_Ly_4.JPG?1583208774",occup:"student"},{id:4806,name:"Pedro Siqueira",imageUrl:"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/806/medium/Pedro_Siqueira_1.JPG?1583208880",occup:"student"},{id:4719,name:"Peter Koe",imageUrl:"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/719/medium/Peter_Koe_1.JPG?1583209048",occup:"student"},{id:4734,name:"Rasheeq Ahmed",imageUrl:"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/734/medium/Rasheeq_Ahmed_4.JPG?1583209399",occup:"student"},{id:4718,name:"Ryan Lynch",imageUrl:"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/718/medium/Ryan_Lynch_1.JPG?1583209544",occup:"student"},{id:4743,name:"Steven Touba",imageUrl:"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/743/medium/Steven_Touba_5.JPG?1583209742",occup:"student"},{id:4722,name:"TJ McCabe",imageUrl:"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/722/medium/TJ_McCabe_1.JPG?1583209966",occup:"student"},{id:4756,name:"Wayne Su",imageUrl:"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/756/medium/Wayne_Su_2.JPG?1583210149",occup:"student"},{id:4808,name:"Will Sexton",imageUrl:"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/808/medium/Will_Sexton_1.JPG?1583210215",occup:"student"},{id:4748,name:"Willie Wang",imageUrl:"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/748/medium/Willie_Wang_1.JPG?1583210290",occup:"student"},{id:4752,name:"Zack Barbieri",imageUrl:"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/752/medium/Zachary_Barbieri_1.JPG?1583210462",occup:"student"},{id:4791,name:"Zoe Lin",imageUrl:"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/791/medium/Zoe_Lin_2.JPG?1583210529",occup:"student"}];document.addEventListener("DOMContentLoaded",()=>{let a=document.getElementById("canvas"),e=document.getElementById("next-student"),t=a.getContext("2d"),n=document.getElementById("ol1"),m=document.getElementById("ol2"),i=document.getElementById("punch"),u=document.querySelector("#current-student-button"),o=[];r.forEach(a=>{let e=new class{constructor(a,e,t){this.ctx=a,this.name=e,this.img_url=new Image,this.img_url.src=t}drawGraduate(a,e,t,s){let r=[50,50],n=[[150,0],[200,0],[250,0]],m=[[350,250],[400,250],[450,250]],i=[300,150];this.ctx.clearRect(0,0,1e3,1e3),this.ctx.drawImage(a.stage,20,50,850,300),this.ctx.drawImage(a.audienceChairs,20,349,850,70),this.ctx.drawImage(a.audienceChairs,20,349,850,130),this.scaleGraduateImg(),t[0]>=390&&t[0]<=490?(t[0]<=420?s[0]=s[0]+5:s[0]=s[0]-5,this.ctx.drawImage(a.megamanSpriteSheet,grabSprite[0],grabSprite[1],r[0],r[1],t[0],t[1]-s,80,80)):t[0]>=350&&t[0]<=490?(t[0]<=420?s[0]=s[0]+11:s[0]=s[0]-11,this.ctx.drawImage(a.megamanSpriteSheet,i[0],i[1],r[0],r[1],t[0],t[1]-s,80,80)):t[0]>490?this.ctx.drawImage(a.megamanSpriteSheet,m[e%m.length][0],m[e%n.length][1],r[0],r[1],t[0],t[1],80,80):this.ctx.drawImage(a.megamanSpriteSheet,n[e%n.length][0],n[e%n.length][1],r[0],r[1],t[0],t[1],80,80),t[0]<440?this.ctx.drawImage(a.diploma,440,235,20,20):440===t[0]?a.sound.play():this.ctx.drawImage(a.aalogo,365,55,170,150)}moveAcrossScreen(a,e){clearInterval(a.interval);let t=[80,245],s=document.querySelector("#student");s.innerHTML=this.name;let r=0,n=[0],m=setInterval(()=>{t[0]+=20,r++,this.drawGraduate(a,r,t,n),t[0]>=740&&(clearInterval(m),this.ctx.clearRect(0,0,1e3,1e3),a.constructStage(),e.disabled=!1,s.innerHTML="")},100)}scaleGraduateImg(){let a=Math.max(150/this.img_url.width,170/this.img_url.height),e=450-this.img_url.width/2*a,t=140-this.img_url.height/2*a;this.ctx.drawImage(this.img_url,e,t,this.img_url.width*a,this.img_url.height*a)}jumpAndGrabDiploma(a,e,t){}}(t,a.name,a.imageUrl);o.push(e)});let c=Math.floor(o.length/2);m.start=c+1;for(let a=0;a<c;a++){let e=document.createElement("li");e.textContent=o[a].name,n.appendChild(e)}for(let a=c;a<o.length;a++){let e=document.createElement("li");e.textContent=o[a].name,m.appendChild(e)}let d=new s(t,o);d.sound=i,u.addEventListener("click",()=>{let a=document.querySelector("input");d.currentStudent=parseInt(a.value)-1}),d.constructStage(),e.addEventListener("click",a=>{d.nextStudentMoves(a.target)})})}]);