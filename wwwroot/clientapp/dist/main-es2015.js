(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../node_modules/raw-loader/dist/cjs.js!./app/app.component.html":
/*!***********************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./app/app.component.html ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n<app-header></app-header>\n\n\n\n<router-outlet ></router-outlet>\n\n\n<app-footer></app-footer>");

/***/ }),

/***/ "../node_modules/raw-loader/dist/cjs.js!./app/components/about/about.component.html":
/*!******************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./app/components/about/about.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"container\">\n\n<div class=\"row\">\n\n    <ol class=\"col-12 breadcrumb\">\n\n      <li class=\"breadcrumb-item\"><a [routerLink]=\"['/index']\">Home</a></li>\n\n      <li class=\"breadcrumb-item active\">About Us</li>\n\n    </ol>\n\n    <div class=\"col-12\">\n\n       <h3>About Us</h3>\n\n       <hr>\n\n    </div>\n\n</div>\n\n\n\n<div class=\"row row-content\">\n\n    <div class=\"col-sm-6 col-md-6\">\n\n        <h2>Our History</h2>\n         <h3>\n        <p>Started in 2014, ElectroShop quickly established itself as a online marketing icon per excellence. With its unique access to the world top electronical devices retailers and top quality of service.</p>\n\n        <p>ElectroShop traces its humble beginnings to <em>MediaBoom</em>, a successful chain started by our CEO, Mr. Peter O'Really,that featured fast shipments worldwide.</p>\n    </h3>\n    </div>\n\n    <div class=\"col-sm\">\n\n       <div class=\"card\">\n\n           <h3 class=\"card-header bg-primary text-white\">Facts At a Glance</h3>\n\n           <div class=\"card-body\">\n\n             <dl class=\"row\">\n\n                <dt class=\"col-6\">Started</dt>\n\n                <dt class=\"col-6\">7 Feb.2014</dt>\n\n                <dt class=\"col-6\">Major Stake Holder</dt>\n\n                <dd class=\"col-6\">ElectroZone Inc.</dd>\n\n                <dt class=\"col-6\">Last Year's Turnover</dt>\n\n                <dd class=\"col-6\">$1,350,375</dd>\n\n                <dt class=\"col-6\">Employees</dt>\n\n                <dd class=\"col-6\">250</dd>    \n\n             </dl>  \n\n           </div>\n\n       </div>\n\n    </div>\n\n</div>\n\n\n\n\n\n</div>");

/***/ }),

/***/ "../node_modules/raw-loader/dist/cjs.js!./app/components/cart/cart.component.html":
/*!****************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./app/components/cart/cart.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"cart-section spad\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-lg-8\">\n\t\t\t\t\t<div class=\"cart-table\">\n\t\t\t\t\t\t<h3>Your Cart</h3>\n\t\t\t\t\t\t<div class=\"cart-table-warp\">\n\t\t\t\t\t\t\t<table>\n\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th class=\"product-th\">Product</th>\n\t\t\t\t\t\t\t\t\t<th class=\"quy-th\">Quantity</th>\n                  <th class=\"total-th\">Price</th>\n                  <th class=\"total-th\"></th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let item of itemService.items\">\n\t\t\t\t\t\t\t\t\t<td class=\"product-col\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"./clientapp/assets/images/{{item.product.photo}}\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"pc-title\">\n\t\t\t\t\t\t\t\t\t\t\t<h4>{{item.product.name}}</h4>\n\t\t\t\t\t\t\t\t\t\t\t<p>${{item.product.price}}</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</td>\n                  <td><h4>{{item.quantity}}</h4></td>\n\t\t\t\t\t\t\t\t\n                  <td class=\"total-col\"><h4>${{item.product.price}}</h4></td>\n                  <td align=\"center\">\n                      <a class=\"btn btn-warning\" (click)=\"itemService.remove(item.product.id)\">Remove</a>\n                  </td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"total-cost\">\n\t\t\t\t\t\t\t<h6>Total <span>${{itemService.total}}</span></h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-4 card-right\">\n\t\t\t\t\t<form class=\"promo-code-form\">\n\t\t\t\t\t\t<input type=\"text\" placeholder=\"Enter promo code\">\n\t\t\t\t\t\t<button>Submit</button>\n\t\t\t\t\t</form>\n\t\t\t\t\t<button (click)=\"onOrderCheckout()\" class=\"site-btn\">Proceed to checkout</button>\n\t\t\t\t\t<a href=\"\" class=\"site-btn sb-dark\">Continue shopping</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\n<!-- <table border=\"1\">\n  <tr>\n    <th>Option</th>\n    <th>Id</th>\n    <th>Name</th>\n    <th>Photo</th>\n    <th>Price</th>\n    <th>Quantity</th>\n    <th>Sub Total</th>\n  </tr>\n\n  <tr *ngFor=\"let item of itemService.items\">\n    <td align=\"center\">\n      <a (click)=\"itemService.remove(item.product.id)\">Remove</a>\n    </td>\n    <td>{{item.product.id}}</td>\n    <td>{{item.product.name}}</td>\n    <td>\n        <img src=\"../../assets/img/{{item.product.photo}}\">\n    </td>\n    <td>{{item.product.price}}</td>\n    <td>{{item.quantity}}</td>\n    <td>{{item.product.price * item.quantity}}</td>\n  </tr>\n\n  <tr>\n    <td colspan=\"6\" allign=\"right\">Total</td>\n    <td>{{itemService.total}}</td>\n  </tr>\n  \n</table> -->");

/***/ }),

/***/ "../node_modules/raw-loader/dist/cjs.js!./app/components/checkout/checkout.component.html":
/*!************************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./app/components/checkout/checkout.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">{{ errorMessage }}</div>\r\n    \r\n    <div class=\"col-md-3\"></div>\r\n    <div class=\"col-md-6\">\r\n        <h3>Confirm Your Order</h3>\r\n        <table class=\"table table-bordered table-hover\">\r\n            <tr *ngFor=\"let item of itemService.items\">\r\n                <td><img src=\"./clientapp/assets/images/{{item.product.photo}}\" alt=\"o.productTitle\" class=\"img-thumbnail checkout-thumb\" /></td>\r\n                <td>{{ item.product.name }}</td>\r\n                <td>{{ item.product.category }}</td>\r\n                <td>{{ item.quantity }}</td>\r\n                <td>{{ item.product.price|currency:'USD':true }}</td>\r\n                <td>{{ (item.product.price * item.quantity)|currency:'USD':true }}</td>\r\n            </tr>\r\n        </table>\r\n        <div class=\"col-md-4 col-md-offset-8 text-right\">\r\n            <table class=\"table table-condensed\">\r\n                <tr>\r\n                    <td class=\"text-right\">Subtotal</td>\r\n                    <td class=\"text-right\">{{ this.subtotal()|currency:'USD':true }}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-right\">Shipping</td>\r\n                    <td class=\"text-right\">$ 0.00</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-right\">Total:</td>\r\n                    <td class=\"text-right\">{{ subtotal()|currency:'USD':true }}</td>\r\n                </tr>\r\n            </table>\r\n            <button class=\"btn btn-success\" (click)=\"onCheckout()\">Complete Purchase</button>\r\n            <a routerLink=\"/shop\" class=\"btn btn-info\">Cancel</a>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-3\"></div>\r\n</div>\n");

/***/ }),

