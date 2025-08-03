// access modifiers in TS
var TraineeUser = /** @class */ (function () {
    // constructor
    function TraineeUser(email, username) {
        this.credID = 1441;
        this.email = email;
        this.username = username;
    }
    return TraineeUser;
}());
var myUser = new TraineeUser('Gouranga@gmail', 'gouranga');
console.log(myUser.credID);
