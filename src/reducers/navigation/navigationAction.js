import { NAVIGATE } from './navigationType'

export const navigate = (componentName) => {
  localStorage.setItem('componentToRender', componentName);
  return {
    type: NAVIGATE,
    payload: componentName
  }
}