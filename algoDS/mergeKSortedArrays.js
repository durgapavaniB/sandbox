/*
 * Complete the mergeArrays function below.
 */
function mergeArrays(arr) {
  /*
   * Write your code here.
   */
  function Heap() {
    this.data = [];
    this.createHeapFromMultipleInputs = function (A) {
      for (let i = 0; i < n - 1; i++) { //
        var nodeObj = {
          value: A[i][0],
          arrIndex: i,
          valueIndex: 0
        }
        heapObj.insertNewElement(nodeObj);
      }
    };
    this.bubbleUp = function (index) {
      while (index > 0) {
        // get the parent
        var parent = Math.floor((index + 1) / 2) - 1;

        // if parent is greater than child
        if (this.data[parent].value > this.data[index].value) {
          // swap
          var temp = this.data[parent];
          this.data[parent] = this.data[index];
          this.data[index] = temp;
        }

        index = parent;
      }
    };

    this.bubbleDown = function (index) {
      while (true) {
        var child = (index + 1) * 2;
        var sibling = child - 1;
        var toSwap = null;

        // if current is greater than child
        if (this.data[index].value > this.data[child].value) {
          toSwap = child;
        }

        // if sibling is smaller than child, but also smaller than current
        if (this.data[index].value > this.data[sibling].value && (this.data[child].value == null || (this.data[child].value !== null && this.data[sibling].value < this.data[child].value))) {
          toSwap = sibling;
        }

        // if we don't need to swap, then break.
        if (toSwap == null) {
          break;
        }

        //Swapping whole node
        var temp = this.data[toSwap];
        this.data[toSwap] = this.data[index];
        this.data[index] = temp;

        index = toSwap;
      }
    };

  }
  function MaxHeap() {
    Heap.call(this);
  }
  MaxHeap.prototype.extractMax = function () {
    var maxNodeObj = this.data[0];

    // set first element to last element
    this.data[0] = this.data.pop();

    // call bubble down
    this.bubbleDown(0);

    return maxNodeObj;
  };
  MaxHeap.prototype.insertNewElement = function (newNodeObj) {
    this.data.push(newNodeObj);
    this.bubbleUp(this.data.length - 1);
  };

  function MinHeap() {
    Heap.call(this);
  }
  MinHeap.prototype.extractMin = function () {
    var minNodeObj = this.data[0];

    // set first element to last element
    this.data[0] = this.data.pop();

    // call bubble down
    this.bubbleDown(0);

    return minNodeObj;
  };
  MinHeap.prototype.insertNewElement = function (val) {
    this.data.push(val);
    this.bubbleUp(this.data.length - 1);
  };


  function minHeapImplementation(A, k, n) {
    debugger;
    var heapObj = new MinHeap();
    //Create Heap
    heapObj.createHeapFromMultipleInputs(A);
    while (!heapObj.isEmpty()) {
      var minNodeObj = heapObj.extractMinElement();
      result.push(minNodeObj.value);
      //value: A[i][0], arrIndex: i,valueIndex: 0 
      if (A[minNodeObj.arrIndex][minNodeObj.valueIndex + 1] !== undefined) {
        heapObj.insertNewNode({ value: A[minNodeObj.arrIndex][minNodeObj.valueIndex + 1], arrIndex: minNodeObj.arrIndex, valueIndex: minNodeObj.valueIndex + 1 });
      }
    }
    return result;
  }
  function maxHeapImplementation(A, k, n) {
    debugger;
    var heapObj = new MaxHeap();
    //Create Heap
    heapObj.createHeapFromMultipleInputs(A);
    while (!heapObj.isEmpty()) {
      var maxNodeObj = heapObj.extractMaxElement();
      result.push(maxNodeObj.value);
      //value: A[i][0], arrIndex: i,valueIndex: 0 
      if (A[maxNodeObj.arrIndex][maxNodeObj.valueIndex + 1] !== undefined) {
        heapObj.insertNewNode({ value: A[maxNodeObj.arrIndex][maxNodeObj.valueIndex + 1], arrIndex: maxNodeObj.arrIndex, valueIndex: maxNodeObj.valueIndex + 1 });
      }
    }
    return result;
  }

  function computeIfAscending(arr) {
    var i = 0, j = 1, isAscending;
    while (i < j && j < arr[0].length) {
      //Check if ascending or descensing. If ascending do min heap, If descending do map heap.
      if (arr[0][i] > arr[0][j]) { //descensing
        isAscending = false;
        break;
      } else if (arr[0][i] < arr[0][j]) { //ascending
        isAscending = true;
        break;

      } else if (arr[0][i] === arr[0][j]) {
        i++; j++;
      }
    }
    return isAscending;

  }

  if (arr.length === 0) return arr;
  else if (arr.length === 1) return arr;
  else if (computeIfAscending(arr) !== undefined) {
    debugger;
    var result = [];
    var k = arr.length;
    var N = arr[i].length;
    if (computeIfAscending(arr)) {
      return minHeapImplementation(arr, k, N);
    } else {
      return maxHeapImplementation(arr, k, N);
    }
  }
}
var result = mergeArrays([[1, 3, 5, 7], [2, 4, 6, 8], [0, 9, 10, 11]]);
console.log(result);

