///<reference path="gameobject.ts"/>

class Jibby extends GameObject {
    public behavior: Behavior;

    public hygiene: number;
    public food: number;
    public happiness: number;

    constructor(parent: HTMLElement) {
        super("jibby", parent, 0, 220);

        // start instellingen
        this.hygiene = this.food = this.happiness = 50;

        this.behavior = new Idle(this);

        // click listeners
        this.div.addEventListener("click", () => this.onPet());
        document.getElementsByTagName("foodbutton")[0].addEventListener("click", () => this.onEat());
        document.getElementsByTagName("washbutton")[0].addEventListener("click", () => this.onWash());
    }

    public update(): void {
        this.behavior.update();
        //
        // // dit moet in het gedrag staan
        // this.hygiene -= 0.01;
        // this.food -= 0.02;
        // this.happiness -= 0.015;

        // check of de waarden te laag zijn
        // 
    }


    private onPet(): void {
        console.log("you clicked on jibby!");
        this.div.style.backgroundImage = "url('images/happy.png')";
    }

    private onWash(): void {
        console.log("washing jibby!");
        this.div.style.backgroundImage = "url('images/washing.png')";
    }

    private onEat(): void {
        console.log("jibby is eating!");
        this.div.style.backgroundImage = "url('images/eating.gif')";
    }


}