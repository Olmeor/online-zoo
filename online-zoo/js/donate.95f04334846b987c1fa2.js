(()=>{"use strict";document.querySelector(".header__burger_open").onclick=function(e){const t=document.querySelector(".body__shadow"),r=document.querySelector(".header__nav"),c=document.querySelector(".header__designed"),o=document.querySelector(".header__title-burger"),a=document.querySelector(".header__burger_close");e.stopPropagation(),r.classList.add("header__nav_open"),c.classList.add("header__designed_active"),o.classList.add("header__title-burger_active"),t.classList.add("_active"),a.classList.add("header__burger_close_active"),document.body.style="overflow: hidden"},document.onclick=function(e){const t=document.querySelector(".body__shadow"),r=document.querySelector(".header__nav"),c=document.querySelector(".header__designed"),o=document.querySelector(".header__title-burger"),a=document.querySelector(".header__burger_close");let d=e.target==r;r.classList.contains("header__nav_open")&&!d&&(r.classList.remove("header__nav_open"),c.classList.remove("header__designed_active"),o.classList.remove("header__title-burger_active"),t.classList.remove("_active"),a.classList.remove("header__burger_close_active"),document.body.style="overflow: none")};const e=document.querySelectorAll(".donate__radio"),t=document.querySelector(".donate__input");e[5].checked=!0,t.value="100";const r=r=>{for(let t of e)t!==r.target&&(t.checked=!1);r.target.checked=!0,t.value=r.target.value};e.forEach((e=>e.onclick=r)),t.oninput=()=>{t.value.length>4&&(t.value=t.value.slice(0,-1)),0==t.value&&(t.value="");for(let r of e)r.value==t.value?r.checked=!0:r.checked=!1}})();