# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demo.spec.js >> User signup details filled and successfull signin
- Location: tests\demo.spec.js:11:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Sign up successful."
Received: "This user already exist."
```

# Test source

```ts
  1   | import {test,expect} from "@playwright/test"
  2   | import { Usersignup } from "../Pages/signuppage"
  3   | import { Loginclass } from "../Pages/loginpage"
  4   | import { Home } from "../Pages/homepage"
  5   | import { Cart } from "../Pages/cartpage"
  6   | import { CartItems } from "../Pages/cartItemspage"
  7   | import { Monitor } from "../Pages/monitorpage"
  8   | 
  9   | const data = require("../util/testdata.json")
  10  | 
  11  | test('User signup details filled and successfull signin', async({page})=>{
  12  |     const obj= new Usersignup(page)
  13  |     await obj.goto()
  14  |     await obj.signup()
  15  |     await obj.signupfill(data.newUser,data.newPass)
  16  |     await obj.signinclick()
  17  |     await page.on('dialog',async dialog=>{
> 18  |        expect(dialog.message()).toBe("Sign up successful.")
      |                                 ^ Error: expect(received).toBe(expected) // Object.is equality
  19  |        await dialog.accept()
  20  |     })
  21  | })
  22  | 
  23  | test('User signup details filled and closed', async({page})=>{
  24  |     const obj2 = new Usersignup(page)
  25  |     await obj2.goto()
  26  |     await obj2.signup()
  27  |     await obj2.signupfill(data.newUser,data.newPass)
  28  |     await obj2.closeclick()
  29  | })
  30  | 
  31  | test('Successfull login', async({page})=>{
  32  |     const obj3= new Loginclass(page)
  33  |     await obj3.goto()
  34  |     await obj3.login()
  35  |     await obj3.filldata(data.validUsername,data.validPassword)
  36  |     await obj3.loginclick()
  37  |     await page.waitForLoadState("load")
  38  |     const obj4=new Home(page)
  39  |     await expect(obj4.username).toBeEnabled()
  40  | })
  41  | 
  42  | test('login with valid username and invalid password', async({page})=>{
  43  |     const obj3= new Loginclass(page)
  44  |     await obj3.goto()
  45  |     await obj3.login()
  46  |     await obj3.filldata(data.validUsername,data.validPassword)
  47  |     await obj3.loginclick()
  48  |     page.on('dialog', async dialog=>{
  49  |         expect(dialog.message()).toBe("Wrong password.")
  50  |         dialog.accept()
  51  |     })
  52  | })
  53  | 
  54  | test('login with invalid username and valid password', async({page})=>{
  55  |     const obj3= new Loginclass(page)
  56  |     await obj3.goto()
  57  |     await obj3.login()
  58  |     await obj3.filldata(data.invalidUsername,data.validPassword)
  59  |     await obj3.loginclick()
  60  |     page.on('dialog', async dialog=>{
  61  |         expect(dialog.message()).toBe("Wrong password.")
  62  |         dialog.accept()
  63  |     })
  64  | })
  65  | 
  66  | test('login with invalid username and invalid password', async({page})=>{
  67  |     const obj3= new Loginclass(page)
  68  |     await obj3.goto()
  69  |     await obj3.login()
  70  |     await obj3.filldata(data.invalidUsername,data.invalidPassword)
  71  |     await obj3.loginclick()
  72  |     page.on('dialog', async dialog=>{
  73  |         expect(dialog.message()).toBe("Wrong password.")
  74  |         dialog.accept()
  75  |     })
  76  | })
  77  | 
  78  | test('User sucessfully logged in and choose a product',async({page})=>{
  79  |     const obj3= new Loginclass(page)
  80  |     await obj3.goto()
  81  |     await obj3.login()
  82  |     await obj3.filldata(data.validUsername,data.validPassword)
  83  |     await obj3.loginclick()
  84  |     const obj4=new Home(page)
  85  |     await obj4.selectPhone()
  86  |     const objcart= new Cart(page)
  87  |     await objcart.addToCart()
  88  |     page.on('dialog',async dialog=>{
  89  |     expect (dialog.message()).toBe("Product added.")
  90  |       await dialog.accept()
  91  |    })
  92  | })
  93  | 
  94  | test('User sucessfully purchasing a phone',async({page})=>{
  95  |     const obj3= new Loginclass(page)
  96  |     await obj3.goto()
  97  |     await obj3.login()
  98  |     await obj3.filldata(data.validUsername,data.validPassword)
  99  |     await obj3.loginclick()
  100 |     await page.waitForEvent("load")
  101 |     const obj4=new Home(page)
  102 |     await obj4.selectPhone()
  103 |     const objcart= new Cart(page)
  104 |     await objcart.addToCart()
  105 |     page.on('dialog',async dialog=>{
  106 |       await dialog.accept()
  107 |    })
  108 |    await objcart.goToCart()
  109 |    const cartobj=new CartItems(page)
  110 |    await cartobj.placeOrder()
  111 |    await cartobj.fillData(data.Name,data.country,data.city,data.card,data.month,data.year)
  112 |    await expect(cartobj.msg).toBeVisible()
  113 | 
  114 | })
  115 | 
  116 | test('User sucessfully purchasing a monitor',async({page})=>{
  117 |     const obj3= new Loginclass(page)
  118 |     await obj3.goto()
```