import{i as ht,p as at,t as ia,b as Mt}from"./2Um0fcfp.js";import{l as ca,s as la,p as da,i as D}from"./7a4wz9Fg.js";import{d as L,c as l,b as o,p as Qe,f as h,n as $,t as Me,s as f,a as je,e as u,g as r,h as le,r as d,k as j,i as M,l as ne,u as G,x as ua,v as Nt}from"./Bq244wU7.js";import{c as te}from"./npWQtwSL.js";import{a as pt,b as ct,T as mt}from"./UP4zC35H.js";import{e as it,i as pa}from"./CMOe-Whj.js";import{B as be}from"./D_PvveBf.js";import{C as Ie}from"./CLfv_bqz.js";import{C as $e}from"./v3DbPef4.js";import{a as We,s as ma}from"./BXRhph22.js";import{H as Ze,g as ga}from"./Cw-wiYxU.js";import{C as va,a as _a,b as fa}from"./BobgzAwU.js";import{C as ba}from"./DrJw9jKm.js";import{C as ya}from"./ohiL75jn.js";import{L as Ea}from"./Cvq7tg_y.js";import{A as ha,a as Ta,b as wa,c as Sa,d as xa,e as Aa}from"./CNJx9-5U.js";import{t as Ye}from"./_rwR96iw.js";import{R as Oa}from"./Bse7pcGf.js";import{I as Ra,s as Na}from"./B9OYPylh.js";function Lt(e,t){const n=ca(t,["children","$$slots","$$events","$$legacy"]);const a=[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor"}]];Ra(e,la({name:"key-round"},()=>n,{get iconNode(){return a},children:(s,g)=>{var i=L(),v=l(i);Na(v,t,"default",{},null),o(s,i)},$$slots:{default:!0}}))}const Ct="[A-Za-z$_][0-9A-Za-z$_]*",Ca=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],Ia=["true","false","null","undefined","NaN","Infinity"],kt=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Pt=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Dt=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],$a=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],Ma=[].concat(Dt,kt,Pt);function La(e){const t=e.regex,n=(O,{after:B})=>{const Y="</"+O[0].slice(1);return O.input.indexOf(Y,B)!==-1},a=Ct,s={begin:"<>",end:"</>"},g=/<[A-Za-z0-9\\._:-]+\s*\/>/,i={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(O,B)=>{const Y=O[0].length+O.index,re=O.input[Y];if(re==="<"||re===","){B.ignoreMatch();return}re===">"&&(n(O,{after:Y})||B.ignoreMatch());let ee;const se=O.input.substring(Y);if(ee=se.match(/^\s*=/)){B.ignoreMatch();return}if((ee=se.match(/^\s+extends\s+/))&&ee.index===0){B.ignoreMatch();return}}},v={$pattern:Ct,keyword:Ca,literal:Ia,built_in:Ma,"variable.language":$a},_="[0-9](_?[0-9])*",b=`\\.(${_})`,y="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",x={className:"number",variants:[{begin:`(\\b(${y})((${b})|\\.)?|(${b}))[eE][+-]?(${_})\\b`},{begin:`\\b(${y})\\b((${b})\\b|\\.)?|(${b})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},p={className:"subst",begin:"\\$\\{",end:"\\}",keywords:v,contains:[]},T={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,p],subLanguage:"xml"}},m={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,p],subLanguage:"css"}},c={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,p],subLanguage:"graphql"}},E={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,p]},R={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:a+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},w=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,T,m,c,E,{match:/\$\d+/},x];p.contains=w.concat({begin:/\{/,end:/\}/,keywords:v,contains:["self"].concat(w)});const S=[].concat(R,p.contains),C=S.concat([{begin:/(\s*)\(/,end:/\)/,keywords:v,contains:["self"].concat(S)}]),N={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:v,contains:C},k={variants:[{match:[/class/,/\s+/,a,/\s+/,/extends/,/\s+/,t.concat(a,"(",t.concat(/\./,a),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,a],scope:{1:"keyword",3:"title.class"}}]},P={relevance:0,match:t.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...kt,...Pt]}},J={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},H={variants:[{match:[/function/,/\s+/,a,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[N],illegal:/%/},de={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function Te(O){return t.concat("(?!",O.join("|"),")")}const ue={match:t.concat(/\b/,Te([...Dt,"super","import"].map(O=>`${O}\\s*\\(`)),a,t.lookahead(/\s*\(/)),className:"title.function",relevance:0},Z={begin:t.concat(/\./,t.lookahead(t.concat(a,/(?![0-9A-Za-z$_(])/))),end:a,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},U={match:[/get|set/,/\s+/,a,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},N]},q="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",ae={match:[/const|var|let/,/\s+/,a,/\s*/,/=\s*/,/(async\s*)?/,t.lookahead(q)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[N]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:v,exports:{PARAMS_CONTAINS:C,CLASS_REFERENCE:P},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),J,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,T,m,c,E,R,{match:/\$\d+/},x,P,{scope:"attr",match:a+t.lookahead(":"),relevance:0},ae,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[R,e.REGEXP_MODE,{className:"function",begin:q,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:v,contains:C}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:s.begin,end:s.end},{match:g},{begin:i.begin,"on:begin":i.isTrulyOpeningTag,end:i.end}],subLanguage:"xml",contains:[{begin:i.begin,end:i.end,skip:!0,contains:["self"]}]}]},H,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[N,e.inherit(e.TITLE_MODE,{begin:a,className:"title.function"})]},{match:/\.\.\./,relevance:0},Z,{match:"\\$"+a,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[N]},ue,de,k,U,{match:/\$[(.]/}]}}const Et={name:"javascript",register:La};function ka(e){const t=e.regex,n={},a={begin:/\$\{/,end:/\}/,contains:["self",{begin:/:-/,contains:[n]}]};Object.assign(n,{className:"variable",variants:[{begin:t.concat(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},a]});const s={className:"subst",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]},g=e.inherit(e.COMMENT(),{match:[/(^|\s)/,/#.*$/],scope:{2:"comment"}}),i={begin:/<<-?\s*(?=\w+)/,starts:{contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,className:"string"})]}},v={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,n,s]};s.contains.push(v);const _={match:/\\"/},b={className:"string",begin:/'/,end:/'/},y={match:/\\'/},x={begin:/\$?\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},e.NUMBER_MODE,n]},p=["fish","bash","zsh","sh","csh","ksh","tcsh","dash","scsh"],T=e.SHEBANG({binary:`(${p.join("|")})`,relevance:10}),m={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0},c=["if","then","else","elif","fi","time","for","while","until","in","do","done","case","esac","coproc","function","select"],E=["true","false"],A={match:/(\/[a-z._-]+)+/},R=["break","cd","continue","eval","exec","exit","export","getopts","hash","pwd","readonly","return","shift","test","times","trap","umask","unset"],w=["alias","bind","builtin","caller","command","declare","echo","enable","help","let","local","logout","mapfile","printf","read","readarray","source","sudo","type","typeset","ulimit","unalias"],S=["autoload","bg","bindkey","bye","cap","chdir","clone","comparguments","compcall","compctl","compdescribe","compfiles","compgroups","compquote","comptags","comptry","compvalues","dirs","disable","disown","echotc","echoti","emulate","fc","fg","float","functions","getcap","getln","history","integer","jobs","kill","limit","log","noglob","popd","print","pushd","pushln","rehash","sched","setcap","setopt","stat","suspend","ttyctl","unfunction","unhash","unlimit","unsetopt","vared","wait","whence","where","which","zcompile","zformat","zftp","zle","zmodload","zparseopts","zprof","zpty","zregexparse","zsocket","zstyle","ztcp"],C=["chcon","chgrp","chown","chmod","cp","dd","df","dir","dircolors","ln","ls","mkdir","mkfifo","mknod","mktemp","mv","realpath","rm","rmdir","shred","sync","touch","truncate","vdir","b2sum","base32","base64","cat","cksum","comm","csplit","cut","expand","fmt","fold","head","join","md5sum","nl","numfmt","od","paste","ptx","pr","sha1sum","sha224sum","sha256sum","sha384sum","sha512sum","shuf","sort","split","sum","tac","tail","tr","tsort","unexpand","uniq","wc","arch","basename","chroot","date","dirname","du","echo","env","expr","factor","groups","hostid","id","link","logname","nice","nohup","nproc","pathchk","pinky","printenv","printf","pwd","readlink","runcon","seq","sleep","stat","stdbuf","stty","tee","test","timeout","tty","uname","unlink","uptime","users","who","whoami","yes"];return{name:"Bash",aliases:["sh","zsh"],keywords:{$pattern:/\b[a-z][a-z0-9._-]+\b/,keyword:c,literal:E,built_in:[...R,...w,"set","shopt",...S,...C]},contains:[T,e.SHEBANG(),m,x,g,i,A,v,_,b,y,n]}}const Xe={name:"bash",register:ka};function Pa(e){const t=e.regex,n=/(?![A-Za-z0-9])(?![$])/,a=t.concat(/[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/,n),s=t.concat(/(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/,n),g=t.concat(/[A-Z]+/,n),i={scope:"variable",match:"\\$+"+a},v={scope:"meta",variants:[{begin:/<\?php/,relevance:10},{begin:/<\?=/},{begin:/<\?/,relevance:.1},{begin:/\?>/}]},_={scope:"subst",variants:[{begin:/\$\w+/},{begin:/\{\$/,end:/\}/}]},b=e.inherit(e.APOS_STRING_MODE,{illegal:null}),y=e.inherit(e.QUOTE_STRING_MODE,{illegal:null,contains:e.QUOTE_STRING_MODE.contains.concat(_)}),x={begin:/<<<[ \t]*(?:(\w+)|"(\w+)")\n/,end:/[ \t]*(\w+)\b/,contains:e.QUOTE_STRING_MODE.contains.concat(_),"on:begin":(Z,U)=>{U.data._beginMatch=Z[1]||Z[2]},"on:end":(Z,U)=>{U.data._beginMatch!==Z[1]&&U.ignoreMatch()}},p=e.END_SAME_AS_BEGIN({begin:/<<<[ \t]*'(\w+)'\n/,end:/[ \t]*(\w+)\b/}),T=`[ 	
]`,m={scope:"string",variants:[y,b,x,p]},c={scope:"number",variants:[{begin:"\\b0[bB][01]+(?:_[01]+)*\\b"},{begin:"\\b0[oO][0-7]+(?:_[0-7]+)*\\b"},{begin:"\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b"},{begin:"(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?"}],relevance:0},E=["false","null","true"],A=["__CLASS__","__DIR__","__FILE__","__FUNCTION__","__COMPILER_HALT_OFFSET__","__LINE__","__METHOD__","__NAMESPACE__","__TRAIT__","die","echo","exit","include","include_once","print","require","require_once","array","abstract","and","as","binary","bool","boolean","break","callable","case","catch","class","clone","const","continue","declare","default","do","double","else","elseif","empty","enddeclare","endfor","endforeach","endif","endswitch","endwhile","enum","eval","extends","final","finally","float","for","foreach","from","global","goto","if","implements","instanceof","insteadof","int","integer","interface","isset","iterable","list","match|0","mixed","new","never","object","or","private","protected","public","readonly","real","return","string","switch","throw","trait","try","unset","use","var","void","while","xor","yield"],R=["Error|0","AppendIterator","ArgumentCountError","ArithmeticError","ArrayIterator","ArrayObject","AssertionError","BadFunctionCallException","BadMethodCallException","CachingIterator","CallbackFilterIterator","CompileError","Countable","DirectoryIterator","DivisionByZeroError","DomainException","EmptyIterator","ErrorException","Exception","FilesystemIterator","FilterIterator","GlobIterator","InfiniteIterator","InvalidArgumentException","IteratorIterator","LengthException","LimitIterator","LogicException","MultipleIterator","NoRewindIterator","OutOfBoundsException","OutOfRangeException","OuterIterator","OverflowException","ParentIterator","ParseError","RangeException","RecursiveArrayIterator","RecursiveCachingIterator","RecursiveCallbackFilterIterator","RecursiveDirectoryIterator","RecursiveFilterIterator","RecursiveIterator","RecursiveIteratorIterator","RecursiveRegexIterator","RecursiveTreeIterator","RegexIterator","RuntimeException","SeekableIterator","SplDoublyLinkedList","SplFileInfo","SplFileObject","SplFixedArray","SplHeap","SplMaxHeap","SplMinHeap","SplObjectStorage","SplObserver","SplPriorityQueue","SplQueue","SplStack","SplSubject","SplTempFileObject","TypeError","UnderflowException","UnexpectedValueException","UnhandledMatchError","ArrayAccess","BackedEnum","Closure","Fiber","Generator","Iterator","IteratorAggregate","Serializable","Stringable","Throwable","Traversable","UnitEnum","WeakReference","WeakMap","Directory","__PHP_Incomplete_Class","parent","php_user_filter","self","static","stdClass"],S={keyword:A,literal:(Z=>{const U=[];return Z.forEach(q=>{U.push(q),q.toLowerCase()===q?U.push(q.toUpperCase()):U.push(q.toLowerCase())}),U})(E),built_in:R},C=Z=>Z.map(U=>U.replace(/\|\d+$/,"")),N={variants:[{match:[/new/,t.concat(T,"+"),t.concat("(?!",C(R).join("\\b|"),"\\b)"),s],scope:{1:"keyword",4:"title.class"}}]},k=t.concat(a,"\\b(?!\\()"),P={variants:[{match:[t.concat(/::/,t.lookahead(/(?!class\b)/)),k],scope:{2:"variable.constant"}},{match:[/::/,/class/],scope:{2:"variable.language"}},{match:[s,t.concat(/::/,t.lookahead(/(?!class\b)/)),k],scope:{1:"title.class",3:"variable.constant"}},{match:[s,t.concat("::",t.lookahead(/(?!class\b)/))],scope:{1:"title.class"}},{match:[s,/::/,/class/],scope:{1:"title.class",3:"variable.language"}}]},J={scope:"attr",match:t.concat(a,t.lookahead(":"),t.lookahead(/(?!::)/))},H={relevance:0,begin:/\(/,end:/\)/,keywords:S,contains:[J,i,P,e.C_BLOCK_COMMENT_MODE,m,c,N]},de={relevance:0,match:[/\b/,t.concat("(?!fn\\b|function\\b|",C(A).join("\\b|"),"|",C(R).join("\\b|"),"\\b)"),a,t.concat(T,"*"),t.lookahead(/(?=\()/)],scope:{3:"title.function.invoke"},contains:[H]};H.contains.push(de);const Te=[J,P,e.C_BLOCK_COMMENT_MODE,m,c,N],ue={begin:t.concat(/#\[\s*\\?/,t.either(s,g)),beginScope:"meta",end:/]/,endScope:"meta",keywords:{literal:E,keyword:["new","array"]},contains:[{begin:/\[/,end:/]/,keywords:{literal:E,keyword:["new","array"]},contains:["self",...Te]},...Te,{scope:"meta",variants:[{match:s},{match:g}]}]};return{case_insensitive:!1,keywords:S,contains:[ue,e.HASH_COMMENT_MODE,e.COMMENT("//","$"),e.COMMENT("/\\*","\\*/",{contains:[{scope:"doctag",match:"@[A-Za-z]+"}]}),{match:/__halt_compiler\(\);/,keywords:"__halt_compiler",starts:{scope:"comment",end:e.MATCH_NOTHING_RE,contains:[{match:/\?>/,scope:"meta",endsParent:!0}]}},v,{scope:"variable.language",match:/\$this\b/},i,de,P,{match:[/const/,/\s/,a],scope:{1:"keyword",3:"variable.constant"}},N,{scope:"function",relevance:0,beginKeywords:"fn function",end:/[;{]/,excludeEnd:!0,illegal:"[$%\\[]",contains:[{beginKeywords:"use"},e.UNDERSCORE_TITLE_MODE,{begin:"=>",endsParent:!0},{scope:"params",begin:"\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0,keywords:S,contains:["self",ue,i,P,e.C_BLOCK_COMMENT_MODE,m,c]}]},{scope:"class",variants:[{beginKeywords:"enum",illegal:/[($"]/},{beginKeywords:"class interface trait",illegal:/[:($"]/}],relevance:0,end:/\{/,excludeEnd:!0,contains:[{beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"namespace",relevance:0,end:";",illegal:/[.']/,contains:[e.inherit(e.UNDERSCORE_TITLE_MODE,{scope:"title.class"})]},{beginKeywords:"use",relevance:0,end:";",contains:[{match:/\b(as|const|function)\b/,scope:"keyword"},e.UNDERSCORE_TITLE_MODE]},m,c]}}const Rn={name:"php",register:Pa};function Da(e){const t=e.regex,n=new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*","u"),a=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],v={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:a,built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]},_={className:"meta",begin:/^(>>>|\.\.\.) /},b={className:"subst",begin:/\{/,end:/\}/,keywords:v,illegal:/#/},y={begin:/\{\{/,relevance:0},x={className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,_],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,_],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,_,y,b]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,_,y,b]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[e.BACKSLASH_ESCAPE,y,b]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,y,b]},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},p="[0-9](_?[0-9])*",T=`(\\b(${p}))?\\.(${p})|\\b(${p})\\.`,m=`\\b|${a.join("|")}`,c={className:"number",relevance:0,variants:[{begin:`(\\b(${p})|(${T}))[eE][+-]?(${p})[jJ]?(?=${m})`},{begin:`(${T})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${m})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${m})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${m})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${m})`},{begin:`\\b(${p})[jJ](?=${m})`}]},E={className:"comment",begin:t.lookahead(/# type:/),end:/$/,keywords:v,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},A={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:v,contains:["self",_,c,x,e.HASH_COMMENT_MODE]}]};return b.contains=[x,c,_],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:v,illegal:/(<\/|\?)|=>/,contains:[_,c,{scope:"variable.language",match:/\bself\b/},{beginKeywords:"if",relevance:0},{match:/\bor\b/,scope:"keyword"},x,E,e.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,n],scope:{1:"keyword",3:"title.function"},contains:[A]},{variants:[{match:[/\bclass/,/\s+/,n,/\s*/,/\(\s*/,n,/\s*\)/]},{match:[/\bclass/,/\s+/,n]}],scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[c,A,x]}]}}const Ba={name:"python",register:Da};function Nn(e){const t="go get go.tracewayapp.com";switch(e){case"gin":return`${t} && go get go.tracewayapp.com/tracewaygin`;case"chi":return`${t} && go get go.tracewayapp.com/tracewaychi`;case"fiber":return`${t} && go get go.tracewayapp.com/tracewayfiber`;case"fasthttp":return`${t} && go get go.tracewayapp.com/tracewayfasthttp`;case"stdlib":return`${t} && go get go.tracewayapp.com/tracewayhttp`;case"react":return"npm install @tracewayapp/react";case"svelte":return"npm install @tracewayapp/svelte";case"vuejs":return"npm install @tracewayapp/vue";case"nextjs":return"npm install @tracewayapp/react";case"nestjs":return"npm install @tracewayapp/nest";case"express":return"npm install @tracewayapp/express";case"remix":return"npm install @tracewayapp/remix";case"jquery":return"npm install @tracewayapp/jquery";case"react-native":return"npm install @tracewayapp/react-native";case"hono":return"";case"symfony":return"composer require traceway/opentelemetry-symfony open-telemetry/exporter-otlp php-http/guzzle7-adapter";case"laravel":return"composer require keepsuit/laravel-opentelemetry open-telemetry/exporter-otlp php-http/guzzle7-adapter";case"django":return"pip install opentelemetry-distro opentelemetry-exporter-otlp opentelemetry-instrumentation-django && opentelemetry-bootstrap -a install";case"cloudflare":return"";case"opentelemetry":return"";case"flutter":return"flutter pub add traceway";case"android":return'implementation("com.tracewayapp:traceway:1.0.0")';case"ios":return'.package(url: "https://github.com/tracewayapp/traceway-ios.git", from: "0.1.0")';default:return t}}function Cn(e,t,n){const a=t?`${t}@${n}/api/report`:`YOUR_TOKEN@${n}/api/report`;switch(e){case"gin":return`package main

