/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/heap-js/dist/heap-js.es5.js":
/*!**************************************************!*\
  !*** ./node_modules/heap-js/dist/heap-js.es5.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Heap: () => (/* binding */ Heap),
/* harmony export */   HeapAsync: () => (/* binding */ HeapAsync),
/* harmony export */   "default": () => (/* binding */ Heap),
/* harmony export */   toInt: () => (/* binding */ toInt)
/* harmony export */ });
var __awaiter = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator$1 = function(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var __read$1 = function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
};
var __spreadArray$1 = function(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var __values = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var HeapAsync = (
  /** @class */
  function() {
    function HeapAsync2(compare) {
      if (compare === void 0) {
        compare = HeapAsync2.minComparator;
      }
      var _this = this;
      this.compare = compare;
      this.heapArray = [];
      this._limit = 0;
      this.offer = this.add;
      this.element = this.peek;
      this.poll = this.pop;
      this._invertedCompare = function(a, b) {
        return _this.compare(a, b).then(function(res) {
          return -1 * res;
        });
      };
    }
    HeapAsync2.getChildrenIndexOf = function(idx) {
      return [idx * 2 + 1, idx * 2 + 2];
    };
    HeapAsync2.getParentIndexOf = function(idx) {
      if (idx <= 0) {
        return -1;
      }
      var whichChildren = idx % 2 ? 1 : 2;
      return Math.floor((idx - whichChildren) / 2);
    };
    HeapAsync2.getSiblingIndexOf = function(idx) {
      if (idx <= 0) {
        return -1;
      }
      var whichChildren = idx % 2 ? 1 : -1;
      return idx + whichChildren;
    };
    HeapAsync2.minComparator = function(a, b) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator$1(this, function(_a) {
          if (a > b) {
            return [2, 1];
          } else if (a < b) {
            return [2, -1];
          } else {
            return [2, 0];
          }
        });
      });
    };
    HeapAsync2.maxComparator = function(a, b) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator$1(this, function(_a) {
          if (b > a) {
            return [2, 1];
          } else if (b < a) {
            return [2, -1];
          } else {
            return [2, 0];
          }
        });
      });
    };
    HeapAsync2.minComparatorNumber = function(a, b) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator$1(this, function(_a) {
          return [2, a - b];
        });
      });
    };
    HeapAsync2.maxComparatorNumber = function(a, b) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator$1(this, function(_a) {
          return [2, b - a];
        });
      });
    };
    HeapAsync2.defaultIsEqual = function(a, b) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator$1(this, function(_a) {
          return [2, a === b];
        });
      });
    };
    HeapAsync2.print = function(heap) {
      function deep(i2) {
        var pi = HeapAsync2.getParentIndexOf(i2);
        return Math.floor(Math.log2(pi + 1));
      }
      function repeat(str, times) {
        var out = "";
        for (; times > 0; --times) {
          out += str;
        }
        return out;
      }
      var node = 0;
      var lines = [];
      var maxLines = deep(heap.length - 1) + 2;
      var maxLength = 0;
      while (node < heap.length) {
        var i = deep(node) + 1;
        if (node === 0) {
          i = 0;
        }
        var nodeText = String(heap.get(node));
        if (nodeText.length > maxLength) {
          maxLength = nodeText.length;
        }
        lines[i] = lines[i] || [];
        lines[i].push(nodeText);
        node += 1;
      }
      return lines.map(function(line, i2) {
        var times = Math.pow(2, maxLines - i2) - 1;
        return repeat(" ", Math.floor(times / 2) * maxLength) + line.map(function(el) {
          var half = (maxLength - el.length) / 2;
          return repeat(" ", Math.ceil(half)) + el + repeat(" ", Math.floor(half));
        }).join(repeat(" ", times * maxLength));
      }).join("\n");
    };
    HeapAsync2.heapify = function(arr, compare) {
      return __awaiter(this, void 0, void 0, function() {
        var heap;
        return __generator$1(this, function(_a) {
          switch (_a.label) {
            case 0:
              heap = new HeapAsync2(compare);
              heap.heapArray = arr;
              return [4, heap.init()];
            case 1:
              _a.sent();
              return [2, heap];
          }
        });
      });
    };
    HeapAsync2.heappop = function(heapArr, compare) {
      var heap = new HeapAsync2(compare);
      heap.heapArray = heapArr;
      return heap.pop();
    };
    HeapAsync2.heappush = function(heapArr, item, compare) {
      return __awaiter(this, void 0, void 0, function() {
        var heap;
        return __generator$1(this, function(_a) {
          switch (_a.label) {
            case 0:
              heap = new HeapAsync2(compare);
              heap.heapArray = heapArr;
              return [4, heap.push(item)];
            case 1:
              _a.sent();
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    HeapAsync2.heappushpop = function(heapArr, item, compare) {
      var heap = new HeapAsync2(compare);
      heap.heapArray = heapArr;
      return heap.pushpop(item);
    };
    HeapAsync2.heapreplace = function(heapArr, item, compare) {
      var heap = new HeapAsync2(compare);
      heap.heapArray = heapArr;
      return heap.replace(item);
    };
    HeapAsync2.heaptop = function(heapArr, n, compare) {
      if (n === void 0) {
        n = 1;
      }
      var heap = new HeapAsync2(compare);
      heap.heapArray = heapArr;
      return heap.top(n);
    };
    HeapAsync2.heapbottom = function(heapArr, n, compare) {
      if (n === void 0) {
        n = 1;
      }
      var heap = new HeapAsync2(compare);
      heap.heapArray = heapArr;
      return heap.bottom(n);
    };
    HeapAsync2.nlargest = function(n, iterable, compare) {
      return __awaiter(this, void 0, void 0, function() {
        var heap;
        return __generator$1(this, function(_a) {
          switch (_a.label) {
            case 0:
              heap = new HeapAsync2(compare);
              heap.heapArray = __spreadArray$1([], __read$1(iterable), false);
              return [4, heap.init()];
            case 1:
              _a.sent();
              return [2, heap.top(n)];
          }
        });
      });
    };
    HeapAsync2.nsmallest = function(n, iterable, compare) {
      return __awaiter(this, void 0, void 0, function() {
        var heap;
        return __generator$1(this, function(_a) {
          switch (_a.label) {
            case 0:
              heap = new HeapAsync2(compare);
              heap.heapArray = __spreadArray$1([], __read$1(iterable), false);
              return [4, heap.init()];
            case 1:
              _a.sent();
              return [2, heap.bottom(n)];
          }
        });
      });
    };
    HeapAsync2.prototype.add = function(element) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator$1(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, this._sortNodeUp(this.heapArray.push(element) - 1)];
            case 1:
              _a.sent();
              this._applyLimit();
              return [2, true];
          }
        });
      });
    };
    HeapAsync2.prototype.addAll = function(elements) {
      return __awaiter(this, void 0, void 0, function() {
        var i, l;
        var _a;
        return __generator$1(this, function(_b) {
          switch (_b.label) {
            case 0:
              i = this.length;
              (_a = this.heapArray).push.apply(_a, __spreadArray$1([], __read$1(elements), false));
              l = this.length;
              _b.label = 1;
            case 1:
              if (!(i < l))
                return [3, 4];
              return [4, this._sortNodeUp(i)];
            case 2:
              _b.sent();
              _b.label = 3;
            case 3:
              ++i;
              return [3, 1];
            case 4:
              this._applyLimit();
              return [2, true];
          }
        });
      });
    };
    HeapAsync2.prototype.bottom = function(n) {
      if (n === void 0) {
        n = 1;
      }
      return __awaiter(this, void 0, void 0, function() {
        return __generator$1(this, function(_a) {
          if (this.heapArray.length === 0 || n <= 0) {
            return [2, []];
          } else if (this.heapArray.length === 1) {
            return [2, [this.heapArray[0]]];
          } else if (n >= this.heapArray.length) {
            return [2, __spreadArray$1([], __read$1(this.heapArray), false)];
          } else {
            return [2, this._bottomN_push(~~n)];
          }
        });
      });
    };
    HeapAsync2.prototype.check = function() {
      return __awaiter(this, void 0, void 0, function() {
        var j, el, children, children_1, children_1_1, ch, e_1_1;
        var e_1, _a;
        return __generator$1(this, function(_b) {
          switch (_b.label) {
            case 0:
              j = 0;
              _b.label = 1;
            case 1:
              if (!(j < this.heapArray.length))
                return [3, 10];
              el = this.heapArray[j];
              children = this.getChildrenOf(j);
              _b.label = 2;
            case 2:
              _b.trys.push([2, 7, 8, 9]);
              children_1 = (e_1 = void 0, __values(children)), children_1_1 = children_1.next();
              _b.label = 3;
            case 3:
              if (!!children_1_1.done)
                return [3, 6];
              ch = children_1_1.value;
              return [4, this.compare(el, ch)];
            case 4:
              if (_b.sent() > 0) {
                return [2, el];
              }
              _b.label = 5;
            case 5:
              children_1_1 = children_1.next();
              return [3, 3];
            case 6:
              return [3, 9];
            case 7:
              e_1_1 = _b.sent();
              e_1 = { error: e_1_1 };
              return [3, 9];
            case 8:
              try {
                if (children_1_1 && !children_1_1.done && (_a = children_1.return))
                  _a.call(children_1);
              } finally {
                if (e_1)
                  throw e_1.error;
              }
              return [
                7
                /*endfinally*/
              ];
            case 9:
              ++j;
              return [3, 1];
            case 10:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    HeapAsync2.prototype.clear = function() {
      this.heapArray = [];
    };
    HeapAsync2.prototype.clone = function() {
      var cloned = new HeapAsync2(this.comparator());
      cloned.heapArray = this.toArray();
      cloned._limit = this._limit;
      return cloned;
    };
    HeapAsync2.prototype.comparator = function() {
      return this.compare;
    };
    HeapAsync2.prototype.contains = function(o, fn) {
      if (fn === void 0) {
        fn = HeapAsync2.defaultIsEqual;
      }
      return __awaiter(this, void 0, void 0, function() {
        var _a, _b, el, e_2_1;
        var e_2, _c;
        return __generator$1(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 5, 6, 7]);
              _a = __values(this.heapArray), _b = _a.next();
              _d.label = 1;
            case 1:
              if (!!_b.done)
                return [3, 4];
              el = _b.value;
              return [4, fn(el, o)];
            case 2:
              if (_d.sent()) {
                return [2, true];
              }
              _d.label = 3;
            case 3:
              _b = _a.next();
              return [3, 1];
            case 4:
              return [3, 7];
            case 5:
              e_2_1 = _d.sent();
              e_2 = { error: e_2_1 };
              return [3, 7];
            case 6:
              try {
                if (_b && !_b.done && (_c = _a.return))
                  _c.call(_a);
              } finally {
                if (e_2)
                  throw e_2.error;
              }
              return [
                7
                /*endfinally*/
              ];
            case 7:
              return [2, false];
          }
        });
      });
    };
    HeapAsync2.prototype.init = function(array) {
      return __awaiter(this, void 0, void 0, function() {
        var i;
        return __generator$1(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (array) {
                this.heapArray = __spreadArray$1([], __read$1(array), false);
              }
              i = Math.floor(this.heapArray.length);
              _a.label = 1;
            case 1:
              if (!(i >= 0))
                return [3, 4];
              return [4, this._sortNodeDown(i)];
            case 2:
              _a.sent();
              _a.label = 3;
            case 3:
              --i;
              return [3, 1];
            case 4:
              this._applyLimit();
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    HeapAsync2.prototype.isEmpty = function() {
      return this.length === 0;
    };
    HeapAsync2.prototype.leafs = function() {
      if (this.heapArray.length === 0) {
        return [];
      }
      var pi = HeapAsync2.getParentIndexOf(this.heapArray.length - 1);
      return this.heapArray.slice(pi + 1);
    };
    Object.defineProperty(HeapAsync2.prototype, "length", {
      /**
       * Length of the heap.
       * @return {Number}
       */
      get: function() {
        return this.heapArray.length;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(HeapAsync2.prototype, "limit", {
      /**
       * Get length limit of the heap.
       * @return {Number}
       */
      get: function() {
        return this._limit;
      },
      /**
       * Set length limit of the heap.
       * @return {Number}
       */
      set: function(_l) {
        this._limit = ~~_l;
        this._applyLimit();
      },
      enumerable: false,
      configurable: true
    });
    HeapAsync2.prototype.peek = function() {
      return this.heapArray[0];
    };
    HeapAsync2.prototype.pop = function() {
      return __awaiter(this, void 0, void 0, function() {
        var last;
        return __generator$1(this, function(_a) {
          last = this.heapArray.pop();
          if (this.length > 0 && last !== void 0) {
            return [2, this.replace(last)];
          }
          return [2, last];
        });
      });
    };
    HeapAsync2.prototype.push = function() {
      var elements = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        elements[_i] = arguments[_i];
      }
      return __awaiter(this, void 0, void 0, function() {
        return __generator$1(this, function(_a) {
          if (elements.length < 1) {
            return [2, false];
          } else if (elements.length === 1) {
            return [2, this.add(elements[0])];
          } else {
            return [2, this.addAll(elements)];
          }
        });
      });
    };
    HeapAsync2.prototype.pushpop = function(element) {
      return __awaiter(this, void 0, void 0, function() {
        var _a;
        return __generator$1(this, function(_b) {
          switch (_b.label) {
            case 0:
              return [4, this.compare(this.heapArray[0], element)];
            case 1:
              if (!(_b.sent() < 0))
                return [3, 3];
              _a = __read$1([this.heapArray[0], element], 2), element = _a[0], this.heapArray[0] = _a[1];
              return [4, this._sortNodeDown(0)];
            case 2:
              _b.sent();
              _b.label = 3;
            case 3:
              return [2, element];
          }
        });
      });
    };
    HeapAsync2.prototype.remove = function(o, fn) {
      if (fn === void 0) {
        fn = HeapAsync2.defaultIsEqual;
      }
      return __awaiter(this, void 0, void 0, function() {
        var idx, i;
        return __generator$1(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!(this.length > 0))
                return [3, 13];
              if (!(o === void 0))
                return [3, 2];
              return [4, this.pop()];
            case 1:
              _a.sent();
              return [2, true];
            case 2:
              idx = -1;
              i = 0;
              _a.label = 3;
            case 3:
              if (!(i < this.heapArray.length))
                return [3, 6];
              return [4, fn(this.heapArray[i], o)];
            case 4:
              if (_a.sent()) {
                idx = i;
                return [3, 6];
              }
              _a.label = 5;
            case 5:
              ++i;
              return [3, 3];
            case 6:
              if (!(idx >= 0))
                return [3, 13];
              if (!(idx === 0))
                return [3, 8];
              return [4, this.pop()];
            case 7:
              _a.sent();
              return [3, 12];
            case 8:
              if (!(idx === this.length - 1))
                return [3, 9];
              this.heapArray.pop();
              return [3, 12];
            case 9:
              this.heapArray.splice(idx, 1, this.heapArray.pop());
              return [4, this._sortNodeUp(idx)];
            case 10:
              _a.sent();
              return [4, this._sortNodeDown(idx)];
            case 11:
              _a.sent();
              _a.label = 12;
            case 12:
              return [2, true];
            case 13:
              return [2, false];
          }
        });
      });
    };
    HeapAsync2.prototype.replace = function(element) {
      return __awaiter(this, void 0, void 0, function() {
        var peek;
        return __generator$1(this, function(_a) {
          switch (_a.label) {
            case 0:
              peek = this.heapArray[0];
              this.heapArray[0] = element;
              return [4, this._sortNodeDown(0)];
            case 1:
              _a.sent();
              return [2, peek];
          }
        });
      });
    };
    HeapAsync2.prototype.size = function() {
      return this.length;
    };
    HeapAsync2.prototype.top = function(n) {
      if (n === void 0) {
        n = 1;
      }
      return __awaiter(this, void 0, void 0, function() {
        return __generator$1(this, function(_a) {
          if (this.heapArray.length === 0 || n <= 0) {
            return [2, []];
          } else if (this.heapArray.length === 1 || n === 1) {
            return [2, [this.heapArray[0]]];
          } else if (n >= this.heapArray.length) {
            return [2, __spreadArray$1([], __read$1(this.heapArray), false)];
          } else {
            return [2, this._topN_push(~~n)];
          }
        });
      });
    };
    HeapAsync2.prototype.toArray = function() {
      return __spreadArray$1([], __read$1(this.heapArray), false);
    };
    HeapAsync2.prototype.toString = function() {
      return this.heapArray.toString();
    };
    HeapAsync2.prototype.get = function(i) {
      return this.heapArray[i];
    };
    HeapAsync2.prototype.getChildrenOf = function(idx) {
      var _this = this;
      return HeapAsync2.getChildrenIndexOf(idx).map(function(i) {
        return _this.heapArray[i];
      }).filter(function(e) {
        return e !== void 0;
      });
    };
    HeapAsync2.prototype.getParentOf = function(idx) {
      var pi = HeapAsync2.getParentIndexOf(idx);
      return this.heapArray[pi];
    };
    HeapAsync2.prototype[Symbol.iterator] = function() {
      return __generator$1(this, function(_a) {
        switch (_a.label) {
          case 0:
            if (!this.length)
              return [3, 2];
            return [4, this.pop()];
          case 1:
            _a.sent();
            return [3, 0];
          case 2:
            return [
              2
              /*return*/
            ];
        }
      });
    };
    HeapAsync2.prototype.iterator = function() {
      return this;
    };
    HeapAsync2.prototype._applyLimit = function() {
      if (this._limit && this._limit < this.heapArray.length) {
        var rm = this.heapArray.length - this._limit;
        while (rm) {
          this.heapArray.pop();
          --rm;
        }
      }
    };
    HeapAsync2.prototype._bottomN_push = function(n) {
      return __awaiter(this, void 0, void 0, function() {
        var bottomHeap, startAt, parentStartAt, indices, i, arr, i;
        return __generator$1(this, function(_a) {
          switch (_a.label) {
            case 0:
              bottomHeap = new HeapAsync2(this.compare);
              bottomHeap.limit = n;
              bottomHeap.heapArray = this.heapArray.slice(-n);
              return [4, bottomHeap.init()];
            case 1:
              _a.sent();
              startAt = this.heapArray.length - 1 - n;
              parentStartAt = HeapAsync2.getParentIndexOf(startAt);
              indices = [];
              for (i = startAt; i > parentStartAt; --i) {
                indices.push(i);
              }
              arr = this.heapArray;
              _a.label = 2;
            case 2:
              if (!indices.length)
                return [3, 6];
              i = indices.shift();
              return [4, this.compare(arr[i], bottomHeap.peek())];
            case 3:
              if (!(_a.sent() > 0))
                return [3, 5];
              return [4, bottomHeap.replace(arr[i])];
            case 4:
              _a.sent();
              if (i % 2) {
                indices.push(HeapAsync2.getParentIndexOf(i));
              }
              _a.label = 5;
            case 5:
              return [3, 2];
            case 6:
              return [2, bottomHeap.toArray()];
          }
        });
      });
    };
    HeapAsync2.prototype._moveNode = function(j, k) {
      var _a;
      _a = __read$1([this.heapArray[k], this.heapArray[j]], 2), this.heapArray[j] = _a[0], this.heapArray[k] = _a[1];
    };
    HeapAsync2.prototype._sortNodeDown = function(i) {
      return __awaiter(this, void 0, void 0, function() {
        var moveIt, self, getPotentialParent, childrenIdx, bestChildIndex, j, bestChild, _a;
        var _this = this;
        return __generator$1(this, function(_b) {
          switch (_b.label) {
            case 0:
              moveIt = i < this.heapArray.length - 1;
              self = this.heapArray[i];
              getPotentialParent = function(best, j2) {
                return __awaiter(_this, void 0, void 0, function() {
                  var _a2;
                  return __generator$1(this, function(_b2) {
                    switch (_b2.label) {
                      case 0:
                        _a2 = this.heapArray.length > j2;
                        if (!_a2)
                          return [3, 2];
                        return [4, this.compare(this.heapArray[j2], this.heapArray[best])];
                      case 1:
                        _a2 = _b2.sent() < 0;
                        _b2.label = 2;
                      case 2:
                        if (_a2) {
                          best = j2;
                        }
                        return [2, best];
                    }
                  });
                });
              };
              _b.label = 1;
            case 1:
              if (!moveIt)
                return [3, 8];
              childrenIdx = HeapAsync2.getChildrenIndexOf(i);
              bestChildIndex = childrenIdx[0];
              j = 1;
              _b.label = 2;
            case 2:
              if (!(j < childrenIdx.length))
                return [3, 5];
              return [4, getPotentialParent(bestChildIndex, childrenIdx[j])];
            case 3:
              bestChildIndex = _b.sent();
              _b.label = 4;
            case 4:
              ++j;
              return [3, 2];
            case 5:
              bestChild = this.heapArray[bestChildIndex];
              _a = typeof bestChild !== "undefined";
              if (!_a)
                return [3, 7];
              return [4, this.compare(self, bestChild)];
            case 6:
              _a = _b.sent() > 0;
              _b.label = 7;
            case 7:
              if (_a) {
                this._moveNode(i, bestChildIndex);
                i = bestChildIndex;
              } else {
                moveIt = false;
              }
              return [3, 1];
            case 8:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    HeapAsync2.prototype._sortNodeUp = function(i) {
      return __awaiter(this, void 0, void 0, function() {
        var moveIt, pi, _a;
        return __generator$1(this, function(_b) {
          switch (_b.label) {
            case 0:
              moveIt = i > 0;
              _b.label = 1;
            case 1:
              if (!moveIt)
                return [3, 4];
              pi = HeapAsync2.getParentIndexOf(i);
              _a = pi >= 0;
              if (!_a)
                return [3, 3];
              return [4, this.compare(this.heapArray[pi], this.heapArray[i])];
            case 2:
              _a = _b.sent() > 0;
              _b.label = 3;
            case 3:
              if (_a) {
                this._moveNode(i, pi);
                i = pi;
              } else {
                moveIt = false;
              }
              return [3, 1];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    HeapAsync2.prototype._topN_push = function(n) {
      return __awaiter(this, void 0, void 0, function() {
        var topHeap, indices, arr, i;
        return __generator$1(this, function(_a) {
          switch (_a.label) {
            case 0:
              topHeap = new HeapAsync2(this._invertedCompare);
              topHeap.limit = n;
              indices = [0];
              arr = this.heapArray;
              _a.label = 1;
            case 1:
              if (!indices.length)
                return [3, 7];
              i = indices.shift();
              if (!(i < arr.length))
                return [3, 6];
              if (!(topHeap.length < n))
                return [3, 3];
              return [4, topHeap.push(arr[i])];
            case 2:
              _a.sent();
              indices.push.apply(indices, __spreadArray$1([], __read$1(HeapAsync2.getChildrenIndexOf(i)), false));
              return [3, 6];
            case 3:
              return [4, this.compare(arr[i], topHeap.peek())];
            case 4:
              if (!(_a.sent() < 0))
                return [3, 6];
              return [4, topHeap.replace(arr[i])];
            case 5:
              _a.sent();
              indices.push.apply(indices, __spreadArray$1([], __read$1(HeapAsync2.getChildrenIndexOf(i)), false));
              _a.label = 6;
            case 6:
              return [3, 1];
            case 7:
              return [2, topHeap.toArray()];
          }
        });
      });
    };
    HeapAsync2.prototype._topN_fill = function(n) {
      return __awaiter(this, void 0, void 0, function() {
        var heapArray, topHeap, branch, indices, i, i;
        return __generator$1(this, function(_a) {
          switch (_a.label) {
            case 0:
              heapArray = this.heapArray;
              topHeap = new HeapAsync2(this._invertedCompare);
              topHeap.limit = n;
              topHeap.heapArray = heapArray.slice(0, n);
              return [4, topHeap.init()];
            case 1:
              _a.sent();
              branch = HeapAsync2.getParentIndexOf(n - 1) + 1;
              indices = [];
              for (i = branch; i < n; ++i) {
                indices.push.apply(indices, __spreadArray$1([], __read$1(HeapAsync2.getChildrenIndexOf(i).filter(function(l) {
                  return l < heapArray.length;
                })), false));
              }
              if ((n - 1) % 2) {
                indices.push(n);
              }
              _a.label = 2;
            case 2:
              if (!indices.length)
                return [3, 6];
              i = indices.shift();
              if (!(i < heapArray.length))
                return [3, 5];
              return [4, this.compare(heapArray[i], topHeap.peek())];
            case 3:
              if (!(_a.sent() < 0))
                return [3, 5];
              return [4, topHeap.replace(heapArray[i])];
            case 4:
              _a.sent();
              indices.push.apply(indices, __spreadArray$1([], __read$1(HeapAsync2.getChildrenIndexOf(i)), false));
              _a.label = 5;
            case 5:
              return [3, 2];
            case 6:
              return [2, topHeap.toArray()];
          }
        });
      });
    };
    HeapAsync2.prototype._topN_heap = function(n) {
      return __awaiter(this, void 0, void 0, function() {
        var topHeap, result, i, _a, _b;
        return __generator$1(this, function(_c) {
          switch (_c.label) {
            case 0:
              topHeap = this.clone();
              result = [];
              i = 0;
              _c.label = 1;
            case 1:
              if (!(i < n))
                return [3, 4];
              _b = (_a = result).push;
              return [4, topHeap.pop()];
            case 2:
              _b.apply(_a, [_c.sent()]);
              _c.label = 3;
            case 3:
              ++i;
              return [3, 1];
            case 4:
              return [2, result];
          }
        });
      });
    };
    HeapAsync2.prototype._topIdxOf = function(list) {
      return __awaiter(this, void 0, void 0, function() {
        var idx, top, i, comp;
        return __generator$1(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!list.length) {
                return [2, -1];
              }
              idx = 0;
              top = list[idx];
              i = 1;
              _a.label = 1;
            case 1:
              if (!(i < list.length))
                return [3, 4];
              return [4, this.compare(list[i], top)];
            case 2:
              comp = _a.sent();
              if (comp < 0) {
                idx = i;
                top = list[i];
              }
              _a.label = 3;
            case 3:
              ++i;
              return [3, 1];
            case 4:
              return [2, idx];
          }
        });
      });
    };
    HeapAsync2.prototype._topOf = function() {
      var list = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        list[_i] = arguments[_i];
      }
      return __awaiter(this, void 0, void 0, function() {
        var heap;
        return __generator$1(this, function(_a) {
          switch (_a.label) {
            case 0:
              heap = new HeapAsync2(this.compare);
              return [4, heap.init(list)];
            case 1:
              _a.sent();
              return [2, heap.peek()];
          }
        });
      });
    };
    return HeapAsync2;
  }()
);
var __generator = function(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var __read = function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
};
var __spreadArray = function(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var toInt = function(n) {
  return ~~n;
};
var Heap = (
  /** @class */
  function() {
    function Heap2(compare) {
      if (compare === void 0) {
        compare = Heap2.minComparator;
      }
      var _this = this;
      this.compare = compare;
      this.heapArray = [];
      this._limit = 0;
      this.offer = this.add;
      this.element = this.peek;
      this.poll = this.pop;
      this._invertedCompare = function(a, b) {
        return -1 * _this.compare(a, b);
      };
    }
    Heap2.getChildrenIndexOf = function(idx) {
      return [idx * 2 + 1, idx * 2 + 2];
    };
    Heap2.getParentIndexOf = function(idx) {
      if (idx <= 0) {
        return -1;
      }
      var whichChildren = idx % 2 ? 1 : 2;
      return Math.floor((idx - whichChildren) / 2);
    };
    Heap2.getSiblingIndexOf = function(idx) {
      if (idx <= 0) {
        return -1;
      }
      var whichChildren = idx % 2 ? 1 : -1;
      return idx + whichChildren;
    };
    Heap2.minComparator = function(a, b) {
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else {
        return 0;
      }
    };
    Heap2.maxComparator = function(a, b) {
      if (b > a) {
        return 1;
      } else if (b < a) {
        return -1;
      } else {
        return 0;
      }
    };
    Heap2.minComparatorNumber = function(a, b) {
      return a - b;
    };
    Heap2.maxComparatorNumber = function(a, b) {
      return b - a;
    };
    Heap2.defaultIsEqual = function(a, b) {
      return a === b;
    };
    Heap2.print = function(heap) {
      function deep(i2) {
        var pi = Heap2.getParentIndexOf(i2);
        return Math.floor(Math.log2(pi + 1));
      }
      function repeat(str, times) {
        var out = "";
        for (; times > 0; --times) {
          out += str;
        }
        return out;
      }
      var node = 0;
      var lines = [];
      var maxLines = deep(heap.length - 1) + 2;
      var maxLength = 0;
      while (node < heap.length) {
        var i = deep(node) + 1;
        if (node === 0) {
          i = 0;
        }
        var nodeText = String(heap.get(node));
        if (nodeText.length > maxLength) {
          maxLength = nodeText.length;
        }
        lines[i] = lines[i] || [];
        lines[i].push(nodeText);
        node += 1;
      }
      return lines.map(function(line, i2) {
        var times = Math.pow(2, maxLines - i2) - 1;
        return repeat(" ", Math.floor(times / 2) * maxLength) + line.map(function(el) {
          var half = (maxLength - el.length) / 2;
          return repeat(" ", Math.ceil(half)) + el + repeat(" ", Math.floor(half));
        }).join(repeat(" ", times * maxLength));
      }).join("\n");
    };
    Heap2.heapify = function(arr, compare) {
      var heap = new Heap2(compare);
      heap.heapArray = arr;
      heap.init();
      return heap;
    };
    Heap2.heappop = function(heapArr, compare) {
      var heap = new Heap2(compare);
      heap.heapArray = heapArr;
      return heap.pop();
    };
    Heap2.heappush = function(heapArr, item, compare) {
      var heap = new Heap2(compare);
      heap.heapArray = heapArr;
      heap.push(item);
    };
    Heap2.heappushpop = function(heapArr, item, compare) {
      var heap = new Heap2(compare);
      heap.heapArray = heapArr;
      return heap.pushpop(item);
    };
    Heap2.heapreplace = function(heapArr, item, compare) {
      var heap = new Heap2(compare);
      heap.heapArray = heapArr;
      return heap.replace(item);
    };
    Heap2.heaptop = function(heapArr, n, compare) {
      if (n === void 0) {
        n = 1;
      }
      var heap = new Heap2(compare);
      heap.heapArray = heapArr;
      return heap.top(n);
    };
    Heap2.heapbottom = function(heapArr, n, compare) {
      if (n === void 0) {
        n = 1;
      }
      var heap = new Heap2(compare);
      heap.heapArray = heapArr;
      return heap.bottom(n);
    };
    Heap2.nlargest = function(n, iterable, compare) {
      var heap = new Heap2(compare);
      heap.heapArray = __spreadArray([], __read(iterable), false);
      heap.init();
      return heap.top(n);
    };
    Heap2.nsmallest = function(n, iterable, compare) {
      var heap = new Heap2(compare);
      heap.heapArray = __spreadArray([], __read(iterable), false);
      heap.init();
      return heap.bottom(n);
    };
    Heap2.prototype.add = function(element) {
      this._sortNodeUp(this.heapArray.push(element) - 1);
      this._applyLimit();
      return true;
    };
    Heap2.prototype.addAll = function(elements) {
      var _a;
      var i = this.length;
      (_a = this.heapArray).push.apply(_a, __spreadArray([], __read(elements), false));
      for (var l = this.length; i < l; ++i) {
        this._sortNodeUp(i);
      }
      this._applyLimit();
      return true;
    };
    Heap2.prototype.bottom = function(n) {
      if (n === void 0) {
        n = 1;
      }
      if (this.heapArray.length === 0 || n <= 0) {
        return [];
      } else if (this.heapArray.length === 1) {
        return [this.heapArray[0]];
      } else if (n >= this.heapArray.length) {
        return __spreadArray([], __read(this.heapArray), false);
      } else {
        return this._bottomN_push(~~n);
      }
    };
    Heap2.prototype.check = function() {
      var _this = this;
      return this.heapArray.find(function(el, j) {
        return !!_this.getChildrenOf(j).find(function(ch) {
          return _this.compare(el, ch) > 0;
        });
      });
    };
    Heap2.prototype.clear = function() {
      this.heapArray = [];
    };
    Heap2.prototype.clone = function() {
      var cloned = new Heap2(this.comparator());
      cloned.heapArray = this.toArray();
      cloned._limit = this._limit;
      return cloned;
    };
    Heap2.prototype.comparator = function() {
      return this.compare;
    };
    Heap2.prototype.contains = function(o, fn) {
      if (fn === void 0) {
        fn = Heap2.defaultIsEqual;
      }
      return this.heapArray.findIndex(function(el) {
        return fn(el, o);
      }) >= 0;
    };
    Heap2.prototype.init = function(array) {
      if (array) {
        this.heapArray = __spreadArray([], __read(array), false);
      }
      for (var i = Math.floor(this.heapArray.length); i >= 0; --i) {
        this._sortNodeDown(i);
      }
      this._applyLimit();
    };
    Heap2.prototype.isEmpty = function() {
      return this.length === 0;
    };
    Heap2.prototype.leafs = function() {
      if (this.heapArray.length === 0) {
        return [];
      }
      var pi = Heap2.getParentIndexOf(this.heapArray.length - 1);
      return this.heapArray.slice(pi + 1);
    };
    Object.defineProperty(Heap2.prototype, "length", {
      /**
       * Length of the heap.
       * @return {Number}
       */
      get: function() {
        return this.heapArray.length;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Heap2.prototype, "limit", {
      /**
       * Get length limit of the heap.
       * @return {Number}
       */
      get: function() {
        return this._limit;
      },
      /**
       * Set length limit of the heap.
       * @return {Number}
       */
      set: function(_l) {
        this._limit = ~~_l;
        this._applyLimit();
      },
      enumerable: false,
      configurable: true
    });
    Heap2.prototype.peek = function() {
      return this.heapArray[0];
    };
    Heap2.prototype.pop = function() {
      var last = this.heapArray.pop();
      if (this.length > 0 && last !== void 0) {
        return this.replace(last);
      }
      return last;
    };
    Heap2.prototype.push = function() {
      var elements = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        elements[_i] = arguments[_i];
      }
      if (elements.length < 1) {
        return false;
      } else if (elements.length === 1) {
        return this.add(elements[0]);
      } else {
        return this.addAll(elements);
      }
    };
    Heap2.prototype.pushpop = function(element) {
      var _a;
      if (this.compare(this.heapArray[0], element) < 0) {
        _a = __read([this.heapArray[0], element], 2), element = _a[0], this.heapArray[0] = _a[1];
        this._sortNodeDown(0);
      }
      return element;
    };
    Heap2.prototype.remove = function(o, fn) {
      if (fn === void 0) {
        fn = Heap2.defaultIsEqual;
      }
      if (this.length > 0) {
        if (o === void 0) {
          this.pop();
          return true;
        } else {
          var idx = this.heapArray.findIndex(function(el) {
            return fn(el, o);
          });
          if (idx >= 0) {
            if (idx === 0) {
              this.pop();
            } else if (idx === this.length - 1) {
              this.heapArray.pop();
            } else {
              this.heapArray.splice(idx, 1, this.heapArray.pop());
              this._sortNodeUp(idx);
              this._sortNodeDown(idx);
            }
            return true;
          }
        }
      }
      return false;
    };
    Heap2.prototype.replace = function(element) {
      var peek = this.heapArray[0];
      this.heapArray[0] = element;
      this._sortNodeDown(0);
      return peek;
    };
    Heap2.prototype.size = function() {
      return this.length;
    };
    Heap2.prototype.top = function(n) {
      if (n === void 0) {
        n = 1;
      }
      if (this.heapArray.length === 0 || n <= 0) {
        return [];
      } else if (this.heapArray.length === 1 || n === 1) {
        return [this.heapArray[0]];
      } else if (n >= this.heapArray.length) {
        return __spreadArray([], __read(this.heapArray), false);
      } else {
        return this._topN_push(~~n);
      }
    };
    Heap2.prototype.toArray = function() {
      return __spreadArray([], __read(this.heapArray), false);
    };
    Heap2.prototype.toString = function() {
      return this.heapArray.toString();
    };
    Heap2.prototype.get = function(i) {
      return this.heapArray[i];
    };
    Heap2.prototype.getChildrenOf = function(idx) {
      var _this = this;
      return Heap2.getChildrenIndexOf(idx).map(function(i) {
        return _this.heapArray[i];
      }).filter(function(e) {
        return e !== void 0;
      });
    };
    Heap2.prototype.getParentOf = function(idx) {
      var pi = Heap2.getParentIndexOf(idx);
      return this.heapArray[pi];
    };
    Heap2.prototype[Symbol.iterator] = function() {
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            if (!this.length)
              return [3, 2];
            return [4, this.pop()];
          case 1:
            _a.sent();
            return [3, 0];
          case 2:
            return [
              2
              /*return*/
            ];
        }
      });
    };
    Heap2.prototype.iterator = function() {
      return this.toArray();
    };
    Heap2.prototype._applyLimit = function() {
      if (this._limit && this._limit < this.heapArray.length) {
        var rm = this.heapArray.length - this._limit;
        while (rm) {
          this.heapArray.pop();
          --rm;
        }
      }
    };
    Heap2.prototype._bottomN_push = function(n) {
      var bottomHeap = new Heap2(this.compare);
      bottomHeap.limit = n;
      bottomHeap.heapArray = this.heapArray.slice(-n);
      bottomHeap.init();
      var startAt = this.heapArray.length - 1 - n;
      var parentStartAt = Heap2.getParentIndexOf(startAt);
      var indices = [];
      for (var i = startAt; i > parentStartAt; --i) {
        indices.push(i);
      }
      var arr = this.heapArray;
      while (indices.length) {
        var i = indices.shift();
        if (this.compare(arr[i], bottomHeap.peek()) > 0) {
          bottomHeap.replace(arr[i]);
          if (i % 2) {
            indices.push(Heap2.getParentIndexOf(i));
          }
        }
      }
      return bottomHeap.toArray();
    };
    Heap2.prototype._moveNode = function(j, k) {
      var _a;
      _a = __read([this.heapArray[k], this.heapArray[j]], 2), this.heapArray[j] = _a[0], this.heapArray[k] = _a[1];
    };
    Heap2.prototype._sortNodeDown = function(i) {
      var _this = this;
      var moveIt = i < this.heapArray.length - 1;
      var self = this.heapArray[i];
      var getPotentialParent = function(best, j) {
        if (_this.heapArray.length > j && _this.compare(_this.heapArray[j], _this.heapArray[best]) < 0) {
          best = j;
        }
        return best;
      };
      while (moveIt) {
        var childrenIdx = Heap2.getChildrenIndexOf(i);
        var bestChildIndex = childrenIdx.reduce(getPotentialParent, childrenIdx[0]);
        var bestChild = this.heapArray[bestChildIndex];
        if (typeof bestChild !== "undefined" && this.compare(self, bestChild) > 0) {
          this._moveNode(i, bestChildIndex);
          i = bestChildIndex;
        } else {
          moveIt = false;
        }
      }
    };
    Heap2.prototype._sortNodeUp = function(i) {
      var moveIt = i > 0;
      while (moveIt) {
        var pi = Heap2.getParentIndexOf(i);
        if (pi >= 0 && this.compare(this.heapArray[pi], this.heapArray[i]) > 0) {
          this._moveNode(i, pi);
          i = pi;
        } else {
          moveIt = false;
        }
      }
    };
    Heap2.prototype._topN_push = function(n) {
      var topHeap = new Heap2(this._invertedCompare);
      topHeap.limit = n;
      var indices = [0];
      var arr = this.heapArray;
      while (indices.length) {
        var i = indices.shift();
        if (i < arr.length) {
          if (topHeap.length < n) {
            topHeap.push(arr[i]);
            indices.push.apply(indices, __spreadArray([], __read(Heap2.getChildrenIndexOf(i)), false));
          } else if (this.compare(arr[i], topHeap.peek()) < 0) {
            topHeap.replace(arr[i]);
            indices.push.apply(indices, __spreadArray([], __read(Heap2.getChildrenIndexOf(i)), false));
          }
        }
      }
      return topHeap.toArray();
    };
    Heap2.prototype._topN_fill = function(n) {
      var heapArray = this.heapArray;
      var topHeap = new Heap2(this._invertedCompare);
      topHeap.limit = n;
      topHeap.heapArray = heapArray.slice(0, n);
      topHeap.init();
      var branch = Heap2.getParentIndexOf(n - 1) + 1;
      var indices = [];
      for (var i = branch; i < n; ++i) {
        indices.push.apply(indices, __spreadArray([], __read(Heap2.getChildrenIndexOf(i).filter(function(l) {
          return l < heapArray.length;
        })), false));
      }
      if ((n - 1) % 2) {
        indices.push(n);
      }
      while (indices.length) {
        var i = indices.shift();
        if (i < heapArray.length) {
          if (this.compare(heapArray[i], topHeap.peek()) < 0) {
            topHeap.replace(heapArray[i]);
            indices.push.apply(indices, __spreadArray([], __read(Heap2.getChildrenIndexOf(i)), false));
          }
        }
      }
      return topHeap.toArray();
    };
    Heap2.prototype._topN_heap = function(n) {
      var topHeap = this.clone();
      var result = [];
      for (var i = 0; i < n; ++i) {
        result.push(topHeap.pop());
      }
      return result;
    };
    Heap2.prototype._topIdxOf = function(list) {
      if (!list.length) {
        return -1;
      }
      var idx = 0;
      var top = list[idx];
      for (var i = 1; i < list.length; ++i) {
        var comp = this.compare(list[i], top);
        if (comp < 0) {
          idx = i;
          top = list[i];
        }
      }
      return idx;
    };
    Heap2.prototype._topOf = function() {
      var list = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        list[_i] = arguments[_i];
      }
      var heap = new Heap2(this.compare);
      heap.init(list);
      return heap.peek();
    };
    return Heap2;
  }()
);



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/js/javascript.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var heap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! heap-js */ "./node_modules/heap-js/dist/heap-js.es5.js");

const minHeap = new heap_js__WEBPACK_IMPORTED_MODULE_0__.Heap();
minHeap.init([48, 62, 23, 35, 18, 50, 64, 26, 420]);
console.log(minHeap.peek());
console.log(minHeap.pop());
console.log(minHeap.peek());
for (const iterator of minHeap) {
  let pTag = document.createElement("p");
  let pText = document.createTextNode("Eerst volgende waarde is " + iterator);
  pTag.appendChild(pText);
  document.body.append(pTag);
}
conole.log("wow");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04rQjtBQUcvQixNQUFNLFVBQVUsSUFBSSx5Q0FBSSxDQUFDO0FBRXpCLFFBQVEsS0FBSyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLENBQUM7QUFFbEQsUUFBUSxJQUFJLFFBQVEsS0FBSyxDQUFDO0FBQzFCLFFBQVEsSUFBSSxRQUFRLElBQUksQ0FBQztBQUN6QixRQUFRLElBQUksUUFBUSxLQUFLLENBQUM7QUFFMUIsV0FBVyxZQUFZLFNBQVM7QUFDL0IsTUFBSSxPQUFPLFNBQVMsY0FBYyxHQUFHO0FBQ3JDLE1BQUksUUFBUSxTQUFTLGVBQWUsOEJBQThCLFFBQVE7QUFDMUUsT0FBSyxZQUFZLEtBQUs7QUFDdEIsV0FBUyxLQUFLLE9BQU8sSUFBSTtBQUMxQjtBQUVBLE9BQU8sSUFBSSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3BkcmFjaHQtNi8uL25vZGVfbW9kdWxlcy9oZWFwLWpzL2Rpc3QvaGVhcC1qcy5lczUuanMiLCJ3ZWJwYWNrOi8vb3BkcmFjaHQtNi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vcGRyYWNodC02L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vcGRyYWNodC02L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb3BkcmFjaHQtNi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29wZHJhY2h0LTYvLi9zcmMvanMvamF2YXNjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hd2FpdGVyID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IkMSA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xudmFyIF9fcmVhZCQxID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19yZWFkKSB8fCBmdW5jdGlvbiAobywgbikge1xuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcbiAgICBpZiAoIW0pIHJldHVybiBvO1xuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xuICAgIHRyeSB7XG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cbiAgICBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxuICAgIH1cbiAgICByZXR1cm4gYXI7XG59O1xudmFyIF9fc3ByZWFkQXJyYXkkMSA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fc3ByZWFkQXJyYXkpIHx8IGZ1bmN0aW9uICh0bywgZnJvbSwgcGFjaykge1xuICAgIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XG4gICAgICAgICAgICBhcltpXSA9IGZyb21baV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XG59O1xudmFyIF9fdmFsdWVzID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX192YWx1ZXMpIHx8IGZ1bmN0aW9uKG8pIHtcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xufTtcbi8qKlxuICogSGVhcFxuICogQHR5cGUge0NsYXNzfVxuICovXG52YXIgSGVhcEFzeW5jID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIEhlYXAgaW5zdGFuY2UgY29uc3RydWN0b3IuXG4gICAgICogQHBhcmFtICB7RnVuY3Rpb259IGNvbXBhcmUgT3B0aW9uYWwgY29tcGFyaXNvbiBmdW5jdGlvbiwgZGVmYXVsdHMgdG8gSGVhcC5taW5Db21wYXJhdG9yPG51bWJlcj5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBIZWFwQXN5bmMoY29tcGFyZSkge1xuICAgICAgICBpZiAoY29tcGFyZSA9PT0gdm9pZCAwKSB7IGNvbXBhcmUgPSBIZWFwQXN5bmMubWluQ29tcGFyYXRvcjsgfVxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmNvbXBhcmUgPSBjb21wYXJlO1xuICAgICAgICB0aGlzLmhlYXBBcnJheSA9IFtdO1xuICAgICAgICB0aGlzLl9saW1pdCA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbGlhcyBvZiBhZGRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMub2ZmZXIgPSB0aGlzLmFkZDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFsaWFzIG9mIHBlZWtcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMucGVlaztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFsaWFzIG9mIHBvcFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5wb2xsID0gdGhpcy5wb3A7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBpbnZlcnNlIHRvIHRoZSBjb21wYXJpc29uIGZ1bmN0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9pbnZlcnRlZENvbXBhcmUgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmNvbXBhcmUoYSwgYikudGhlbihmdW5jdGlvbiAocmVzKSB7IHJldHVybiAtMSAqIHJlczsgfSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIC8qXG4gICAgICAgICAgICAgIFN0YXRpYyBtZXRob2RzXG4gICAgICovXG4gICAgLyoqXG4gICAgICogR2V0cyBjaGlsZHJlbiBpbmRpY2VzIGZvciBnaXZlbiBpbmRleC5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGlkeCAgICAgUGFyZW50IGluZGV4XG4gICAgICogQHJldHVybiB7QXJyYXkoTnVtYmVyKX0gIEFycmF5IG9mIGNoaWxkcmVuIGluZGljZXNcbiAgICAgKi9cbiAgICBIZWFwQXN5bmMuZ2V0Q2hpbGRyZW5JbmRleE9mID0gZnVuY3Rpb24gKGlkeCkge1xuICAgICAgICByZXR1cm4gW2lkeCAqIDIgKyAxLCBpZHggKiAyICsgMl07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXRzIHBhcmVudCBpbmRleCBmb3IgZ2l2ZW4gaW5kZXguXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBpZHggIENoaWxkcmVuIGluZGV4XG4gICAgICogQHJldHVybiB7TnVtYmVyIHwgdW5kZWZpbmVkfSAgICAgIFBhcmVudCBpbmRleCwgLTEgaWYgaWR4IGlzIDBcbiAgICAgKi9cbiAgICBIZWFwQXN5bmMuZ2V0UGFyZW50SW5kZXhPZiA9IGZ1bmN0aW9uIChpZHgpIHtcbiAgICAgICAgaWYgKGlkeCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHdoaWNoQ2hpbGRyZW4gPSBpZHggJSAyID8gMSA6IDI7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKChpZHggLSB3aGljaENoaWxkcmVuKSAvIDIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0cyBzaWJsaW5nIGluZGV4IGZvciBnaXZlbiBpbmRleC5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGlkeCAgQ2hpbGRyZW4gaW5kZXhcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXIgfCB1bmRlZmluZWR9ICAgICAgU2libGluZyBpbmRleCwgLTEgaWYgaWR4IGlzIDBcbiAgICAgKi9cbiAgICBIZWFwQXN5bmMuZ2V0U2libGluZ0luZGV4T2YgPSBmdW5jdGlvbiAoaWR4KSB7XG4gICAgICAgIGlmIChpZHggPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIHZhciB3aGljaENoaWxkcmVuID0gaWR4ICUgMiA/IDEgOiAtMTtcbiAgICAgICAgcmV0dXJuIGlkeCArIHdoaWNoQ2hpbGRyZW47XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNaW4gaGVhcCBjb21wYXJpc29uIGZ1bmN0aW9uLCBkZWZhdWx0LlxuICAgICAqIEBwYXJhbSAge2FueX0gYSAgICAgRmlyc3QgZWxlbWVudFxuICAgICAqIEBwYXJhbSAge2FueX0gYiAgICAgU2Vjb25kIGVsZW1lbnRcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9ICAgIDAgaWYgdGhleSdyZSBlcXVhbCwgcG9zaXRpdmUgaWYgYGFgIGdvZXMgdXAsIG5lZ2F0aXZlIGlmIGBiYCBnb2VzIHVwXG4gICAgICovXG4gICAgSGVhcEFzeW5jLm1pbkNvbXBhcmF0b3IgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IkMSh0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBpZiAoYSA+IGIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIDFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChhIDwgYikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgLTFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIDBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE1heCBoZWFwIGNvbXBhcmlzb24gZnVuY3Rpb24uXG4gICAgICogQHBhcmFtICB7YW55fSBhICAgICBGaXJzdCBlbGVtZW50XG4gICAgICogQHBhcmFtICB7YW55fSBiICAgICBTZWNvbmQgZWxlbWVudFxuICAgICAqIEByZXR1cm4ge051bWJlcn0gICAgMCBpZiB0aGV5J3JlIGVxdWFsLCBwb3NpdGl2ZSBpZiBgYWAgZ29lcyB1cCwgbmVnYXRpdmUgaWYgYGJgIGdvZXMgdXBcbiAgICAgKi9cbiAgICBIZWFwQXN5bmMubWF4Q29tcGFyYXRvciA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvciQxKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIGlmIChiID4gYSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGIgPCBhKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCAtMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgMF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTWluIG51bWJlciBoZWFwIGNvbXBhcmlzb24gZnVuY3Rpb24sIGRlZmF1bHQuXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBhICAgICBGaXJzdCBlbGVtZW50XG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBiICAgICBTZWNvbmQgZWxlbWVudFxuICAgICAqIEByZXR1cm4ge051bWJlcn0gICAgMCBpZiB0aGV5J3JlIGVxdWFsLCBwb3NpdGl2ZSBpZiBgYWAgZ29lcyB1cCwgbmVnYXRpdmUgaWYgYGJgIGdvZXMgdXBcbiAgICAgKi9cbiAgICBIZWFwQXN5bmMubWluQ29tcGFyYXRvck51bWJlciA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvciQxKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBhIC0gYl07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNYXggbnVtYmVyIGhlYXAgY29tcGFyaXNvbiBmdW5jdGlvbi5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGEgICAgIEZpcnN0IGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGIgICAgIFNlY29uZCBlbGVtZW50XG4gICAgICogQHJldHVybiB7TnVtYmVyfSAgICAwIGlmIHRoZXkncmUgZXF1YWwsIHBvc2l0aXZlIGlmIGBhYCBnb2VzIHVwLCBuZWdhdGl2ZSBpZiBgYmAgZ29lcyB1cFxuICAgICAqL1xuICAgIEhlYXBBc3luYy5tYXhDb21wYXJhdG9yTnVtYmVyID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yJDEodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGIgLSBhXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERlZmF1bHQgZXF1YWxpdHkgZnVuY3Rpb24uXG4gICAgICogQHBhcmFtICB7YW55fSBhICAgIEZpcnN0IGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gIHthbnl9IGIgICAgU2Vjb25kIGVsZW1lbnRcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSAgVHJ1ZSBpZiBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAgICovXG4gICAgSGVhcEFzeW5jLmRlZmF1bHRJc0VxdWFsID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yJDEodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGEgPT09IGJdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUHJpbnRzIGEgaGVhcC5cbiAgICAgKiBAcGFyYW0gIHtIZWFwQXN5bmN9IGhlYXAgSGVhcCB0byBiZSBwcmludGVkXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBIZWFwQXN5bmMucHJpbnQgPSBmdW5jdGlvbiAoaGVhcCkge1xuICAgICAgICBmdW5jdGlvbiBkZWVwKGkpIHtcbiAgICAgICAgICAgIHZhciBwaSA9IEhlYXBBc3luYy5nZXRQYXJlbnRJbmRleE9mKGkpO1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5sb2cyKHBpICsgMSkpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHJlcGVhdChzdHIsIHRpbWVzKSB7XG4gICAgICAgICAgICB2YXIgb3V0ID0gJyc7XG4gICAgICAgICAgICBmb3IgKDsgdGltZXMgPiAwOyAtLXRpbWVzKSB7XG4gICAgICAgICAgICAgICAgb3V0ICs9IHN0cjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvdXQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5vZGUgPSAwO1xuICAgICAgICB2YXIgbGluZXMgPSBbXTtcbiAgICAgICAgdmFyIG1heExpbmVzID0gZGVlcChoZWFwLmxlbmd0aCAtIDEpICsgMjtcbiAgICAgICAgdmFyIG1heExlbmd0aCA9IDA7XG4gICAgICAgIHdoaWxlIChub2RlIDwgaGVhcC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBpID0gZGVlcChub2RlKSArIDE7XG4gICAgICAgICAgICBpZiAobm9kZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGkgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVGV4dCByZXByZXNlbnRhdGlvblxuICAgICAgICAgICAgdmFyIG5vZGVUZXh0ID0gU3RyaW5nKGhlYXAuZ2V0KG5vZGUpKTtcbiAgICAgICAgICAgIGlmIChub2RlVGV4dC5sZW5ndGggPiBtYXhMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBtYXhMZW5ndGggPSBub2RlVGV4dC5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBZGQgdG8gbGluZVxuICAgICAgICAgICAgbGluZXNbaV0gPSBsaW5lc1tpXSB8fCBbXTtcbiAgICAgICAgICAgIGxpbmVzW2ldLnB1c2gobm9kZVRleHQpO1xuICAgICAgICAgICAgbm9kZSArPSAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaW5lc1xuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAobGluZSwgaSkge1xuICAgICAgICAgICAgdmFyIHRpbWVzID0gTWF0aC5wb3coMiwgbWF4TGluZXMgLSBpKSAtIDE7XG4gICAgICAgICAgICByZXR1cm4gKHJlcGVhdCgnICcsIE1hdGguZmxvb3IodGltZXMgLyAyKSAqIG1heExlbmd0aCkgK1xuICAgICAgICAgICAgICAgIGxpbmVcbiAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2VudGVyZWRcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhhbGYgPSAobWF4TGVuZ3RoIC0gZWwubGVuZ3RoKSAvIDI7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXBlYXQoJyAnLCBNYXRoLmNlaWwoaGFsZikpICsgZWwgKyByZXBlYXQoJyAnLCBNYXRoLmZsb29yKGhhbGYpKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuam9pbihyZXBlYXQoJyAnLCB0aW1lcyAqIG1heExlbmd0aCkpKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5qb2luKCdcXG4nKTtcbiAgICB9O1xuICAgIC8qXG4gICAgICAgICAgICAgIFB5dGhvbiBzdHlsZVxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGFuIGFycmF5IGludG8gYW4gYXJyYXktaGVhcCwgaW4gcGxhY2VcbiAgICAgKiBAcGFyYW0gIHtBcnJheX0gICAgYXJyICAgICAgQXJyYXkgdG8gYmUgbW9kaWZpZWRcbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gY29tcGFyZSAgT3B0aW9uYWwgY29tcGFyZSBmdW5jdGlvblxuICAgICAqIEByZXR1cm4ge0hlYXBBc3luY30gICAgICAgICAgICAgIEZvciBjb252ZW5pZW5jZSwgaXQgcmV0dXJucyBhIEhlYXAgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBIZWFwQXN5bmMuaGVhcGlmeSA9IGZ1bmN0aW9uIChhcnIsIGNvbXBhcmUpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGhlYXA7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IkMSh0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYXAgPSBuZXcgSGVhcEFzeW5jKGNvbXBhcmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVhcC5oZWFwQXJyYXkgPSBhcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBoZWFwLmluaXQoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBoZWFwXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBFeHRyYWN0IHRoZSBwZWVrIG9mIGFuIGFycmF5LWhlYXBcbiAgICAgKiBAcGFyYW0gIHtBcnJheX0gICAgaGVhcEFyciAgQXJyYXkgdG8gYmUgbW9kaWZpZWQsIHNob3VsZCBiZSBhIGhlYXBcbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gY29tcGFyZSAgT3B0aW9uYWwgY29tcGFyZSBmdW5jdGlvblxuICAgICAqIEByZXR1cm4ge2FueX0gICAgICAgICAgICAgICBSZXR1cm5zIHRoZSBleHRyYWN0ZWQgcGVla1xuICAgICAqL1xuICAgIEhlYXBBc3luYy5oZWFwcG9wID0gZnVuY3Rpb24gKGhlYXBBcnIsIGNvbXBhcmUpIHtcbiAgICAgICAgdmFyIGhlYXAgPSBuZXcgSGVhcEFzeW5jKGNvbXBhcmUpO1xuICAgICAgICBoZWFwLmhlYXBBcnJheSA9IGhlYXBBcnI7XG4gICAgICAgIHJldHVybiBoZWFwLnBvcCgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUHVzaGVzIGEgaXRlbSBpbnRvIGFuIGFycmF5LWhlYXBcbiAgICAgKiBAcGFyYW0gIHtBcnJheX0gICAgaGVhcEFyciAgQXJyYXkgdG8gYmUgbW9kaWZpZWQsIHNob3VsZCBiZSBhIGhlYXBcbiAgICAgKiBAcGFyYW0gIHthbnl9ICAgICAgaXRlbSAgICAgSXRlbSB0byBwdXNoXG4gICAgICogQHBhcmFtICB7RnVuY3Rpb259IGNvbXBhcmUgIE9wdGlvbmFsIGNvbXBhcmUgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBIZWFwQXN5bmMuaGVhcHB1c2ggPSBmdW5jdGlvbiAoaGVhcEFyciwgaXRlbSwgY29tcGFyZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaGVhcDtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvciQxKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhcCA9IG5ldyBIZWFwQXN5bmMoY29tcGFyZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFwLmhlYXBBcnJheSA9IGhlYXBBcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBoZWFwLnB1c2goaXRlbSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUHVzaCBmb2xsb3dlZCBieSBwb3AsIGZhc3RlclxuICAgICAqIEBwYXJhbSAge0FycmF5fSAgICBoZWFwQXJyICBBcnJheSB0byBiZSBtb2RpZmllZCwgc2hvdWxkIGJlIGEgaGVhcFxuICAgICAqIEBwYXJhbSAge2FueX0gICAgICBpdGVtICAgICBJdGVtIHRvIHB1c2hcbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gY29tcGFyZSAgT3B0aW9uYWwgY29tcGFyZSBmdW5jdGlvblxuICAgICAqIEByZXR1cm4ge2FueX0gICAgICAgICAgICAgICBSZXR1cm5zIHRoZSBleHRyYWN0ZWQgcGVla1xuICAgICAqL1xuICAgIEhlYXBBc3luYy5oZWFwcHVzaHBvcCA9IGZ1bmN0aW9uIChoZWFwQXJyLCBpdGVtLCBjb21wYXJlKSB7XG4gICAgICAgIHZhciBoZWFwID0gbmV3IEhlYXBBc3luYyhjb21wYXJlKTtcbiAgICAgICAgaGVhcC5oZWFwQXJyYXkgPSBoZWFwQXJyO1xuICAgICAgICByZXR1cm4gaGVhcC5wdXNocG9wKGl0ZW0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVwbGFjZSBwZWVrIHdpdGggaXRlbVxuICAgICAqIEBwYXJhbSAge0FycmF5fSAgICBoZWFwQXJyICBBcnJheSB0byBiZSBtb2RpZmllZCwgc2hvdWxkIGJlIGEgaGVhcFxuICAgICAqIEBwYXJhbSAge2FueX0gICAgICBpdGVtICAgICBJdGVtIGFzIHJlcGxhY2VtZW50XG4gICAgICogQHBhcmFtICB7RnVuY3Rpb259IGNvbXBhcmUgIE9wdGlvbmFsIGNvbXBhcmUgZnVuY3Rpb25cbiAgICAgKiBAcmV0dXJuIHthbnl9ICAgICAgICAgICAgICAgUmV0dXJucyB0aGUgZXh0cmFjdGVkIHBlZWtcbiAgICAgKi9cbiAgICBIZWFwQXN5bmMuaGVhcHJlcGxhY2UgPSBmdW5jdGlvbiAoaGVhcEFyciwgaXRlbSwgY29tcGFyZSkge1xuICAgICAgICB2YXIgaGVhcCA9IG5ldyBIZWFwQXN5bmMoY29tcGFyZSk7XG4gICAgICAgIGhlYXAuaGVhcEFycmF5ID0gaGVhcEFycjtcbiAgICAgICAgcmV0dXJuIGhlYXAucmVwbGFjZShpdGVtKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgYG5gIG1vc3QgdmFsdWFibGUgZWxlbWVudHMgb2YgYSBoZWFwLWxpa2UgQXJyYXlcbiAgICAgKiBAcGFyYW0gIHtBcnJheX0gICAgaGVhcEFyciAgQXJyYXksIHNob3VsZCBiZSBhbiBhcnJheS1oZWFwXG4gICAgICogQHBhcmFtICB7bnVtYmVyfSAgIG4gICAgICAgIE1heCBudW1iZXIgb2YgZWxlbWVudHNcbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gY29tcGFyZSAgT3B0aW9uYWwgY29tcGFyZSBmdW5jdGlvblxuICAgICAqIEByZXR1cm4ge2FueX0gICAgICAgICAgICAgICBFbGVtZW50c1xuICAgICAqL1xuICAgIEhlYXBBc3luYy5oZWFwdG9wID0gZnVuY3Rpb24gKGhlYXBBcnIsIG4sIGNvbXBhcmUpIHtcbiAgICAgICAgaWYgKG4gPT09IHZvaWQgMCkgeyBuID0gMTsgfVxuICAgICAgICB2YXIgaGVhcCA9IG5ldyBIZWFwQXN5bmMoY29tcGFyZSk7XG4gICAgICAgIGhlYXAuaGVhcEFycmF5ID0gaGVhcEFycjtcbiAgICAgICAgcmV0dXJuIGhlYXAudG9wKG4pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBgbmAgbGVhc3QgdmFsdWFibGUgZWxlbWVudHMgb2YgYSBoZWFwLWxpa2UgQXJyYXlcbiAgICAgKiBAcGFyYW0gIHtBcnJheX0gICAgaGVhcEFyciAgQXJyYXksIHNob3VsZCBiZSBhbiBhcnJheS1oZWFwXG4gICAgICogQHBhcmFtICB7bnVtYmVyfSAgIG4gICAgICAgIE1heCBudW1iZXIgb2YgZWxlbWVudHNcbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gY29tcGFyZSAgT3B0aW9uYWwgY29tcGFyZSBmdW5jdGlvblxuICAgICAqIEByZXR1cm4ge2FueX0gICAgICAgICAgICAgICBFbGVtZW50c1xuICAgICAqL1xuICAgIEhlYXBBc3luYy5oZWFwYm90dG9tID0gZnVuY3Rpb24gKGhlYXBBcnIsIG4sIGNvbXBhcmUpIHtcbiAgICAgICAgaWYgKG4gPT09IHZvaWQgMCkgeyBuID0gMTsgfVxuICAgICAgICB2YXIgaGVhcCA9IG5ldyBIZWFwQXN5bmMoY29tcGFyZSk7XG4gICAgICAgIGhlYXAuaGVhcEFycmF5ID0gaGVhcEFycjtcbiAgICAgICAgcmV0dXJuIGhlYXAuYm90dG9tKG4pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBgbmAgbW9zdCB2YWx1YWJsZSBlbGVtZW50cyBvZiBhbiBpdGVyYWJsZVxuICAgICAqIEBwYXJhbSAge251bWJlcn0gICBuICAgICAgICBNYXggbnVtYmVyIG9mIGVsZW1lbnRzXG4gICAgICogQHBhcmFtICB7SXRlcmFibGV9IEl0ZXJhYmxlIEl0ZXJhYmxlIGxpc3Qgb2YgZWxlbWVudHNcbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gY29tcGFyZSAgT3B0aW9uYWwgY29tcGFyZSBmdW5jdGlvblxuICAgICAqIEByZXR1cm4ge2FueX0gICAgICAgICAgICAgICBFbGVtZW50c1xuICAgICAqL1xuICAgIEhlYXBBc3luYy5ubGFyZ2VzdCA9IGZ1bmN0aW9uIChuLCBpdGVyYWJsZSwgY29tcGFyZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaGVhcDtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvciQxKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhcCA9IG5ldyBIZWFwQXN5bmMoY29tcGFyZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFwLmhlYXBBcnJheSA9IF9fc3ByZWFkQXJyYXkkMShbXSwgX19yZWFkJDEoaXRlcmFibGUpLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBoZWFwLmluaXQoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBoZWFwLnRvcChuKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBgbmAgbGVhc3QgdmFsdWFibGUgZWxlbWVudHMgb2YgYW4gaXRlcmFibGVcbiAgICAgKiBAcGFyYW0gIHtudW1iZXJ9ICAgbiAgICAgICAgTWF4IG51bWJlciBvZiBlbGVtZW50c1xuICAgICAqIEBwYXJhbSAge0l0ZXJhYmxlfSBJdGVyYWJsZSBJdGVyYWJsZSBsaXN0IG9mIGVsZW1lbnRzXG4gICAgICogQHBhcmFtICB7RnVuY3Rpb259IGNvbXBhcmUgIE9wdGlvbmFsIGNvbXBhcmUgZnVuY3Rpb25cbiAgICAgKiBAcmV0dXJuIHthbnl9ICAgICAgICAgICAgICAgRWxlbWVudHNcbiAgICAgKi9cbiAgICBIZWFwQXN5bmMubnNtYWxsZXN0ID0gZnVuY3Rpb24gKG4sIGl0ZXJhYmxlLCBjb21wYXJlKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBoZWFwO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yJDEodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFwID0gbmV3IEhlYXBBc3luYyhjb21wYXJlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYXAuaGVhcEFycmF5ID0gX19zcHJlYWRBcnJheSQxKFtdLCBfX3JlYWQkMShpdGVyYWJsZSksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGhlYXAuaW5pdCgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGhlYXAuYm90dG9tKG4pXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKlxuICAgICAgICAgICAgICBJbnN0YW5jZSBtZXRob2RzXG4gICAgICovXG4gICAgLyoqXG4gICAgICogQWRkcyBhbiBlbGVtZW50IHRvIHRoZSBoZWFwLiBBbGlhc2VzOiBgb2ZmZXJgLlxuICAgICAqIFNhbWUgYXM6IHB1c2goZWxlbWVudClcbiAgICAgKiBAcGFyYW0ge2FueX0gZWxlbWVudCBFbGVtZW50IHRvIGJlIGFkZGVkXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZVxuICAgICAqL1xuICAgIEhlYXBBc3luYy5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yJDEodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuX3NvcnROb2RlVXAodGhpcy5oZWFwQXJyYXkucHVzaChlbGVtZW50KSAtIDEpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYXBwbHlMaW1pdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRydWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gYXJyYXkgb2YgZWxlbWVudHMgdG8gdGhlIGhlYXAuXG4gICAgICogU2ltaWxhciBhczogcHVzaChlbGVtZW50LCBlbGVtZW50LCAuLi4pLlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGVsZW1lbnRzIEVsZW1lbnRzIHRvIGJlIGFkZGVkXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZVxuICAgICAqL1xuICAgIEhlYXBBc3luYy5wcm90b3R5cGUuYWRkQWxsID0gZnVuY3Rpb24gKGVsZW1lbnRzKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBpLCBsO1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yJDEodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpID0gdGhpcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAoX2EgPSB0aGlzLmhlYXBBcnJheSkucHVzaC5hcHBseShfYSwgX19zcHJlYWRBcnJheSQxKFtdLCBfX3JlYWQkMShlbGVtZW50cyksIGZhbHNlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsID0gdGhpcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGkgPCBsKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLl9zb3J0Tm9kZVVwKGkpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAzO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICArK2k7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAxXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYXBwbHlMaW1pdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRydWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgYm90dG9tIChsb3dlc3QgdmFsdWUpIE4gZWxlbWVudHMgb2YgdGhlIGhlYXAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IG4gIE51bWJlciBvZiBlbGVtZW50cy5cbiAgICAgKiBAcmV0dXJuIHtBcnJheX0gICAgIEFycmF5IG9mIGxlbmd0aCA8PSBOLlxuICAgICAqL1xuICAgIEhlYXBBc3luYy5wcm90b3R5cGUuYm90dG9tID0gZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgaWYgKG4gPT09IHZvaWQgMCkgeyBuID0gMTsgfVxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IkMSh0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oZWFwQXJyYXkubGVuZ3RoID09PSAwIHx8IG4gPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBOb3RoaW5nIHRvIGRvXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBbXV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaGVhcEFycmF5Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBKdXN0IHRoZSBwZWVrXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBbdGhpcy5oZWFwQXJyYXlbMF1dXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobiA+PSB0aGlzLmhlYXBBcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHdob2xlIGhlYXBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9fc3ByZWFkQXJyYXkkMShbXSwgX19yZWFkJDEodGhpcy5oZWFwQXJyYXkpLCBmYWxzZSldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU29tZSBlbGVtZW50c1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdGhpcy5fYm90dG9tTl9wdXNoKH5+bildO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZSBoZWFwIGlzIHNvcnRlZCwgdXNlZnVsIGZvciB0ZXN0aW5nIHB1cnBvc2VzLlxuICAgICAqIEByZXR1cm4ge1VuZGVmaW5lZCB8IEVsZW1lbnR9ICBSZXR1cm5zIGFuIGVsZW1lbnQgaWYgc29tZXRoaW5nIHdyb25nIGlzIGZvdW5kLCBvdGhlcndpc2UgaXQncyB1bmRlZmluZWRcbiAgICAgKi9cbiAgICBIZWFwQXN5bmMucHJvdG90eXBlLmNoZWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaiwgZWwsIGNoaWxkcmVuLCBjaGlsZHJlbl8xLCBjaGlsZHJlbl8xXzEsIGNoLCBlXzFfMTtcbiAgICAgICAgICAgIHZhciBlXzEsIF9hO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yJDEodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBqID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoaiA8IHRoaXMuaGVhcEFycmF5Lmxlbmd0aCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDEwXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsID0gdGhpcy5oZWFwQXJyYXlbal07XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW5PZihqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2IudHJ5cy5wdXNoKFsyLCA3LCA4LCA5XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbl8xID0gKGVfMSA9IHZvaWQgMCwgX192YWx1ZXMoY2hpbGRyZW4pKSwgY2hpbGRyZW5fMV8xID0gY2hpbGRyZW5fMS5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDM7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIWNoaWxkcmVuXzFfMS5kb25lKSByZXR1cm4gWzMgLypicmVhayovLCA2XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoID0gY2hpbGRyZW5fMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5jb21wYXJlKGVsLCBjaCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKF9iLnNlbnQoKSkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGVsXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gNTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5fMV8xID0gY2hpbGRyZW5fMS5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OiByZXR1cm4gWzMgLypicmVhayovLCA5XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICAgICAgZV8xXzEgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzEgPSB7IGVycm9yOiBlXzFfMSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgOV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkcmVuXzFfMSAmJiAhY2hpbGRyZW5fMV8xLmRvbmUgJiYgKF9hID0gY2hpbGRyZW5fMS5yZXR1cm4pKSBfYS5jYWxsKGNoaWxkcmVuXzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs3IC8qZW5kZmluYWxseSovXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgICAgICAgICAgKytqO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTA6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYWxsIG9mIHRoZSBlbGVtZW50cyBmcm9tIHRoaXMgaGVhcC5cbiAgICAgKi9cbiAgICBIZWFwQXN5bmMucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmhlYXBBcnJheSA9IFtdO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2xvbmUgdGhpcyBoZWFwXG4gICAgICogQHJldHVybiB7SGVhcEFzeW5jfVxuICAgICAqL1xuICAgIEhlYXBBc3luYy5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjbG9uZWQgPSBuZXcgSGVhcEFzeW5jKHRoaXMuY29tcGFyYXRvcigpKTtcbiAgICAgICAgY2xvbmVkLmhlYXBBcnJheSA9IHRoaXMudG9BcnJheSgpO1xuICAgICAgICBjbG9uZWQuX2xpbWl0ID0gdGhpcy5fbGltaXQ7XG4gICAgICAgIHJldHVybiBjbG9uZWQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjb21wYXJpc29uIGZ1bmN0aW9uLlxuICAgICAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICAgICAqL1xuICAgIEhlYXBBc3luYy5wcm90b3R5cGUuY29tcGFyYXRvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGlzIHF1ZXVlIGNvbnRhaW5zIHRoZSBzcGVjaWZpZWQgZWxlbWVudC5cbiAgICAgKiBAcGFyYW0gIHthbnl9ICAgICAgbyAgIEVsZW1lbnQgdG8gYmUgZm91bmRcbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm4gIE9wdGlvbmFsIGNvbXBhcmlzb24gZnVuY3Rpb24sIHJlY2VpdmVzIChlbGVtZW50LCBuZWVkbGUpXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBIZWFwQXN5bmMucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24gKG8sIGZuKSB7XG4gICAgICAgIGlmIChmbiA9PT0gdm9pZCAwKSB7IGZuID0gSGVhcEFzeW5jLmRlZmF1bHRJc0VxdWFsOyB9XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfYSwgX2IsIGVsLCBlXzJfMTtcbiAgICAgICAgICAgIHZhciBlXzIsIF9jO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yJDEodGhpcywgZnVuY3Rpb24gKF9kKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfZC5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBfZC50cnlzLnB1c2goWzAsIDUsIDYsIDddKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gX192YWx1ZXModGhpcy5oZWFwQXJyYXkpLCBfYiA9IF9hLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9kLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhX2IuZG9uZSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgICAgICAgICBlbCA9IF9iLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZm4oZWwsIG8pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9kLnNlbnQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB0cnVlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF9kLmxhYmVsID0gMztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2IgPSBfYS5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAxXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzMgLypicmVhayovLCA3XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgZV8yXzEgPSBfZC5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzIgPSB7IGVycm9yOiBlXzJfMSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgN107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9iICYmICFfYi5kb25lICYmIChfYyA9IF9hLnJldHVybikpIF9jLmNhbGwoX2EpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzIpIHRocm93IGVfMi5lcnJvcjsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs3IC8qZW5kZmluYWxseSovXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OiByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpc2UgYSBoZWFwLCBzb3J0aW5nIG5vZGVzXG4gICAgICogQHBhcmFtICB7QXJyYXl9IGFycmF5IE9wdGlvbmFsIGluaXRpYWwgc3RhdGUgYXJyYXlcbiAgICAgKi9cbiAgICBIZWFwQXN5bmMucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoYXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IkMSh0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhcEFycmF5ID0gX19zcHJlYWRBcnJheSQxKFtdLCBfX3JlYWQkMShhcnJheSksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBNYXRoLmZsb29yKHRoaXMuaGVhcEFycmF5Lmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGkgPj0gMCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5fc29ydE5vZGVEb3duKGkpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAzO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICAtLWk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAxXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYXBwbHlMaW1pdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRlc3QgaWYgdGhlIGhlYXAgaGFzIG5vIGVsZW1lbnRzLlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IFRydWUgaWYgbm8gZWxlbWVudHMgb24gdGhlIGhlYXBcbiAgICAgKi9cbiAgICBIZWFwQXN5bmMucHJvdG90eXBlLmlzRW1wdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxlbmd0aCA9PT0gMDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbGVhZnMgb2YgdGhlIHRyZWUgKG5vIGNoaWxkcmVuIG5vZGVzKVxuICAgICAqL1xuICAgIEhlYXBBc3luYy5wcm90b3R5cGUubGVhZnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmhlYXBBcnJheS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcGkgPSBIZWFwQXN5bmMuZ2V0UGFyZW50SW5kZXhPZih0aGlzLmhlYXBBcnJheS5sZW5ndGggLSAxKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhcEFycmF5LnNsaWNlKHBpICsgMSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSGVhcEFzeW5jLnByb3RvdHlwZSwgXCJsZW5ndGhcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogTGVuZ3RoIG9mIHRoZSBoZWFwLlxuICAgICAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhlYXBBcnJheS5sZW5ndGg7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSGVhcEFzeW5jLnByb3RvdHlwZSwgXCJsaW1pdFwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgbGVuZ3RoIGxpbWl0IG9mIHRoZSBoZWFwLlxuICAgICAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9saW1pdDtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCBsZW5ndGggbGltaXQgb2YgdGhlIGhlYXAuXG4gICAgICAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9sKSB7XG4gICAgICAgICAgICB0aGlzLl9saW1pdCA9IH5+X2w7XG4gICAgICAgICAgICB0aGlzLl9hcHBseUxpbWl0KCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBUb3Agbm9kZS4gQWxpYXNlczogYGVsZW1lbnRgLlxuICAgICAqIFNhbWUgYXM6IGB0b3AoMSlbMF1gXG4gICAgICogQHJldHVybiB7YW55fSBUb3Agbm9kZVxuICAgICAqL1xuICAgIEhlYXBBc3luYy5wcm90b3R5cGUucGVlayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhcEFycmF5WzBdO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRXh0cmFjdCB0aGUgdG9wIG5vZGUgKHJvb3QpLiBBbGlhc2VzOiBgcG9sbGAuXG4gICAgICogQHJldHVybiB7YW55fSBFeHRyYWN0ZWQgdG9wIG5vZGUsIHVuZGVmaW5lZCBpZiBlbXB0eVxuICAgICAqL1xuICAgIEhlYXBBc3luYy5wcm90b3R5cGUucG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbGFzdDtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvciQxKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIGxhc3QgPSB0aGlzLmhlYXBBcnJheS5wb3AoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sZW5ndGggPiAwICYmIGxhc3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdGhpcy5yZXBsYWNlKGxhc3QpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGxhc3RdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUHVzaGVzIGVsZW1lbnQocykgdG8gdGhlIGhlYXAuXG4gICAgICogQHBhcmFtICB7Li4uYW55fSBlbGVtZW50cyBFbGVtZW50cyB0byBpbnNlcnRcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSBUcnVlIGlmIGVsZW1lbnRzIGFyZSBwcmVzZW50XG4gICAgICovXG4gICAgSGVhcEFzeW5jLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZWxlbWVudHMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGVsZW1lbnRzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yJDEodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZWxlbWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB0aGlzLmFkZChlbGVtZW50c1swXSldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRoaXMuYWRkQWxsKGVsZW1lbnRzKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2FtZSBhcyBwdXNoICYgcG9wIGluIHNlcXVlbmNlLCBidXQgZmFzdGVyXG4gICAgICogQHBhcmFtICB7YW55fSBlbGVtZW50IEVsZW1lbnQgdG8gaW5zZXJ0XG4gICAgICogQHJldHVybiB7YW55fSAgRXh0cmFjdGVkIHRvcCBub2RlXG4gICAgICovXG4gICAgSGVhcEFzeW5jLnByb3RvdHlwZS5wdXNocG9wID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yJDEodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuY29tcGFyZSh0aGlzLmhlYXBBcnJheVswXSwgZWxlbWVudCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISgoX2Iuc2VudCgpKSA8IDApKSByZXR1cm4gWzMgLypicmVhayovLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gX19yZWFkJDEoW3RoaXMuaGVhcEFycmF5WzBdLCBlbGVtZW50XSwgMiksIGVsZW1lbnQgPSBfYVswXSwgdGhpcy5oZWFwQXJyYXlbMF0gPSBfYVsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuX3NvcnROb2RlRG93bigwKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzIgLypyZXR1cm4qLywgZWxlbWVudF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGFuIGVsZW1lbnQgZnJvbSB0aGUgaGVhcC5cbiAgICAgKiBAcGFyYW0gIHthbnl9ICAgbyAgICAgIEVsZW1lbnQgdG8gYmUgZm91bmRcbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm4gIE9wdGlvbmFsIGZ1bmN0aW9uIHRvIGNvbXBhcmVcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSAgICAgIFRydWUgaWYgdGhlIGhlYXAgd2FzIG1vZGlmaWVkXG4gICAgICovXG4gICAgSGVhcEFzeW5jLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAobywgZm4pIHtcbiAgICAgICAgaWYgKGZuID09PSB2b2lkIDApIHsgZm4gPSBIZWFwQXN5bmMuZGVmYXVsdElzRXF1YWw7IH1cbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGlkeCwgaTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvciQxKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodGhpcy5sZW5ndGggPiAwKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMTNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEobyA9PT0gdW5kZWZpbmVkKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvcCgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRydWVdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZHggPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAzO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShpIDwgdGhpcy5oZWFwQXJyYXkubGVuZ3RoKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNl07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBmbih0aGlzLmhlYXBBcnJheVtpXSwgbyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2Euc2VudCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWR4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA2XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gNTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgKytpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGlkeCA+PSAwKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMTNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoaWR4ID09PSAwKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgOF07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvcCgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMTJdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShpZHggPT09IHRoaXMubGVuZ3RoIC0gMSkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDldO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFwQXJyYXkucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAxMl07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhcEFycmF5LnNwbGljZShpZHgsIDEsIHRoaXMuaGVhcEFycmF5LnBvcCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuX3NvcnROb2RlVXAoaWR4KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLl9zb3J0Tm9kZURvd24oaWR4KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDEyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEyOiByZXR1cm4gWzIgLypyZXR1cm4qLywgdHJ1ZV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTM6IHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUG9wIHRoZSBjdXJyZW50IHBlZWsgdmFsdWUsIGFuZCBhZGQgdGhlIG5ldyBpdGVtLlxuICAgICAqIEBwYXJhbSAge2FueX0gZWxlbWVudCAgRWxlbWVudCB0byByZXBsYWNlIHBlZWtcbiAgICAgKiBAcmV0dXJuIHthbnl9ICAgICAgICAgT2xkIHBlZWtcbiAgICAgKi9cbiAgICBIZWFwQXN5bmMucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcGVlaztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvciQxKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcGVlayA9IHRoaXMuaGVhcEFycmF5WzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFwQXJyYXlbMF0gPSBlbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5fc29ydE5vZGVEb3duKDApXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHBlZWtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNpemUgb2YgdGhlIGhlYXBcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgSGVhcEFzeW5jLnByb3RvdHlwZS5zaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sZW5ndGg7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIHRvcCAoaGlnaGVzdCB2YWx1ZSkgTiBlbGVtZW50cyBvZiB0aGUgaGVhcC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gbiAgTnVtYmVyIG9mIGVsZW1lbnRzLlxuICAgICAqIEByZXR1cm4ge0FycmF5fSAgICBBcnJheSBvZiBsZW5ndGggPD0gTi5cbiAgICAgKi9cbiAgICBIZWFwQXN5bmMucHJvdG90eXBlLnRvcCA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIGlmIChuID09PSB2b2lkIDApIHsgbiA9IDE7IH1cbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yJDEodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGVhcEFycmF5Lmxlbmd0aCA9PT0gMCB8fCBuIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTm90aGluZyB0byBkb1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgW11dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmhlYXBBcnJheS5sZW5ndGggPT09IDEgfHwgbiA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBKdXN0IHRoZSBwZWVrXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBbdGhpcy5oZWFwQXJyYXlbMF1dXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobiA+PSB0aGlzLmhlYXBBcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHdob2xlIHBlZWtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9fc3ByZWFkQXJyYXkkMShbXSwgX19yZWFkJDEodGhpcy5oZWFwQXJyYXkpLCBmYWxzZSldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU29tZSBlbGVtZW50c1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdGhpcy5fdG9wTl9wdXNoKH5+bildO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENsb25lIHRoZSBoZWFwJ3MgaW50ZXJuYWwgYXJyYXlcbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgKi9cbiAgICBIZWFwQXN5bmMucHJvdG90eXBlLnRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX3NwcmVhZEFycmF5JDEoW10sIF9fcmVhZCQxKHRoaXMuaGVhcEFycmF5KSwgZmFsc2UpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU3RyaW5nIG91dHB1dCwgY2FsbCB0byBBcnJheS5wcm90b3R5cGUudG9TdHJpbmcoKVxuICAgICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICAgKi9cbiAgICBIZWFwQXN5bmMucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWFwQXJyYXkudG9TdHJpbmcoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZWxlbWVudCBhdCB0aGUgZ2l2ZW4gaW5kZXguXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBpIEluZGV4IHRvIGdldFxuICAgICAqIEByZXR1cm4ge2FueX0gICAgICAgRWxlbWVudCBhdCB0aGF0IGluZGV4XG4gICAgICovXG4gICAgSGVhcEFzeW5jLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWFwQXJyYXlbaV07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGVsZW1lbnRzIG9mIHRoZXNlIG5vZGUncyBjaGlsZHJlblxuICAgICAqIEBwYXJhbSAge051bWJlcn0gaWR4IE5vZGUgaW5kZXhcbiAgICAgKiBAcmV0dXJuIHtBcnJheShhbnkpfSAgQ2hpbGRyZW4gZWxlbWVudHNcbiAgICAgKi9cbiAgICBIZWFwQXN5bmMucHJvdG90eXBlLmdldENoaWxkcmVuT2YgPSBmdW5jdGlvbiAoaWR4KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBIZWFwQXN5bmMuZ2V0Q2hpbGRyZW5JbmRleE9mKGlkeClcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGkpIHsgcmV0dXJuIF90aGlzLmhlYXBBcnJheVtpXTsgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGUgIT09IHVuZGVmaW5lZDsgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGVsZW1lbnQgb2YgdGhpcyBub2RlJ3MgcGFyZW50XG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBpZHggTm9kZSBpbmRleFxuICAgICAqIEByZXR1cm4ge2FueX0gICAgIFBhcmVudCBlbGVtZW50XG4gICAgICovXG4gICAgSGVhcEFzeW5jLnByb3RvdHlwZS5nZXRQYXJlbnRPZiA9IGZ1bmN0aW9uIChpZHgpIHtcbiAgICAgICAgdmFyIHBpID0gSGVhcEFzeW5jLmdldFBhcmVudEluZGV4T2YoaWR4KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhcEFycmF5W3BpXTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEl0ZXJhdG9yIGludGVyZmFjZVxuICAgICAqL1xuICAgIEhlYXBBc3luYy5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yJDEodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMubGVuZ3RoKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb3AoKV07XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDBdO1xuICAgICAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gaXRlcmF0b3IuIFRvIGNvbXBseSB3aXRoIEphdmEgaW50ZXJmYWNlLlxuICAgICAqL1xuICAgIEhlYXBBc3luYy5wcm90b3R5cGUuaXRlcmF0b3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTGltaXQgaGVhcCBzaXplIGlmIG5lZWRlZFxuICAgICAqL1xuICAgIEhlYXBBc3luYy5wcm90b3R5cGUuX2FwcGx5TGltaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLl9saW1pdCAmJiB0aGlzLl9saW1pdCA8IHRoaXMuaGVhcEFycmF5Lmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIHJtID0gdGhpcy5oZWFwQXJyYXkubGVuZ3RoIC0gdGhpcy5fbGltaXQ7XG4gICAgICAgICAgICAvLyBJdCdzIG11Y2ggZmFzdGVyIHRoYW4gc3BsaWNlXG4gICAgICAgICAgICB3aGlsZSAocm0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhlYXBBcnJheS5wb3AoKTtcbiAgICAgICAgICAgICAgICAtLXJtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIGJvdHRvbSAobG93ZXN0IHZhbHVlKSBOIGVsZW1lbnRzIG9mIHRoZSBoZWFwLCB3aXRob3V0IGNvcm5lciBjYXNlcywgdW5zb3J0ZWRcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gbiAgTnVtYmVyIG9mIGVsZW1lbnRzLlxuICAgICAqIEByZXR1cm4ge0FycmF5fSAgICAgQXJyYXkgb2YgbGVuZ3RoIDw9IE4uXG4gICAgICovXG4gICAgSGVhcEFzeW5jLnByb3RvdHlwZS5fYm90dG9tTl9wdXNoID0gZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGJvdHRvbUhlYXAsIHN0YXJ0QXQsIHBhcmVudFN0YXJ0QXQsIGluZGljZXMsIGksIGFyciwgaTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvciQxKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tSGVhcCA9IG5ldyBIZWFwQXN5bmModGhpcy5jb21wYXJlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbUhlYXAubGltaXQgPSBuO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tSGVhcC5oZWFwQXJyYXkgPSB0aGlzLmhlYXBBcnJheS5zbGljZSgtbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBib3R0b21IZWFwLmluaXQoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QXQgPSB0aGlzLmhlYXBBcnJheS5sZW5ndGggLSAxIC0gbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudFN0YXJ0QXQgPSBIZWFwQXN5bmMuZ2V0UGFyZW50SW5kZXhPZihzdGFydEF0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGljZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IHN0YXJ0QXQ7IGkgPiBwYXJlbnRTdGFydEF0OyAtLWkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRpY2VzLnB1c2goaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnIgPSB0aGlzLmhlYXBBcnJheTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpbmRpY2VzLmxlbmd0aCkgcmV0dXJuIFszIC8qYnJlYWsqLywgNl07XG4gICAgICAgICAgICAgICAgICAgICAgICBpID0gaW5kaWNlcy5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5jb21wYXJlKGFycltpXSwgYm90dG9tSGVhcC5wZWVrKCkpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoKF9hLnNlbnQoKSkgPiAwKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBib3R0b21IZWFwLnJlcGxhY2UoYXJyW2ldKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpICUgMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGljZXMucHVzaChIZWFwQXN5bmMuZ2V0UGFyZW50SW5kZXhPZihpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDU7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTogcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGJvdHRvbUhlYXAudG9BcnJheSgpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNb3ZlIGEgbm9kZSB0byBhIG5ldyBpbmRleCwgc3dpdGNoaW5nIHBsYWNlc1xuICAgICAqIEBwYXJhbSAge051bWJlcn0gaiBGaXJzdCBub2RlIGluZGV4XG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBrIEFub3RoZXIgbm9kZSBpbmRleFxuICAgICAqL1xuICAgIEhlYXBBc3luYy5wcm90b3R5cGUuX21vdmVOb2RlID0gZnVuY3Rpb24gKGosIGspIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBfYSA9IF9fcmVhZCQxKFt0aGlzLmhlYXBBcnJheVtrXSwgdGhpcy5oZWFwQXJyYXlbal1dLCAyKSwgdGhpcy5oZWFwQXJyYXlbal0gPSBfYVswXSwgdGhpcy5oZWFwQXJyYXlba10gPSBfYVsxXTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE1vdmUgYSBub2RlIGRvd24gdGhlIHRyZWUgKHRvIHRoZSBsZWF2ZXMpIHRvIGZpbmQgYSBwbGFjZSB3aGVyZSB0aGUgaGVhcCBpcyBzb3J0ZWQuXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBpIEluZGV4IG9mIHRoZSBub2RlXG4gICAgICovXG4gICAgSGVhcEFzeW5jLnByb3RvdHlwZS5fc29ydE5vZGVEb3duID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG1vdmVJdCwgc2VsZiwgZ2V0UG90ZW50aWFsUGFyZW50LCBjaGlsZHJlbklkeCwgYmVzdENoaWxkSW5kZXgsIGosIGJlc3RDaGlsZCwgX2E7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yJDEodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBtb3ZlSXQgPSBpIDwgdGhpcy5oZWFwQXJyYXkubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYgPSB0aGlzLmhlYXBBcnJheVtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFBvdGVudGlhbFBhcmVudCA9IGZ1bmN0aW9uIChiZXN0LCBqKSB7IHJldHVybiBfX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvciQxKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSB0aGlzLmhlYXBBcnJheS5sZW5ndGggPiBqO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghX2EpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuY29tcGFyZSh0aGlzLmhlYXBBcnJheVtqXSwgdGhpcy5oZWFwQXJyYXlbYmVzdF0pXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYSA9IChfYi5zZW50KCkpIDwgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlc3QgPSBqO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgYmVzdF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pOyB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW1vdmVJdCkgcmV0dXJuIFszIC8qYnJlYWsqLywgOF07XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbklkeCA9IEhlYXBBc3luYy5nZXRDaGlsZHJlbkluZGV4T2YoaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZXN0Q2hpbGRJbmRleCA9IGNoaWxkcmVuSWR4WzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaiA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGogPCBjaGlsZHJlbklkeC5sZW5ndGgpKSByZXR1cm4gWzMgLypicmVhayovLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGdldFBvdGVudGlhbFBhcmVudChiZXN0Q2hpbGRJbmRleCwgY2hpbGRyZW5JZHhbal0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgYmVzdENoaWxkSW5kZXggPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDQ7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgICsrajtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBiZXN0Q2hpbGQgPSB0aGlzLmhlYXBBcnJheVtiZXN0Q2hpbGRJbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IHR5cGVvZiBiZXN0Q2hpbGQgIT09ICd1bmRlZmluZWQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFfYSkgcmV0dXJuIFszIC8qYnJlYWsqLywgN107XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmNvbXBhcmUoc2VsZiwgYmVzdENoaWxkKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gKF9iLnNlbnQoKSkgPiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSA3O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb3ZlTm9kZShpLCBiZXN0Q2hpbGRJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA9IGJlc3RDaGlsZEluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZUl0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAxXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTW92ZSBhIG5vZGUgdXAgdGhlIHRyZWUgKHRvIHRoZSByb290KSB0byBmaW5kIGEgcGxhY2Ugd2hlcmUgdGhlIGhlYXAgaXMgc29ydGVkLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gaSBJbmRleCBvZiB0aGUgbm9kZVxuICAgICAqL1xuICAgIEhlYXBBc3luYy5wcm90b3R5cGUuX3NvcnROb2RlVXAgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbW92ZUl0LCBwaSwgX2E7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IkMSh0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVJdCA9IGkgPiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW1vdmVJdCkgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgICAgICAgICBwaSA9IEhlYXBBc3luYy5nZXRQYXJlbnRJbmRleE9mKGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSBwaSA+PSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFfYSkgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmNvbXBhcmUodGhpcy5oZWFwQXJyYXlbcGldLCB0aGlzLmhlYXBBcnJheVtpXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IChfYi5zZW50KCkpID4gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW92ZU5vZGUoaSwgcGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBwaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVJdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgdG9wIChoaWdoZXN0IHZhbHVlKSBOIGVsZW1lbnRzIG9mIHRoZSBoZWFwLCB3aXRob3V0IGNvcm5lciBjYXNlcywgdW5zb3J0ZWRcbiAgICAgKiBJbXBsZW1lbnRhdGlvbjogcHVzaC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gbiAgTnVtYmVyIG9mIGVsZW1lbnRzLlxuICAgICAqIEByZXR1cm4ge0FycmF5fSAgICAgQXJyYXkgb2YgbGVuZ3RoIDw9IE4uXG4gICAgICovXG4gICAgSGVhcEFzeW5jLnByb3RvdHlwZS5fdG9wTl9wdXNoID0gZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHRvcEhlYXAsIGluZGljZXMsIGFyciwgaTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvciQxKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wSGVhcCA9IG5ldyBIZWFwQXN5bmModGhpcy5faW52ZXJ0ZWRDb21wYXJlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcEhlYXAubGltaXQgPSBuO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kaWNlcyA9IFswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyciA9IHRoaXMuaGVhcEFycmF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWluZGljZXMubGVuZ3RoKSByZXR1cm4gWzMgLypicmVhayovLCA3XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBpbmRpY2VzLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShpIDwgYXJyLmxlbmd0aCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDZdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodG9wSGVhcC5sZW5ndGggPCBuKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0b3BIZWFwLnB1c2goYXJyW2ldKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGljZXMucHVzaC5hcHBseShpbmRpY2VzLCBfX3NwcmVhZEFycmF5JDEoW10sIF9fcmVhZCQxKEhlYXBBc3luYy5nZXRDaGlsZHJlbkluZGV4T2YoaSkpLCBmYWxzZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNl07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5jb21wYXJlKGFycltpXSwgdG9wSGVhcC5wZWVrKCkpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoKF9hLnNlbnQoKSkgPCAwKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNl07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0b3BIZWFwLnJlcGxhY2UoYXJyW2ldKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGljZXMucHVzaC5hcHBseShpbmRpY2VzLCBfX3NwcmVhZEFycmF5JDEoW10sIF9fcmVhZCQxKEhlYXBBc3luYy5nZXRDaGlsZHJlbkluZGV4T2YoaSkpLCBmYWxzZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSA2O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6IHJldHVybiBbMyAvKmJyZWFrKi8sIDFdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6IHJldHVybiBbMiAvKnJldHVybiovLCB0b3BIZWFwLnRvQXJyYXkoKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSB0b3AgKGhpZ2hlc3QgdmFsdWUpIE4gZWxlbWVudHMgb2YgdGhlIGhlYXAsIHdpdGhvdXQgY29ybmVyIGNhc2VzLCB1bnNvcnRlZFxuICAgICAqIEltcGxlbWVudGF0aW9uOiBpbml0ICsgcHVzaC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gbiAgTnVtYmVyIG9mIGVsZW1lbnRzLlxuICAgICAqIEByZXR1cm4ge0FycmF5fSAgICAgQXJyYXkgb2YgbGVuZ3RoIDw9IE4uXG4gICAgICovXG4gICAgSGVhcEFzeW5jLnByb3RvdHlwZS5fdG9wTl9maWxsID0gZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGhlYXBBcnJheSwgdG9wSGVhcCwgYnJhbmNoLCBpbmRpY2VzLCBpLCBpO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yJDEodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFwQXJyYXkgPSB0aGlzLmhlYXBBcnJheTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcEhlYXAgPSBuZXcgSGVhcEFzeW5jKHRoaXMuX2ludmVydGVkQ29tcGFyZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3BIZWFwLmxpbWl0ID0gbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcEhlYXAuaGVhcEFycmF5ID0gaGVhcEFycmF5LnNsaWNlKDAsIG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdG9wSGVhcC5pbml0KCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmFuY2ggPSBIZWFwQXN5bmMuZ2V0UGFyZW50SW5kZXhPZihuIC0gMSkgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kaWNlcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gYnJhbmNoOyBpIDwgbjsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kaWNlcy5wdXNoLmFwcGx5KGluZGljZXMsIF9fc3ByZWFkQXJyYXkkMShbXSwgX19yZWFkJDEoSGVhcEFzeW5jLmdldENoaWxkcmVuSW5kZXhPZihpKS5maWx0ZXIoZnVuY3Rpb24gKGwpIHsgcmV0dXJuIGwgPCBoZWFwQXJyYXkubGVuZ3RoOyB9KSksIGZhbHNlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKG4gLSAxKSAlIDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRpY2VzLnB1c2gobik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaW5kaWNlcy5sZW5ndGgpIHJldHVybiBbMyAvKmJyZWFrKi8sIDZdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IGluZGljZXMuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGkgPCBoZWFwQXJyYXkubGVuZ3RoKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmNvbXBhcmUoaGVhcEFycmF5W2ldLCB0b3BIZWFwLnBlZWsoKSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISgoX2Euc2VudCgpKSA8IDApKSByZXR1cm4gWzMgLypicmVhayovLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRvcEhlYXAucmVwbGFjZShoZWFwQXJyYXlbaV0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kaWNlcy5wdXNoLmFwcGx5KGluZGljZXMsIF9fc3ByZWFkQXJyYXkkMShbXSwgX19yZWFkJDEoSGVhcEFzeW5jLmdldENoaWxkcmVuSW5kZXhPZihpKSksIGZhbHNlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDU7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTogcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRvcEhlYXAudG9BcnJheSgpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIHRvcCAoaGlnaGVzdCB2YWx1ZSkgTiBlbGVtZW50cyBvZiB0aGUgaGVhcCwgd2l0aG91dCBjb3JuZXIgY2FzZXMsIHVuc29ydGVkXG4gICAgICogSW1wbGVtZW50YXRpb246IGhlYXAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IG4gIE51bWJlciBvZiBlbGVtZW50cy5cbiAgICAgKiBAcmV0dXJuIHtBcnJheX0gICAgIEFycmF5IG9mIGxlbmd0aCA8PSBOLlxuICAgICAqL1xuICAgIEhlYXBBc3luYy5wcm90b3R5cGUuX3RvcE5faGVhcCA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0b3BIZWFwLCByZXN1bHQsIGksIF9hLCBfYjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvciQxKHRoaXMsIGZ1bmN0aW9uIChfYykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2MubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wSGVhcCA9IHRoaXMuY2xvbmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYy5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGkgPCBuKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgICAgICAgICBfYiA9IChfYSA9IHJlc3VsdCkucHVzaDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRvcEhlYXAucG9wKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5hcHBseShfYSwgWyhfYy5zZW50KCkpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYy5sYWJlbCA9IDM7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgICsraTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDFdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovLCByZXN1bHRdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybiBpbmRleCBvZiB0aGUgdG9wIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gbGlzdFxuICAgICAqL1xuICAgIEhlYXBBc3luYy5wcm90b3R5cGUuX3RvcElkeE9mID0gZnVuY3Rpb24gKGxpc3QpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGlkeCwgdG9wLCBpLCBjb21wO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yJDEodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIC0xXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkeCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3AgPSBsaXN0W2lkeF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoaSA8IGxpc3QubGVuZ3RoKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmNvbXBhcmUobGlzdFtpXSwgdG9wKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXAgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29tcCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZHggPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcCA9IGxpc3RbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDM7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgICsraTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDFdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovLCBpZHhdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgdG9wIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gbGlzdFxuICAgICAqL1xuICAgIEhlYXBBc3luYy5wcm90b3R5cGUuX3RvcE9mID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbGlzdCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgbGlzdFtfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBoZWFwO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yJDEodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFwID0gbmV3IEhlYXBBc3luYyh0aGlzLmNvbXBhcmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgaGVhcC5pbml0KGxpc3QpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGhlYXAucGVlaygpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gSGVhcEFzeW5jO1xufSgpKTtcblxudmFyIF9fZ2VuZXJhdG9yID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG52YXIgX19yZWFkID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19yZWFkKSB8fCBmdW5jdGlvbiAobywgbikge1xuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcbiAgICBpZiAoIW0pIHJldHVybiBvO1xuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xuICAgIHRyeSB7XG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cbiAgICBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxuICAgIH1cbiAgICByZXR1cm4gYXI7XG59O1xudmFyIF9fc3ByZWFkQXJyYXkgPSAodW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX3NwcmVhZEFycmF5KSB8fCBmdW5jdGlvbiAodG8sIGZyb20sIHBhY2spIHtcbiAgICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XG4gICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xuICAgICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xufTtcbnZhciB0b0ludCA9IGZ1bmN0aW9uIChuKSB7IHJldHVybiB+fm47IH07XG4vKipcbiAqIEhlYXBcbiAqIEB0eXBlIHtDbGFzc31cbiAqL1xudmFyIEhlYXAgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogSGVhcCBpbnN0YW5jZSBjb25zdHJ1Y3Rvci5cbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gY29tcGFyZSBPcHRpb25hbCBjb21wYXJpc29uIGZ1bmN0aW9uLCBkZWZhdWx0cyB0byBIZWFwLm1pbkNvbXBhcmF0b3I8bnVtYmVyPlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIEhlYXAoY29tcGFyZSkge1xuICAgICAgICBpZiAoY29tcGFyZSA9PT0gdm9pZCAwKSB7IGNvbXBhcmUgPSBIZWFwLm1pbkNvbXBhcmF0b3I7IH1cbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5jb21wYXJlID0gY29tcGFyZTtcbiAgICAgICAgdGhpcy5oZWFwQXJyYXkgPSBbXTtcbiAgICAgICAgdGhpcy5fbGltaXQgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogQWxpYXMgb2YgYWRkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm9mZmVyID0gdGhpcy5hZGQ7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbGlhcyBvZiBwZWVrXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLnBlZWs7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbGlhcyBvZiBwb3BcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucG9sbCA9IHRoaXMucG9wO1xuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgaW52ZXJzZSB0byB0aGUgY29tcGFyaXNvbiBmdW5jdGlvbi5cbiAgICAgICAgICogQHJldHVybiB7RnVuY3Rpb259XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9pbnZlcnRlZENvbXBhcmUgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIC0xICogX3RoaXMuY29tcGFyZShhLCBiKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLypcbiAgICAgICAgICAgICAgU3RhdGljIG1ldGhvZHNcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBHZXRzIGNoaWxkcmVuIGluZGljZXMgZm9yIGdpdmVuIGluZGV4LlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gaWR4ICAgICBQYXJlbnQgaW5kZXhcbiAgICAgKiBAcmV0dXJuIHtBcnJheShOdW1iZXIpfSAgQXJyYXkgb2YgY2hpbGRyZW4gaW5kaWNlc1xuICAgICAqL1xuICAgIEhlYXAuZ2V0Q2hpbGRyZW5JbmRleE9mID0gZnVuY3Rpb24gKGlkeCkge1xuICAgICAgICByZXR1cm4gW2lkeCAqIDIgKyAxLCBpZHggKiAyICsgMl07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXRzIHBhcmVudCBpbmRleCBmb3IgZ2l2ZW4gaW5kZXguXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBpZHggIENoaWxkcmVuIGluZGV4XG4gICAgICogQHJldHVybiB7TnVtYmVyIHwgdW5kZWZpbmVkfSAgICAgIFBhcmVudCBpbmRleCwgLTEgaWYgaWR4IGlzIDBcbiAgICAgKi9cbiAgICBIZWFwLmdldFBhcmVudEluZGV4T2YgPSBmdW5jdGlvbiAoaWR4KSB7XG4gICAgICAgIGlmIChpZHggPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIHZhciB3aGljaENoaWxkcmVuID0gaWR4ICUgMiA/IDEgOiAyO1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcigoaWR4IC0gd2hpY2hDaGlsZHJlbikgLyAyKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldHMgc2libGluZyBpbmRleCBmb3IgZ2l2ZW4gaW5kZXguXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBpZHggIENoaWxkcmVuIGluZGV4XG4gICAgICogQHJldHVybiB7TnVtYmVyIHwgdW5kZWZpbmVkfSAgICAgIFNpYmxpbmcgaW5kZXgsIC0xIGlmIGlkeCBpcyAwXG4gICAgICovXG4gICAgSGVhcC5nZXRTaWJsaW5nSW5kZXhPZiA9IGZ1bmN0aW9uIChpZHgpIHtcbiAgICAgICAgaWYgKGlkeCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHdoaWNoQ2hpbGRyZW4gPSBpZHggJSAyID8gMSA6IC0xO1xuICAgICAgICByZXR1cm4gaWR4ICsgd2hpY2hDaGlsZHJlbjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE1pbiBoZWFwIGNvbXBhcmlzb24gZnVuY3Rpb24sIGRlZmF1bHQuXG4gICAgICogQHBhcmFtICB7YW55fSBhICAgICBGaXJzdCBlbGVtZW50XG4gICAgICogQHBhcmFtICB7YW55fSBiICAgICBTZWNvbmQgZWxlbWVudFxuICAgICAqIEByZXR1cm4ge051bWJlcn0gICAgMCBpZiB0aGV5J3JlIGVxdWFsLCBwb3NpdGl2ZSBpZiBgYWAgZ29lcyB1cCwgbmVnYXRpdmUgaWYgYGJgIGdvZXMgdXBcbiAgICAgKi9cbiAgICBIZWFwLm1pbkNvbXBhcmF0b3IgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICBpZiAoYSA+IGIpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGEgPCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogTWF4IGhlYXAgY29tcGFyaXNvbiBmdW5jdGlvbi5cbiAgICAgKiBAcGFyYW0gIHthbnl9IGEgICAgIEZpcnN0IGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gIHthbnl9IGIgICAgIFNlY29uZCBlbGVtZW50XG4gICAgICogQHJldHVybiB7TnVtYmVyfSAgICAwIGlmIHRoZXkncmUgZXF1YWwsIHBvc2l0aXZlIGlmIGBhYCBnb2VzIHVwLCBuZWdhdGl2ZSBpZiBgYmAgZ29lcyB1cFxuICAgICAqL1xuICAgIEhlYXAubWF4Q29tcGFyYXRvciA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIGlmIChiID4gYSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYiA8IGEpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNaW4gbnVtYmVyIGhlYXAgY29tcGFyaXNvbiBmdW5jdGlvbiwgZGVmYXVsdC5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGEgICAgIEZpcnN0IGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGIgICAgIFNlY29uZCBlbGVtZW50XG4gICAgICogQHJldHVybiB7TnVtYmVyfSAgICAwIGlmIHRoZXkncmUgZXF1YWwsIHBvc2l0aXZlIGlmIGBhYCBnb2VzIHVwLCBuZWdhdGl2ZSBpZiBgYmAgZ29lcyB1cFxuICAgICAqL1xuICAgIEhlYXAubWluQ29tcGFyYXRvck51bWJlciA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBhIC0gYjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE1heCBudW1iZXIgaGVhcCBjb21wYXJpc29uIGZ1bmN0aW9uLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gYSAgICAgRmlyc3QgZWxlbWVudFxuICAgICAqIEBwYXJhbSAge051bWJlcn0gYiAgICAgU2Vjb25kIGVsZW1lbnRcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9ICAgIDAgaWYgdGhleSdyZSBlcXVhbCwgcG9zaXRpdmUgaWYgYGFgIGdvZXMgdXAsIG5lZ2F0aXZlIGlmIGBiYCBnb2VzIHVwXG4gICAgICovXG4gICAgSGVhcC5tYXhDb21wYXJhdG9yTnVtYmVyID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGIgLSBhO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRGVmYXVsdCBlcXVhbGl0eSBmdW5jdGlvbi5cbiAgICAgKiBAcGFyYW0gIHthbnl9IGEgICAgRmlyc3QgZWxlbWVudFxuICAgICAqIEBwYXJhbSAge2FueX0gYiAgICBTZWNvbmQgZWxlbWVudFxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59ICBUcnVlIGlmIGVxdWFsLCBmYWxzZSBvdGhlcndpc2VcbiAgICAgKi9cbiAgICBIZWFwLmRlZmF1bHRJc0VxdWFsID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEgPT09IGI7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBQcmludHMgYSBoZWFwLlxuICAgICAqIEBwYXJhbSAge0hlYXB9IGhlYXAgSGVhcCB0byBiZSBwcmludGVkXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBIZWFwLnByaW50ID0gZnVuY3Rpb24gKGhlYXApIHtcbiAgICAgICAgZnVuY3Rpb24gZGVlcChpKSB7XG4gICAgICAgICAgICB2YXIgcGkgPSBIZWFwLmdldFBhcmVudEluZGV4T2YoaSk7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLmxvZzIocGkgKyAxKSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcmVwZWF0KHN0ciwgdGltZXMpIHtcbiAgICAgICAgICAgIHZhciBvdXQgPSAnJztcbiAgICAgICAgICAgIGZvciAoOyB0aW1lcyA+IDA7IC0tdGltZXMpIHtcbiAgICAgICAgICAgICAgICBvdXQgKz0gc3RyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG91dDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbm9kZSA9IDA7XG4gICAgICAgIHZhciBsaW5lcyA9IFtdO1xuICAgICAgICB2YXIgbWF4TGluZXMgPSBkZWVwKGhlYXAubGVuZ3RoIC0gMSkgKyAyO1xuICAgICAgICB2YXIgbWF4TGVuZ3RoID0gMDtcbiAgICAgICAgd2hpbGUgKG5vZGUgPCBoZWFwLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGkgPSBkZWVwKG5vZGUpICsgMTtcbiAgICAgICAgICAgIGlmIChub2RlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBUZXh0IHJlcHJlc2VudGF0aW9uXG4gICAgICAgICAgICB2YXIgbm9kZVRleHQgPSBTdHJpbmcoaGVhcC5nZXQobm9kZSkpO1xuICAgICAgICAgICAgaWYgKG5vZGVUZXh0Lmxlbmd0aCA+IG1heExlbmd0aCkge1xuICAgICAgICAgICAgICAgIG1heExlbmd0aCA9IG5vZGVUZXh0Lmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEFkZCB0byBsaW5lXG4gICAgICAgICAgICBsaW5lc1tpXSA9IGxpbmVzW2ldIHx8IFtdO1xuICAgICAgICAgICAgbGluZXNbaV0ucHVzaChub2RlVGV4dCk7XG4gICAgICAgICAgICBub2RlICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpbmVzXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChsaW5lLCBpKSB7XG4gICAgICAgICAgICB2YXIgdGltZXMgPSBNYXRoLnBvdygyLCBtYXhMaW5lcyAtIGkpIC0gMTtcbiAgICAgICAgICAgIHJldHVybiAocmVwZWF0KCcgJywgTWF0aC5mbG9vcih0aW1lcyAvIDIpICogbWF4TGVuZ3RoKSArXG4gICAgICAgICAgICAgICAgbGluZVxuICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjZW50ZXJlZFxuICAgICAgICAgICAgICAgICAgICB2YXIgaGFsZiA9IChtYXhMZW5ndGggLSBlbC5sZW5ndGgpIC8gMjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcGVhdCgnICcsIE1hdGguY2VpbChoYWxmKSkgKyBlbCArIHJlcGVhdCgnICcsIE1hdGguZmxvb3IoaGFsZikpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5qb2luKHJlcGVhdCgnICcsIHRpbWVzICogbWF4TGVuZ3RoKSkpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmpvaW4oJ1xcbicpO1xuICAgIH07XG4gICAgLypcbiAgICAgICAgICAgICAgUHl0aG9uIHN0eWxlXG4gICAgICovXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYW4gYXJyYXkgaW50byBhbiBhcnJheS1oZWFwLCBpbiBwbGFjZVxuICAgICAqIEBwYXJhbSAge0FycmF5fSAgICBhcnIgICAgICBBcnJheSB0byBiZSBtb2RpZmllZFxuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjb21wYXJlICBPcHRpb25hbCBjb21wYXJlIGZ1bmN0aW9uXG4gICAgICogQHJldHVybiB7SGVhcH0gICAgICAgICAgICAgIEZvciBjb252ZW5pZW5jZSwgaXQgcmV0dXJucyBhIEhlYXAgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBIZWFwLmhlYXBpZnkgPSBmdW5jdGlvbiAoYXJyLCBjb21wYXJlKSB7XG4gICAgICAgIHZhciBoZWFwID0gbmV3IEhlYXAoY29tcGFyZSk7XG4gICAgICAgIGhlYXAuaGVhcEFycmF5ID0gYXJyO1xuICAgICAgICBoZWFwLmluaXQoKTtcbiAgICAgICAgcmV0dXJuIGhlYXA7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBFeHRyYWN0IHRoZSBwZWVrIG9mIGFuIGFycmF5LWhlYXBcbiAgICAgKiBAcGFyYW0gIHtBcnJheX0gICAgaGVhcEFyciAgQXJyYXkgdG8gYmUgbW9kaWZpZWQsIHNob3VsZCBiZSBhIGhlYXBcbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gY29tcGFyZSAgT3B0aW9uYWwgY29tcGFyZSBmdW5jdGlvblxuICAgICAqIEByZXR1cm4ge2FueX0gICAgICAgICAgICAgICBSZXR1cm5zIHRoZSBleHRyYWN0ZWQgcGVla1xuICAgICAqL1xuICAgIEhlYXAuaGVhcHBvcCA9IGZ1bmN0aW9uIChoZWFwQXJyLCBjb21wYXJlKSB7XG4gICAgICAgIHZhciBoZWFwID0gbmV3IEhlYXAoY29tcGFyZSk7XG4gICAgICAgIGhlYXAuaGVhcEFycmF5ID0gaGVhcEFycjtcbiAgICAgICAgcmV0dXJuIGhlYXAucG9wKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBQdXNoZXMgYSBpdGVtIGludG8gYW4gYXJyYXktaGVhcFxuICAgICAqIEBwYXJhbSAge0FycmF5fSAgICBoZWFwQXJyICBBcnJheSB0byBiZSBtb2RpZmllZCwgc2hvdWxkIGJlIGEgaGVhcFxuICAgICAqIEBwYXJhbSAge2FueX0gICAgICBpdGVtICAgICBJdGVtIHRvIHB1c2hcbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gY29tcGFyZSAgT3B0aW9uYWwgY29tcGFyZSBmdW5jdGlvblxuICAgICAqL1xuICAgIEhlYXAuaGVhcHB1c2ggPSBmdW5jdGlvbiAoaGVhcEFyciwgaXRlbSwgY29tcGFyZSkge1xuICAgICAgICB2YXIgaGVhcCA9IG5ldyBIZWFwKGNvbXBhcmUpO1xuICAgICAgICBoZWFwLmhlYXBBcnJheSA9IGhlYXBBcnI7XG4gICAgICAgIGhlYXAucHVzaChpdGVtKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFB1c2ggZm9sbG93ZWQgYnkgcG9wLCBmYXN0ZXJcbiAgICAgKiBAcGFyYW0gIHtBcnJheX0gICAgaGVhcEFyciAgQXJyYXkgdG8gYmUgbW9kaWZpZWQsIHNob3VsZCBiZSBhIGhlYXBcbiAgICAgKiBAcGFyYW0gIHthbnl9ICAgICAgaXRlbSAgICAgSXRlbSB0byBwdXNoXG4gICAgICogQHBhcmFtICB7RnVuY3Rpb259IGNvbXBhcmUgIE9wdGlvbmFsIGNvbXBhcmUgZnVuY3Rpb25cbiAgICAgKiBAcmV0dXJuIHthbnl9ICAgICAgICAgICAgICAgUmV0dXJucyB0aGUgZXh0cmFjdGVkIHBlZWtcbiAgICAgKi9cbiAgICBIZWFwLmhlYXBwdXNocG9wID0gZnVuY3Rpb24gKGhlYXBBcnIsIGl0ZW0sIGNvbXBhcmUpIHtcbiAgICAgICAgdmFyIGhlYXAgPSBuZXcgSGVhcChjb21wYXJlKTtcbiAgICAgICAgaGVhcC5oZWFwQXJyYXkgPSBoZWFwQXJyO1xuICAgICAgICByZXR1cm4gaGVhcC5wdXNocG9wKGl0ZW0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVwbGFjZSBwZWVrIHdpdGggaXRlbVxuICAgICAqIEBwYXJhbSAge0FycmF5fSAgICBoZWFwQXJyICBBcnJheSB0byBiZSBtb2RpZmllZCwgc2hvdWxkIGJlIGEgaGVhcFxuICAgICAqIEBwYXJhbSAge2FueX0gICAgICBpdGVtICAgICBJdGVtIGFzIHJlcGxhY2VtZW50XG4gICAgICogQHBhcmFtICB7RnVuY3Rpb259IGNvbXBhcmUgIE9wdGlvbmFsIGNvbXBhcmUgZnVuY3Rpb25cbiAgICAgKiBAcmV0dXJuIHthbnl9ICAgICAgICAgICAgICAgUmV0dXJucyB0aGUgZXh0cmFjdGVkIHBlZWtcbiAgICAgKi9cbiAgICBIZWFwLmhlYXByZXBsYWNlID0gZnVuY3Rpb24gKGhlYXBBcnIsIGl0ZW0sIGNvbXBhcmUpIHtcbiAgICAgICAgdmFyIGhlYXAgPSBuZXcgSGVhcChjb21wYXJlKTtcbiAgICAgICAgaGVhcC5oZWFwQXJyYXkgPSBoZWFwQXJyO1xuICAgICAgICByZXR1cm4gaGVhcC5yZXBsYWNlKGl0ZW0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBgbmAgbW9zdCB2YWx1YWJsZSBlbGVtZW50cyBvZiBhIGhlYXAtbGlrZSBBcnJheVxuICAgICAqIEBwYXJhbSAge0FycmF5fSAgICBoZWFwQXJyICBBcnJheSwgc2hvdWxkIGJlIGFuIGFycmF5LWhlYXBcbiAgICAgKiBAcGFyYW0gIHtudW1iZXJ9ICAgbiAgICAgICAgTWF4IG51bWJlciBvZiBlbGVtZW50c1xuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjb21wYXJlICBPcHRpb25hbCBjb21wYXJlIGZ1bmN0aW9uXG4gICAgICogQHJldHVybiB7YW55fSAgICAgICAgICAgICAgIEVsZW1lbnRzXG4gICAgICovXG4gICAgSGVhcC5oZWFwdG9wID0gZnVuY3Rpb24gKGhlYXBBcnIsIG4sIGNvbXBhcmUpIHtcbiAgICAgICAgaWYgKG4gPT09IHZvaWQgMCkgeyBuID0gMTsgfVxuICAgICAgICB2YXIgaGVhcCA9IG5ldyBIZWFwKGNvbXBhcmUpO1xuICAgICAgICBoZWFwLmhlYXBBcnJheSA9IGhlYXBBcnI7XG4gICAgICAgIHJldHVybiBoZWFwLnRvcChuKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgYG5gIGxlYXN0IHZhbHVhYmxlIGVsZW1lbnRzIG9mIGEgaGVhcC1saWtlIEFycmF5XG4gICAgICogQHBhcmFtICB7QXJyYXl9ICAgIGhlYXBBcnIgIEFycmF5LCBzaG91bGQgYmUgYW4gYXJyYXktaGVhcFxuICAgICAqIEBwYXJhbSAge251bWJlcn0gICBuICAgICAgICBNYXggbnVtYmVyIG9mIGVsZW1lbnRzXG4gICAgICogQHBhcmFtICB7RnVuY3Rpb259IGNvbXBhcmUgIE9wdGlvbmFsIGNvbXBhcmUgZnVuY3Rpb25cbiAgICAgKiBAcmV0dXJuIHthbnl9ICAgICAgICAgICAgICAgRWxlbWVudHNcbiAgICAgKi9cbiAgICBIZWFwLmhlYXBib3R0b20gPSBmdW5jdGlvbiAoaGVhcEFyciwgbiwgY29tcGFyZSkge1xuICAgICAgICBpZiAobiA9PT0gdm9pZCAwKSB7IG4gPSAxOyB9XG4gICAgICAgIHZhciBoZWFwID0gbmV3IEhlYXAoY29tcGFyZSk7XG4gICAgICAgIGhlYXAuaGVhcEFycmF5ID0gaGVhcEFycjtcbiAgICAgICAgcmV0dXJuIGhlYXAuYm90dG9tKG4pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBgbmAgbW9zdCB2YWx1YWJsZSBlbGVtZW50cyBvZiBhbiBpdGVyYWJsZVxuICAgICAqIEBwYXJhbSAge251bWJlcn0gICBuICAgICAgICBNYXggbnVtYmVyIG9mIGVsZW1lbnRzXG4gICAgICogQHBhcmFtICB7SXRlcmFibGV9IEl0ZXJhYmxlIEl0ZXJhYmxlIGxpc3Qgb2YgZWxlbWVudHNcbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gY29tcGFyZSAgT3B0aW9uYWwgY29tcGFyZSBmdW5jdGlvblxuICAgICAqIEByZXR1cm4ge2FueX0gICAgICAgICAgICAgICBFbGVtZW50c1xuICAgICAqL1xuICAgIEhlYXAubmxhcmdlc3QgPSBmdW5jdGlvbiAobiwgaXRlcmFibGUsIGNvbXBhcmUpIHtcbiAgICAgICAgdmFyIGhlYXAgPSBuZXcgSGVhcChjb21wYXJlKTtcbiAgICAgICAgaGVhcC5oZWFwQXJyYXkgPSBfX3NwcmVhZEFycmF5KFtdLCBfX3JlYWQoaXRlcmFibGUpLCBmYWxzZSk7XG4gICAgICAgIGhlYXAuaW5pdCgpO1xuICAgICAgICByZXR1cm4gaGVhcC50b3Aobik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIGBuYCBsZWFzdCB2YWx1YWJsZSBlbGVtZW50cyBvZiBhbiBpdGVyYWJsZVxuICAgICAqIEBwYXJhbSAge251bWJlcn0gICBuICAgICAgICBNYXggbnVtYmVyIG9mIGVsZW1lbnRzXG4gICAgICogQHBhcmFtICB7SXRlcmFibGV9IEl0ZXJhYmxlIEl0ZXJhYmxlIGxpc3Qgb2YgZWxlbWVudHNcbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gY29tcGFyZSAgT3B0aW9uYWwgY29tcGFyZSBmdW5jdGlvblxuICAgICAqIEByZXR1cm4ge2FueX0gICAgICAgICAgICAgICBFbGVtZW50c1xuICAgICAqL1xuICAgIEhlYXAubnNtYWxsZXN0ID0gZnVuY3Rpb24gKG4sIGl0ZXJhYmxlLCBjb21wYXJlKSB7XG4gICAgICAgIHZhciBoZWFwID0gbmV3IEhlYXAoY29tcGFyZSk7XG4gICAgICAgIGhlYXAuaGVhcEFycmF5ID0gX19zcHJlYWRBcnJheShbXSwgX19yZWFkKGl0ZXJhYmxlKSwgZmFsc2UpO1xuICAgICAgICBoZWFwLmluaXQoKTtcbiAgICAgICAgcmV0dXJuIGhlYXAuYm90dG9tKG4pO1xuICAgIH07XG4gICAgLypcbiAgICAgICAgICAgICAgSW5zdGFuY2UgbWV0aG9kc1xuICAgICAqL1xuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gZWxlbWVudCB0byB0aGUgaGVhcC4gQWxpYXNlczogYG9mZmVyYC5cbiAgICAgKiBTYW1lIGFzOiBwdXNoKGVsZW1lbnQpXG4gICAgICogQHBhcmFtIHthbnl9IGVsZW1lbnQgRWxlbWVudCB0byBiZSBhZGRlZFxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWVcbiAgICAgKi9cbiAgICBIZWFwLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICB0aGlzLl9zb3J0Tm9kZVVwKHRoaXMuaGVhcEFycmF5LnB1c2goZWxlbWVudCkgLSAxKTtcbiAgICAgICAgdGhpcy5fYXBwbHlMaW1pdCgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gYXJyYXkgb2YgZWxlbWVudHMgdG8gdGhlIGhlYXAuXG4gICAgICogU2ltaWxhciBhczogcHVzaChlbGVtZW50LCBlbGVtZW50LCAuLi4pLlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGVsZW1lbnRzIEVsZW1lbnRzIHRvIGJlIGFkZGVkXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZVxuICAgICAqL1xuICAgIEhlYXAucHJvdG90eXBlLmFkZEFsbCA9IGZ1bmN0aW9uIChlbGVtZW50cykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBpID0gdGhpcy5sZW5ndGg7XG4gICAgICAgIChfYSA9IHRoaXMuaGVhcEFycmF5KS5wdXNoLmFwcGx5KF9hLCBfX3NwcmVhZEFycmF5KFtdLCBfX3JlYWQoZWxlbWVudHMpLCBmYWxzZSkpO1xuICAgICAgICBmb3IgKHZhciBsID0gdGhpcy5sZW5ndGg7IGkgPCBsOyArK2kpIHtcbiAgICAgICAgICAgIHRoaXMuX3NvcnROb2RlVXAoaSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fYXBwbHlMaW1pdCgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgYm90dG9tIChsb3dlc3QgdmFsdWUpIE4gZWxlbWVudHMgb2YgdGhlIGhlYXAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IG4gIE51bWJlciBvZiBlbGVtZW50cy5cbiAgICAgKiBAcmV0dXJuIHtBcnJheX0gICAgIEFycmF5IG9mIGxlbmd0aCA8PSBOLlxuICAgICAqL1xuICAgIEhlYXAucHJvdG90eXBlLmJvdHRvbSA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIGlmIChuID09PSB2b2lkIDApIHsgbiA9IDE7IH1cbiAgICAgICAgaWYgKHRoaXMuaGVhcEFycmF5Lmxlbmd0aCA9PT0gMCB8fCBuIDw9IDApIHtcbiAgICAgICAgICAgIC8vIE5vdGhpbmcgdG8gZG9cbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmhlYXBBcnJheS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIC8vIEp1c3QgdGhlIHBlZWtcbiAgICAgICAgICAgIHJldHVybiBbdGhpcy5oZWFwQXJyYXlbMF1dO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG4gPj0gdGhpcy5oZWFwQXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBUaGUgd2hvbGUgaGVhcFxuICAgICAgICAgICAgcmV0dXJuIF9fc3ByZWFkQXJyYXkoW10sIF9fcmVhZCh0aGlzLmhlYXBBcnJheSksIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFNvbWUgZWxlbWVudHNcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ib3R0b21OX3B1c2gofn5uKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIGhlYXAgaXMgc29ydGVkLCB1c2VmdWwgZm9yIHRlc3RpbmcgcHVycG9zZXMuXG4gICAgICogQHJldHVybiB7VW5kZWZpbmVkIHwgRWxlbWVudH0gIFJldHVybnMgYW4gZWxlbWVudCBpZiBzb21ldGhpbmcgd3JvbmcgaXMgZm91bmQsIG90aGVyd2lzZSBpdCdzIHVuZGVmaW5lZFxuICAgICAqL1xuICAgIEhlYXAucHJvdG90eXBlLmNoZWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gdGhpcy5oZWFwQXJyYXkuZmluZChmdW5jdGlvbiAoZWwsIGopIHsgcmV0dXJuICEhX3RoaXMuZ2V0Q2hpbGRyZW5PZihqKS5maW5kKGZ1bmN0aW9uIChjaCkgeyByZXR1cm4gX3RoaXMuY29tcGFyZShlbCwgY2gpID4gMDsgfSk7IH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGFsbCBvZiB0aGUgZWxlbWVudHMgZnJvbSB0aGlzIGhlYXAuXG4gICAgICovXG4gICAgSGVhcC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaGVhcEFycmF5ID0gW107XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDbG9uZSB0aGlzIGhlYXBcbiAgICAgKiBAcmV0dXJuIHtIZWFwfVxuICAgICAqL1xuICAgIEhlYXAucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY2xvbmVkID0gbmV3IEhlYXAodGhpcy5jb21wYXJhdG9yKCkpO1xuICAgICAgICBjbG9uZWQuaGVhcEFycmF5ID0gdGhpcy50b0FycmF5KCk7XG4gICAgICAgIGNsb25lZC5fbGltaXQgPSB0aGlzLl9saW1pdDtcbiAgICAgICAgcmV0dXJuIGNsb25lZDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNvbXBhcmlzb24gZnVuY3Rpb24uXG4gICAgICogQHJldHVybiB7RnVuY3Rpb259XG4gICAgICovXG4gICAgSGVhcC5wcm90b3R5cGUuY29tcGFyYXRvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGlzIHF1ZXVlIGNvbnRhaW5zIHRoZSBzcGVjaWZpZWQgZWxlbWVudC5cbiAgICAgKiBAcGFyYW0gIHthbnl9ICAgICAgbyAgIEVsZW1lbnQgdG8gYmUgZm91bmRcbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm4gIE9wdGlvbmFsIGNvbXBhcmlzb24gZnVuY3Rpb24sIHJlY2VpdmVzIChlbGVtZW50LCBuZWVkbGUpXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBIZWFwLnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uIChvLCBmbikge1xuICAgICAgICBpZiAoZm4gPT09IHZvaWQgMCkgeyBmbiA9IEhlYXAuZGVmYXVsdElzRXF1YWw7IH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhcEFycmF5LmZpbmRJbmRleChmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIGZuKGVsLCBvKTsgfSkgPj0gMDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpc2UgYSBoZWFwLCBzb3J0aW5nIG5vZGVzXG4gICAgICogQHBhcmFtICB7QXJyYXl9IGFycmF5IE9wdGlvbmFsIGluaXRpYWwgc3RhdGUgYXJyYXlcbiAgICAgKi9cbiAgICBIZWFwLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKGFycmF5KSB7XG4gICAgICAgIGlmIChhcnJheSkge1xuICAgICAgICAgICAgdGhpcy5oZWFwQXJyYXkgPSBfX3NwcmVhZEFycmF5KFtdLCBfX3JlYWQoYXJyYXkpLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IE1hdGguZmxvb3IodGhpcy5oZWFwQXJyYXkubGVuZ3RoKTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgICAgIHRoaXMuX3NvcnROb2RlRG93bihpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9hcHBseUxpbWl0KCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUZXN0IGlmIHRoZSBoZWFwIGhhcyBubyBlbGVtZW50cy5cbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSBUcnVlIGlmIG5vIGVsZW1lbnRzIG9uIHRoZSBoZWFwXG4gICAgICovXG4gICAgSGVhcC5wcm90b3R5cGUuaXNFbXB0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoID09PSAwO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBsZWFmcyBvZiB0aGUgdHJlZSAobm8gY2hpbGRyZW4gbm9kZXMpXG4gICAgICovXG4gICAgSGVhcC5wcm90b3R5cGUubGVhZnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmhlYXBBcnJheS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcGkgPSBIZWFwLmdldFBhcmVudEluZGV4T2YodGhpcy5oZWFwQXJyYXkubGVuZ3RoIC0gMSk7XG4gICAgICAgIHJldHVybiB0aGlzLmhlYXBBcnJheS5zbGljZShwaSArIDEpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEhlYXAucHJvdG90eXBlLCBcImxlbmd0aFwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMZW5ndGggb2YgdGhlIGhlYXAuXG4gICAgICAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGVhcEFycmF5Lmxlbmd0aDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShIZWFwLnByb3RvdHlwZSwgXCJsaW1pdFwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgbGVuZ3RoIGxpbWl0IG9mIHRoZSBoZWFwLlxuICAgICAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9saW1pdDtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCBsZW5ndGggbGltaXQgb2YgdGhlIGhlYXAuXG4gICAgICAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9sKSB7XG4gICAgICAgICAgICB0aGlzLl9saW1pdCA9IH5+X2w7XG4gICAgICAgICAgICB0aGlzLl9hcHBseUxpbWl0KCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBUb3Agbm9kZS4gQWxpYXNlczogYGVsZW1lbnRgLlxuICAgICAqIFNhbWUgYXM6IGB0b3AoMSlbMF1gXG4gICAgICogQHJldHVybiB7YW55fSBUb3Agbm9kZVxuICAgICAqL1xuICAgIEhlYXAucHJvdG90eXBlLnBlZWsgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlYXBBcnJheVswXTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEV4dHJhY3QgdGhlIHRvcCBub2RlIChyb290KS4gQWxpYXNlczogYHBvbGxgLlxuICAgICAqIEByZXR1cm4ge2FueX0gRXh0cmFjdGVkIHRvcCBub2RlLCB1bmRlZmluZWQgaWYgZW1wdHlcbiAgICAgKi9cbiAgICBIZWFwLnByb3RvdHlwZS5wb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBsYXN0ID0gdGhpcy5oZWFwQXJyYXkucG9wKCk7XG4gICAgICAgIGlmICh0aGlzLmxlbmd0aCA+IDAgJiYgbGFzdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXBsYWNlKGxhc3QpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsYXN0O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUHVzaGVzIGVsZW1lbnQocykgdG8gdGhlIGhlYXAuXG4gICAgICogQHBhcmFtICB7Li4uYW55fSBlbGVtZW50cyBFbGVtZW50cyB0byBpbnNlcnRcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSBUcnVlIGlmIGVsZW1lbnRzIGFyZSBwcmVzZW50XG4gICAgICovXG4gICAgSGVhcC5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVsZW1lbnRzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBlbGVtZW50c1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZWxlbWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZGQoZWxlbWVudHNbMF0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkQWxsKGVsZW1lbnRzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogU2FtZSBhcyBwdXNoICYgcG9wIGluIHNlcXVlbmNlLCBidXQgZmFzdGVyXG4gICAgICogQHBhcmFtICB7YW55fSBlbGVtZW50IEVsZW1lbnQgdG8gaW5zZXJ0XG4gICAgICogQHJldHVybiB7YW55fSAgRXh0cmFjdGVkIHRvcCBub2RlXG4gICAgICovXG4gICAgSGVhcC5wcm90b3R5cGUucHVzaHBvcCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKHRoaXMuY29tcGFyZSh0aGlzLmhlYXBBcnJheVswXSwgZWxlbWVudCkgPCAwKSB7XG4gICAgICAgICAgICBfYSA9IF9fcmVhZChbdGhpcy5oZWFwQXJyYXlbMF0sIGVsZW1lbnRdLCAyKSwgZWxlbWVudCA9IF9hWzBdLCB0aGlzLmhlYXBBcnJheVswXSA9IF9hWzFdO1xuICAgICAgICAgICAgdGhpcy5fc29ydE5vZGVEb3duKDApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGFuIGVsZW1lbnQgZnJvbSB0aGUgaGVhcC5cbiAgICAgKiBAcGFyYW0gIHthbnl9ICAgbyAgICAgIEVsZW1lbnQgdG8gYmUgZm91bmRcbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm4gIE9wdGlvbmFsIGZ1bmN0aW9uIHRvIGNvbXBhcmVcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSAgICAgIFRydWUgaWYgdGhlIGhlYXAgd2FzIG1vZGlmaWVkXG4gICAgICovXG4gICAgSGVhcC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKG8sIGZuKSB7XG4gICAgICAgIGlmIChmbiA9PT0gdm9pZCAwKSB7IGZuID0gSGVhcC5kZWZhdWx0SXNFcXVhbDsgfVxuICAgICAgICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAobyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3AoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBpZHggPSB0aGlzLmhlYXBBcnJheS5maW5kSW5kZXgoZnVuY3Rpb24gKGVsKSB7IHJldHVybiBmbihlbCwgbyk7IH0pO1xuICAgICAgICAgICAgICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaWR4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlkeCA9PT0gdGhpcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYXBBcnJheS5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhcEFycmF5LnNwbGljZShpZHgsIDEsIHRoaXMuaGVhcEFycmF5LnBvcCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3NvcnROb2RlVXAoaWR4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3NvcnROb2RlRG93bihpZHgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBQb3AgdGhlIGN1cnJlbnQgcGVlayB2YWx1ZSwgYW5kIGFkZCB0aGUgbmV3IGl0ZW0uXG4gICAgICogQHBhcmFtICB7YW55fSBlbGVtZW50ICBFbGVtZW50IHRvIHJlcGxhY2UgcGVla1xuICAgICAqIEByZXR1cm4ge2FueX0gICAgICAgICBPbGQgcGVla1xuICAgICAqL1xuICAgIEhlYXAucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICB2YXIgcGVlayA9IHRoaXMuaGVhcEFycmF5WzBdO1xuICAgICAgICB0aGlzLmhlYXBBcnJheVswXSA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuX3NvcnROb2RlRG93bigwKTtcbiAgICAgICAgcmV0dXJuIHBlZWs7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTaXplIG9mIHRoZSBoZWFwXG4gICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICAqL1xuICAgIEhlYXAucHJvdG90eXBlLnNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxlbmd0aDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgdG9wIChoaWdoZXN0IHZhbHVlKSBOIGVsZW1lbnRzIG9mIHRoZSBoZWFwLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBuICBOdW1iZXIgb2YgZWxlbWVudHMuXG4gICAgICogQHJldHVybiB7QXJyYXl9ICAgIEFycmF5IG9mIGxlbmd0aCA8PSBOLlxuICAgICAqL1xuICAgIEhlYXAucHJvdG90eXBlLnRvcCA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIGlmIChuID09PSB2b2lkIDApIHsgbiA9IDE7IH1cbiAgICAgICAgaWYgKHRoaXMuaGVhcEFycmF5Lmxlbmd0aCA9PT0gMCB8fCBuIDw9IDApIHtcbiAgICAgICAgICAgIC8vIE5vdGhpbmcgdG8gZG9cbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmhlYXBBcnJheS5sZW5ndGggPT09IDEgfHwgbiA9PT0gMSkge1xuICAgICAgICAgICAgLy8gSnVzdCB0aGUgcGVla1xuICAgICAgICAgICAgcmV0dXJuIFt0aGlzLmhlYXBBcnJheVswXV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobiA+PSB0aGlzLmhlYXBBcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIFRoZSB3aG9sZSBwZWVrXG4gICAgICAgICAgICByZXR1cm4gX19zcHJlYWRBcnJheShbXSwgX19yZWFkKHRoaXMuaGVhcEFycmF5KSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gU29tZSBlbGVtZW50c1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RvcE5fcHVzaCh+fm4pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDbG9uZSB0aGUgaGVhcCdzIGludGVybmFsIGFycmF5XG4gICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICovXG4gICAgSGVhcC5wcm90b3R5cGUudG9BcnJheSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fc3ByZWFkQXJyYXkoW10sIF9fcmVhZCh0aGlzLmhlYXBBcnJheSksIGZhbHNlKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFN0cmluZyBvdXRwdXQsIGNhbGwgdG8gQXJyYXkucHJvdG90eXBlLnRvU3RyaW5nKClcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAgICovXG4gICAgSGVhcC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlYXBBcnJheS50b1N0cmluZygpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBlbGVtZW50IGF0IHRoZSBnaXZlbiBpbmRleC5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGkgSW5kZXggdG8gZ2V0XG4gICAgICogQHJldHVybiB7YW55fSAgICAgICBFbGVtZW50IGF0IHRoYXQgaW5kZXhcbiAgICAgKi9cbiAgICBIZWFwLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWFwQXJyYXlbaV07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGVsZW1lbnRzIG9mIHRoZXNlIG5vZGUncyBjaGlsZHJlblxuICAgICAqIEBwYXJhbSAge051bWJlcn0gaWR4IE5vZGUgaW5kZXhcbiAgICAgKiBAcmV0dXJuIHtBcnJheShhbnkpfSAgQ2hpbGRyZW4gZWxlbWVudHNcbiAgICAgKi9cbiAgICBIZWFwLnByb3RvdHlwZS5nZXRDaGlsZHJlbk9mID0gZnVuY3Rpb24gKGlkeCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gSGVhcC5nZXRDaGlsZHJlbkluZGV4T2YoaWR4KVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoaSkgeyByZXR1cm4gX3RoaXMuaGVhcEFycmF5W2ldOyB9KVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoZSkgeyByZXR1cm4gZSAhPT0gdW5kZWZpbmVkOyB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZWxlbWVudCBvZiB0aGlzIG5vZGUncyBwYXJlbnRcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGlkeCBOb2RlIGluZGV4XG4gICAgICogQHJldHVybiB7YW55fSAgICAgUGFyZW50IGVsZW1lbnRcbiAgICAgKi9cbiAgICBIZWFwLnByb3RvdHlwZS5nZXRQYXJlbnRPZiA9IGZ1bmN0aW9uIChpZHgpIHtcbiAgICAgICAgdmFyIHBpID0gSGVhcC5nZXRQYXJlbnRJbmRleE9mKGlkeCk7XG4gICAgICAgIHJldHVybiB0aGlzLmhlYXBBcnJheVtwaV07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBJdGVyYXRvciBpbnRlcmZhY2VcbiAgICAgKi9cbiAgICBIZWFwLnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMubGVuZ3RoKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb3AoKV07XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDBdO1xuICAgICAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gaXRlcmF0b3IuIFRvIGNvbXBseSB3aXRoIEphdmEgaW50ZXJmYWNlLlxuICAgICAqL1xuICAgIEhlYXAucHJvdG90eXBlLml0ZXJhdG9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b0FycmF5KCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBMaW1pdCBoZWFwIHNpemUgaWYgbmVlZGVkXG4gICAgICovXG4gICAgSGVhcC5wcm90b3R5cGUuX2FwcGx5TGltaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLl9saW1pdCAmJiB0aGlzLl9saW1pdCA8IHRoaXMuaGVhcEFycmF5Lmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIHJtID0gdGhpcy5oZWFwQXJyYXkubGVuZ3RoIC0gdGhpcy5fbGltaXQ7XG4gICAgICAgICAgICAvLyBJdCdzIG11Y2ggZmFzdGVyIHRoYW4gc3BsaWNlXG4gICAgICAgICAgICB3aGlsZSAocm0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhlYXBBcnJheS5wb3AoKTtcbiAgICAgICAgICAgICAgICAtLXJtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIGJvdHRvbSAobG93ZXN0IHZhbHVlKSBOIGVsZW1lbnRzIG9mIHRoZSBoZWFwLCB3aXRob3V0IGNvcm5lciBjYXNlcywgdW5zb3J0ZWRcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gbiAgTnVtYmVyIG9mIGVsZW1lbnRzLlxuICAgICAqIEByZXR1cm4ge0FycmF5fSAgICAgQXJyYXkgb2YgbGVuZ3RoIDw9IE4uXG4gICAgICovXG4gICAgSGVhcC5wcm90b3R5cGUuX2JvdHRvbU5fcHVzaCA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIC8vIFVzZSBhbiBpbnZlcnRlZCBoZWFwXG4gICAgICAgIHZhciBib3R0b21IZWFwID0gbmV3IEhlYXAodGhpcy5jb21wYXJlKTtcbiAgICAgICAgYm90dG9tSGVhcC5saW1pdCA9IG47XG4gICAgICAgIGJvdHRvbUhlYXAuaGVhcEFycmF5ID0gdGhpcy5oZWFwQXJyYXkuc2xpY2UoLW4pO1xuICAgICAgICBib3R0b21IZWFwLmluaXQoKTtcbiAgICAgICAgdmFyIHN0YXJ0QXQgPSB0aGlzLmhlYXBBcnJheS5sZW5ndGggLSAxIC0gbjtcbiAgICAgICAgdmFyIHBhcmVudFN0YXJ0QXQgPSBIZWFwLmdldFBhcmVudEluZGV4T2Yoc3RhcnRBdCk7XG4gICAgICAgIHZhciBpbmRpY2VzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSBzdGFydEF0OyBpID4gcGFyZW50U3RhcnRBdDsgLS1pKSB7XG4gICAgICAgICAgICBpbmRpY2VzLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGFyciA9IHRoaXMuaGVhcEFycmF5O1xuICAgICAgICB3aGlsZSAoaW5kaWNlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBpID0gaW5kaWNlcy5zaGlmdCgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY29tcGFyZShhcnJbaV0sIGJvdHRvbUhlYXAucGVlaygpKSA+IDApIHtcbiAgICAgICAgICAgICAgICBib3R0b21IZWFwLnJlcGxhY2UoYXJyW2ldKTtcbiAgICAgICAgICAgICAgICBpZiAoaSAlIDIpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kaWNlcy5wdXNoKEhlYXAuZ2V0UGFyZW50SW5kZXhPZihpKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib3R0b21IZWFwLnRvQXJyYXkoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE1vdmUgYSBub2RlIHRvIGEgbmV3IGluZGV4LCBzd2l0Y2hpbmcgcGxhY2VzXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBqIEZpcnN0IG5vZGUgaW5kZXhcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGsgQW5vdGhlciBub2RlIGluZGV4XG4gICAgICovXG4gICAgSGVhcC5wcm90b3R5cGUuX21vdmVOb2RlID0gZnVuY3Rpb24gKGosIGspIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBfYSA9IF9fcmVhZChbdGhpcy5oZWFwQXJyYXlba10sIHRoaXMuaGVhcEFycmF5W2pdXSwgMiksIHRoaXMuaGVhcEFycmF5W2pdID0gX2FbMF0sIHRoaXMuaGVhcEFycmF5W2tdID0gX2FbMV07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNb3ZlIGEgbm9kZSBkb3duIHRoZSB0cmVlICh0byB0aGUgbGVhdmVzKSB0byBmaW5kIGEgcGxhY2Ugd2hlcmUgdGhlIGhlYXAgaXMgc29ydGVkLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gaSBJbmRleCBvZiB0aGUgbm9kZVxuICAgICAqL1xuICAgIEhlYXAucHJvdG90eXBlLl9zb3J0Tm9kZURvd24gPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgbW92ZUl0ID0gaSA8IHRoaXMuaGVhcEFycmF5Lmxlbmd0aCAtIDE7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcy5oZWFwQXJyYXlbaV07XG4gICAgICAgIHZhciBnZXRQb3RlbnRpYWxQYXJlbnQgPSBmdW5jdGlvbiAoYmVzdCwgaikge1xuICAgICAgICAgICAgaWYgKF90aGlzLmhlYXBBcnJheS5sZW5ndGggPiBqICYmIF90aGlzLmNvbXBhcmUoX3RoaXMuaGVhcEFycmF5W2pdLCBfdGhpcy5oZWFwQXJyYXlbYmVzdF0pIDwgMCkge1xuICAgICAgICAgICAgICAgIGJlc3QgPSBqO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGJlc3Q7XG4gICAgICAgIH07XG4gICAgICAgIHdoaWxlIChtb3ZlSXQpIHtcbiAgICAgICAgICAgIHZhciBjaGlsZHJlbklkeCA9IEhlYXAuZ2V0Q2hpbGRyZW5JbmRleE9mKGkpO1xuICAgICAgICAgICAgdmFyIGJlc3RDaGlsZEluZGV4ID0gY2hpbGRyZW5JZHgucmVkdWNlKGdldFBvdGVudGlhbFBhcmVudCwgY2hpbGRyZW5JZHhbMF0pO1xuICAgICAgICAgICAgdmFyIGJlc3RDaGlsZCA9IHRoaXMuaGVhcEFycmF5W2Jlc3RDaGlsZEluZGV4XTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYmVzdENoaWxkICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLmNvbXBhcmUoc2VsZiwgYmVzdENoaWxkKSA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tb3ZlTm9kZShpLCBiZXN0Q2hpbGRJbmRleCk7XG4gICAgICAgICAgICAgICAgaSA9IGJlc3RDaGlsZEluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbW92ZUl0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE1vdmUgYSBub2RlIHVwIHRoZSB0cmVlICh0byB0aGUgcm9vdCkgdG8gZmluZCBhIHBsYWNlIHdoZXJlIHRoZSBoZWFwIGlzIHNvcnRlZC5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGkgSW5kZXggb2YgdGhlIG5vZGVcbiAgICAgKi9cbiAgICBIZWFwLnByb3RvdHlwZS5fc29ydE5vZGVVcCA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHZhciBtb3ZlSXQgPSBpID4gMDtcbiAgICAgICAgd2hpbGUgKG1vdmVJdCkge1xuICAgICAgICAgICAgdmFyIHBpID0gSGVhcC5nZXRQYXJlbnRJbmRleE9mKGkpO1xuICAgICAgICAgICAgaWYgKHBpID49IDAgJiYgdGhpcy5jb21wYXJlKHRoaXMuaGVhcEFycmF5W3BpXSwgdGhpcy5oZWFwQXJyYXlbaV0pID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX21vdmVOb2RlKGksIHBpKTtcbiAgICAgICAgICAgICAgICBpID0gcGk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBtb3ZlSXQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSB0b3AgKGhpZ2hlc3QgdmFsdWUpIE4gZWxlbWVudHMgb2YgdGhlIGhlYXAsIHdpdGhvdXQgY29ybmVyIGNhc2VzLCB1bnNvcnRlZFxuICAgICAqIEltcGxlbWVudGF0aW9uOiBwdXNoLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBuICBOdW1iZXIgb2YgZWxlbWVudHMuXG4gICAgICogQHJldHVybiB7QXJyYXl9ICAgICBBcnJheSBvZiBsZW5ndGggPD0gTi5cbiAgICAgKi9cbiAgICBIZWFwLnByb3RvdHlwZS5fdG9wTl9wdXNoID0gZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgLy8gVXNlIGFuIGludmVydGVkIGhlYXBcbiAgICAgICAgdmFyIHRvcEhlYXAgPSBuZXcgSGVhcCh0aGlzLl9pbnZlcnRlZENvbXBhcmUpO1xuICAgICAgICB0b3BIZWFwLmxpbWl0ID0gbjtcbiAgICAgICAgdmFyIGluZGljZXMgPSBbMF07XG4gICAgICAgIHZhciBhcnIgPSB0aGlzLmhlYXBBcnJheTtcbiAgICAgICAgd2hpbGUgKGluZGljZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgaSA9IGluZGljZXMuc2hpZnQoKTtcbiAgICAgICAgICAgIGlmIChpIDwgYXJyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmICh0b3BIZWFwLmxlbmd0aCA8IG4pIHtcbiAgICAgICAgICAgICAgICAgICAgdG9wSGVhcC5wdXNoKGFycltpXSk7XG4gICAgICAgICAgICAgICAgICAgIGluZGljZXMucHVzaC5hcHBseShpbmRpY2VzLCBfX3NwcmVhZEFycmF5KFtdLCBfX3JlYWQoSGVhcC5nZXRDaGlsZHJlbkluZGV4T2YoaSkpLCBmYWxzZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmNvbXBhcmUoYXJyW2ldLCB0b3BIZWFwLnBlZWsoKSkgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvcEhlYXAucmVwbGFjZShhcnJbaV0pO1xuICAgICAgICAgICAgICAgICAgICBpbmRpY2VzLnB1c2guYXBwbHkoaW5kaWNlcywgX19zcHJlYWRBcnJheShbXSwgX19yZWFkKEhlYXAuZ2V0Q2hpbGRyZW5JbmRleE9mKGkpKSwgZmFsc2UpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvcEhlYXAudG9BcnJheSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSB0b3AgKGhpZ2hlc3QgdmFsdWUpIE4gZWxlbWVudHMgb2YgdGhlIGhlYXAsIHdpdGhvdXQgY29ybmVyIGNhc2VzLCB1bnNvcnRlZFxuICAgICAqIEltcGxlbWVudGF0aW9uOiBpbml0ICsgcHVzaC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gbiAgTnVtYmVyIG9mIGVsZW1lbnRzLlxuICAgICAqIEByZXR1cm4ge0FycmF5fSAgICAgQXJyYXkgb2YgbGVuZ3RoIDw9IE4uXG4gICAgICovXG4gICAgSGVhcC5wcm90b3R5cGUuX3RvcE5fZmlsbCA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIC8vIFVzZSBhbiBpbnZlcnRlZCBoZWFwXG4gICAgICAgIHZhciBoZWFwQXJyYXkgPSB0aGlzLmhlYXBBcnJheTtcbiAgICAgICAgdmFyIHRvcEhlYXAgPSBuZXcgSGVhcCh0aGlzLl9pbnZlcnRlZENvbXBhcmUpO1xuICAgICAgICB0b3BIZWFwLmxpbWl0ID0gbjtcbiAgICAgICAgdG9wSGVhcC5oZWFwQXJyYXkgPSBoZWFwQXJyYXkuc2xpY2UoMCwgbik7XG4gICAgICAgIHRvcEhlYXAuaW5pdCgpO1xuICAgICAgICB2YXIgYnJhbmNoID0gSGVhcC5nZXRQYXJlbnRJbmRleE9mKG4gLSAxKSArIDE7XG4gICAgICAgIHZhciBpbmRpY2VzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSBicmFuY2g7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgICAgIGluZGljZXMucHVzaC5hcHBseShpbmRpY2VzLCBfX3NwcmVhZEFycmF5KFtdLCBfX3JlYWQoSGVhcC5nZXRDaGlsZHJlbkluZGV4T2YoaSkuZmlsdGVyKGZ1bmN0aW9uIChsKSB7IHJldHVybiBsIDwgaGVhcEFycmF5Lmxlbmd0aDsgfSkpLCBmYWxzZSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgobiAtIDEpICUgMikge1xuICAgICAgICAgICAgaW5kaWNlcy5wdXNoKG4pO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChpbmRpY2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGkgPSBpbmRpY2VzLnNoaWZ0KCk7XG4gICAgICAgICAgICBpZiAoaSA8IGhlYXBBcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb21wYXJlKGhlYXBBcnJheVtpXSwgdG9wSGVhcC5wZWVrKCkpIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB0b3BIZWFwLnJlcGxhY2UoaGVhcEFycmF5W2ldKTtcbiAgICAgICAgICAgICAgICAgICAgaW5kaWNlcy5wdXNoLmFwcGx5KGluZGljZXMsIF9fc3ByZWFkQXJyYXkoW10sIF9fcmVhZChIZWFwLmdldENoaWxkcmVuSW5kZXhPZihpKSksIGZhbHNlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b3BIZWFwLnRvQXJyYXkoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgdG9wIChoaWdoZXN0IHZhbHVlKSBOIGVsZW1lbnRzIG9mIHRoZSBoZWFwLCB3aXRob3V0IGNvcm5lciBjYXNlcywgdW5zb3J0ZWRcbiAgICAgKiBJbXBsZW1lbnRhdGlvbjogaGVhcC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gbiAgTnVtYmVyIG9mIGVsZW1lbnRzLlxuICAgICAqIEByZXR1cm4ge0FycmF5fSAgICAgQXJyYXkgb2YgbGVuZ3RoIDw9IE4uXG4gICAgICovXG4gICAgSGVhcC5wcm90b3R5cGUuX3RvcE5faGVhcCA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIHZhciB0b3BIZWFwID0gdGhpcy5jbG9uZSgpO1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh0b3BIZWFwLnBvcCgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJuIGluZGV4IG9mIHRoZSB0b3AgZWxlbWVudFxuICAgICAqIEBwYXJhbSBsaXN0XG4gICAgICovXG4gICAgSGVhcC5wcm90b3R5cGUuX3RvcElkeE9mID0gZnVuY3Rpb24gKGxpc3QpIHtcbiAgICAgICAgaWYgKCFsaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpZHggPSAwO1xuICAgICAgICB2YXIgdG9wID0gbGlzdFtpZHhdO1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHZhciBjb21wID0gdGhpcy5jb21wYXJlKGxpc3RbaV0sIHRvcCk7XG4gICAgICAgICAgICBpZiAoY29tcCA8IDApIHtcbiAgICAgICAgICAgICAgICBpZHggPSBpO1xuICAgICAgICAgICAgICAgIHRvcCA9IGxpc3RbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlkeDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgdG9wIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gbGlzdFxuICAgICAqL1xuICAgIEhlYXAucHJvdG90eXBlLl90b3BPZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGxpc3QgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGxpc3RbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaGVhcCA9IG5ldyBIZWFwKHRoaXMuY29tcGFyZSk7XG4gICAgICAgIGhlYXAuaW5pdChsaXN0KTtcbiAgICAgICAgcmV0dXJuIGhlYXAucGVlaygpO1xuICAgIH07XG4gICAgcmV0dXJuIEhlYXA7XG59KCkpO1xuXG5leHBvcnQgeyBIZWFwLCBIZWFwQXN5bmMsIEhlYXAgYXMgZGVmYXVsdCwgdG9JbnQgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgSGVhcCB9IGZyb20gXCJoZWFwLWpzXCI7IC8vIC0tLT4gd2Vya3QgbmlldCBtZXQgd2F0Y2hpZnkgW1BhcnNlIGVycm9yXVxyXG4vLyBjb25zdCB7IEhlYXAgfSA9IHJlcXVpcmUoXCJoZWFwLWpzXCIpO1xyXG5cclxuY29uc3QgbWluSGVhcCA9IG5ldyBIZWFwKCk7XHJcblxyXG5taW5IZWFwLmluaXQoWzQ4LCA2MiwgMjMsIDM1LCAxOCwgNTAsIDY0LCAyNiwgNDIwXSk7XHJcblxyXG5jb25zb2xlLmxvZyhtaW5IZWFwLnBlZWsoKSk7XHJcbmNvbnNvbGUubG9nKG1pbkhlYXAucG9wKCkpO1xyXG5jb25zb2xlLmxvZyhtaW5IZWFwLnBlZWsoKSk7XHJcblxyXG5mb3IgKGNvbnN0IGl0ZXJhdG9yIG9mIG1pbkhlYXApIHtcclxuXHRsZXQgcFRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5cdGxldCBwVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiRWVyc3Qgdm9sZ2VuZGUgd2FhcmRlIGlzIFwiICsgaXRlcmF0b3IpO1xyXG5cdHBUYWcuYXBwZW5kQ2hpbGQocFRleHQpO1xyXG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kKHBUYWcpO1xyXG59XHJcblxyXG5jb25vbGUubG9nKFwid293XCIpO1xyXG4iXSwibmFtZXMiOlsiSGVhcEFzeW5jIiwiaSIsImoiLCJfYSIsIl9iIiwiSGVhcCJdLCJzb3VyY2VSb290IjoiIn0=