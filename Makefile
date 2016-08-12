build-release:
	rm -rf build 
	mkdir build  
	VERSION=`node -pe "require('./package.json').version"` && \
	browserify src/flare-icons.js -t [ envify purge --MODE global ] | \
	babel --presets es2015 | \
	uglifyjs - -o build/flare-icons-"$$VERSION".min.js
	

	
