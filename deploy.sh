#!/usr/bin/env sh
set -x
set -e
CI=true npm test

echo tests successfully passed
echo attempting SSH into server

APP_IP=ec2-52-56-187-2.eu-west-2.compute.amazonaws.com
REPO_NAME=keytree-test
PROCESS_NAME=keytree-test

set +x

if ssh -i ~/.ssh/throwaway.pem ubuntu@$APP_IP 'sudo pm2 stop '$PROCESS_NAME' ; sudo rm -r '$REPO_NAME' ; git clone https://ben-cloud9:'$GITHUBTOKEN'@github.com/ben-cloud9/'$REPO_NAME'.git ; cd '$REPO_NAME' ; npm install ; npm run build ; sudo pm2 --name="'$PROCESS_NAME'" --update-env start server/server.js'; then
	echo "successfully deployed!"
else
	echo "ERROR! Please see logs and fix ASAP" 1>&2
	exit 1
fi