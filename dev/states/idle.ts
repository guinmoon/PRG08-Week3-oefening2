class Idle implements Behavior {
    public jibby: Jibby;

    constructor(j: Jibby) {
        this.jibby = j;
    }

    public update() {
        console.log("Idle");

        // dit moet in het gedrag staan
        this.jibby.hygiene -= 0.01;
        this.jibby.food -= 0.02;
        this.jibby.happiness -= 0.015;

        // afbeelding voor idle - vervang dit door het gedrag
        this.jibby.div.style.backgroundImage = "url('images/idle.png')";
    }
}