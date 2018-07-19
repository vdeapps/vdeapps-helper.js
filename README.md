# vdeappsHelper.js
Helper addon for vdeappsAddons.js

## Content
```
/**
 * php str_pad
 * @example str_pad('Kevin van Zonneveld', 30, '-=', 'STR_PAD_LEFT')
 * @example str_pad('Kevin van Zonneveld', 30, '-', 'STR_PAD_BOTH')
 * 
 * @param input
 * @param padLength
 * @param padString
 * @param padType
 * @returns {string}
 */
static str_pad(input, padLength, padString, padType);

/**
 * Execute function by dynamic name
 * executeFunctionByName("My.Namespace.functionName", window, arguments);
 * executeFunctionByName("Namespace.functionName", My, arguments);
 * @param functionName
 * @param context
 * @param args
 * @returns result function
 */
executeFunctionByName(functionName, context /*, args */);

/**
 * Retourne un ID unique
 * @returns {string}
 */
uniqID();

/**
 * reset all form elements
 * use jQuery
 * @param elem
 */
resetFilters(elem);
    
```

## example
 
 ```
 var app = new vdeappsAddons()
 
 app.add( new vdeappsHelper(), 5);  // 5 is Position of loading for init, onReady and onUnload
 
 app.vdeappsHelper.method();  // Call method of helper addon
 
 
 vdeappsHelper.uniqID(); // Or use directly
 ```
 
