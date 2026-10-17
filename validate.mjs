import {chromium} from 'playwright';
import assert from 'node:assert/strict';
const browser=await chromium.launch({executablePath:'/usr/bin/chromium',headless:true,args:['--no-sandbox','--no-proxy-server']});
const page=await browser.newPage({viewport:{width:1440,height:1120},deviceScaleFactor:1});
page.setDefaultTimeout(10000); 
const errors=[];page.on('pageerror',e=>errors.push(e.message));const failed=[];page.on('response',r=>{if(r.status()>=400)failed.push([r.url(),r.status()]);});
await page.goto('http://127.0.0.1:3000',{waitUntil:'domcontentloaded',timeout:10000});await page.evaluate(()=>document.fonts.ready.then(()=>true));

assert.equal(await page.evaluate(()=>flowTimeline.duration()),30);
assert.equal(await page.evaluate(()=>flowTimeline.paused()),false,'Autoplay starts');
for(const [name,t,id]of [['intro',1.9,'intro'],['chaos',4.8,'chaos'],['clarity',9.4,'clarity'],['team',14.8,'team'],['motion',19.5,'motion'],['together',24,'together'],['final',28.8,'final']]){await page.evaluate(t=>{flowTimeline.pause().time(t);},t);assert.equal(await page.locator('#'+id).evaluate(e=>getComputedStyle(e).visibility),'visible');await page.screenshot({path:`artifacts/${name}.png`});}
await page.locator('#restart').click();assert.ok(await page.evaluate(()=>flowTimeline.time())<1);assert.equal(await page.evaluate(()=>flowTimeline.paused()),false);
await page.locator('#play').click();assert.equal(await page.evaluate(()=>flowTimeline.paused()),true);
await page.locator('#loop').click();assert.equal(await page.evaluate(()=>flowTimeline.repeat()),0);
await page.locator('#scrubber').fill('18');assert.equal(await page.evaluate(()=>flowTimeline.time()),18);
await page.setViewportSize({width:390,height:844});await page.screenshot({path:'artifacts/mobile.png'});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
if(process.argv.includes('--realtime')){await page.evaluate(()=>{flowTimeline.repeat(0).restart();});await page.waitForFunction(()=>flowTimeline.time()>=30&&flowTimeline.paused(),{},{timeout:40000});console.log('PASS: uninterrupted 30-second playback reached completion.');}
assert.deepEqual(errors,[]);assert.deepEqual(failed,[]);
console.log('PASS: 30-second timeline; autoplay; all 7 scenes; replay, pause, seek and loop; mobile overflow; no JavaScript or HTTP errors.');await browser.close();
