##### FIX
Sequelize may returns wrong count using eager loading  
Using lines below to fix this problem

```javascript
// Add a permanent global hook to prevent unknowingly hitting this Sequelize bug:
//   https://github.com/sequelize/sequelize/issues/10557
sequelize.addHook('beforeCount', function (options) {
  if (this._scope.include && this._scope.include.length > 0) {
    options.distinct = true
    options.col = this._scope.col || options.col || `"${this.options.name.singular}".id`
  }

  if (options.include && options.include.length > 0) {
    options.include = null
  }
})

```