/***/ "../node_modules/raw-loader/dist/cjs.js!./app/components/contact/contact.component.html":
/*!**********************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./app/components/contact/contact.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container contact\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-3\">\n\t\t\t<div class=\"contact-info\">\n                <h1><i class=\"fa fa-envelope-o\"></i></h1>\n\t\t\t\t<h2>Contact Us</h2>\n\t\t\t\t<h4>We would love to hear from you !</h4>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md-9\"> \n         <form class=\"contact-form\"  #contactForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" >\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t  <label class=\"control-label col-sm-2\" for=\"fname\">First Name:</label>\n\t\t\t\t  <div class=\"col-sm-10\">          \n                    <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"Enter First Name\" required maxlength=\"30\" minlength=\"2\" ngModel name=\"fname\" #fname=\"ngModel\">\n                  </div>\n                </div>\n                 \n            <div *ngIf=\"fname.invalid && (fname.dirty || fname.touched)\" class=\"alert alert-danger\"><div *ngIf=\"fname.errors.required\">\n                  First Name is required.\n               </div>\n               <div *ngIf=\"fname.errors.minlength\">\n                  First Name must be at least 2 characters long.\n              </div>\n              <div *ngIf=\"fname.errors.maxlength\">\n                  First Name cannot be more than 30 characters long.\n              </div>\n            </div>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t  <label class=\"control-label col-sm-2\" for=\"lname\">Last Name:</label>\n\t\t\t\t  <div class=\"col-sm-10\">          \n                        <input type=\"text\" class=\"form-control\" id=\"lname\" placeholder=\"Enter Last Name\" required maxlength=\"30\" minlength=\"2\" ngModel name=\"lname\" #lname=\"ngModel\">\n\t\t\t\t  </div>\n                </div>\n                \n                <div *ngIf=\"lname.invalid && (lname.dirty || lname.touched)\" class=\"alert alert-danger\"><div *ngIf=\"lname.errors.required\">\n                        Last Name is required.\n                     </div>\n                     <div *ngIf=\"lname.errors.minlength\">\n                        Last Name must be at least 2 characters long.\n                    </div>\n                    <div *ngIf=\"lname.errors.maxlength\">\n                        Last Name cannot be more than 30 characters long.\n                    </div>\n                  </div>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t  <label class=\"control-label col-sm-2\" for=\"email\">Email:</label>\n\t\t\t\t  <div class=\"col-sm-10\">           \n                  <input type=\"email\" id=\"email\" placeholder=\"Enter Your Email\" class=\"form-control\" name=\"email\" ngModel name=\"email\" required pattern=\"[^ @]*@[^ @]*\" emailDomain #email=\"ngModel\">\n                  </div>\n                </div>\n                \n                <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert alert-danger\"><div *ngIf=\"email.errors.required\">\n                          Email is required.\n                       </div>\n                  <div *ngIf=\"email.errors.pattern\">\n                      The email address must contain at least the @ character.\n                  </div>\n                  \n                </div>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t  <label class=\"control-label col-sm-2\" for=\"comment\">Comment:</label>\n\t\t\t\t  <div class=\"col-sm-10\">\n\t\t\t\t\t<textarea class=\"form-control\" rows=\"5\" id=\"comment\" name=\"comment\" ngModel name=\"comment\" required maxlength=\"30\" minlength=\"10\" #comment=\"ngModel\"></textarea>\n\t\t\t\t  </div>\n                </div>\n                \n                <div *ngIf=\"comment.invalid && (comment.dirty || comment.touched)\" class=\"alert alert-danger\"><div *ngIf=\"comment.errors.required\">\n                        Please Leave Some Comment.\n                     </div>\n                     <div *ngIf=\"comment.errors.minlength\">\n                       Comment must be at least 10 characters long.\n                    </div>\n                    <div *ngIf=\"comment.errors.maxlength\">\n                       Comment cannot be more than 30 characters long.\n                    </div>\n                  </div>\n\n\t\t\t\t<div class=\"form-group\">        \n\t\t\t\t  <div class=\"col-sm-offset-2 col-sm-10\">\n                        <button  type=\"submit\"  [disabled]=\"contactForm.invalid\">\n                           Submit\n                        </button>\n\t\t\t\t  </div>\n                </div>\n\n\t\t\t</form>\n\t\t</div>\n    </div>\n    <div  >\n            <hr>\n    </div>\n\n</div>\n");

/***/ }),

/***/ "../node_modules/raw-loader/dist/cjs.js!./app/components/footer/footer.component.html":
/*!********************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./app/components/footer/footer.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\t\t<!-- FOOTER -->\n\t\t<footer id=\"footer\" >\n                <!-- top footer -->\n                <div class=\"section\">\n                    <!-- container -->\n                    <div class=\"container\">\n                        <!-- row -->\n                        <div class=\"row\">\n                            <div class=\"col-md-3 col-xs-6\">\n                                <div class=\"footer\">\n                                    <h3 class=\"footer-title\">About Us</h3>\n                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>\n                                    <ul class=\"footer-links\">\n                                        <li><a href=\"#\"><i class=\"fa fa-map-marker\"></i>Ramat Gan</a></li>\n                                        <li><a href=\"#\"><i class=\"fa fa-phone\"></i>+021-95-51-84</a></li>\n                                        <li><a href=\"#\"><i class=\"fa fa-envelope-o\"></i>romanmayers@yahoo.com</a></li>\n                                    </ul>\n                                </div>\n                            </div>\n    \n                            <div class=\"col-md-3 col-xs-6\">\n                                <div class=\"footer\">\n                                    <h3 class=\"footer-title\">Categories</h3>\n                                    <ul class=\"footer-links\">\n                                        <li><a href=\"#\">Hot deals</a></li>\n                                        <li><a href=\"#\">Laptops</a></li>\n                                        <li><a href=\"#\">Smartphones</a></li>\n                                        <li><a href=\"#\">Cameras</a></li>\n                                        <li><a href=\"#\">Accessories</a></li>\n                                    </ul>\n                                </div>\n                            </div>\n    \n                            <div class=\"clearfix visible-xs\"></div>\n                            \n                                       \n                            <div class=\"col-md-3 col-xs-6\">\n                                <div class=\"footer\">\n                                    <h3 class=\"footer-title\">Information</h3>\n                                    <ul class=\"footer-links\">\n                                        <li><a [routerLink]=\"['/about']\"><i class=\"fa fa-info\"></i>About Us</a></li>\n                                        <li><a [routerLink]=\"['/contact']\"><i class=\"fa fa-address-book\"></i>Contact Us</a></li>\n                                        <li><a href=\"#\">Privacy Policy</a></li>\n                                        <li><a href=\"#\">Orders and Returns</a></li>\n                                        <li><a href=\"#\">Terms & Conditions</a></li>\n                                    </ul>\n                                </div>\n                            </div>\n    \n                            <div class=\"col-md-3 col-xs-6\">\n                                <div class=\"footer\">\n                                    <h3 class=\"footer-title\">Service</h3>\n                                    <ul class=\"footer-links\">\n                                        <li><a [routerLink]=\"['/index']\">My Account</a></li>\n                                        <li><a [routerLink]=\"['/cart']\"><i class=\"fa fa-shopping-cart\"></i>View Cart</a></li>\n                                        <li><a href=\"#\">Wishlist</a></li>\n                                        <li><a href=\"#\">Track My Order</a></li>\n                                        <li><a href=\"#\">Help</a></li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- /row -->\n                    </div>\n                    <!-- /container -->\n                </div>\n                <!-- /top footer -->\n    \n                <!-- bottom footer -->\n                <div id=\"bottom-footer\" class=\"section\">\n                    <div class=\"container\">\n                        <!-- row -->\n                        <div class=\"row\">\n                            <div class=\"col-md-12 text-center\">\n                                <ul class=\"footer-payments\">\n                                    <li><a href=\"#\"><i class=\"fa fa-cc-visa\"></i></a></li>\n                                    <li><a href=\"#\"><i class=\"fa fa-credit-card\"></i></a></li>\n                                    <li><a href=\"#\"><i class=\"fa fa-cc-paypal\"></i></a></li>\n                                    <li><a href=\"#\"><i class=\"fa fa-cc-mastercard\"></i></a></li>\n                                    <li><a href=\"#\"><i class=\"fa fa-cc-discover\"></i></a></li>\n                                    <li><a href=\"#\"><i class=\"fa fa-cc-amex\"></i></a></li>\n                                </ul>\n                                <span class=\"copyright\">\n                                    <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->\n                                    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i> by <a href=\"https://colorlib.com\" target=\"_blank\">Colorlib</a> | WEB Programming by Roman Mayerson\n                                <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->\n                                </span>\n                            </div>\n                        </div>\n                            <!-- /row -->\n                    </div>\n                    <!-- /container -->\n                </div>\n                <!-- /bottom footer -->\n            </footer>\n            <!-- /FOOTER -->\n");

/***/ }),

