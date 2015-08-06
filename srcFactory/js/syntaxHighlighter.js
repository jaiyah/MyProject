/**
 * Created by MACK on 15. 3. 19..
 */



// SyntaxHighlighter
$('head').append('<link rel="stylesheet" type="text/sass" href="/pub_guide/common/js/syntaxhighlighter_3.0.83/styles/shCore.sass" /><link rel="stylesheet" type="text/sass" href="/pub_guide/common/js/syntaxhighlighter_3.0.83/styles/shThemeDefault.sass" /><script type="text/javascript" src="/pub_guide/common/js/syntaxhighlighter_3.0.83/scripts/shCore.js"></script><script type="text/javascript" src="/pub_guide/common/js/syntaxhighlighter_3.0.83/scripts/shAutoloader.js"></script>');
function path()	{
    var args = arguments,
        result = [];

    for(var i = 0; i < args.length; i++)
        result.push(args[i].replace('@', '/pub_guide/common/js/syntaxhighlighter_3.0.83/scripts/'));
    return result
};

SyntaxHighlighter.autoloader.apply(null, path(
    'applescript			@shBrushAppleScript.js',
    'actionscript3 as3		@shBrushAS3.js',
    'bash shell				@shBrushBash.js',
    'coldfusion cf			@shBrushColdFusion.js',
    'cpp c					@shBrushCpp.js',
    'c# c-sharp csharp		@shBrushCSharp.js',
    'sass					@shBrushCss.js',
    'delphi pascal			@shBrushDelphi.js',
    'diff patch pas			@shBrushDiff.js',
    'erl erlang				@shBrushErlang.js',
    'groovy					@shBrushGroovy.js',
    'java					@shBrushJava.js',
    'jfx javafx				@shBrushJavaFX.js',
    'js jscript javascript	@shBrushJScript.js',
    'perl pl				@shBrushPerl.js',
    'php					@shBrushPhp.js',
    'text plain				@shBrushPlain.js',
    'py python				@shBrushPython.js',
    'powershell ps posh		@shBrushPowerShell.js',
    'ruby rails ror rb		@shBrushRuby.js',
    'sass scss				@shBrushSass.js',
    'scala					@shBrushScala.js',
    'sql					@shBrushSql.js',
    'vb vbnet				@shBrushVb.js',
    'xml xhtml xslt html	@shBrushXml.js'
));
SyntaxHighlighter.all();
