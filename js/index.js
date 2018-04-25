//添加top-grid
var arrH3 = new Array(
                        "视觉差网站","banner 螺旋化","Canvas雨滴","锤子移动端官网",
                        "3d画册","3d立体反转banner","动态实时时钟","纯手工写1号店","3D城市"
                    );
var arrP = new Array(
                        "Web前端&nbsp&nbsp网页制作","Javascript 制作特色banner",
                        "Javascript&nbsp&nbsp绘制会掉落的雨滴","用响应式开发写手机端",
                        "从多方位拖动的立体3d画册&nbsp;&nbsp;4/18","四个面实体动态反转&nbsp;&nbsp;4/18",
                        "网页手动绘画精准时钟&nbsp;&nbsp;4/19","1周内搞定1号店网站制作 4/22",
                        "立体炫酷3D城市图&nbsp;&nbsp;4/24"
                    );
var arrLink = new Array(
                        "01-Games","02-bannerluowen","03-canvas","04-smartisan",
                        "05-3dAlbum","06-3dBanner","07-clock","08-oneStore","09-3dCity"
                    );
function addGrid(){
    var str = '';
    for(var i=0;i<9;i++){
        str +='<div class="top-grid"><img src="images/index/'+(i+1)+'.jpg" alt=""><div class="top-grid-info"><h3>'+arrH3[i]+'</h3><p>'+arrP[i]+'</p></div><a href="link/index/'+arrLink[i]+'/index.html" target="_blank"></a></div>'
    }
    var last = '<div class="clearfix"> </div>';
    topGrids.innerHTML = str + last;
}
// 模板
// <div class="top-grid">
//     <img src="images/2.jpg" alt="" />
//     <div class="top-grid-info">
//         <h3>banner 螺旋化</h3>
//         <p>Javascript 制作特色banner</p>
//     </div>
//     <a href="link/bannerluowen/index.html" target="_blank"></a>
// </div>