/***/ "../node_modules/raw-loader/dist/cjs.js!./app/components/header/header.component.html":
/*!********************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./app/components/header/header.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\t\t<!-- HEADER -->\n\t\t<header>\n                <!-- TOP HEADER -->\n                <div id=\"top-header\">\n                    <div class=\"container \">\n                        <ul class=\"header-links pull-left\">\n                            <li><a href=\"#\"><i class=\"fa fa-phone\"></i> +021-95-51-84</a></li>\n                            <li><a href=\"#\"><i class=\"fa fa-envelope-o\"></i> romanmayers@yahoo.com</a></li>\n                            <li><a href=\"#\"><i class=\"fa fa-map-marker\"></i> Ramat Gan</a></li>\n                        </ul>\n                        <ul class=\"header-links  pull-right\">\r\n                            <li class=\"nav-link\"><a href=\"#\"><i class=\"fa fa-dollar\"></i> USD</a></li>\r\n                            <li *ngIf=\"!itemService.loggedIn\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>\r\n                            <li *ngIf=\"itemService.loggedIn\"><button (click)=\"logOut()\">Logout</button>\r\n                            <li *ngIf=\"itemService.loggedIn\"class=\"nav-link\"><a href=\"#\"><i class=\"fa fa-user-o\"></i> Logged as {{itemService.username}}</a></li>\r\n                            <li class=\"nav-link\"><a [routerLink]=\"['/index']\"><i class=\"fa fa-home\"></i>Home</a></li>\r\n                            <li class=\"nav-link\"><a [routerLink]=\"['/about']\"><i class=\"fa fa-info\"></i>About</a></li>\r\n                            <li class=\"nav-link\"><a [routerLink]=\"['/contact']\"><i class=\"fa fa-address-book\"></i>Contact</a></li>\r\n                        </ul>\n                    </div>\n                </div>\n                <!-- /TOP HEADER -->\n    \n                <!-- MAIN HEADER -->\n                <div id=\"header\">\n                    <!-- container -->\n                    <div class=\"container\">\n                        <!-- row -->\n                        <div class=\"row\">\n                            <!-- LOGO -->\n                            <div class=\"col-md-3\">\n                                <div class=\"header-logo\">\n                                    <a [routerLink]=\"['/index']\" class=\"logo\">\n                                        <img src=\"/clientapp/assets/images/logo.png\" alt=\"\">\n                                    </a>\n                                </div>\n                            </div>\n                            <!-- /LOGO -->\n    \n                            <!-- SEARCH BAR -->\n                            <div class=\"col-md-6\">\n                                <div class=\"header-search\">\n                                    <form id=\"filter\">\n                                        <select class=\"input-select\" name=\"category\" [(ngModel)]=\"productService.selectedCategory\">\n                                            <option value=\"All Categories\">All Categories</option>\n                                            <option value=\"laptop\">laptop</option>\n                                            <option value=\"tablet\">tablet</option>\n                                            <option value=\"smartphone\">smartphone</option>\n                                            <option value=\"camera\">camera</option>\n                                            <option value=\"headphones\">headphones</option>\n                                        </select>\n                                        <input class=\"input\" name='search' type=\"text\" [(ngModel)]=\"productService.term\" placeholder=\"Search here\">\n                                        <button class=\"search-btn\" [routerLink]=\"['/']\">Search</button>\n                                    </form>\n                                </div>\n                            </div>\n                            <!-- /SEARCH BAR -->\n    \n                            <!-- ACCOUNT -->\n                            <div class=\"col-md-3 clearfix\">\n                                <div class=\"header-ctn\">\n                                    <!-- Wishlist -->\n                                    <!-- <div>\n                                        <a href=\"#\">\n                                            <i class=\"fa fa-heart-o\"></i>\n                                            <span>Your Wishlist</span>\n                                            <div class=\"qty\">2</div>\n                                        </a>\n                                    </div> -->\n                                    <!-- /Wishlist -->\n    \n                                    <!-- Cart -->\n    \n                                    <div class=\"dropdown show \">\n                                            <a class=\"btn dropdown-toggle\" data-toggle=\"dropdown\"aria-haspopup=\"true\" aria-expanded=\"false\">\n                             <i class=\"fa fa-shopping-cart\" style=\"font-size:3em;color:white;\"></i>\n                                                <span  style=\"color:white;\">Your Cart</span>\n                                                <div class=\"qty\">{{itemService.items.length}}</div>\n                                            </a>\n                                            <div class=\"cart-dropdown\">\n                                                <div  class=\"cart-list\">\n                             <div *ngFor=\"let item of itemService.items\"> \n                                                    <div class=\"product-widget\">\n                                                        <div class=\"product-img\">\n                                                            <img src=\"/clientapp/assets/images/{{item.product.photo}}\" alt=\"\">\n                                                        </div>\n                                                        <div class=\"product-body\">\n                                                            <h3 class=\"product-name\"><a href=\"#\">{{item.product.name}}</a></h3>\n                                                            <h4 class=\"product-price\"><span class=\"qty\">{{ item.quantity}}x</span>${{item.product.price * item.quantity}}</h4>\n                                                        </div>\n                                <button class=\"dropdown-item\"  (click)=\"itemService.remove(item.product.id)\" class=\"delete\"><i class=\"fa fa-close\"></i></button>\n                              </div>\n                              </div>\n                              \n                                                </div>\n                                                <div class=\"cart-summary\">\n                                                    <small> Item(s) selected</small>\n                                                    <h5>SUBTOTAL: {{itemService.total}}</h5>\n                                                </div>\n                                                <div class=\"cart-btns\">\n                                                    <a class=\"dropdown-item\" [routerLink]=\"['/cart']\">View Cart</a>\n                                                    <a href=\"#\">Checkout  <i class=\"fa fa-arrow-circle-right\"></i></a>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    <!-- /Cart -->\n    \n                                    <!-- Menu Toogle -->\n                                    <!-- <div class=\"menu-toggle\">\n                                        <a href=\"#\">\n                                            <i class=\"fa fa-bars\"></i>\n                                            <span>Menu</span>\n                                        </a>\n                                    </div> -->\n                                    <!-- /Menu Toogle -->\n                                </div>\n                            </div>\n                            <!-- /ACCOUNT -->\n                        </div>\n                        <!-- row -->\n                    </div>\n                    <!-- container -->\n                </div>\n                <!-- /MAIN HEADER -->\n            <!-- /HEADER -->\n                ");

/***/ }),

