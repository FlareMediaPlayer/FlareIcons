build-private:
	VERSION=`node -pe "require('./package.json').version"` && \
	browserify src/flare-icons.js | \
	babel --presets es2015 | \
	uglifyjs - -o build/flare-icons-"$$VERSION".min.js
	
build-global:
	VERSION=`node -pe "require('./package.json').version"` && \
	browserify src/flare-icons.js -t [ envify purge --MODE global ] | \
	babel --presets es2015 | \
	uglifyjs - -o build/flare-icons-"$$VERSION".g.min.js
