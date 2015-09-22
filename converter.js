var simptable = require('./tables/s2t.js');
var tradtable = require('./tables/t2s.js');
var Simp = "simplified";
var Trad = "traditional";

var zhEncodesSimp = ["gb2312", "gbk", "x-gbk", "gb18030", "hz-gb-2312", "iso-2022-cn"];
var zhEncodesTrad = ["big5", "big5-hkscs", "x-euc-tw"];
var zhEncodesAll = zhEncodesSimp.concat(zhEncodesTrad, ["utf-7", "utf-8", "utf-16le", "x-user-defined"]);

var t2s = tradtable.getTable();
var s2t = simptable.getTable();

var maxSTLen = 1;
var maxTSLen = 1;

var curZhFlag = "";

module.exports = {

        convert: function (str, zhflag) {
            var leng = 4;
            var zmap = null;

            if (zhflag == Simp)
            {
                /
                zmap = t2s;
                leng = Math.min(maxTSLen, str.length);
            } else
            {

                zmap = s2t;
                leng = Math.min(maxSTLen, str.length);
            }


            str = str.split("");
            for (var i = 0, c = str.length; i < c; i++)
            {
                str[i] = zmap[str[i]] || str[i];
            }
            str = str.join("");


            var txt = "", s = "", bol = true;
            for (var i = 0, c = str.length; i < c;)
            {
                bol = true;
                for (var j = leng; j > 1; j--)
                {
                    s = str.substr(i, j);
                    if (s in zmap)
                    {
                        txt += zmap[s];
                        i += j;
                        bol = false;
                        break;
                    }
                }

                if (bol)
                {
                    txt += str.substr(i, 1);
                    i++;
                }
            }
            if (txt != "") str = txt;
            return str;
        }
};