/***/ "../node_modules/raw-loader/dist/cjs.js!./app/components/index/index.component.html":
/*!******************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./app/components/index/index.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<!-- Products tab & slick -->\n<div class=\"container\">\n  <div class=\"row\"  >\n    <div class=\"col-md-2 col-sm-3\" *ngFor=\"let product of products |filter:productService.term:productService.selectedCategory| paginate: config\"  >\n      <!-- tab -->\n      <div  id=\"tab1\" class=\"tab-pane active\">\n        <div  class=\"products-slick\" data-nav=\"#slick-nav-1\">\n          <!-- product -->\n          <div class=\"product \">\n            <div class=\"product-img\" [routerLink]=\"['/product',{id:product.id}]\">\n              <img src=\"/clientapp/assets/images/{{product.photo}}\" alt=\"\" >\n              <div class=\"product-label\">\n                <span class=\"sale\">-30%</span>\n                <span class=\"new\">NEW</span>\n              </div>\n            </div>\n            <div class=\"product-body\">\n              <p class=\"product-category\">Category:{{product.category}}</p>\n              <h3 class=\"product-name\"><a [routerLink]=\"['/product',{id:product.id}]\">{{product.name}}</a></h3>\n              <h4 class=\"product-price\">{{product.price}}$ <del class=\"product-old-price\">{{productService.round(product.price*100/70)}}$</del></h4>\n\n              <span class=\"product-rating\" *ngFor=\"let i of [].constructor(productService.round(productService.averageRating(product)))\">\n                  <i class=\"fa fa-star\"></i>\n              </span>\n\n              <div class=\"product-btns\">\n                <button class=\"add-to-wishlist\"><i class=\"fa fa-heart-o\"></i><span class=\"tooltipp\">add to wishlist</span></button>\n                <button class=\"add-to-compare\"><i class=\"fa fa-exchange\"></i><span class=\"tooltipp\">add to compare</span></button>\n                <button class=\"quick-view\"><i class=\"fa fa-eye\"></i><span class=\"tooltipp\">quick view</span></button>\n              </div>\n            </div>\n            <div class=\"add-to-cart\">\n              <button (click)=\"itemService.add(product.id)\" class=\"add-to-cart-btn\"><i class=\"fa fa-shopping-cart\"></i> add to cart</button>\n            </div>\n          </div>\n          <!-- /product -->\n        </div>\n        <div id=\"slick-nav-1\" class=\"products-slick-nav\"></div>\n      </div>\n      <!-- /tab -->\n    </div>\n  </div>\n  <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n</div>\n\n<!-- Products tab & slick -->\n\n\n\n\n\n\n\n<!-- <h3>Product List</h3>\n<table border=\"1\">\n  <tr>\n    <th>Id</th>\n    <th>Name</th>\n    <th>Price</th>\n    <th>Photo</th>\n    <th>Buy</th>\n  </tr>\n\n  <tr *ngFor=\"let product of products\">\n    <td>{{product.id}}</td>\n    <td>{{product.name}}</td>\n    <td>{{product.price}}</td>\n    <td>\n        <img src=\"../../assets/img/{{product.photo}}\">\n    </td>\n    <td>\n        \n        <button (click)=\"itemService.add(product.id)\">Buy Now</button>\n    </td>\n  </tr>\n\n</table> -->\n");

/***/ }),