import (
    "github.com/gin-gonic/gin"
    tracewaygin "go.tracewayapp.com/tracewaygin"
)

func main() {
    r := gin.Default()
    r.Use(tracewaygin.New("${a}"))
    r.Run(":8080")
}`;case"chi":return`package main

import (
    "net/http"

    "github.com/go-chi/chi/v5"
    tracewaychi "go.tracewayapp.com/tracewaychi"
)

func main() {
    r := chi.NewRouter()
    r.Use(tracewaychi.New("${a}"))

    r.Get("/api/users", getUsers)
    http.ListenAndServe(":8080", r)
}`;case"fiber":return`package main

import (
    "github.com/gofiber/fiber/v2"
    tracewayfiber "go.tracewayapp.com/tracewayfiber"
)

func main() {
    app := fiber.New()
    app.Use(tracewayfiber.New("${a}"))

    app.Get("/api/users", getUsers)
    app.Listen(":8080")
}`;case"fasthttp":return`package main

import (
    "github.com/valyala/fasthttp"
    tracewayfasthttp "go.tracewayapp.com/tracewayfasthttp"
)

func main() {
    handler := func(ctx *fasthttp.RequestCtx) {
        ctx.SetStatusCode(200)
        ctx.SetBodyString("Hello, World!")
    }

    tracedHandler := tracewayfasthttp.New("${a}")(handler)
    fasthttp.ListenAndServe(":8080", tracedHandler)
}`;case"stdlib":return`package main

import (
    "net/http"

    tracewayhttp "go.tracewayapp.com/tracewayhttp"
)

func main() {
    mux := http.NewServeMux()
    mux.HandleFunc("/api/users", getUsers)

    handler := tracewayhttp.New("${a}")(mux)
    http.ListenAndServe(":8080", handler)
}`;case"react":return`import { TracewayProvider } from "@tracewayapp/react";

function App() {
  return (
    <TracewayProvider connectionString="${a}">
      <YourApp />
    </TracewayProvider>
  );
}

export default App;`;case"svelte":return`<!-- src/routes/+layout.svelte -->
<script>
  import { setupTraceway } from "@tracewayapp/svelte";
  import { browser } from "$app/environment";

  if (browser) {
    setupTraceway({
      connectionString: "${a}",
    });
  }
<\/script>

<slot />`;case"vuejs":return`import { createApp } from "vue";
import { createTracewayPlugin } from "@tracewayapp/vue";
import App from "./App.vue";

const app = createApp(App);

app.use(createTracewayPlugin({
  connectionString: "${a}",
}));

app.mount("#app");`;case"nextjs":return`// app/traceway-provider.tsx
"use client";

import { TracewayProvider } from "@tracewayapp/react";

export function TracewayClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <TracewayProvider connectionString="${a}">
      {children}
    </TracewayProvider>
  );
}

// app/layout.tsx
import { TracewayClientProvider } from "./traceway-provider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <TracewayClientProvider>{children}</TracewayClientProvider>
      </body>
    </html>
  );
}`;case"nestjs":return`import { Module } from "@nestjs/common";
import { TracewayModule } from "@tracewayapp/nest";

@Module({
    imports: [
        TracewayModule.forRoot({
            connectionString: "${a}",
        }),
    ],
})
export class AppModule {}`;case"express":return`import express from "express";
import { traceway } from "@tracewayapp/express";

const app = express();
app.use(traceway("${a}"));

app.get("/api/users", (req, res) => {
    res.json({ users: [] });
});

app.listen(8080);`;case"remix":return`import { withTraceway } from "@tracewayapp/remix";

export default withTraceway({
    connectionString: "${a}",
});`;case"jquery":return`import { init } from "@tracewayapp/jquery";

init("${a}");

// jQuery AJAX errors are captured automatically
// Distributed trace headers are injected into $.ajax() requests`;case"react-native":return`import { TracewayProvider } from "@tracewayapp/react-native";

export default function App() {
  return (
    <TracewayProvider connectionString="${a}">
      <RootNavigator />
    </TracewayProvider>
  );
}`;case"symfony":return`<?php
// public/index.php

use App\\Kernel;

require_once dirname(__DIR__) . '/vendor/autoload.php';

\\OpenTelemetry\\SDK\\SdkAutoloader::autoload();

// Fixes for Symfony's OTel auto-instrumentation:
// 1. Corrects http.route from internal route name to URL path template
// 2. Cleans up sub-request scopes so 500 error spans are exported
\\OpenTelemetry\\Instrumentation\\hook(
    \\Symfony\\Component\\HttpKernel\\HttpKernel::class,
    'handle',
    post: static function (
        \\Symfony\\Component\\HttpKernel\\HttpKernel $kernel,
        array $params,
        mixed $returnValue,
        ?\\Throwable $exception
    ): void {
        $request = ($params[0] instanceof \\Symfony\\Component\\HttpFoundation\\Request) ? $params[0] : null;
        if (null === $request) return;

        $type = $params[1] ?? \\Symfony\\Component\\HttpKernel\\HttpKernelInterface::MAIN_REQUEST;

        if ($type === \\Symfony\\Component\\HttpKernel\\HttpKernelInterface::SUB_REQUEST) {
            $scope = \\OpenTelemetry\\Context\\Context::storage()->scope();
            if (null !== $scope) {
                $span = \\OpenTelemetry\\API\\Trace\\Span::fromContext($scope->context());
                $scope->detach();
                $span->end();
            }
            return;
        }

        $routeParams = $request->attributes->get('_route_params', []);
        $path = $request->getPathInfo();
        if (\\is_array($routeParams)) {
            foreach ($routeParams as $name => $value) {
                if (\\is_string($value) && '' !== $value) {
                    $path = str_replace($value, '{' . $name . '}', $path);
                }
            }
        }

        $request->attributes->set('_route', $path);
    }
);

