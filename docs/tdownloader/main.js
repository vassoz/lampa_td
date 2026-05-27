"use strict";(()=>{var Pe=Object.defineProperty,Ne=Object.defineProperties;var Oe=Object.getOwnPropertyDescriptors;var Q=Object.getOwnPropertySymbols;var Me=Object.prototype.hasOwnProperty,Ue=Object.prototype.propertyIsEnumerable;var Z=(t,e,a)=>e in t?Pe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,A=(t,e)=>{for(var a in e||(e={}))Me.call(e,a)&&Z(t,a,e[a]);if(Q)for(var a of Q(e))Ue.call(e,a)&&Z(t,a,e[a]);return t},k=(t,e)=>Ne(t,Oe(e));var d=(t,e,a)=>new Promise((o,n)=>{var r=p=>{try{u(a.next(p))}catch(g){n(g)}},i=p=>{try{u(a.throw(p))}catch(g){n(g)}},u=p=>p.done?o(p.value):Promise.resolve(p.value).then(r,i);u((a=a.apply(t,e)).next())});var X={downloads:{ru:"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0438",en:"Downloads"},download:{ru:"\u0421\u043A\u0430\u0447\u0430\u0442\u044C",en:"Download"},"download-button.added":{ru:"\u0422\u043E\u0440\u0440\u0435\u043D\u0442 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D",en:"Torrent added"},"downloads-tab.connected":{ru:"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043E",en:"Connected"},"downloads-tab.disconnected":{ru:"\u041D\u0435\u0442 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F",en:"Disconnected"},"downloads-tab.freespace":{ru:"\u0421\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0435 \u043C\u0435\u0441\u0442\u043E: ",en:"Free space: "},"download-card.time.0":{en:"d",ru:"\u0434"},"download-card.time.1":{en:"h",ru:"\u0447"},"download-card.time.2":{en:"min",ru:"\u043C\u0438\u043D"},"download-card.time.3":{en:"s",ru:"\u0441\u0435\u043A"},"download-card.status.0":{en:"stopped",ru:"\u043F\u0430\u0443\u0437\u0430"},"download-card.status.1":{en:"queued to verify local data",ru:"\u0436\u0434\u0451\u0442 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438"},"download-card.status.2":{en:"verifying local data",ru:"\u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0434\u0430\u043D\u043D\u044B\u0445"},"download-card.status.3":{en:"queued to download",ru:"\u0436\u0434\u0451\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438"},"download-card.status.4":{en:"downloading",ru:"\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430"},"download-card.status.5":{en:"queued to seed",ru:"\u0436\u0434\u0451\u0442 \u0440\u0430\u0437\u0434\u0430\u0447\u0438"},"download-card.status.6":{en:"seeding",ru:"\u0440\u0430\u0437\u0434\u0430\u0451\u0442\u0441\u044F"},"download-card.status.7":{en:"isolated",ru:"\u043D\u0435\u0442 \u043F\u0438\u0440\u043E\u0432"},"download-card.status.8":{en:"stalled",ru:"\u043F\u0440\u043E\u0441\u0442\u0430\u0438\u0432\u0430\u0435\u0442"},"download-card.status.9":{en:"error",ru:"\u043E\u0448\u0438\u0431\u043A\u0430"},"download-card.status.10":{en:"allocating",ru:"\u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u043C\u0435\u0441\u0442\u0430"},"download-card.status.11":{en:"moving",ru:"\u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u0435"},"download-card.status.12":{en:"unknown",ru:"\u043D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E"},"download-card.status.13":{en:"initializing",ru:"\u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"},"download-card.status.14":{en:"completed",ru:"\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E"},"download-card.size.0":{en:"B",ru:"\u0411"},"download-card.size.1":{en:"KB",ru:"\u041A\u0411"},"download-card.size.2":{en:"MB",ru:"\u041C\u0411"},"download-card.size.3":{en:"GB",ru:"\u0413\u0411"},"download-card.size.4":{en:"TB",ru:"\u0422\u0411"},"actions.title":{ru:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F",en:"Actions"},"actions.open":{ru:"\u0412\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0441\u0442\u0438",en:"Play"},"actions.open-card":{ru:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443 \u0444\u0438\u043B\u044C\u043C\u0430",en:"Open movie card"},"actions.select-file":{ru:"\u0424\u0430\u0439\u043B\u044B:",en:"Files:"},"actions.pause":{ru:"\u041F\u0430\u0443\u0437\u0430",en:"Pause"},"actions.resume":{ru:"\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C",en:"Resume"},"actions.hide":{ru:"\u0421\u043A\u0440\u044B\u0442\u044C",en:"Hide"},"actions.delete":{ru:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C",en:"Delete"},"actions.delete-with-file":{ru:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0442\u043E\u0440\u0440\u0435\u043D\u0442 \u0438 \u0444\u0430\u0439\u043B",en:"Delete torrent and file"},"actions.delete-torrent":{ru:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0442\u043E\u0440\u0440\u0435\u043D\u0442",en:"Delete torrent"},"actions.delete-torrent-keep-file":{ru:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0442\u043E\u0440\u0440\u0435\u043D\u0442, \u043D\u043E \u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0444\u0430\u0439\u043B",en:"Delete torrent but keep file"},"background-worker.connection-success":{ru:"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043A \u0441\u0435\u0440\u0432\u0435\u0440\u0443 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043E",en:"Connection to server successfully established"},"background-worker.error-detected":{ru:"\u041E\u0431\u043D\u0430\u0440\u0443\u0436\u0435\u043D\u0430 \u043E\u0448\u0438\u0431\u043A\u0430. \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 \u0432 \u043A\u043E\u043D\u0441\u043E\u043B\u0438",en:"An error has been detected. See console for details"}};var y=`<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="4 4 16 16">
    <path fill="currentcolor" d="M17.71,12.71a1,1,0,0,0-1.42,0L13,16V6a1,1,0,0,0-2,0V16L7.71,12.71a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.3,4.29A2,2,0,0,0,12,19h0a2,2,0,0,0,1.4-.59l4.3-4.29A1,1,0,0,0,17.71,12.71Z" />
</svg>`;var s={type:"other",version:"2.5.1",author:"https://github.com/kvart714",name:"Torrent Downloader",description:"qBitTorrent Web API client",component:"t-downloader"};var ee=s.component+".torrents.data.v2",w=class{static getData(){return this.data}static getMovie(e){let a=this.data.torrents.filter(o=>o.id===e);return a.length>0?a.reduce((o,n)=>o.percentDone<n.percentDone?o:n):null}static getByHash(e){var a;return(a=this.data.torrents.find(o=>o.hash===e))!=null?a:null}static ensureMovie(e){let a=this.data.torrents.filter(o=>o.externalId===e.externalId);return a.length>0?a.reduce((o,n)=>o.percentDone<n.percentDone?o:n):e}static setData(e){return d(this,null,function*(){this.data=e,Lampa.Storage.set(ee,this.data)})}};w.data=Lampa.Storage.get(ee,{torrents:[],info:{freeSpace:0}});var te=`<div class="selector download-card full-start__button d-updatable" id="download-card-{id}">
  <div class="download-card__file-info">
    <span class="file-name">
      <span data-key="fileName">{fileName}</span>
    </span>
    <span class="speed">
      <span data-key="speed">{speed}</span>
    </span>
  </div>
  <div class="download-card__progress-bar">
    <div class="download-card__progress-bar-progress" style="width: {percent}"></div>
  </div>
  <div class="download-card__stats">
    <span class="downloaded">
      <span data-key="downloadedSize">{downloadedSize}</span> / 
      <span data-key="totalSize">{totalSize}</span>
    </span>
    <span class="percent">
      <span data-key="percent">{percent}</span>
    </span>
    <span class="eta">
      <span data-key="eta">{eta}</span>
    </span>
  </div>
</div>
`;var ae=`.download-card {
  all: unset;
  display: block;
  width: auto;
  max-width: 450px;
  height: auto;
  margin: 0;
  margin-top: 0.75em;
  padding: 0.75em;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  transition: background-color 0.3s;
  border-radius: 1em;
}
.download-card__file-info {
  display: flex;
  margin-bottom: 0.5em;
}
.download-card__file-info .file-name, .download-card__file-info .speed {
  font-size: 1.5em;
}
.download-card__file-info .file-name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 1em;
}
.download-card__progress-bar {
  height: 6px;
  background: #ddd;
  border-radius: 6px;
  overflow: hidden;
  margin-top: 0.7em;
  margin-bottom: 0.5em;
}
.download-card__progress-bar-progress {
  height: 100%;
  background: linear-gradient(90deg, #4a90e2, #357ab8);
  transition: width 0.5s ease;
}
.download-card__stats {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  font-size: 1.1em;
}
.download-card__stats .speed {
  position: absolute;
  top: 0;
  right: 0;
  font-size: inherit;
}
.download-card__stats .percent {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: inherit;
}
.download-card__stats .downloaded {
  text-align: left;
  font-size: inherit;
}
.download-card__stats .eta {
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: inherit;
}`;function _(...t){console.log(s.name,...t)}function oe(...t){console.warn(s.name,...t)}var ne=s.component+".movieinfo.data.v4",v=class{static getMovieInfo(e){if(!e.id)return null;let a=`${e.type}_${e.id}`;return this.memoryCache[a]?this.memoryCache[a]:(this.requestedIds.has(a)||(this.requestedIds.add(a),this.loadContentInfo(e.id,e.type).then(o=>{if(o){this.memoryCache[a]=o,this.diskCache[a]=o,Lampa.Storage.set(ne,this.diskCache);return}})),this.diskCache[a]||null)}static loadContentInfo(e,a,o=!0){return d(this,null,function*(){let n=Lampa.Utils.addUrlComponent(Lampa.TMDB.api(`${a}/${e}?email=`),`api_key=${Lampa.TMDB.key()}&language=en&certification_country=RU&certification.lte=18`);try{let r=yield fetch(n);if(r.ok){let i=yield r.json();if(i!=null&&i.title||i!=null&&i.name)return i}else if(o){_(`Failed to load '${a}_${e}', status: ${r.status}. Trying fallback type.`);let i=a==="movie"?"tv":"movie";return yield this.loadContentInfo(e,i,!1)}}catch(r){oe(`Failed to load ${a} info for id ${e}:`,r)}return null})}};v.requestedIds=new Set,v.diskCache=Lampa.Storage.get(ne,{}),v.memoryCache={};var c={STOPPED:0,CHECK_PENDING:1,CHECKING:2,DOWNLOAD_PENDING:3,DOWNLOADING:4,SEED_PENDING:5,SEEDING:6,ISOLATED:7,STALLED:8,ERROR:9,ALLOCATING:10,MOVING:11,UNKNOWN:12,INITIALIZATION:13};function se(t){switch(t){case"allocating":return c.ALLOCATING;case"checkingDL":case"checkingUP":case"checkingResumeData":return c.CHECKING;case"queuedDL":return c.DOWNLOAD_PENDING;case"queuedUP":return c.SEED_PENDING;case"downloading":case"forcedMetaDL":return c.DOWNLOADING;case"uploading":case"forcedUP":return c.SEEDING;case"pausedDL":case"pausedUP":case"stoppedDL":case"stoppedUP":return c.STOPPED;case"stalledDL":case"stalledUP":return c.STALLED;case"missingFiles":return c.ISOLATED;case"moving":return c.MOVING;case"error":return c.ERROR;case"metaDL":case"forcedDL":return c.INITIALIZATION;default:return c.UNKNOWN}}function S(t,e=2){if(t===0)return"0";let a=1024,o=e<0?0:e,n=Math.floor(Math.log(t)/Math.log(a));return parseFloat((t/Math.pow(a,n)).toFixed(o))+" "+Lampa.Lang.translate(`download-card.size.${n}`)}function Ke(t){let e=Lampa.Lang.translate("download-card.time.3");return`${S(t)}/${e}`}function Be(t){let e=Math.floor(t/86400),a=Math.floor(t%86400/3600),o=Math.floor(t%3600/60),n=Math.floor(t%60);return[e,a,o,n].map((i,u)=>i?i+Lampa.Lang.translate(`download-card.time.${u}`):null).filter(Boolean).slice(0,2).join(" ")}function We(t){let e=new Date(t||"");return isNaN(e.getTime())?"":e.getFullYear()}function L(t){let e=v.getMovieInfo(t),a=U[Lampa.Storage.get(R)]||U[1];return{id:t.id+"_"+t.externalId,torrentName:t.name,title:(e==null?void 0:e.title)||(e==null?void 0:e.name)||(t.status===c.INITIALIZATION?"Initialization":t.name),poster:e!=null&&e.poster_path?Lampa.TMDB.image(`t/p/${a}${e.poster_path}`):"",year:We((e==null?void 0:e.release_date)||(e==null?void 0:e.first_air_date)),fileName:e!=null&&e.title||e!=null&&e.name?t.name:"",percent:(100*t.percentDone).toFixed(2)+"%",speed:t.speed>0?Ke(t.speed):"",downloadedSize:S(t.percentDone*t.totalSize),totalSize:S(t.totalSize),eta:t.status===c.DOWNLOADING?Be(t.eta):t.status===c.STALLED&&t.percentDone===1?Lampa.Lang.translate("download-card.status.14"):Lampa.Lang.translate(`download-card.status.${t.status}`),status:t.status===c.DOWNLOADING?"downloading":t.percentDone===1?"completed":"paused",seeders:`${t.seeders||0} (${t.activeSeeders||0})`}}var re=s.component+".torrents.data.views.",I=class t{static getViews(e){return Lampa.Storage.get(re+e.externalId)}static rememberView(e,a){let o=t.getViews(e)||{};o.last=a,o[a]=!0,Lampa.Storage.set(re+e.externalId,o)}};function z(t,e,a){return d(this,null,function*(){let o=l.getClient(),n=yield o.getFiles(e),i=`${Lampa.Storage.field(K)||o.url}/downloads/${e.path}/`;if(n.length<1)throw new Error("No files found in torrent");if(n.length===1&&ie({title:a||e.name,url:i+n[0].name,torrent_hash:e.hash}),n.length>1){let h,u=I.getViews(e),g=n.sort((m,C)=>m.name.localeCompare(C.name,void 0,{numeric:!0,sensitivity:"base"})).map((m,C)=>({title:m.name.split(/[\\/]/).pop()||m.name,name:m.name,url:i+m.name,picked:u[m.name],selected:u.last===m.name,torrent_hash:e.hash}));Lampa.Select.show({title:Lampa.Lang.translate("actions.select-file"),items:g,onSelect(m){return d(this,null,function*(){I.rememberView(e,m.name),ie({playlist:g,title:a||e.name,url:m.url,torrent_hash:e.hash})})},onBack:function(){Lampa.Controller.toggle(t)}})}})}function ie(t){var e;_(`Player request ${t.url}`,t),Lampa.Player.play(t),Lampa.Player.playlist((e=t.playlist)!=null?e:[])}function F(t){t.status===c.STOPPED?l.getClient().startTorrent(t):l.getClient().stopTorrent(t)}function T(t,e,a){e=w.ensureMovie(e),Lampa.Select.show({title:Lampa.Lang.translate("actions.title"),items:[{title:Lampa.Lang.translate("actions.open"),onSelect(){return d(this,null,function*(){z(t,e,a)})}},...t==="downloads-tab"&&e.id?[{title:Lampa.Lang.translate("actions.open-card"),onSelect(){return d(this,null,function*(){Lampa.Activity.push({component:"full",id:e.id,method:e.type,card:e})})}}]:[],{title:e.status===c.STOPPED?Lampa.Lang.translate("actions.resume"):Lampa.Lang.translate("actions.pause"),onSelect(){F(e),Lampa.Controller.toggle(t)}},{title:Lampa.Lang.translate("actions.hide"),onSelect(){l.getClient().hideTorrent(e),$(`.downloads-tab__item[data-id="${e.id}_${e.externalId}"]`).remove(),Lampa.Controller.toggle(t)}},{title:Lampa.Lang.translate("actions.delete"),subtitle:Lampa.Lang.translate("actions.delete-with-file"),onSelect(){l.getClient().removeTorrent(e,!0),$(`.downloads-tab__item[data-id="${e.id}_${e.externalId}"]`).remove(),Lampa.Controller.toggle(t)}},{title:Lampa.Lang.translate("actions.delete-torrent"),subtitle:Lampa.Lang.translate("actions.delete-torrent-keep-file"),onSelect(){l.getClient().removeTorrent(e,!1),$(`.downloads-tab__item[data-id="${e.id}_${e.externalId}"]`).remove(),Lampa.Controller.toggle(t)}}],onBack:function(){Lampa.Controller.toggle(t)}})}function x(t,e,a){var n;e=(n=w.getByHash(e.hash))!=null?n:e;let o=Lampa.Storage.field(Y);o==1?e.percentDone===1?z(t,e,a):F(e):o==2?z(t,e,a):o==3?F(e):T(t,e,a)}function B(t,e){let a=$(Lampa.Template.get("download-card",L(t)));$(".full-start-new__right").append(a),a.on("hover:enter",()=>{x("full_start",t,(e==null?void 0:e.title)||(e==null?void 0:e.original_title))}),a.on("hover:long",()=>{T("full_start",t,(e==null?void 0:e.title)||(e==null?void 0:e.original_title))})}function de(t){let e=L(t),a=document.getElementById(`download-card-${e.id}`);if(a){for(let o in e){let n=a.querySelector(`[data-key="${o}"]`);n&&(n.textContent=e[o])}a.querySelector(".download-card__progress-bar-progress").setAttribute("style",`width: ${e.percent};`)}}function le(){Lampa.Template.add("download-card",te),$("body").append(`<style>${ae}</style>`),Lampa.Listener.follow("full",t=>{if(t.type==="complite"){let e=w.getMovie(t.data.movie.id);e&&B(e,t.data.movie)}})}var ce=`<div class="download-circle d-updatable download-circle-{status}-{id}">
    <div class="download-circle__circle">
        <svg class="download-circle__circle-svg" xmlns="http://www.w3.org/2000/svg">
            <circle
                fill="rgba(0, 0, 0, 0.60)"
                r="17px"
                cx="20"
                cy="20"
            ></circle>
            <circle
                class="download-circle__full_{status}"
                stroke-width="2px"
                r="12px"
                cx="20"
                cy="20"
            ></circle>
            <circle
                class="download-circle__partial_{status}"
                fill="none"
                stroke="#fff"
                stroke-width="2px"
                stroke-dasharray="100"
                stroke-dashoffset="{progress}"
                transition="stroke-dasharray 0.7s linear 0s"
                r="12px"
                cx="20"
                cy="20"
                pathlength="100"
            ></circle>
        </svg>
    </div>
    <div class="download-circle__down-arrow">
        <svg
            class="download-circle__down-arrow-svg_{status}"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M17.71,12.71a1,1,0,0,0-1.42,0L13,16V6a1,1,0,0,0-2,0V16L7.71,12.71a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.3,4.29A2,2,0,0,0,12,19h0a2,2,0,0,0,1.4-.59l4.3-4.29A1,1,0,0,0,17.71,12.71Z"
            />
        </svg>
        <svg
            class="download-circle__down-arrow-svg-animated_{status}"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M17.71,12.71a1,1,0,0,0-1.42,0L13,16V6a1,1,0,0,0-2,0V16L7.71,12.71a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.3,4.29A2,2,0,0,0,12,19h0a2,2,0,0,0,1.4-.59l4.3-4.29A1,1,0,0,0,17.71,12.71Z"
            />
        </svg>
    </div>
</div>
`;var pe=`.download-complete,
.download-circle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(2);
}
.download-complete__circle,
.download-circle__circle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  position: relative;
}
.download-complete__circle-svg,
.download-circle__circle-svg {
  transform: rotate(-90deg);
  display: flex;
  justify-content: center;
  align-items: center;
}
.download-complete__full_in-progress,
.download-circle__full_in-progress {
  fill: none;
  stroke: rgba(255, 255, 255, 0.5);
}
.download-complete__full_complete,
.download-circle__full_complete {
  fill: white;
  stroke: none;
}
.download-complete__partial_complete,
.download-circle__partial_complete {
  display: none;
}
.download-complete__partial_in-progress,
.download-circle__partial_in-progress {
  transition: stroke-dashoffset 0.5s ease;
}
.download-complete__down-arrow,
.download-circle__down-arrow {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
}
.download-complete__down-arrow svg,
.download-circle__down-arrow svg {
  width: 24px;
  height: 24px;
}
.download-complete__down-arrow-svg_in-progress,
.download-circle__down-arrow-svg_in-progress {
  fill: rgba(255, 255, 255, 0.5);
}
.download-complete__down-arrow-svg_complete,
.download-circle__down-arrow-svg_complete {
  fill: "white";
}
.download-complete__down-arrow-svg-animated_in-progress,
.download-circle__down-arrow-svg-animated_in-progress {
  position: absolute;
  clip-path: inset(0 0 100% 0);
  animation: pulseColor 2s ease-out infinite;
}
.download-complete__down-arrow-svg-animated_complete,
.download-circle__down-arrow-svg-animated_complete {
  display: none;
}

@keyframes pulseColor {
  0% {
    clip-path: inset(0 0 100% 0);
  }
  30% {
    clip-path: inset(0 0 0 0);
  }
  70% {
    clip-path: inset(0 0 0 0);
  }
  100% {
    clip-path: inset(100% 0 0 0);
  }
}`;function me(t,e){let a=$(e);if(!a.find(".download-circle").length){let o=Lampa.Template.get("download-circle",{id:t.id,status:t.percentDone===1?"complete":"in-progress",progress:100*(1-t.percentDone)});a.find(".card__vote").after(o)}}function Ge(t,e){let a=w.getMovie(t);a&&me(a,e)}function ue(t){let e=document.querySelectorAll(`.download-circle-in-progress-${t.id}`);e.length&&e.forEach(a=>{if(t.percentDone===1){let o=a.parentElement;a.remove(),me(t,o)}else{let o=a.querySelector(".download-circle__partial_in-progress");o==null||o.setAttribute("stroke-dashoffset",`${100*(1-t.percentDone)}`)}})}function fe(){Lampa.Template.add("download-circle",ce),$("body").append(`<style>${pe}</style>`),Lampa.Listener.follow("line",t=>{var e,a;if(t.type==="append")for(let o of t.items)(e=o==null?void 0:o.data)!=null&&e.id&&Ge((a=o==null?void 0:o.data)==null?void 0:a.id,o.card)})}var we=`<div class="downloads-tab__item downloads-tab__item--mini selector {status}" data-id="{id}">
  <div class="downloads-tab__main">
    <div class="downloads-tab__file"><span data-field="torrentName">{torrentName}</span></div>

    <div class="downloads-tab__footer">
      <div class="downloads-tab__meta-top">
        <div class="downloads-tab__meta-left">
          <span class="downloads-tab__meta-text" data-field="percent">{percent}</span>
          <span> \u2022 </span>
          <span class="downloads-tab__meta-text" data-field="seeders">{seeders}</span>
        </div>
        <span class="downloads-tab__speed"><span data-field="speed">{speed}</span></span>
      </div>

      <div class="downloads-tab__progress-wrapper">
        <div class="downloads-tab__progress-fill" style="width: {percent};"></div>
      </div>

      <div class="downloads-tab__meta-bottom">
        <div class="downloads-tab__sizes">
          <span class="downloads-tab__meta-downloaded" data-field="downloadedSize">{downloadedSize}</span>
          <span class="downloads-tab__meta-slash"> / </span>
          <span class="downloads-tab__meta-total" data-field="totalSize">{totalSize}</span>
        </div>
        <span class="downloads-tab__eta" data-field="eta">{eta}</span>
      </div>
    </div>
  </div>
</div>
`;var ge=`<div class="downloads-tab__item selector {status}" data-id="{id}">
  <div class="downloads-tab__poster" style="background-image: url('{poster}')"></div>
  <div class="downloads-tab__main">
    <div class="downloads-tab__movie"><span data-field="movieTitle">{title}</span></div>
    <div class="downloads-tab__year"><span data-field="year">{year}</span></div>
    <div class="downloads-tab__file"><span data-field="fileName">{fileName}</span></div>

    <div class="downloads-tab__footer">
      <div class="downloads-tab__meta-top">
        <div class="downloads-tab__meta-left">
          <span class="downloads-tab__meta-text" data-field="percent">{percent}</span>
          <span> \u2022 </span>
          <span class="downloads-tab__meta-text" data-field="seeders">{seeders}</span>
        </div>
        <span class="downloads-tab__speed"><span data-field="speed">{speed}</span></span>
      </div>

      <div class="downloads-tab__progress-wrapper">
        <div class="downloads-tab__progress-fill" style="width: {percent};"></div>
      </div>

      <div class="downloads-tab__meta-bottom">
        <div class="downloads-tab__sizes">
          <span class="downloads-tab__meta-downloaded" data-field="downloadedSize">{downloadedSize}</span>
          <span class="downloads-tab__meta-slash"> / </span>
          <span class="downloads-tab__meta-total" data-field="totalSize">{totalSize}</span>
        </div>
        <span class="downloads-tab__eta" data-field="eta">{eta}</span>
      </div>
    </div>
  </div>
</div>
`;var he=`<div class="downloads-tab__list d-updatable">
  <div class="downloads-tab__header-title-wrapper">
    <div class="downloads-tab__header-title">{server}</div>
    <div class="downloads-tab__header-size">{freeSpace}</div>
  </div>
  <div class="downloads-tab__rows"></div>
</div>
`;var _e=`@charset "UTF-8";
.downloads-tab__list {
  --color-text-primary: #dbdbdb;
  --color-text-muted: #b1b1b1;
  --fs-header: 1.4em;
  --fs-title: 1.6em;
  --fs-file: 1em;
  --fs-body: 1.2em;
  --sp-after-title: 0.3em;
  --sp-between-text-and-progress: 0.5em;
  --accent-violet: #b67dff;
  --accent-violet-light: #c698ff;
  --card-bg-color: 24, 24, 24;
  --card-bg-alpha: 0.8;
  --card-bg-alpha-hover: 0.6;
  --poster-scale-hover: 1.04;
  color: var(--color-text-muted);
  padding: 1em;
}
.downloads-tab__list .downloads-tab__header-title-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
  font-size: var(--fs-header);
  font-weight: 700;
  color: var(--color-text-primary);
}
.downloads-tab__list .downloads-tab__rows {
  display: flex;
  gap: 1em;
  align-items: flex-start;
}
.downloads-tab__col {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1em;
}
.downloads-tab__group {
  display: flex;
  flex-direction: column;
  gap: 0.6em;
}
.downloads-tab__group > .downloads-tab__item:first-child {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.downloads-tab__group > .downloads-tab__item--mini {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.downloads-tab__group > .downloads-tab__item--mini:last-child {
  border-bottom-left-radius: 0.6em;
  border-bottom-right-radius: 0.6em;
}
.downloads-tab__item {
  display: grid;
  grid-template-columns: 9em 1fr;
  gap: 1em;
  padding: 0.8em;
  border-radius: 0.6em;
  background: rgba(var(--card-bg-color), var(--card-bg-alpha));
  box-shadow: 0 0.5em 1.2em rgba(0, 0, 0, 0.5);
  transition: background 0.15s ease, box-shadow 0.15s ease;
  outline: 1px solid rgba(255, 255, 255, 0.062745098);
  /* \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F */
  /* \u043C\u0430\u0441\u0448\u0442\u0430\u0431 \u043F\u043E\u0441\u0442\u0435\u0440\u0430 \u043F\u0440\u0438 hover/focus \u043D\u0430 item */
}
.downloads-tab__item:hover, .downloads-tab__item.focus, .downloads-tab__item:focus-visible {
  outline: 3px solid var(--accent-violet);
  background: rgba(var(--card-bg-color), var(--card-bg-alpha-hover));
}
.downloads-tab__item.downloading .downloads-tab__meta-left {
  display: inline;
}
.downloads-tab__item.completed .downloads-tab__meta-downloaded,
.downloads-tab__item.completed .downloads-tab__meta-slash {
  display: none;
}
.downloads-tab__item:hover .downloads-tab__poster, .downloads-tab__item.focus .downloads-tab__poster, .downloads-tab__item:focus-visible .downloads-tab__poster {
  transform: scale(var(--poster-scale-hover));
}
.downloads-tab__item--mini {
  grid-template-columns: 1fr;
  padding-left: 10.8em;
}
.downloads-tab__item--mini .downloads-tab__main {
  min-height: unset;
  grid-template-rows: auto auto;
}
.downloads-tab__poster {
  position: relative;
  width: 9em;
  height: 13.5em;
  border-radius: 0.6em;
  overflow: hidden;
  background-color: rgb(35, 35, 35);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: transform 0.2s ease;
}
.downloads-tab__poster::after {
  content: "POSTER";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1em;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: rgba(255, 255, 255, 0.08);
  pointer-events: none;
  user-select: none;
}
.downloads-tab__main {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr auto;
  min-height: 13.5em;
}
.downloads-tab__movie {
  font-size: var(--fs-title);
  font-weight: 700;
  color: var(--color-text-primary);
  line-height: 1.2;
  margin-bottom: var(--sp-after-title);
  word-break: break-word;
  overflow-wrap: break-word;
}
.downloads-tab__year {
  color: var(--color-text-muted);
  margin-bottom: 0.8em;
  font-weight: bold;
}
.downloads-tab__file {
  font-size: var(--fs-file);
  font-weight: 500;
  color: #727272;
  margin-bottom: var(--sp-between-text-and-progress);
  overflow-wrap: anywhere;
}
.downloads-tab__footer {
  align-self: end;
  display: grid;
  row-gap: var(--sp-between-text-and-progress);
  font-size: var(--fs-body);
  font-weight: 500;
  color: var(--color-text-muted);
}
.downloads-tab__meta-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.8em;
}
.downloads-tab__meta-left {
  display: none;
  white-space: nowrap;
}
.downloads-tab__speed {
  font-weight: 600;
  color: var(--accent-violet);
}
.downloads-tab__progress-wrapper {
  height: 0.5em;
  border-radius: 10px;
  overflow: hidden;
  background: #2a2a2a;
}
.downloads-tab__progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--accent-violet), var(--accent-violet-light));
  will-change: width;
  transition: width 0.25s ease;
}
.downloads-tab__meta-bottom {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  column-gap: 0.8em;
}
.downloads-tab__sizes {
  white-space: nowrap;
}
.downloads-tab__eta {
  font-weight: 600;
  color: var(--color-text-primary);
  white-space: nowrap;
}
.downloads-tab__meta-total {
  color: var(--accent-violet);
}
@media (orientation: portrait) {
  .downloads-tab__list .downloads-tab__rows {
    flex-direction: column;
    align-items: stretch;
  }
  .downloads-tab__list .downloads-tab__header-title-wrapper {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.3em;
  }
}
@media (prefers-reduced-motion: reduce) {
  .downloads-tab__item, .downloads-tab__poster, .downloads-tab__progress-fill {
    transition: none;
  }
}`;var be=`<li class="menu__item selector">
    <div class="menu__ico">{icon}</div>
    <div class="menu__text">{text}</div>
</li>
`;function Qe(t){let e=new Map;return t.forEach((a,o)=>{let n=a.id>0?String(a.id):`solo_${a.externalId}`;e.has(n)||e.set(n,{torrents:[],lastIndex:o});let r=e.get(n);r.torrents.push(a),r.lastIndex=Math.max(r.lastIndex,o)}),[...e.values()].sort((a,o)=>a.lastIndex-o.lastIndex).map(a=>[...a.torrents].sort((o,n)=>n.totalSize-o.totalSize))}var W=class{constructor(){this.html=$("<div></div>");this.lastFocusedElement=null}create(){l.isConnected||b.start(),this.scroll=new Lampa.Scroll({mask:!0,over:!0,step:200});let e=w.getData(),a=l.isConnected?Lampa.Lang.translate("downloads-tab.connected")+" ("+l.getClient().url+")":Lampa.Lang.translate("downloads-tab.disconnected"),o=$(Lampa.Template.get("downloads-tab",{server:a,freeSpace:Lampa.Lang.translate("downloads-tab.freespace")+S(e.info.freeSpace)})),n=o.find(".downloads-tab__rows"),r=window.innerWidth<=window.innerHeight,i=p=>{let g=p.map((h,m)=>{let C=L(h);return $(Lampa.Template.get(m===0?"downloads-row":"downloads-mini-row",C)).on("hover:focus",J=>{this.lastFocusedElement=J.currentTarget,this.scroll.update(J.currentTarget,!0)}).on("hover:enter",()=>x("downloads-tab",h)).on("hover:long",()=>T("downloads-tab",h))});if(p.length>1){let h=$('<div class="downloads-tab__group"></div>');return g.forEach(m=>h.append(m)),h}return g[0]},u=Qe(e.torrents);if(r)u.forEach(p=>n.append(i(p)));else{let p=[$('<div class="downloads-tab__col"></div>'),$('<div class="downloads-tab__col"></div>')];n.append(p[0]).append(p[1]);let g=[0,0];u.forEach(h=>{let m=g[0]<=g[1]?0:1;g[m]+=h.length,p[m].append(i(h))})}this.scroll.minus(),this.scroll.append(o.get(0)),this.html.append(this.scroll.render())}render(e=!1){return this.html}start(){Lampa.Controller.add("downloads-tab",{toggle:()=>{var e;if(Lampa.Controller.collectionSet(this.scroll.render()),this.lastFocusedElement){let a=document.contains(this.lastFocusedElement),o=this.html[0].contains(this.lastFocusedElement),n=$(this.lastFocusedElement).is(":visible");!a&&!o&&(this.lastFocusedElement=null)}Lampa.Controller.collectionFocus((e=this.lastFocusedElement)!=null?e:!1,this.scroll.render())},left:()=>{Navigator.canmove("left")?Navigator.move("left"):Lampa.Controller.toggle("menu")},right:()=>{Navigator.move("right")},up:()=>{Navigator.canmove("up")?Navigator.move("up"):Lampa.Controller.toggle("head")},down:()=>{Navigator.canmove("down")&&Navigator.move("down")},back:()=>Lampa.Activity.backward()}),Lampa.Controller.toggle("downloads-tab"),this.checkInterval=setInterval(()=>{if(Lampa.Controller.enabled().name==="downloads-tab"){let e=document.activeElement,a=e===document.body,o=e&&this.html[0].contains(e);if(a||!o){let n=this.lastFocusedElement;(!n||!this.html[0].contains(n))&&(n=this.html.find(".downloads-tab__item").first()[0]),n&&Lampa.Controller.collectionFocus(n,this.scroll.render())}}},500)}build(e){}bind(e){}empty(){}next(){}append(e,a){}limit(){}refresh(){}pause(){}stop(){}destroy(){clearInterval(this.checkInterval),$("#dt-debug").remove(),this.scroll.destroy(),this.html.remove()}};function Ze(t){let e=L(t),a=$(document).find(`.downloads-tab__item[data-id="${e.id}"]`);a.length&&(a.removeClass("downloading completed paused").addClass(e.status),a.find(".downloads-tab__progress-fill").css("width",e.percent),a.find(".downloads-tab__poster").css("background-image",`url(${e.poster})`),Object.keys(e).forEach(o=>{a.find(`[data-field="${o}"]`).each(function(){$(this).text(e[o])})}))}function ve(t){let e=$(".downloads-tab__rows");if(!e.length)return;let a=new Set;t.forEach(o=>{let n=L(o);if(a.add(n.id),e.find(`.downloads-tab__item[data-id="${n.id}"]`).length)Ze(o);else{let i=$(Lampa.Template.get("downloads-row",n)).on("hover:focus",u=>{}).on("hover:enter",()=>x("downloads-tab",o)).on("hover:long",()=>T("downloads-tab",o));e.append(i)}}),e.find(".downloads-tab__item").each(function(){let o=$(this).data("id");a.has(o)||$(this).remove()})}function Le(){Lampa.Template.add("menu-button",be),Lampa.Template.add("downloads-row",ge),Lampa.Template.add("downloads-mini-row",we),Lampa.Template.add("downloads-tab",he),$("body").append(`<style>${_e}</style>`),Lampa.Component.add("downloads-tab",W);let t=Lampa.Lang.translate("downloads"),e=$(Lampa.Template.get("menu-button",{icon:y,text:t}));e.on("hover:enter",function(){Lampa.Activity.push({url:"",title:t,component:"downloads-tab",page:1})}),$(".menu .menu__list").eq(0).append(e)}var f=class f{static start(){let e=ye[Lampa.Storage.field(V)];f.subscription&&clearInterval(f.subscription),f.errorCount=0,f.notified=!1,f.subscription=setInterval(f.tick,e*1e3)}static tick(){return d(this,null,function*(){try{let e=yield l.getClient().getData();if(w.setData(e),$(".d-updatable").length){for(let o of e.torrents)de(o),ue(o);ve(e.torrents)}let a=l.getClient().url;l.isConnected||_("Connected to "+a),l.isConnected=!0,f.notifyFirstTime(Lampa.Lang.translate("background-worker.connection-success")+": "+a)}catch(e){_("Error:",e),l.isConnected=!1,f.errorCount++,f.errorCount>10&&(clearInterval(f.subscription),_("Stopping background worker due to too many errors"),f.notifyFirstTime(Lampa.Lang.translate("background-worker.error-detected")))}})}static notifyFirstTime(e){f.notified||(Lampa.Noty.show(e),f.notified=!0)}};f.errorCount=0,f.notified=!1;var b=f;var V=`${s.component}.interval`,Y=`${s.component}.default-action`,G=`${s.component}.allow-multiple-marks`,R=`${s.component}.poster-quality`,E=`${s.component}.server.url`,K=`${s.component}.server.stream_url`,j=`${s.component}.server.login`,q=`${s.component}.server.password`,H=`${s.component}.jellyfin.separate-movies-tv`,P=`${s.component}.jellyfin.subfolder`,N=`${s.component}.jellyfin.include-year`,O=`${s.component}.jellyfin.include-tmdbid`,ye=[2,5,10,30,60,5*60,15*60],U=["w200","w342","w500","w780","w1280"];function Te(){Lampa.SettingsApi.addComponent({component:s.component,name:s.name,icon:y}),Lampa.SettingsApi.addParam({component:s.component,param:{name:V,type:"select",placeholder:"2s",values:["2s","5s","10s","30s","1m","5m","15m"],default:0},field:{name:"Update interval"},onChange(t){Lampa.Settings.update(),b.start()}}),Lampa.SettingsApi.addParam({component:s.component,param:{name:Y,type:"select",placeholder:"",values:["Open actions menu","Play if done, Resume if in progress","Play","Resume / Pause download"],default:0},field:{name:"Default press action",description:"Long press always opens the actions menu."},onChange(t){Lampa.Settings.update()}}),Lampa.SettingsApi.addParam({component:s.component,param:{name:G,type:"trigger",default:!1},field:{name:"Keep torrents screen open after download",description:"After selecting a torrent, the app does not return back and keeps the add screen open, allowing you to add multiple torrents in a row."},onChange(t){Lampa.Settings.update()}}),Lampa.SettingsApi.addParam({component:s.component,param:{name:R,type:"select",placeholder:"",values:["Low","Medium","High","Very High","Ultra"],default:1},field:{name:"Poster quality"},onChange(t){Lampa.Settings.update()}}),Lampa.SettingsApi.addParam({component:s.component,param:{name:"server-settings-title",type:"title",default:""},field:{name:"Server settings:"}}),Lampa.SettingsApi.addParam({component:s.component,param:{name:E,type:"input",placeholder:"",values:"",default:""},field:{name:"Url"},onChange(t){Lampa.Settings.update(),l.reset()}}),Lampa.SettingsApi.addParam({component:s.component,param:{name:K,type:"input",placeholder:"",values:"",default:""},field:{name:"Stream Url",description:"If set, this url will be used to stream video files instead of the main Url"},onChange(t){Lampa.Settings.update()}}),Lampa.SettingsApi.addParam({component:s.component,param:{name:j,type:"input",placeholder:"",values:"",default:""},field:{name:"Login"},onChange(t){Lampa.Settings.update(),l.reset()}}),Lampa.SettingsApi.addParam({component:s.component,param:{name:q,type:"input",placeholder:"",values:"",default:""},field:{name:"Password"},onChange(t){Lampa.Settings.update(),l.reset()}}),Lampa.SettingsApi.addParam({component:s.component,param:{name:"jellyfin-title",type:"title",default:""},field:{name:"Jellyfin / Plex integration:"}}),Lampa.SettingsApi.addParam({component:s.component,param:{name:H,type:"trigger",default:!1},field:{name:"Download movies and TV shows into separate directories"},onChange(){Lampa.Settings.update()}}),Lampa.SettingsApi.addParam({component:s.component,param:{name:P,type:"trigger",default:!1},field:{name:"Download into a subfolder with title"},onChange(){Lampa.Storage.field(P)!==!0&&(Lampa.Storage.set(N,!1),Lampa.Storage.set(O,!1)),Lampa.Settings.update()}}),Lampa.SettingsApi.addParam({component:s.component,param:{name:N,type:"trigger",default:!1},field:{name:"Add (year) to folder name"},onRender(t){Lampa.Storage.field(P)===!0?t.show():t.hide()},onChange(){Lampa.Settings.update()}}),Lampa.SettingsApi.addParam({component:s.component,param:{name:O,type:"trigger",default:!1},field:{name:"Add [tmdbid-***] to folder name"},onRender(t){Lampa.Storage.field(P)===!0?t.show():t.hide()},onChange(){Lampa.Settings.update()}})}var Se="lampa:";function Ie(t){var o;let a=((o=(typeof t=="string"?t.split(",").map(n=>n.trim()):t).find(n=>n.startsWith(Se)))==null?void 0:o.split(":")[1])||"";return parseInt(a)}function xe(t){return(typeof t=="string"?t.split(",").map(a=>a.trim()):t).indexOf("tv")!==-1?"tv":"movie"}function Ee(t){let e=[Se+t.id];return Ce(t)?(e.push("tv"),e.push(`tv/${t.id}`)):e.push(`movie/${t.id}`),e}function De(t){let e=(t.title||t.name).trim(),a=t.release_year||(t.release_date?t.release_date.slice(0,4):"")||(t.first_air_date?t.first_air_date.slice(0,4):""),o="";return Lampa.Storage.field(H)&&(o+=`/${Ce(t)?"tv":"movie"}`),o+=`/${e}`,Lampa.Storage.field(N)&&a&&(o+=` (${a})`),Lampa.Storage.field(O)&&(o+=` [tmdbid-${t.id}]`),o}function Ce(t){return Array.isArray(t.seasons)||t.season!==void 0||t.episode_number!==void 0}var M=class{constructor(e,a,o,n){this.url=e;this.login=a;this.password=o;this.cookie=n}fetchWithAuth(o){return d(this,arguments,function*(e,a={}){var r;let n=yield fetch(this.url+e,k(A({},a),{credentials:"include"}));if(!n.ok&&n.status===403&&(yield this.authorize(),n=yield fetch(this.url+e,k(A({},a),{credentials:"include"}))),!n.ok)throw new Error("Failed to get "+e);return(r=n.headers.get("content-type"))!=null&&r.includes("application/json")?yield n.json():yield n.text()})}authorize(){return d(this,null,function*(){let e=new URLSearchParams;e.append("username",this.login),e.append("password",this.password);let a=yield fetch(this.url+"/api/v2/auth/login",{method:"POST",body:e,credentials:"include"});if(!a.ok)throw new Error("qBittorrent login failed");this.cookie=a.headers.get("set-cookie")||void 0})}getTorrents(){return d(this,null,function*(){let e=yield this.fetchWithAuth("/api/v2/torrents/info"),a=yield this.fetchWithAuth("/api/v2/app/preferences");return this.formatTorrents(e,a)})}getData(){return d(this,null,function*(){var n;let e=yield this.fetchWithAuth("/api/v2/sync/maindata"),a=(n=e.torrents)!=null?n:[];a=Array.isArray(a)?a:Object.keys(a).map(r=>k(A({},a[r]),{hash:r}));let o=yield this.fetchWithAuth("/api/v2/app/preferences");return{torrents:this.formatTorrents(a,o),info:{freeSpace:e.server_state.free_space_on_disk}}})}addTorrent(e,a){return d(this,null,function*(){let o=new FormData,n=new URL(a.MagnetUri||a.Link);n.searchParams.delete("dn"),o.append("urls",n.toString()),o.append("tags",Ee(e).join(",")),o.append("sequentialDownload","true"),o.append("firstLastPiecePrio","true"),o.append("category",e.seasons?"Shows":"Movies");let r=De(e);if(r){let i=yield this.fetchWithAuth("/api/v2/app/preferences"),u=i==null?void 0:i.save_path;if(u){let p=u.replace(/[\\/]+$/g,"")+r;o.append("savepath",p)}}yield this.fetchWithAuth("/api/v2/torrents/add",{method:"POST",body:o})})}startTorrent(e){return d(this,null,function*(){let a=new URLSearchParams;a.append("hashes",String(e.externalId)),yield this.fetchWithAuth("/api/v2/torrents/start",{method:"POST",body:a})})}stopTorrent(e){return d(this,null,function*(){let a=new URLSearchParams;a.append("hashes",String(e.externalId)),yield this.fetchWithAuth("/api/v2/torrents/stop",{method:"POST",body:a})})}hideTorrent(e){return d(this,null,function*(){let a=new URLSearchParams;a.append("hashes",String(e.externalId)),a.append("tags","hide"),yield this.fetchWithAuth("/api/v2/torrents/addTags",{method:"POST",body:a})})}removeTorrent(e,a=!1){return d(this,null,function*(){let o=new URLSearchParams;o.append("hashes",String(e.externalId)),o.append("deleteFiles",a?"true":"false"),yield this.fetchWithAuth("/api/v2/torrents/delete",{method:"POST",body:o})})}getFiles(e){return d(this,null,function*(){let a=new URLSearchParams;return a.append("hash",String(e.externalId)),(yield this.fetchWithAuth(`/api/v2/torrents/files?${a.toString()}`)).map(n=>{var r,i;return{bytesCompleted:Math.floor(n.progress*n.size),length:n.size,name:n.name,begin_piece:(r=n.piece_range)==null?void 0:r[0],end_piece:(i=n.piece_range)==null?void 0:i[1]}})})}formatTorrents(e,a){return e.sort((o,n)=>n.added_on-o.added_on).filter(o=>!o.tags.includes("hide")).filter(o=>{let n=o.category||"";return n==="Movies"||n==="Shows"}).map(o=>({id:Ie(o.tags),type:xe(o.tags),externalId:o.hash,name:o.name,status:se(o.state),percentDone:o.progress,totalSize:o.size,eta:o.eta,speed:o.dlspeed,files:[],seeders:o.num_seeds,activeSeeders:o.num_complete,savePath:o.save_path,hash:o.hash,path:o.save_path.replace(a.save_path,"")}))}};var D=class D{static getClient(){if(!this.client){let e=Lampa.Storage.field(E),a=e.split(";");a.length===1&&D.buildClient(e),a.length>1&&D.selectUrl(a)}return this.client}static reset(){this.client=void 0}static buildClient(e){let a=Lampa.Storage.field(j),o=Lampa.Storage.field(q);this.client=new M(e,a,o)}static selectUrl(e){return d(this,null,function*(){let a=e.map(o=>fetch(o+"/ping",{cache:"no-cache"}).then(n=>n.ok?o:Promise.reject()));return new Promise(o=>{let n=0,r=!1;a.forEach(i=>i.then(u=>{r||(r=!0,this.buildClient(u),o())}).catch(()=>{++n===a.length&&!r&&(this.buildClient(e[0]),o())}))})})}};D.isConnected=!1;var l=D;var Ae=`<div class="full-start__button selector button--download">
    {icon}
    <span>{text}</span>
</div>`;function et(t){let e=$(Lampa.Template.get("download-button",{icon:y,text:Lampa.Lang.translate("download")}));e.on("hover:enter",a=>{Lampa.Activity.push({url:"",title:Lampa.Lang.translate("download"),component:"torrents-download",search_one:t.movie.title,search_two:t.movie.original_title,movie:t.movie,page:1})}),$(".full-start-new__buttons").children().first().after(e)}function $e(){Lampa.Template.add("download-button",Ae),Lampa.Component.add("torrents-download",Lampa.Component.get("torrents")),Lampa.Listener.follow("full",t=>{if(t.type==="complite"){let e=t.data;et(e)}}),Lampa.Listener.follow("torrent",t=>{let e=Lampa.Activity.active();t.type==="render"&&e.component==="torrents-download"&&($(t.item).off("hover:enter"),$(t.item).on("hover:enter",a=>d(this,null,function*(){try{yield l.getClient().addTorrent(e.movie,t.element)}catch(n){let r=n&&n.message?n.message:String(n);throw Lampa.Bell.push({text:`Error adding torrent: ${r}`}),n}if(Lampa.Bell.push({text:"The torrent was added to the client"}),Lampa.Favorite.add("history",e.movie,100),e.activity.component.mark(t.element,t.item,!0),!Lampa.Storage.get(G,!1)){Lampa.Activity.back();let r=(yield l.getClient().getTorrents()).find(i=>i.id===e.movie.id);B(r,e.movie)}})))})}function ke(){window.plugin_transmission_ready=!0,Lampa.Manifest.plugins=s,Lampa.Lang.add(X),Te(),$e(),le(),Le(),fe(),Lampa.Storage.field(E)&&b.start()}window.plugin_transmission_ready||(window.appready?ke():Lampa.Listener.follow("app",function(t){t.type==="ready"&&ke()}));})();
