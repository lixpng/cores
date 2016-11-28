import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './IndexPage.css';

import {Row, Col} from 'antd';

import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import DevPanel from '../components/DevPanel';
import Topbar from '../components/TopBar';

import CodingEditor from '../components/Panel/Editor.js';

import SplitPane from 'react-split-pane';
import randomString from '../utils/randomString'

function IndexPage(props) {


  const devPanelProps = {
    panes: props.devpanel.panels.panes,

    splitType: props.devpanel.panels.splitType,

    panels: props.devpanel.panels,

    onChangePane(key) {
      props.dispatch({
        type: 'devpanel/changePane',
        payload: key
      });
    },

    onChange(paneKey,active) {
      // console.log(paneKey.paneKey)
      props.dispatch({
        type: 'devpanel/tabChanged',
        payload: {
          active: active,
          paneKey: paneKey.paneKey
        }
      });
    },

    onEdit(paneKey, targetKey, action) {

      console.log(action);
      var content = '', title = undefined, type = "editor";
      let editorId = randomString(8,10);
      // let paneKey = paneKey.paneKey;
      console.log('paneKey',paneKey)

      var removeAction = { targetKey, title, content, type, editorId, paneKey: paneKey.paneKey };

      localStorage.removeAction = JSON.stringify(removeAction);

      if(action == 'add') {
        props.dispatch({
          type: 'devpanel/' + action,
          payload: removeAction
        });

        props.dispatch({
          type: 'rightbar/setActiveMenu',
          payload: 'file'
        });

        localStorage.isSave = true;
      }

      localStorage.currentFileOperation = action;

      if(action == 'remove'){
        editorId = props.devpanel.panels.panes[props.devpanel.panels.activePane.key].activeEditor.id;

        var activePane = props.devpanel.panels.panes[props.devpanel.panels.activePane.key];
        var activeTab = activePane.tabs;
        var tabType = activeTab[activePane.activeTab.index].type;

        console.log(tabType);

        if(tabType != 'editor') {

          props.dispatch({
            type: 'devpanel/' + action,
            payload: removeAction
          });

          return false;
        }

        var fileName = props.devpanel.panels.panes[props.devpanel.panels.activePane.key].editors[editorId].fileName;
        if(localStorage.isSave == 'true') {
          console.log("show");
          console.log(localStorage.isSave);
          if(fileName == '新标签页' || fileName == '新文件' || fileName ==  undefined){
            console.log("fff");
            props.dispatch({
              type: 'file/showNewFileNameModal',
              payload: {targetKey, action,type}
            })
          }else{
            props.dispatch({
              type: 'file/showSaveModal',
              payload: {targetKey, action,type}
            })
          }
        }
      }

    }

  }

  var devPanelMinSize = document.body.clientWidth,
      leftBarWidth = 280,
      rightBarWidth = 280;
      devPanelMinSize = devPanelMinSize - ( rightBarWidth + leftBarWidth );

  return (
    <div className="body">
      <div className="table-ftw" style={{paddingBottom: '0px'}}>
        <div className="tr-ftw">
          <div className="td-ftw" style={{height: '38px'}}>
            <Topbar></Topbar>
          </div>
        </div>
        <div className="tr-ftw">
          <div className="td-ftw">
            <SplitPane split="vertical" minSize={41} defaultSize={leftBarWidth}>
                <div className="LeftSidebar">
                  <LeftSidebar></LeftSidebar>
                </div>
                <SplitPane split="vertical" defaultSize={devPanelMinSize}>
                    <div className={styles.devbar}>
                      <DevPanel {...devPanelProps}></DevPanel>
                    </div>
                    <RightSidebar></RightSidebar>
                </SplitPane>
            </SplitPane>
          </div>
        </div>
      </div>
    </div>
  );
}

IndexPage.propTypes = {
  location: PropTypes.object,
  dispatch: PropTypes.func,
  sidebar: PropTypes.object,
  devPanel: PropTypes.object
};

// 指定订阅数据，这里关联了 indexPage
function mapStateToProps({ sidebar, devpanel}) {
  return {sidebar, devpanel};
}

export default connect(mapStateToProps)(IndexPage);
