---
title: "What I Learned from Javascript30 (11~15)"
category: web  
date: '2020-03-16T05:35:07.322Z'
coverImage: '/assets/blog/dynamic-routing/cover.jpg'
tags:
  - web
  - front-end
  - javascript
  - html
  - video
  - keyboard
---

[Wes Bos](https://github.com/wesbos) 님의 Vanilla Javascript 강의인 [Javascript 30](https://javascript30.com)을 따라하며 새롭게 배운 내용들을 정리한 포스트입니다.

## 11. Custom Video Player

#### Video Events
```javascript
// <video src="652333414.mp4"></video>

const video = document.querySelector('video')

video.addEventListener("play", toggleButton);
video.addEventListener("pause", toggleButton);
video.addEventListener("timeupdate", toggleButton);
```

#### Video currentTime, duration
```javascript
video.duration // => entire video play time
video.currentTime += 10
```

#### Video volume, playbackRate
```javascript
video.volume // => range: [0,1]
video.playbackRate // => noraml: 1
```

#### KeyboardEvent.keyCode is deprecated
웹표준에서 keyCode 제외됨.

```javascript
KeyboardEvent: key=' ' | code='Space'
KeyboardEvent: key='a' | code='KeyA'
KeyboardEvent: key='s' | code='KeyS'
KeyboardEvent: key='d' | code='KeyD'
```
[keyCode](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode) 대신 
key, [code](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code) 사용



## 12. Key Sequence Detection

## 13. Slide in on Scroll

#### [Intersection Observer API](https://yhancsx.github.io/web/web-intersection-observer/)

## 14. Javascript Reference

#### 4 ways to copy array
```javascript
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

const team1 = players.slice()
const team2 = [].concat(players)
const team3 = [...players]
const team4 = Array.from(players)
const team5 = new Array(...players)
```

## 15. LocalStorage

#### Event Delegation
동적으로 추가되는 리스트에 추가적인 이벤트 리스너 삽입 필요 없음.