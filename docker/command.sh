#!/bin/bash
set -e

npx firebase use staging --token ${FIREBASE_TOKEN}
cd rapid/functions && npm install

cd ../../
npm run serve