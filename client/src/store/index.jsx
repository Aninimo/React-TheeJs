import { proxy } from 'valtio'

const state = proxy({
  intro: true,
  color: '#EFBD48',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: 'https://raw.githubusercontent.com/adrianhajdin/project_threejs_ai/main/client/public/threejs.png',
  fullDecal: 'https://raw.githubusercontent.com/adrianhajdin/project_threejs_ai/main/client/public/threejs.png',
});

export default state
