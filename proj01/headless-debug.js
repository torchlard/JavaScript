const chromeLauncher = require('chrome-launcher');
const CDP = require("chrome-remote-interface");

function delay(time) {
  time = time || 0;
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve();
    }, time);
  });
}

async function preRender(){
  // open webpage
  const chrome = await chromeLauncher.launch({
    port: 9222,
  });
  const { Page, DOM } = await CDP();
  await Promise.all([
    Page.enable(),
    DOM.enable()
  ]);
  await Page.navigate({ url: 'https://h5.ele.me/market/#/home' });
  await Page.loadEventFired();
  
  // wait for loading data
  await delay(3000);
  const rootNode = await DOM.getDocument();
  const appNode = await DOM.querySelector({ nodeId: rootNode.root.nodeId, selector: "#app" });
  
  // replace product data to clear data
  const needReplaceFlag = "#app [shell-replace]";
  const defaultImage = "/home/lkit/Pictures/rect.png";
  const replaceNode = await DOM.querySelectorAll({
    nodeId: rootNode.root.nodeId, selector: needReplaceFlag
  });
  
  replaceNode.nodeIds.length && await new Promise((resolve, reject) => {
    const tasks = [];
    replaceNode.nodeIds.forEach(nodeId => {
      // replace nodes with blank area
      try {
        const task = DOM.getOuterHTML({ nodeId }).then(html => {
          const nodeName = html.outerHTML.split(">")[0].slice(1).split(' ')[0];
          if (nodeName == 'img') {
            return DOM.setAttributeValue({ nodeId, name:'src', value:defaultImage });
          } else {
            return DOM.setOuterHTML({ nodeId, outerHTML: `<${nodeName}>&nbsp;</${nodeName}>` });
          }
        });
        tasks.push(task);
      } catch (e){
        reject(e);
      };
    });
    
    Promise.all(tasks).then(() => {
      resolve();
    }).catch(e => reject(e));
  });
  
  const shellHTML = await DOM.getOuterHTML({ nodeId: appNode.nodeId });

}