/***/ "../node_modules/raw-loader/dist/cjs.js!./app/components/login/login.component.html":
/*!******************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./app/components/login/login.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <div class=\"col-md-4 col-md-offset-4\">\r\n        <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">{{ errorMessage }}</div>\r\n        <form (submit)=\"onLogin()\" #theForm=\"ngForm\" novalidate>\r\n            <div class=\"form-group\">\r\n                <label for=\"username\">Username</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"creds.username\" #username=\"ngModel\" required />\r\n                <div class=\"text-danger\" *ngIf=\"username.touched && username.invalid && username.errors.required\">Username is required</div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"password\">Password</label>\r\n                <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"creds.password\" #password=\"ngModel\" required />\r\n                <div class=\"text-danger\" *ngIf=\"password.touched && password.invalid && password.errors.required\">Password is required</div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"submit\" class=\"btn btn-success\" value=\"Login\" [disabled]=\"theForm.invalid\" />\r\n                <a eouterLink=\"/\" class=\"btn btn-default\">Cancel</a>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "../node_modules/raw-loader/dist/cjs.js!./app/components/product/product.component.html":
/*!**********************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./app/components/product/product.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- SECTION -->\n<div class=\"section\">\n        <!-- container -->\n        <div class=\"container\">\n            <!-- row -->\n            <div class=\"row\">\n                <!-- Product main img -->\n                <div class=\"col-md-5 col-md-push-2\">\n                    <div id=\"product-main-img\">\n                        <!-- <div class=\"product-preview\">\n                            <img src=\"./images/product01.png\" alt=\"\">\n                        </div>\n\n                        <div class=\"product-preview\">\n                            <img src=\"./images/product03.png\" alt=\"\">\n                        </div> -->\n\n                        <div class=\"product-preview\">\n                            <img src=\"/clientapp/assets/images/{{selected_product.photo}}\" alt=\"\">\n                        </div>\n\n                        <!-- <div class=\"product-preview\">\n                            <img src=\"./images/product08.png\" alt=\"\">\n                        </div> -->\n                    </div>\n                </div>\n                <!-- /Product main img -->\n\n                <!-- Product thumb imgs -->\n                <div class=\"col-md-2  col-md-pull-5\">\n                    <!--<div id=\"product-imgs\">\n                        <div class=\"product-preview\">\n                            <img src=\"./assets/images/{{selected_product.photo}}\" alt=\"\">\n                        </div>\n\n                        <div class=\"product-preview\">\n                                <img src=\"./assets/images/{{selected_product.photo}}\" alt=\"\">\n                        </div>\n\n                        <div class=\"product-preview\">\n                                <img src=\"./assets/images/{{selected_product.photo}}\" alt=\"\">\n                        </div>\n                    </div>-->\n                </div>\n                <!-- /Product thumb imgs -->\n\n                <!-- Product details -->\n                <div class=\"col-md-5\">\n                    <div class=\"product-details\">\n                        <h2 class=\"product-name\">{{selected_product.name}}</h2>\n                        <div>\n\n                            <div class=\"product-rating\" *ngFor=\"let i of [].constructor(productService.round(productService.averageRating(selected_product)))\">\n                               <i class=\"fa fa-star\"></i>\n                            </div>\n                            <a class=\"review-link\" target=\"_self\" href=\"product;id={{id}}#tab1\">{{selected_product.reviews.length}} Review(s) | Add your review</a>\n                        </div>\n                        <div>\n                            <h3 class=\"product-price\">{{selected_product.price}} <del class=\"product-old-price\">{{productService.round(selected_product.price*100/70)}}$</del></h3>\n                            <span class=\"product-available\">In Stock</span>\n                        </div>\n                        <p>{{selected_product.description}}</p>\n\n                        <!-- <div class=\"product-options\">\n                            <label>\n                                Size\n                                <select class=\"input-select\">\n                                    <option value=\"0\">X</option>\n                                </select>\n                            </label>\n                            <label>\n                                Color\n                                <select class=\"input-select\">\n                                    <option value=\"0\">Red</option>\n                                </select>\n                            </label>\n                        </div> -->\n\n                        <div class=\"add-to-cart\">\n                            <div class=\"qty-label\">\n                                Qty\n                                <div class=\"input-number\">\n                                    <input type=\"number\">\n                                    <span class=\"qty-up\">+</span>\n                                    <span class=\"qty-down\">-</span>\n                                </div>\n                            </div>\n                            <button (click)=\"itemService.add(selected_product.id)\" class=\"add-to-cart-btn\"><i class=\"fa fa-shopping-cart\"></i> add to cart</button>\n                        </div>\n\n                        <ul class=\"product-btns\">\n                            <li><a href=\"#\"><i class=\"fa fa-heart-o\"></i> add to wishlist</a></li>\n                            <li><a href=\"#\"><i class=\"fa fa-exchange\"></i> add to compare</a></li>\n                        </ul>\n\n                        <ul class=\"product-links\">\n                            <li>Category:</li>\n                            <li><a href=\"#\">{{selected_product.category}}</a></li>\n                            <!-- <li><a href=\"#\">Accessories</a></li> -->\n                        </ul>\n\n                        <ul class=\"product-links\">\n                            <li>Share:</li>\n                            <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n                            <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n                            <li><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\n                            <li><a href=\"#\"><i class=\"fa fa-envelope\"></i></a></li>\n                        </ul>\n\n                    </div>\n                </div>\n                <!-- /Product details -->\n\n                <!-- Product tab -->\n                <div class=\"col-md-12\">\n                    <div id=\"product-tab\">\n                        <!-- product tab nav -->\n                        <ul class=\"tab-nav\">\n                            <li class=\"active\"><a data-toggle=\"tab\" href=\"#tab1\">Description</a></li>\n                            <li><a data-toggle=\"tab\" href=\"#tab2\">Details</a></li>\n                            <li><a data-toggle=\"tab\" href=\"#tab3\">Reviews ({{selected_product.reviews.length}})</a></li>\n                        </ul>\n                        <!-- /product tab nav -->\n                    </div>\n                        <!-- product tab content -->\n                        <div class=\"tab-content\">\n                            <!-- tab1  -->\n                            <div id=\"tab1\" class=\"tab-pane  active\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-12\">\n                                        <p>{{selected_product.description}}</p>\n                                    </div>\n                                </div>\n                            </div>\n                            <!-- /tab1  -->\n\n                            <!-- tab2  -->\n                            <div id=\"tab2\" class=\"tab-pane \">\n                                <div class=\"row\">\n                                    <div class=\"col-md-12\">\n                                        <p>Lorem ipsum dolor sit amet,.</p>\n                                    </div>\n                                </div>\n                            </div>\n                            <!-- /tab2  -->\n\n                            \n<!-- tab3  -->\n<div id=\"tab3\" class=\"tab-pane\">\n        <div class=\"row\">\n            <!-- Rating -->\n            <div class=\"col-md-3\">\n                <div id=\"rating\">\n                    <div class=\"rating-avg\">\n                        <span>{{productService.round(productService.averageRating(selected_product))}}</span>\n                        <div class=\"rating-stars\" *ngFor=\"let i of [].constructor(productService.round(productService.averageRating(selected_product)))\">\n                            <i class=\"fa fa-star\"></i>\n\n                        </div>\n                    </div>\n                    <ul class=\"rating\" *ngFor=\"let review of selected_product.reviews\">\n                        <li>\n                                <div class=\"rating-stars\" *ngFor=\"let i of [].constructor(review.rating)\">\n                                <i class=\"fa fa-star\"></i>\n                            </div>\n                            <div class=\"rating-progress\">\n                                <div [style.width.%]=\"review.rating*20\"></div>                             \n                            </div>\n                            <span class=\"sum\">{{review.rating}}</span>\n                        </li>\n                       \n                    </ul>\n                </div>\n            </div>\n            <!-- /Rating -->\n\n            <!-- Reviews -->\n            <div class=\"col-md-6\" >\n                <div id=\"reviews\">\n                    <ul class=\"reviews\" *ngFor=\"let review of selected_product.reviews\">\n                        <li>\n                            <div class=\"review-heading\">\n                                <h5 class=\"name\">{{review.reviewerName}}</h5>\n                                <p class=\"date\">{{review.date}}</p>\n                                \n                                <span class=\"rating-stars\" *ngFor=\"let i of [].constructor(review.rating)\">\n                                    <i class=\"fa fa-star\"></i>\n                                </span>\n\n                            </div>\n                            <div class=\"review-body\">\n                                <p>{{review.content}}</p>\n                            </div>\n                        </li>\n                        \n                    </ul>\n\n                                <!-- <div class=\"rating-stars\" *ngFor=\"let review of selected_product.reviews.rating\">\n                                    <i class=\"fa fa-star-o empty\"></i>\n                                </div> -->\n\n                    <!-- <ul class=\"reviews-pagination\">\n                        <li class=\"active\">1</li>\n                        <li><a href=\"#\">2</a></li>\n                        <li><a href=\"#\">3</a></li>\n                        <li><a href=\"#\">4</a></li>\n                        <li><a href=\"#\"><i class=\"fa fa-angle-right\"></i></a></li>\n                    </ul> -->\n                </div>\n            </div>\n            <!-- /Reviews -->\n\n            <!-- Review Form -->\n            <div class=\"col-md-3\">\n                <div id=\"review-form\">\n                    <form class=\"review-form\" [formGroup]=\"reviewForm\" (ngSubmit)=\"submitReview()\">\r\n                        <div class=\"form-group\">\r\n                            <input class=\"input\" type=\"text\" placeholder=\"Your Name\" formControlName=\"reviewer_name\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <input class=\"input\" type=\"email\" placeholder=\"Your Email\" formControlName=\"email\">\r\n                         </div>\r\n                        <div class=\"form-group\">\r\n                            <textarea class=\"input\" placeholder=\"Your Review\" formControlName=\"content\"></textarea>\r\n                         </div>\r\n                         \r\n                            <div class=\"input-rating\" >\r\n                                <span>Your Rating: </span>\r\n                                <div class=\"stars\">\r\n                                    <input id=\"star5\" name=\"rating\" value=\"5\" type=\"radio\" formControlName=\"rating\"><label for=\"star5\"></label>\r\n                                    <input id=\"star4\" name=\"rating\" value=\"4\" type=\"radio\" formControlName=\"rating\"><label for=\"star4\"></label>\r\n                                    <input id=\"star3\" name=\"rating\" value=\"3\" type=\"radio\" formControlName=\"rating\"><label for=\"star3\" ></label>\r\n                                    <input id=\"star2\" name=\"rating\" value=\"2\" type=\"radio\" formControlName=\"rating\"><label for=\"star2\" ></label>\r\n                                    <input id=\"star1\" name=\"rating\" value=\"1\" type=\"radio\" formControlName=\"rating\"><label for=\"star1\" ></label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <button class=\"primary-btn\">Submit</button>\r\n                            </div>\r\n                      </form>\n                </div>\n            </div>\n            <!-- /Review Form -->\n        </div>\n    </div>\n    <!-- /tab3  -->\n                       </div>\n                   \n                 </div>\n\n<h2>Products you might be interested</h2>\n\n<div class=\"col-md-2 col-sm-3\" *ngFor=\"let product of productService.search_results\"  >\n        <!-- tab -->\n        <div  id=\"tab1_\" class=\"tab-pane active\">\n          <div  class=\"products-slick\" data-nav=\"#slick-nav-1\">\n            <!-- product -->\n            <div class=\"product \">\n              <div class=\"product-img\" [routerLink]=\"['/product',{id:product.id}]\">\n                <img src=\"/clientapp/assets/images/{{product.photo}}\" alt=\"\" >\n                <div class=\"product-label\">\n                  <span class=\"sale\">-30%</span>\n                  <span class=\"new\">NEW</span>\n                </div>\n              </div>\n              <div class=\"product-body\">\n                <p class=\"product-category\">Category:{{product.category}}</p>\n                <h3 class=\"product-name\"><a [routerLink]=\"['/product',{id:product.id}]\">{{product.name}}</a></h3>\n                <h4 class=\"product-price\">{{product.price}}$ <del class=\"product-old-price\">{{productService.round(product.price*100/70)}}$</del></h4>\n  \n                <span class=\"product-rating\" *ngFor=\"let i of [].constructor(productService.round(productService.averageRating(product)))\">\n                    <i class=\"fa fa-star\"></i>\n                </span>\n  \n                <div class=\"product-btns\">\n                  <button class=\"add-to-wishlist\"><i class=\"fa fa-heart-o\"></i><span class=\"tooltipp\">add to wishlist</span></button>\n                  <button class=\"add-to-compare\"><i class=\"fa fa-exchange\"></i><span class=\"tooltipp\">add to compare</span></button>\n                  <button class=\"quick-view\"><i class=\"fa fa-eye\"></i><span class=\"tooltipp\">quick view</span></button>\n                </div>\n              </div>\n              <div class=\"add-to-cart\">\n                <button (click)=\"itemService.add(product.id)\" class=\"add-to-cart-btn\"><i class=\"fa fa-shopping-cart\"></i> add to cart</button>\n              </div>\n            </div>\n            <!-- /product -->\n          </div>\n          <div id=\"slick-nav-1_\" class=\"products-slick-nav\"></div>\n        </div>\n        <!-- /tab -->\n      </div>\n\n\n\n</div>\n</div>\n</div>");

/***/ }),

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app/app-routing.module.ts":
/*!***********************************!*\
  !*** ./app/app-routing.module.ts ***!
  \***********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/index/index.component */ "./app/components/index/index.component.ts");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/product/product.component */ "./app/components/product/product.component.ts");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/cart/cart.component */ "./app/components/cart/cart.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/contact/contact.component */ "./app/components/contact/contact.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/about/about.component */ "./app/components/about/about.component.ts");
