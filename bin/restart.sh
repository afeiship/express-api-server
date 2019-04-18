#!/usr/bin/env bash
npm run app:stop
npm run app:start
netstat -an | grep 4210