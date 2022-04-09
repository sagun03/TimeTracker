import { NAVIGATE } from './navigationType'

export const navigate = (componentName) => {
  return {
    type: NAVIGATE,
    payload: componentName
  }
}