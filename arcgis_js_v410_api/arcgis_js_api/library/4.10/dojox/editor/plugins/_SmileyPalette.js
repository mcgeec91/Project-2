//>>built
define("dojo dijit dojox dijit/_Widget dijit/_TemplatedMixin dijit/_PaletteMixin dojo/_base/connect dojo/_base/declare dojo/i18n dojo/i18n!dojox/editor/plugins/nls/Smiley".split(" "),function(d,f,l,g,h,k){d.experimental("dojox.editor.plugins._SmileyPalette");var e=d.declare("dojox.editor.plugins.Emoticon",null,{constructor:function(b){this.id=b},getValue:function(){return e.ascii[this.id]},imgHtml:function(b){var a="emoticon"+this.id.substr(0,1).toUpperCase()+this.id.substr(1),c=d.moduleUrl("dojox.editor.plugins",
"resources/emoticons/"+a+".gif"),a=d.i18n.getLocalization("dojox.editor.plugins","Smiley")[a];return['\x3cimg src\x3d"',c,'" class\x3d"',b,'" alt\x3d"',this.getValue(),'" title\x3d"',a,'"\x3e'].join("")},fillCell:function(b,a){d.place(this.imgHtml("dijitPaletteImg"),b)}});e.ascii={smile:":-)",laughing:"lol",wink:";-)",grin:":-D",cool:"8-)",angry:":-@",half:":-/",eyebrow:"/:)",frown:":-(",shy:":-$",goofy:":-S",oops:":-O",tongue:":-P",idea:"(i)",yes:"(y)",no:"(n)",angel:"0:-)",crying:":'(",happy:"\x3d)"};
e.fromAscii=function(b){var a=e.ascii,c;for(c in a)if(b==a[c])return new e(c);return null};f=d.declare("dojox.editor.plugins._SmileyPalette",[g,h,k],{templateString:'\x3ctable class\x3d"dijitInline dijitEditorSmileyPalette dijitPaletteTable" cellSpacing\x3d0 cellPadding\x3d0\x3e\x3ctbody dojoAttachPoint\x3d"gridNode"\x3e\x3c/tbody\x3e\x3c/table\x3e',baseClass:"dijitEditorSmileyPalette",_palette:[["smile","laughing","wink","grin"],["cool","angry","half","eyebrow"],["frown","shy","goofy","oops"],["tongue",
"idea","angel","happy"],["yes","no","crying",""]],dyeClass:e,buildRendering:function(){this.inherited(arguments);var b=d.i18n.getLocalization("dojox.editor.plugins","Smiley"),a={},c;for(c in b)"emoticon"==c.substr(0,8)&&(a[c.substr(8).toLowerCase()]=b[c]);this._preparePalette(this._palette,a)}});f.Emoticon=e;return f});