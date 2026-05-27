export class Usersignup{
    constructor(page){
        this.page=page
        this.signin=page.locator("#signin2")
        this.username=page.locator('#sign-username')
        this.password=page.locator('#sign-password')
        this.signupbtn =page.locator("//button[text()='Sign up']")
        this.closebtn= page.getByLabel('Sign up').getByText('Close')
    }
    async goto(){
        await this.page.goto("https://demoblaze.com/index.html")
    }
    async signup(){
        await this.signin.click()
    }
    async signupfill(user,pass){
        await this.username.fill(user)
        await this.password.fill(pass)
    }
    async signinclick(){
        await this.signupbtn.click()
    }
    async closeclick(){
        await this.closebtn.click()
    }

}