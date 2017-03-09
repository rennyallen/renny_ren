function createFlames(){for(var e=0;e<numFlames;e++){var a=select(".flame").cloneNode(!0);flameContainer.appendChild(a),TweenMax.set(a,{x:e%2?flamePosXArr[0]:flamePosXArr[1],transformOrigin:"50% 50%",rotation:-45});var r=new TimelineMax({repeat:-1,repeatDelay:(numFlames-1)*flameOffset-2});r.to(a,2,{x:e%2?"-=22":"+=22",scale:10,ease:"return"}).to(a,2,{y:-145,ease:"flameJump"},"-=2").to(a,2,{fill:"#F73B01",ease:Sine.easeOut},"-=2").to(a,2,{alpha:0,ease:Expo.easeIn},"-=2"),flameTl.add(r,e*flameOffset);var s=select(".spark").cloneNode(!0);sparksContainer.appendChild(s),TweenMax.set(s,{x:e%3?flamePosXArr[1]:flamePosXArr[0],transformOrigin:"50% 50%"})}}function pokeFire(){resetSparks();var e=new TimelineMax({onComplete:function(){resetSparks(),sparkTl.play(99)}}).timeScale(2);e.staggerTo(".logs path",.7,{cycle:{rotation:[3,-3],transformOrigin:["2% 100%","98% 100%"]},ease:"return"},.02).to(flameContainer,.7,{scaleY:.8,transformOrigin:"50% 100%",ease:"return"},"-="+e.duration()).staggerTo(".spark",3,{cycle:{x:["-=25","+=15",0,"+=23","-=5","+=71","-=54"],scale:function(){return 30*Math.random()}},ease:"return"},.07,"-=1.2").staggerTo(".spark",3,{cycle:{ease:[SlowMo.ease.config(.2,.2),"sparkFlicker",SlowMo.ease.config(.42,.52)],y:function(){return-(200*Math.random())-200}}},.07,"-="+e.duration()).staggerTo(".spark",3,{cycle:{fill:["#F36B01","#FDBB01"]},ease:Sine.easeIn},.07,"-="+e.duration()).staggerTo(".spark",3,{alpha:0,ease:Expo.easeIn},.07,"-="+e.duration())}function resetSparks(){TweenMax.staggerTo(".spark",0,{cycle:{x:function(e){return e%3?flamePosXArr[1]:flamePosXArr[0]}},y:0,alpha:1,scale:1},0)}var xmlns="http://www.w3.org/2000/svg",xlinkns="http://www.w3.org/1999/xlink",select=function(e){return document.querySelector(e)},selectAll=function(e){return document.querySelectorAll(e)},flameContainer=select(".flameContainer"),sparksContainer=select(".sparksContainer"),flameSVG=select(".flameSVG"),flamePosXArr=[10,-10],flameOffset=.34,sparkOffset=.72,numFlames=50;CustomEase.create("return","M0,0 C0,0 0.162,1 0.4,1 0.918,1 1,0 1,0"),CustomEase.create("sparkFlicker","M0,0 C0.126,0.382 0.216,0.572 0.414,0.482 0.821,0.296 0.984,0.94 1,1"),CustomEase.create("flameJump","M0,0 C0.126,0.382 0.256,0.248 0.406,0.23 0.85,0.176 0.984,0.94 1,1"),TweenMax.set("svg",{visibility:"visible"}),TweenMax.set(".whole",{scale:1.52,transformOrigin:"50% -500%"});var mainTl=new TimelineMax({}),flameTl=new TimelineMax({repeat:0});createFlames();var sparkTl=new TimelineMax({repeat:-1});sparkTl.staggerTo(".spark",2,{cycle:{x:["-=25","+=15",0,"+=23","-=5","+=71","-=54"],scale:function(){return 23*Math.random()}},ease:"return"},sparkOffset).staggerTo(".spark",3,{cycle:{ease:[SlowMo.ease.config(.2,.2),"sparkFlicker",SlowMo.ease.config(.42,.52)],y:function(){return-(200*Math.random())-200}}},sparkOffset,"-="+sparkTl.duration()).staggerTo(".spark",3,{cycle:{fill:["#F36B01","#FDBB01","#ededed"]},ease:Sine.easeIn},sparkOffset,"-="+sparkTl.duration()).staggerTo(".spark",3,{alpha:0,ease:Expo.easeIn},sparkOffset,"-="+sparkTl.duration()),sparkTl.timeScale(1),mainTl.add(flameTl,0),mainTl.add(sparkTl,0),mainTl.timeScale(1.2).seek(97),flameSVG.onclick=pokeFire;