# Nuxt.js Universal App with SSR via Firebase Functions and Firebase Hosting
Host a Nuxt Universal app or site by combining Nuxt.js with Firebase Cloud Functions and Hosting.

[Live Preview](https://nuxtssrfire.firebaseapp.com)

---

## Pre-Setup: Before Installing Any Dependencies
1. Obtain a Firebase Project ID to use for this project. [See Overiew Here](#firebase-project-setup)

2. Inside this directory, locate the file `.setup-firebaserc` and replace the text `your-project-id` with your Firebase Project ID.
---

## Setup

We will now get everything setup and deployed in 3 commands:

  **Note:** _All of these commands are ran from the root directory_

1. 의존성 모두 설치: package.json이 있으면 모두 시행. ~, /src, /prod/server 각각
```bash
yarn
```

2. 파이어베이스 프로젝트 셋업
- .setup-firebaserc에 등록한 프로젝트 아이디에 따라 필요한 파일을 생성.
- 만약 .setup-firebaserc 파일이 없다면 .firebaserc에서 프로젝트 아이디를 직업 입력하고 아래의 코드는 실행할 필요가 없음.
```bash
yarn setup
```

3. 프로젝트 빌드
```bash
yarn build
```

4. 파이어베이스 배포: 빌드가 포함됨. 
- 프로젝트에 서버 역할을 해줄 Functions 기능이 필요하므로 가격 플랜을 Blaze로 변경해야함.
- Functions를 알아서 생성하는데 이 과정이 오래걸림.
```bash
yarn deploy
```

***Your site should now be live!***

---

### Firebase Project Setup

1. Create a Firebase Project using the [Firebase Console](https://console.firebase.google.com).

2. Obtain the Firebase Project ID  

### Features
- Server-side rendering with Firebase Hosting combined with Firebase Functions
- Firebase Hosting as our CDN for our publicPath (See nuxt.config.js)

### Things to know...
- You must have the Firebase CLI installed. If you don't have it install it with `npm install -g firebase-tools` and then configure it with `firebase login`.

- If you have errors, make sure `firebase-tools` is up to date. I've experienced many problems that were resolved once I updated.


- The root directory has a package.json file with several scripts that will be used to optimize and ease getting started and the workflow

- ALL commands are ran from the root directory
