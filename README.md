# 1F60D Project Sample Based on Vue-CLI v3.0 
# IE 대응 완료 버전

## 프로젝트 클론 전 사전 설치해야 할 부분입니다.  
- Node.js 8.11.4 LTS Version ( https://nodejs.org/ko/ )
- yarn v0.24.6 
```
npm install -g yarn 
```
- Vue-CLI 3.0 
```
yarn add global @vue/cli 
yarn add global @vue/cli-service-global
```

## 프로젝트 다운로드 / 의존성 설치 / 개발모드 실행
```
git clone https://github.com/front_user_sample.git 
cd front_user_sample 
yarn install 
yarn dev  
```

### 개발모드(Hot Reloading 적용)
```
yarn dev 
```

### 배포모드 실행
```
yarn build 

```

### 배포 파일 확인 방법 
```
yarn add global serve 
serve -s dist 
```
