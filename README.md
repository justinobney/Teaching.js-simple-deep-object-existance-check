Deep object graph check
===========

I hate doing this:

```javascript
if(person && person.address && person.address.city)
    doWork(person.address.city)
```

Wondering how I feel about this:

```javascript
if(lib.check('person.address.city', person))
    doWork(person.address.city)
```