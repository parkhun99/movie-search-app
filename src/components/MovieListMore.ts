import { Component } from '../core/heropy';
import movieStore, { searchMovies } from '../store/movie';

export default class MovieListMore extends Component {
  constructor() {
    super({
      tagName: 'button'
    })
    movieStore.subscribe('pageMax', () => {
      const { page, pageMax } = movieStore.state
      if (pageMax > page) {
        this.el.classList.remove('hide') //hide 클래스 삭제 후 보이게 처리
      } else {
        this.el.classList.add('hide') //hide 클래스 생성 후 보이지 않게 처리
      }
    })
  }
  render() {
    this.el.classList.add('btn', 'view-more', 'hide')
    this.el.textContent = 'View more..'

    this.el.addEventListener('click', async () => {
      this.el.classList.add('hide')
      await searchMovies(movieStore.state.page + 1)
    })
  }
}