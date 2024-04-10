class NodeData {
  constructor(elem) {
    this.element = elem;
    this.nextleft = null;
    this.nextright = null;
  }
}

class BinareSerchTree {
  constructor() {
    this.root = null;
  }

  //เพิ่มข้อมูล
  addRecursive(current, elem) {
    if (current == null) {
      return new NodeData(elem);
    }

    if (elem < current.element) {
      current.nextleft = this.addRecursive(current.nextleft, elem);
    } else if (elem > current.element) {
      current.nextright = this.addRecursive(current.nextright, elem);
    } else {
      return current;
    }
    return current;
  }

  //เพิ่มข้อมูลค่าเดียว
  add(elem) {
    this.root = this.addRecursive(this.root, elem);
  }

  //L N R
  inOrder(n, str) {
    if (n != null) {
      //ซ้าย
      str = this.inOrder(n.nextleft, str);
      //แสดงผล
      str = str + n.element + " ";
      //ขวา
      str = this.inOrder(n.nextright, str);
    }
    return str;
  }

  //L R N
  postOrder(n, str) {
    if (n != null) {
      //ซ้าย
      str = this.postOrder(n.nextleft, str);
      //ขวา
      str = this.postOrder(n.nextright, str);
      //แสดงผล
      str = str + n.element + " ";
    }
    return str;
  }

  //N L R
  preOrder(n, str) {
    if (n != null) {
      //แสดงผล
      str = str + n.element + " ";
      //ซ้าย
      str = this.preOrder(n.nextleft, str);
      //ขวา
      str = this.preOrder(n.nextright, str);
    }
    return str;
  }
}

//---------main--------
let bst = new BinareSerchTree();
let addedData = []; // Array to store added data

function addData() {
  let numInput = document.getElementById("num").value;
  bst.add(parseInt(numInput));
  addedData.push(parseInt(numInput)); // Store added data
  document.getElementById("disaddData").innerHTML =
    "ข้อมูลล่าสุดที่เพิ่มเข้า Tree : " +
    numInput +
    "<br>ข้อมูลทั้งหมดใน Tree : " +
    addedData.join(", ");

  document.getElementById("num").value = "";
}
// function displayAddedData() {
//   document.getElementById("disdisData").innerHTML =
//     "ข้อมูลทั้งหมดใน Tree : " + addedData.join(", ");
// }

function displayInOrder() {
  let result = bst.inOrder(bst.root, "");
  document.getElementById("inOrder").innerText = "InOrder : " + result;
}

function displayPostOrder() {
  let result = bst.postOrder(bst.root, "");
  document.getElementById("postOrder").innerText = "PostOrder : " + result;
}

function displayPreOrder() {
  let result = bst.preOrder(bst.root, "");
  document.getElementById("preOrder").innerText = "PreOrder : " + result;
}
