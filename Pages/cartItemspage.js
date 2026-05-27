export class CartItems{

    constructor(page){
        this.page=page
        this.placeorderbtn=page.locator('.btn.btn-success')
        this.name=page.locator("//input[@id='name']")
        this.country=page.locator('#country')
        this.city=page.locator('#city')
        this.card=page.locator('#card')
        this.month=page.locator('#month')
        this.year=page.locator('#year')
        this.purchase=page.locator("//button[text()='Purchase']")
        this.msg =page.locator("//h2[text()='Thank you for your purchase!']")
    }
    
    async placeOrder()
    {
        await this.placeorderbtn.click()
    }
    async fillData(name,country,city,card,month,year){
        await this.name.fill("Reshma")
        await this.country.fill("India")
        await this.city.fill("Trivandrum")
        await this.card.fill("112222334455")
        await this.month.fill("May")
        await this.year.fill("2026")
        await this.purchase.click()
    }

}