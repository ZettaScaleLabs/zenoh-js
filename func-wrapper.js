mergeInto(LibraryManager.library, {
    $func_map: "new Map()",
    $func_idx: "0",
    $registerJSCallback__deps: ['$func_map', '$func_idx'],
    $registerJSCallback: function(ke, fn){
        index = func_idx
        func_map.set(index, [ke, fn])
        func_idx++;
        return index;
    },
    call_js_callback__proxy: 'async',
    call_js_callback__sig: 'ipi',
    call_js_callback__deps: ['$func_map', '$func_idx'],
    call_js_callback: function(id, value, ctx){
        var [ke, fn] = func_map.get(id)
        fn(value, ctx)
    },
  });