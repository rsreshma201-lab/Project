export class Monitor{

constructor(page){
    this.page=page
    this.monitor=page.getByRole("link",{name:'ASUS Full HD'})
}
 async selectMonitor(){
    await this.monitor.click()
 }
}