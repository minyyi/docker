FROM node

#워크디렉토리가 없으면 파일 복사될 때 혼재되서 구분이 어려움
WORKDIR /user/src/app

#
COPY ./ ./

#라이브러리 불러오기 (package.json에서 필요로 하는 라이브러리 불러와줌)
RUN npm install

#실행할 명령어가 필요함
CMD ["node", "server.js"]