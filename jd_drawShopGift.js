/*
活动名称：店铺关注有礼
活动链接：店铺首页关注按钮
环境变量：jd_drawShopGift_argv // 活动参数，支持两种格式：”<shopId(店铺id)>_<venderId(商家id)>“ 或 ”<活动店铺首页链接>“
        jd_drawShopGift_threads // 控制并发线程数（正整数），默认1，最大5
        jd_drawShopGift_interval // 自定义运行间隔时长（整数，单位毫秒），默认1000
        jd_drawShopGift_notify // 是否推送通知（true/false），默认不推送

⚠ 请勿滥用自动化工具解析的店铺链接作为变量使用本脚本！请确认活动有效性后再使用！
⚠ 因自动化程序滥用严重导致官方接口受影响，现在必须同时提供店铺和商家id才可运行！

高并发脚本，黑号领不到奖品
活动限制IP严重，建议使用代理，谨慎使用并发

cron:1 1 1 1 *

*/

const $ = new Env('店铺关注有礼')
var iｉl='jsjiami.com.v7';const Ilil1l=iii1II;if(function(lilIIl,ililIl,liiI1l,i1l1II,i1ill,I1l11l,lilIIi){return lilIIl=lilIIl>>0x9,I1l11l='hs',lilIIi='hs',function(i1l1Il,llIli,i1i11l,i1i11i,II11l1){const I1l11I=iii1II;i1i11i='tfi',I1l11l=i1i11i+I1l11l,II11l1='up',lilIIi+=II11l1,I1l11l=i1i11l(I1l11l),lilIIi=i1i11l(lilIIi),i1i11l=0x0;const Iil1lI=i1l1Il();while(!![]&&--i1l1II+llIli){try{i1i11i=parseInt(I1l11I(0x21e,'iIRY'))/0x1*(-parseInt(I1l11I(0x281,'VlCY'))/0x2)+parseInt(I1l11I(0x1ff,'O[vj'))/0x3+parseInt(I1l11I(0x28e,'9*!r'))/0x4+parseInt(I1l11I(0x2b7,'Aeyz'))/0x5*(parseInt(I1l11I(0x1c7,'9*!r'))/0x6)+-parseInt(I1l11I(0x1c5,'!lMv'))/0x7*(-parseInt(I1l11I(0x1b5,'Vi^$'))/0x8)+parseInt(I1l11I(0x25f,'wdgd'))/0x9*(-parseInt(I1l11I(0x1f9,'dXEw'))/0xa)+-parseInt(I1l11I(0x183,'5SCT'))/0xb*(-parseInt(I1l11I(0x1d6,'c9L1'))/0xc);}catch(IiiliI){i1i11i=i1i11l;}finally{II11l1=Iil1lI[I1l11l]();if(lilIIl<=i1l1II)i1i11l?i1ill?i1i11i=II11l1:i1ill=II11l1:i1i11l=II11l1;else{if(i1i11l==i1ill['replace'](/[SXCPwnUtJIAVeGWbLxk=]/g,'')){if(i1i11i===llIli){Iil1lI['un'+I1l11l](II11l1);break;}Iil1lI[lilIIi](II11l1);}}}}}(liiI1l,ililIl,function(iii1iI,llIll,il1iII,iilli,IlllIl,II11lI,lI1IIi){return llIll='\x73\x70\x6c\x69\x74',iii1iI=arguments[0x0],iii1iI=iii1iI[llIll](''),il1iII='\x72\x65\x76\x65\x72\x73\x65',iii1iI=iii1iI[il1iII]('\x76'),iilli='\x6a\x6f\x69\x6e',(0x162999,iii1iI[iilli](''));});}(0x19000,0x90acb,Iii11l,0xca),Iii11l){}const jdCookie=require(Ilil1l(0x207,'1&cm')),common=require('./utils/Rebels_jdCommon'),notify=require('./utils/Rebels_sendJDNotify');console['log'](''),console[Ilil1l(0x2a7,'LLeY')](Ilil1l(0x17f,'ybut')+$['name']+'变量说明=========='),console[Ilil1l(0x22f,'5SCT')]('jd_drawShopGift_argv\x20//\x20活动参数'),console['log']('jd_drawShopGift_threads\x20//\x20控制并发线程数，默认1'),console['log'](Ilil1l(0x290,'(SL(')),console['log'](Ilil1l(0x2b8,'Aeyz')),console[Ilil1l(0x1b1,'O[vj')]('=========='+$[Ilil1l(0x219,'r5iv')]+'提示结束=========='),console['log']('');function Iii11l(){const I1iIIi=(function(){return[iｉl,'VneXjPWsjLiPaAmxixI.Xwcom.CvU7SbtWkWPGJW==','fqRcJW','d1ZcPW','WPldH8kXsSo1tSo2eSkay8okFKK/W7hdIfLnkIRdI8kKW48','gWJcVCkuW6W','xSkuWOmcW7WfWRFcVW','W4iRWPuAkG','WRyQW7ldJbtcSYfNaZPmWOa','a8kJkJ52WQy','lmkaW5rWWPS','W4uFcSkTW4xcRgRdGa','WPxdHSkDxCoMsmoK','E8o3W5W+WPtdL8ovaCoKW6xcNmky','g8k7mmkPW6u','lWpcHSo2tCoJW5tcRmk1rfpcIKj4eblcGSkjfKbYW5VdHIHCW5i5m+IfP+wTTUs7ToI/IoIJJ+MvQoMBOoAuTEMxPU+8P+M4REIUIfe4W4VcMa','WQaTW73dVINcVW','W4/cTMjaha','puvtW5ih','nmkJWOv4W7BcISoBka','EgbBwCky','W6RdKWysWRJcRmoTWRe','W59PhIC3','W7ddVCkrW73cG8oq','5lUo56625zch5BUt6zkO6k6J5A+e5y+O5lMR5lQo576K','W5WoWPGpcCkM','WQnWW77dSCo6WOnsWRK/hCoPW5a','B1PGuCkB','WR3cQ8onhZC','WOn7Fh5BWPeEW7K','nwbOW5aY','W5KijSkbW7q','WQlcSspdGa','kSoJWRS1W7y','W6VdKcHrmW','sConWONcGxldSmoBW4VcIHuLpfldNmk3WOPVW5tcT8ojkSoMW4S','bhjhCqy','ECk+a8oiWQCcj8kGW5asWQHDWQRdRd/cTblcNmoNoIdcQG','WRVdUIG','oCkGWP1MWP4','cNKvW7RcTW','heBcKW','gmkqW4XeWODDAbJcIx8+','WPiBW67dUGRcHSopW4ldJgddLqO','WOpcM8oOia','W6RdJSkRW6ZcLa','mmkNpa','bdHCW4pcHsOEWPNcLSkjoHe','W4WNeSkmW4C','r8odWOO','W5BdV0PVWQS','ymkYm8oCWPWh','W67dIxZcGZvi','WQFcTZ8','WOfUn8oYDmoIuhqDW54d','W5O8wmkLnSoPxxu2W7GqWObLe1/dJN94WRJcGSkSWO/cICo1jCov5PQM5zkH6yk/552/W4lcJSk5WOxdTSkKA30rW5RdQmo3776f6BQT6kYj5lMF5OYV6ycL','WO8qWPZdPmkr','W7CRWQJcOSkIW4C','WRdcJaxdLSoc','yYPLWPS','WQJcHXhdPmoc','bJG5eG','5P2k556V5Rsg5yIC54MG5Ogd','es9oW57cLq','WRFcUYNdGCoRW73dQ8oG','AmkpW5VcRmoi','pJ/dUCoyrCoDWOOa','WOVdI8kbxSoosW','4P2MWOlOH6dMNzZOVAxOOAxPGyFLIzhKUy7PLitORQfk','huRcN8ktj8o2nvddKGddJguTW6/cKZS','fCkqWPzLWRdcHxpcKq','iGlcRCoBuCoUW4RcKCk4AeZcO197cJK','WR43W7q','WPpcN8o1gbbypZzZzMtcQ8oIhW','b8kJnY9/WQadpq','W6yHWRxcTmkVW4C','WRBcVY7dKCoAW6BdJ8oH','WPjBW4PcFCo/WPtcQraW','m8kfpbfU','W4CaWQCxoG','WRFcTdxdL8o6','W7lcPJL1pe03BsDs','W6FdIXuBWR8','w8oxWP8cW4X6DbpcOxmPfe4FWRZcI8odWPBdIW','W5dcUSo1W6FdPghdQW','yCk/l8ozWRKx','WOWlWPy','huRcN8kqdmos','4P2FW7RMNBBOGzhMRRBNOi3LPztNK7xcMa','W5FdJhH5WRe','W7VdIh/cHXLE','oKTT','W4pdSs9D','W6qLWRtcSSkMW6zIWP4Gmmo9W7KLWPBdN8okia','n3L0W5KVW5OHW602W7q','fmosW6ajEG','5PYe552n5AAR5zct6AkC5y2j54ID5OkcW4u','oSkHiW','vSorWRVdHmk2','W7FdMsegWRC','nGjxW7hcHq','W5us5lMw5y+J6yE7','WQtdPspdKCoz','l8kTWOS','oYVdVSoPF8oq','pJ/dUCoy','e8k6lCkfW6a','n8kecH1t','jSkKWP9fW6G','W5BdRe1wWRzRWOG','FmoLWORcU3W','W4ZcP8oUW5hdGwq','W5hcN1bInq'].concat((function(){return['WRjcpLDL','W58ppSkUW4C','WP5Ogf1hsIFdGa','4P64W5RMNQVNNRhOROJMSB12','cu7cHSk/zmo1lLFdKcRdJq','W5KBgSkQ','W5K3DmkECmkMgGHU','W5DOoH40u1e','W4yODv9oWPCUW74','i2n2W7aUW4K','WPyJgWNdQa','WQtdVsddImoKuW','yCoFWQtcP3a','5BMu6zgQ5zY/5zYe772iDsPEfuC6yeVdJmoCWQK/W6bqW78tbConWOH0DSo7W6/dTNddQHbek8ov','fKdcJa','W6pdQ8klW5hcM8oDAfODWOm','W7hdJNq','W5zIlG','adTcBCkEWQGwWR8','DgHatCkW','W6/dKGi','s8ofWO3cPMm','6lsr5y++5PET5Pw0','oCkYhd5E','WPddSSkkv8ow','W4T8WRdcR28','WQBcId8','W4xdTJiyWPK','W7XLjs4u','5P+s552g5AA45zoV6Acb5y+554I35Oga','wmoAWOhdUmkFEmkNuq','W6iHWQJcPCkMW4fzWPy','WQfHW7lcOmk1','ftlcMmkKW78','g8ksW4XcWOyqvdFcSKWhgG','WPfJW4VcTmkk','D8oXW5r+W7JcGSodiCoO','qSohWPO','pmkMW61JWQnV','4PULr+ISRUwhMUwUPEs7I+w9PUILVUEzMEEoHowIOowmLEMhPowqKowhQEI+NEIIP+IhVEADJG','WR7dI8kcBCog','WOJdGSkCxCoIESoZlCk4BCoiwe08W7hdSL8','5y6R5lI75REK5yUT5OQk5yMH5lYU5P2y6AcW5yYK5yUC5AAO5zkG776s','WORdLSkaA8oPsW','m8oXWQCSW5W','cGJcTCo1xa','6lwx5yYX5PA55Psd','CY1UWO7dGCoU','rSonWP0','WPb7W7pcHSk0','DIbVWPRdRCo4W53dVa','WOv0lq9yWQy+W6SAba','W5NcPSo5','WQlcJKW5','W7tdUmkEW4JcLW','oCkLk8kHW70','WRm1da','f8kViq','WP4qeItdHa','oqRcR8kaWOBdNCkXWOe','WRiXWOpdPSkc','W4JdVvTPWQu','gCodWQqLW5id','jCkMk8kxW4/cOLJdHxi8q1XtW57dPCkGmmo9W49a','paVcQW','iWZcO8kCWRRdNq','BcbfWPZdKa','z8o4DmouWQdcQvldP24DtW','5P6l55Yj5Awv5zoS6AoJ5y2e54U45OkLWQi','FCoMWRi9W54','hWBcMCkwW6NcPa','WQ3cSsa','W4KjWPStl8k1W4ZdSa','WPWhWOddR8kgux7dNa','W5JcQSo1W6JdPMZdPCkpnI7dGSoTW57dSKFdMa','rmomWQlcTMJdVSoCW5dcJrCWoLJdJSkQWQnNW5lcQCo2','uvHIACky','W4zbWRK','mSkZWO5GWRW','WQTFW58','W5ddTgtcScW','4P+8BEIeGEACL+I/U+IIQEMaOowkQUs7PoMvT+IUL8ov','qSoAWOhdU8koyG','puygW7JcJSkXFSkvDa','W4ldTGWZWOC','cmkqWP1XW7JcLLBcNapdPG','yCo6FmoxWQNdS2RdVMiysNK','W6a2WRpcPa','WO5KdG','m8k3WP9K','WP4GerldQa','8kUpU++7GW','sbNdM8oOF8kSAxZdTGhdGKOy','WRpdTdVdMq','WQZcJIa','CNTFw8kF','dfLC','dColWRi','WPFcLCoVnX5l','W6ddKGSyWQtcRW','W6tdIdjRB2tdUeJcVCkX','pYVcTSkDWP0','W64ZkmkVW5Pl','W43cMSoygSo0BmoymmkqzG','o0f5AqunWR0','WQeSW6hdKINcVcDXpq','n2nbuCk5','DSk8l8oLWP8','WQNdGKaRjq','d1NcScRdQa','W6BdHGXtla','ddpcKCoasa','uGyl'].concat((function(){return['W5W9ra','W7SZl8kqW7n8','a8oTWP8mW6W','W6yHWQlcLSkSW4f0','f8kKW7TwWRO','pGxcOCkj','fafPW6FcRG','W6yCWRdcG8kb','W7tdJ2dcLG5y','aepcOSkddW','ASo/W4PdWOnWhmoR','sEodKUw5U+MtTUwEKUwEO+ocPYxdUSoLWQ7cG3PCWODHWRPRwSohnbvAWOZdNSkTWQpdIbddSb5jtZ8SaCoP','aHBcKSkdW6tcN0GyWQ3cJ8k2WP51bfPsWPVdNw4','xCoaWPlcOLtdVSogW6y','rmoIWONcMha','WPxcNCoigIO','ECo9WOFcPwi','q8oAWPZdR8kBBCkl','nSoZW4KVDa','lCooW5mvtG','W785nCk5W5Dl','WQ5cW4xcS8kbW6xdG8omhxpdVCkhh1C8u8kpv1BcTCoDW4hdQSkkdCkpzMzqoSkDACofaa','WRddSdVdSCodwYhcRwOor1iWkSkwWO8','WPGhWP3dVSkpvW','WQpORyRMSkFLKRpLUzNdQa','5BUb6zc05lMj5A6/5z645OUv6i6F5y2J5BQ66zkU5l+n5OgE5Ash6lAK','5P6q55+O5AsF5zkS6Aot5y+I54Qc5Oc7','WQ/dV2G','du7cGSkU','WORcJJxdRSoQ','kIpcPCkNWOS','WRBdQh8Eaq','W4tcGNu','fXhcLSkgW47cPfmAWOpcImk3WR4','qCodWPlcLhC','4PUaAUIVIUwhVowTJos4I+w+ToILQoEzLEEnJ+wJN+woVEMhKUwqQowePUI8MoIIQUIgO+AFTa','W4K3WPGQiG','i8kqfcb4','WRf+W7pcQCk0','WQhdSchdNmoirqhcPW','W6hORkNMSixLPPtOTQVcR+kCVSkK','W5ynWR/cKmk0','emkDWPDXWPZcKW','W6BdKXm','W6/dRCkmW4VcJmotEq','iLv5EWm','WReuW6xdNYu','WPddL8kAxSo0fCkUBG','W6tdQhdcSdG','WRaUW7ZdJa0','WQZcKYxdGmoK','W58KoSkyW5e','WQbFW4K','WO11h00','W4NcQSoVW4xdRxldHCkf','hCohWQqLW5GCWPxcQq','W6S3mSkUW6jwW4uX','mCkRkSkYW5e','WRpdOMy+n0KNwGa','iGlcRCobv8oTW5pcT8kYrKBcJeHQdtVcGSktg2XUW4VdIa','44ga5O6056E244o96kYe5yEX6i2J5yYKW7vcWQ16fmo6','8jkQOI0','WP4EW6VdUaZcGSkCWR7cLW','WP7dJ8kbqCo1','WOS9F19MdwbSWR7cUHtdVq','vmkFfCo5WOW','nG/cTSoIDSoM','cKFcUItdRSkB','iahcQSoBDq','dCkuWPvK','ugX5CCkFWRuQWPPMtW','a1JcNI/dVq','g8owWPuXW5qa','lZFdVSonFCoyWP4','idddO8ojy8oa','qSoWpG5QWQyZoG','WQuUWP3dGmkx','WPFcT8oNarm','WO3dGcRdN8oM','W7ZdUJfXka','WPKkWOhdU8kQrW','iL0t','W51pWRFcVgJdM8obW6S','hWZcKmk0W6/cVG','kqJcVG','cbJdTCo0qq','W4OstCkQaW','xColWP3dTCkuBCkhu8kF','W7KCv3bJ','WPldNc0','DmoWWQnDW4BcJCo5cq','cSk7WPX7W6q','prxdHmo/Aq','5BIl6zkS5zgw56sQ776Sha','W7JdIdLrgG','gu7cN8k5iq','WRaTWQBdPCkK','gCk8b8kZW50','W5LEWRlcOuG','W4NcPCoZW5pdVa','W5JORztMSQZLK6pLUjmp','dvnivCkGW6Xh','W4GCWP4pBmoIW43dSuTHjLtdLCocWOb+pW','lmkMACkVW7hcRvVcMg4Af0alWRdcVSoPo8o3WO10W7FdVSkSW4VdVCkBWPvZWP1NWOJdQJpdI8ocW5zLWQpdICotW7upjffi','adhdH8oOza','W5Cqfq','fI9tW5dcSZa4WO0','W7RdKa9SdCoY','W7iTC8kjpa','W5O/qa0qtaBdNwddVCoM','iJdcMSoXEa'];}()));}()));}());Iii11l=function(){return I1iIIi;};return Iii11l();}function iii1II(_0x3eec02,_0x2c2624){const _0x4e328e=Iii11l();return iii1II=function(_0x3d1dad,_0x4511ee){_0x3d1dad=_0x3d1dad-0x179;let _0x2aff25=_0x4e328e[_0x3d1dad];if(iii1II['szzjAx']===undefined){var _0x89f153=function(_0x45ced5){const _0x2f90e4='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x494eab='',_0x12162b='';for(let _0x144d46=0x0,_0x517906,_0x2d0da1,_0x1417a6=0x0;_0x2d0da1=_0x45ced5['charAt'](_0x1417a6++);~_0x2d0da1&&(_0x517906=_0x144d46%0x4?_0x517906*0x40+_0x2d0da1:_0x2d0da1,_0x144d46++%0x4)?_0x494eab+=String['fromCharCode'](0xff&_0x517906>>(-0x2*_0x144d46&0x6)):0x0){_0x2d0da1=_0x2f90e4['indexOf'](_0x2d0da1);}for(let _0x420cae=0x0,_0x22b6c5=_0x494eab['length'];_0x420cae<_0x22b6c5;_0x420cae++){_0x12162b+='%'+('00'+_0x494eab['charCodeAt'](_0x420cae)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x12162b);};const _0xd3e3da=function(_0x26d425,_0x2576e0){let _0x410615=[],_0x2533b1=0x0,_0x12b075,_0x5004a8='';_0x26d425=_0x89f153(_0x26d425);let _0x84c37a;for(_0x84c37a=0x0;_0x84c37a<0x100;_0x84c37a++){_0x410615[_0x84c37a]=_0x84c37a;}for(_0x84c37a=0x0;_0x84c37a<0x100;_0x84c37a++){_0x2533b1=(_0x2533b1+_0x410615[_0x84c37a]+_0x2576e0['charCodeAt'](_0x84c37a%_0x2576e0['length']))%0x100,_0x12b075=_0x410615[_0x84c37a],_0x410615[_0x84c37a]=_0x410615[_0x2533b1],_0x410615[_0x2533b1]=_0x12b075;}_0x84c37a=0x0,_0x2533b1=0x0;for(let _0x38fb01=0x0;_0x38fb01<_0x26d425['length'];_0x38fb01++){_0x84c37a=(_0x84c37a+0x1)%0x100,_0x2533b1=(_0x2533b1+_0x410615[_0x84c37a])%0x100,_0x12b075=_0x410615[_0x84c37a],_0x410615[_0x84c37a]=_0x410615[_0x2533b1],_0x410615[_0x2533b1]=_0x12b075,_0x5004a8+=String['fromCharCode'](_0x26d425['charCodeAt'](_0x38fb01)^_0x410615[(_0x410615[_0x84c37a]+_0x410615[_0x2533b1])%0x100]);}return _0x5004a8;};iii1II['rytHfe']=_0xd3e3da,_0x3eec02=arguments,iii1II['szzjAx']=!![];}const _0x5aa1d3=_0x4e328e[0x0],_0x80e2a8=_0x3d1dad+_0x5aa1d3,_0x381a87=_0x3eec02[_0x80e2a8];return!_0x381a87?(iii1II['fqrbee']===undefined&&(iii1II['fqrbee']=!![]),_0x2aff25=iii1II['rytHfe'](_0x2aff25,_0x4511ee),_0x3eec02[_0x80e2a8]=_0x2aff25):_0x2aff25=_0x381a87,_0x2aff25;},iii1II(_0x3eec02,_0x2c2624);};const activityArgv=process[Ilil1l(0x234,'#&lI')][Ilil1l(0x1ee,'S12R')]||'';let taskThreads=process[Ilil1l(0x27d,')JR)')][Ilil1l(0x285,'xNc%')]||'1';const runInterval=process[Ilil1l(0x23f,']k6^')]['jd_drawShopGift_interval']||Ilil1l(0x1d8,'ldSK'),isNotify=(process[Ilil1l(0x234,'#&lI')][Ilil1l(0x2a6,'^KG]')]||process['env']['jd_drawShopGift_Notify'])===Ilil1l(0x1fa,'LCf!'),cookiesArr=Object[Ilil1l(0x1a8,')JR)')](jdCookie)[Ilil1l(0x2b2,'!lMv')](iIII1I=>jdCookie[iIII1I])[Ilil1l(0x18c,'XUu8')](ilil1i=>ilil1i);!cookiesArr[0x0]&&($['msg']($[Ilil1l(0x259,'Z15v')],Ilil1l(0x250,'r5iv')),process[Ilil1l(0x249,'VlCY')](0x1));!(async()=>{const iIIiii=Ilil1l,IlIIi={'nBYuS':'未知奖品领取状态','PqIVq':function(IiI1l){return IiI1l();},'BCeZt':function(illlII,iIII11){return illlII!==iIII11;},'GbExR':iIIiii(0x233,'5SCT')};notify[iIIiii(0x206,']k6^')]({'title':$['name']}),await IlIIi[iIIiii(0x2b1,'^^8H')](Main),isNotify&&notify[iIIiii(0x25a,'Vi^$')]()&&(IlIIi[iIIiii(0x180,'wdgd')](iIIiii(0x211,'ldSK'),IlIIi['GbExR'])?(ii1li['log']('❓'+IIll1+'\x20'+ll1il[iIIiii(0x20c,'bpck')](IiiIiI)),lilii[iIIiii(0x1fb,'VlCY')](IlIIi['nBYuS'])):await notify[iIIiii(0x1fc,'9*!r')]());})()[Ilil1l(0x273,'O[vj')](llll1=>$[Ilil1l(0x267,'m7nP')](llll1))[Ilil1l(0x25d,'CpO2')](()=>$['done']());async function Main(){const iilll=Ilil1l,lil11l={'kvEXe':function(i1i1Il,I1lIl1){return i1i1Il(I1lIl1);},'wHBjF':function(lil11i,IlIIl){return lil11i>=IlIIl;},'nZamy':iilll(0x22e,'V^pY'),'OwYuj':'⚠\x20请提供完整信息后再运行脚本','ZOHnG':'⚠\x20请填写格式正确的环境变量','cMfUl':function(lI1liI,i1i1Ii){return lI1liI===i1i1Ii;},'GEIUY':iilll(0x196,'uJ21'),'MutNu':iilll(0x19c,'dXEw'),'hOUMQ':iilll(0x243,'xNc%'),'QFvai':function(lllii,iI11Ii){return lllii===iI11Ii;},'dmWda':iilll(0x277,'i2b#'),'zGiKx':function(iIII1l,lllil){return iIII1l||lllil;},'qesjC':function(iI11Il,iIII1i){return iI11Il===iIII1i;},'okoFm':function(iil1i1,il1i11){return iil1i1!==il1i11;},'aVHLZ':iilll(0x275,'dXEw'),'RMwif':iilll(0x226,'!]Lx'),'FhlCA':iilll(0x241,'4D8T'),'TznQk':iilll(0x26a,'Aeyz'),'OLsKt':function(IlIll1,IlIII){return IlIll1===IlIII;},'sEDZb':'BIyQw','JuPqx':function(ilil1l,illlIi){return ilil1l<illlIi;},'AJyZj':function(I1lIii,IiI1I){return I1lIii&&IiI1I;},'tdDxz':iilll(0x22d,'dXEw'),'FKWfT':function(illlIl,i11ill){return illlIl!==i11ill;},'hfPhz':function(IIIIIi,IIIIIl){return IIIIIi!==IIIIIl;},'gWCcG':iilll(0x218,'iIRY'),'aRngS':iilll(0x231,'vMN1'),'jJtJj':'AXBEf','DXlsb':'⚠\x20自定义运行间隔时长设置错误'};try{if(lil11l[iilll(0x261,'tvwc')](lil11l[iilll(0x255,'^KG]')],iilll(0x295,'Vi^$'))){const IIIl1i=II1Ii[iilll(0x198,'LLeY')]('_');IIIl1i[iilll(0x1e9,'m7nP')]===0x2?(lI1Il1[iilll(0x2b4,'^KG]')]=IIIl1i[0x0],lilIi1[iilll(0x24a,'i2b#')]=IIIl1i[0x1]):IiilII[iilll(0x1d5,'5^gP')]=IIIl1i[0x0];}else{if(!activityArgv){console[iilll(0x1bd,'1&cm')](iilll(0x237,'uJ21'));return;}try{if(iilll(0x242,'bpck')===lil11l[iilll(0x28f,'dXEw')])lilil[iilll(0x1b3,'XUu8')]('❌\x20未能正确处理\x20'+ll1ll+iilll(0x278,'xNc%')+(Illl11[iilll(0x28d,'xNc%')]||ii1lI));else{if(activityArgv[iilll(0x1de,'r5iv')](lil11l[iilll(0x216,'3VrX')])){if(lil11l[iilll(0x1f1,'Z15v')](iilll(0x182,'vMN1'),lil11l['dmWda'])){const {shopId:lllll,venderId:i11ili,vendorId:iil1l1}=common[iilll(0x1cc,'xNc%')](activityArgv);$[iilll(0x256,'(SL(')]=lllll,$[iilll(0x24b,'3VrX')]=lil11l[iilll(0x232,'r5iv')](i11ili,iil1l1);}else l1iii['outFlag']=!![];}else{const iiili1=activityArgv[iilll(0x276,'dr^C')]('_');if(lil11l[iilll(0x2c0,'uJ21')](iiili1[iilll(0x1f5,'nDDs')],0x2)){if(lil11l['okoFm'](lil11l['aVHLZ'],lil11l[iilll(0x1a0,'S12R')]))$['shopId']=iiili1[0x0],$[iilll(0x1ab,'c9L1')]=iiili1[0x1];else{lIIil1['log'](IIli1['getInlineContent']());if(II1liI[iilll(0x1ac,'kT30')])return{'runEnd':!![]};else return;}}else $['venderId']=iiili1[0x0];}}}catch{console[iilll(0x203,'Jt2t')]('⚠\x20请填写格式正确的环境变量');return;}finally{if(!$[iilll(0x24b,'3VrX')]&&!$[iilll(0x1e4,'r5iv')]){if(lil11l[iilll(0x236,'S12R')](lil11l[iilll(0x1bf,'V^pY')],lil11l[iilll(0x1cb,'xNc%')]))try{const ill11l=lil11l[iilll(0x2a0,')JR)')](l1i11I,II11II);lil11l[iilll(0x23a,'!O&W')](ill11l,0x0)&&(lilIli['waitTime']=ill11l);}catch{Iliill[iilll(0x1b7,']k6^')]('⚠\x20自定义运行间隔时长设置错误');}else{console[iilll(0x1ea,'vMN1')](lil11l[iilll(0x274,'Kw5j')]);return;}}}if(!$['venderId']||!$[iilll(0x2b4,'^KG]')]){if(lil11l['okoFm'](lil11l['TznQk'],'zJJkG'))ll1l1[iilll(0x1c8,'S12R')](iilll(0x192,'S12R')+IllIIi['stringify'](IllIIl[iilll(0x209,'^^8H')])),IiiIi1[iilll(0x284,'Yc4a')](lil11l[iilll(0x292,'#&lI')]);else{console[iilll(0x1b3,'XUu8')](lil11l[iilll(0x1af,'S12R')]);return;}}let liiII1;if(!$['venderId']||!$[iilll(0x23e,'Z15v')]){if(lil11l['OLsKt'](lil11l[iilll(0x18b,'7sh3')],iilll(0x23d,'LCf!'))){let lllili=$[iilll(0x2c7,'Z15v')]?{'venderId':String($['venderId'])}:{'shopId':String($[iilll(0x1ae,'LLeY')])},IliiiI,Ill11,liiIII;for(let li1i11=0x0;lil11l['JuPqx'](li1i11,0x2);li1i11++){IliiiI=await common['getShopDetail'](lllili);let iI11I1=IliiiI?.['shopBaseInfo']||{};liiII1=iI11I1[iilll(0x221,'S12R')]||'',Ill11=iI11I1[iilll(0x2b5,'XUu8')],liiIII=iI11I1[iilll(0x23b,'LLeY')];if(lil11l[iilll(0x1dd,'P4K7')](liiII1,Ill11)&&liiIII)break;lllili=$[iilll(0x17c,'wdgd')]?{'shopId':String($[iilll(0x1a5,'VlCY')])}:{'venderId':lil11l[iilll(0x272,'ldSK')](String,$[iilll(0x23e,'Z15v')])},liiII1='';}if(!Ill11||!liiIII){console[iilll(0x203,'Jt2t')](lil11l[iilll(0x195,']k6^')]);return;}else $['shopId']=Ill11,$['venderId']=liiIII;}else iIIl11[iilll(0x193,'dXEw')](iilll(0x1f4,'c9L1')+l1l1I1);}console[iilll(0x268,'(SL(')]((liiII1?iilll(0x271,'^^8H')+liiII1+'\x0a':'')+iilll(0x1b0,'5SCT')+$[iilll(0x264,'Kw5j')]+'&venderId='+$[iilll(0x1ec,'Kw5j')]+'\x0a'),notify['appendContent']((liiII1?'\x0a【店铺名称】#'+liiII1:'')+iilll(0x21f,'9*!r')+$[iilll(0x1d2,'5^gP')]+'&venderId='+$['venderId']);try{const IlIlll=parseInt(taskThreads);if(IlIlll>0x0&&lil11l[iilll(0x1be,']k6^')](IlIlll,0x1)){if(lil11l[iilll(0x181,'ybut')](lil11l[iilll(0x282,'(SL(')],lil11l[iilll(0x1c3,'!O&W')])){iIIII1['log'](lil11l['OwYuj']);return;}else taskThreads=IlIlll;}}catch{taskThreads=0x1;}taskThreads=Math[iilll(0x1f2,'!O&W')](taskThreads,0x5),$[iilll(0x17e,'vMN1')]=null;if(runInterval){if(lil11l[iilll(0x1da,'dXEw')](lil11l[iilll(0x1bc,'dr^C')],iilll(0x1e8,'!lMv')))try{if(lil11l[iilll(0x260,'Kw5j')](iilll(0x2bb,'vMN1'),lil11l[iilll(0x222,'S12R')])){IiilIi[iilll(0x17a,'bpck')](lil11l[iilll(0x1a3,'VlCY')]);return;}else{const IlIlli=parseInt(runInterval);lil11l['wHBjF'](IlIlli,0x0)&&($['waitTime']=IlIlli);}}catch{console[iilll(0x1b3,'XUu8')](lil11l['DXlsb']);}else li1Il=li1Ii;}await common['concTask'](taskThreads,cookiesArr,taskFnc);}}catch(lil111){console[iilll(0x1d3,'!lMv')](iilll(0x2c5,'!lMv')+lil111);}}async function taskFnc(i11ilI,ii1ii1){const il1iI1=Ilil1l,llllI={'VMBEF':function(Iliii1,iIiIi){return Iliii1||iIiIi;},'EjSmS':il1iI1(0x1ca,'(SL('),'RVMkb':'获取活动信息失败','zYplx':il1iI1(0x21a,'uJ21'),'fQoUb':function(iil1ll,iiilil){return iil1ll===iiilil;},'zlIYF':function(iil1li,lillIl){return iil1li===lillIl;},'oOzqn':'F10000','CaMqJ':il1iI1(0x213,'Jt2t'),'XSmma':function(iIiIl,iiilii){return iIiIl!==iiilii;},'IQLKH':il1iI1(0x28b,'iIRY'),'jROow':il1iI1(0x223,'tvwc'),'AzzlF':il1iI1(0x299,'5SCT'),'mMbej':il1iI1(0x1d9,'GLYT'),'kSObr':il1iI1(0x1c0,'xNc%'),'lSKgG':il1iI1(0x2c2,'nDDs'),'IoWDu':il1iI1(0x2bf,'uJ21'),'fGUAo':'活动不存在或已领过','kzhSg':function(li1i1i,IlIli1){return li1i1i>IlIli1;},'GYyDw':function(illIiI,lI1lli){return illIiI===lI1lli;},'ZUegK':il1iI1(0x247,'^^8H'),'XGvBg':il1iI1(0x18e,'ldSK'),'ErRge':il1iI1(0x229,'!O&W'),'BLTpi':'app-shop','psSOP':'shop_app_home_home','BtVaH':'getShopHomeActivityInfo','WUzwx':il1iI1(0x2b0,'uJ21'),'rvvLx':'*/*','rkHzk':il1iI1(0x27b,'dXEw'),'HtEuD':il1iI1(0x1b8,'S12R'),'edWJb':'cors','leDbX':il1iI1(0x1a7,'O[vj'),'oFTic':'com.360buy.jdmobile','RQcWJ':il1iI1(0x1a9,'Aeyz'),'QZagO':'GET','efsIJ':function(Ill1l,llI1Il){return Ill1l===llI1Il;},'mRcIN':il1iI1(0x184,']k6^'),'MKZQB':function(ii1iii,i11iil,Ill1i){return ii1iii(i11iil,Ill1i);},'RNygj':function(ii1iil,lllI1l){return ii1iil>=lllI1l;},'ltgJv':il1iI1(0x280,'Aeyz'),'hkJeq':'YziwH','oDMxW':function(i11iii,llI1Ii){return i11iii(llI1Ii);},'SwlqV':il1iI1(0x25c,'3VrX'),'xnTXL':'boolean','ITHRw':il1iI1(0x1b9,'Vi^$'),'MUwCP':function(lllI1i,li1i1l){return lllI1i+li1i1l;},'iYVAL':function(II1i1,lI1lll){return II1i1*lI1lll;},'FBSVI':function(iIiII,iil1lI){return iIiII-iil1lI;},'hQdyQ':il1iI1(0x2be,'Vi^$'),'AFeXP':function(iiiliI,li1i1I){return iiiliI-li1i1I;},'jMovd':il1iI1(0x2ae,'GLYT'),'yIcCD':function(illIii,ii1il1){return illIii!==ii1il1;},'IypwF':il1iI1(0x21b,'LCf!'),'YDdPR':il1iI1(0x245,'bpck'),'CECpL':'取关店铺失败'};if($[il1iI1(0x291,'bpck')])return{'runEnd':!![]};const lllil1=llllI[il1iI1(0x263,'ldSK')](decodeURIComponent,common['getCookieValue'](i11ilI,llllI['SwlqV'])),iil1il=notify[il1iI1(0x257,'Yc4a')](ii1ii1,lllil1),ilil1I=await common[il1iI1(0x17b,'tvwc')](i11ilI);if(!ilil1I&&llllI[il1iI1(0x20e,'^KG]')](typeof ilil1I,llllI[il1iI1(0x2a3,'ldSK')])){iil1il['fix'](llllI[il1iI1(0x212,'(SL(')]),console[il1iI1(0x1e3,'r5iv')](iil1il[il1iI1(0x179,'(SL(')]());return;}const i11il1=common[il1iI1(0x24d,'dXEw')](lllil1),ii1iiI=llllI[il1iI1(0x1f3,'XUu8')](il1iI1(0x26d,'#&lI'),Math[il1iI1(0x253,'xNc%')](llllI[il1iI1(0x2bd,'vMN1')](Math['random'](),llllI[il1iI1(0x19d,'wdgd')](0x2710,0x1869f))))+0x1869f,lllilI=llllI['MUwCP'](llllI[il1iI1(0x1bb,'xNc%')]+Math[il1iI1(0x210,'Yc4a')](Math[il1iI1(0x1e1,'3VrX')]()*llllI[il1iI1(0x269,'CpO2')](0x2710,0x1869f)),0x1869f),ilil11=common[il1iI1(0x215,'^^8H')](lllil1),illlI1=common[il1iI1(0x189,'O[vj')]();let IIIl11='',I1lIi1='';await lil11I(llllI['BtVaH']);if($[il1iI1(0x24c,'^^8H')])await $[il1iI1(0x19b,'CpO2')]($['waitTime']);if($[il1iI1(0x298,'GLYT')]||!I1lIi1){console[il1iI1(0x265,'d67N')](iil1il[il1iI1(0x22a,'LLeY')]());if($['runEnd'])return{'runEnd':!![]};else{if(llllI[il1iI1(0x1ef,'Vi^$')](llllI['jMovd'],il1iI1(0x1d0,'(SL('))){const {shopId:illIil,venderId:Ill1I,vendorId:i11iiI}=II11Ii[il1iI1(0x18f,'LCf!')](II11Il);IlI11[il1iI1(0x1a1,'i2b#')]=illIil,iIIIIl[il1iI1(0x2c1,'vMN1')]=llllI[il1iI1(0x1d4,'!O&W')](Ill1I,i11iiI);}else return;}}else{IIIl11=I1lIi1?.[il1iI1(0x1b2,'GLYT')];if(!IIIl11){iil1il[il1iI1(0x283,'m7nP')](llllI['fGUAo']),console[il1iI1(0x199,'9*!r')](iil1il['getInlineContent']());return;}}if(I1lIi1[il1iI1(0x1eb,'ybut')]){if(llllI[il1iI1(0x244,'XUu8')](llllI[il1iI1(0x26f,'9*!r')],llllI[il1iI1(0x1ad,'P4K7')])){IiilI1[il1iI1(0x1f0,'dr^C')](llllI['EjSmS']);return;}else{const lllI1I=await common[il1iI1(0x190,'kT30')](![],$['shopId'],i11ilI);if(!lllI1I&&typeof lllI1I===llllI[il1iI1(0x194,'nDDs')]){if(llllI[il1iI1(0x238,'ybut')]('iTANP',llllI['YDdPR']))IIli1i[il1iI1(0x188,'Kw5j')]('参与活动成功但未领取到奖品（'+I1iIi1+'）');else{iil1il['fix'](llllI[il1iI1(0x227,'!]Lx')]),console[il1iI1(0x1ea,'vMN1')](iil1il[il1iI1(0x1ed,'i2b#')]());return;}}}}if($[il1iI1(0x294,'9*!r')])await $[il1iI1(0x2ad,'tvwc')]($[il1iI1(0x294,'9*!r')]);await llllI['oDMxW'](lil11I,llllI[il1iI1(0x224,'S12R')]);if($[il1iI1(0x1ce,'xNc%')])return console[il1iI1(0x1db,'P4K7')](iil1il['getInlineContent']()),{'runEnd':!![]};if($[il1iI1(0x266,'dr^C')])await $[il1iI1(0x230,'O[vj')]($[il1iI1(0x2c3,'CpO2')]);console[il1iI1(0x1b4,'V^pY')](iil1il['getInlineContent']());function liiIIi(IlIlii,i1l1i1){const IlllIi=il1iI1;try{if(IlllIi(0x270,'CpO2')===llllI[IlllIi(0x191,'!]Lx')])switch(IlIlii){case IlllIi(0x24f,'(SL('):if(llllI[IlllIi(0x1c4,'m7nP')](i1l1i1[IlllIi(0x2a1,'vMN1')],'0')&&i1l1i1['isSuccess']&&i1l1i1[IlllIi(0x22b,'Kw5j')])I1lIi1=i1l1i1[IlllIi(0x17d,'LCf!')];else i1l1i1[IlllIi(0x240,'GLYT')]?(iil1il['fix'](i1l1i1[IlllIi(0x225,'nDDs')]),i1l1i1[IlllIi(0x1aa,'V^pY')]['includes'](IlllIi(0x197,'^^8H'))&&($[IlllIi(0x19a,'CpO2')]=!![])):iil1il[IlllIi(0x248,'!O&W')](llllI[IlllIi(0x2a5,'4D8T')]);break;case IlllIi(0x289,'bpck'):if(llllI[IlllIi(0x21d,'O[vj')](i1l1i1[IlllIi(0x2bc,'5^gP')],'0')&&i1l1i1['isSuccess']&&i1l1i1[IlllIi(0x28a,'wdgd')]){const {followCode:liil11,followDesc:iiillI,giftCode:l1l111,giftDesc:l1iIII,alreadyReceivedGifts:llI1I1}=i1l1i1[IlllIi(0x187,'^KG]')];switch(liil11){case llllI[IlllIi(0x208,'r5iv')]:switch(l1l111){case llllI[IlllIi(0x1b6,'Vi^$')]:for(const IlIlil of llI1I1){let lIli1I=[IlIlil?.[IlllIi(0x217,'LCf!')],IlIlil?.['rearWord']]['join']('');switch(IlIlil?.[IlllIi(0x24e,'5SCT')]){case 0x1:case 0x2:case 0x3:iil1il[IlllIi(0x21c,'XUu8')](lIli1I+'🗑️');break;case 0x4:iil1il[IlllIi(0x25e,'CpO2')](lIli1I+'🐶');break;case 0x6:iil1il['insert'](lIli1I+IlllIi(0x1fe,'r5iv'));break;default:iil1il[IlllIi(0x27f,'ldSK')](lIli1I);break;}}break;case IlllIi(0x214,'VlCY'):console[IlllIi(0x193,'dXEw')](l1iIII);for(let II1il of['抢完']){if(llllI[IlllIi(0x1cf,'3VrX')](llllI[IlllIi(0x29d,'tvwc')],llllI[IlllIi(0x26c,'c9L1')]))i1ll['shopId']=i1l1lI[0x0],i1iliI[IlllIi(0x1c2,'LCf!')]=I1iIii[0x1];else{if(l1iIII[IlllIi(0x296,']k6^')](II1il)){if(llllI['jROow']===llllI[IlllIi(0x20f,'5SCT')]){$['runEnd']=!![],iil1il['insert'](l1iIII);break;}else iIIl1I[IlllIi(0x28c,')JR)')]=I1iIli;}}}break;case IlllIi(0x252,'dr^C'):iil1il[IlllIi(0x2b6,'vMN1')](llllI[IlllIi(0x1fd,'P4K7')]);break;default:!llI1I1?llllI[IlllIi(0x1df,'Kw5j')](llllI[IlllIi(0x288,'ybut')],llllI[IlllIi(0x246,'vMN1')])?II1lii['fix'](llllI[IlllIi(0x239,'wdgd')]):iil1il[IlllIi(0x1dc,'wdgd')](IlllIi(0x1cd,'Yc4a')+l1l111+'）'):(console[IlllIi(0x18d,'4D8T')](IlllIi(0x1e7,'#&lI')+JSON[IlllIi(0x1f6,'d67N')](i1l1i1['result'])),iil1il['fix'](llllI['kSObr']));break;}break;case llllI[IlllIi(0x293,'kT30')]:iil1il[IlllIi(0x2aa,'O[vj')](iiillI);break;default:console['log']('未知活动状态\x20'+JSON['stringify'](i1l1i1['result'])),iil1il[IlllIi(0x201,'1&cm')](llllI[IlllIi(0x27c,'CpO2')]);}}else i1l1i1['message']?iil1il['fix'](i1l1i1[IlllIi(0x20b,'4D8T')]):(console['log']('❓'+IlIlii+'\x20'+JSON[IlllIi(0x26b,'nDDs')](i1l1i1)),iil1il[IlllIi(0x204,'3VrX')](llllI['kSObr']));break;}else return{'runEnd':!![]};}catch(IIIIII){console[IlllIi(0x1c8,'S12R')](IlllIi(0x18a,'^KG]')+IlIlii+IlllIi(0x22c,']k6^')+(IIIIII[IlllIi(0x279,'Jt2t')]||IIIIII));}}async function lil11I(lillII){const i1l1Ii=il1iI1,ii1ilI={'jmAjg':function(lI1ll1,iIiI1){return lI1ll1(iIiI1);},'DKakW':function(liil1I,i11ii1){return llllI['kzhSg'](liil1I,i11ii1);},'AAqtK':function(IlIliI,l1iII1){const iIIiil=iii1II;return llllI[iIIiil(0x29c,'Vi^$')](IlIliI,l1iII1);}};if(llllI['GYyDw'](llllI[i1l1Ii(0x262,'LLeY')],llllI[i1l1Ii(0x2a8,'Z15v')])){if($[i1l1Ii(0x298,'GLYT')])return;let iiill1='',lIli1i=null,IIIII1=null,I1lIlI=llllI['XGvBg'],ii1ill={};switch(lillII){case i1l1Ii(0x2a4,'S12R'):iiill1=llllI['ErRge'],ii1ill={'shopId':''['concat']($[i1l1Ii(0x2c4,'xNc%')]||''),'source':llllI['BLTpi'],'displayWidth':'1218.000000','sourceRpc':llllI[i1l1Ii(0x1a2,'#&lI')],'lng':lllilI,'lat':ii1iiI,'venderId':''[i1l1Ii(0x205,'tvwc')]($[i1l1Ii(0x1c1,'nDDs')]||'')},IIIII1={'functionId':llllI['BtVaH']},lIli1i=common[i1l1Ii(0x220,'m7nP')](await common['getSign'](llllI['BtVaH'],ii1ill));break;case i1l1Ii(0x235,'m7nP'):iiill1=llllI[i1l1Ii(0x202,'Vi^$')],ii1ill={'follow':0x0,'shopId':''[i1l1Ii(0x1c9,'iIRY')]($[i1l1Ii(0x29a,'ybut')]||''),'activityId':''[i1l1Ii(0x228,'^^8H')](IIIl11||''),'sourceRpc':i1l1Ii(0x1e2,'dXEw'),'venderId':''[i1l1Ii(0x2ba,'LCf!')]($[i1l1Ii(0x27e,'uJ21')]||'')},IIIII1={'functionId':llllI[i1l1Ii(0x1c6,'!O&W')]},lIli1i=common[i1l1Ii(0x185,'!lMv')](await common['getSign'](llllI[i1l1Ii(0x20d,'Jt2t')],ii1ill));break;default:console['log'](i1l1Ii(0x1a6,'tvwc')+lillII);return;}const II1iI={'url':iiill1,'method':I1lIlI,'headers':{'Accept':llllI[i1l1Ii(0x2b3,'7sh3')],'Accept-Encoding':i1l1Ii(0x27a,'ybut'),'Accept-Language':llllI['rkHzk'],'Connection':i1l1Ii(0x1f8,'Z15v'),'Content-Type':'application/x-www-form-urlencoded','Cookie':i11ilI,'J-E-H':illlI1,'J-E-C':ilil11,'Sec-Fetch-Dest':llllI[i1l1Ii(0x1ba,'wdgd')],'Sec-Fetch-Mode':llllI[i1l1Ii(0x297,'V^pY')],'Sec-Fetch-Site':llllI[i1l1Ii(0x1e5,'5^gP')],'User-Agent':i11il1,'x-referer-package':llllI['oFTic'],'x-rp-client':llllI['RQcWJ']},'params':IIIII1,'data':lIli1i,'timeout':0x7530};if(I1lIlI===llllI['QZagO']){if(llllI[i1l1Ii(0x19e,'9*!r')](llllI['mRcIN'],i1l1Ii(0x29f,'kT30')))delete II1iI['data'],delete II1iI['headers']['Content-Type'];else{const liil1i=ii1ilI[i1l1Ii(0x25b,'Yc4a')](i1III,Ii1iIi);ii1ilI[i1l1Ii(0x2a9,'d67N')](liil1i,0x0)&&ii1ilI[i1l1Ii(0x2a2,'3VrX')](liil1i,0x1)&&(Ii1iIl=liil1i);}}const llI1II=0x1;let lIli1l=0x0,lillIi=null,illIi1=![];while(lIli1l<llI1II){const lI1lil=await common[i1l1Ii(0x19f,'7sh3')](II1iI);if(!lI1lil['success']){if(llllI[i1l1Ii(0x258,'(SL(')](i1l1Ii(0x1a4,'^^8H'),i1l1Ii(0x1f7,']k6^')))IliI1l['fix'](lliiil['message']);else{lillIi='🚫\x20'+lillII+i1l1Ii(0x23c,'vMN1')+lI1lil[i1l1Ii(0x2b9,'Kw5j')],lIli1l++;continue;}}if(!lI1lil[i1l1Ii(0x200,'LLeY')]){lillIi=i1l1Ii(0x251,'Vi^$')+lillII+'\x20请求失败\x20➜\x20无响应数据',lIli1l++;continue;}llllI['MKZQB'](liiIIi,lillII,lI1lil['data']),illIi1=![];break;}if(llllI['RNygj'](lIli1l,llI1II)){console['log'](lillIi);if(illIi1){if(llllI[i1l1Ii(0x1e0,'7sh3')]!==llllI[i1l1Ii(0x286,'m7nP')])$[i1l1Ii(0x186,'i2b#')]=!![];else{I1ilI1[i1l1Ii(0x2af,'dXEw')](i1l1Ii(0x1d1,'wdgd')),iillll[i1l1Ii(0x265,'d67N')](lIIilI[i1l1Ii(0x2c6,'O[vj')]());return;}}}}else{llIlil[i1l1Ii(0x1d7,'i2b#')](llllI['fGUAo']),IIlil[i1l1Ii(0x1b1,'O[vj')](ilI1lI[i1l1Ii(0x22a,'LLeY')]());return;}}}var version_ = 'jsjiami.com.v7';
// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
