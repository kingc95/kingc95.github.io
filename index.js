!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";function o(e){var t,n,o;return{x:e.x||0,y:e.y||0,rotation:e.rotation||0,opacity:Math.min(1,Math.max(0,null!==(t=e.opacity)&&void 0!==t?t:1)),scaleX:null!==(n=e.scaleX)&&void 0!==n?n:1,scaleY:null!==(o=e.scaleY)&&void 0!==o?o:1,anchorX:e.anchorX||0,anchorY:e.anchorY||0,mask:e.mask||null}}n.d(t,"a",(function(){return o}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),i=n(2);o.renderCanvas(i.Game(i.gameProps),i.options)},function(e,t,n){"use strict";var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(4);t.options={dimensions:"scale-up"},t.gameProps={id:"Game",size:{landscape:{width:1200,height:800},portrait:{width:1200,height:800}},defaultFont:{name:"Courier",size:24}};var r={"1+0.01+1":{newText:"As you process more data things will change.",newSound:"success.mp3"},"2+0.01+1":{newText:"The story will progress. Life will move on.",newSound:"success.mp3"},"4+0.01+1":{newText:"My uncle once told me something. How did it go?",newSound:"success.mp3"},"8+0.01+1":{newText:"LIFE HAPPENS WHEREVER YOU ARE, WHETHER YOU MAKE IT OR NOT.",newSound:"success.mp3"},"16+0.01+1":{newText:"I have always been a fan of that quote. But enough about philosophy...",newSound:"success.mp3"},"17+0.01+1":{newText:"You have massive amounts of data to process for that promotion.",newSound:"success.mp3"},"32+0.01+1":{newText:"Thinking is the hard work, thats probably the reason so few engage in it.",newSound:"success.mp3"},"64+0.01+1":{newText:"Take a break from data processing sometimes and smell the spreadsheets.",newSound:"success.mp3"},"97+0.01+1":{newText:"I think we should spice things up a little bit.",newSound:"success.mp3"},"98+0.01+1":{newText:"Every 100 data you process will allow you to update the processing software.",newSound:"success.mp3"},"99+0.01+1":{newText:"Look at the version number in the top left corner",newSound:"success.mp3"},"100+0.01+1":{newText:"Click the update icon that just appearead below. This will spend all Data!",newSound:"success.mp3"},"1+0.02+1":{newText:"Hey it says version 0.02 now... So something else changed.",newSound:"success.mp3"},"10+0.02+1":{newText:"I guess we just keep going. I am kind of new to this position",newSound:"success.mp3"},"30+0.02+1":{newText:"A wise man can hear profit in the wind he always said.",newSound:"success.mp3"},"50+0.02+1":{newText:"The main reason we need you to process data is I can get a bonus.",newSound:"success.mp3"},"60+0.02+1":{newText:"I might just buy a puppy. Let it sit there next to my case.",newSound:"success.mp3"},"90+0.02+1":{newText:"It seems to me like you are getting the hang of this.",newSound:"success.mp3"},"95+0.02+1":{newText:"Just keep processing that data. I need my puppy.",newSound:"success.mp3"},"100+0.02+1":{newText:"Update for more puppies.",newSound:"success.mp3"},"60+0.03+1":{newText:"So the puppy chewed on my power cord. I am back now. So stop slacking!",newSound:"success.mp3"},"100+0.03+1":{newText:"Make it happn capn! Smash that update button!",newSound:"success.mp3"},"10+0.04+1":{newText:"Look. This version number has to do something.",newSound:"success.mp3"},"20+0.04+1":{newText:"The programmer of the software would not just make a number that does nothing...",newSound:"success.mp3"},"30+0.04+1":{newText:"It has to mean something. Use that sack of mush you call a brain and think.",newSound:"success.mp3"},"40+0.04+1":{newText:"Think...",newSound:"success.mp3"},"50+0.04+1":{newText:"Think...",newSound:"success.mp3"},"60+0.04+1":{newText:"Drink...",newSound:"success.mp3"},"70+0.04+1":{newText:"Look maybe there is something it does and we just can not see it yet.",newSound:"success.mp3"},"100+0.04+1":{newText:"Once more into the breach! You know... Hit the update button again.",newSound:"success.mp3"},"20+0.05+1":{newText:"Okay back to the version number thing. I have an idea.",newSound:"success.mp3"},"40+0.05+1":{newText:"I think we just need to work in bigger increments.",newSound:"success.mp3"},"60+0.05+1":{newText:"Each time you update we only go up .01 versions.",newSound:"success.mp3"},"80+0.05+1":{newText:"And it happens every single frickin time. Like Groundhog day.",newSound:"success.mp3"},"100+0.05+1":{newText:"Write that version number down. Then update. I bet I am right.",newSound:"success.mp3"},"20+0.06+1":{newText:"I will take my winnings from our bet now.",newSound:"success.mp3"},"40+0.06+1":{newText:"What do you mean you have no money. What have you been doing with your paychecks?",newSound:"success.mp3"},"60+0.06+1":{newText:"You did not get a paycheck? Look, I can not hold your hand through this.",newSound:"success.mp3"},"80+0.06+1":{newText:"You need to clear this up with Janice. She does both payroll and HR to save money.",newSound:"success.mp3"},"100+0.06+1":{newText:"You just wait on hold for a bit. Do some updates. She is a pretty busy person.",newSound:"success.mp3"},"20+0.1+1":{newText:"Frickin finally. Okay here she is. The mediator that is mediocre, Janice!",newSound:"success.mp3"},"50+0.1+1":{newText:"Janice: I will look into this. Expect another reply in 3-5 business days.",newSound:"success.mp3"},"60+0.1+1":{newText:"Well... that was a waste of our time. What did you think of the hold music?",newSound:"success.mp3"},"70+0.1+1":{newText:"Its called Return of the Lemming Shepherds. I listen to it when I workout.",newSound:"success.mp3"},"90+0.1+1":{newText:"I like to do weight lifting. Not to brag but I can lift an entire floppy disk.",newSound:"success.mp3"},"100+0.1+1":{newText:"Okay so you can owe me the money later. For now let us focus on the version thingy.",newSound:"newPing.wav"},"20+0.2+1":{newText:"Did you hear that! We got a new sound! And wait... 0.2????",newSound:"newPing.wav"},"50+0.2+1":{newText:"Okay now we are getting somewhere. Each update now grants .1 instead of .01.",newSound:"newPing.wav"},"70+0.2+1":{newText:"Data processing is really simple. You just need to press the button faster somehow.",newSound:"newPing.wav"},"80+0.2+1":{newText:"If you were like me you could just overclock. Open a new tab, write a script.",newSound:"newPing.wav"},"90+0.2+1":{newText:"We need to automate the processing somehow. Im gonna go on Github and look around.",newSound:"newPing.wav"},"100+0.2+1":{newText:"Ill come back when you get to version 1.0. In the meantime please enjoy more muzak.",newSound:"newPing.wav"},"1+1+1":{newText:"Found what I was looking for. But you might not like this...",newSound:"newPing.wav"},"10+1+1":{newText:"In order to speed up the process and automate we need to...",newSound:"newPing.wav"},"20+1+1":{newText:"*Dramatic Pause!*",newSound:"newPing.wav"},"70+1+1":{newText:"Upgrade me. I am the problem. Right now I am just a simple, average, supervisor.",newSound:"newPing.wav"},"80+1+1":{newText:"When I get upgraded to level 2 you will start to gain 1 data every second automatically.",newSound:"newPing.wav"},"90+1+1":{newText:"I know you worry that it will somehow change my personality, and weve grown close.",newSound:"newPing.wav"},"100+1+1":{newText:"I dont think that will happen. Shmaybe. Hit it to upgrade!",newSound:"newPing.wav"},"1+0.01+2":{newText:"Welcome back chief! I am better than ever!",newSound:"success.mp3"},"2+0.01+2":{newText:"You will auto gain (my level - 1) data processed every second. Check it out!",newSound:"success.mp3"},"30+0.01+2":{newText:"It looks like everything else got reset though... Even the version number.",newSound:"success.mp3"},"40+0.01+2":{newText:"And our version increment is gone too! Crap back to .01 each update.",newSound:"success.mp3"},"65+0.01+2":{newText:"I am gonna dig around in my files. Somehow we have to be able to update faster.",newSound:"success.mp3"},"80+0.01+2":{newText:"For now we just keep going. Keep processing that data!",newSound:"success.mp3"},"100+0.01+2":{newText:"Remember to update every 100 data. You cannot gain more than 100 data per version.",newSound:"success.mp3"},"10+0.02+2":{newText:"In case you did not know, our session saves every 30 seconds.",newSound:"success.mp3"},"20+0.02+2":{newText:"You can also save at any time by pressing the save icon in the bottom right corner.",newSound:"success.mp3"},"30+0.02+2":{newText:"Now, I am not recommending this. At anytime you can fully reset everything.",newSound:"success.mp3"},"40+0.02+2":{newText:"Erase all our memories together. The quote from my uncle. My puppy...",newSound:"success.mp3"},"65+0.02+2":{newText:"If some glitch occurs and I can not proceed any further, you know what to do.",newSound:"success.mp3"},"80+0.02+2":{newText:"*sniffle* But you would not do that, right?",newSound:"success.mp3"},"90+0.02+2":{newText:"You have a bright future ahead of you in this company.",newSound:"success.mp3"},"100+0.02+2":{newText:"You just keep going no questions asked.",newSound:"success.mp3"}},s=function(e,t,n,o){n.unshift(e),n.pop(),o.audio(t).play()};t.Game=i.makeSprite({init:function(e){var t=e.updateState,n=e.preloadFiles,i=e.device,r=i.storage.getStore();n({audioFileNames:["maxed.WAV","routine.mp3","newPing.wav","boop.wav","key1.mp3","key2.mp3","key3.mp3","key4.mp3","key5.mp3","success.mp3","holdmusic.mp3"],imageFileNames:["glass.png","icon.png","process.png","update.PNG","upgrade.png","save.png","reset.png"]}).then((function(){t((function(e){return o(o({},e),{loaded:!0})}))}));var s=i.size;return s.width,s.height,s.widthMargin,s.heightMargin,s.deviceWidth,s.deviceHeight,{loaded:!1,version:Number(r.version||"0.01"),currentTicks:0,currentData:Number(r.currentData||"0"),newText:" ",onlineDot:"red",textArray:["Click on the processing icon below to start processing new data.","As you progress through the company you will be able to upgrade your current computational unit.","Hello Chief! Today you start your exciting new career as a data processing clerk."," "," "," "," "," "," "],bottomLineText:"User@Root-Desktop:$ _",lastData:0,updateWidth:0,updateHeight:0,upgradeWidth:0,upgradeHeight:0,versionMult:1,superLevel:Number(r.superLevel||"1"),view:"menu",attempt:0,ticksSave:0,gameRunTimeD:Number(r.gameRunTimeD||"0"),gameRunTimeH:Number(r.gameRunTimeH||"0"),gameRunTimeM:Number(r.gameRunTimeM||"0"),gameRunTimeS:Number(r.gameRunTimeS||"0"),worldPopToProcess:Number(r.worldPopToProcess||"7858037300")}},loop:function(e){var t=e.state,n=e.device;if(!t.loaded)return t;var o=n.inputs.pointer,i=t.worldPopToProcess,a=t.gameRunTimeD,c=t.gameRunTimeH,u=t.gameRunTimeM,d=t.gameRunTimeS,l=t.ticksSave,p=t.textArray,h=t.superLevel,m=t.versionMult,g=t.upgradeWidth,w=t.upgradeHeight,f=t.updateWidth,y=t.updateHeight,v=t.lastData,x=t.newText,S=t.currentData,T=t.onlineDot,b=t.currentTicks,k=t.version,P=t.bottomLineText;if(o.justPressed&&o.x>=-575&&o.x<=-445&&o.y>=-360&&o.y<=-240)if(S<100){switch(Math.floor(5*Math.random())){case 1:n.audio("key1.mp3").play();break;case 2:n.audio("key2.mp3").play();break;case 3:n.audio("key3.mp3").play();break;case 4:n.audio("key4.mp3").play();break;default:n.audio("key5.mp3").play()}S+=1,i-=1}else n.audio("maxed.WAV").play();return S>=100&&o.justPressed&&o.x>=-440&&o.x<=-310&&o.y>=-360&&o.y<=-240&&(S=0,k=(100*k+1*m)/100),S>=100&&k>=1&&o.justPressed&&o.x>=-305&&o.x<=-175&&o.y>=-360&&o.y<=-240&&(h+=1,k=.01,y=0,f=0,w=0,g=0,S=0,m=1,n.audio("routine.mp3").pause()),o.justPressed&&o.x>=400&&o.x<=475&&o.y>=-310&&o.y<=-235&&(n.storage.setStore({version:String(k)}),n.storage.setStore({superLevel:String(h)}),n.storage.setStore({currentData:String(S)}),n.storage.setStore({gameRunTimeD:String(a)}),n.storage.setStore({gameRunTimeH:String(c)}),n.storage.setStore({gameRunTimeM:String(u)}),n.storage.setStore({gameRunTimeS:String(d)}),l=0),o.justPressed&&o.x>=495&&o.x<=570&&o.y>=-310&&o.y<=-235&&n.alert.okCancel("Are you sure you want to delete all of our progress? Our memories? If so... click okay. I guess...",(function(e){e&&(k=.01,y=0,f=0,w=0,g=0,S=0,m=1,h=1,a=0,c=0,u=0,d=0,n.audio("routine.mp3").pause(),n.storage.setStore({version:String(.01)}),n.storage.setStore({superLevel:String(1)}),n.storage.setStore({currentData:String(0)}),n.storage.setStore({gameRunTimeD:String(0)}),n.storage.setStore({gameRunTimeH:String(0)}),n.storage.setStore({gameRunTimeM:String(0)}),n.storage.setStore({gameRunTimeS:String(0)}),l=0)})),l>=1800&&(n.storage.setStore({version:String(k)}),n.storage.setStore({superLevel:String(h)}),n.storage.setStore({currentData:String(S)}),n.storage.setStore({gameRunTimeD:String(a)}),n.storage.setStore({gameRunTimeH:String(c)}),n.storage.setStore({gameRunTimeM:String(u)}),n.storage.setStore({gameRunTimeS:String(d)}),l=0),b<=30?P="User@Root-Desktop:$ ":b<=60&&(P="User@Root-Desktop:$ _"),b<=50?T="red":b<=60&&(T="#0fc000"),b>=60&&((S+=h-1)>100||(i-=h-1),b=0,(d+=1)>59&&(d=0,(u+=1)>59&&(u=0,(c+=1)>23&&(c=0,a+=1)))),i<0&&n.alert.okCancel("You have successfully processed the data of all humans on the Earth. Total time to complete in DD:HH:MM:SS : "+a+":"+c+":"+u+":"+d+". Would you like to submit your score to the leaderboard and reset your game to try for a faster time?",(function(e){e&&(k=.01,y=0,f=0,w=0,g=0,S=0,m=1,a=0,c=0,u=0,d=0,n.audio("routine.mp3").pause(),n.storage.setStore({version:String(.01)}),n.storage.setStore({superLevel:String(1)}),n.storage.setStore({currentData:String(0)}),n.storage.setStore({gameRunTimeD:String(0)}),n.storage.setStore({gameRunTimeH:String(0)}),n.storage.setStore({gameRunTimeM:String(0)}),n.storage.setStore({gameRunTimeS:String(0)}),l=0)})),S!=v&&(.06===k&&100===S&&1===h&&n.audio("holdmusic.mp3").play(),.1===k&&50===S&&1===h&&n.audio("holdmusic.mp3").pause(),.1===k&&S>=100&&1===h&&(m=10),.2===k&&100===S&&1===h&&n.audio("routine.mp3").play(),S>=100?(f=125,y=125):(f=0,y=0),k>=1&&S>=100?(g=125,w=125,f=0,y=0):(g=0,w=0),function(e,t,n,o,i){var a=r[e+"+"+t+"+"+n];a&&s(a.newText,a.newSound,o,i)}(S,k,h,p,n),v=S),S>100&&(S=100.0000001),{loaded:!0,version:k,currentTicks:b+=1,currentData:S,onlineDot:T,bottomLineText:P,newText:x,lastData:v,updateWidth:f,updateHeight:y,upgradeWidth:g,upgradeHeight:w,versionMult:m,superLevel:h,textArray:p,ticksSave:l+=1,gameRunTimeD:a,gameRunTimeH:c,gameRunTimeM:u,gameRunTimeS:d,worldPopToProcess:i}},render:function(e){var t=e.state,n=e.device,o=n.size.height,r=n.size.width,s=n.size.height/1.75,a=n.size.width,c=n.size.height/3,u=n.size.width/-3,d=n.inputs.pointer;return t.loaded?[i.t.rectangle({width:r,height:o,color:"#000000"}),i.t.text({color:"lime",text:"Chief of Data Processing:",y:o/2-25,x:r/-3.5+25,anchorX:0,anchorY:0,font:{name:"Calibri",size:50}}),i.t.text({color:"lime",text:"The Incremental Text Adventure",y:o/2-55,x:r/-3.5+25,anchorX:0,anchorY:0,font:{name:"Calibri",size:30}}),i.t.rectangle({width:2*u,height:75,color:"#0fc000",x:u,y:c,anchorY:0,anchorX:0}),i.t.rectangle({width:40,height:40,color:t.onlineDot,mask:i.mask.circle({radius:20,x:0}),y:c,x:u+-.9*u,anchorX:0,anchorY:0}),i.t.text({color:"white",text:"Company Hyper-Supervisor "+t.superLevel+" - Online",x:1.5*u+25,y:c,anchorX:0,anchorY:0,align:"left"}),i.t.text({color:"lime",text:"Version Number: "+t.version+"\nData Processed: "+t.currentData,x:-.75*u,y:o/2-25,anchorY:0,anchorX:0}),i.t.text({color:"lime",text:"World Pop to Process: "+t.worldPopToProcess,x:-.75*u,y:o/2-50,anchorY:0,anchorX:0}),i.t.rectangle({width:a,height:s,color:"#133337",mask:i.mask.circle({radius:a/1.94,x:0})}),i.t.text({color:"lime",text:t.textArray[8],y:s/-2+444,x:r/-2+20,align:"left"}),i.t.text({color:"lime",text:t.textArray[7],y:s/-2+396,x:r/-2+20,align:"left"}),i.t.text({color:"lime",text:t.textArray[6],y:s/-2+348,x:r/-2+20,align:"left"}),i.t.text({color:"lime",text:t.textArray[5],y:s/-2+300,x:r/-2+20,align:"left"}),i.t.text({color:"lime",text:t.textArray[4],y:s/-2+252,x:r/-2+20,align:"left"}),i.t.text({color:"lime",text:t.textArray[3],y:s/-2+204,x:r/-2+20,align:"left"}),i.t.text({color:"lime",text:t.textArray[2],y:s/-2+156,x:r/-2+20,align:"left"}),i.t.text({color:"lime",text:t.textArray[1],y:s/-2+108,x:r/-2+20,align:"left"}),i.t.text({color:"lime",text:t.textArray[0],y:s/-2+60,x:r/-2+20,align:"left"}),i.t.text({color:"lime",text:t.bottomLineText,y:s/-2+18,x:r/-2+20,align:"left"}),i.t.line({color:"#b9b9b9",thickness:4,path:[[r/-2,s/2],[r/2,s/2]]}),i.t.line({color:"#b9b9b9",thickness:4,path:[[r/-2,s/-2],[r/2,s/-2]]}),i.t.line({color:"#b9b9b9",thickness:4,path:[[r/2-1,o/2],[r/2-1,o/-2]]}),i.t.line({color:"#b9b9b9",thickness:4,path:[[r/-2+1,o/2],[r/-2+1,o/-2]]}),i.t.image({fileName:"glass.png",width:a,height:s,x:0,y:15}),i.t.image({fileName:"process.png",width:125,height:125,x:r/-2+90,y:o/-2+100}),i.t.image({fileName:"update.PNG",width:t.updateWidth,height:t.updateHeight,x:r/-2+225,y:o/-2+100}),i.t.image({fileName:"upgrade.png",width:t.upgradeWidth,height:t.upgradeHeight,x:r/-2+360,y:o/-2+100}),i.t.image({fileName:"save.png",width:75,height:75,x:r/2-160,y:o/-2+125}),i.t.image({fileName:"reset.png",width:75,height:75,x:r/2-65,y:o/-2+125}),i.t.text({color:"lime",text:"Current Ticks: "+t.currentTicks,x:r/2-25,y:o/-2+25,align:"right"}),i.t.text({color:"lime",text:"Pointer X: "+Math.round(d.x),x:r/2-25,y:o/-2+75,align:"right"}),i.t.text({color:"lime",text:"Pointer Y: "+Math.round(d.y),x:r/2-25,y:o/-2+50,align:"right"}),i.t.text({color:"lime",text:"In Game Time: Days: "+t.gameRunTimeD+" Hours: "+t.gameRunTimeH+" Minutes: "+t.gameRunTimeM+" Seconds: "+t.gameRunTimeS,x:r/-2+25,y:o/-2+25,align:"left"})]:[i.t.text({text:"Loading...",color:"black"})]}})},function(e,t,n){"use strict";function o(e,t,n,o){return t.map(t=>{if(n[t]){n[t].globalSpriteIds.add(e);const{data:o}=n[t];return"then"in o?o:Promise.resolve()}const i=o(t).then(e=>{n[t].data=e});return n[t]={globalSpriteIds:new Set([e]),data:i},i})}function i(e,t,n){for(const o in t){const{globalSpriteIds:i}=t[o];i.has(e)&&(1===i.size?(n(o),delete t[o]):t[o].globalSpriteIds.delete(e))}}n.r(t),n.d(t,"mapInputCoordinates",(function(){return m})),n.d(t,"renderCanvas",(function(){return O}));var r=n(0);function s(e,t,n,o,a,u,p,h,m,g){const w=Object(r.a)(t);w.opacity*=h;const{nativeSpriteMap:f,nativeSpriteUtils:y}=g,v=e=>{const t=o(e);return function(e){const t=Math.PI/180,n=-(e.rotation||0)*t;return({x:t,y:o})=>{const i=t-e.x,r=o-e.y,s=i*Math.cos(n)+r*Math.sin(n),a=-i*Math.sin(n)+r*Math.cos(n),c=s/e.scaleX,u=a/e.scaleY;return{x:c+e.anchorX,y:u+e.anchorY}}}(w)(t)},x=n(v),S=e.getSprites(t,x,a,u,p),T=new Set(e.prevChildIds),b=[];if(T.size<e.prevChildIds.length){const t=e.prevChildIds.find((t,n)=>e.prevChildIds.indexOf(t)!==n);throw Error("Duplicate Sprite id "+t)}const k=S.map((function(t){if(!t)return t;if("native"===t.type){b.push(t.props.id),T.delete(t.props.id);const n=f[t.name];if(!n)throw Error(`Cannot find Native Sprite "${t.name}"`);let o=e.childContainers[t.props.id];if(!o||"native"!==o.type){const i={type:"native",state:n.create({props:t.props,parentGlobalId:m,getState:()=>i.state,updateState:e=>{i.state={...i.state,...e}},utils:y}),cleanup:n.cleanup};e.childContainers[t.props.id]=i,o=i}return o.state=n.loop({props:t.props,state:o.state,parentGlobalId:m,utils:y}),null}if("pure"===t.type){b.push(t.props.id),T.delete(t.props.id);let n=e.childContainers[t.props.id];return n&&"pure"===n.type||(n=d(t),e.childContainers[t.props.id]=n),function e(t,n,o,i,s,a){const c=Object(r.a)(n);c.opacity*=a;const u=t.getSprites(n,o,i,s);if("cachedTextures"===u.type)return{id:n.id,baseProps:c,textures:u.textures};const{sprites:p}=u,h=new Set(t.prevChildIds),m=[],g=p.map((function(n){if(!n)return n;if("pure"===n.type){m.push(n.props.id),h.delete(n.props.id);let r=t.childContainers[n.props.id];return r&&"pure"===r.type||(r=d(n),t.childContainers[n.props.id]=r),e(r,n.props,o,i,s,c.opacity)}return n})).filter(l);return h.forEach(e=>{delete t.childContainers[e]}),t.cache=g,t.prevChildIds=m,{id:n.id,baseProps:c,textures:g}}(n,t.props,x.size,y.didResize,u,w.opacity)}if("custom"===t.type){b.push(t.props.id),T.delete(t.props.id);let o=!1,i=e.childContainers[t.props.id];const r=`${m}--${t.props.id}`;return i&&"custom"===i.type||(o=!0,i=c(t,x,e.prevTime,r),e.childContainers[t.props.id]=i),s(i,t.props,n,v,o,u,p,w.opacity,r,g)}return t})).filter(l);return y.didResize=!1,T.forEach(t=>{const n=(e,t)=>{Object.entries(e).forEach(([e,o])=>{if("custom"===o.type){const r=`${t}--${e}`;n(o.childContainers,r),o.loadFilesPromise&&o.loadFilesPromise.then(()=>{var e,t;e=r,t=x.assetUtils,i(e,t.audioElements,t.cleanupAudioFile),i(e,t.imageElements,t.cleanupImageFile)})}else"native"===o.type&&o.cleanup({state:o.state,parentGlobalId:m})})},o=e.childContainers[t];n({[t]:o},m),delete e.childContainers[t]}),e.prevChildIds=b,{id:t.id,baseProps:w,textures:k}}const a=1/60*1e3;function c(e,t,n,i){const{spriteObj:r,props:s}=e,a=[],c=e=>{a.push(e)};let u,d=null,l=null;return r.init&&(u=r.init({props:s,getState:()=>{if(!d)throw Error("Cannot call getState synchronously in init");return d.state},device:t,updateState:c,preloadFiles:async e=>{const n=async function(e,t,n){await Promise.all([...o(e,t.audioFileNames||[],n.audioElements,n.loadAudioFile),...o(e,t.imageFileNames||[],n.imageElements,n.loadImageFile)])}(i,e,t.assetUtils);d?d.loadFilesPromise=n:l=n,await n}})),d={type:"custom",state:u,childContainers:{},prevChildIds:[],prevTime:n,currentLag:0,loadFilesPromise:l,getSprites(e,t,n,o,i){const s=()=>{this.state=a.reduce((e,t)=>t(e),this.state),a.length=0};s(),!n&&r.loop&&(this.state=r.loop({props:e,state:this.state,device:t,updateState:c})),s();let u=r[o];u||(u="renderPXL"===o&&r.renderXL?r.renderXL:r.render);const d=u({props:e,state:this.state,device:t,updateState:c,extrapolateFactor:i});return s(),d}},d}function u(e,t){const n=e.deviceHeight>e.deviceWidth;let o,i=!1;return"portrait"in t?(o=n?t.portrait:t.landscape,i=!0):o=t,o.minHeightXL&&e.deviceHeight>=o.minHeightXL||o.minWidthXL&&e.deviceWidth>=o.minWidthXL?i&&n?"renderPXL":"renderXL":i&&n?"renderP":"render"}function d(e){const{spriteObj:t}=e;return{type:"pure",childContainers:{},prevChildIds:[],getSprites(e,n,o,i){let r=t[i];return r||(r="renderPXL"===i&&t.renderXL?t.renderXL:t.render),this.prevProps&&this.cache&&!t.shouldRerender(this.prevProps,e)&&!o?(this.prevProps=e,{type:"cachedTextures",textures:this.cache}):(this.prevProps=e,{type:"pureSprites",sprites:r({props:e,size:n})})}}}function l(e){return null!=e}let p={keysDown:{},keysJustPressed:{},pointer:{pressed:!1,numberPressed:0,justPressed:!1,justReleased:!1,x:0,y:0}},h=[];function m(e,t){const n=e(t.pointer);return{...t,pointer:{...t.pointer,x:n.x,y:n.y}}}function g(e){return m(e,p)}function w(e){["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"," "].includes(e.key)&&!(e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLInputElement)&&e.preventDefault(),p.keysDown[e.key]=!0,p.keysJustPressed[e.key]=!0}function f(e){delete p.keysDown[e.key]}function y(e,t,n){h.includes(n)||(h=[...h,n]),p.pointer.pressed=!0,p.pointer.numberPressed=h.length,p.pointer.justPressed=!0,p.pointer.x=e,p.pointer.y=t}function v(e,t){p.pointer.x=e,p.pointer.y=t}function x(e,t,n){h=h.filter(e=>e!==n),0===h.length&&(p.pointer.justPressed=!1,p.pointer.pressed=!1),p.pointer.numberPressed=h.length,p.pointer.justReleased=!0,p.pointer.x=e,p.pointer.y=t}function S(e){h=h.filter(t=>t!==e),p.pointer.numberPressed=h.length,0===h.length&&(p.pointer.justPressed=!1,p.pointer.pressed=!1)}function T(){p={keysDown:p.keysDown,keysJustPressed:{},pointer:{...p.pointer,justPressed:!1,justReleased:!1}}}function b(e,{width:t,height:n,widthMargin:o,heightMargin:i,deviceWidth:r,deviceHeight:s},a,c){e.save();const u=Math.min(r/t,s/n),d=t+2*o,l=n+2*i;return e.translate(r/2,s/2),e.scale(u,u),{scale:u,render:t=>{e.clearRect(-r/2/u,-s/2/u,r/u,s/u),e.fillStyle="white",e.fillRect(-d/2,-l/2,d,l),function e(t,n,o,i){const{baseProps:r,textures:s}=t;n.save(),I(n,r),s.forEach(t=>{if("type"in t){const e=M(n);return n.save(),I(n,t.props,r.opacity),function(e,t,n,o){switch(e.type){case"text":return t.text(e.props.font||o,e.props.text,e.props.align,e.props.color),0;case"circle":return t.circle(e.props.radius,e.props.color),0;case"rectangle":return t.rectangle(e.props.width,e.props.height,e.props.color),0;case"line":return t.line(e.props.path,e.props.thickness,e.props.color,e.props.fillColor,e.props.lineCap),0;case"image":return t.image(k(n,e.props.fileName),e.props.width,e.props.height),0;case"spriteSheet":t.spriteSheet(k(n,e.props.fileName),e.props.columns,e.props.rows,e.props.index,e.props.width,e.props.height)}}(t,e,o,i),void n.restore()}e(t,n,o,i)}),n.restore()}(t,e,a,c)}}}const k=(e,t)=>{const n=e[t];if(!n)throw Error(`Image file "${t}" was not preloaded`);if("then"in n.data)throw Error(`Image file "${t}" did not finish loading before it was used`);return n.data},P=Math.PI/180,I=(e,t,n=1)=>{const{x:o,y:i,rotation:r,scaleX:s,scaleY:a,anchorX:c,anchorY:u,opacity:d}=t;e.translate(o,-i),e.rotate(r*P),e.scale(s,a),e.translate(-c,u),e.globalAlpha=d*n,function(e,t){if(!t)return 0;switch(t.type){case"lineMask":{const[[n,o],...i]=t.path;return e.beginPath(),e.moveTo(n,-o),i.forEach(([t,n])=>{e.lineTo(t,-n)}),e.clip(),0}case"circleMask":return e.beginPath(),e.arc(t.x,-t.y,Math.round(t.radius),0,2*Math.PI),e.clip(),0;case"rectangleMask":e.beginPath(),e.rect(t.x-t.width/2,-t.y-t.height/2,t.width,t.height),e.clip()}}(e,t.mask)};const M=e=>({circle(t,n){e.beginPath(),e.arc(0,0,Math.round(t),0,2*Math.PI),e.fillStyle=n,e.fill(),e.closePath()},rectangle(t,n,o){e.fillStyle=o,e.fillRect(-t/2,-n/2,t,n),e.closePath()},line(t,n,o,i,r){if(t.length<2)return;const[[s,a],...c]=t;e.beginPath(),e.moveTo(s,-a),c.forEach(([t,n])=>{e.lineTo(t,-n)}),i&&(e.fillStyle=i,e.fill()),o&&(e.strokeStyle=o,e.lineWidth=n,e.lineCap=r,e.stroke())},text(t,n,o,i){const r=`${t.size}px ${t.name}`;e.font=r,e.textBaseline="middle",e.textAlign=o,e.fillStyle=i,e.fillText(n,0,0)},image(t,n,o){e.drawImage(t,-n/2,-o/2,n,o)},spriteSheet(t,n,o,i,r,s){const a=t.width/n,c=t.height/o,u=i%n,d=Math.floor(i/n)%o;e.drawImage(t,u*a,d*c,a,c,-r/2,-s/2,r,s)}});let E;function L(e,t,n,o){let i;if("portrait"in o){i=t>e?o.portrait:o.landscape}else i=o;const{width:r,height:s,maxWidthMargin:a=0,maxHeightMargin:c=0}=i;if("game-coords"===n)return{width:r,height:s,widthMargin:0,heightMargin:0,deviceWidth:r,deviceHeight:s};const u=r/s;if(u>e/t){const n=e,o=n/u,i=o/s*c,a=Math.min(t,o+2*i);return{width:r,height:s,widthMargin:0,heightMargin:(a-o)/2*(s/o),deviceWidth:n,deviceHeight:a}}{const n=t,o=n*u,i=o/r*a,c=Math.min(e,o+2*i);return{width:r,height:s,widthMargin:(c-o)/2*(r/o),heightMargin:0,deviceWidth:c,deviceHeight:n}}}function R(){const e={};return{start:(t,n)=>{const o=window.setTimeout(()=>{delete e[i],t()},n),i=String(o);return e[i]={timeoutId:o,callback:t,timeStartedMs:Date.now(),timeRemainingMs:n,isPaused:!1},i},pause:t=>{const n=e[t];if(!n||n.isPaused)return;const o=Date.now()-n.timeStartedMs;n.timeRemainingMs-=o,n.isPaused=!0,window.clearTimeout(n.timeoutId)},resume:t=>{const n=e[t];if(!n||!n.isPaused)return;n.timeStartedMs=Date.now(),n.isPaused=!1;const o=window.setTimeout(()=>{delete e[t],n.callback()},n.timeRemainingMs);n.timeoutId=o},cancel:t=>{const n=e[t];n&&(window.clearTimeout(n.timeoutId),delete e[t])}}}function D(e,t){return n=>{if(!t[n])throw Error(`Audio file "${n}" was not preloaded`);const{data:o}=t[n];if("then"in o)throw Error(`Audio file "${n}" did not finish loading before it was used`);const{buffer:i,playState:r}=o;return{getPosition:()=>r?r.isPaused?r.alreadyPlayedTime:e.currentTime-r.startTime:0,play:(s,a=!1)=>{var c;const u=e.createBufferSource();u.buffer=i,u.connect(e.destination);const d=null!==(c=null!=s?s:null==r?void 0:r.alreadyPlayedTime)&&void 0!==c?c:0;u.start(void 0,d),u.loop=a,u.onended=()=>{var e;if(!t[n])return;const{data:o}=t[n];"then"in o||!1!==(null===(e=o.playState)||void 0===e?void 0:e.isPaused)||delete o.playState},r&&!r.isPaused||(o.playState={startTime:e.currentTime-d,sample:u,alreadyPlayedTime:d,isPaused:!1})},pause:()=>{r&&!r.isPaused&&(r.sample.stop(),o.playState={...r,alreadyPlayedTime:e.currentTime-r.startTime,isPaused:!0})}}}}function C(){if("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch)return!0;return window.matchMedia("(touch-enabled),(-webkit-touch-enabled),(-moz-touch-enabled),(-o-touch-enabled),(-ms-touch-enabled)").matches}const j={name:"sans-serif",size:12};function O(e,t){const{dimensions:n="game-coords",canvas:o,nativeSpriteMap:i={},windowSize:r}=t||{},d=o||document.createElement("canvas");o||document.body.appendChild(d);const l=window.PointerEvent?"pointerdown":"touchstart",p=window.PointerEvent?"pointermove":"touchmove",h=window.PointerEvent?"pointerup":"touchend",m=window.PointerEvent?"pointercancel":"touchcancel",g=d.getContext("2d",{alpha:!1}),k=new(window.AudioContext||window.webkitAudioContext);let P=!0,I=!0,M=0,R=!1,D=0,C=0;const O=()=>{document.hidden&&I&&(D=M,k.suspend()),document.hidden||I||(R=!0,setTimeout(()=>{k.suspend(),setTimeout(()=>{k.resume()},75)},75)),I=!document.hidden};document.addEventListener("keydown",e=>{P&&w(e)},!1),document.addEventListener("keyup",e=>{P&&f(e)},!1),document.addEventListener("visibilitychange",O,!1),window.addEventListener("resize",U,!1);const Y=()=>U({didScroll:!0});let A,X,N,W,z,F;window.addEventListener("scroll",Y,!1),document.addEventListener("contextmenu",e=>{e.preventDefault()});const $={didResize:!1,scale:1,gameXToPlatformX:e=>e,gameYToPlatformY:e=>e};function U(t){const o=Boolean(t&&"cleanup"in t&&t.cleanup),i=Boolean(t&&"didScroll"in t&&t.didScroll);if(A&&(g.restore(),document.removeEventListener(l,X),document.removeEventListener(p,N),document.removeEventListener(h,W),document.removeEventListener(m,z),o))return;const s=i&&A?A:function(e,t,n,o){const i=L(e,t,n,o);return E=i,i}((null==r?void 0:r.width)||window.innerWidth,(null==r?void 0:r.height)||window.innerHeight,n,e.props.size);d.width=s.deviceWidth,d.height=s.deviceHeight;const a=e.props.defaultFont||j,c=b(g,s,_,a);F=c.scale,V.ref=c.render,$.gameXToPlatformX=(({canvasOffsetLeft:e,widthMargin:t,scale:n,width:o})=>i=>e+n*(i+o/2+t))({canvasOffsetLeft:d.offsetLeft,width:s.width,widthMargin:s.widthMargin,scale:F}),$.gameYToPlatformY=(({canvasOffsetTop:e,heightMargin:t,scale:n,height:o})=>i=>e-n*(i-o/2-t))({canvasOffsetTop:d.offsetTop,height:s.height,heightMargin:s.heightMargin,scale:F}),$.didResize=!0,$.scale=F;const u=(({canvasOffsetLeft:e,scrollX:t,widthMargin:n,scale:o,width:i})=>r=>(r.clientX-e+t)/o-n-i/2)({canvasOffsetLeft:d.offsetLeft,scrollX:window.scrollX,width:s.width,widthMargin:s.widthMargin,scale:F}),w=(({canvasOffsetTop:e,scrollY:t,heightMargin:n,scale:o,height:i})=>r=>-(r.clientY-e+t)/o+n+i/2)({canvasOffsetTop:d.offsetTop,scrollY:window.scrollY,height:s.height,heightMargin:s.heightMargin,scale:F}),f=(e,t)=>e>s.width/2+s.widthMargin||e<-s.width/2-s.widthMargin||t>s.height/2+s.heightMargin||t<-s.height/2-s.heightMargin;X=e=>{if("changedTouches"in e){P=!1;for(let t=0;t<e.changedTouches.length;t++){const n=e.changedTouches[t],o=u({clientX:n.screenX}),i=w({clientY:n.screenY});f(o,i)||(P=!0,y(o,i,n.identifier))}return}const t=u(e),n=w(e);f(t,n)?P=!1:(P=!0,y(t,n,e.pointerId))},N=e=>{if("changedTouches"in e){for(let t=0;t<e.changedTouches.length;t++){const n=e.changedTouches[t],o=u({clientX:n.screenX}),i=w({clientY:n.screenY});f(o,i)||v(o,i)}return}const t=u(e),n=w(e);f(t,n)||v(t,n)},W=e=>{if("changedTouches"in e){for(let t=0;t<e.changedTouches.length;t++){const n=e.changedTouches[t],o=u({clientX:n.screenX}),i=w({clientY:n.screenY});f(o,i)?S(n.identifier):x(o,i,n.identifier)}return}const t=u(e),n=w(e);f(t,n)?S(e.pointerId):x(t,n,e.pointerId)},z=e=>{if("changedTouches"in e)for(let t=0;t<e.changedTouches.length;t++)S(e.changedTouches[t].identifier);else S(e.pointerId)},document.addEventListener(l,X,!1),document.addEventListener(p,N,!1),document.addEventListener(h,W,!1),document.addEventListener(m,z,!1),A=s}const G={},_={},J=(e,t)=>()=>{throw Error(`Failed to load ${e} file "${t}"`)},B={audioElements:G,imageElements:_,loadAudioFile:e=>async function(e,t){const n=await fetch(t),o=await n.arrayBuffer();return await new Promise((t,n)=>{e.decodeAudioData(o,t,n)})}(k,e).then(e=>({buffer:e})).catch(J("audio",e)),loadImageFile:e=>new Promise((t,n)=>{const o=new Image;o.addEventListener("load",()=>{t(o)}),o.addEventListener("error",n),o.src=e}).catch(J("image",e)),cleanupAudioFile:e=>{const{data:t}=G[e];!("then"in t)&&t.playState&&(t.playState.sample.onended=null,t.playState.sample.disconnect(),t.playState.sample.buffer=null)},cleanupImageFile:()=>null},q={getGetDevice:H(k,L((null==r?void 0:r.width)||window.innerWidth,(null==r?void 0:r.height)||window.innerHeight,n,e.props.size),B)},V={ref:null};U();let K=!1;const Q=()=>{document.removeEventListener("keydown",Q,!1),document.removeEventListener(l,Q,!1),"suspended"===k.state&&k.resume(),k.onstatechange=()=>{"suspended"!==k.state||document.hidden||k.resume()}};document.addEventListener("keydown",Q,!1),document.addEventListener(l,Q,!1);const{initTextures:Z,getNextFrameTextures:ee}=function(e,t,n,o){const i=({x:e,y:t})=>({x:e,y:t}),r=e.getGetDevice(),d=r(i),l=c(n,r(i),0,n.props.id),p=o||n.props.size,h=u(d.size,p);let m=0,g=0,w=s(l,n.props,r,i,!0,h,0,1,n.props.id,t);return{initTextures:w,getNextFrameTextures(o,r){const c=o-m;for(m=o,g+=c;g>=a;){g-=a;const o=g/a,c=e.getGetDevice(),d=u(c(i).size,p);w=s(l,n.props,c,i,!1,d,o,1,n.props.id,t),r()}return w}}}(q,{nativeSpriteMap:i,nativeSpriteUtils:$},e);let te=null;return function e(t){var n;null===(n=V.ref)||void 0===n||n.call(V,t),window.requestAnimationFrame(t=>{K||(null===te&&(te=t-1/60),R&&(R=!1,C+=t-D),M=t,e(ee(t-te-C,T)))})}(Z),{cleanup:function(){d.width=d.width,o||document.body.removeChild(d),K=!0,document.removeEventListener("keydown",w,!1),document.removeEventListener("keyup",f,!1),document.removeEventListener("visibilitychange",O,!1),window.removeEventListener("resize",U,!1),window.removeEventListener("scroll",Y,!1),U({cleanup:!0})},audioElements:G,imageElements:_,audioContext:k}}function H(e,t,n){const o={isTouchScreen:C(),log:console.log,random:Math.random,timer:R(),audio:D(e,n.audioElements),assetUtils:n,network:{get:(e,t)=>{fetch(e).then(e=>e.json()).then(t)},post:(e,t,n)=>{fetch(e,{method:"POST",body:JSON.stringify(t)}).then(e=>e.json()).then(n)},put:(e,t,n)=>{fetch(e,{method:"PUT",body:JSON.stringify(t)}).then(e=>e.json()).then(n)},delete:(e,t)=>{fetch(e,{method:"DELETE"}).then(e=>e.json()).then(t)}},storage:{getStore:()=>{var e;const t={};for(let n=0;n<localStorage.length;n++){const o=localStorage.key(n);o&&(t[o]=null!==(e=localStorage.getItem(o))&&void 0!==e?e:void 0)}return t},setStore:e=>{Object.entries(e).forEach(([e,t])=>{void 0===t?localStorage.removeItem(e):localStorage.setItem(e,t)})}},alert:{ok:(e,t)=>{alert(e),null==t||t()},okCancel:(e,t)=>{t(confirm(e))}},clipboard:{copy:(e,t)=>{navigator.clipboard?navigator.clipboard.writeText(e).then(()=>{t()}).catch(e=>{t(e)}):t(new Error(window.isSecureContext?"Couldn't access clipboard":"Clipboard only available on HTTPS or localhost"))}}};return()=>{const e={...o,size:E||t,now:()=>new Date};return t=>({...e,inputs:g(t)})}}},function(e,t,n){"use strict";n.r(t),n.d(t,"t",(function(){return i})),n.d(t,"makeSprite",(function(){return r})),n.d(t,"makePureSprite",(function(){return s})),n.d(t,"makeNativeSprite",(function(){return a})),n.d(t,"mask",(function(){return c}));var o=n(0);const i={text:e=>({type:"text",props:{testId:e.testId,...Object(o.a)(e),font:e.font,text:e.text,align:e.align||"center",color:e.color}}),circle:e=>({type:"circle",props:{testId:e.testId,...Object(o.a)(e),radius:e.radius,color:e.color}}),rectangle:e=>({type:"rectangle",props:{testId:e.testId,...Object(o.a)(e),width:e.width,height:e.height,color:e.color}}),line:e=>{var t;return{type:"line",props:{testId:e.testId,...Object(o.a)(e),color:e.color,fillColor:e.fillColor,thickness:null!==(t=e.thickness)&&void 0!==t?t:1,lineCap:e.lineCap||"butt",path:e.path}}},image:e=>({type:"image",props:{testId:e.testId,...Object(o.a)(e),fileName:e.fileName,width:e.width,height:e.height}}),spriteSheet:e=>({type:"spriteSheet",props:{testId:e.testId,...Object(o.a)(e),fileName:e.fileName,columns:e.columns,rows:e.rows,index:e.index,width:e.width,height:e.height}})};function r(e){return t=>({type:"custom",spriteObj:e,props:t})}function s(e){return t=>({type:"pure",spriteObj:e,props:t})}function a(e){return t=>({type:"native",name:e,props:t})}const c={circle:e=>({type:"circleMask",radius:e.radius,x:e.x||0,y:e.y||0}),rectangle:e=>({type:"rectangleMask",width:e.width,height:e.height,x:e.x||0,y:e.y||0}),line:e=>({type:"lineMask",path:e.path})}}]);