$kernel = new Kernel($_SERVER['APP_ENV'] ?? 'dev', (bool) ($_SERVER['APP_DEBUG'] ?? true));
$request = \\Symfony\\Component\\HttpFoundation\\Request::createFromGlobals();
$response = $kernel->handle($request);
$response->send();
$kernel->terminate($request, $response);`;case"laravel":return`<?php
// .env  — point the OTLP exporter at Traceway
//
// OTEL_SERVICE_NAME=my-laravel-app
// OTEL_TRACES_EXPORTER=otlp
// OTEL_METRICS_EXPORTER=otlp
// OTEL_LOGS_EXPORTER=otlp
// OTEL_EXPORTER_OTLP_PROTOCOL=http/json
// OTEL_EXPORTER_OTLP_ENDPOINT=${n}/api/otel
// OTEL_EXPORTER_OTLP_HEADERS="Authorization=Bearer ${t||"YOUR_TOKEN"}"
//
// Optional: send Laravel logs to Traceway via the auto-injected 'otlp' channel
// LOG_CHANNEL=otlp

// That's it — keepsuit/laravel-opentelemetry's service provider auto-registers
// TraceRequestMiddleware as a global middleware, so every HTTP request, DB query,
// queued job, Redis call, cache op, view render and outbound Http:: call is
// traced automatically. Open config/opentelemetry.php to tune which
// instrumentations are enabled.`;case"django":return`# .env  — point the OTLP exporter at Traceway
#
# OTEL_SERVICE_NAME=my-django-app
# OTEL_TRACES_EXPORTER=otlp
# OTEL_METRICS_EXPORTER=otlp
# OTEL_LOGS_EXPORTER=otlp
# OTEL_EXPORTER_OTLP_PROTOCOL=http/protobuf
# OTEL_EXPORTER_OTLP_ENDPOINT=${n}/api/otel
# OTEL_EXPORTER_OTLP_HEADERS=Authorization=Bearer%20${t||"YOUR_TOKEN"}
# OTEL_PYTHON_LOGGING_AUTO_INSTRUMENTATION_ENABLED=true

# Then launch Django through the OTel agent — no code changes needed:
#
#   opentelemetry-instrument python manage.py runserver
#   opentelemetry-instrument gunicorn myproject.wsgi:application
#
# DjangoInstrumentor auto-installs middleware at index 0 and traces every
# inbound request. opentelemetry-bootstrap also wired psycopg/redis/requests/
# celery/logging instrumentation, so DB queries, cache ops, outbound HTTP
# and queued tasks are traced automatically.`;case"hono":return"";case"cloudflare":return"";case"opentelemetry":return"";case"flutter":return`import 'package:flutter/material.dart';
import 'package:traceway/traceway.dart';

void main() {
  Traceway.run(
    connectionString: '${a}',
    options: TracewayOptions(
      screenCapture: true,
      version: '1.0.0',
    ),
    child: MyApp(),
  );
}`;case"android":return`import android.app.Application
import com.tracewayapp.traceway.Traceway
import com.tracewayapp.traceway.TracewayOptions

class MyApp : Application() {
    override fun onCreate() {
        super.onCreate()
        Traceway.init(
            application = this,
            connectionString = "${a}",
            options = TracewayOptions(version = "1.0.0"),
        )
    }
}`;case"ios":return`import SwiftUI
import Traceway

@main
struct MyApp: App {
    init() {
        Traceway.start(
            connectionString: "${a}",
            options: TracewayOptions(version: "1.0.0")
        )
    }

    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}`;default:return`package main

import (
    "go.tracewayapp.com"
)

func main() {
    traceway.Init(
        "${a}",
        traceway.WithVersion("1.0.0"),
        traceway.WithServerName("my-server"),
    )
}`}}function In(e){return e==="symfony"?`<?php
// src/Controller/TestController.php
namespace App\\Controller;

use Symfony\\Component\\HttpFoundation\\Response;
use Symfony\\Component\\Routing\\Attribute\\Route;

class TestController
{
    #[Route('/testing', name: 'testing')]
    public function index(): Response
    {
        throw new \\RuntimeException("Test error from Traceway integration");
    }
}`:e==="laravel"?`<?php
// routes/web.php
use Illuminate\\Support\\Facades\\Route;

Route::get('/testing', function () {
    throw new \\RuntimeException('Test error from Traceway integration');
});`:e==="django"?`# myapp/views.py
from django.http import HttpResponse


def testing(request):
    raise RuntimeError("Test error from Traceway integration")


# myproject/urls.py
from django.urls import path
from myapp import views

urlpatterns = [
    path("testing/", views.testing),
]`:e==="flutter"?`// Trigger a test error
throw StateError('Test error from Traceway integration');`:e==="android"?`// Trigger a test error
throw RuntimeException("Test error from Traceway integration")`:e==="ios"?`// Trigger a test error
fatalError("Test error from Traceway integration")`:e&&ht(e)?`// Trigger a test error
throw new Error("Test error from Traceway integration");`:`r.GET("/testing", func(c *gin.Context) {
    panic("Test error from Traceway integration")
})`}function $n(e){if(e==="symfony"||e==="laravel"||e==="django")return"";if(e==="flutter")return`import 'package:traceway/traceway.dart';

TracewayClient.instance?.captureException(
  Exception('Test error'),
  StackTrace.current,
);`;if(e==="android")return`import com.tracewayapp.traceway.Traceway

try {
    riskyOperation()
} catch (e: Throwable) {
    Traceway.captureException(e)
}`;if(e==="ios")return`import Traceway

do {
    try riskyOperation()
} catch {
    Traceway.capture(error)
}`;if(e&&ht(e))switch(e){case"react":return`import { useTraceway } from "@tracewayapp/react";

// In a component using the hook
const { captureException } = useTraceway();
captureException(new Error("Test error"));`;case"svelte":return`import { getTraceway } from "@tracewayapp/svelte";

const { captureException } = getTraceway();
captureException(new Error("Test error"));`;case"vuejs":return`import { useTraceway } from "@tracewayapp/vue";

const { captureException } = useTraceway();
captureException(new Error("Test error"));`;case"jquery":return`import { captureException } from "@tracewayapp/jquery";

captureException(new Error("Test error"));`;case"nextjs":return`import { useTraceway } from "@tracewayapp/react";

// In a client component
"use client";
const { captureException } = useTraceway();
captureException(new Error("Test error"));`;case"react-native":return`import { useTraceway } from "@tracewayapp/react-native";

// In a component using the hook
const { captureException } = useTraceway();
captureException(new Error("Test error"));`;default:return`import { captureException } from "@tracewayapp/${Ua(e)}";

captureException(new Error("Test error"));`}return`r.GET("/testing", func(c *gin.Context) {
    c.AbortWithError(500, traceway.NewStackTraceErrorf("testing"))
})`}function Ua(e){switch(e){case"react":return"react";case"svelte":return"svelte";case"vuejs":return"vue";case"nextjs":return"next";case"nestjs":return"nest";case"express":return"express";case"remix":return"remix";case"jquery":return"jquery";case"react-native":return"react-native";default:return"react"}}function Mn(e){return{gin:"Gin",fiber:"Fiber",chi:"Chi",fasthttp:"FastHTTP",stdlib:"Standard Library (net/http)",custom:"Custom Integration",react:"React",svelte:"Svelte",vuejs:"Vue.js",nextjs:"Next.js",nestjs:"NestJS",express:"Express",remix:"Remix",jquery:"jQuery","react-native":"React Native",hono:"Hono",cloudflare:"Cloudflare",opentelemetry:"OpenTelemetry",symfony:"Symfony",laravel:"Laravel",django:"Django",flutter:"Flutter",android:"Android",ios:"iOS"}[e]||e}function Ln(e){return e==="symfony"||e==="laravel"?"php":e==="django"?"python":e==="opentelemetry"?"go":e==="hono"||e==="cloudflare"||e==="flutter"||e==="android"||e==="ios"||ht(e)?"javascript":"go"}const tt=[{id:"collector",label:"Collector",frameworks:[]},{id:"nodejs",label:"Node.js",frameworks:[{id:"express",label:"Express"},{id:"nestjs",label:"NestJS"},{id:"fastify",label:"Fastify"},{id:"nextjs",label:"Next.js"},{id:"koa",label:"Koa"},{id:"other",label:"Other"}]},{id:"go",label:"Go",frameworks:[{id:"gin",label:"Gin"},{id:"echo",label:"Echo"},{id:"chi",label:"Chi"},{id:"fiber",label:"Fiber"},{id:"mux",label:"gorilla/mux"},{id:"nethttp",label:"net/http"}]},{id:"python",label:"Python",frameworks:[{id:"django",label:"Django"},{id:"flask",label:"Flask"},{id:"fastapi",label:"FastAPI"},{id:"other",label:"Other"}]},{id:"java",label:"Java",frameworks:[{id:"agent",label:"Any framework"},{id:"spring",label:"Spring Boot"}]},{id:"dotnet",label:".NET",frameworks:[]},{id:"php",label:"PHP",frameworks:[{id:"symfony",label:"Symfony"},{id:"laravel",label:"Laravel"},{id:"slim",label:"Slim"},{id:"other",label:"Other"}]},{id:"ruby",label:"Ruby",frameworks:[{id:"rails",label:"Rails"},{id:"other",label:"Other"}]},{id:"other",label:"Other",frameworks:[]}];function Bt(e,t,n=[]){return["OTEL_SERVICE_NAME=my-service",`OTEL_EXPORTER_OTLP_ENDPOINT=${e}/api/otel`,`OTEL_EXPORTER_OTLP_HEADERS=Authorization=Bearer ${t}`,...n].join(`
`)}function Ce(e,t,n=[],a=""){return{title:"Configure the Exporter",description:`Set these environment variables in your shell, .env file, or deployment config. The SDK appends /v1/traces and /v1/metrics to the endpoint automatically.${a?" "+a:""}`,code:Bt(e,t,n),codeLanguage:"bash"}}function Fa(e,t){return`exporters:
  otlphttp:
    endpoint: "${e}/api/otel"
    headers:
      Authorization: "Bearer ${t}"

service:
  pipelines:
    traces:
      exporters: [otlphttp]
    metrics:
      exporters: [otlphttp]`}const Ka=`import (
	"context"
	"log"

	"go.opentelemetry.io/otel"
	"go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracehttp"
	"go.opentelemetry.io/otel/propagation"
	sdktrace "go.opentelemetry.io/otel/sdk/trace"
)

func initTracer(ctx context.Context) *sdktrace.TracerProvider {
	exp, err := otlptracehttp.New(ctx)
	if err != nil {
		log.Fatal(err)
	}
	tp := sdktrace.NewTracerProvider(sdktrace.WithBatcher(exp))
	otel.SetTracerProvider(tp)
	otel.SetTextMapPropagator(propagation.TraceContext{})
	return tp
}`,It={gin:{lib:"go.opentelemetry.io/contrib/instrumentation/github.com/gin-gonic/gin/otelgin",snippet:`import "go.opentelemetry.io/contrib/instrumentation/github.com/gin-gonic/gin/otelgin"

r := gin.Default()
r.Use(otelgin.Middleware("my-service"))`},echo:{lib:"go.opentelemetry.io/contrib/instrumentation/github.com/labstack/echo/otelecho",snippet:`import "go.opentelemetry.io/contrib/instrumentation/github.com/labstack/echo/otelecho"

e := echo.New()
e.Use(otelecho.Middleware("my-service"))`},chi:{lib:"github.com/riandyrn/otelchi",snippet:`import "github.com/riandyrn/otelchi"

r := chi.NewRouter()
r.Use(otelchi.Middleware("my-service", otelchi.WithChiRoutes(r)))`,note:"WithChiRoutes lets the middleware resolve the route pattern so endpoints group correctly."},fiber:{lib:"github.com/gofiber/contrib/v3/otel",snippet:`import fiberotel "github.com/gofiber/contrib/v3/otel"

app := fiber.New()
app.Use(fiberotel.Middleware())`,note:"For Fiber v2 use github.com/gofiber/contrib/otelfiber/v2 and otelfiber.Middleware() instead."},mux:{lib:"go.opentelemetry.io/contrib/instrumentation/github.com/gorilla/mux/otelmux",snippet:`import "go.opentelemetry.io/contrib/instrumentation/github.com/gorilla/mux/otelmux"

r := mux.NewRouter()
r.Use(otelmux.Middleware("my-service"))`},nethttp:{lib:"go.opentelemetry.io/contrib/instrumentation/net/http/otelhttp",snippet:`import "go.opentelemetry.io/contrib/instrumentation/net/http/otelhttp"

