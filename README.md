# loottableGenerator 

Generate loot tables using a cli interface

### Commands

* init (creates a new loottable)
* finish (saves and closes the current loottable)
* close (closes the current loottable)
* open (opens a loottable)
* reset (resets an entire loottable)
* read (prints a loottable to the console)
* cancel (cancels a command)
* add (add a new object)
* remove (remove an object)
* edit (edit an object)

### Structure

```json
{
  "entryCount": 0,
  "entries": [
      {
          "name": "entry-name",
          "weight": 0,
          "entry-data": {}
      }
  ]
}
```

#### How to read your loottables
