# @indlekofer/query_get 

## Usage

```js
import queryGet from '@indlekofer/query_get';

var query = queryGet("http://localhost:8080/?test=1&test2=2&test3=3");
console.log(query); //=> {test: "1", test2: "2", test3: "3"}
```

## Parameters

  **url**: url *optional* default use location.search 

