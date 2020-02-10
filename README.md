# _Ol' Zachy-Bois Pizza_

#### _Epicodus Code Review 4, 'Pizza Parlor' , January 31, 2020_

#### _**A project by Jeremy Kale Padot**_

This is a Pizza Parlor website using constructors and prototypes allowing user to select toppings and build a customized pizza. Styled for my friend Zach in New York who eats Pizza everyday. 

## Setup/Installation Requirements

* If using gh-pages simply click the clink to view https://kalepadot.github.io/epicodus-codereview-4-pizza/
* For Devs, open git repository and copy repo link https://github.com/kalepadot/epicodus-codereview-4-pizza.git 
* In your terminal desktop, clone the repo and open in text editor. 
* $ git clone repo link, $ git cd to repo, $ code . (this will open in your text editor) VSCode suggested.
* You will need to download bootstrap vr 3.3.7 and add to your css file. download from the website adn drag to your folder. Make sure your link and script are up to date with applied bootstrap. 
* Same rules apply to jQuery ver 3.4.1. apply to your scrips above js/scripts.js
There are links to google fonts in the header.



## Specs
* User selects a pizza size from menu
  * input: user clicks radio button for pizza size: sm
  * output: starts to build myPizza beginning with sm adding a base price. 
* User selects a crust option from radio button selector
  * input: user clicks gluten free
  * output: gluten free is added to myPizza and price is increased based on selection
* User selects a base option by selecting radio button option
  * input: user selects pesto
  * output: pesto is added as base to myPizza, nothing is added to myPizza price
* User selects a cheese from radio button
  * input: user selects vegan cheese 
  * output: vegan cheese is added to myPizza, nothing additional is added to myPizza price
* User selects toppings from menu from a checkbox list, can select multiple toppings
  * input: user selects pepperoni, pineapple, and ham
  * output: the selected toppings are sent to myPizza, this 1 to price per legnth of the array, this example would add 3 to price.
* User selects Delivery or Pickup method from radio list
  * input: user selects Pick-up
  * output: price or myPizza not affected. Once order is submitted output of decision is listed for user to see. 
* User selects to place an order - order is read back by submit function
  * input: user clicks Place Order
  * output: full order of myPizza including adjusted price is displayed 
  
## Known Bugs

No known bugs at this time. If found, see support and contact section for known bug submission. 


## Support and contact details

_For technical support regarding bugs, issues, or comments/feedback, contact: Jeremy Kale Padot jeremy@padot.us_

## Technologies Used

* Macbook Pro
* VSCode
* Bootstrap ver 3.7
* jQuery 3.4.1
* html
* CSS
* JavaScript
* Terminal
* Google fonts ( see link in head )

### License

* A project by Jeremy Kale Padot/ Epicodus for educational purposes only

Copyright (c) 2020 **_Jeremy Kale Padot/Epicodus_**