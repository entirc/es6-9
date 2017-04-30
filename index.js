import { clear, group, logf } from './utils.js'

//----------------------------------
// Map/Set and WeakMap/WeakSet
//----------------------------------

let mapSetAndWeakMapWeakSet = {

  //----------------------------------
  // Map/Set and WeakMap/WeakSet
  // - Set Data-Structure
  //----------------------------------
  setDataStructure: () => {
    let set = new Set()

    group("Adicionando valores no Set", () => {
      set.add("hello")
      logf('set.add("hello")')
      logf(set)

      set.add("goodbye")
      logf('set.add("goodbye")')
      logf(set)

      set.add("hello")
      logf('set.add("hello")')
      logf(set)
    })

    group("Encadeando set.add()", () => {
      set.add("foo").add("bar").add("qux")
      logf('set.add("foo").add("bar").add("qux")')
      logf(set)
    })

    group("Propriedades comuns do Set", () => {
      logf('set.size = ${size}', { size : set.size })
      logf('set.has("hello") ? ${has}', { has : set.has("hello") })
      logf('set.has("goodbye") ? ${has}', { has : set.has("goodbye") })
      logf('set.has("value") ? ${has}', { has : set.has("value") })
    })

    group("Iterando um Set (ordem dos elementos é a ordem de inserção)", () => {
      for (let key of set.values()) // insertion order
        logf(key)
    })

    group('Excluindo valores do Set', () => {
      logf(set)
      set.delete("hello")
      logf('set.delete("hello")')
      logf(set)
    })

    group("Limpando o Set", () => {
      set.clear()
      logf('set.clear()')
      logf('set.size = ${size}', { size : set.size })
      logf(set)
    })

    group("Adicionando tipos diferentes em um Set", () => {
      let mixedSet = new Set()
      mixedSet
        .add('abc')
        .add(123)
        .add({foo: 'bar'})
        .add([1, 2, 3, 4, 5])
      logf(mixedSet)
    })

    group("Criando um Set já com vários elementos", () => {
      logf(new Set([1, 2, 3, 4, 5]))
      logf(new Set(['red', 'green', 'blue']))
    })

    group("Construtor do Set aceita no máximo um argumento iterável (demais argumentos são desconsiderados)", () => {
      let setMultiArgs = new Set('abc', 'def')
      logf(setMultiArgs)
    })

    group("Operações de conjunto em Sets", () => {
      group("UNION (a ∪ b)", () => {
        const a = new Set([1,2,3]);
        const b = new Set([4,3,2]);
        const union = new Set([...a, ...b]);
        logf(a)
        logf(b)
        logf(union)
      })

      group("INTERSECTION (a ∩ b)", () => {
        const a = new Set([1,2,3]);
        const b = new Set([4,3,2]);
        const intersection = new Set([...a].filter(x => b.has(x)));
        logf(a)
        logf(b)
        logf(intersection)
      })

      group("DIFFERENCE (a - b)", () => {
        const a = new Set([1,2,3]);
        const b = new Set([4,3,2]);
        const difference = new Set([...a].filter(x => !b.has(x)));
        logf(a)
        logf(b)
        logf(difference)
      })
    })

  },

  //----------------------------------
  // Map/Set and WeakMap/WeakSet
  // - Map Data-Structure
  //----------------------------------
  mapDataStructure: () => {
    let map = new Map()

    group("Adicionando valores no Map via set()", () => {
      map.set("answer", 42)
      logf('map.set("answer", 42)')
      logf(map)

      map.set("foo", 1)
      logf('map.set("foo", 1)')
      logf(map)

      map.set("bar", 2)
      logf('map.set("bar", 2)')
      logf(map)
    })

    group("Propriedades comuns do Map ", () => {
      logf('map.get("answer") = ${value}', { value: map.get("answer") })
      logf('map.size = ${value}', { value: map.size })
    })

    group("Iterando um Map", () => {
      for (let [key, val] of map)
        logf('${key} = ${val}', { key: key, val: val })
    })

    group("Map entries", () => {
      logf('map.entries() = ${entries}', { entries: [...map.entries()] })
    })

    group("Map keys", () => {
      logf('map.keys() = ${keys}', { keys: [...map.keys()] })
    })

    group("Map values", () => {
      logf('map.values() = ${values}', { values: [...map.values()] })
    })

    group('Excluindo valores do Map', () => {
      logf(map)
      map.delete("answer")
      logf('map.delete("answer")')
      logf(map)
    })

    group("Limpando o Map", () => {
      map.clear()
      logf('map.clear()')
      logf('map.size = ${size}', { size : map.size })
      logf(map)
    })

    group("Criando um Map já com vários elementos", () => {
      logf(new Map([
        [1, 'one'],
        [2, 'two'],
        [3, 'three']
      ]))
    })

    group("Qualquer objeto pode ser uma 'key' do Map", () => {
      let myMap = new Map()
      myMap.set('a', 1)
      myMap.set(123, 2)
      myMap.set(NaN, 3)
      const KEY1 = {}
      myMap.set(KEY1, 4)
      const KEY2 = {}
      myMap.set(KEY2, 5)
      myMap.set(new Set([1, 2, 3]), 6)
      logf(myMap)
    })
  },

  //----------------------------------
  // Map/Set and WeakMap/WeakSet
  // - Weak-Link Data-Structures
  //----------------------------------
  weakLinkDataStructures: () => {
    //WeakSets usam apenas objetos e não são iteráveis
    //WeakMaps usam apenas objetos como keys (valores primitivos não são permitidos)
    //WeakMaps não têm a propriedade size e o método clear()
    //WeakMaps seria melhor nomeado como "WeakKeyMaps"

    group("Sets vs WeakSets", () => {

      let handleSet = (set) => {
        let key = {'answer': 42}

        logf('key = ${key}', { key: JSON.stringify(key) })
        set.add(key)

        logf(set)
        logf(set.size)

        key = null
        logf(set)
        logf('set.size = ${size}', { size: set.size })

        let retrievedKey = [...set][0]
        logf('retrievedKey = ${retrievedKey}', { retrievedKey: JSON.stringify(retrievedKey) })

        //Tentando iterar sobre o set recebido (permitido apenas para o Set, não para o WeakSet)
        /*for (let v of set) {
          logf(v)
        }*/
      }

      group('Set', () => {
        handleSet(new Set())
      })

      group('WeakSet', () => {
        handleSet(new WeakSet())
      })

    })

    group('WeakMaps', () => {
      var weakMap = new WeakMap();

      var x = { id: 1 },
        y = { id: 2 },
        z = { id: 3 },
        w = { id: 4 };

      weakMap.set( x, y );
      logf(weakMap)
      logf(weakMap.size) //undefined

      x = null;						// { id: 1 } é elegível para ser coletado pelo GC (garbage collector)
      y = null;						// { id: 2 } é elegível para ser coletado pelo GC (garbage collector)
                          // só porque { id: 1 } também é

      logf(weakMap)

      weakMap.set( z, w );
      logf(weakMap)

      w = null;						// { id: 4 } não é elegível para ser coletado pelo GC (garbage collector)
      logf(weakMap)
      //weakMap.clear() //error!
    })

  }

}

//==================================

window.onload = () => {

  let bindFunction = (selector, fn) => {
    let link = document.querySelector(selector)
    link.href = "javascript:void(0)"
    link.onclick = () => {
      clear()
      fn()
    }
  }

  let bindList = [
    ["#mswmws-sds",   mapSetAndWeakMapWeakSet.setDataStructure],
    ["#mswmws-mds",   mapSetAndWeakMapWeakSet.mapDataStructure],
    ["#mswmws-wlds",  mapSetAndWeakMapWeakSet.weakLinkDataStructures]
  ]

  bindList.forEach(([selector, fn]) => bindFunction(selector, fn))
}