/* harmony import */ var _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/checkout/checkout.component */ "./app/components/checkout/checkout.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "./app/components/login/login.component.ts");










const routes = [
    { path: '', component: _components_index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"] },
    { path: 'product', component: _components_product_product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"] },
    { path: 'cart', component: _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_5__["CartComponent"] },
    { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
    { path: 'checkout', component: _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__["CheckoutComponent"] },
    { path: '**', redirectTo: '' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./app/app.component.scss":
/*!********************************!*\
  !*** ./app/app.component.scss ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./app/app.component.ts":
/*!******************************!*\
  !*** ./app/app.component.ts ***!
  \******************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'ElectroShop';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "../node_modules/raw-loader/dist/cjs.js!./app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./app/app.module.ts":
/*!***************************!*\
  !*** ./app/app.module.ts ***!
  \***************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "../node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./app/app.component.ts");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/product/product.component */ "./app/components/product/product.component.ts");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/index/index.component */ "./app/components/index/index.component.ts");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/cart/cart.component */ "./app/components/cart/cart.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/header/header.component */ "./app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/footer/footer.component */ "./app/components/footer/footer.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/contact/contact.component */ "./app/components/contact/contact.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/about/about.component */ "./app/components/about/about.component.ts");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipes/filter.pipe */ "./app/pipes/filter.pipe.ts");
/* harmony import */ var _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/checkout/checkout.component */ "./app/components/checkout/checkout.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/login/login.component */ "./app/components/login/login.component.ts");


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _components_product_product_component__WEBPACK_IMPORTED_MODULE_8__["ProductComponent"],
            _components_index_index_component__WEBPACK_IMPORTED_MODULE_9__["IndexComponent"],
            _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_10__["CartComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
            _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"],
            _components_about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"],
            _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_15__["FilterPipe"],
            _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_16__["CheckoutComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./app/components/about/about.component.scss":
/*!***************************************************!*\
  !*** ./app/components/about/about.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./app/components/about/about.component.ts":
/*!*************************************************!*\
  !*** ./app/components/about/about.component.ts ***!
  \*************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "../node_modules/raw-loader/dist/cjs.js!./app/components/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.scss */ "./app/components/about/about.component.scss")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./app/components/cart/cart.component.scss":
/*!*************************************************!*\
  !*** ./app/components/cart/cart.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FydC9jYXJ0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./app/components/cart/cart.component.ts":
/*!***********************************************!*\
  !*** ./app/components/cart/cart.component.ts ***!
  \***********************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/item.service */ "./app/services/item.service.ts");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/order.service */ "./app/services/order.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/product.service */ "./app/services/product.service.ts");







let CartComponent = class CartComponent {
    constructor(activatedRoute, router, productService, itemService, order_service) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.productService = productService;
        this.itemService = itemService;
        this.order_service = order_service;
        this.items = [];
        this.total = 0;
    }
    remove(id) { }
    ;
    loadCart() { }
    ;
    ngOnInit() {
        // this.items=this.itemService.items;
        // this.total=this.itemService.total;
        this.remove = this.itemService.remove;
        this.loadCart = this.itemService.loadCart;
        this.activatedRoute.params.subscribe((params) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var id = params['id'];
            if (id) {
                var item = {
                    product: yield this.productService.find(id),
                    quantity: 1
                };
                if (localStorage.getItem('cart') == null) {
                    let cart = [];
                    cart.push(JSON.stringify(item));
                    yield localStorage.setItem('cart', JSON.stringify(cart));
                }
                else {
                    let cart = JSON.parse(yield localStorage.getItem('cart'));
                    let index = -1;
                    for (var i = 0; i < cart.length; i++) {
                        let item = JSON.parse(cart[i]);
                        if (item.product.id == id) {
                            index = i;
                            break;
                        }
                    }
                    if (index == -1) {
                        cart.push(JSON.stringify(item));
                        yield localStorage.setItem('cart', JSON.stringify(cart));
                    }
                    else {
                        let item = JSON.parse(cart[index]);
                        item.quantity += 1;
                        cart[index] = JSON.stringify(item);
                        yield localStorage.setItem("cart", JSON.stringify(cart));
                    }
                }
                this.loadCart();
            }
            else {
                this.loadCart();
            }
        }));
    }
    onOrderCheckout() {
        if (this.order_service.loginRequired) {
            //Force Login
            this.router.navigate(["login"]);
        }
        else {
            //Go to checkout
            this.router.navigate(["checkout"]);
        }
    }
};
CartComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
    { type: _services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"] },
    { type: _services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"] }
];
CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cart.component.html */ "../node_modules/raw-loader/dist/cjs.js!./app/components/cart/cart.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cart.component.scss */ "./app/components/cart/cart.component.scss")).default]
    })
], CartComponent);



/***/ }),

/***/ "./app/components/checkout/checkout.component.scss":
/*!*********************************************************!*\
  !*** ./app/components/checkout/checkout.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".checkout-thumb {\n  max-width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jaGVja291dC9DOlxcVXNlcnNcXFJvbWFuIE1heWVyc29uXFxzb3VyY2VcXHJlcG9zXFxFbGVjdHJvU2hvcC1Db3JlL0NsaWVudEFwcFxcYXBwXFxjb21wb25lbnRzXFxjaGVja291dFxcY2hlY2tvdXQuY29tcG9uZW50LnNjc3MiLCJDbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKIiwiZmlsZSI6IkNsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jaGVja291dC9jaGVja291dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGVja291dC10aHVtYiB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG59XHJcbiIsIi5jaGVja291dC10aHVtYiB7XG4gIG1heC13aWR0aDogMTAwcHg7XG59Il19 */");

/***/ }),

