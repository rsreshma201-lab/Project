export class Cart{
    constructor(page){
        this.page=page
        this.addbtn=page.locator("//a[text()='Add to cart']")
        this.cartlink=page.locator('#cartur')
    }
    async addToCart(){
        await this.addbtn.click()
   }
   async goToCart(){
    await this.cartlink.click()
   }
}