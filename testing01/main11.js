'use strict'

let data =
{
  "attrs": {
    "width": 962,
    "height": 891
  },
  "className": "Stage",
  "children": [{
    "attrs": {},
    "className": "Layer",
    "children": [{
      "attrs": {},
      "className": "Group",
      "children": [{
        "attrs": {
          "x": 80,
          "y": 79,
          "name": "img-draw",
          "draggable": true
        },
        "className": "Image"
      }]
    }]
  }, {
    "attrs": {},
    "className": "Layer",
    "children": [{
      "attrs": {},
      "className": "Group",
      "children": [{
        "attrs": {
          "x": 380,
          "y": 317,
          "draggable": true,
          "filters": [null, null, null, null, null, null, null],
          "noise": 0,
          "pixelSize": 0.001,
          "levels": 1
        },
        "className": "Image"
      }]
    }]
  }, {
    "attrs": {},
    "className": "Layer",
    "children": [{
      "attrs": {
        "x": 86,
        "y": 98,
        "text": "sample text",
        "fontSize": 25,
        "fill": "black",
        "draggable": true
      },
      "className": "Text"
    }]
  }]
}


let tmp = [];
// const interate = (parent) => {
//   for (let i in parent) {
//     if (i === "children") {
//       interate(parent[i])
//     } else if (i === "attrs") {
//       tmp.push(parent[i]);
//     } else if (i === "className") {
//       tmp.push(parent[i]);
//     } else {
//       interate(parent[i])
//     }
//   }
// }
// for (let i = 0; i < tmp.length; i += 2) {
//   if (["Stage", "Image", "Text"].includes(tmp[i + 1])) {
//     final.push({
//       'name': tmp[i + 1],
//       'attrs': tmp[i]
//     })
//   }
// }

let x_list=[], y_list=[];
const interate = (parent) => {
  for (let i in parent) {
    if (i === "children") {
      interate(parent[i])
    } else if (i === "attrs" || i === "className") {
    } else if (i === "x") {
      x_list.push(parent[i])
    } else if (i === "x") {
      y_list.push(parent[i])
    }
    else {
      interate(parent[i])
    }
  }
}


interate(data);

console.log(x_list, y_list);













