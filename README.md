According to https://github.com/playframework/Play20/wiki/AssetsGoogleClosureCompiler

> Any JavaScript file present in app/assets will be parsed by Google Closure compiler, checked for errors and dependencies and minified if activated in the build configuration.

The play 2.0 does indeed compile ecmascript files through the Google Closure Compiler, but it compiles the files into the generated ecmascript in reverse order of the require statements in the javascript files. In addition, the Google Closure Compiler doesn't strip the require statements from the generated ecmascript file.