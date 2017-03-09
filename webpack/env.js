class Env {
  static toString() {
    return process.env.NODE_ENV
  }

  static get production() {
    return Env.toString() === 'production'
  }

  static get development() {
    return Env.toString() === 'development'
  }
}

module.exports = Env
