# dnd-task-app

demo for interview

## usage

```sh
cd backend
docker build -t lucius/dndapp:1.0 .
docker run -p <image id>
```

in frontend folder,

```sh
npm i
npm run dev
```

test account:  
username:`lucius`  
password:`lucius`

## highlights

1. in backend project, i write my own middleware for auth router.
2. redux but without redux-saga😭
3. deploy backend service in docker
   ![](docker.png)

## video

![](video.gif)
