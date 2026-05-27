import {test,expect} from "@playwright/test"
import { Usersignup } from "../Pages/signuppage"
import { Loginclass } from "../Pages/loginpage"
import { Home } from "../Pages/homepage"
import { Cart } from "../Pages/cartpage"
import { CartItems } from "../Pages/cartItemspage"
import { Monitor } from "../Pages/monitorpage"

const data = require("../util/testdata.json")
test.setTimeout(50000)

test('User signup details filled and successfull signin', async({page})=>{
    const obj= new Usersignup(page)
    await obj.goto()
    await obj.signup()
    await obj.signupfill(data.newUser,data.newPass)
    await obj.signinclick()
    await page.on('dialog',async dialog=>{
       expect(dialog.message()).toBe("Sign up successful.")
       await dialog.accept()
    })
})

test('User signup details filled and closed', async({page})=>{
    const obj2 = new Usersignup(page)
    await obj2.goto()
    await obj2.signup()
    await obj2.signupfill(data.newUser,data.newPass)
    await obj2.closeclick()
})

test('Successfull login', async({page})=>{
    const obj3= new Loginclass(page)
    await obj3.goto()
    await obj3.login()
    await obj3.filldata(data.validUsername,data.validPassword)
    await obj3.loginclick()
    await page.waitForLoadState("load")
    const obj4=new Home(page)
    await expect(obj4.username).toBeEnabled()
})

test('login with valid username and invalid password', async({page})=>{
    const obj3= new Loginclass(page)
    await obj3.goto()
    await obj3.login()
    await obj3.filldata(data.validUsername,data.validPassword)
    await obj3.loginclick()
    page.on('dialog', async dialog=>{
        expect(dialog.message()).toBe("Wrong password.")
        dialog.accept()
    })
})

test('login with invalid username and valid password', async({page})=>{
    const obj3= new Loginclass(page)
    await obj3.goto()
    await obj3.login()
    await obj3.filldata(data.invalidUsername,data.validPassword)
    await obj3.loginclick()
    page.on('dialog', async dialog=>{
        expect(dialog.message()).toBe("Wrong password.")
        dialog.accept()
    })
})

test('login with invalid username and invalid password', async({page})=>{
    const obj3= new Loginclass(page)
    await obj3.goto()
    await obj3.login()
    await obj3.filldata(data.invalidUsername,data.invalidPassword)
    await obj3.loginclick()
    page.on('dialog', async dialog=>{
        expect(dialog.message()).toBe("Wrong password.")
        dialog.accept()
    })
})

test('User sucessfully logged in and choose a product',async({page})=>{
    const obj3= new Loginclass(page)
    await obj3.goto()
    await obj3.login()
    await obj3.filldata(data.validUsername,data.validPassword)
    await obj3.loginclick()
    const obj4=new Home(page)
    await obj4.selectPhone()
    const objcart= new Cart(page)
    await objcart.addToCart()
    page.on('dialog',async dialog=>{
    expect (dialog.message()).toBe("Product added.")
      await dialog.accept()
   })
})

test('User sucessfully purchasing a phone',async({page})=>{
    const obj3= new Loginclass(page)
    await obj3.goto()
    await obj3.login()
    await obj3.filldata(data.validUsername,data.validPassword)
    await obj3.loginclick()
    await page.waitForEvent("load")
    const obj4=new Home(page)
    await obj4.selectPhone()
    const objcart= new Cart(page)
    await objcart.addToCart()
    page.on('dialog',async dialog=>{
      await dialog.accept()
   })
   await objcart.goToCart()
   const cartobj=new CartItems(page)
   await cartobj.placeOrder()
   await cartobj.fillData(data.Name,data.country,data.city,data.card,data.month,data.year)
   await expect(cartobj.msg).toBeVisible()

})

test('User sucessfully purchasing a monitor',async({page})=>{
    const obj3= new Loginclass(page)
    await obj3.goto()
    await obj3.login()
    await obj3.filldata(data.validUsername,data.validPassword)
    await obj3.loginclick()
    await page.waitForEvent("load")
    const obj4=new Home(page)
    await obj4.selectmonitorLink()
    const monobj= new Monitor(page)
    await monobj.selectMonitor() 
    const objcart= new Cart(page)
    await objcart.addToCart()
    page.on('dialog',async dialog=>{
      await dialog.accept()
   })
   await objcart.goToCart()
   const cartobj=new CartItems(page)
   await cartobj.placeOrder()
   await cartobj.fillData(data.Name,data.country,data.city,data.card,data.month,data.year)
   await expect(cartobj.msg).toBeVisible()
})

test.only('Login with valid credentials and logout', async({page})=>{
    const obj3= new Loginclass(page)
    await obj3.goto()
    await obj3.login()
    await obj3.filldata(data.validUsername,data.validPassword)
    await obj3.loginclick()
    await page.waitForLoadState("load")
    await page.waitForTimeout(5000)
    const homeobj= new Home(page)
    homeobj.clickLogout()
    await page.waitForLoadState("load")
    await page.waitForTimeout(10000)
    expect (page).toHaveURL("https://www.demoblaze.com/index.html")
    expect(page.locator('#login2')).toBeVisible()
})



