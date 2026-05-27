# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demo.spec.js >> Login with valid credentials and logout
- Location: tests\demo.spec.js:140:6

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('//button[@onclick=\'logIn()\']')
Expected: visible
Received: hidden
Timeout:  5000ms

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('//button[@onclick=\'logIn()\']')
    - waiting for" https://demoblaze.com/index.html" navigation to finish...
    - navigated to "https://demoblaze.com/index.html"
    12 × locator resolved to <button type="button" onclick="logIn()" class="btn btn-primary">Log in</button>
       - unexpected value "hidden"

```

```yaml
- navigation:
  - link "PRODUCT STORE":
    - /url: index.html
    - img
    - text: PRODUCT STORE
  - list:
    - listitem:
      - link "Home (current)":
        - /url: index.html
    - listitem:
      - link "Contact":
        - /url: "#"
    - listitem:
      - link "About us":
        - /url: "#"
    - listitem:
      - link "Cart":
        - /url: cart.html
    - listitem:
      - link "Log in":
        - /url: "#"
    - listitem
    - listitem
    - listitem:
      - link "Sign up":
        - /url: "#"
  - list:
    - listitem
    - listitem
    - listitem
  - img "First slide"
  - button "Previous"
  - button "Next"
- link "CATEGORIES":
  - /url: ""
- link "Phones":
  - /url: "#"
- link "Laptops":
  - /url: "#"
- link "Monitors":
  - /url: "#"
- link:
  - /url: prod.html?idp_=1
- heading "Samsung galaxy s6" [level=4]:
  - link "Samsung galaxy s6":
    - /url: prod.html?idp_=1
- heading "$360" [level=5]
- paragraph: The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage cannot be expanded.
- link:
  - /url: prod.html?idp_=2
- heading "Nokia lumia 1520" [level=4]:
  - link "Nokia lumia 1520":
    - /url: prod.html?idp_=2
- heading "$820" [level=5]
- paragraph: The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM.
- link:
  - /url: prod.html?idp_=3
- heading "Nexus 6" [level=4]:
  - link "Nexus 6":
    - /url: prod.html?idp_=3
- heading "$650" [level=5]
- paragraph: The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM.
- link:
  - /url: prod.html?idp_=4
- heading "Samsung galaxy s7" [level=4]:
  - link "Samsung galaxy s7":
    - /url: prod.html?idp_=4
- heading "$800" [level=5]
- paragraph: The Samsung Galaxy S7 is powered by 1.6GHz octa-core it comes with 4GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 200GB via a microSD card.
- link:
  - /url: prod.html?idp_=5
- heading "Iphone 6 32gb" [level=4]:
  - link "Iphone 6 32gb":
    - /url: prod.html?idp_=5
- heading "$790" [level=5]
- paragraph: It comes with 1GB of RAM. The phone packs 16GB of internal storage cannot be expanded. As far as the cameras are concerned, the Apple iPhone 6 packs a 8-megapixel primary camera on the rear and a 1.2-megapixel front shooter for selfies.
- link:
  - /url: prod.html?idp_=6
- heading "Sony xperia z5" [level=4]:
  - link "Sony xperia z5":
    - /url: prod.html?idp_=6
- heading "$320" [level=5]
- paragraph: Sony Xperia Z5 Dual smartphone was launched in September 2015. The phone comes with a 5.20-inch touchscreen display with a resolution of 1080 pixels by 1920 pixels at a PPI of 424 pixels per inch.
- link:
  - /url: prod.html?idp_=7
- heading "HTC One M9" [level=4]:
  - link "HTC One M9":
    - /url: prod.html?idp_=7
- heading "$700" [level=5]
- paragraph: The HTC One M9 is powered by 1.5GHz octa-core Qualcomm Snapdragon 810 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 128GB via a microSD card.
- link:
  - /url: prod.html?idp_=8
- heading "Sony vaio i5" [level=4]:
  - link "Sony vaio i5":
    - /url: prod.html?idp_=8
- heading "$790" [level=5]
- paragraph: Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple's 13-inch MacBook Pro. And in a lot of ways this notebook is better, thanks to a lighter weight.
- link:
  - /url: prod.html?idp_=9
- heading "Sony vaio i7" [level=4]:
  - link "Sony vaio i7":
    - /url: prod.html?idp_=9
- heading "$790" [level=5]
- paragraph: REVIEW Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple's 13-inch MacBook Pro. And in a lot of ways this notebook is better, thanks to a lighter weight, higher-resolution display, more storage space, and a Blu-ray drive.
- list:
  - listitem:
    - button "Previous"
  - listitem:
    - button "Next"
- heading "About Us" [level=4]
- paragraph: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
- heading "Get in Touch" [level=4]
- paragraph: "Address: 2390 El Camino Real"
- paragraph: "Phone: +440 123456"
- paragraph: "Email: demo@blazemeter.com"
- heading "PRODUCT STORE" [level=4]:
  - img
  - text: PRODUCT STORE