mux := http.NewServeMux()
mux.Handle("GET /users/{id}", otelhttp.NewHandler(http.HandlerFunc(getUser), "GET /users/{id}"))
http.ListenAndServe(":8080", mux)`,note:"Wrap each route individually with Go 1.22+ method patterns so the route is set on spans and endpoints group by pattern instead of raw URL."}},za="npm install @opentelemetry/api @opentelemetry/auto-instrumentations-node";function yt(e,t,n,a,s){return[{title:"Install the SDK",description:a,code:za,codeLanguage:"bash"},Ce(e,t),{title:"Run with Instrumentation",description:s,code:`node --require @opentelemetry/auto-instrumentations-node/register ${n}`,codeLanguage:"bash"}]}function Ga(e,t,n,a){switch(e){case"collector":return[{title:"Add the Traceway Exporter",description:"Merge this into your OpenTelemetry Collector configuration. Any pipeline that lists the otlphttp exporter will be forwarded to Traceway.",code:Fa(n,a),codeLanguage:"yaml"},{title:"Restart the Collector",description:"Restart the Collector to apply the configuration. Traces and metrics flowing through its pipelines will appear in Traceway."}];case"nodejs":return t==="fastify"?[{title:"Install the SDK",description:"Fastify is instrumented by the @fastify/otel package maintained by the Fastify team.",code:"npm install @opentelemetry/api @opentelemetry/sdk-node @opentelemetry/auto-instrumentations-node @fastify/otel",codeLanguage:"bash"},{title:"Create instrumentation.js",description:"Add this file at the project root.",code:`const { NodeSDK } = require('@opentelemetry/sdk-node');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');
const { FastifyOtelInstrumentation } = require('@fastify/otel');

new NodeSDK({
  instrumentations: [
    getNodeAutoInstrumentations(),
    new FastifyOtelInstrumentation({ registerOnInitialization: true }),
  ],
}).start();`,codeLanguage:"javascript"},Ce(n,a),{title:"Run with Instrumentation",code:"node --require ./instrumentation.js app.js",codeLanguage:"bash"}]:t==="nextjs"?[{title:"Install the SDK",code:"npm install @vercel/otel",codeLanguage:"bash"},{title:"Create instrumentation.ts",description:"Add this file at the project root (next to package.json). Next.js calls register() automatically on startup.",code:`import { registerOTel } from '@vercel/otel'

export function register() {
  registerOTel({ serviceName: 'my-service' })
}`,codeLanguage:"typescript"},Ce(n,a,[],"Start your app normally with next start; no extra flags are needed.")]:t==="nestjs"?yt(n,a,"dist/main.js","Auto-instrumentation captures NestJS routes, status codes, and errors through the default Express adapter with no code changes. If you use the Fastify adapter, follow the Fastify setup instead.","Routes group by pattern automatically."):t==="koa"?yt(n,a,"app.js","Auto-instrumentation captures Koa requests, status codes, and errors with no code changes.","Route patterns are captured when routing with @koa/router."):yt(n,a,"app.js","Auto-instrumentation captures routes, status codes, and errors with no code changes.","For ESM apps, add --experimental-loader=@opentelemetry/instrumentation/hook.mjs and use --import instead of --require.");case"go":{const s=It[t]??It.gin;return[{title:"Install the SDK",code:`go get go.opentelemetry.io/otel go.opentelemetry.io/otel/sdk go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracehttp ${s.lib}`,codeLanguage:"bash"},{title:"Initialize the SDK",description:"Call initTracer at startup and defer tp.Shutdown(ctx) before exit. The exporter reads the environment variables from the next step.",code:Ka,codeLanguage:"go"},{title:"Add the Middleware",description:s.note,code:s.snippet,codeLanguage:"go"},Ce(n,a)]}case"python":{const s={django:{cmd:"opentelemetry-instrument python manage.py runserver --noreload",note:"The --noreload flag is required with runserver; the autoreloader breaks instrumentation. It is not needed under gunicorn or other production servers."},flask:{cmd:"opentelemetry-instrument flask run"},fastapi:{cmd:"opentelemetry-instrument uvicorn main:app",note:"Avoid --reload and --workers with zero-code instrumentation; for multi-worker production use gunicorn with uvicorn workers."},other:{cmd:"opentelemetry-instrument python app.py"}},g=s[t]??s.other;return[{title:"Install the SDK",description:"opentelemetry-bootstrap detects your installed packages and adds the matching instrumentation.",code:`pip install opentelemetry-distro opentelemetry-exporter-otlp-proto-http
opentelemetry-bootstrap -a install`,codeLanguage:"bash"},Ce(n,a,["OTEL_EXPORTER_OTLP_PROTOCOL=http/protobuf"],"The protocol variable is required; the Python SDK defaults to gRPC."),{title:"Run with Instrumentation",description:g.note,code:g.cmd,codeLanguage:"bash"}]}case"java":return t==="spring"?[{title:"Add the Starter",description:"Add the OpenTelemetry Spring Boot starter to your Gradle build (a Maven dependency works the same way).",code:`implementation(platform("io.opentelemetry.instrumentation:opentelemetry-instrumentation-bom:2.28.1"))
implementation("io.opentelemetry.instrumentation:opentelemetry-spring-boot-starter")`,codeLanguage:"gradle"},Ce(n,a,[],"Start your app normally; the starter reads these variables and reports routes, status codes, and exceptions.")]:[{title:"Download the Java Agent",description:"The agent instruments Spring, JAX-RS, and most Java frameworks with zero code changes.",code:"curl -L -O https://github.com/open-telemetry/opentelemetry-java-instrumentation/releases/latest/download/opentelemetry-javaagent.jar",codeLanguage:"bash"},Ce(n,a),{title:"Run with the Agent",code:"java -javaagent:./opentelemetry-javaagent.jar -jar myapp.jar",codeLanguage:"bash"}];case"dotnet":return[{title:"Install the Packages",code:`dotnet add package OpenTelemetry.Extensions.Hosting
dotnet add package OpenTelemetry.Instrumentation.AspNetCore
dotnet add package OpenTelemetry.Exporter.OpenTelemetryProtocol`,codeLanguage:"bash"},{title:"Add to Program.cs",description:"Keep AddOtlpExporter() empty so the exporter is driven entirely by the environment variables in the next step.",code:`builder.Services.AddOpenTelemetry()
    .WithTracing(t => t
        .AddAspNetCoreInstrumentation()
        .AddOtlpExporter());`,codeLanguage:"csharp"},Ce(n,a,["OTEL_EXPORTER_OTLP_PROTOCOL=http/protobuf"],"The protocol variable is required; the .NET exporter defaults to gRPC.")];case"php":{const g={symfony:" open-telemetry/opentelemetry-auto-symfony",laravel:" open-telemetry/opentelemetry-auto-laravel",slim:" open-telemetry/opentelemetry-auto-slim",other:""}[t]??"";return[{title:"Install the SDK",description:"Auto-instrumentation needs the opentelemetry PECL extension; enable it with extension=opentelemetry in php.ini."+(t==="other"?" Find auto-instrumentation packages for your framework in the OpenTelemetry registry.":""),code:`pecl install opentelemetry
composer require open-telemetry/sdk open-telemetry/exporter-otlp php-http/guzzle7-adapter${g}`,codeLanguage:"bash",link:t==="other"?{label:"Browse PHP instrumentation packages",href:"https://opentelemetry.io/ecosystem/registry/?language=php&component=instrumentation"}:void 0},Ce(n,a,["OTEL_PHP_AUTOLOAD_ENABLED=true"],"These must be real process environment variables; the extension does not read framework .env files. Use env[...] in php-fpm pool config or SetEnv in Apache.")]}case"ruby":return t==="rails"?[{title:"Install the Gems",code:"bundle add opentelemetry-sdk opentelemetry-exporter-otlp opentelemetry-instrumentation-rails",codeLanguage:"bash"},{title:"Create the Initializer",description:"Add config/initializers/opentelemetry.rb.",code:`require 'opentelemetry/sdk'
require 'opentelemetry/exporter/otlp'
require 'opentelemetry/instrumentation/rails'

OpenTelemetry::SDK.configure do |c|
  c.use 'OpenTelemetry::Instrumentation::Rails'
end`,codeLanguage:"ruby"},Ce(n,a)]:[{title:"Install the Gems",code:"bundle add opentelemetry-sdk opentelemetry-exporter-otlp opentelemetry-instrumentation-all",codeLanguage:"bash"},{title:"Configure the SDK",description:"Run this once at startup, before your app starts handling requests.",code:`require 'opentelemetry/sdk'
require 'opentelemetry/exporter/otlp'
require 'opentelemetry/instrumentation/all'

OpenTelemetry::SDK.configure do |c|
  c.use_all
