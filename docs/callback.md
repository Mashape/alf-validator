## Callback API

###### Import

```js
// default, ES5 (pre-compiled)
import validate from 'alf-validator/lib/async'

// ES2015 (srouce)
import validate from 'alf-validator/src/async'
```

###### Require

```js
// default, ES5 (pre-compiled)
var validate = require('alf-validator/lib/async')
```

### validate(data, options [, callback])

> Returns `true` or `false`.

- **data**: `Object` *(Required)*
  an [ALF](https://github.com/Mashape/api-log-format) object

- **options**:
  - **version**: `String`
    [ALF](https://github.com/Mashape/api-log-format#versions) schema version number

  - **additionalProperties**: `Boolean`
    filters away properties not in the schema before attempt to validate

- **callback**: `Function`
  callback function with signature of `(err, data)` where `data` is the filtered data *(if `additionalProperties === true`)*

```js
let options = {
  version: 'latest',
  additionalProperties: true
}

let isValid = validate(data, options, (err, data) => {
  if (err) console.error(e.errors)

  console.log(data)
})
```
