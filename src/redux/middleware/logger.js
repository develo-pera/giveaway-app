/* eslint no-console: ["error", { allow: ["group", "groupCollapsed", "groupEnd", "info"] }] */

const logger = store => next => (action) => {
  console.groupCollapsed(`Action - ${action.type}`)
  console.info('dispatching', action)

  const result = next(action)

  console.info('next state', store.getState())
  console.groupEnd()

  return result
}

export default logger
