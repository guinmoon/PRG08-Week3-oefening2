class Hungry implements Behavior {
    public jibby: Jibby;

    constructor(j: Jibby) {
        this.jibby = j;
    }

    public update() {
        console.log("Hungry");
    }
}