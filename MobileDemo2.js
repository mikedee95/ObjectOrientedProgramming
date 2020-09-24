function Mobile(battery, draft, inbox, sent, status) {
    this.battery = battery;
    this.draft = draft;
    this.inbox = inbox;
    this.sent = sent;
    this.status = status;

    // this.isOn = function () {
    //     return this.status
    // };
    // this.turnOn = function () {
    //     this.status = true
    // };
    // this.turnOff = function () {
    //     this.status = false
    // };
    this.charge = function () {
        if (this.battery < 100) {
            this.battery++
        }
    };
    this.textingMessage = function (message) {
        this.draft = message;
        this.batteryUsage()
    };
    this.receiveMessage = function (message) {
        this.inbox.push(message);
        this.batteryUsage();
    };
    this.sendMessage = function (mobile) {
        mobile.receiveMessage(this.draft)
        this.batteryUsage()
    };
    this.getInbox = function () {
        this.batteryUsage()
        return this.inbox
    };
    this.batteryUsage = function (){
        this.battery --
    }
}

let iphone = new Mobile(100, "", [], [], true);
let nokia = new Mobile(100, "", [], [], true);
iphone.textingMessage("Hi there");
iphone.sendMessage(nokia);
nokia.getInbox();
nokia.textingMessage("Hello");
nokia.sendMessage(iphone);
iphone.getInbox();
// document.write("Iphone says : " + nokia.getInbox() + " and Nokia says: " + iphone.getInbox());
document.write("The currently battery is: " +  nokia.battery)
