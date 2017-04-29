//----------------------------------
// Generators
//----------------------------------

let generators = {
  //----------------------------------
  // Generators
  // - Generator Matching
  //----------------------------------

  generatorMaching: () => {

  },

  //----------------------------------
  // Generators
  // - Generator Control-Flow
  //----------------------------------
  generatorControlFlow: () => {

  }

}

//----------------------------------
// Map/Set and WeakMap/WeakSet
//----------------------------------

let mapSetAndWeakMapWeakSet = {

  //----------------------------------
  // Map/Set and WeakMap/WeakSet
  // - Set Data-Structure
  //----------------------------------
  setDataStructure: () => {

  },

  //----------------------------------
  // Map/Set and WeakMap/WeakSet
  // - Map Data-Structure
  //----------------------------------
  mapDataStructure: () => {

  },

  //----------------------------------
  // Map/Set and WeakMap/WeakSet
  // - Weak-Link Data-Structures
  //----------------------------------
  weakLinkDataStructures: () => {

  }

}

//==================================

window.onload = () => {

  let bindFunction = (selector, fn) => {
    let link = document.querySelector(selector)
    link.href = "javascript:void(0)"
    link.onclick = () => {
      console.clear()
      fn()
    }
  }

  let bindList = [
    ["#g-gm",         generators.generatorMaching],
    ["#g-gcf",        generators.generatorControlFlow],
    ["#mswmws-sds",   mapSetAndWeakMapWeakSet.setDataStructure],
    ["#mswmws-mds",   mapSetAndWeakMapWeakSet.mapDataStructure],
    ["#mswmws-wlds",  mapSetAndWeakMapWeakSet.weakLinkDataStructures]
  ]

  bindList.forEach(([selector, fn]) => bindFunction(selector, fn))
}
