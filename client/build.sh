ng build --prod --output-hashing none
cp dist/*.js ../deploy/client
cp dist/*.css ../deploy/client
cp dist/*.html ../deploy/client
cp -r dist/assets ../deploy/client/