end`,codeLanguage:"ruby"},Ce(n,a)];default:return[{title:"Configure any OpenTelemetry SDK",description:"Any language with an OTLP/HTTP exporter works. Set these environment variables; the protocol variable matters for SDKs that default to gRPC. Make sure http.route is set on root server spans so endpoints group by route pattern, and use SpanKind CONSUMER for background jobs.",code:Bt(n,a,["OTEL_EXPORTER_OTLP_PROTOCOL=http/protobuf"]),codeLanguage:"bash",link:{label:"View all supported languages",href:"https://opentelemetry.io/docs/languages/"}}]}}const Ut="traceway_setup_mode",Ft="traceway_otel_language",Kt="traceway_otel_framework";function kn(){try{const e=localStorage.getItem(Ut);if(e==="ai"||e==="manual")return e}catch{}return"ai"}function Ha(e){try{localStorage.setItem(Ut,e)}catch{}}function qa(){try{const e=localStorage.getItem(Ft);if(e&&tt.some(t=>t.id===e))return e}catch{}return tt[0].id}function Wa(e){try{localStorage.setItem(Ft,e)}catch{}}function Za(){try{return localStorage.getItem(Kt)}catch{}return null}function Ya(e){try{localStorage.setItem(Kt,e)}catch{}}var Xa=h("<!> <!>",1);function Pn(e,t){Qe(t,!0);const n="-mb-px rounded-none border-b-2 border-transparent bg-transparent px-0 pb-2.5 pt-0 text-sm font-medium text-muted-foreground shadow-none data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none";function a(i){(i==="ai"||i==="manual")&&(Ha(i),t.onModeChange(i))}var s=L(),g=l(s);te(g,()=>mt,(i,v)=>{v(i,{get value(){return t.mode},onValueChange:a,children:(_,b)=>{var y=L(),x=l(y);te(x,()=>pt,(p,T)=>{T(p,{class:"h-auto w-full justify-start gap-4 rounded-none border-b bg-transparent p-0",children:(m,c)=>{var E=Xa(),A=l(E);te(A,()=>ct,(w,S)=>{S(w,{value:"ai",class:n,children:(C,N)=>{$();var k=Me("AI");o(C,k)},$$slots:{default:!0}})});var R=f(A,2);te(R,()=>ct,(w,S)=>{S(w,{value:"manual",class:n,children:(C,N)=>{$();var k=Me("Manual");o(C,k)},$$slots:{default:!0}})}),o(m,E)},$$slots:{default:!0}})}),o(_,y)},$$slots:{default:!0}})}),o(e,s),je()}const Va="npx skills add tracewayapp/traceway";function Qa(e,t,n=null){const a=[{text:"/traceway-setup with token ",bold:!1},{text:t,bold:!0},{text:" and url ",bold:!1},{text:e,bold:!0}];return n&&a.push({text:" and source map upload token ",bold:!1},{text:n,bold:!0}),a}var ja=h("<!> Copied!",1),Ja=h("<!> Copy",1),er=h('<div class="relative"><div class="absolute top-2 right-2 z-10"><!></div> <div><!></div></div>');function Tt(e,t){Qe(t,!0);let n=da(t,"wrap",3,!1),a=le(!1);async function s(){await navigator.clipboard.writeText(t.code),M(a,!0),setTimeout(()=>M(a,!1),2e3)}var g=er(),i=u(g),v=u(i);be(v,{variant:"outline",size:"sm",onclick:s,children:(y,x)=>{var p=L(),T=l(p);{var m=E=>{var A=ja(),R=l(A);Ie(R,{class:"mr-2 h-4 w-4 text-green-500"}),$(),o(E,A)},c=E=>{var A=Ja(),R=l(A);$e(R,{class:"mr-2 h-4 w-4"}),$(),o(E,A)};D(T,E=>{r(a)?E(m):E(c,!1)})}o(y,p)},$$slots:{default:!0}}),d(i);var _=f(i,2),b=u(_);Ze(b,{get language(){return t.language},get code(){return t.code}}),d(_),d(g),j(()=>We(_,1,`overflow-x-auto rounded-lg text-sm ${n()?"wrap-code":""} ${Ye.isDark?"dark-code":"light-code"}`)),o(e,g),je()}var tr=h("<!> Copied!",1),ar=h("<!> Copy",1),rr=h('<span class="break-all text-muted-foreground"> </span>'),nr=h('<div class="relative"><div class="absolute top-2 right-2 z-10"><!></div> <code class="block rounded-lg bg-muted py-3 pr-24 pl-4 font-mono text-sm break-words whitespace-pre-wrap text-foreground"></code></div>');function or(e,t){Qe(t,!0);const n=G(()=>t.parts.map(b=>b.text).join(""));let a=le(!1);async function s(){await navigator.clipboard.writeText(r(n)),M(a,!0),setTimeout(()=>M(a,!1),2e3)}var g=nr(),i=u(g),v=u(i);be(v,{variant:"outline",size:"sm",onclick:s,children:(b,y)=>{var x=L(),p=l(x);{var T=c=>{var E=tr(),A=l(E);Ie(A,{class:"mr-2 h-4 w-4 text-green-500"}),$(),o(c,E)},m=c=>{var E=ar(),A=l(E);$e(A,{class:"mr-2 h-4 w-4"}),$(),o(c,E)};D(p,c=>{r(a)?c(T):c(m,!1)})}o(b,x)},$$slots:{default:!0}}),d(i);var _=f(i,2);it(_,21,()=>t.parts,pa,(b,y)=>{var x=L(),p=l(x);{var T=c=>{var E=rr(),A=u(E,!0);d(E),j(()=>ne(A,r(y).text)),o(c,E)},m=c=>{var E=Me();j(()=>ne(E,r(y).text)),o(c,E)};D(p,c=>{r(y).bold?c(T):c(m,!1)})}o(b,x)}),d(_),d(g),o(e,g),je()}var sr=h(`<div class="rounded-md border bg-card"><div class="border-b px-4 py-3"><div class="flex items-center gap-3"><div class="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">1</div> <h3 class="font-semibold">Install the Traceway Skill</h3></div> <p class="mt-1 ml-9 text-sm text-muted-foreground">Add the Traceway setup skill to your coding agent. Works with Claude Code, Cursor, and any
			agent that supports agent skills.</p></div> <div class="p-4"><!></div></div> <div class="rounded-md border bg-card"><div class="border-b px-4 py-3"><div class="flex items-center gap-3"><div class="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">2</div> <h3 class="font-semibold">Run the Setup Prompt</h3></div> <p class="mt-1 ml-9 text-sm text-muted-foreground"> </p></div> <div class="p-4"><!></div></div>`,1);function Dn(e,t){Qe(t,!0);const n=G(()=>at.currentProject?.sourceMapToken??null),a=G(()=>Qa(t.backendUrl,t.token,r(n)));var s=sr(),g=l(s),i=f(u(g),2),v=u(i);Tt(v,{get code(){return Va},get language(){return Xe}}),d(i),d(g);var _=f(g,2),b=u(_),y=f(u(b),2),x=u(y);d(y),d(b);var p=f(b,2),T=u(p);or(T,{get parts(){return r(a)}}),d(p),d(_),j(()=>ne(x,`Paste this prompt into your agent. Your instance URL and project token are already filled
			in${r(n)?", along with your source map upload token":""}.`)),o(e,s),je()}const gt="[A-Za-z$_][0-9A-Za-z$_]*",zt=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],Gt=["true","false","null","undefined","NaN","Infinity"],Ht=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],qt=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Wt=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],Zt=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],Yt=[].concat(Wt,Ht,qt);function ir(e){const t=e.regex,n=(O,{after:B})=>{const Y="</"+O[0].slice(1);return O.input.indexOf(Y,B)!==-1},a=gt,s={begin:"<>",end:"</>"},g=/<[A-Za-z0-9\\._:-]+\s*\/>/,i={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(O,B)=>{const Y=O[0].length+O.index,re=O.input[Y];if(re==="<"||re===","){B.ignoreMatch();return}re===">"&&(n(O,{after:Y})||B.ignoreMatch());let ee;const se=O.input.substring(Y);if(ee=se.match(/^\s*=/)){B.ignoreMatch();return}if((ee=se.match(/^\s+extends\s+/))&&ee.index===0){B.ignoreMatch();return}}},v={$pattern:gt,keyword:zt,literal:Gt,built_in:Yt,"variable.language":Zt},_="[0-9](_?[0-9])*",b=`\\.(${_})`,y="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",x={className:"number",variants:[{begin:`(\\b(${y})((${b})|\\.)?|(${b}))[eE][+-]?(${_})\\b`},{begin:`\\b(${y})\\b((${b})\\b|\\.)?|(${b})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},p={className:"subst",begin:"\\$\\{",end:"\\}",keywords:v,contains:[]},T={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,p],subLanguage:"xml"}},m={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,p],subLanguage:"css"}},c={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,p],subLanguage:"graphql"}},E={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,p]},R={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:a+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},w=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,T,m,c,E,{match:/\$\d+/},x];p.contains=w.concat({begin:/\{/,end:/\}/,keywords:v,contains:["self"].concat(w)});const S=[].concat(R,p.contains),C=S.concat([{begin:/(\s*)\(/,end:/\)/,keywords:v,contains:["self"].concat(S)}]),N={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:v,contains:C},k={variants:[{match:[/class/,/\s+/,a,/\s+/,/extends/,/\s+/,t.concat(a,"(",t.concat(/\./,a),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,a],scope:{1:"keyword",3:"title.class"}}]},P={relevance:0,match:t.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Ht,...qt]}},J={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},H={variants:[{match:[/function/,/\s+/,a,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[N],illegal:/%/},de={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function Te(O){return t.concat("(?!",O.join("|"),")")}const ue={match:t.concat(/\b/,Te([...Wt,"super","import"].map(O=>`${O}\\s*\\(`)),a,t.lookahead(/\s*\(/)),className:"title.function",relevance:0},Z={begin:t.concat(/\./,t.lookahead(t.concat(a,/(?![0-9A-Za-z$_(])/))),end:a,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},U={match:[/get|set/,/\s+/,a,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},N]},q="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",ae={match:[/const|var|let/,/\s+/,a,/\s*/,/=\s*/,/(async\s*)?/,t.lookahead(q)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[N]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:v,exports:{PARAMS_CONTAINS:C,CLASS_REFERENCE:P},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),J,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,T,m,c,E,R,{match:/\$\d+/},x,P,{scope:"attr",match:a+t.lookahead(":"),relevance:0},ae,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[R,e.REGEXP_MODE,{className:"function",begin:q,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:v,contains:C}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:s.begin,end:s.end},{match:g},{begin:i.begin,"on:begin":i.isTrulyOpeningTag,end:i.end}],subLanguage:"xml",contains:[{begin:i.begin,end:i.end,skip:!0,contains:["self"]}]}]},H,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[N,e.inherit(e.TITLE_MODE,{begin:a,className:"title.function"})]},{match:/\.\.\./,relevance:0},Z,{match:"\\$"+a,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[N]},ue,de,k,U,{match:/\$[(.]/}]}}function cr(e){const t=e.regex,n=ir(e),a=gt,s=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],g={begin:[/namespace/,/\s+/,e.IDENT_RE],beginScope:{1:"keyword",3:"title.class"}},i={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:s},contains:[n.exports.CLASS_REFERENCE]},v={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},_=["type","interface","public","private","protected","implements","declare","abstract","readonly","enum","override","satisfies"],b={$pattern:gt,keyword:zt.concat(_),literal:Gt,built_in:Yt.concat(s),"variable.language":Zt},y={className:"meta",begin:"@"+a},x=(c,E,A)=>{const R=c.contains.findIndex(w=>w.label===E);if(R===-1)throw new Error("can not find mode to replace");c.contains.splice(R,1,A)};Object.assign(n.keywords,b),n.exports.PARAMS_CONTAINS.push(y);const p=n.contains.find(c=>c.scope==="attr"),T=Object.assign({},p,{match:t.concat(a,t.lookahead(/\s*\?:/))});n.exports.PARAMS_CONTAINS.push([n.exports.CLASS_REFERENCE,p,T]),n.contains=n.contains.concat([y,g,i,T]),x(n,"shebang",e.SHEBANG()),x(n,"use_strict",v);const m=n.contains.find(c=>c.label==="func.def");return m.relevance=0,Object.assign(n,{name:"TypeScript",aliases:["ts","tsx","mts","cts"]}),n}const Xt={name:"typescript",register:cr};function lr(e){return{name:"Gradle",case_insensitive:!0,keywords:["task","project","allprojects","subprojects","artifacts","buildscript","configurations","dependencies","repositories","sourceSets","description","delete","from","into","include","exclude","source","classpath","destinationDir","includes","options","sourceCompatibility","targetCompatibility","group","flatDir","doLast","doFirst","flatten","todir","fromdir","ant","def","abstract","break","case","catch","continue","default","do","else","extends","final","finally","for","if","implements","instanceof","native","new","private","protected","public","return","static","switch","synchronized","throw","throws","transient","try","volatile","while","strictfp","package","import","false","null","super","this","true","antlrtask","checkstyle","codenarc","copy","boolean","byte","char","class","double","float","int","interface","long","short","void","compile","runTime","file","fileTree","abs","any","append","asList","asWritable","call","collect","compareTo","count","div","dump","each","eachByte","eachFile","eachLine","every","find","findAll","flatten","getAt","getErr","getIn","getOut","getText","grep","immutable","inject","inspect","intersect","invokeMethods","isCase","join","leftShift","minus","multiply","newInputStream","newOutputStream","newPrintWriter","newReader","newWriter","next","plus","pop","power","previous","print","println","push","putAt","read","readBytes","readLines","reverse","reverseEach","round","size","sort","splitEachLine","step","subMap","times","toInteger","toList","tokenize","upto","waitForOrKill","withPrintWriter","withReader","withStream","withWriter","withWriterAppend","write","writeLine"],contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.NUMBER_MODE,e.REGEXP_MODE]}}const dr={name:"gradle",register:lr};function ur(e){const t=["bool","byte","char","decimal","delegate","double","dynamic","enum","float","int","long","nint","nuint","object","sbyte","short","string","ulong","uint","ushort"],n=["public","private","protected","static","internal","protected","abstract","async","extern","override","unsafe","virtual","new","sealed","partial"],a=["default","false","null","true"],s=["abstract","as","base","break","case","catch","class","const","continue","do","else","event","explicit","extern","finally","fixed","for","foreach","goto","if","implicit","in","interface","internal","is","lock","namespace","new","operator","out","override","params","private","protected","public","readonly","record","ref","return","scoped","sealed","sizeof","stackalloc","static","struct","switch","this","throw","try","typeof","unchecked","unsafe","using","virtual","void","volatile","while"],g=["add","alias","and","ascending","args","async","await","by","descending","dynamic","equals","file","from","get","global","group","init","into","join","let","nameof","not","notnull","on","or","orderby","partial","record","remove","required","scoped","select","set","unmanaged","value|0","var","when","where","with","yield"],i={keyword:s.concat(g),built_in:t,literal:a},v=e.inherit(e.TITLE_MODE,{begin:"[a-zA-Z](\\.?\\w)*"}),_={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},b={className:"string",begin:/"""("*)(?!")(.|\n)*?"""\1/,relevance:1},y={className:"string",begin:'@"',end:'"',contains:[{begin:'""'}]},x=e.inherit(y,{illegal:/\n/}),p={className:"subst",begin:/\{/,end:/\}/,keywords:i},T=e.inherit(p,{illegal:/\n/}),m={className:"string",begin:/\$"/,end:'"',illegal:/\n/,contains:[{begin:/\{\{/},{begin:/\}\}/},e.BACKSLASH_ESCAPE,T]},c={className:"string",begin:/\$@"/,end:'"',contains:[{begin:/\{\{/},{begin:/\}\}/},{begin:'""'},p]},E=e.inherit(c,{illegal:/\n/,contains:[{begin:/\{\{/},{begin:/\}\}/},{begin:'""'},T]});p.contains=[c,m,y,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,_,e.C_BLOCK_COMMENT_MODE],T.contains=[E,m,x,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,_,e.inherit(e.C_BLOCK_COMMENT_MODE,{illegal:/\n/})];const A={variants:[b,c,m,y,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},R={begin:"<",end:">",contains:[{beginKeywords:"in out"},v]},w=e.IDENT_RE+"(<"+e.IDENT_RE+"(\\s*,\\s*"+e.IDENT_RE+")*>)?(\\[\\])?",S={begin:"@"+e.IDENT_RE,relevance:0};return{name:"C#",aliases:["cs","c#"],keywords:i,illegal:/::/,contains:[e.COMMENT("///","$",{returnBegin:!0,contains:[{className:"doctag",variants:[{begin:"///",relevance:0},{begin:"<!--|-->"},{begin:"</?",end:">"}]}]}),e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"meta",begin:"#",end:"$",keywords:{keyword:"if else elif endif define undef warning error line region endregion pragma checksum"}},A,_,{beginKeywords:"class interface",relevance:0,end:/[{;=]/,illegal:/[^\s:,]/,contains:[{beginKeywords:"where class"},v,R,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{beginKeywords:"namespace",relevance:0,end:/[{;=]/,illegal:/[^\s:]/,contains:[v,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{beginKeywords:"record",relevance:0,end:/[{;=]/,illegal:/[^\s:]/,contains:[v,R,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{className:"meta",begin:"^\\s*\\[(?=[\\w])",excludeBegin:!0,end:"\\]",excludeEnd:!0,contains:[{className:"string",begin:/"/,end:/"/}]},{beginKeywords:"new return throw await else",relevance:0},{className:"function",begin:"("+w+"\\s+)+"+e.IDENT_RE+"\\s*(<[^=]+>\\s*)?\\(",returnBegin:!0,end:/\s*[{;=]/,excludeEnd:!0,keywords:i,contains:[{beginKeywords:n.join(" "),relevance:0},{begin:e.IDENT_RE+"\\s*(<[^=]+>\\s*)?\\(",returnBegin:!0,contains:[e.TITLE_MODE,R],relevance:0},{match:/\(\)/},{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,relevance:0,contains:[A,_,e.C_BLOCK_COMMENT_MODE]},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},S]}}const pr={name:"csharp",register:ur};function mr(e){const t=e.regex,n="([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)",a=t.either(/\b([A-Z]+[a-z0-9]+)+/,/\b([A-Z]+[a-z0-9]+)+[A-Z]+/),s=t.concat(a,/(::\w+)*/),i={"variable.constant":["__FILE__","__LINE__","__ENCODING__"],"variable.language":["self","super"],keyword:["alias","and","begin","BEGIN","break","case","class","defined","do","else","elsif","end","END","ensure","for","if","in","module","next","not","or","redo","require","rescue","retry","return","then","undef","unless","until","when","while","yield",...["include","extend","prepend","public","private","protected","raise","throw"]],built_in:["proc","lambda","attr_accessor","attr_reader","attr_writer","define_method","private_constant","module_function"],literal:["true","false","nil"]},v={className:"doctag",begin:"@[A-Za-z]+"},_={begin:"#<",end:">"},b=[e.COMMENT("#","$",{contains:[v]}),e.COMMENT("^=begin","^=end",{contains:[v],relevance:10}),e.COMMENT("^__END__",e.MATCH_NOTHING_RE)],y={className:"subst",begin:/#\{/,end:/\}/,keywords:i},x={className:"string",contains:[e.BACKSLASH_ESCAPE,y],variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/`/,end:/`/},{begin:/%[qQwWx]?\(/,end:/\)/},{begin:/%[qQwWx]?\[/,end:/\]/},{begin:/%[qQwWx]?\{/,end:/\}/},{begin:/%[qQwWx]?</,end:/>/},{begin:/%[qQwWx]?\//,end:/\//},{begin:/%[qQwWx]?%/,end:/%/},{begin:/%[qQwWx]?-/,end:/-/},{begin:/%[qQwWx]?\|/,end:/\|/},{begin:/\B\?(\\\d{1,3})/},{begin:/\B\?(\\x[A-Fa-f0-9]{1,2})/},{begin:/\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/},{begin:/\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/},{begin:/\B\?\\(c|C-)[\x20-\x7e]/},{begin:/\B\?\\?\S/},{begin:t.concat(/<<[-~]?'?/,t.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)),contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,contains:[e.BACKSLASH_ESCAPE,y]})]}]},p="[1-9](_?[0-9])*|0",T="[0-9](_?[0-9])*",m={className:"number",relevance:0,variants:[{begin:`\\b(${p})(\\.(${T}))?([eE][+-]?(${T})|r)?i?\\b`},{begin:"\\b0[dD][0-9](_?[0-9])*r?i?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*r?i?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*r?i?\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b"},{begin:"\\b0(_?[0-7])+r?i?\\b"}]},c={variants:[{match:/\(\)/},{className:"params",begin:/\(/,end:/(?=\))/,excludeBegin:!0,endsParent:!0,keywords:i}]},N=[x,{variants:[{match:[/class\s+/,s,/\s+<\s+/,s]},{match:[/\b(class|module)\s+/,s]}],scope:{2:"title.class",4:"title.class.inherited"},keywords:i},{match:[/(include|extend)\s+/,s],scope:{2:"title.class"},keywords:i},{relevance:0,match:[s,/\.new[. (]/],scope:{1:"title.class"}},{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"},{relevance:0,match:a,scope:"title.class"},{match:[/def/,/\s+/,n],scope:{1:"keyword",3:"title.function"},contains:[c]},{begin:e.IDENT_RE+"::"},{className:"symbol",begin:e.UNDERSCORE_IDENT_RE+"(!|\\?)?:",relevance:0},{className:"symbol",begin:":(?!\\s)",contains:[x,{begin:n}],relevance:0},m,{className:"variable",begin:"(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"},{className:"params",begin:/\|(?!=)/,end:/\|/,excludeBegin:!0,excludeEnd:!0,relevance:0,keywords:i},{begin:"("+e.RE_STARTERS_RE+"|unless)\\s*",keywords:"unless",contains:[{className:"regexp",contains:[e.BACKSLASH_ESCAPE,y],illegal:/\n/,variants:[{begin:"/",end:"/[a-z]*"},{begin:/%r\{/,end:/\}[a-z]*/},{begin:"%r\\(",end:"\\)[a-z]*"},{begin:"%r!",end:"![a-z]*"},{begin:"%r\\[",end:"\\][a-z]*"}]}].concat(_,b),relevance:0}].concat(_,b);y.contains=N,c.contains=N;const H=[{begin:/^\s*=>/,starts:{end:"$",contains:N}},{className:"meta.prompt",begin:"^("+"[>?]>"+"|"+"[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]"+"|"+"(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>"+")(?=[ ])",starts:{end:"$",keywords:i,contains:N}}];return b.unshift(_),{name:"Ruby",aliases:["rb","gemspec","podspec","thor","irb"],keywords:i,illegal:/\/\*/,contains:[e.SHEBANG({binary:"ruby"})].concat(H).concat(b).concat(N)}}const gr={name:"ruby",register:mr};function vr(e){const t="true false yes no null",n="[\\w#;/?:@&=+$,.~*'()[\\]]+",a={className:"attr",variants:[{begin:/[\w*@][\w*@ :()\./-]*:(?=[ \t]|$)/},{begin:/"[\w*@][\w*@ :()\./-]*":(?=[ \t]|$)/},{begin:/'[\w*@][\w*@ :()\./-]*':(?=[ \t]|$)/}]},s={className:"template-variable",variants:[{begin:/\{\{/,end:/\}\}/},{begin:/%\{/,end:/\}/}]},g={className:"string",relevance:0,begin:/'/,end:/'/,contains:[{match:/''/,scope:"char.escape",relevance:0}]},i={className:"string",relevance:0,variants:[{begin:/"/,end:/"/},{begin:/\S+/}],contains:[e.BACKSLASH_ESCAPE,s]},v=e.inherit(i,{variants:[{begin:/'/,end:/'/,contains:[{begin:/''/,relevance:0}]},{begin:/"/,end:/"/},{begin:/[^\s,{}[\]]+/}]}),p={className:"number",begin:"\\b"+"[0-9]{4}(-[0-9][0-9]){0,2}"+"([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?"+"(\\.[0-9]*)?"+"([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?"+"\\b"},T={end:",",endsWithParent:!0,excludeEnd:!0,keywords:t,relevance:0},m={begin:/\{/,end:/\}/,contains:[T],illegal:"\\n",relevance:0},c={begin:"\\[",end:"\\]",contains:[T],illegal:"\\n",relevance:0},E=[a,{className:"meta",begin:"^---\\s*$",relevance:10},{className:"string",begin:"[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"},{begin:"<%[%=-]?",end:"[%-]?%>",subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:"!\\w+!"+n},{className:"type",begin:"!<"+n+">"},{className:"type",begin:"!"+n},{className:"type",begin:"!!"+n},{className:"meta",begin:"&"+e.UNDERSCORE_IDENT_RE+"$"},{className:"meta",begin:"\\*"+e.UNDERSCORE_IDENT_RE+"$"},{className:"bullet",begin:"-(?=[ ]|$)",relevance:0},e.HASH_COMMENT_MODE,{beginKeywords:t,keywords:{literal:t}},p,{className:"number",begin:e.C_NUMBER_RE+"\\b",relevance:0},m,c,g,i],A=[...E];return A.pop(),A.push(v),T.contains=A,{name:"YAML",case_insensitive:!0,aliases:["yml"],contains:E}}const Vt={name:"yaml",register:vr};var _r=h("<!> Regenerate",1),fr=h("<!> Copied!",1),br=h("<!> Copy",1),yr=h("<!> Copied!",1),Er=h("<!> Copy",1),hr=h(`<div><p class="mb-2 text-sm font-medium">Step 1: Build with obfuscation enabled</p> <div class="relative"><div class="absolute top-2 right-2 z-10"><!></div> <div><!></div></div> <p class="mt-2 text-xs text-muted-foreground">This writes a per-architecture .symbols file into build/symbols. The example builds an
					Android APK; other targets emit their own symbol files in the same directory.</p></div> <div><p class="mb-2 text-sm font-medium">Step 2: Upload the symbols after each release build</p> <div class="relative"><div class="absolute top-2 right-2 z-10"><!></div> <div><!></div></div> <p class="mt-2 text-xs text-muted-foreground">Run from your project root after each release. The uploader auto-discovers build/symbols
					and pushes every architecture in one go; symbols are unique per build, so re-upload on
					each release. In CI, pass the token as <code class="font-mono">TRACEWAY_UPLOAD_TOKEN</code> instead of the flag.</p></div>`,1),Tr=h("<!> Copied!",1),wr=h("<!> Copy",1),Sr=h("<!> Copied!",1),xr=h("<!> Copy",1),Ar=h(`<div><p class="mb-2 text-sm font-medium">Step 1: Build an archive with dSYMs</p> <div class="relative"><div class="absolute top-2 right-2 z-10"><!></div> <div><!></div></div> <p class="mt-2 text-xs text-muted-foreground">Release builds emit a .dSYM bundle per architecture under the archive's dSYMs directory.
					Replace MyApp with your scheme name.</p></div> <div><p class="mb-2 text-sm font-medium">Step 2: Upload the dSYM after each release build</p> <div class="relative"><div class="absolute top-2 right-2 z-10"><!></div> <div><!></div></div> <p class="mt-2 text-xs text-muted-foreground">Upload the Mach-O DWARF inside the .dSYM bundle. Symbols are keyed by build UUID, so
					re-upload on each release.</p></div>`,1),Or=h("<!> Copied!",1),Rr=h("<!> Copy",1),Nr=h("<!> Copied!",1),Cr=h("<!> Copy",1),Ir=h('<div><p class="mb-2 text-sm font-medium">Step 1: Install the bundler plugin</p> <div class="relative"><div class="absolute top-2 right-2 z-10"><!></div> <div><!></div></div></div> <div><p class="mb-2 text-sm font-medium">Step 2: Add the plugin to your bundler</p> <!> <p class="mb-2 font-mono text-xs text-muted-foreground"> </p> <div class="relative"><div class="absolute top-2 right-2 z-10"><!></div> <div><!></div></div></div>',1),$r=h("<!> Copied!",1),Mr=h("<!> Copy",1),Lr=h('<!> <div><p class="mb-2 text-sm font-medium"> </p> <div class="relative"><div class="absolute top-2 right-2 z-10"><!></div> <div><!></div></div></div>',1),kr=h('<div class="space-y-6"><div><p class="mb-2 text-sm font-medium">Upload Token</p> <div class="flex items-center gap-2"><code class="flex-1 rounded-md bg-muted px-3 py-2 font-mono text-sm break-all"> </code> <!> <!></div></div> <!></div>'),Pr=h('<p class="text-sm text-muted-foreground"> </p>'),Dr=h('<p class="text-sm text-muted-foreground">Plain release builds already report readable traces. Only obfuscated builds (<code class="rounded bg-muted px-1 py-0.5 font-mono text-xs">--obfuscate</code>) need this: generate a token, then upload your <code class="rounded bg-muted px-1 py-0.5 font-mono text-xs">.symbols</code> after each release to resolve their stack traces. <a href="https://docs.tracewayapp.com/client/flutter" target="_blank" rel="noopener noreferrer" class="underline hover:text-foreground">Flutter docs</a></p>'),Br=h(`<p class="text-sm text-muted-foreground">Release crashes report against stripped machine code. Generate a token, then upload your <code class="rounded bg-muted px-1 py-0.5 font-mono text-xs">.dSYM</code> after each release
				to resolve their stack traces. <a href="https://docs.tracewayapp.com/client/ios" target="_blank" rel="noopener noreferrer" class="underline hover:text-foreground">iOS docs</a></p>`),Ur=h('<p class="text-sm text-muted-foreground"> </p>'),Fr=h("<!> Generating...",1),Kr=h("<!> Generate Upload Token",1),zr=h('<div class="flex items-center justify-between gap-4"><!> <!></div>'),Gr=h("<!> <!>",1),Hr=h("<!> <!>",1),qr=h(`<!> <div class="rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2"><p class="text-sm"><span class="font-semibold text-destructive">Warning:</span> <span class="text-destructive/90">Any build pipeline or CI job still using the current token will fail to upload source
					maps until it is updated with the new token.</span></p></div> <!>`,1),Wr=h("<!> <!>",1);function Zr(e,t){Qe(t,!0);const n={vite:{label:"Vite",file:"vite.config.ts",directory:"dist/assets",language:Xt,code:`import { defineConfig } from "vite";
import { tracewayDebugIds } from "@tracewayapp/bundler-plugin/vite";

export default defineConfig({
  build: {
    sourcemap: true,
  },
  plugins: [tracewayDebugIds()],
});`},rollup:{label:"Rollup",file:"rollup.config.js",directory:"dist",language:Et,code:`import { tracewayDebugIds } from "@tracewayapp/bundler-plugin/rollup";

export default {
  output: {
    sourcemap: true,
  },
  plugins: [tracewayDebugIds()],
};`},webpack:{label:"webpack",file:"webpack.config.js",directory:"dist",language:Et,code:`const {
  TracewayDebugIdsWebpackPlugin,
} = require("@tracewayapp/bundler-plugin/webpack");

module.exports = {
  devtool: "source-map",
  plugins: [new TracewayDebugIdsWebpackPlugin()],
};`}};let a=le("vite"),s=le(!1),g=le(!1),i=le(!1),v=le(!1),_=le(!1),b=le(!1),y=le(!1),x=le(!1),p=le(!1);const T="npm install -D @tracewayapp/bundler-plugin",m=G(()=>at.currentProject),c=G(()=>r(m)?.sourceMapToken??null),E=G(()=>Mt.getRoleForOrganization(r(m)?.organizationId??0)==="readonly"),A=G(()=>r(m)?.framework==="flutter"),R=G(()=>r(m)?.framework==="ios"),w=G(()=>r(A)||r(R)?"debug symbols":"source maps"),S=G(()=>r(m)?.framework!=="react-native"),C=G(()=>r(m)&&r(c)?`npx @tracewayapp/sourcemap-upload \\
  --url ${r(m).backendUrl} \\
  --token ${r(c)} \\
  --directory ${r(S)?n[r(a)].directory:"dist"}`:""),N="flutter build apk --release --obfuscate --split-debug-info=build/symbols",k=G(()=>r(m)&&r(c)?`dart run traceway:upload_symbols \\
  --token ${r(c)} \\
  --url ${r(m).backendUrl}`:""),P=`xcodebuild -scheme MyApp -configuration Release \\
  -archivePath build/MyApp.xcarchive archive`,J=G(()=>r(m)&&r(c)?`curl -X POST ${r(m).backendUrl}/api/symbols/upload \\
  -H "Authorization: Bearer ${r(c)}" \\
  -F "files=@build/MyApp.xcarchive/dSYMs/MyApp.app.dSYM/Contents/Resources/DWARF/MyApp"`:"");let H=le(!1);async function de(){M(s,!0);try{await at.generateSourceMapToken()}finally{M(s,!1)}}async function Te(){M(s,!0);try{await at.generateSourceMapToken(),M(H,!1),ia.success("Successfully regenerated the Upload Token",{position:"top-center"})}finally{M(s,!1)}}async function ue(){r(c)&&(await navigator.clipboard.writeText(r(c)),M(g,!0),setTimeout(()=>M(g,!1),2e3))}async function Z(){await navigator.clipboard.writeText(T),M(i,!0),setTimeout(()=>M(i,!1),2e3)}async function U(){await navigator.clipboard.writeText(n[r(a)].code),M(v,!0),setTimeout(()=>M(v,!1),2e3)}async function q(){await navigator.clipboard.writeText(r(C)),M(_,!0),setTimeout(()=>M(_,!1),2e3)}async function ae(){await navigator.clipboard.writeText(N),M(b,!0),setTimeout(()=>M(b,!1),2e3)}async function O(){await navigator.clipboard.writeText(r(k)),M(y,!0),setTimeout(()=>M(y,!1),2e3)}async function B(){await navigator.clipboard.writeText(P),M(x,!0),setTimeout(()=>M(x,!1),2e3)}async function Y(){await navigator.clipboard.writeText(r(J)),M(p,!0),setTimeout(()=>M(p,!1),2e3)}var re=Wr(),ee=l(re);{var se=Oe=>{var ze=kr(),De=u(ze),rt=f(u(De),2),Ge=u(rt),Le=u(Ge,!0);d(Ge);var xe=f(Ge,2);be(xe,{variant:"outline",size:"sm",onclick:ue,children:(K,pe)=>{var X=L(),ie=l(X);{var me=I=>{Ie(I,{class:"h-4 w-4 text-green-500"})},W=I=>{$e(I,{class:"h-4 w-4"})};D(ie,I=>{r(g)?I(me):I(W,!1)})}o(K,X)},$$slots:{default:!0}});var He=f(xe,2);be(He,{variant:"destructiveOutline",size:"sm",onclick:()=>M(H,!0),children:(K,pe)=>{var X=_r(),ie=l(X);Oa(ie,{class:"mr-2 h-4 w-4"}),$(),o(K,X)},$$slots:{default:!0}}),d(rt),d(De);var nt=f(De,2);{var dt=K=>{var pe=hr(),X=l(pe),ie=f(u(X),2),me=u(ie),W=u(me);be(W,{variant:"outline",size:"sm",onclick:ae,children:(qe,Be)=>{var Ue=L(),we=l(Ue);{var Fe=V=>{var F=fr(),_e=l(F);Ie(_e,{class:"mr-2 h-4 w-4 text-green-500"}),$(),o(V,F)},ye=V=>{var F=br(),_e=l(F);$e(_e,{class:"mr-2 h-4 w-4"}),$(),o(V,F)};D(we,V=>{r(b)?V(Fe):V(ye,!1)})}o(qe,Ue)},$$slots:{default:!0}}),d(me);var I=f(me,2),z=u(I);Ze(z,{get language(){return Xe},code:N}),d(I),d(ie),$(2),d(X);var ge=f(X,2),oe=f(u(ge),2),ve=u(oe),ce=u(ve);be(ce,{variant:"outline",size:"sm",onclick:O,children:(qe,Be)=>{var Ue=L(),we=l(Ue);{var Fe=V=>{var F=yr(),_e=l(F);Ie(_e,{class:"mr-2 h-4 w-4 text-green-500"}),$(),o(V,F)},ye=V=>{var F=Er(),_e=l(F);$e(_e,{class:"mr-2 h-4 w-4"}),$(),o(V,F)};D(we,V=>{r(y)?V(Fe):V(ye,!1)})}o(qe,Ue)},$$slots:{default:!0}}),d(ve);var ke=f(ve,2),Ae=u(ke);Ze(Ae,{get language(){return Xe},get code(){return r(k)}}),d(ke),d(oe),$(2),d(ge),j(()=>{We(I,1,`overflow-x-auto rounded-lg text-sm ${Ye.isDark?"dark-code":"light-code"}`),We(ke,1,`overflow-x-auto rounded-lg text-sm ${Ye.isDark?"dark-code":"light-code"}`)}),o(K,pe)},Je=K=>{var pe=L(),X=l(pe);{var ie=W=>{var I=Ar(),z=l(I),ge=f(u(z),2),oe=u(ge),ve=u(oe);be(ve,{variant:"outline",size:"sm",onclick:B,children:(ye,V)=>{var F=L(),_e=l(F);{var Ee=Q=>{var he=Tr(),Ne=l(he);Ie(Ne,{class:"mr-2 h-4 w-4 text-green-500"}),$(),o(Q,he)},Re=Q=>{var he=wr(),Ne=l(he);$e(Ne,{class:"mr-2 h-4 w-4"}),$(),o(Q,he)};D(_e,Q=>{r(x)?Q(Ee):Q(Re,!1)})}o(ye,F)},$$slots:{default:!0}}),d(oe);var ce=f(oe,2),ke=u(ce);Ze(ke,{get language(){return Xe},code:P}),d(ce),d(ge),$(2),d(z);var Ae=f(z,2),qe=f(u(Ae),2),Be=u(qe),Ue=u(Be);be(Ue,{variant:"outline",size:"sm",onclick:Y,children:(ye,V)=>{var F=L(),_e=l(F);{var Ee=Q=>{var he=Sr(),Ne=l(he);Ie(Ne,{class:"mr-2 h-4 w-4 text-green-500"}),$(),o(Q,he)},Re=Q=>{var he=xr(),Ne=l(he);$e(Ne,{class:"mr-2 h-4 w-4"}),$(),o(Q,he)};D(_e,Q=>{r(p)?Q(Ee):Q(Re,!1)})}o(ye,F)},$$slots:{default:!0}}),d(Be);var we=f(Be,2),Fe=u(we);Ze(Fe,{get language(){return Xe},get code(){return r(J)}}),d(we),d(qe),$(2),d(Ae),j(()=>{We(ce,1,`overflow-x-auto rounded-lg text-sm ${Ye.isDark?"dark-code":"light-code"}`),We(we,1,`overflow-x-auto rounded-lg text-sm ${Ye.isDark?"dark-code":"light-code"}`)}),o(W,I)},me=W=>{var I=Lr(),z=l(I);{var ge=we=>{var Fe=Ir(),ye=l(Fe),V=f(u(ye),2),F=u(V),_e=u(F);be(_e,{variant:"outline",size:"sm",onclick:Z,children:(ot,ft)=>{var Pe=L(),ut=l(Pe);{var et=fe=>{var Se=Or(),Ke=l(Se);Ie(Ke,{class:"mr-2 h-4 w-4 text-green-500"}),$(),o(fe,Se)},st=fe=>{var Se=Rr(),Ke=l(Se);$e(Ke,{class:"mr-2 h-4 w-4"}),$(),o(fe,Se)};D(ut,fe=>{r(i)?fe(et):fe(st,!1)})}o(ot,Pe)},$$slots:{default:!0}}),d(F);var Ee=f(F,2),Re=u(Ee);Ze(Re,{get language(){return Xe},code:T}),d(Ee),d(V),d(ye);var Q=f(ye,2),he=f(u(Q),2);te(he,()=>mt,(ot,ft)=>{ft(ot,{get value(){return r(a)},onValueChange:Pe=>{Pe&&M(a,Pe,!0)},children:(Pe,ut)=>{var et=L(),st=l(et);te(st,()=>pt,(fe,Se)=>{Se(fe,{class:"mb-2",children:(Ke,sn)=>{var St=L(),ea=l(St);it(ea,17,()=>Object.entries(n),([bt,xt])=>bt,(bt,xt)=>{var At=G(()=>ua(r(xt),2));let ta=()=>r(At)[0],aa=()=>r(At)[1];var Ot=L(),ra=l(Ot);te(ra,()=>ct,(na,oa)=>{oa(na,{get value(){return ta()},children:(sa,cn)=>{$();var Rt=Me();j(()=>ne(Rt,aa().label)),o(sa,Rt)},$$slots:{default:!0}})}),o(bt,Ot)}),o(Ke,St)},$$slots:{default:!0}})}),o(Pe,et)},$$slots:{default:!0}})});var Ne=f(he,2),Qt=u(Ne,!0);d(Ne);var wt=f(Ne,2),vt=u(wt),jt=u(vt);be(jt,{variant:"outline",size:"sm",onclick:U,children:(ot,ft)=>{var Pe=L(),ut=l(Pe);{var et=fe=>{var Se=Nr(),Ke=l(Se);Ie(Ke,{class:"mr-2 h-4 w-4 text-green-500"}),$(),o(fe,Se)},st=fe=>{var Se=Cr(),Ke=l(Se);$e(Ke,{class:"mr-2 h-4 w-4"}),$(),o(fe,Se)};D(ut,fe=>{r(v)?fe(et):fe(st,!1)})}o(ot,Pe)},$$slots:{default:!0}}),d(vt);var _t=f(vt,2),Jt=u(_t);Ze(Jt,{get language(){return n[r(a)].language},get code(){return n[r(a)].code}}),d(_t),d(wt),d(Q),j(()=>{We(Ee,1,`overflow-x-auto rounded-lg text-sm ${Ye.isDark?"dark-code":"light-code"}`),ne(Qt,n[r(a)].file),We(_t,1,`overflow-x-auto rounded-lg text-sm ${Ye.isDark?"dark-code":"light-code"}`)}),o(we,Fe)};D(z,we=>{r(S)&&we(ge)})}var oe=f(z,2),ve=u(oe),ce=u(ve,!0);d(ve);var ke=f(ve,2),Ae=u(ke),qe=u(Ae);be(qe,{variant:"outline",size:"sm",onclick:q,children:(we,Fe)=>{var ye=L(),V=l(ye);{var F=Ee=>{var Re=$r(),Q=l(Re);Ie(Q,{class:"mr-2 h-4 w-4 text-green-500"}),$(),o(Ee,Re)},_e=Ee=>{var Re=Mr(),Q=l(Re);$e(Q,{class:"mr-2 h-4 w-4"}),$(),o(Ee,Re)};D(V,Ee=>{r(_)?Ee(F):Ee(_e,!1)})}o(we,ye)},$$slots:{default:!0}}),d(Ae);var Be=f(Ae,2),Ue=u(Be);Ze(Ue,{get language(){return Xe},get code(){return r(C)}}),d(Be),d(ke),d(oe),j(()=>{ne(ce,r(S)?"Step 3: Upload after your production build":"Usage"),We(Be,1,`overflow-x-auto rounded-lg text-sm ${Ye.isDark?"dark-code":"light-code"}`)}),o(W,I)};D(X,W=>{r(R)?W(ie):W(me,!1)},!0)}o(K,pe)};D(nt,K=>{r(A)?K(dt):K(Je,!1)})}d(ze),j(()=>ne(Le,r(c))),o(Oe,ze)},Ve=Oe=>{var ze=L(),De=l(ze);{var rt=Le=>{var xe=Pr(),He=u(xe);d(xe),j(()=>ne(He,`An upload token is required to upload ${r(w)??""}. Ask an organization admin to generate one
		from the Connection page.`)),o(Le,xe)},Ge=Le=>{var xe=zr(),He=u(xe);{var nt=K=>{var pe=Dr();o(K,pe)},dt=K=>{var pe=L(),X=l(pe);{var ie=W=>{var I=Br();o(W,I)},me=W=>{var I=Ur(),z=u(I);d(I),j(()=>ne(z,`Generate an upload token to start uploading ${r(w)??""} as part of your build process.`)),o(W,I)};D(X,W=>{r(R)?W(ie):W(me,!1)},!0)}o(K,pe)};D(He,K=>{r(A)?K(nt):K(dt,!1)})}var Je=f(He,2);be(Je,{variant:"outline",size:"sm",onclick:de,get disabled(){return r(s)},children:(K,pe)=>{var X=L(),ie=l(X);{var me=I=>{var z=Fr(),ge=l(z);Ea(ge,{class:"mr-2 h-4 w-4"}),$(),o(I,z)},W=I=>{var z=Kr(),ge=l(z);Lt(ge,{class:"mr-2 h-4 w-4"}),$(),o(I,z)};D(ie,I=>{r(s)?I(me):I(W,!1)})}o(K,X)},$$slots:{default:!0}}),d(xe),o(Le,xe)};D(De,Le=>{r(E)?Le(rt):Le(Ge,!1)},!0)}o(Oe,ze)};D(ee,Oe=>{r(c)?Oe(se):Oe(Ve,!1)})}var lt=f(ee,2);te(lt,()=>Aa,(Oe,ze)=>{ze(Oe,{get open(){return r(H)},set open(De){M(H,De,!0)},children:(De,rt)=>{var Ge=L(),Le=l(Ge);te(Le,()=>ha,(xe,He)=>{He(xe,{interactOutsideBehavior:"close",children:(nt,dt)=>{var Je=qr(),K=l(Je);te(K,()=>Ta,(X,ie)=>{ie(X,{children:(me,W)=>{var I=Gr(),z=l(I);te(z,()=>wa,(oe,ve)=>{ve(oe,{children:(ce,ke)=>{$();var Ae=Me("Regenerate Upload Token");o(ce,Ae)},$$slots:{default:!0}})});var ge=f(z,2);te(ge,()=>Sa,(oe,ve)=>{ve(oe,{children:(ce,ke)=>{$();var Ae=Me(`A new upload token will be issued for this project and the current one will stop working
				immediately.`);o(ce,Ae)},$$slots:{default:!0}})}),o(me,I)},$$slots:{default:!0}})});var pe=f(K,4);te(pe,()=>xa,(X,ie)=>{ie(X,{class:"sm:justify-between",children:(me,W)=>{var I=Hr(),z=l(I);be(z,{variant:"outline",onclick:()=>M(H,!1),get disabled(){return r(s)},children:(oe,ve)=>{$();var ce=Me("Cancel");o(oe,ce)},$$slots:{default:!0}});var ge=f(z,2);be(ge,{variant:"destructive",onclick:Te,get disabled(){return r(s)},children:(oe,ve)=>{$();var ce=Me();j(()=>ne(ce,r(s)?"Regenerating...":"Regenerate Token")),o(oe,ce)},$$slots:{default:!0}}),o(me,I)},$$slots:{default:!0}})}),o(nt,Je)},$$slots:{default:!0}})}),o(De,Ge)},$$slots:{default:!0}})}),o(e,re),je()}var Yr=h("<!> ",1),Xr=h("<!> <!>",1),Vr=h("<!> <!>",1);function Qr(e,t){Qe(t,!0);let n=G(()=>at.currentProject);const a=G(()=>r(n)?.framework==="flutter"),s=G(()=>r(n)?.framework==="ios"),g=G(()=>Mt.getRoleForOrganization(at.currentProject?.organizationId??0)==="readonly");var i=L(),v=l(i);{var _=b=>{va(b,{children:(y,x)=>{var p=Vr(),T=l(p);_a(T,{children:(c,E)=>{var A=Xr(),R=l(A);fa(R,{class:"flex items-center gap-2",children:(C,N)=>{var k=Yr(),P=l(k);Lt(P,{class:"h-5 w-5"});var J=f(P);j(()=>ne(J,` ${r(a)||r(s)?"Symbol Upload":"Source Map Upload"}`)),o(C,k)},$$slots:{default:!0}});var w=f(R,2);{var S=C=>{ya(C,{children:(N,k)=>{$();var P=Me(`Upload source maps to see original file names and line numbers in stack traces from
					minified code.`);o(N,P)},$$slots:{default:!0}})};D(w,C=>{!r(a)&&!r(s)&&C(S)})}o(c,A)},$$slots:{default:!0}});var m=f(T,2);ba(m,{children:(c,E)=>{Zr(c,{})},$$slots:{default:!0}}),o(y,p)},$$slots:{default:!0}})};D(v,b=>{r(n)&&!r(g)&&b(_)})}o(e,i),je()}var jr=h('<p class="pt-1 text-sm font-medium">Framework</p> <!>',1),Jr=h('<p class="mt-1 ml-9 text-sm text-muted-foreground"> </p>'),en=h('<p class="pt-2 text-xs text-muted-foreground"><a target="_blank" rel="noopener noreferrer" class="underline hover:text-foreground"> </a></p>'),tn=h('<div class="p-4"><!> <!></div>'),an=h('<div class="rounded-md border bg-card"><div class="border-b px-4 py-3"><div class="flex items-center gap-3"><div class="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground"> </div> <h3 class="font-semibold"> </h3></div> <!></div> <!></div>'),rn=h('<div class="space-y-2"><p class="text-sm font-medium">Language</p> <!> <!></div> <!> <!>',1);function Bn(e,t){Qe(t,!0);let n=le(Nt(qa())),a=le(Nt(Za()));const s={bash:Xe,go:ga,javascript:Et,typescript:Xt,python:Ba,gradle:dr,csharp:pr,ruby:gr,yaml:Vt},g=G(()=>tt.find(w=>w.id===r(n))??tt[0]),i=G(()=>r(g).frameworks.find(w=>w.id===r(a))?.id??r(g).frameworks[0]?.id??""),v=G(()=>Ga(r(g).id,r(i),t.backendUrl,t.token));function _(w){const S=tt.find(C=>C.id===w);S&&(M(n,S.id,!0),Wa(S.id))}function b(w){r(g).frameworks.some(S=>S.id===w)&&(M(a,w,!0),Ya(w))}function y(w){return s[w??"bash"]}var x=rn(),p=l(x),T=f(u(p),2);te(T,()=>mt,(w,S)=>{S(w,{get value(){return r(n)},onValueChange:_,children:(C,N)=>{var k=L(),P=l(k);te(P,()=>pt,(J,H)=>{H(J,{class:"h-auto flex-wrap justify-start",children:(de,Te)=>{var ue=L(),Z=l(ue);it(Z,17,()=>tt,U=>U.id,(U,q)=>{var ae=L(),O=l(ae);te(O,()=>ct,(B,Y)=>{Y(B,{get value(){return r(q).id},children:(re,ee)=>{$();var se=Me();j(()=>ne(se,r(q).label)),o(re,se)},$$slots:{default:!0}})}),o(U,ae)}),o(de,ue)},$$slots:{default:!0}})}),o(C,k)},$$slots:{default:!0}})});var m=f(T,2);{var c=w=>{var S=jr(),C=f(l(S),2);te(C,()=>mt,(N,k)=>{k(N,{get value(){return r(i)},onValueChange:b,children:(P,J)=>{var H=L(),de=l(H);te(de,()=>pt,(Te,ue)=>{ue(Te,{class:"h-auto flex-wrap justify-start",children:(Z,U)=>{var q=L(),ae=l(q);it(ae,17,()=>r(g).frameworks,O=>O.id,(O,B)=>{var Y=L(),re=l(Y);te(re,()=>ct,(ee,se)=>{se(ee,{get value(){return r(B).id},children:(Ve,lt)=>{$();var Oe=Me();j(()=>ne(Oe,r(B).label)),o(Ve,Oe)},$$slots:{default:!0}})}),o(O,Y)}),o(Z,q)},$$slots:{default:!0}})}),o(P,H)},$$slots:{default:!0}})}),o(w,S)};D(m,w=>{r(g).frameworks.length>1&&w(c)})}d(p);var E=f(p,2);it(E,19,()=>r(v),w=>r(g).id+r(i)+w.title,(w,S,C)=>{var N=an(),k=u(N),P=u(k),J=u(P),H=u(J,!0);d(J);var de=f(J,2),Te=u(de,!0);d(de),d(P);var ue=f(P,2);{var Z=ae=>{var O=Jr(),B=u(O,!0);d(O),j(()=>ne(B,r(S).description)),o(ae,O)};D(ue,ae=>{r(S).description&&ae(Z)})}d(k);var U=f(k,2);{var q=ae=>{var O=tn(),B=u(O);{let ee=G(()=>y(r(S).codeLanguage));Tt(B,{get code(){return r(S).code},get language(){return r(ee)}})}var Y=f(B,2);{var re=ee=>{var se=en(),Ve=u(se),lt=u(Ve,!0);d(Ve),d(se),j(()=>{ma(Ve,"href",r(S).link.href),ne(lt,r(S).link.label)}),o(ee,se)};D(Y,ee=>{r(S).link&&ee(re)})}d(O),o(ae,O)};D(U,ae=>{r(S).code&&ae(q)})}d(N),j(()=>{ne(H,r(C)+1),ne(Te,r(S).title)}),o(w,N)});var A=f(E,2);{var R=w=>{Qr(w,{})};D(A,w=>{r(n)==="nodejs"&&w(R)})}o(e,x),je()}var nn=h('<div class="flex items-center gap-2"><code class="flex-1 rounded-md bg-muted px-3 py-2 font-mono text-sm break-all"> </code> <!></div>');function $t(e,t){let n=le(!1);async function a(){await navigator.clipboard.writeText(t.value),M(n,!0),setTimeout(()=>M(n,!1),2e3)}var s=nn(),g=u(s),i=u(g,!0);d(g);var v=f(g,2);be(v,{variant:"outline",size:"sm",onclick:a,children:(_,b)=>{var y=L(),x=l(y);{var p=m=>{Ie(m,{class:"h-4 w-4 text-green-500"})},T=m=>{$e(m,{class:"h-4 w-4"})};D(x,m=>{r(n)?m(p):m(T,!1)})}o(_,y)},$$slots:{default:!0}}),d(s),j(()=>ne(i,t.value)),o(e,s)}var on=h('<div class="space-y-6"><div><p class="mb-1 text-sm font-medium">OTLP Endpoint</p> <p class="mb-2 text-xs text-muted-foreground">Your SDK or Collector will append <code class="rounded bg-muted px-1 py-0.5 font-mono text-xs">/v1/traces</code> and <code class="rounded bg-muted px-1 py-0.5 font-mono text-xs">/v1/metrics</code> automatically.</p> <!></div> <div><p class="mb-2 text-sm font-medium">Authorization Header</p> <!></div> <div><p class="mb-2 text-sm font-medium">Example: OTel Collector (optional)</p> <!></div></div>');function Un(e,t){var n=on(),a=u(n),s=f(u(a),4);$t(s,{get value(){return t.endpoint}}),d(a);var g=f(a,2),i=f(u(g),2);$t(i,{get value(){return t.authHeader}}),d(g);var v=f(g,2),_=f(u(v),2);Tt(_,{get code(){return t.collectorConfig},get language(){return Vt}}),d(v),d(n),o(e,n)}export{Dn as A,Bn as O,Pn as S,Un as a,Mn as b,Xe as c,Cn as d,Ba as e,Nn as f,kn as g,Qr as h,In as i,Et as j,$n as k,Ln as l,Rn as p};
