export class Home{
    constructor(page){
        this.page=page
        this.phone=page.locator("//a[text()='Nokia lumia 1520']")
        this.monitorlink=page.locator("//a[text()='Monitors']")    
        this.logout=page.getByRole("link",{name:'Log out'})
        this.username=page.locator('#nameofuser')
}
    
   async selectPhone(){
     await this.phone.click()
   }  

   async selectmonitorLink(){
    await this.monitorlink.click()
   } 

   async clickLogout(){
    await this.logout.click()
   }
}