/***/ "./app/components/checkout/checkout.component.ts":
/*!*******************************************************!*\
  !*** ./app/components/checkout/checkout.component.ts ***!
  \*******************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/item.service */ "./app/services/item.service.ts");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/order.service */ "./app/services/order.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/product.service */ "./app/services/product.service.ts");








let CheckoutComponent = class CheckoutComponent {
    constructor(activatedRoute, router, productService, itemService, orderService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.productService = productService;
        this.itemService = itemService;
        this.orderService = orderService;
        this.errorMessage = "";
    }
    ngOnInit() {
    }
    onCheckout() {
        // TODO
        //alert("Doing checkout");
        this.orderService.checkout().
            subscribe(success => {
            if (success) {
                this.router.navigate(["Shop"]);
            }
        }, err => this.errorMessage = "Failed to Save Order");
    }
    subtotal() {
        return lodash__WEBPACK_IMPORTED_MODULE_3__["sum"](lodash__WEBPACK_IMPORTED_MODULE_3__["map"](this.itemService.items, i => i.product.price * i.quantity));
    }
    ;
};
CheckoutComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"] },
    { type: _services_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"] },
    { type: _services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"] }
];
CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'checkout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./checkout.component.html */ "../node_modules/raw-loader/dist/cjs.js!./app/components/checkout/checkout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./checkout.component.scss */ "./app/components/checkout/checkout.component.scss")).default]
    })
], CheckoutComponent);



/***/ }),

/***/ "./app/components/contact/contact.component.scss":
/*!*******************************************************!*\
  !*** ./app/components/contact/contact.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./app/components/contact/contact.component.ts":
/*!*****************************************************!*\
  !*** ./app/components/contact/contact.component.ts ***!
  \*****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");


let ContactComponent = class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
    onSubmit() {
        alert("Form Submited");
    }
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "../node_modules/raw-loader/dist/cjs.js!./app/components/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.scss */ "./app/components/contact/contact.component.scss")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./app/components/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./app/components/footer/footer.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./app/components/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./app/components/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "../node_modules/raw-loader/dist/cjs.js!./app/components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./app/components/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./app/components/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./app/components/header/header.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./app/components/header/header.component.ts":
/*!***************************************************!*\
  !*** ./app/components/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/item.service */ "./app/services/item.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/product.service */ "./app/services/product.service.ts");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/order.service */ "./app/services/order.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm2015/http.js");






let HeaderComponent = class HeaderComponent {
    //public search_term:any;
    constructor(itemService, productService, orderService, http) {
        this.itemService = itemService;
        this.productService = productService;
        this.orderService = orderService;
        this.http = http;
        this.items = [];
        this.total = 0;
    }
    remove(id) { }
    ;
    loadCart() { }
    ;
    ngOnInit() {
        // this.items=this.itemService.items;
        // this.total=this.itemService.total;
        this.remove = this.itemService.remove;
        this.loadCart = this.itemService.loadCart;
        //this.search_term=this.productService.term;
        this.loadCart();
    }
    logOut() {
        this.itemService.username = "";
        this.orderService.resetToken();
        this.itemService.loggedIn = false;
        console.log("LogOUt");
        this.http.get("/Account/Logout");
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: _services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "../node_modules/raw-loader/dist/cjs.js!./app/components/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./app/components/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./app/components/index/index.component.scss":
/*!***************************************************!*\
  !*** ./app/components/index/index.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaW5kZXgvaW5kZXguY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./app/components/index/index.component.ts":
/*!*************************************************!*\
  !*** ./app/components/index/index.component.ts ***!
  \*************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/product.service */ "./app/services/product.service.ts");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/item.service */ "./app/services/item.service.ts");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/filter.pipe */ "./app/pipes/filter.pipe.ts");





let IndexComponent = class IndexComponent {
    constructor(productService, itemService) {
        //configs for pagination module
        this.productService = productService;
        this.itemService = itemService;
        this.config = {
            itemsPerPage: 6,
            currentPage: 1,
            totalItems: this.itemService.items.length
        };
    }
    pageChanged(event) {
        this.config.currentPage = event;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.products = yield this.productService.findAll();
        });
    }
};
IndexComponent.ctorParameters = () => [
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"] }
];
IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-index',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./index.component.html */ "../node_modules/raw-loader/dist/cjs.js!./app/components/index/index.component.html")).default,
        providers: [_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["FilterPipe"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./index.component.scss */ "./app/components/index/index.component.scss")).default]
    })
], IndexComponent);



/***/ }),

/***/ "./app/components/login/login.component.scss":
/*!***************************************************!*\
  !*** ./app/components/login/login.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./app/components/login/login.component.ts":
/*!*************************************************!*\
  !*** ./app/components/login/login.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/order.service */ "./app/services/order.service.ts");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/item.service */ "./app/services/item.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");





let LoginComponent = class LoginComponent {
    constructor(oservice, iservice, router) {
        this.oservice = oservice;
        this.iservice = iservice;
        this.router = router;
        this.errorMessage = "";
        this.creds = {
            username: "",
            password: ""
        };
    }
    ngOnInit() {
    }
    onLogin() {
        //Call the Login Service
        // alert(this.creds.username);
        this.oservice.login(this.creds)
            .subscribe(success => {
            if (success) {
                //Save Username in Items Service to track logged in user
                this.iservice.username = this.creds.username;
                this.iservice.loggedIn = true;
                if (this.iservice.items.length == 0) {
                    this.router.navigate(["shop"]);
                }
                else {
                    this.router.navigate(["checkout"]);
                }
            }
        }, err => this.errorMessage = "Failed to login");
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"] },
    { type: _services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "../node_modules/raw-loader/dist/cjs.js!./app/components/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./app/components/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./app/components/product/product.component.scss":
/*!*******************************************************!*\
  !*** ./app/components/product/product.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./app/components/product/product.component.ts":
/*!*****************************************************!*\
  !*** ./app/components/product/product.component.ts ***!
  \*****************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/product.service */ "./app/services/product.service.ts");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/item.service */ "./app/services/item.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _entities_reviewmodel_entity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../entities/reviewmodel.entity */ "./app/entities/reviewmodel.entity.ts");


//import { Review } from '../../entities/review.entity';







let ProductComponent = class ProductComponent {
    constructor(productService, itemService, activatedRoute, http, fb, router) {
        this.productService = productService;
        this.itemService = itemService;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.fb = fb;
        this.router = router;
        this.reviewForm = this.fb.group({
            reviewer_name: [''],
            content: [''],
            rating: [''],
            email: ['']
        });
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.products = yield this.productService.findAll();
            this.activatedRoute.params.subscribe((params) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.id = params['id'];
                if (this.id) {
                    this.selected_product = yield this.productService.find(this.id);
                }
                ;
                this.productService.getProductsByCategory(this.selected_product.category); //get all product with same 'category' as selected product 
            }));
        });
    }
    submitReview() {
        //console.log("Submitting");
        //var formData: any = new FormData();
        //formData.append("reviewer_name", this.reviewForm.get('reviewer_name').value);
        //formData.append("content", this.reviewForm.get('content').value);
        //formData.append("rating", this.reviewForm.get('rating').value);
        //formData.append("email", this.reviewForm.get('email').value);
        var review = new _entities_reviewmodel_entity__WEBPACK_IMPORTED_MODULE_7__["ReviewModel"]();
        review.product = this.selected_product;
        review.reviewername = this.reviewForm.get('reviewer_name').value;
        review.content = this.reviewForm.get('content').value;
        review.rating = this.reviewForm.get('rating').value;
        review.email = this.reviewForm.get('email').value;
        return this.http.post("api/reviews", review, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]()
                .set('Content-Type', 'application/json; charset=utf-8')
            //.set('application/x-www-form-urlencoded')
        })
            .subscribe(
        //Refreshing Reviews List on Products page,after new review was submited by calling product Service
        (response) => { this.UpdateUIafterReviewSubmit(); console.log(response); }, (error) => console.log(error));
    }
    UpdateUIafterReviewSubmit() {
        alert("Review Submitted,Thank you");
        this.router.navigate(['/shop']);
        //console.log("Implement method to refresh UI");
    }
};
ProductComponent.ctorParameters = () => [
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product.component.html */ "../node_modules/raw-loader/dist/cjs.js!./app/components/product/product.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product.component.scss */ "./app/components/product/product.component.scss")).default]
    })
], ProductComponent);



