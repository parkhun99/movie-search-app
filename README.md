# MOVIE APP 

OMDb API를 활용해 개발한 영화 검색 애플리케이션입니다.

[DEMO](https://movie-search-app-xi-eight.vercel.app/#/)


## 프로젝트 시작하기
```bash
$ npm i vercel
$ npm run vercel
```


## Vercel Hosting
### /vercel.json
```javascript
{
  "devCommand": "npm run dev",
  "buildCommand": "npm run build"
}
```
### package.json
```javascript
{
  "scripts": {
    "vercel": "vercel dev"
  }
}
```