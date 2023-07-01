import { Router } from 'express'
import glob from 'glob'

/**
 * Uses a match patter reg exp to register and return all the routes in the
 * current directory
 *
 * @param router
 */
export function registerRoutes (router: Router) {
  const routes = glob.sync(__dirname + '/**/*.route.*')
  routes.map(route => register(route, router))
}

function register (routePath: string, app: Router) {
  const route = require(routePath)
  route.register(app)
}