- contentinfo:
  - paragraph: Copyright © Product Store
```

# Test source

```ts
  50  |         expect(dialog.message()).toBe("Wrong password.")
  51  |         dialog.accept()
  52  |     })
  53  | })
  54  | 
  55  | test('login with invalid username and valid password', async({page})=>{
  56  |     const obj3= new Loginclass(page)
  57  |     await obj3.goto()
  58  |     await obj3.login()
  59  |     await obj3.filldata(data.invalidUsername,data.validPassword)
  60  |     await obj3.loginclick()
  61  |     page.on('dialog', async dialog=>{
  62  |         expect(dialog.message()).toBe("Wrong password.")
  63  |         dialog.accept()
  64  |     })
  65  | })
  66  | 
  67  | test('login with invalid username and invalid password', async({page})=>{
  68  |     const obj3= new Loginclass(page)
  69  |     await obj3.goto()
  70  |     await obj3.login()
  71  |     await obj3.filldata(data.invalidUsername,data.invalidPassword)
  72  |     await obj3.loginclick()
  73  |     page.on('dialog', async dialog=>{
  74  |         expect(dialog.message()).toBe("Wrong password.")
  75  |         dialog.accept()
  76  |     })
  77  | })
  78  | 
  79  | test('User sucessfully logged in and choose a product',async({page})=>{
  80  |     const obj3= new Loginclass(page)
  81  |     await obj3.goto()
  82  |     await obj3.login()
  83  |     await obj3.filldata(data.validUsername,data.validPassword)
  84  |     await obj3.loginclick()
  85  |     const obj4=new Home(page)
  86  |     await obj4.selectPhone()
  87  |     const objcart= new Cart(page)
  88  |     await objcart.addToCart()
  89  |     page.on('dialog',async dialog=>{
  90  |     expect (dialog.message()).toBe("Product added.")
  91  |       await dialog.accept()
  92  |    })
  93  | })
  94  | 
  95  | test('User sucessfully purchasing a phone',async({page})=>{
  96  |     const obj3= new Loginclass(page)
  97  |     await obj3.goto()
  98  |     await obj3.login()
  99  |     await obj3.filldata(data.validUsername,data.validPassword)
  100 |     await obj3.loginclick()
  101 |     await page.waitForEvent("load")
  102 |     const obj4=new Home(page)
  103 |     await obj4.selectPhone()
  104 |     const objcart= new Cart(page)
  105 |     await objcart.addToCart()
  106 |     page.on('dialog',async dialog=>{
  107 |       await dialog.accept()
  108 |    })
  109 |    await objcart.goToCart()
  110 |    const cartobj=new CartItems(page)
  111 |    await cartobj.placeOrder()
  112 |    await cartobj.fillData(data.Name,data.country,data.city,data.card,data.month,data.year)
  113 |    await expect(cartobj.msg).toBeVisible()
  114 | 
  115 | })
  116 | 
  117 | test('User sucessfully purchasing a monitor',async({page})=>{
  118 |     const obj3= new Loginclass(page)
  119 |     await obj3.goto()
  120 |     await obj3.login()
  121 |     await obj3.filldata(data.validUsername,data.validPassword)
  122 |     await obj3.loginclick()
  123 |     await page.waitForEvent("load")
  124 |     const obj4=new Home(page)
  125 |     await obj4.selectmonitorLink()
  126 |     const monobj= new Monitor(page)
  127 |     await monobj.selectMonitor() 
  128 |     const objcart= new Cart(page)
  129 |     await objcart.addToCart()
  130 |     page.on('dialog',async dialog=>{
  131 |       await dialog.accept()
  132 |    })
  133 |    await objcart.goToCart()
  134 |    const cartobj=new CartItems(page)
  135 |    await cartobj.placeOrder()
  136 |    await cartobj.fillData(data.Name,data.country,data.city,data.card,data.month,data.year)
  137 |    await expect(cartobj.msg).toBeVisible()
  138 | })
  139 | 
  140 | test.only('Login with valid credentials and logout', async({page})=>{
  141 |     const obj3= new Loginclass(page)
  142 |     await obj3.goto()
  143 |     await obj3.login()
  144 |     await obj3.filldata(data.validUsername,data.validPassword)
  145 |     await obj3.loginclick()
  146 |     await page.waitForLoadState("load")
  147 |     const homeobj= new Home(page)
  148 |     homeobj.clickLogout()
  149 |     await page.waitForLoadState("load")
> 150 |     await expect(obj3.loginbtn).toBeVisible()
      |                                 ^ Error: expect(locator).toBeVisible() failed
  151 | })
  152 | 
  153 | 
  154 | 
  155 | 
```