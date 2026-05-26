"use strict";(()=>{var w=`<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="4 4 16 16">
    <path fill="currentcolor" d="M17.71,12.71a1,1,0,0,0-1.42,0L13,16V6a1,1,0,0,0-2,0V16L7.71,12.71a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.3,4.29A2,2,0,0,0,12,19h0a2,2,0,0,0,1.4-.59l4.3-4.29A1,1,0,0,0,17.71,12.71Z" />
</svg>`;var s={type:"other",version:"2.0.2",author:"https://github.com/kvart714",name:"Torrent Downloader",description:"qBitTorrent Web API client",component:"t-downloader"};var N=s.component+".torrents.data.v2",c=class{static{this.data=Lampa.Storage.get(N,{torrents:[],info:{freeSpace:0}})}static getData(){return this.data}static getMovie(e){let a=this.data.torrents.filter(o=>o.id===e);return a.length>0?a.reduce((o,n)=>o.percentDone<n.percentDone?o:n):null}static ensureMovie(e){let a=this.data.torrents.filter(o=>o.externalId===e.externalId);return a.length>0?a.reduce((o,n)=>o.percentDone<n.percentDone?o:n):e}static async setData(e){this.data=e,Lampa.Storage.set(N,this.data)}};var O=`<div class="selector download-card full-start__button d-updatable" id="download-card-{id}">
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
`;var M=`.download-card {
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
}`;function L(...t){console.log(s.name,...t)}function F(...t){console.warn(s.name,...t)}var z=s.component+".movieinfo.data.v3",g=class{static{this.requestedIds=new Set}static{this.diskCache=Lampa.Storage.get(z,{})}static{this.memoryCache={}}static getMovieInfo(e){let a=e?.id,o=e?.type;return a?this.memoryCache[a]?this.memoryCache[a]:(this.requestedIds.has(a)||(this.requestedIds.add(a),this.loadByTypeWithFallback(a,o)),this.diskCache[a]||null):null}static async loadByTypeWithFallback(e,a){let o=["movie","tv"];for(let n of o.sort(r=>r===a?-1:0)){let r=await this.loadContentInfo(e,n);if(r){this.memoryCache[e]=r,this.diskCache[e]=r,Lampa.Storage.set(z,this.diskCache);return}}}static async loadContentInfo(e,a){let o=Lampa.TMDB.api(`${a}/${e}`)+`?api_key=${Lampa.TMDB.key()}&language=en&certification_country=RU&certification.lte=18`;try{let n=await fetch(o);if(n.ok){let r=await n.json();if(r?.title||r?.name)return r}}catch(n){F(`Failed to load ${a} info for id ${e}:`,n)}return null}};var d={STOPPED:0,CHECK_PENDING:1,CHECKING:2,DOWNLOAD_PENDING:3,DOWNLOADING:4,SEED_PENDING:5,SEEDING:6,ISOLATED:7,STALLED:8,ERROR:9,ALLOCATING:10,MOVING:11,UNKNOWN:12,INITIALIZATION:13};function R(t){switch(t){case"allocating":return d.ALLOCATING;case"checkingDL":case"checkingUP":case"checkingResumeData":return d.CHECKING;case"queuedDL":return d.DOWNLOAD_PENDING;case"queuedUP":return d.SEED_PENDING;case"downloading":case"forcedMetaDL":return d.DOWNLOADING;case"uploading":case"forcedUP":return d.SEEDING;case"pausedDL":case"pausedUP":case"stoppedDL":case"stoppedUP":return d.STOPPED;case"stalledDL":case"stalledUP":return d.STALLED;case"missingFiles":return d.ISOLATED;case"moving":return d.MOVING;case"error":return d.ERROR;case"metaDL":case"forcedDL":return d.INITIALIZATION;default:return d.UNKNOWN}}function _(t,e=2){if(t===0)return"0";let a=1024,o=e<0?0:e,n=Math.floor(Math.log(t)/Math.log(a));return parseFloat((t/Math.pow(a,n)).toFixed(o))+" "+Lampa.Lang.translate(`download-card.size.${n}`)}function we(t){let e=Lampa.Lang.translate("download-card.time.3");return`${_(t)}/${e}`}function ge(t){let e=Math.floor(t/86400),a=Math.floor(t%86400/3600),o=Math.floor(t%3600/60),n=Math.floor(t%60);return[e,a,o,n].map((p,m)=>p?p+Lampa.Lang.translate(`download-card.time.${m}`):null).filter(Boolean).slice(0,2).join(" ")}function he(t){let e=new Date(t||"");return isNaN(e.getTime())?"":e.getFullYear()}function f(t){let e=g.getMovieInfo(t);return{id:t.id+"_"+t.externalId,title:e?.title||e?.name||(t.status===d.INITIALIZATION?"Initialization":t.name),poster:e?.poster_path?`https://image.tmdb.org/t/p/w200${e.poster_path}`:"",year:he(e?.release_date||e?.first_air_date),fileName:e?.title||e?.name?t.name:"",percent:(100*t.percentDone).toFixed(2)+"%",speed:t.speed>0?we(t.speed):"",downloadedSize:_(t.percentDone*t.totalSize),totalSize:_(t.totalSize),eta:t.status===d.DOWNLOADING?ge(t.eta):t.status===d.STALLED&&t.percentDone===1?Lampa.Lang.translate("download-card.status.14"):Lampa.Lang.translate(`download-card.status.${t.status}`),status:t.status===d.DOWNLOADING?"downloading":t.percentDone===1?"completed":"paused",seeders:`${t.seeders||0} (${t.activeSeeders||0})`}}var I=`${s.component}.interval`,D=`${s.component}.default-action`,v=`${s.component}.server.url`,C=`${s.component}.server.stream_url`,E=`${s.component}.server.login`,k=`${s.component}.server.password`,U=[2,5,10,30,60,5*60,15*60];function B(){Lampa.SettingsApi.addComponent({component:s.component,name:s.name,icon:w}),Lampa.SettingsApi.addParam({component:s.component,param:{name:I,type:"select",placeholder:"2s",values:["2s","5s","10s","30s","1m","5m","15m"],default:0},field:{name:"Update interval"},onChange(t){Lampa.Settings.update(),u.start()}}),Lampa.SettingsApi.addParam({component:s.component,param:{name:D,type:"select",placeholder:"",values:["Open actions menu","Play","Resume / Pause download"],default:0},field:{name:"Default press action",description:"Long press always opens the actions menu."},onChange(t){Lampa.Settings.update()}}),Lampa.SettingsApi.addParam({component:s.component,param:{name:"server-settings-title",type:"title",default:""},field:{name:"Server settings:"}}),Lampa.SettingsApi.addParam({component:s.component,param:{name:v,type:"input",placeholder:"",values:"",default:""},field:{name:"Url"},onChange(t){Lampa.Settings.update(),i.reset()}}),Lampa.SettingsApi.addParam({component:s.component,param:{name:C,type:"input",placeholder:"",values:"",default:""},field:{name:"Stream Url",description:"If set, this url will be used to stream video files instead of the main Url"},onChange(t){Lampa.Settings.update()}}),Lampa.SettingsApi.addParam({component:s.component,param:{name:E,type:"input",placeholder:"",values:"",default:""},field:{name:"Login"},onChange(t){Lampa.Settings.update(),i.reset()}}),Lampa.SettingsApi.addParam({component:s.component,param:{name:k,type:"input",placeholder:"",values:"",default:""},field:{name:"Password"},onChange(t){Lampa.Settings.update(),i.reset()}})}var W="lampa:";function G(t){let a=(typeof t=="string"?t.split(",").map(o=>o.trim()):t).find(o=>o.startsWith(W))?.split(":")[1]||"";return parseInt(a)}function K(t){return(typeof t=="string"?t.split(",").map(a=>a.trim()):t).indexOf("tv")!==-1?"tv":"movie"}function V(t){let e=[W+t.id];return t.seasons?(e.push("tv"),e.push(`tv/${t.id}`)):e.push(`movie/${t.id}`),e}var T=class{constructor(e,a,o,n){this.url=e;this.login=a;this.password=o;this.cookie=n}async fetchWithAuth(e,a={}){let o=await fetch(this.url+e,{...a,credentials:"include"});return!o.ok&&o.status===403&&(await this.authorize(),o=await fetch(this.url+e,{...a,credentials:"include"})),o}async authorize(){let e=new URLSearchParams;e.append("username",this.login),e.append("password",this.password);let a=await fetch(this.url+"/api/v2/auth/login",{method:"POST",body:e,credentials:"include"});if(!a.ok)throw new Error("qBittorrent login failed");this.cookie=a.headers.get("set-cookie")||void 0}async getTorrents(){let e=await this.fetchWithAuth("/api/v2/torrents/info");if(!e.ok)throw new Error("Failed to get torrents");let a=await e.json();return this.formatTorrents(a)}async getData(){let e=await this.fetchWithAuth("/api/v2/sync/maindata");if(!e.ok)throw new Error("Failed to get qBittorrent info");let a=await e.json();return{torrents:this.formatTorrents(Array.isArray(a.torrents)?a.torrents:Object.keys(a.torrents).map(o=>({...a.torrents[o],hash:o}))),info:{freeSpace:a.server_state.free_space_on_disk}}}async addTorrent(e,a){let o=new FormData,n=new URL(a.MagnetUri||a.Link);if(n.searchParams.delete("dn"),o.append("urls",n.toString()),o.append("tags",V(e).join(",")),o.append("sequentialDownload","true"),o.append("firstLastPiecePrio","true"),o.append("category",e.seasons?"Shows":"Movies"),!(await this.fetchWithAuth("/api/v2/torrents/add",{method:"POST",body:o})).ok)throw new Error("Failed to add torrent")}async startTorrent(e){let a=new URLSearchParams;if(a.append("hashes",String(e.externalId)),!(await this.fetchWithAuth("/api/v2/torrents/start",{method:"POST",body:a})).ok)throw new Error("Failed to start torrents")}async stopTorrent(e){let a=new URLSearchParams;if(a.append("hashes",String(e.externalId)),!(await this.fetchWithAuth("/api/v2/torrents/stop",{method:"POST",body:a})).ok)throw new Error("Failed to stop torrents")}async hideTorrent(e){let a=new URLSearchParams;if(a.append("hashes",String(e.externalId)),a.append("tags","hide"),!(await this.fetchWithAuth("/api/v2/torrents/addTags",{method:"POST",body:a})).ok)throw new Error("Failed to hide torrent")}async removeTorrent(e,a=!1){let o=new URLSearchParams;if(o.append("hashes",String(e.externalId)),o.append("deleteFiles",a?"true":"false"),!(await this.fetchWithAuth("/api/v2/torrents/delete",{method:"POST",body:o})).ok)throw new Error("Failed to remove torrents")}async getFiles(e){let a=new URLSearchParams;a.append("hash",String(e.externalId));let o=await this.fetchWithAuth(`/api/v2/torrents/files?${a.toString()}`);if(!o.ok)throw new Error(`Failed to get files for torrent ${e.externalId}`);return(await o.json()).map(r=>({bytesCompleted:Math.floor(r.progress*r.size),length:r.size,name:r.name,begin_piece:r.piece_range?.[0],end_piece:r.piece_range?.[1]}))}formatTorrents(e){return e.sort((a,o)=>o.added_on-a.added_on).filter(a=>!a.tags.includes("hide")).filter(a=>{let o=a.category||"";return o==="Movies"||o==="Shows"}).map(a=>({id:G(a.tags),type:K(a.tags),externalId:a.hash,name:a.name,status:R(a.state),percentDone:a.progress,totalSize:a.size,eta:a.eta,speed:a.dlspeed,files:[],seeders:a.num_seeds,activeSeeders:a.num_complete,savePath:a.save_path}))}};var i=class t{static{this.isConnected=!1}static getClient(){if(!this.client){let e=Lampa.Storage.field(v),a=e.split(";");a.length===1&&t.buildClient(e),a.length>1&&t.selectUrl(a)}return this.client}static reset(){this.client=void 0}static buildClient(e){let a=Lampa.Storage.field(E),o=Lampa.Storage.field(k);this.client=new T(e,a,o)}static async selectUrl(e){let a=e.map(o=>fetch(o+"/ping",{cache:"no-cache"}).then(n=>n.ok?o:Promise.reject()));return new Promise(o=>{let n=0,r=!1;a.forEach(p=>p.then(m=>{r||(r=!0,this.buildClient(m),o())}).catch(()=>{++n===a.length&&!r&&(this.buildClient(e[0]),o())}))})}};var Y=s.component+".torrents.data.views.",b=class t{static getViews(e){return Lampa.Storage.get(Y+e.externalId)}static rememberView(e,a){let o=t.getViews(e)||{};o.last=a,o[a]=!0,Lampa.Storage.set(Y+e.externalId,o)}};async function q(t,e,a){let o=i.getClient(),n=await o.getFiles(e),p=(Lampa.Storage.field(C)||o.url)+(e.savePath?e.savePath+"/":"/downloads/");if(n.length<1)throw new Error("No files found in torrent");if(n.length===1&&Lampa.Player.play({title:a||e.name,url:p+n[0].name}),n.length>1){let m=b.getViews(e),x=n.sort((l,P)=>l.name.localeCompare(P.name,void 0,{numeric:!0,sensitivity:"base"})).map((l,P)=>({title:l.name.split(/[\\/]/).pop()||l.name,name:l.name,url:p+l.name,picked:m[l.name],selected:m.last===l.name}));Lampa.Select.show({title:Lampa.Lang.translate("actions.select-file"),items:x,async onSelect(l){b.rememberView(e,l.name),Lampa.Player.play({playlist:x,title:a||e.name,url:l.url}),Lampa.Player.playlist(x),Lampa.Controller.toggle(t)},onBack:function(){Lampa.Controller.toggle(t)}})}}function j(t){t.status===d.STOPPED?i.getClient().startTorrent(t):i.getClient().stopTorrent(t)}function h(t,e,a){e=c.ensureMovie(e);let o=g.getMovieInfo(e);Lampa.Select.show({title:Lampa.Lang.translate("actions.title"),items:[{title:Lampa.Lang.translate("actions.open"),async onSelect(){q(t,e,a)}},...t==="downloads-tab"&&e.id?[{title:Lampa.Lang.translate("actions.open-card"),async onSelect(){Lampa.Activity.push({component:"full",id:e.id,method:o?.seasons?"tv":"movie",card:e})}}]:[],{title:e.status===d.STOPPED?Lampa.Lang.translate("actions.resume"):Lampa.Lang.translate("actions.pause"),onSelect(){j(e),Lampa.Controller.toggle(t)}},{title:Lampa.Lang.translate("actions.hide"),onSelect(){i.getClient().hideTorrent(e),$(`.downloads-tab__item[data-id="${e.id}_${e.externalId}"]`).remove(),Lampa.Controller.toggle(t)}},{title:Lampa.Lang.translate("actions.delete"),subtitle:Lampa.Lang.translate("actions.delete-with-file"),onSelect(){i.getClient().removeTorrent(e,!0),$(`.downloads-tab__item[data-id="${e.id}_${e.externalId}"]`).remove(),Lampa.Controller.toggle(t)}},{title:Lampa.Lang.translate("actions.delete-torrent"),subtitle:Lampa.Lang.translate("actions.delete-torrent-keep-file"),onSelect(){i.getClient().removeTorrent(e,!1),$(`.downloads-tab__item[data-id="${e.id}_${e.externalId}"]`).remove(),Lampa.Controller.toggle(t)}}],onBack:function(){Lampa.Controller.toggle(t)}})}function y(t,e,a){let o=Lampa.Storage.field(D);o==1?q(t,e,a):o==2?j(e):h(t,e,a)}function _e(t,e){let a=$(Lampa.Template.get("download-card",f(t)));$(".full-start-new__right").append(a),a.on("hover:enter",()=>{y("full_start",t,e?.title||e?.original_title)}),a.on("hover:long",()=>{h("full_start",t,e?.title||e?.original_title)})}function H(t){let e=f(t),a=document.getElementById(`download-card-${e.id}`);if(a){for(let o in e){let n=a.querySelector(`[data-key="${o}"]`);n&&(n.textContent=e[o])}a.querySelector(".download-card__progress-bar-progress").setAttribute("style",`width: ${e.percent};`)}}function Z(){Lampa.Template.add("download-card",O),$("body").append(`<style>${M}</style>`),Lampa.Listener.follow("full",t=>{if(t.type==="complite"){let e=c.getMovie(t.data.movie.id);e&&_e(e,t.data.movie)}})}var Q=`<div class="download-circle d-updatable download-circle-{status}-{id}">
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
`;var J=`.download-complete,
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
}`;function X(t,e){let a=$(e);if(!a.find(".download-circle").length){let o=Lampa.Template.get("download-circle",{id:t.id,status:t.percentDone===1?"complete":"in-progress",progress:100*(1-t.percentDone)});a.find(".card__vote").after(o)}}function be(t,e){let a=c.getMovie(t);a&&X(a,e)}function ee(t){let e=document.querySelectorAll(`.download-circle-in-progress-${t.id}`);e.length&&e.forEach(a=>{if(t.percentDone===1){let o=a.parentElement;a.remove(),X(t,o)}else a.querySelector(".download-circle__partial_in-progress")?.setAttribute("stroke-dashoffset",`${100*(1-t.percentDone)}`)})}function te(){Lampa.Template.add("download-circle",Q),$("body").append(`<style>${J}</style>`),Lampa.Listener.follow("line",t=>{if(t.type==="append")for(let e of t.items)e?.data?.id&&be(e?.data?.id,e.card)})}var u=class t{static{this.errorCount=0}static{this.notified=!1}static start(){let e=U[Lampa.Storage.field(I)];t.subscription&&clearInterval(t.subscription),t.errorCount=0,t.notified=!1,t.subscription=setInterval(t.tick,e*1e3)}static async tick(){try{let e=await i.getClient().getData();if(c.setData(e),$(".d-updatable").length){for(let o of e.torrents)H(o),ee(o);ae(e.torrents)}let a=i.getClient().url;i.isConnected||L("Connected to "+a),i.isConnected=!0,t.notifyFirstTime(Lampa.Lang.translate("background-worker.connection-success")+": "+a)}catch(e){L("Error:",e),i.isConnected=!1,t.errorCount++,t.errorCount>10&&(clearInterval(t.subscription),L("Stopping background worker due to too many errors"),t.notifyFirstTime(Lampa.Lang.translate("background-worker.error-detected")))}}static notifyFirstTime(e){t.notified||(Lampa.Noty.show(e),t.notified=!0)}};var oe=`<div class="downloads-tab__item selector {status}" data-id="{id}">
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
`;var ne=`<div class="downloads-tab__list d-updatable">
  <div class="downloads-tab__header-title-wrapper">
    <div class="downloads-tab__header-title">{server}</div>
    <div class="downloads-tab__header-size">{freeSpace}</div>
  </div>
  <div class="downloads-tab__rows"></div>
</div>
`;var re=`@charset "UTF-8";
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
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
  color: var(--color-text-primary);
}
.downloads-tab__progress-wrapper {
  height: 0.5em;
  border-radius: 4px;
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
@media (prefers-reduced-motion: reduce) {
  .downloads-tab__item, .downloads-tab__poster, .downloads-tab__progress-fill {
    transition: none;
  }
}`;var se=`<li class="menu__item selector">
    <div class="menu__ico">{icon}</div>
    <div class="menu__text">{text}</div>
</li>
`;var A=class{constructor(){this.html=$("<div></div>");this.lastFocusedElement=null}create(){i.isConnected||u.start(),this.scroll=new Lampa.Scroll({mask:!0,over:!0,step:200});let e=c.getData(),a=i.isConnected?Lampa.Lang.translate("downloads-tab.connected")+" ("+i.getClient().url+")":Lampa.Lang.translate("downloads-tab.disconnected"),o=$(Lampa.Template.get("downloads-tab",{server:a,freeSpace:Lampa.Lang.translate("downloads-tab.freespace")+_(e.info.freeSpace)})),n=o.find(".downloads-tab__rows");e.torrents.forEach(r=>{let p=f(r),m=$(Lampa.Template.get("downloads-row",p)).on("hover:focus",S=>{this.lastFocusedElement=S.currentTarget,this.scroll.update(S.currentTarget,!0)}).on("hover:enter",()=>y("downloads-tab",r)).on("hover:long",()=>h("downloads-tab",r));n.append(m)}),this.scroll.minus(),this.scroll.append(o.get(0)),this.html.append(this.scroll.render())}render(e=!1){return this.html}start(){Lampa.Controller.add("downloads-tab",{toggle:()=>{if(Lampa.Controller.collectionSet(this.scroll.render()),this.lastFocusedElement){let e=document.contains(this.lastFocusedElement),a=this.html[0].contains(this.lastFocusedElement),o=$(this.lastFocusedElement).is(":visible");!e&&!a&&(this.lastFocusedElement=null)}Lampa.Controller.collectionFocus(this.lastFocusedElement??!1,this.scroll.render())},left:()=>{Navigator.canmove("left")?Navigator.move("left"):Lampa.Controller.toggle("menu")},right:()=>{Navigator.move("right")},up:()=>{Navigator.canmove("up")?Navigator.move("up"):Lampa.Controller.toggle("head")},down:()=>{Navigator.canmove("down")&&Navigator.move("down")},back:()=>Lampa.Activity.backward()}),Lampa.Controller.toggle("downloads-tab"),this.checkInterval=setInterval(()=>{if(Lampa.Controller.enabled().name==="downloads-tab"){let e=document.activeElement,a=e===document.body,o=e&&this.html[0].contains(e);if(a||!o){let n=this.lastFocusedElement;(!n||!this.html[0].contains(n))&&(n=this.html.find(".downloads-tab__item").first()[0]),n&&Lampa.Controller.collectionFocus(n,this.scroll.render())}}},500)}build(e){}bind(e){}empty(){}next(){}append(e,a){}limit(){}refresh(){}pause(){}stop(){}destroy(){clearInterval(this.checkInterval),$("#dt-debug").remove(),this.scroll.destroy(),this.html.remove()}};function Se(t){let e=f(t),a=$(document).find(`.downloads-tab__item[data-id="${e.id}"]`);a.length&&(a.removeClass("downloading completed paused").addClass(e.status),a.find(".downloads-tab__progress-fill").css("width",e.percent),a.find(".downloads-tab__poster").css("background-image",`url(${e.poster})`),Object.keys(e).forEach(o=>{a.find(`[data-field="${o}"]`).each(function(){$(this).text(e[o])})}))}function ae(t){let e=$(".downloads-tab__rows");if(!e.length)return;let a=new Set;t.forEach(o=>{let n=f(o);if(a.add(n.id),e.find(`.downloads-tab__item[data-id="${n.id}"]`).length)Se(o);else{let p=$(Lampa.Template.get("downloads-row",n)).on("hover:focus",m=>{}).on("hover:enter",()=>y("downloads-tab",o)).on("hover:long",()=>h("downloads-tab",o));e.append(p)}}),e.find(".downloads-tab__item").each(function(){let o=$(this).data("id");a.has(o)||$(this).remove()})}function ie(){Lampa.Template.add("menu-button",se),Lampa.Template.add("downloads-row",oe),Lampa.Template.add("downloads-tab",ne),$("body").append(`<style>${re}</style>`),Lampa.Component.add("downloads-tab",A);let t=Lampa.Lang.translate("downloads"),e=$(Lampa.Template.get("menu-button",{icon:w,text:t}));e.on("hover:enter",function(){Lampa.Activity.push({url:"",title:t,component:"downloads-tab",page:1})}),$(".menu .menu__list").eq(0).append(e)}var de={downloads:{ru:"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0438",en:"Downloads"},download:{ru:"\u0421\u043A\u0430\u0447\u0430\u0442\u044C",en:"Download"},"downloads-tab.connected":{ru:"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043E",en:"Connected"},"downloads-tab.disconnected":{ru:"\u041D\u0435\u0442 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F",en:"Disconnected"},"downloads-tab.freespace":{ru:"\u0421\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0435 \u043C\u0435\u0441\u0442\u043E: ",en:"Free space: "},"download-card.time.0":{en:"d",ru:"\u0434"},"download-card.time.1":{en:"h",ru:"\u0447"},"download-card.time.2":{en:"min",ru:"\u043C\u0438\u043D"},"download-card.time.3":{en:"s",ru:"\u0441\u0435\u043A"},"download-card.status.0":{en:"stopped",ru:"\u043F\u0430\u0443\u0437\u0430"},"download-card.status.1":{en:"queued to verify local data",ru:"\u0436\u0434\u0451\u0442 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438"},"download-card.status.2":{en:"verifying local data",ru:"\u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0434\u0430\u043D\u043D\u044B\u0445"},"download-card.status.3":{en:"queued to download",ru:"\u0436\u0434\u0451\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438"},"download-card.status.4":{en:"downloading",ru:"\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430"},"download-card.status.5":{en:"queued to seed",ru:"\u0436\u0434\u0451\u0442 \u0440\u0430\u0437\u0434\u0430\u0447\u0438"},"download-card.status.6":{en:"seeding",ru:"\u0440\u0430\u0437\u0434\u0430\u0451\u0442\u0441\u044F"},"download-card.status.7":{en:"isolated",ru:"\u043D\u0435\u0442 \u043F\u0438\u0440\u043E\u0432"},"download-card.status.8":{en:"stalled",ru:"\u043F\u0440\u043E\u0441\u0442\u0430\u0438\u0432\u0430\u0435\u0442"},"download-card.status.9":{en:"error",ru:"\u043E\u0448\u0438\u0431\u043A\u0430"},"download-card.status.10":{en:"allocating",ru:"\u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u043C\u0435\u0441\u0442\u0430"},"download-card.status.11":{en:"moving",ru:"\u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u0435"},"download-card.status.12":{en:"unknown",ru:"\u043D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E"},"download-card.status.13":{en:"initializing",ru:"\u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"},"download-card.status.14":{en:"completed",ru:"\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E"},"download-card.size.0":{en:"B",ru:"\u0411"},"download-card.size.1":{en:"KB",ru:"\u041A\u0411"},"download-card.size.2":{en:"MB",ru:"\u041C\u0411"},"download-card.size.3":{en:"GB",ru:"\u0413\u0411"},"download-card.size.4":{en:"TB",ru:"\u0422\u0411"},"actions.title":{ru:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F",en:"Actions"},"actions.open":{ru:"\u0412\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0441\u0442\u0438",en:"Play"},"actions.open-card":{ru:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443 \u0444\u0438\u043B\u044C\u043C\u0430",en:"Open movie card"},"actions.select-file":{ru:"\u0424\u0430\u0439\u043B\u044B:",en:"Files:"},"actions.pause":{ru:"\u041F\u0430\u0443\u0437\u0430",en:"Pause"},"actions.resume":{ru:"\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C",en:"Resume"},"actions.hide":{ru:"\u0421\u043A\u0440\u044B\u0442\u044C",en:"Hide"},"actions.delete":{ru:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C",en:"Delete"},"actions.delete-with-file":{ru:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0442\u043E\u0440\u0440\u0435\u043D\u0442 \u0438 \u0444\u0430\u0439\u043B",en:"Delete torrent and file"},"actions.delete-torrent":{ru:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0442\u043E\u0440\u0440\u0435\u043D\u0442",en:"Delete torrent"},"actions.delete-torrent-keep-file":{ru:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0442\u043E\u0440\u0440\u0435\u043D\u0442, \u043D\u043E \u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0444\u0430\u0439\u043B",en:"Delete torrent but keep file"},"background-worker.connection-success":{ru:"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043A \u0441\u0435\u0440\u0432\u0435\u0440\u0443 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043E",en:"Connection to server successfully established"},"background-worker.error-detected":{ru:"\u041E\u0431\u043D\u0430\u0440\u0443\u0436\u0435\u043D\u0430 \u043E\u0448\u0438\u0431\u043A\u0430. \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 \u0432 \u043A\u043E\u043D\u0441\u043E\u043B\u0438",en:"An error has been detected. See console for details"}};var le=`<div class="full-start__button selector button--download">
    {icon}
    <span>{text}</span>
</div>`;function De(t){let e=$(Lampa.Template.get("download-button",{icon:w,text:Lampa.Lang.translate("download")}));e.on("hover:enter",a=>{Lampa.Activity.push({url:"",title:Lampa.Lang.translate("download"),component:"torrents-download",search_one:t.movie.title,search_two:t.movie.original_title,movie:t.movie,page:1})}),$(".full-start-new__buttons").children().first().after(e)}function ce(){Lampa.Template.add("download-button",le),Lampa.Component.add("torrents-download",Lampa.Component.get("torrents")),Lampa.Listener.follow("full",t=>{if(t.type==="complite"){let e=t.data;De(e)}}),Lampa.Listener.follow("torrent",t=>{let e=Lampa.Activity.active();t.type==="render"&&e.component==="torrents-download"&&($(t.item).off("hover:enter"),$(t.item).on("hover:enter",async a=>{try{await i.getClient().addTorrent(e.movie,t.element)}catch(o){let n=o&&o.message?o.message:String(o);throw Lampa.Bell.push({text:`Error adding torrent: ${n}`}),o}Lampa.Bell.push({text:"The torrent was added to the client"}),Lampa.Favorite.add("history",e.movie,100),e.activity.component().mark(t.element,t.item,!0)}))})}function pe(){window.plugin_transmission_ready=!0,Lampa.Manifest.plugins=s,Lampa.Lang.add(de),B(),ce(),Z(),ie(),te(),Lampa.Storage.field(v)&&u.start()}window.plugin_transmission_ready||(window.appready?pe():Lampa.Listener.follow("app",function(t){t.type==="ready"&&pe()}));})();
