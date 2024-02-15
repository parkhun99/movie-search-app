import { Store } from '../core/heropy';

interface State {
  photo: string
  name: string
  email: string
  github: string
  repository: string
}
export default new Store<State> ({
  photo: 'https://heropy.blog/css/images/logo.png',
  name: 'PARKHUN99 / ParkSeongHun',
  email: 'ned2114959@gmail.com',
  github: 'https://github.com/parkhun99',
  repository: 'https://github.com/parkhun99/movie-search-app'
})