import './index.html';
import './index.less';
import dva from 'dva';
import { message } from 'antd';
import createLoading from 'dva-loading';
import packUIStage from './utils/packUIState.js';
import auth from './utils/auth';

import dragging from './utils/dragging.js';

dragging();//

localStorage.itemToCut = localStorage.itemToCut || undefined;
localStorage.itemToCopy = localStorage.itemToCopy || undefined;

window.flag = false;
window.fileFlag = false;
window.isListenBGImageEvt = false;

if(document.domain != 'localhost') {
	window.debug = false;
	document.domain = 'gospely.com';
}else {
	window.debug = true;
}

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

function closeLeftPanel(){
	alert("123");
};
console.log(document);
// 1. 认证和状态同步
auth();
localStorage.flashState = 'false';

// 2. Initialize
const app = dva({
	initialState: {},

	onError(e) {
	  	message.error(e.message);
	}
});

// 3. Plugins
app.use({
	onStateChange: () => {

		if(!window.appRouter) {
			window.appRouter = app._history;
		}

		if(localStorage.flashState == 'true') {
			console.log('flashState');
			var state = app._store.getState();
			var UIState = packUIStage(state);
			console.log(state.vdCtrlTree.activeCtrl)
			var state = {
				applicationId: localStorage.applicationId,
				UIState: UIState,
			};
			var escape = false
			if(localStorage.image == 'wechat:latest' ||  localStorage.image == 'vd:site'){

				localStorage.UIState = JSON.stringify(state);
			}else{
				localStorage.UIState = JSON.stringify(state,function(key,value){

					if(key == 'content' || key == 'value'|| key == 'designer'){
						return undefined
					}else{
						return value;
					}
				});
			}
		}
	}
});

app.use(createLoading());

// 4. Model
app.model(require('./models/ModelIndexPage'));
app.model(require('./models/ModelLeftSidebar'));
app.model(require('./models/ModelRightSidebar'));
app.model(require('./models/ModelDevPanels'));
app.model(require('./models/editor/ModelTop'));
app.model(require('./models/editor/ModelEditor'));
app.model(require('./models/rightSidebar/ModelLayout'));
app.model(require('./models/rightSidebar/ModelFileTree'));
app.model(require('./models/rightSidebar/ModelAttr'));
app.model(require('./models/rightSidebar/ModelCommandPanel'));
app.model(require('./models/ModelDesigner'));
app.model(require('./models/ModelPreviewer'));
app.model(require('./models/ModelConstruction'));
app.model(require('./models/ModelUIState'));
app.model(require('./models/topbar/ModelDashboard'));
app.model(require('./models/rightSidebar/ModelCommonPreviewer'));
app.model(require('./models/vdsite/ModelVDPagesManager'));
app.model(require('./models/vdsite/ModelVDAsets'));
app.model(require('./models/vdsite/ModelVDCtrlTree'));
app.model(require('./models/vdsite/ModelVDCtrl'));
app.model(require('./models/vdsite/ModelVDStyle'));
app.model(require('./models/vdsite/ModelVDCore'));
app.model(require('./models/vdsite/ModelInteractions'));
app.model(require('./models/topbar/ModelPreview'));
// 5. Router
app.router(require('./router'));

// 6. Start
app.start('#root');
