#№ in order to run this project on your mac:

-  clone the repository
-  npm install
-  npm start (to open in Your web browser on local host)
-  node src/server.js (to run the back server)

[FIGMA DESIGN](https://www.figma.com/file/qowV3yFZcgCEIcDXC3ii6o/Front-end-test-task?node-id=0%3A1)


## Description

* App on React that include 2 pages with routes
  - `/` – Index
  - `/player/{player-name}` – Details
* App has responsive design
* App receive data from server via SSE (server-sent events)

## App Tech Info:

* Typescript
* Sass
* routing completed by react-router
* classNames package
* use faker for adding people every 5 sec
* people info and people score sort order store in local storage
