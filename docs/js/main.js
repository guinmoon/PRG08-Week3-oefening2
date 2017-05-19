var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GameObject = (function () {
    function GameObject(str, parent, x, y) {
        this.div = document.createElement(str);
        parent.appendChild(this.div);
        this.x = x;
        this.y = y;
    }
    return GameObject;
}());
var Jibby = (function (_super) {
    __extends(Jibby, _super);
    function Jibby(parent) {
        var _this = _super.call(this, "jibby", parent, 0, 220) || this;
        _this.hygiene = _this.food = _this.happiness = 50;
        _this.behavior = new Idle(_this);
        _this.div.addEventListener("click", function () { return _this.onPet(); });
        document.getElementsByTagName("foodbutton")[0].addEventListener("click", function () { return _this.onEat(); });
        document.getElementsByTagName("washbutton")[0].addEventListener("click", function () { return _this.onWash(); });
        return _this;
    }
    Jibby.prototype.update = function () {
        this.behavior.update();
    };
    Jibby.prototype.onPet = function () {
        console.log("you clicked on jibby!");
        this.div.style.backgroundImage = "url('images/happy.png')";
    };
    Jibby.prototype.onWash = function () {
        console.log("washing jibby!");
        this.div.style.backgroundImage = "url('images/washing.png')";
    };
    Jibby.prototype.onEat = function () {
        console.log("jibby is eating!");
        this.div.style.backgroundImage = "url('images/eating.gif')";
    };
    return Jibby;
}(GameObject));
var Game = (function () {
    function Game() {
        var _this = this;
        var container = document.getElementById("container");
        this.jibby = new Jibby(container);
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.jibby.update();
        this.updateUI();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.updateUI = function () {
        document.getElementsByTagName("food")[0].innerHTML = Math.round(this.jibby.food).toString();
        document.getElementsByTagName("happiness")[0].innerHTML = Math.round(this.jibby.happiness).toString();
        document.getElementsByTagName("hygiene")[0].innerHTML = Math.round(this.jibby.hygiene).toString();
    };
    Game.getInstance = function () {
        if (!Game.GameInstance) {
            Game.GameInstance = new Game();
        }
        return Game.GameInstance;
    };
    return Game;
}());
window.addEventListener("load", function () {
    Game.getInstance();
});
var Idle = (function () {
    function Idle(j) {
        this.jibby = j;
    }
    Idle.prototype.update = function () {
        console.log("Idle");
        this.jibby.hygiene -= 0.01;
        this.jibby.food -= 0.02;
        this.jibby.happiness -= 0.015;
        this.jibby.div.style.backgroundImage = "url('images/idle.png')";
    };
    return Idle;
}());
var Sleeping = (function () {
    function Sleeping(j) {
        this.jibby = j;
    }
    Sleeping.prototype.update = function () {
        console.log("Sleeping");
    };
    return Sleeping;
}());
var Dead = (function () {
    function Dead(j) {
        this.jibby = j;
    }
    Dead.prototype.update = function () {
        console.log("Dead");
    };
    return Dead;
}());
var Hungry = (function () {
    function Hungry(j) {
        this.jibby = j;
    }
    Hungry.prototype.update = function () {
        console.log("Hungry");
    };
    return Hungry;
}());
var Angry = (function () {
    function Angry(j) {
        this.jibby = j;
    }
    Angry.prototype.update = function () {
        console.log("Angry");
    };
    return Angry;
}());
var Dirty = (function () {
    function Dirty(j) {
        this.jibby = j;
    }
    Dirty.prototype.update = function () {
        console.log("Dirty");
    };
    return Dirty;
}());
var Eating = (function () {
    function Eating(j) {
        this.jibby = j;
    }
    Eating.prototype.update = function () {
        console.log("Eating");
    };
    return Eating;
}());
var Washing = (function () {
    function Washing(j) {
        this.jibby = j;
    }
    Washing.prototype.update = function () {
        console.log("Washing");
    };
    return Washing;
}());
var Happy = (function () {
    function Happy(j) {
        this.jibby = j;
    }
    Happy.prototype.update = function () {
        console.log("Happy");
    };
    return Happy;
}());
//# sourceMappingURL=main.js.map