import React , {PropTypes} from 'react';
import dva from 'dva';

export default {
	namespace: 'vdctrl',
	state: {
		
		controllers: [{
			name: "布局",
			key: 'layout',
			content: [{
				icon: <svg width="62" height="50" viewBox="0 0 62 50" className="bem-Svg"  style={{'transform': 'translate(0px, 0px)'}}><path opacity=".25" fill="currentColor" d="M59 1H3c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2h56c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM14.5 3c.8 0 1.5.7 1.5 1.5S15.3 6 14.5 6 13 5.3 13 4.5 13.7 3 14.5 3zm-5 0c.8 0 1.5.7 1.5 1.5S10.3 6 9.5 6 8 5.3 8 4.5 8.7 3 9.5 3zm-5 0C5.3 3 6 3.7 6 4.5S5.3 6 4.5 6 3 5.3 3 4.5 3.7 3 4.5 3zM59 47H3V8h56v39z"></path><path opacity=".2" fill="currentColor" d="M5 10h52v16H5z"></path><g fill="currentColor"><path d="M5 10h2v4H5zm50 0h2v4h-2zM7 10h2v2H7zm16 0h4v2h-4zm-6 0h4v2h-4zm-6 0h4v2h-4zm18 0h4v2h-4zm6 0h4v2h-4zm6 0h4v2h-4zM23 24h4v2h-4zm-6 0h4v2h-4zm-6 0h4v2h-4zm18 0h4v2h-4zm6 0h4v2h-4zm6 0h4v2h-4zm6-14h4v2h-4zm0 14h4v2h-4z"></path><path d="M53 10h4v2h-4zm2 12h2v4h-2zM5 22h2v4H5zm0-6h2v4H5zm50 0h2v4h-2zm-2 8h2v2h-2z"></path><path d="M5 24h4v2H5z"></path></g><g opacity=".3" fill="currentColor"><path d="M5 29h2v4H5zm50 0h2v4h-2zM7 29h2v2H7zm16 0h4v2h-4zm-6 0h4v2h-4zm-6 0h4v2h-4zm18 0h4v2h-4zm6 0h4v2h-4zm6 0h4v2h-4zM23 43h4v2h-4zm-6 0h4v2h-4zm-6 0h4v2h-4zm18 0h4v2h-4zm6 0h4v2h-4zm6 0h4v2h-4zm6-14h4v2h-4zm0 14h4v2h-4z"></path><path d="M53 29h4v2h-4zm2 12h2v4h-2zM5 41h2v4H5zm0-6h2v4H5zm50 0h2v4h-2zm-2 8h2v2h-2z"></path><path d="M5 43h4v2H5z"></path></g><path opacity=".4" d="M57 10v16H5V10h52m1-1H4v18h54V9z"></path></svg>,
				name: '区段',
				key: 'section'
			}, {
    			icon: <svg width="62" height="50" viewBox="0 0 62 50" className="bem-Svg" style={{'transform': 'translate(0px, 0px)'}}><path opacity=".2" fill="currentColor" d="M14 10h34v34H14z"></path><g fill="currentColor"><path d="M14 10h2v4h-2zm32 0h2v4h-2zm-30 0h2v2h-2zm10 0h4v2h-4zm-6 0h4v2h-4zm12 0h4v2h-4zm-6 32h4v2h-4zm-6 0h4v2h-4zm12 0h4v2h-4zm6-32h4v2h-4zm0 32h4v2h-4z"></path><path d="M44 10h4v2h-4zm2 30h2v4h-2zm-32 0h2v4h-2zm0-18h2v4h-2zm0-6h2v4h-2zm32 6h2v4h-2zm-32 6h2v4h-2zm32 0h2v4h-2zm-32 6h2v4h-2zm32 0h2v4h-2zm0-18h2v4h-2zm-2 26h2v2h-2z"></path><path d="M14 42h4v2h-4z"></path></g><path opacity=".25" fill="currentColor" d="M59 1H3c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2h56c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM14.5 3c.8 0 1.5.7 1.5 1.5S15.3 6 14.5 6 13 5.3 13 4.5 13.7 3 14.5 3zm-5 0c.8 0 1.5.7 1.5 1.5S10.3 6 9.5 6 8 5.3 8 4.5 8.7 3 9.5 3zm-5 0C5.3 3 6 3.7 6 4.5S5.3 6 4.5 6 3 5.3 3 4.5 3.7 3 4.5 3zM59 47H3V8h56v39z"></path><path opacity=".4" d="M48 10v34H14V10h34m1-1H13v36h36V9z"></path></svg>,
				name: '容器',
				key: 'container'
			}, {
				icon: <svg width="62" height="50" viewBox="0 0 62 50" className="bem-Svg" style={{'transform': 'translate(0px, 0px)'}}><path opacity=".2" fill="currentColor" d="M14 10h16v34H14zm19 0h16v34H33z"></path><g fill="currentColor"><path d="M14 10h2v4h-2zm14 0h2v4h-2zm-12 0h2v2h-2zm4 0h4v2h-4zm0 32h4v2h-4z"></path><path d="M26 10h4v2h-4zm2 30h2v4h-2zm-14 0h2v4h-2zm0-18h2v4h-2zm0-6h2v4h-2zm14 6h2v4h-2zm-14 6h2v4h-2zm14 0h2v4h-2zm-14 6h2v4h-2zm14 0h2v4h-2zm0-18h2v4h-2zm-2 26h2v2h-2z"></path><path d="M14 42h4v2h-4zm19-32h2v4h-2zm14 0h2v4h-2zm-12 0h2v2h-2zm4 0h4v2h-4zm0 32h4v2h-4z"></path><path d="M45 10h4v2h-4zm2 30h2v4h-2zm-14 0h2v4h-2zm0-18h2v4h-2zm0-6h2v4h-2zm14 6h2v4h-2zm-14 6h2v4h-2zm14 0h2v4h-2zm-14 6h2v4h-2zm14 0h2v4h-2zm0-18h2v4h-2zm-2 26h2v2h-2z"></path><path d="M33 42h4v2h-4z"></path></g><path opacity=".25" fill="currentColor" d="M59 1H3c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2h56c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM14.5 3c.8 0 1.5.7 1.5 1.5S15.3 6 14.5 6 13 5.3 13 4.5 13.7 3 14.5 3zm-5 0c.8 0 1.5.7 1.5 1.5S10.3 6 9.5 6 8 5.3 8 4.5 8.7 3 9.5 3zm-5 0C5.3 3 6 3.7 6 4.5S5.3 6 4.5 6 3 5.3 3 4.5 3.7 3 4.5 3zM59 47H3V8h56v39z"></path><path opacity=".4" d="M30 10v34H14V10h16m1-1H13v36h18V9zm18 1v34H33V10h16m1-1H32v36h18V9z"></path></svg>,
				name: '栅格',
				key: 'columns'
			}]
		}, {
			name: "基础组件",
			key: 'basic',
			content: [{
				icon: <svg width="36" height="36" viewBox="0 0 36 36" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path opacity=".2" fill="currentColor" d="M1 1h34v34H1z"></path><g fill="currentColor"><path d="M1 1h2v4H1zm32 0h2v4h-2zM3 1h2v2H3zm10 0h4v2h-4zM7 1h4v2H7zm12 0h4v2h-4zm-6 32h4v2h-4zm-6 0h4v2H7zm12 0h4v2h-4zm6-32h4v2h-4zm0 32h4v2h-4z"></path><path d="M31 1h4v2h-4zm2 30h2v4h-2zM1 31h2v4H1zm0-18h2v4H1zm0-6h2v4H1zm32 6h2v4h-2zM1 19h2v4H1zm32 0h2v4h-2zM1 25h2v4H1zm32 0h2v4h-2zm0-18h2v4h-2zm-2 26h2v2h-2z"></path><path d="M1 33h4v2H1z"></path></g><path opacity=".4" d="M35 1v34H1V1h34m1-1H0v36h36V0z"></path></svg>,				
				name: 'div块',
				key: 'div-block'
			}, {
				icon: <svg width="36" height="36" viewBox="0 0 36 36" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path opacity=".2" fill="currentColor" d="M1 1h34v34H1z"></path><g fill="currentColor"><path d="M1 1h2v4H1zm32 0h2v4h-2zM3 1h2v2H3zm10 0h4v2h-4zM7 1h4v2H7zm12 0h4v2h-4zm-6 32h4v2h-4zm-6 0h4v2H7zm12 0h4v2h-4zm6-32h4v2h-4zm0 32h4v2h-4z"></path><path d="M31 1h4v2h-4zm2 30h2v4h-2zM1 31h2v4H1zm0-18h2v4H1zm0-6h2v4H1zm32 6h2v4h-2zM1 19h2v4H1zm32 0h2v4h-2zM1 25h2v4H1zm32 0h2v4h-2zm0-18h2v4h-2zm-2 26h2v2h-2z"></path><path d="M1 33h4v2H1z"></path></g><path opacity=".4" d="M35 1v34H1V1h34m1-1H0v36h36V0z"></path><path opacity=".5" fill="currentColor" d="M13.6 27c-1.2 0-2.4-.5-3.2-1.3-.9-.9-1.3-2-1.3-3.2 0-1.2.5-2.4 1.3-3.2l3.2-3.2c.3-.3.7-.6 1-.8.7-.4 1.4-.6 2.2-.6 1.5 0 2.8.7 3.7 1.9l-1.3 1.3c-.5-.8-1.4-1.4-2.4-1.4-.2 0-.4 0-.6.1-.5.1-1 .4-1.3.7l-3.2 3.2c-.5.5-.8 1.2-.8 2 0 .7.3 1.4.8 2 .5.5 1.2.8 2 .8.7 0 1.4-.3 2-.8l.9-.9c.7.3 1.4.4 2.2.4L17 25.8c-1.1.7-2.2 1.2-3.4 1.2zm5.1-5.1c-.4 0-.7 0-1.1-.1-.8-.2-1.6-.6-2.2-1.2l-.5-.5 1.3-1.3c.1.2.3.4.4.5.5.5 1.2.8 2 .8.7 0 1.4-.3 2-.8l3.2-3.2c.5-.5.8-1.2.8-2 0-.7-.3-1.4-.8-2-.5-.5-1.2-.8-2-.8-.7 0-1.4.3-2 .8l-.7.9c-.7-.3-1.4-.4-2.2-.4l1.8-1.8c.9-.9 2-1.3 3.2-1.3 1.2 0 2.4.5 3.2 1.3.9.9 1.3 2 1.3 3.2s-.5 2.4-1.3 3.2l-3.2 3.2c-.3.3-.7.6-1 .8-.7.5-1.4.7-2.2.7z"></path></svg>,				
				name: '链接',
				key: 'link-block'
			}, {
				icon: <svg width="59" height="31" viewBox="0 0 59 31" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path opacity=".4" d="M56 0H3C1.3 0 0 1.3 0 3v25c0 1.7 1.3 3 3 3h53c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3z"></path><path fill="currentColor" d="M10 16.7H8.8v1.6H10c.6 0 .8-.4.8-.8s-.2-.8-.8-.8zm29.8-2.9c-1.2 0-2.1 1-2.1 2.3 0 1.3.9 2.4 2.1 2.4 1.2 0 2.1-1 2.1-2.4.1-1.4-.9-2.3-2.1-2.3zm-29.3.7c0-.4-.2-.7-.7-.7h-1v1.4h1c.5 0 .7-.4.7-.7zM56 1H3c-1.1 0-2 .9-2 2v25c0 1.1.9 2 2 2h53c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM9.8 20H6.9v-7.9h2.9c1.6 0 2.7.7 2.7 2.1 0 .7-.3 1.3-.9 1.7.9.3 1.2 1.1 1.2 1.8 0 1.7-1.4 2.3-3 2.3zm10.8-2.9c0 1.8-1.3 3-3.3 3-2 0-3.3-1.3-3.3-3v-5h2v5c0 .8.5 1.3 1.4 1.3s1.4-.4 1.4-1.3v-5h1.9v5zm7.6-3.3h-2.4V20h-1.9v-6.2h-2.4v-1.7h6.7v1.7zm7.1 0h-2.4V20H31v-6.2h-2.4v-1.7h6.7v1.7zm4.5 6.3c-2.4 0-4.1-1.8-4.1-4.1s1.7-4 4.1-4c2.4 0 4.1 1.8 4.1 4 .1 2.3-1.7 4.1-4.1 4.1zm12.1-.1H50l-2.2-3.7c-.3-.5-.7-1.3-.7-1.3s.1.8.1 1.3V20h-1.9v-7.9h1.9l2.2 3.7c.3.5.7 1.3.7 1.3s-.1-.8-.1-1.3v-3.7h1.9V20z"></path></svg>,
				name: '按钮',
				key: 'button'
			}, {
				icon: <svg width="48" height="36" viewBox="0 0 48 36" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path opacity=".2" fill="currentColor" d="M1 1h46v34H1z"></path><g fill="currentColor"><path d="M1 1h2v4H1zm44 0h2v4h-2zM3 1h2v2H3zm10 0h4v2h-4zM7 1h4v2H7zm12 0h4v2h-4zm-6 32h4v2h-4zm-6 0h4v2H7zm12 0h4v2h-4zm6-32h4v2h-4zm0 32h4v2h-4zm6-32h4v2h-4zm0 32h4v2h-4zm6-32h4v2h-4zm0 32h4v2h-4z"></path><path d="M43 1h4v2h-4zm2 30h2v4h-2zM1 31h2v4H1zm0-18h2v4H1zm0-6h2v4H1zm44 6h2v4h-2zM1 19h2v4H1zm44 0h2v4h-2zM1 25h2v4H1zm44 0h2v4h-2zm0-18h2v4h-2zm-2 26h2v2h-2z"></path><path d="M1 33h4v2H1z"></path></g><path opacity=".5" fill="currentColor" d="M18 14v-4h20v4H18m-2-6v8h24V8M18 26v-4h20v4H18m-2-6v8h24v-8"></path><circle fill="currentColor" cx="10" cy="12" r="2" opacity=".5"></circle><circle fill="currentColor" cx="10" cy="24" r="2" opacity=".5"></circle><path opacity=".4" d="M47 1v34H1V1h46m1-1H0v36h48V0z"></path></svg>,
				name: '列表',
				key: 'list'
			}, {
				icon: <svg width="48" height="36" viewBox="0 0 48 36" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><g opacity=".3" fill="currentColor"><path d="M1 1h2v4H1zm44 0h2v4h-2zM3 1h2v2H3zm10 0h4v2h-4zM7 1h4v2H7zm12 0h4v2h-4zm-6 32h4v2h-4zm-6 0h4v2H7zm12 0h4v2h-4zm6-32h4v2h-4zm0 32h4v2h-4zm6-32h4v2h-4zm0 32h4v2h-4zm6-32h4v2h-4zm0 32h4v2h-4z"></path><path d="M43 1h4v2h-4zm2 30h2v4h-2zM1 31h2v4H1zm0-18h2v4H1zm0-6h2v4H1zm44 6h2v4h-2zM1 19h2v4H1zm44 0h2v4h-2zM1 25h2v4H1zm44 0h2v4h-2zm0-18h2v4h-2zm-2 26h2v2h-2z"></path><path d="M1 33h4v2H1z"></path></g><circle cx="9" cy="12" r="3" opacity=".4"></circle><circle fill="currentColor" cx="9" cy="12" r="2"></circle><circle cx="9" cy="24" r="3" opacity=".4"></circle><circle fill="currentColor" cx="9" cy="24" r="2"></circle><path fill="currentColor" d="M38 10v4H18v-4h20m2-2H16v8h24V8z"></path><path opacity=".2" fill="currentColor" d="M18 10h20v4H18z"></path><path opacity=".4" d="M40 8v8H16V8h24m1-1H15v10h26V7z"></path><path fill="currentColor" d="M38 22v4H18v-4h20m2-2H16v8h24v-8z"></path><path opacity=".2" fill="currentColor" d="M18 22h20v4H18z"></path><path opacity=".4" d="M40 20v8H16v-8h24m1-1H15v10h26V19z"></path></svg>,
				name: '列表项',
				key: 'list-item'
			}]
		}, {
			name: "段落",
			key: 'typo',
			content: [{
				icon: <svg width="60" height="32" viewBox="0 0 60 32" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path opacity=".4" d="M6.9 5.5H4V1.2H.4V13H4V9h2.9v4h3.7V1.2H6.9v4.3zm26.6-1.8c-.4-.2-.9-.2-1.4-.2-1.3 0-2.4.4-3.3 1.3-.5.5-.9 1.1-1.1 1.8-.1-1-.5-1.7-1.2-2.2-.7-.6-1.7-.9-2.8-.9-1.4 0-2.6.4-3.7 1.3l-.7.6.6.8.7 1-.2.1c-.2.1-.3.2-.4.3-.1-1.2-.5-2.2-1.4-3-.9-.8-2-1.2-3.2-1.2-1.3 0-2.4.4-3.3 1.3-1 .9-1.4 2.1-1.4 3.5 0 1.5.5 2.6 1.4 3.5.9.9 2 1.3 3.4 1.3 1.6 0 2.9-.5 3.9-1.6l.3-.3V11c.2.4.4.8.8 1 .7.6 1.6.9 2.6.9.5 0 1-.1 1.5-.2v.3H28v-2.9c-.1-.2-.1-.4-.1-.5.2.9.6 1.6 1.2 2.2.9.9 2 1.4 3.2 1.4.6 0 1.1-.1 1.5-.3v.1H37V.6h-3.6v3.1zm-14.4 6.4L19 10h.1v-.3c0 .2 0 .4.1.6 0 0-.1-.1-.1-.2zm4.2-.3c-.3 0-.5-.1-.6-.1.1 0 .3-.1.7-.1h.6c-.3.1-.5.2-.7.2zm9.8-.4c-.2.3-.5.4-.8.4-.4 0-.6-.1-.9-.4-.3-.3-.4-.6-.4-1 0-.5.1-.8.4-1.1.3-.3.5-.4.9-.4.3 0 .6.1.8.4.3.3.4.6.4 1.1 0 .4-.1.7-.4 1zM40.5 1c-.4-.4-.9-.6-1.4-.6-.5 0-1 .2-1.4.6-.4.4-.6.9-.6 1.4 0 .4.1.8.4 1.2h-.2V13h3.6V3.6h-.2c.3-.3.4-.7.4-1.2 0-.6-.2-1.1-.6-1.4zm15 2.6v.1c-.4-.2-.9-.2-1.4-.2-1.3 0-2.3.5-3.2 1.4-.5.5-.8 1.1-1 1.8-.1-.8-.5-1.5-1-2.1-.7-.7-1.6-1.1-2.7-1.1-.5 0-1 .1-1.5.3v-.2h-3.6V13h3.6V8c0-.6.2-.8.3-.8.2-.2.5-.3.7-.3.4 0 .7 0 .7 1.1v5H50V9.8c-.1-.2-.1-.3-.1-.5.2.8.5 1.5 1.1 2.1.1.2.3.3.5.4l-.3.5-.7 1.2-.5.8.7.6c1.1.8 2.3 1.3 3.7 1.3 1.4 0 2.5-.4 3.4-1.3.9-.9 1.4-2.1 1.4-3.7V3.6h-3.7zm-.3 5.3c-.2.2-.5.3-.8.3-.4 0-.6-.2-.8-.3-.2-.3-.3-.6-.3-.9 0-.4.1-.7.3-1 .2-.2.4-.3.7-.3.4 0 .6.1.8.3.2.3.3.6.3 1 .1.4 0 .7-.2.9z"></path><g fill="currentColor"><path d="M1.4 12V2.2H3v4.2h4.9V2.2h1.7V12H7.9V8H3v4H1.4z"></path><path d="M1.4 12V2.2H3v4.2h4.9V2.2h1.7V12H7.9V8H3v4H1.4zm17.5-3h-5.8c0 .5.3 1 .7 1.3.5.3 1 .5 1.6.5.9 0 1.6-.3 2.1-.9l.9 1c-.8.8-1.8 1.2-3.1 1.2-1 0-1.9-.3-2.7-1s-1.1-1.6-1.1-2.8c0-1.2.4-2.1 1.1-2.8.7-.7 1.6-1 2.6-1s1.9.3 2.6.9 1.1 1.5 1.1 2.5V9zm-5.8-1.3h4.3c0-.6-.2-1.1-.6-1.4-.4-.3-.9-.5-1.4-.5s-1.2.2-1.6.5c-.5.4-.7.8-.7 1.4z"></path><path d="M18.9 9h-5.8c0 .5.3 1 .7 1.3.5.3 1 .5 1.6.5.9 0 1.6-.3 2.1-.9l.9 1c-.8.8-1.8 1.2-3.1 1.2-1 0-1.9-.3-2.7-1s-1.1-1.6-1.1-2.8c0-1.2.4-2.1 1.1-2.8.7-.7 1.6-1 2.6-1s1.9.3 2.6.9 1.1 1.5 1.1 2.5V9zm-5.8-1.3h4.3c0-.6-.2-1.1-.6-1.4-.4-.3-.9-.5-1.4-.5s-1.2.2-1.6.5c-.5.4-.7.8-.7 1.4zM26.7 12h-1.4v-1c-.6.7-1.4 1.1-2.5 1.1-.8 0-1.4-.2-1.9-.7s-.8-1-.8-1.8.3-1.3.8-1.6c.5-.4 1.3-.5 2.2-.5h2v-.3c0-1-.6-1.5-1.7-1.5-.7 0-1.4.3-2.2.8l-.7-1c.9-.7 1.9-1.1 3.1-1.1.9 0 1.6.2 2.1.7s.8 1.1.8 2.1V12zm-1.6-2.8v-.6h-1.8c-1.1 0-1.7.4-1.7 1.1 0 .4.1.6.4.8.3.2.7.3 1.2.3s.9-.1 1.3-.4c.4-.3.6-.7.6-1.2z"></path><path d="M26.7 12h-1.4v-1c-.6.7-1.4 1.1-2.5 1.1-.8 0-1.4-.2-1.9-.7s-.8-1-.8-1.8.3-1.3.8-1.6c.5-.4 1.3-.5 2.2-.5h2v-.3c0-1-.6-1.5-1.7-1.5-.7 0-1.4.3-2.2.8l-.7-1c.9-.7 1.9-1.1 3.1-1.1.9 0 1.6.2 2.1.7s.8 1.1.8 2.1V12zm-1.6-2.8v-.6h-1.8c-1.1 0-1.7.4-1.7 1.1 0 .4.1.6.4.8.3.2.7.3 1.2.3s.9-.1 1.3-.4c.4-.3.6-.7.6-1.2zm4.4 1.8c-.7-.7-1-1.6-1-2.8s.4-2.1 1.1-2.8c.7-.7 1.6-1 2.6-1s1.8.4 2.4 1.3V1.6H36V12h-1.6v-1.1c-.6.8-1.4 1.2-2.5 1.2-.9 0-1.7-.3-2.4-1.1zm.5-2.7c0 .7.2 1.3.7 1.7.5.4 1 .7 1.6.7.6 0 1.1-.2 1.6-.7.4-.5.6-1 .6-1.7s-.2-1.3-.6-1.8c-.4-.5-1-.7-1.6-.7s-1.2.2-1.7.7c-.4.5-.6 1.1-.6 1.8z"></path><path d="M29.5 11c-.7-.7-1-1.6-1-2.8s.4-2.1 1.1-2.8c.7-.7 1.6-1 2.6-1s1.8.4 2.4 1.3V1.6H36V12h-1.6v-1.1c-.6.8-1.4 1.2-2.5 1.2-.9 0-1.7-.3-2.4-1.1zm.5-2.7c0 .7.2 1.3.7 1.7.5.4 1 .7 1.6.7.6 0 1.1-.2 1.6-.7.4-.5.6-1 .6-1.7s-.2-1.3-.6-1.8c-.4-.5-1-.7-1.6-.7s-1.2.2-1.7.7c-.4.5-.6 1.1-.6 1.8zm8.4-5.2c-.2-.2-.3-.4-.3-.7s.1-.5.3-.7c.2-.2.4-.3.7-.3s.5.1.7.3.3.4.3.7-.1.5-.3.7c-.2.2-.4.3-.7.3s-.5-.1-.7-.3zm1.5 8.9h-1.6V4.6h1.6V12z"></path><path d="M38.4 3.1c-.2-.2-.3-.4-.3-.7s.1-.5.3-.7c.2-.2.4-.3.7-.3s.5.1.7.3.3.4.3.7-.1.5-.3.7c-.2.2-.4.3-.7.3s-.5-.1-.7-.3zm1.5 8.9h-1.6V4.6h1.6V12zm3.8-4v4h-1.6V4.6h1.6V6c.3-.5.6-.8 1-1.1.4-.3.9-.4 1.4-.4.8 0 1.5.3 2 .8.6.4.9 1.2.9 2.1V12h-1.6V7.9c0-1.4-.6-2.1-1.7-2.1-.5 0-1 .2-1.4.5-.4.5-.6 1-.6 1.7z"></path><path d="M43.7 8v4h-1.6V4.6h1.6V6c.3-.5.6-.8 1-1.1.4-.3.9-.4 1.4-.4.8 0 1.5.3 2 .8.6.4.9 1.2.9 2.1V12h-1.6V7.9c0-1.4-.6-2.1-1.7-2.1-.5 0-1 .2-1.4.5-.4.5-.6 1-.6 1.7zm14.4-3.4V11c0 1.3-.4 2.3-1.1 3s-1.6 1-2.8 1-2.1-.3-3-1l.7-1.2c.7.6 1.5.8 2.2.8.7 0 1.3-.2 1.8-.6s.7-1 .7-1.8v-1c-.2.4-.6.8-1 1.1-.4.3-.9.4-1.5.4-1 0-1.8-.3-2.4-1-.6-.7-1-1.5-1-2.6 0-1 .3-1.9 1-2.6.6-.7 1.4-1 2.4-1s1.8.4 2.4 1.2V4.6h1.6zM52.2 8c0 .6.2 1.1.6 1.6s.9.7 1.5.7 1.2-.2 1.6-.6c.4-.4.6-1 .6-1.6 0-.6-.2-1.2-.6-1.6s-.9-.8-1.6-.8-1.1.2-1.5.7c-.4.4-.6 1-.6 1.6z"></path><path d="M58.1 4.6V11c0 1.3-.4 2.3-1.1 3s-1.6 1-2.8 1-2.1-.3-3-1l.7-1.2c.7.6 1.5.8 2.2.8.7 0 1.3-.2 1.8-.6s.7-1 .7-1.8v-1c-.2.4-.6.8-1 1.1-.4.3-.9.4-1.5.4-1 0-1.8-.3-2.4-1-.6-.7-1-1.5-1-2.6 0-1 .3-1.9 1-2.6.6-.7 1.4-1 2.4-1s1.8.4 2.4 1.2V4.6h1.6zM52.2 8c0 .6.2 1.1.6 1.6s.9.7 1.5.7 1.2-.2 1.6-.6c.4-.4.6-1 .6-1.6 0-.6-.2-1.2-.6-1.6s-.9-.8-1.6-.8-1.1.2-1.5.7c-.4.4-.6 1-.6 1.6z"></path></g><path fill="currentColor" d="M1 17v2h57v-2H1zm55 4H1v2h55v-2zM1 27h56v-2H1v2zm0 4h27v-2H1v2z" opacity=".25"></path></svg>,
				name: '头部',
				key: 'heading'
			}, {
				icon: <svg width="59" height="16" viewBox="0 0 59 16" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path opacity=".4" d="M0 0v16h29v-4h29V8h-1V4h2V0H0zm1 7h55H1zm57-4H1h57z"></path><path fill="currentColor" d="M1 1v2h57V1H1zm55 4H1v2h55V5zM1 11h56V9H1v2zm0 4h27v-2H1v2z"></path></svg>,
				name: '段落',
				key: 'paragraph'
			}, {
				icon: <svg width="31" height="19" viewBox="0 0 31 19" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path opacity=".4" d="M11.3 1c-.4-.4-.9-.6-1.4-.6-.5 0-1 .2-1.4.6-.4.3-.6.8-.6 1.4 0 .4.1.8.4 1.2h-.2v5.9H4V1.2H.4V13h11.3V3.6h-.2c.3-.3.4-.7.4-1.2-.1-.6-.3-1.1-.6-1.4zm-3.8 9.4H3V2.2H1.4V12 2.2H3v8.2h4.5zm2.9-7.3c-.2.1-.4.2-.6.2.3.1.5 0 .6-.2zM9.2 1.7c.1-.1.2-.1.2-.2-.1 0-.2.1-.2.2zm0 1.4c.2.2.3.2.5.3-.2-.1-.4-.2-.5-.3-.1-.1-.2-.2-.2-.3 0 .1.1.2.2.3zm1.4 1.5H9.1V12 4.6h1.5zm.1-1.7c.1-.2.2-.3.2-.5s-.1-.4-.2-.6c.1.2.2.3.2.5-.1.3-.1.4-.2.6zm6.2.5c-.5 0-1 .1-1.5.3v-.1h-3.6V13h3.6V8c0-.6.2-.8.3-.8.2-.2.5-.3.7-.3.4 0 .7 0 .7 1.1v5h3.6V7.4c0-1.2-.4-2.2-1.1-2.9-.6-.7-1.6-1.1-2.7-1.1zm-2.4 1.2h-1.6V12 4.6h1.6zm0 1.3c.1-.2.2-.4.4-.5-.2.1-.3.3-.4.5zm2 0c-.4 0-.7.1-1 .3.2-.3.6-.3 1-.3s.8.1 1.1.3c-.3-.2-.7-.3-1.1-.3zm2.5-.7c.2.2.3.3.4.5-.1-.2-.3-.3-.4-.5zm8 2.4l2.3-2.4 1.6-1.7h-4.8l-.3.3-1.3 1.4V.6h-3.6V13h3.6v-2.7l1.5 2.2.3.4h4.3l-1.1-1.6L27 7.6zm-3.5-6v6.1-6.1zm0 8.3V12 9.9zm1.1-1.2l.9 1.4-.9-1.4zm.2-2.3l1.7-1.8h2-2l-1.7 1.8z"></path><g fill="currentColor"><path d="M1.4 12V2.2H3v8.2h4.5V12H1.4z"></path><path d="M1.4 12V2.2H3v8.2h4.5V12H1.4zm7.8-8.9c-.2-.2-.3-.5-.3-.7s.1-.5.3-.7c.2-.2.4-.3.7-.3s.5.1.7.3.3.4.3.7-.1.5-.3.7c-.2.2-.4.3-.7.3s-.5-.1-.7-.3zm1.4 8.9H9.1V4.6h1.6V12z"></path><path d="M9.2 3.1c-.2-.2-.3-.5-.3-.7s.1-.5.3-.7c.2-.2.4-.3.7-.3s.5.1.7.3.3.4.3.7-.1.5-.3.7c-.2.2-.4.3-.7.3s-.5-.1-.7-.3zm1.4 8.9H9.1V4.6h1.6V12zm3.9-4v4h-1.6V4.6h1.6V6c.3-.5.6-.8 1-1.1.4-.3.9-.4 1.4-.4.8 0 1.5.3 2 .8s.8 1.3.8 2.2V12h-1.6V7.9c0-1.4-.6-2.1-1.7-2.1-.5 0-1 .2-1.4.5-.3.5-.5 1-.5 1.7z"></path><path d="M14.5 8v4h-1.6V4.6h1.6V6c.3-.5.6-.8 1-1.1.4-.3.9-.4 1.4-.4.8 0 1.5.3 2 .8s.8 1.3.8 2.2V12h-1.6V7.9c0-1.4-.6-2.1-1.7-2.1-.5 0-1 .2-1.4.5-.3.5-.5 1-.5 1.7zm9 4h-1.6V1.6h1.6v6.1l3-3.2h2l-2.8 3 3 4.5h-1.9l-2.2-3.3-1.1 1.1V12z"></path><path d="M23.5 12h-1.6V1.6h1.6v6.1l3-3.2h2l-2.8 3 3 4.5h-1.9l-2.2-3.3-1.1 1.1V12z"></path></g><g opacity=".4"><path d="M1 18v-2h29v2H1m30-3H0v4h31v-4"></path><path d="M1 16h29v2H1z"></path></g><path fill="currentColor" d="M1 16h29v2H1z"></path></svg>,
				name: '文本链接',
				key: 'text-link'
			}, {
				icon: <svg width="33" height="13" viewBox="0 0 33 13" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path opacity=".4" d="M10 .2H.4v3.5h3V12h3.7V3.7h3V.2zm22.4 9.7l-.6-1.1-.7-1.2-.9 1-.2.2v-3h2V2.6h-2V.2h-3.6v2.3H23l-.3.5-.8 1.2-.8-1.2-.3-.5h-4.4l.8 1.2-.2-.2c-.9-.8-2-1.2-3.2-1.2-1.3 0-2.4.4-3.3 1.3-1 .9-1.4 2.1-1.4 3.5 0 1.5.5 2.6 1.4 3.5.9.9 2.1 1.3 3.4 1.3 1.1 0 2.1-.3 2.9-.8l-.5.9h4.3l.3-.4.9-1.3 1 1.3.3.4h4.4l-1.1-1.6L24 7.2l1.3-1.8v.5h.9v2.7c0 1.1.3 1.9 1 2.6.7.6 1.5 1 2.4 1 .9 0 1.8-.3 2.5-1l.6-.5-.3-.8zM18 9.5l-.3-.3-.2-.2h.9l-.4.5zm.5-.7V6.9c0-.7-.1-1.3-.3-1.8l1.5 2.2-1.2 1.5zm6.8-5.2l-2.5 3.6 2.5-3.6z"></path><path d="M6.1 2.7V11H4.4V2.7h-3V1.2H9v1.5H6.1zM17.5 8h-5.8c0 .5.3 1 .7 1.3.5.3 1 .5 1.6.5.9 0 1.6-.3 2.1-.9l.9 1c-.8.8-1.8 1.2-3.1 1.2-1 0-1.9-.3-2.7-1s-1.1-1.6-1.1-2.8c0-1.2.4-2.1 1.1-2.8.7-.7 1.6-1 2.6-1s1.9.3 2.6.9 1.1 1.5 1.1 2.5V8zm-5.8-1.3H16c0-.6-.2-1.1-.6-1.4-.4-.3-.9-.5-1.5-.5s-1.1.2-1.5.5c-.5.4-.7.8-.7 1.4zm8.6-3.1L21.9 6l1.7-2.5h1.9l-2.6 3.6 2.7 3.8h-1.9l-1.8-2.5-1.8 2.6h-1.8l2.6-3.8-2.5-3.7h1.9zm8.5 1.2v3.8c0 .4.1.6.3.8.2.2.4.3.8.3s.7-.2 1-.5l.6 1.1c-.6.5-1.2.7-1.8.7-.7 0-1.2-.2-1.7-.7-.5-.5-.7-1.1-.7-1.9V4.8h-.9V3.6h.9V1.2h1.6v2.3h2v1.3h-2.1z" fill="currentColor"></path></svg>,
				name: '文本块',
				key: 'text-block'
			}, {
				icon: <svg width="56" height="29" viewBox="0 0 56 29" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path opacity=".4" d="M56 17v-4h-2V9H22v8H0v12h36v-4h19v-4h-1v-4h2zm-1-3v2-2zm-32 0v2-2zm-4.1 2l.8.2.3-.7.8-1.7.5-1-1-.4c-1.1-.4-2-1.3-2.4-2.3H21V0H11v6.5c0 4.9 3 8.5 7.9 9.5zm-2.2-7H20h-3.3zm-8.8 7l.8.2.3-.8.8-1.7.5-1-1-.4c-1.1-.4-2-1.3-2.4-2.3H10V0H0v6.5C0 11.4 3 15 7.9 16zm1-2.7l-.5 1 .5-1C7.7 12.8 6.7 12 6.2 11c.5 1 1.5 1.8 2.7 2.3zM5.7 9H9V1v8H5.7z"></path><path fill="currentColor" d="M23 14v2h32v-2H23zm30 4H1v2h52v-2zm0-8H23v2h30v-2zM1 24h53v-2H1v2zm0 4h34v-2H1v2zM1 6.5c0 4.6 2.9 7.7 7.1 8.5l.8-1.7c-2-.8-3.2-2.5-3.2-4.3H9V1H1v5.5zM20 1h-8v5.5c0 4.6 2.9 7.7 7.1 8.5l.8-1.7c-1.9-.7-3.2-2.5-3.2-4.3H20V1z"></path></svg>,
				name: '引用',
				key: 'block-quote'
			}, {
				icon: <svg width="55" height="33" viewBox="0 0 55 33" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path opacity=".4" d="M45 1H25v6h20V1zm-1 1H26v4h18-18V2h18zM20 19c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3H3C1.3 0 0 1.3 0 3v13c0 1.7 1.3 3 3 3h17zm2-16c0-.5-.2-.9-.5-1.3.3.4.5.8.5 1.3zm-7.5 4.7l-4.1 4.5 4.1-4.5zm-4 5.9l3.9-4.3L18 14h-7.9l.4-.4zm-3.2-1.9L9 13.6l.4.4H5.2l2.1-2.3zm-1.2-.2l1.1-1.3-1.1 1.3zm2.4.1l1.2 1.3-1.2-1.3zM9 6c0-.7-.4-1.3-.9-1.7.5.4.9 1 .9 1.7zM7 5c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm-1-.7c-.6.3-1 1-1 1.7 0 1.1.9 2 2 2 .7 0 1.2-.3 1.6-.8-.4.5-.9.8-1.6.8-1.1 0-2-.9-2-2 0-.7.4-1.4 1-1.7zM3 15h17l-4.5-6 4.5 6H3zm-2 1V3c0-.5.2-.9.5-1.3-.3.4-.5.8-.5 1.3v13c0 .6.2 1.1.6 1.4-.4-.4-.6-.9-.6-1.4zm2 2h17c.4 0 .8-.1 1.1-.3-.3.2-.7.3-1.1.3H3zm22-9v12H1v12h34v-4h17v-4h2v-4h-2v-4h2v-4h1V9H25zm1 9v2h25-25v-2zM2 26v2-2zm32 6H2v-2 2h32zm19-10H2v2h51H2v-2h51zm0-8H26v2-2h27zm1-2H26v-2h28v2zm0-2H26v2h28v-2z"></path><path fill="currentColor" d="M26 10v2h28v-2H26zm0 6h27v-2H26v2zM44 2H26v4h18V2zm7 16H26v2h25v-2zM2 28h49v-2H2v2zm0-4h51v-2H2v2zm0 8h32v-2H2v2zm18-14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h17zM7 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm.3 6.3L9.8 13l4.7-5.2L20 15H3l4.3-4.7z"></path></svg>,
				name: '富文本框',
				key: 'rich-text'
			}]
		}, {
			name: "媒体",
			key: 'media',
			content: [{
				icon: <svg width="50" height="37" viewBox="0 0 50 37" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path opacity=".4" d="M47 0H3C1.3 0 0 1.3 0 3v31c0 1.7 1.3 3 3 3h44c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3zm0 36H3c-.8 0-1.4-.5-1.8-1.1.4.6 1 1.1 1.8 1.1h44zM16 12.5c0 1.4-1.1 2.5-2.5 2.5S11 13.9 11 12.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5zm-3.9 3.2s-.1 0-.1-.1l.1.1zm11.2 8.4l.7-.8 6.9-7.9 9 13.7H12.4l7.5-8.5 2.7 2.7.7.8zM41.8 30l-8.4-12.7L41.8 30zm-18.5-7.4l3.5-4-3.5 4zm-3.4-3.5l-4.4 5 4.4-5 1 1-1-1zM13.5 9c-1.9 0-3.5 1.6-3.5 3.5 0 1.2.6 2.3 1.5 2.9-.9-.6-1.5-1.7-1.5-2.9 0-1.9 1.6-3.5 3.5-3.5.5 0 .9.1 1.4.3-.5-.2-.9-.3-1.4-.3zM49 3v-.4c-.2-.9-1-1.6-2-1.6H3h44c1 0 1.8.7 2 1.6V3z"></path><path fill="currentColor" d="M47 1H3c-1.1 0-2 .9-2 2v31c0 1.1.9 2 2 2h44c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM13.5 9c1.9 0 3.5 1.6 3.5 3.5S15.4 16 13.5 16 10 14.4 10 12.5 11.6 9 13.5 9zm-3.3 21l9.6-10.9 3.4 3.5 7.7-8.9L41.8 30H10.2z"></path></svg>,
				name: '图片',
				key: 'image'
			}, {
				icon: <svg width="50" height="37" viewBox="0 0 50 37" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path opacity=".4" d="M47 0H3C1.3 0 0 1.3 0 3v31c0 1.7 1.3 3 3 3h44c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3zm-9 13.7v9.6l-6-3.4v-2.8l6-3.4zM39 25l-3.6-2 3.6 2zM13 14c0-.6.4-1 1-1h13c.6 0 1 .4 1 1v9c0 .6-.4 1-1 1H14c-.6 0-1-.4-1-1v-9zm1 11h13c.9 0 1.7-.6 1.9-1.5-.2.8-1 1.5-1.9 1.5H14c-.6 0-1.1-.2-1.4-.6.3.4.9.6 1.4.6zm14.7-12.1c-.1-.1-.2-.2-.2-.3 0 .1.1.2.2.3.2.3.3.7.3 1.1 0-.4-.1-.8-.3-1.1zM1 3c0-.2 0-.3.1-.5-.1.2-.1.3-.1.5zm.1 31.5c-.1-.1-.1-.3-.1-.5 0 .2 0 .4.1.5z"></path><path fill="currentColor" d="M47 1H3c-1.1 0-2 .9-2 2v31c0 1.1.9 2 2 2h44c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM29 23c0 1.1-.9 2-2 2H14c-1.1 0-2-.9-2-2v-9c0-1.1.9-2 2-2h13c1.1 0 2 .9 2 2v9zm10 2l-8-4.5v-4l8-4.5v13z"></path></svg>,
				name: '视频',
				key: 'video'
			}]
		}]
	},

	reducers: {

		showInteractionCreator(state, { payload: fileList }) {
			state.interactionCreator.modalCreator.visible = true;
			return {...state};
		}

	}

}