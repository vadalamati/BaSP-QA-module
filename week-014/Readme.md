# BaSP 2022 -  Swag Labs Automation tests

Automated e2e frontend test will be carried out on https://www.saucedemo.com/, for these, i'll use WDio. After test, i'll detail fails or issues more down.
Some funcionalities what i'll test for the diferent entities are:

- Login process
- Add items
- Form
- Different checkout
- Complete order

Also i'll test all web interactions on all endpoints. Namely:

- Login
- Inventory
- Cart
- Checkout step One
- Checkout Overview
- Checkout Complete



<br>

## Quick Start

Install dependencies:

```console
 npm init wdio .
```



<br>

 ### Running Linters

To run the test execute the next comand:

```console
npm run test
```

<br>

 ## Test Comments

I'll detail, for each test all issues or considerations:

### Glich User Tests:

**Glich user buy test:**
```
test\specs\glich.user\glich.user.buy.spec.js

```

This user, like the standard one, can carry out all the processes correctly, but it does so with a time delay when will need to go the inventory.

<img src="test-imgs\Glich-buy-ok.png">

<br>
<br>

**Glich user inventory test:**
```
test\specs\glich.user\iventory.items.spec.js

```

This user, like the standard one, can check all iventory items, but it does so with a time delay when will everytime what we go to the inventory.

<img src="test-imgs\Glich-inv-ok.png">



<br>


**Glich user performance buy test:**
```
test\specs\glich.user\glich.user.buy.performance.spec.js

```

This user, like the standard one, can carry out all the processes correctly, but it does so with a time delay when will need to go the inventory. The test carsh cause the timeout has been changed as same in the inventory performance

<img src="test-imgs\timeout-glich-user.png">

<br>

### Problem User tests:

**Problem User Buy Test:**

```
test\specs\problem.user\problem.user.buy.spec.js
```

This user cannot complete the form in **Payment Step One** because they have an error entering the last name. In these tests I verify that the modal error is displayed correctly

<br>

**Problem User Inventory Test:**

```
test\specs\problem.user\inventory.items.spec.js
```

Some add/remove buttons fails on this interactions, causing broken test

<img src="test-imgs\Problem-user-i.png">

<br>

**Problem user Performance Test**

```
test\specs\problem.user\inventory.items.performance.spec.js
```

This test fails because some interactions have errors that cause it to time out.


<br>

### Locked Out User tests:

This user cannot login, so you can find it in test\specs\login.spec.js


### Autor


 Mat??as Daniel Vadala | vadalamati@gmail.com | [@vadalamati](https://github.com/vadalamati)






<br>

### License & Copyright

?? Radium Rocket "Become a Software Professional 2022" Matias Vadala - QA Module