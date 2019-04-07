'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LineHookSchema extends Schema {
  up () {
    this.create('line_hooks', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('line_hooks')
  }
}

module.exports = LineHookSchema
