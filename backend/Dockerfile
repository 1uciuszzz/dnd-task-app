FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=5000
ENV DATABASE_URL=mongodb+srv://lucius:lucius@cluster0.i8or0ig.mongodb.net/lucius
ENV JWT_KEY=35f50aa3bbe5ada55baf799592fa11f3cbd8f3967913920fed9a315dd0cc9ac5
ENV SECRET_KEY=48530020bd73b023adb4b4a168291aa513060db5b88bac28137926f9a678c769

EXPOSE 5000

CMD [ "npm", "start" ]