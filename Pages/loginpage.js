export class Loginclass{
    constructor(page){
        this.page=page
        this.loginlink =page.locator('#login2')
        this.username =page.locator('#loginusername')
        this.password= page.locator('#loginpassword')
        this.loginbtn=page.locator("//button[@onclick='logIn()']")
        this.userdisplay= page.locator("#nameofuser")

    }
    async goto(){
        await this.page.goto("https://demoblaze.com/index.html")
    }
    async login(){
        await this.loginlink.click()
    }
    async filldata(username,password){
        await this.username.fill(username)
        await this.password.fill(password)
    }
    async loginclick(){
        await this.loginbtn.click()
    }
}
