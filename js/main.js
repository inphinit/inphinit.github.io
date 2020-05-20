(function (d, w) {
    "use strict";

    setTimeout(function () {
        var tagName = 'script', el, lastScript;
        w.GoogleAnalyticsObject = 'ga';
        w.ga = w.ga || function () {
            (w.ga.q = w.ga.q || []).push(arguments);
        };

        w.ga.l = +new Date;
        el = d.createElement(tagName),
        lastScript = d.getElementsByTagName(tagName)[0];
        el.async = 1;
        el.src = 'https://www.google-analytics.com/analytics.js';
        lastScript.parentNode.insertBefore(el, lastScript);

        ga('create', 'UA-104903549-1', 'auto');
        ga('send', 'pageview');
    }, 1);

    var scroll, txtTmp = d.createElement('textarea');

    function copyNode(target)
    {
        if (!target) return;

        if (!scroll) scroll = d.scrollingElement ? d.scrollingElement : d.body;

        var r = d.createRange(), s = w.getSelection();

        r.selectNodeContents(target);

        s.removeAllRanges();
        s.addRange(r);

        d.execCommand("copy");

        s.removeAllRanges();

        s = r = null;

        var x = scroll.scrollLeft, y = scroll.scrollTop;

        d.body.appendChild(txtTmp);

        txtTmp.value = "";
        txtTmp.focus();

        d.execCommand("paste");

        txtTmp.select && txtTmp.select();

        d.execCommand("copy");

        d.body.removeChild(txtTmp);

        scroll.scrollLeft = x;
        scroll.scrollTop = y;
    }

    function putCopyBtn(e)
    {
        var b = d.createElement("button");

        b.setAttribute("type", "button");
        b.setAttribute("tabindex", "0");
        b.setAttribute("aria-label", "Copy code");

        b.onclick = function () {
            e.className += " cp";
            setTimeout(function () {
                e.className = e.className.replace(/(^|\s+)cp($|\s+)/g, " ");
            }, 5);
            copyNode(e.querySelector("code"));
        };
        e.appendChild(b);
    }

    function setSize(el, v) {
        setTimeout(function () {
            el.style.height = v + "%";
        }, 1);
    }

    function trigger()
    {
        var w = d.querySelectorAll(".window"),
            l = d.querySelectorAll(".charts .item"), p, v, b;

        for (var i = w.length - 1; i >= 0; i--) {
            if (isWin) w[i].className += " win";
            putCopyBtn(w[i]);
        }

        for (var i = l.length - 1; i >= 0; i--) {
            v = /\d+/.exec(l[i].textContent)[0];

            if (!b) {
                b = v;
                continue;
            }

            p = v / b;

            l[i].querySelector(".chart").style.opacity = (p + .25).toFixed(2);

            setSize(l[i], p * 100);
        }
    }

    if (/^(interactive|complete)$/i.test(d.readyState)) {
        trigger();
    } else {
        w.addEventListener('DOMContentLoaded', trigger);
    }

    function fx(selector)
    {
        var canvas = d.createElement("canvas");

        if (!canvas.getContext) return;

        var el = d.querySelector(selector),
            points = 400,
            numberOfPoints = 700,
            radius = 2,
            color = {r:255, g:255, b:255, a:.6},
            star = [],
            lastTime = 0;

        var ctx = canvas.getContext("2d"),
            height = el.clientHeight,
            width = el.clientWidth;

        el.appendChild(canvas);

        var reqAnimationFrame = (
            w.requestAnimationFrame || w.webkitRequestAnimationFrame ||
            w.mozRequestAnimationFrame || w.oRequestAnimationFrame ||
            w.msRequestAnimationFrame || function (callback) {
                var currTime = +new Date,
                    timeToCall = Math.max(0, 16 - (currTime - lastTime));

                lastTime = currTime + timeToCall;

                return setTimeout(callback, timeToCall);
            }
        );

        function refresh()
        {
            canvas.height = height = el.clientHeight;
            canvas.width = width = el.clientWidth;

            for (var i = 0; i < points; i++) {
                star[i] = {
                    posX: width * Math.random(),
                    posY: height * Math.random(),
                    radius: Math.random() * radius,
                    opacity: color.a * Math.random()
                };

                star[i].initialX = star[i].posX;
                star[i].initialY = star[i].posY;
                star[i].initialOpacity = star[i].opacity;
            }
        }

        function createItem(i)
        {
            ctx.beginPath();

            ctx.arc(star[i].posX, star[i].posY, star[i].radius, 0, 2 * Math.PI, false);

            ctx.fillStyle = "rgba(" + color.r + "," + color.g + "," + color.b + "," + star[i].opacity + ")";
            ctx.fill();
            ctx.closePath();

            star[i].posX = star[i].posX - (width/2 - star[i].posX)/200;
            star[i].posY = star[i].posY - (height/2 - star[i].posY)/200;
            star[i].radius += .02;

            if (star[i].posX < 0 || star[i].posY < 0 || star[i].posX > width || star[i].posY > height) {
                star[i].posX = star[i].initialX;
                star[i].posY = star[i].initialY;
                star[i].radius = 0;
            }

            if (star[i].radius > 2) {
                if (star[i].opacity >= 0) {
                    star[i].opacity -= .05;
                } else {
                    star[i].posX = star[i].initialX;
                    star[i].posY = star[i].initialY;
                    star[i].radius = 0;
                    star[i].opacity = star[i].initialOpacity;
                }
            }
        }

        refresh();

        (function setBackground() {
            if (d.hidden) return setTimeout(setBackground, 50);

            ctx.clearRect(0, 0, width, height);

            for (var i = 0; i < points; i++) createItem(i);

            reqAnimationFrame(setBackground);
        })();

        w.addEventListener("resize", refresh);
    }

    fx(".space");
})(document, window);
