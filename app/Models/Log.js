'use strict'

const BaseModel = use('MongooseModel')

/**
 * @class Log
 */
class Log extends BaseModel {
  static boot ({ schema }) {
    // Hooks:
    // this.addHook('preSave', () => {})
    // this.addHook('preSave', 'LogHook.method')
    // Indexes:
    // this.index({}, {background: true})
  }
  /**
   * Log's schema
   */
  static get schema () {
    return {
      module: String,
      method: String,
      route: String,
      user: String
    }
  }
}

module.exports = Log.buildModel('Log')
