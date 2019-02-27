#!/bin/bash
npm run build && rm -rf ../nginx/build && cp -rf build ../nginx