/***/ }),

/***/ "./app/entities/order.entity.ts":
/*!**************************************!*\
  !*** ./app/entities/order.entity.ts ***!
  \**************************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");

class Order {
}


/***/ }),

/***/ "./app/entities/reviewmodel.entity.ts":
/*!********************************************!*\
  !*** ./app/entities/reviewmodel.entity.ts ***!
  \********************************************/
/*! exports provided: ReviewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewModel", function() { return ReviewModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");

class ReviewModel {
}


/***/ }),

/***/ "./app/pipes/filter.pipe.ts":
/*!**********************************!*\
  !*** ./app/pipes/filter.pipe.ts ***!
  \**********************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");


let FilterPipe = class FilterPipe {
    transform(products, term, selected_category) {
        var categorized_products;
        //filter by category
        if (selected_category === "All Categories")
            categorized_products = products;
        else {
            categorized_products = products.filter((product) => {
                return product.category === selected_category;
            });
        }
        //check if search term is undefined
        if (term === undefined)
            return categorized_products; //return all products
        //else filter by name
        return categorized_products.filter((product) => {
            return product.name.toLowerCase().includes(term.toLowerCase());
        });
    }
};
FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filter'
    })
], FilterPipe);



/***/ }),

/***/ "./app/services/item.service.ts":
/*!**************************************!*\
  !*** ./app/services/item.service.ts ***!
  \**************************************/
/*! exports provided: ItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemService", function() { return ItemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.service */ "./app/services/product.service.ts");



let ItemService = class ItemService {
    constructor(productService) {
        this.productService = productService;
        this.loggedIn = false;
        this.items = [];
        this.total = 0;
    }
    loadCart() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.total = 0;
            this.items = [];
            let cart = yield JSON.parse(localStorage.getItem('cart'));
            for (var i = 0; i < cart.length; i++) {
                let item = JSON.parse(cart[i]);
                this.items.push({
                    product: item.product,
                    quantity: item.quantity
                });
                this.total += item.product.price * item.quantity;
            }
        });
    }
    add(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var item = {
                product: yield this.productService.find(id),
                quantity: 1
            };
            if ((yield localStorage.getItem('cart')) == null) {
                let cart = [];
                cart.push(JSON.stringify(item));
                yield localStorage.setItem('cart', JSON.stringify(cart));
            }
            else {
                let cart = JSON.parse(yield localStorage.getItem('cart'));
                let index = -1;
                for (var i = 0; i < cart.length; i++) {
                    let item = JSON.parse(cart[i]);
                    if (item.product.id == id) {
                        index = i;
                        break;
                    }
                }
                if (index == -1) {
                    cart.push(JSON.stringify(item));
                    yield localStorage.setItem('cart', JSON.stringify(cart));
                }
                else {
                    let item = JSON.parse(cart[index]);
                    item.quantity += 1;
                    cart[index] = JSON.stringify(item);
                    yield localStorage.setItem("cart", JSON.stringify(cart));
                }
            }
            this.loadCart();
        });
    }
    remove(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let cart = yield JSON.parse(localStorage.getItem('cart'));
            //let index:number=-1;
            for (var i = 0; i < cart.length; i++) {
                let item = JSON.parse(cart[i]);
                if (item.product.id == id) {
                    cart.splice(i, 1);
                    break;
                }
            }
            yield localStorage.setItem("cart", JSON.stringify(cart));
            yield this.loadCart();
        });
    }
};
ItemService.ctorParameters = () => [
    { type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }
];
ItemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ItemService);



/***/ }),

/***/ "./app/services/order.service.ts":
/*!***************************************!*\
  !*** ./app/services/order.service.ts ***!
  \***************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./item.service */ "./app/services/item.service.ts");
/* harmony import */ var _entities_order_entity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../entities/order.entity */ "./app/entities/order.entity.ts");






let OrderService = class OrderService {
    constructor(http, itemService) {
        this.http = http;
        this.itemService = itemService;
        this.token = "";
    }
    prepareNewOrder() {
        this.order = new _entities_order_entity__WEBPACK_IMPORTED_MODULE_5__["Order"]();
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        this.order.orderNumber = "ORD-" + mm + '-' + dd + '-' + yyyy;
        this.order.orderDate = mm + '-' + dd + '-' + yyyy;
        this.order.items = this.itemService.items;
    }
    checkout() {
        this.prepareNewOrder();
        return this.http.post("api/Orders", this.order, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("Authorization", "Bearer " + this.token)
                .set('Content-Type', 'application/json; charset=utf-8')
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => {
            this.order = new _entities_order_entity__WEBPACK_IMPORTED_MODULE_5__["Order"]();
            return true;
        }));
    }
    get loginRequired() {
        return this.token.length == 0 || this.tokenExpiration > new Date();
    }
    login(creds) {
        return this.http
            .post("/Account/CreateToken", creds)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            this.token = data.token;
            this.tokenExpiration = data.expiration;
            //this.currentUser = creds.username;
            return true;
        }));
    }
    resetToken() {
        this.token = "";
    }
};
OrderService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"] }
];
OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], OrderService);



/***/ }),

/***/ "./app/services/product.service.ts":
/*!*****************************************!*\
  !*** ./app/services/product.service.ts ***!
  \*****************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");


//import { map } from "rxjs/operators";
//import { Observable } from "rxjs";

let ProductService = class ProductService {
    constructor(http) {
        this.http = http;
        this.products = [];
        this.selectedCategory = "All Categories";
    }
    loadProducts() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.products = yield this.http.get("/api/products").toPromise();
        });
    }
    findAll() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.loadProducts();
            return this.products;
        });
    }
    //loadProducts(): Observable<boolean> {
    //    console.log("got here")
    //    return this.http.get("/api/products")
    //        .pipe(
    //            map((data: any[]) => {
    //                this.products = data;
    //                return true;
    //            })
    //        );
    //}
    find(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.products[yield this.getSelectedIndex(id)];
        });
    }
    getProductsByCategory(ctg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.search_results = [];
            for (var i = 0; i < this.products.length; i++) {
                if (this.products[i].category == ctg) {
                    this.search_results.push(this.products[i]);
                }
            }
        });
    }
    getSelectedIndex(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            for (var i = 0; i < this.products.length; i++) {
                if (this.products[i].id == id) {
                    return i;
                }
            }
            return -1;
        });
    }
    averageRating(p) {
        if (p.reviews.length) {
            var total = 0;
            for (var i = 0; i < p.reviews.length; i++) {
                total += p.reviews[i].rating;
            }
            return total / p.reviews.length;
        }
        else
            return 0;
    }
    round(n) {
        return Math.floor(n);
    }
};
ProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ProductService);



/***/ }),

/***/ "./environments/environment.ts":
/*!*************************************!*\
  !*** ./environments/environment.ts ***!
  \*************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./main.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Roman Mayerson\source\repos\ElectroShop-Core\ClientApp\main.ts */"./main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);