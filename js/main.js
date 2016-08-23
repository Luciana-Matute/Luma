// Porcentajes circulares
(function() {

var proto = $.circleProgress.defaults,
    superInitWidget = proto.initWidget,
    superDrawFrame = proto.drawFrame;

$.extend(proto, {
    initWidget: function() {
        superInitWidget.call(this);
        this.dotOffset = this.dotRadius - this.getThickness() / 2;
        this.radius -= this.dotOffset;
    },
    
    drawFrame: function(v) {
        this.ctx.save();
        this.ctx.clearRect(0, 0, this.size, this.size);
        this.ctx.translate(this.dotOffset, this.dotOffset);
        superDrawFrame.call(this, v);
        this.drawDot();
        this.ctx.restore();
    },
    
    drawDot: function() {
        var ctx = this.ctx,
            sa = this.startAngle,
            r = this.radius,
            rd = r - this.getThickness() / 2,
            x = r + rd * Math.cos(sa),
            y = r + rd * Math.sin(sa);

        ctx.save();
        ctx.fillStyle = this.arcFill;
        ctx.beginPath();
        ctx.arc(x, y, this.dotRadius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.restore();
    }
});
    
})();

var createObjects = false;
$(window).scroll(function () {
    var y = $(this).scrollTop();
    if (y >= 1000) { //depende de cuánto mida mi página de largo en px
        if (!createObjects) {
            createObjects = true;
            $('.circle').circleProgress({
            dotRadius: 12, // new attribute
            size: 160,
            thickness: 15,
            startAngle: -Math.PI / 2,
            fill: {
                gradient: ['#EDA2CC', '#495F8C']
            }
        });

        $('.1').circleProgress('value', 0.93);
        $('.2').circleProgress('value', 0.92);
        $('.3').circleProgress('value', 0.9);
        $('.4').circleProgress('value', 0.88);
        $('.5').circleProgress('value', 0.95);
        $('.6').circleProgress('value', 0.5);
        $('.7').circleProgress('value', 0.8);
        }
    }
});


$(".circle").smoove({
    offset  : '15%',
    moveY   : '100px'
});
$(".nav-tabs").smoove({
    offset  : '15%',
    moveY   : '100px'
});
$(".tab-content").smoove({
    offset  : '15%',
    moveY   : '100px'
});

//About me
$(".about-text").smoove({
    offset  : '15%',
    moveY   : '100px'
});
$(".about-title").smoove({
    offset  : '15%',
    moveY   : '100px'
});

//Desplazamiento lento de la página
