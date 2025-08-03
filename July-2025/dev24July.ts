// access modifiers in TS

class TraineeUser{
    public email: string
    private username: string
    readonly credID: number = 1441

    // constructor
    constructor(email: string, username: string) {
        this.email = email;
        this.username = username;
    }
}

const myUser: TraineeUser = new TraineeUser('Gouranga@gmail', 'gouranga')
console.log(myUser.credID) // you can access this since this isn't set with any modifiers, but cannot update the value
// myUser.credID = 12 // this is not possible


// new way of putting modifiers directly
class AdminUser{
    private moduleCount: number;

    readonly credID: number = 1220
    constructor(public email: string, public username: string) {
        
    }
    get getUserEmail(): string{
        return `This is Admin Email: ${this.email}`
    }

    // defining Get and Set for this moduleCount
    get getModuleCount(): number{
        return this.moduleCount
    }

    // should not set any return types for setters in TS
    set setModuleCount(addModules) {
        if (this.moduleCount <= 1) {
            throw Error("Pls add modules")
        }
        this.moduleCount = addModules
    }
}
