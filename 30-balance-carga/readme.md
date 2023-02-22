node server.js -m cluster -p 3000
pm2 start server.js -- -p 8080 -m fork
pm2 start server2.js -f -- -p 8081 -m fork
pm2 start server2.js -f -- -p 8082 -m fork
pm2 start server2.js -f -- -p 8083 -m fork
pm2 start server2.js -f -- -p 8084 -m fork
pm2 start server2.js -f -- -p 8085 -m fork
