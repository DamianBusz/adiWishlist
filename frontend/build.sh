#!/bin/bash
npm run build && rm ../nginx/build -R && cp build ../nginx -R
