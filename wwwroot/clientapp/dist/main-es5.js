function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "../node_modules/raw-loader/dist/cjs.js!./app/app.component.html":
  /*!***********************************************************************!*\
    !*** ../node_modules/raw-loader/dist/cjs.js!./app/app.component.html ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n\n<app-header></app-header>\n\n\n\n<router-outlet ></router-outlet>\n\n\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "../node_modules/raw-loader/dist/cjs.js!./app/components/about/about.component.html":
  /*!******************************************************************************************!*\
    !*** ../node_modules/raw-loader/dist/cjs.js!./app/components/about/about.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsAppComponentsAboutAboutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<div class=\"container\">\n\n<div class=\"row\">\n\n    <ol class=\"col-12 breadcrumb\">\n\n      <li class=\"breadcrumb-item\"><a [routerLink]=\"['/index']\">Home</a></li>\n\n      <li class=\"breadcrumb-item active\">About Us</li>\n\n    </ol>\n\n    <div class=\"col-12\">\n\n       <h3>About Us</h3>\n\n       <hr>\n\n    </div>\n\n</div>\n\n\n\n<div class=\"row row-content\">\n\n    <div class=\"col-sm-6 col-md-6\">\n\n        <h2>Our History</h2>\n         <h3>\n        <p>Started in 2014, ElectroShop quickly established itself as a online marketing icon per excellence. With its unique access to the world top electronical devices retailers and top quality of service.</p>\n\n        <p>ElectroShop traces its humble beginnings to <em>MediaBoom</em>, a successful chain started by our CEO, Mr. Peter O'Really,that featured fast shipments worldwide.</p>\n    </h3>\n    </div>\n\n    <div class=\"col-sm\">\n\n       <div class=\"card\">\n\n           <h3 class=\"card-header bg-primary text-white\">Facts At a Glance</h3>\n\n           <div class=\"card-body\">\n\n             <dl class=\"row\">\n\n                <dt class=\"col-6\">Started</dt>\n\n                <dt class=\"col-6\">7 Feb.2014</dt>\n\n                <dt class=\"col-6\">Major Stake Holder</dt>\n\n                <dd class=\"col-6\">ElectroZone Inc.</dd>\n\n                <dt class=\"col-6\">Last Year's Turnover</dt>\n\n                <dd class=\"col-6\">$1,350,375</dd>\n\n                <dt class=\"col-6\">Employees</dt>\n\n                <dd class=\"col-6\">250</dd>    \n\n             </dl>  \n\n           </div>\n\n       </div>\n\n    </div>\n\n</div>\n\n\n\n\n\n</div>";
    /***/
  },

  /***/
  "../node_modules/raw-loader/dist/cjs.js!./app/components/cart/cart.component.html":
  /*!****************************************************************************************!*\
    !*** ../node_modules/raw-loader/dist/cjs.js!./app/components/cart/cart.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsAppComponentsCartCartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"cart-section spad\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-lg-8\">\n\t\t\t\t\t<div class=\"cart-table\">\n\t\t\t\t\t\t<h3>Your Cart</h3>\n\t\t\t\t\t\t<div class=\"cart-table-warp\">\n\t\t\t\t\t\t\t<table>\n\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th class=\"product-th\">Product</th>\n\t\t\t\t\t\t\t\t\t<th class=\"quy-th\">Quantity</th>\n                  <th class=\"total-th\">Price</th>\n                  <th class=\"total-th\"></th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let item of itemService.items\">\n\t\t\t\t\t\t\t\t\t<td class=\"product-col\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"./clientapp/assets/images/{{item.product.photo}}\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"pc-title\">\n\t\t\t\t\t\t\t\t\t\t\t<h4>{{item.product.name}}</h4>\n\t\t\t\t\t\t\t\t\t\t\t<p>${{item.product.price}}</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</td>\n                  <td><h4>{{item.quantity}}</h4></td>\n\t\t\t\t\t\t\t\t\n                  <td class=\"total-col\"><h4>${{item.product.price}}</h4></td>\n                  <td align=\"center\">\n                      <a class=\"btn btn-warning\" (click)=\"itemService.remove(item.product.id)\">Remove</a>\n                  </td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"total-cost\">\n\t\t\t\t\t\t\t<h6>Total <span>${{itemService.total}}</span></h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-4 card-right\">\n\t\t\t\t\t<form class=\"promo-code-form\">\n\t\t\t\t\t\t<input type=\"text\" placeholder=\"Enter promo code\">\n\t\t\t\t\t\t<button>Submit</button>\n\t\t\t\t\t</form>\n\t\t\t\t\t<button (click)=\"onOrderCheckout()\" class=\"site-btn\">Proceed to checkout</button>\n\t\t\t\t\t<a href=\"\" class=\"site-btn sb-dark\">Continue shopping</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\n<!-- <table border=\"1\">\n  <tr>\n    <th>Option</th>\n    <th>Id</th>\n    <th>Name</th>\n    <th>Photo</th>\n    <th>Price</th>\n    <th>Quantity</th>\n    <th>Sub Total</th>\n  </tr>\n\n  <tr *ngFor=\"let item of itemService.items\">\n    <td align=\"center\">\n      <a (click)=\"itemService.remove(item.product.id)\">Remove</a>\n    </td>\n    <td>{{item.product.id}}</td>\n    <td>{{item.product.name}}</td>\n    <td>\n        <img src=\"../../assets/img/{{item.product.photo}}\">\n    </td>\n    <td>{{item.product.price}}</td>\n    <td>{{item.quantity}}</td>\n    <td>{{item.product.price * item.quantity}}</td>\n  </tr>\n\n  <tr>\n    <td colspan=\"6\" allign=\"right\">Total</td>\n    <td>{{itemService.total}}</td>\n  </tr>\n  \n</table> -->";
    /***/
  },

  /***/
  "../node_modules/raw-loader/dist/cjs.js!./app/components/checkout/checkout.component.html":
  /*!************************************************************************************************!*\
    !*** ../node_modules/raw-loader/dist/cjs.js!./app/components/checkout/checkout.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsAppComponentsCheckoutCheckoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n    <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">{{ errorMessage }}</div>\r\n    \r\n    <div class=\"col-md-3\"></div>\r\n    <div class=\"col-md-6\">\r\n        <h3>Confirm Your Order</h3>\r\n        <table class=\"table table-bordered table-hover\">\r\n            <tr *ngFor=\"let item of itemService.items\">\r\n                <td><img src=\"./clientapp/assets/images/{{item.product.photo}}\" alt=\"o.productTitle\" class=\"img-thumbnail checkout-thumb\" /></td>\r\n                <td>{{ item.product.title }}</td>\r\n                <td>{{ item.product.category }}</td>\r\n                <td>{{ item.quantity }}</td>\r\n                <td>{{ item.product.price|currency:'USD':true }}</td>\r\n                <td>{{ (item.product.price * item.quantity)|currency:'USD':true }}</td>\r\n            </tr>\r\n        </table>\r\n        <div class=\"col-md-4 col-md-offset-8 text-right\">\r\n            <table class=\"table table-condensed\">\r\n                <tr>\r\n                    <td class=\"text-right\">Subtotal</td>\r\n                    <td class=\"text-right\">{{ itemService.subtotal()|currency:'USD':true }}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-right\">Shipping</td>\r\n                    <td class=\"text-right\">$ 0.00</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class=\"text-right\">Total:</td>\r\n                    <td class=\"text-right\">{{ itemService.subtotal()|currency:'USD':true }}</td>\r\n                </tr>\r\n            </table>\r\n            <button class=\"btn btn-success\" (click)=\"onCheckout()\">Complete Purchase</button>\r\n            <a routerLink=\"/shop\" class=\"btn btn-info\">Cancel</a>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-3\"></div>\r\n</div>\n";
    /***/
  },

  /***/
  "../node_modules/raw-loader/dist/cjs.js!./app/components/contact/contact.component.html":
  /*!**********************************************************************************************!*\
    !*** ../node_modules/raw-loader/dist/cjs.js!./app/components/contact/contact.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsAppComponentsContactContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"container contact\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-3\">\n\t\t\t<div class=\"contact-info\">\n                <h1><i class=\"fa fa-envelope-o\"></i></h1>\n\t\t\t\t<h2>Contact Us</h2>\n\t\t\t\t<h4>We would love to hear from you !</h4>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md-9\"> \n         <form class=\"contact-form\"  #contactForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" >\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t  <label class=\"control-label col-sm-2\" for=\"fname\">First Name:</label>\n\t\t\t\t  <div class=\"col-sm-10\">          \n                    <input type=\"text\" class=\"form-control\" id=\"fname\" name=\"fname\" placeholder=\"Enter First Name\" required maxlength=\"30\" minlength=\"2\" [(ngModel)]=\"contact_form.fname\" #fname=\"ngModel\">\n                  </div>\n                </div>\n                 \n            <div *ngIf=\"fname.invalid && (fname.dirty || fname.touched)\" class=\"alert alert-danger\"><div *ngIf=\"fname.errors.required\">\n                  First Name is required.\n               </div>\n               <div *ngIf=\"fname.errors.minlength\">\n                  First Name must be at least 2 characters long.\n              </div>\n              <div *ngIf=\"fname.errors.maxlength\">\n                  First Name cannot be more than 30 characters long.\n              </div>\n            </div>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t  <label class=\"control-label col-sm-2\" for=\"lname\">Last Name:</label>\n\t\t\t\t  <div class=\"col-sm-10\">          \n                        <input type=\"text\" class=\"form-control\" id=\"lname\" name=\"lname\" placeholder=\"Enter Last Name\" required maxlength=\"30\" minlength=\"2\" [(ngModel)]=\"contact_form.lname\" #lname=\"ngModel\">\n\t\t\t\t  </div>\n                </div>\n                \n                <div *ngIf=\"lname.invalid && (lname.dirty || lname.touched)\" class=\"alert alert-danger\"><div *ngIf=\"lname.errors.required\">\n                        Last Name is required.\n                     </div>\n                     <div *ngIf=\"lname.errors.minlength\">\n                        Last Name must be at least 2 characters long.\n                    </div>\n                    <div *ngIf=\"lname.errors.maxlength\">\n                        Last Name cannot be more than 30 characters long.\n                    </div>\n                  </div>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t  <label class=\"control-label col-sm-2\" for=\"email\">Email:</label>\n\t\t\t\t  <div class=\"col-sm-10\">           \n                  <input type=\"email\" id=\"email\" placeholder=\"Enter Your Email\" class=\"form-control\" name=\"email\"  required pattern=\"[^ @]*@[^ @]*\" emailDomain [(ngModel)]=\"contact_form.email\" #email=\"ngModel\">\n                  </div>\n                </div>\n                \n                <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert alert-danger\"><div *ngIf=\"email.errors.required\">\n                          Email is required.\n                       </div>\n                  <div *ngIf=\"email.errors.pattern\">\n                      The email address must contain at least the @ character.\n                  </div>\n                  \n                </div>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t  <label class=\"control-label col-sm-2\" for=\"comment\">Comment:</label>\n\t\t\t\t  <div class=\"col-sm-10\">\n\t\t\t\t\t<textarea class=\"form-control\" rows=\"5\" id=\"comment\" name=\"comment\"  required maxlength=\"30\" minlength=\"10\" [(ngModel)]=\"contact_form.comment\" #comment=\"ngModel\"></textarea>\n\t\t\t\t  </div>\n                </div>\n                \n                <div *ngIf=\"comment.invalid && (comment.dirty || comment.touched)\" class=\"alert alert-danger\"><div *ngIf=\"comment.errors.required\">\n                        Please Leave Some Comment.\n                     </div>\n                     <div *ngIf=\"comment.errors.minlength\">\n                       Comment must be at least 10 characters long.\n                    </div>\n                    <div *ngIf=\"comment.errors.maxlength\">\n                       Comment cannot be more than 30 characters long.\n                    </div>\n                  </div>\n\n\t\t\t\t<div class=\"form-group\">        \n\t\t\t\t  <div class=\"col-sm-offset-2 col-sm-10\">\n                        <button  type=\"submit\"  [disabled]=\"contactForm.invalid\">\n                           Submit\n                        </button>\n\t\t\t\t  </div>\n                </div>\n\n\t\t\t</form>\n\t\t</div>\n    </div>\n    <div  >\n            <hr>\n    </div>\n\n</div>\n";
    /***/
  },

  /***/
  "../node_modules/raw-loader/dist/cjs.js!./app/components/footer/footer.component.html":
  /*!********************************************************************************************!*\
    !*** ../node_modules/raw-loader/dist/cjs.js!./app/components/footer/footer.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsAppComponentsFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\t\t<!-- FOOTER -->\n\t\t<footer id=\"footer\" >\n                <!-- top footer -->\n                <div class=\"section\">\n                    <!-- container -->\n                    <div class=\"container\">\n                        <!-- row -->\n                        <div class=\"row\">\n                            <div class=\"col-md-3 col-xs-6\">\n                                <div class=\"footer\">\n                                    <h3 class=\"footer-title\">About Us</h3>\n                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>\n                                    <ul class=\"footer-links\">\n                                        <li><a href=\"#\"><i class=\"fa fa-map-marker\"></i>Ramat Gan</a></li>\n                                        <li><a href=\"#\"><i class=\"fa fa-phone\"></i>+021-95-51-84</a></li>\n                                        <li><a href=\"#\"><i class=\"fa fa-envelope-o\"></i>romanmayers@yahoo.com</a></li>\n                                    </ul>\n                                </div>\n                            </div>\n    \n                            <div class=\"col-md-3 col-xs-6\">\n                                <div class=\"footer\">\n                                    <h3 class=\"footer-title\">Categories</h3>\n                                    <ul class=\"footer-links\">\n                                        <li><a href=\"#\">Hot deals</a></li>\n                                        <li><a href=\"#\">Laptops</a></li>\n                                        <li><a href=\"#\">Smartphones</a></li>\n                                        <li><a href=\"#\">Cameras</a></li>\n                                        <li><a href=\"#\">Accessories</a></li>\n                                    </ul>\n                                </div>\n                            </div>\n    \n                            <div class=\"clearfix visible-xs\"></div>\n                            \n                                       \n                            <div class=\"col-md-3 col-xs-6\">\n                                <div class=\"footer\">\n                                    <h3 class=\"footer-title\">Information</h3>\n                                    <ul class=\"footer-links\">\n                                        <li><a [routerLink]=\"['/about']\"><i class=\"fa fa-info\"></i>About Us</a></li>\n                                        <li><a [routerLink]=\"['/contact']\"><i class=\"fa fa-address-book\"></i>Contact Us</a></li>\n                                        <li><a href=\"#\">Privacy Policy</a></li>\n                                        <li><a href=\"#\">Orders and Returns</a></li>\n                                        <li><a href=\"#\">Terms & Conditions</a></li>\n                                    </ul>\n                                </div>\n                            </div>\n    \n                            <div class=\"col-md-3 col-xs-6\">\n                                <div class=\"footer\">\n                                    <h3 class=\"footer-title\">Service</h3>\n                                    <ul class=\"footer-links\">\n                                        <li><a [routerLink]=\"['/index']\">My Account</a></li>\n                                        <li><a [routerLink]=\"['/cart']\"><i class=\"fa fa-shopping-cart\"></i>View Cart</a></li>\n                                        <li><a href=\"#\">Wishlist</a></li>\n                                        <li><a href=\"#\">Track My Order</a></li>\n                                        <li><a href=\"#\">Help</a></li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- /row -->\n                    </div>\n                    <!-- /container -->\n                </div>\n                <!-- /top footer -->\n    \n                <!-- bottom footer -->\n                <div id=\"bottom-footer\" class=\"section\">\n                    <div class=\"container\">\n                        <!-- row -->\n                        <div class=\"row\">\n                            <div class=\"col-md-12 text-center\">\n                                <ul class=\"footer-payments\">\n                                    <li><a href=\"#\"><i class=\"fa fa-cc-visa\"></i></a></li>\n                                    <li><a href=\"#\"><i class=\"fa fa-credit-card\"></i></a></li>\n                                    <li><a href=\"#\"><i class=\"fa fa-cc-paypal\"></i></a></li>\n                                    <li><a href=\"#\"><i class=\"fa fa-cc-mastercard\"></i></a></li>\n                                    <li><a href=\"#\"><i class=\"fa fa-cc-discover\"></i></a></li>\n                                    <li><a href=\"#\"><i class=\"fa fa-cc-amex\"></i></a></li>\n                                </ul>\n                                <span class=\"copyright\">\n                                    <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->\n                                    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i> by <a href=\"https://colorlib.com\" target=\"_blank\">Colorlib</a> | WEB Programming by Roman Mayerson\n                                <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->\n                                </span>\n                            </div>\n                        </div>\n                            <!-- /row -->\n                    </div>\n                    <!-- /container -->\n                </div>\n                <!-- /bottom footer -->\n            </footer>\n            <!-- /FOOTER -->\n";
    /***/
  },

  /***/
  "../node_modules/raw-loader/dist/cjs.js!./app/components/header/header.component.html":
  /*!********************************************************************************************!*\
    !*** ../node_modules/raw-loader/dist/cjs.js!./app/components/header/header.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsAppComponentsHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\t\t<!-- HEADER -->\n\t\t<header>\n                <!-- TOP HEADER -->\n                <div id=\"top-header\">\n                    <div class=\"container \">\n                        <ul class=\"header-links pull-left\">\n                            <li><a href=\"#\"><i class=\"fa fa-phone\"></i> +021-95-51-84</a></li>\n                            <li><a href=\"#\"><i class=\"fa fa-envelope-o\"></i> romanmayers@yahoo.com</a></li>\n                            <li><a href=\"#\"><i class=\"fa fa-map-marker\"></i> Ramat Gan</a></li>\n                        </ul>\n                        <ul class=\"header-links  pull-right\">\r\n                            <li class=\"nav-link\"><a href=\"#\"><i class=\"fa fa-dollar\"></i>{{ itemService.subtotal() | currency:'USD':true }}</a></li>\r\n                            <li *ngIf=\"!itemService.loggedIn\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/login']\"><i class=\"fa fa-sign-in\"></i>Login</a></li>\r\n                            <li *ngIf=\"itemService.loggedIn\"><button (click)=\"logOut()\">Logout</button>\r\n                            <li *ngIf=\"itemService.loggedIn\" class=\"nav-link\"><a href=\"#\"><i class=\"fa fa-user-o\"></i> Logged as {{itemService.username}}</a></li>\r\n                            <li class=\"nav-link\"><a [routerLink]=\"['/index']\"><i class=\"fa fa-home\"></i>Home</a></li>\r\n                            <li class=\"nav-link\"><a [routerLink]=\"['/orders']\"><i class=\"fa fa-list\"></i>Orders</a></li>\r\n                            <li class=\"nav-link\"><a [routerLink]=\"['/about']\"><i class=\"fa fa-info\"></i>About</a></li>\r\n                            <li class=\"nav-link\"><a [routerLink]=\"['/contact']\"><i class=\"fa fa-address-book\"></i>Contact</a></li>\r\n                        </ul>\n                    </div>\n                </div>\n                <!-- /TOP HEADER -->\n    \n                <!-- MAIN HEADER -->\n                <div id=\"header\">\n                    <!-- container -->\n                    <div class=\"container\">\n                        <!-- row -->\n                        <div class=\"row\">\n                            <!-- LOGO -->\n                            <div class=\"col-md-3\">\n                                <div class=\"header-logo\">\n                                    <a [routerLink]=\"['/index']\" class=\"logo\">\n                                        <img src=\"/clientapp/assets/images/logo.png\" alt=\"\">\n                                    </a>\n                                </div>\n                            </div>\n                            <!-- /LOGO -->\n    \n                            <!-- SEARCH BAR -->\n                            <div class=\"col-md-6\">\n                                <div class=\"header-search\">\n                                    <form id=\"filter\">\n                                        <select class=\"input-select\" name=\"category\" [(ngModel)]=\"productService.selectedCategory\">\n                                            <option value=\"All Categories\">All Categories</option>\n                                            <option value=\"laptop\">laptop</option>\n                                            <option value=\"tablet\">tablet</option>\n                                            <option value=\"smartphone\">smartphone</option>\n                                            <option value=\"camera\">camera</option>\n                                            <option value=\"headphones\">headphones</option>\n                                        </select>\n                                        <input class=\"input\" name='search' type=\"text\" [(ngModel)]=\"productService.term\" placeholder=\"Search here\">\n                                        <button class=\"search-btn\" [routerLink]=\"['/']\">Search</button>\n                                    </form>\n                                </div>\n                            </div>\n                            <!-- /SEARCH BAR -->\n    \n                            <!-- ACCOUNT -->\n                            <div class=\"col-md-3 clearfix\">\n                                <div class=\"header-ctn\">\n                                    <!-- Wishlist -->\n                                    <!-- <div>\n                                        <a href=\"#\">\n                                            <i class=\"fa fa-heart-o\"></i>\n                                            <span>Your Wishlist</span>\n                                            <div class=\"qty\">2</div>\n                                        </a>\n                                    </div> -->\n                                    <!-- /Wishlist -->\n    \n                                    <!-- Cart -->\n    \n                                    <div class=\"dropdown show \">\n                                            <a class=\"btn dropdown-toggle\" data-toggle=\"dropdown\"aria-haspopup=\"true\" aria-expanded=\"false\">\n                             <i class=\"fa fa-shopping-cart\" style=\"font-size:3em;color:white;\"></i>\n                                                <span  style=\"color:white;\">Your Cart</span>\n                                                <div class=\"qty\">{{itemService.items.length}}</div>\n                                            </a>\n                                            <div class=\"cart-dropdown\">\n                                                <div  class=\"cart-list\">\n                             <div *ngFor=\"let item of itemService.items\"> \n                                                    <div class=\"product-widget\">\n                                                        <div class=\"product-img\">\n                                                            <img src=\"/clientapp/assets/images/{{item.product.photo}}\" alt=\"\">\n                                                        </div>\n                                                        <div class=\"product-body\">\n                                                            <h3 class=\"product-name\"><a href=\"#\">{{item.product.title}}</a></h3>\n                                                            <h4 class=\"product-price\"><span class=\"qty\">{{ item.quantity}}x</span>${{item.product.price * item.quantity}}</h4>\n                                                        </div>\n                                <button class=\"dropdown-item\"  (click)=\"itemService.remove(item.product.id)\" class=\"delete\"><i class=\"fa fa-close\"></i></button>\n                              </div>\n                              </div>\n                              \n                                                </div>\n                                                <div class=\"cart-summary\">\n                                                    <small> Item(s) selected</small>\n                                                    <h5>SUBTOTAL: {{itemService.total}}</h5>\n                                                </div>\n                                                <div class=\"cart-btns\">\n                                                    <a class=\"dropdown-item\" [routerLink]=\"['/cart']\">View Cart</a>\n                                                    <a href=\"#\">Checkout  <i class=\"fa fa-arrow-circle-right\"></i></a>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    <!-- /Cart -->\n    \n                                    <!-- Menu Toogle -->\n                                    <!-- <div class=\"menu-toggle\">\n                                        <a href=\"#\">\n                                            <i class=\"fa fa-bars\"></i>\n                                            <span>Menu</span>\n                                        </a>\n                                    </div> -->\n                                    <!-- /Menu Toogle -->\n                                </div>\n                            </div>\n                            <!-- /ACCOUNT -->\n                        </div>\n                        <!-- row -->\n                    </div>\n                    <!-- container -->\n                </div>\n                <!-- /MAIN HEADER -->\n            <!-- /HEADER -->\n                ";
    /***/
  },

  /***/
  "../node_modules/raw-loader/dist/cjs.js!./app/components/index/index.component.html":
  /*!******************************************************************************************!*\
    !*** ../node_modules/raw-loader/dist/cjs.js!./app/components/index/index.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsAppComponentsIndexIndexComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<!-- Products tab & slick -->\n<div class=\"container\">\n  <div class=\"row\"  >\n    <div class=\"col-md-2 col-sm-3\" *ngFor=\"let product of products |filter:productService.term:productService.selectedCategory| paginate: config\"  >\n      <!-- tab -->\n      <div  id=\"tab1\" class=\"tab-pane active\">\n        <div  class=\"products-slick\" data-nav=\"#slick-nav-1\">\n          <!-- product -->\n          <div class=\"product \">\n            <div class=\"product-img\" [routerLink]=\"['/product',{id:product.id}]\">\n              <img src=\"/clientapp/assets/images/{{product.photo}}\" alt=\"\" >\n              <div class=\"product-label\">\n                <span class=\"sale\">-30%</span>\n                <span class=\"new\">NEW</span>\n              </div>\n            </div>\n            <div class=\"product-body\">\n              <p class=\"product-category\">Category:{{product.category}}</p>\n              <h3 class=\"product-name\"><a [routerLink]=\"['/product',{id:product.id}]\">{{product.title}}</a></h3>\n              <h4 class=\"product-price\">{{product.price}}$ <del class=\"product-old-price\">{{productService.round(product.price*100/70)}}$</del></h4>\n\n              <span class=\"product-rating\" *ngFor=\"let i of [].constructor(productService.round(productService.averageRating(product)))\">\n                  <i class=\"fa fa-star\"></i>\n              </span>\n\n              <div class=\"product-btns\">\n                <button class=\"add-to-wishlist\"><i class=\"fa fa-heart-o\"></i><span class=\"tooltipp\">add to wishlist</span></button>\n                <button class=\"add-to-compare\"><i class=\"fa fa-exchange\"></i><span class=\"tooltipp\">add to compare</span></button>\n                <button class=\"quick-view\"><i class=\"fa fa-eye\"></i><span class=\"tooltipp\">quick view</span></button>\n              </div>\n            </div>\n            <div class=\"add-to-cart\">\n              <button (click)=\"itemService.add(product.id,1)\" class=\"add-to-cart-btn\"><i class=\"fa fa-shopping-cart\"></i> add to cart</button>\n            </div>\n          </div>\n          <!-- /product -->\n        </div>\n        <div id=\"slick-nav-1\" class=\"products-slick-nav\"></div>\n      </div>\n      <!-- /tab -->\n    </div>\n  </div>\n  <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n</div>\n\n<!-- Products tab & slick -->\n\n\n\n\n\n\n\n<!-- <h3>Product List</h3>\n<table border=\"1\">\n  <tr>\n    <th>Id</th>\n    <th>Name</th>\n    <th>Price</th>\n    <th>Photo</th>\n    <th>Buy</th>\n  </tr>\n\n  <tr *ngFor=\"let product of products\">\n    <td>{{product.id}}</td>\n    <td>{{product.name}}</td>\n    <td>{{product.price}}</td>\n    <td>\n        <img src=\"../../assets/img/{{product.photo}}\">\n    </td>\n    <td>\n        \n        <button (click)=\"itemService.add(product.id)\">Buy Now</button>\n    </td>\n  </tr>\n\n</table> -->\n";
    /***/
  },

  /***/
  "../node_modules/raw-loader/dist/cjs.js!./app/components/login/login.component.html":
  /*!******************************************************************************************!*\
    !*** ../node_modules/raw-loader/dist/cjs.js!./app/components/login/login.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsAppComponentsLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n    <div class=\"col-md-4 col-md-offset-4\">\r\n        <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">{{ errorMessage }}</div>\r\n        <form (submit)=\"onLogin()\" #theForm=\"ngForm\" novalidate>\r\n            <div class=\"form-group\">\r\n                <label for=\"username\">Username</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"creds.username\" #username=\"ngModel\" required />\r\n                <div class=\"text-danger\" *ngIf=\"username.touched && username.invalid && username.errors.required\">Username is required</div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"password\">Password</label>\r\n                <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"creds.password\" #password=\"ngModel\" required />\r\n                <div class=\"text-danger\" *ngIf=\"password.touched && password.invalid && password.errors.required\">Password is required</div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"submit\" class=\"btn btn-success\" value=\"Login\" [disabled]=\"theForm.invalid\" />\r\n                <a routerLink=\"/\" class=\"btn btn-default\">Cancel</a>\r\n            </div>\r\n        </form>\r\n        <p class=\"loginhere\">\r\n            Don't  already Have an Account ?\r\n            <a routerLink=\"/signup\" class=\"loginhere-link\">Sign Up here</a>\r\n        </p>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "../node_modules/raw-loader/dist/cjs.js!./app/components/orders/orders.component.html":
  /*!********************************************************************************************!*\
    !*** ../node_modules/raw-loader/dist/cjs.js!./app/components/orders/orders.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsAppComponentsOrdersOrdersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n    <div class=\"col-md-3\"></div>\r\n    <div class=\"col-md-6\">\r\n        <h1>Orders History for User:\"{{itemService.username}}\"</h1>\r\n        <hr />\r\n    </div>\r\n    <div class=\"col-md-3\"></div>\r\n</div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-3\"></div>\r\n        <div class=\"col-md-6\">\r\n            <div *ngFor=\"let order of orders\">\r\n                <h4 class=\"product-category\">Order Date:{{order.orderDate|date:'short'}}</h4>\r\n                <h4 class=\"product-category\">Order Number:{{order.orderNumber}}</h4>\r\n                <table class=\"table table-bordered table-hover\">\r\n                    <tr *ngFor=\"let item of order.items\">\r\n                        <td><img src=\"./clientapp/assets/images/{{item.product.photo}}\" alt=\"o.productTitle\" class=\"img-thumbnail checkout-thumb\" /></td>\r\n                        <td>{{ item.product.title }}</td>\r\n                        <td>{{ item.product.category }}</td>\r\n                        <td>{{ item.quantity }}</td>\r\n                        <td>{{ item.product.price|currency:'USD':true }}</td>\r\n                        <td>{{ (item.product.price * item.quantity)|currency:'USD':true }}</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th class=\"text-right\">Subtotal</th>\r\n                        <th class=\"text-right\">{{ subtotal(order)|currency:'USD':true }}</th>\r\n                    </tr>\r\n                </table>\r\n                <hr />\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-3\"></div>\r\n    </div>\r\n";
    /***/
  },

  /***/
  "../node_modules/raw-loader/dist/cjs.js!./app/components/product/product.component.html":
  /*!**********************************************************************************************!*\
    !*** ../node_modules/raw-loader/dist/cjs.js!./app/components/product/product.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsAppComponentsProductProductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- SECTION -->\n<div class=\"section\">\n        <!-- container -->\n        <div class=\"container\">\n            <!-- row -->\n            <div class=\"row\">\n                <!-- Product main img -->\n                <div class=\"col-md-5 col-md-push-2\">\n                    <div id=\"product-main-img\">\n                        <!-- <div class=\"product-preview\">\n                            <img src=\"./images/product01.png\" alt=\"\">\n                        </div>\n\n                        <div class=\"product-preview\">\n                            <img src=\"./images/product03.png\" alt=\"\">\n                        </div> -->\n\n                        <div class=\"product-preview\">\n                            <img src=\"/clientapp/assets/images/{{selected_product.photo}}\" alt=\"\">\n                        </div>\n\n                        <!-- <div class=\"product-preview\">\n                            <img src=\"./images/product08.png\" alt=\"\">\n                        </div> -->\n                    </div>\n                </div>\n                <!-- /Product main img -->\n\n                <!-- Product thumb imgs -->\n                <div class=\"col-md-2  col-md-pull-5\">\n                    <!--<div id=\"product-imgs\">\n                        <div class=\"product-preview\">\n                            <img src=\"./assets/images/{{selected_product.photo}}\" alt=\"\">\n                        </div>\n\n                        <div class=\"product-preview\">\n                                <img src=\"./assets/images/{{selected_product.photo}}\" alt=\"\">\n                        </div>\n\n                        <div class=\"product-preview\">\n                                <img src=\"./assets/images/{{selected_product.photo}}\" alt=\"\">\n                        </div>\n                    </div>-->\n                </div>\n                <!-- /Product thumb imgs -->\n\n                <!-- Product details -->\n                <div class=\"col-md-5\">\n                    <div class=\"product-details\">\n                        <h2 class=\"product-name\">{{selected_product.title}}</h2>\n                        <div>\n\n                            <div class=\"product-rating\" *ngFor=\"let i of [].constructor(productService.round(productService.averageRating(selected_product)))\">\n                               <i class=\"fa fa-star\"></i>\n                            </div>\n                            <a class=\"review-link\" target=\"_self\" href=\"product;id={{id}}#tab1\">{{selected_product.reviews.length}} Review(s) | Add your review</a>\n                        </div>\n                        <div>\n                            <h3 class=\"product-price\">{{selected_product.price}} <del class=\"product-old-price\">{{productService.round(selected_product.price*100/70)}}$</del></h3>\n                            <span class=\"product-available\">In Stock</span>\n                        </div>\n                        <p>{{selected_product.description}}</p>\n\n                        <!-- <div class=\"product-options\">\n                            <label>\n                                Size\n                                <select class=\"input-select\">\n                                    <option value=\"0\">X</option>\n                                </select>\n                            </label>\n                            <label>\n                                Color\n                                <select class=\"input-select\">\n                                    <option value=\"0\">Red</option>\n                                </select>\n                            </label>\n                        </div> -->\n\n                        <div class=\"add-to-cart\">\n                            <div class=\"qty-label\">\n                                Qty\n                                <div class=\"input-number\">\n                                    <input type=\"number\" [(ngModel)]=\"prodQuantity\">\n                                    <span (click)=\"IncProdQuantity()\" class=\"qty-up\">+</span>\n                                    <span (click)=\"DecProdQuantity()\"class=\"qty-down\">-</span>\n                                </div>\n                            </div>\n                            <button (click)=\"itemService.add(selected_product.id,prodQuantity)\" class=\"add-to-cart-btn\"><i class=\"fa fa-shopping-cart\"></i> add to cart</button>\n                        </div>\n\n                        <ul class=\"product-btns\">\n                            <li><a href=\"#\"><i class=\"fa fa-heart-o\"></i> add to wishlist</a></li>\n                            <li><a href=\"#\"><i class=\"fa fa-exchange\"></i> add to compare</a></li>\n                        </ul>\n\n                        <ul class=\"product-links\">\n                            <li>Category:</li>\n                            <li><a href=\"#\">{{selected_product.category}}</a></li>\n                            <!-- <li><a href=\"#\">Accessories</a></li> -->\n                        </ul>\n\n                        <ul class=\"product-links\">\n                            <li>Share:</li>\n                            <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n                            <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n                            <li><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\n                            <li><a href=\"#\"><i class=\"fa fa-envelope\"></i></a></li>\n                        </ul>\n\n                    </div>\n                </div>\n                <!-- /Product details -->\n\n                <!-- Product tab -->\n                <div class=\"col-md-12\">\n                    <div id=\"product-tab\">\n                        <!-- product tab nav -->\n                        <ul class=\"tab-nav\">\n                            <li class=\"active\"><a data-toggle=\"tab\" href=\"#tab1\">Description</a></li>\n                            <li><a data-toggle=\"tab\" href=\"#tab2\">Details</a></li>\n                            <li><a data-toggle=\"tab\" href=\"#tab3\">Reviews ({{selected_product.reviews.length}})</a></li>\n                        </ul>\n                        <!-- /product tab nav -->\n                    </div>\n                        <!-- product tab content -->\n                        <div class=\"tab-content\">\n                            <!-- tab1  -->\n                            <div id=\"tab1\" class=\"tab-pane  active\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-12\">\n                                        <p>{{selected_product.description}}</p>\n                                    </div>\n                                </div>\n                            </div>\n                            <!-- /tab1  -->\n\n                            <!-- tab2  -->\n                            <div id=\"tab2\" class=\"tab-pane \">\n                                <div class=\"row\">\n                                    <div class=\"col-md-12\">\n                                        <p>Lorem ipsum dolor sit amet,.</p>\n                                    </div>\n                                </div>\n                            </div>\n                            <!-- /tab2  -->\n\n                            \n<!-- tab3  -->\n<div id=\"tab3\" class=\"tab-pane\">\n        <div class=\"row\">\n            <!-- Rating -->\n            <div class=\"col-md-3\">\n                <div id=\"rating\">\n                    <div class=\"rating-avg\">\n                        <span>{{productService.round(productService.averageRating(selected_product))}}</span>\n                        <div class=\"rating-stars\" *ngFor=\"let i of [].constructor(productService.round(productService.averageRating(selected_product)))\">\n                            <i class=\"fa fa-star\"></i>\n\n                        </div>\n                    </div>\n                    <ul class=\"rating\" *ngFor=\"let review of selected_product.reviews\">\n                        <li>\n                                <div class=\"rating-stars\" *ngFor=\"let i of [].constructor(review.rating)\">\n                                <i class=\"fa fa-star\"></i>\n                            </div>\n                            <div class=\"rating-progress\">\n                                <div [style.width.%]=\"review.rating*20\"></div>                             \n                            </div>\n                            <span class=\"sum\">{{review.rating}}</span>\n                        </li>\n                       \n                    </ul>\n                </div>\n            </div>\n            <!-- /Rating -->\n\n            <!-- Reviews -->\n            <div class=\"col-md-6\" >\n                <div id=\"reviews\">\n                    <ul class=\"reviews\" *ngFor=\"let review of selected_product.reviews\">\n                        <li>\n                            <div class=\"review-heading\">\n                                <h5 class=\"name\">{{review.reviewerName}}</h5>\n                                <p class=\"date\">{{review.date}}</p>\n                                \n                                <span class=\"rating-stars\" *ngFor=\"let i of [].constructor(review.rating)\">\n                                    <i class=\"fa fa-star\"></i>\n                                </span>\n\n                            </div>\n                            <div class=\"review-body\">\n                                <p>{{review.content}}</p>\n                            </div>\n                        </li>\n                        \n                    </ul>\n\n                                <!-- <div class=\"rating-stars\" *ngFor=\"let review of selected_product.reviews.rating\">\n                                    <i class=\"fa fa-star-o empty\"></i>\n                                </div> -->\n\n                    <!-- <ul class=\"reviews-pagination\">\n                        <li class=\"active\">1</li>\n                        <li><a href=\"#\">2</a></li>\n                        <li><a href=\"#\">3</a></li>\n                        <li><a href=\"#\">4</a></li>\n                        <li><a href=\"#\"><i class=\"fa fa-angle-right\"></i></a></li>\n                    </ul> -->\n                </div>\n            </div>\n            <!-- /Reviews -->\n\n            <!-- Review Form -->\n            <div class=\"col-md-3\">\n                <div id=\"review-form\">\n                    <form class=\"review-form\"  [formGroup]=\"reviewForm\" (ngSubmit)=\"submitReview()\">\r\n                        <div class=\"form-group\">\r\n                            <input class=\"form-control\" type=\"text\" placeholder=\"Your Name\" formControlName=\"reviewer_name\" required>\r\n                            <div *ngIf=\"f.reviewer_name.errors\" class=\"text-danger\">\r\n                                <div *ngIf=\"f.reviewer_name.errors.required\">Reviewer is required</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <input class=\"form-control\" type=\"email\" placeholder=\"Your Email\" formControlName=\"email\" required>\r\n                            <div *ngIf=\"f.email.errors\" class=\"text-danger\">\r\n                                <div *ngIf=\"f.email.errors.required\">Email is required</div>\r\n                                <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <textarea class=\"form-control\" placeholder=\"Your Review\" formControlName=\"content\" required></textarea>\r\n                            <div *ngIf=\"f.content.errors\" class=\"text-danger\">\r\n                                <div *ngIf=\" f.content.errors.required\">Some Content is required for Review</div>\r\n                                <div *ngIf=\"f.content.errors.minlength\">Min Length must be 5 characters</div>\r\n                            </div>\r\n                        </div>\r\n\r\n                            <div class=\"form-group input-rating\">\r\n                                <span>Your Rating: </span>\r\n                                <div class=\"stars\">\r\n                                    <input id=\"star5\" name=\"rating\" value=\"5\" type=\"radio\" formControlName=\"rating\"><label for=\"star5\"></label>\r\n                                    <input id=\"star4\" name=\"rating\" value=\"4\" type=\"radio\" formControlName=\"rating\"><label for=\"star4\"></label>\r\n                                    <input id=\"star3\" name=\"rating\" value=\"3\" type=\"radio\" formControlName=\"rating\"><label for=\"star3\"></label>\r\n                                    <input id=\"star2\" name=\"rating\" value=\"2\" type=\"radio\" formControlName=\"rating\"><label for=\"star2\"></label>\r\n                                    <input id=\"star1\" name=\"rating\" value=\"1\" type=\"radio\" formControlName=\"rating\"><label for=\"star1\"></label>\r\n                                    <div *ngIf=\"f.rating.errors\" class=\"text-danger\">\r\n                                        <div *ngIf=\"f.rating.errors.required\">Please Rate!</div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <button class=\"primary-btn\" >Submit</button>\r\n                            </div>\r\n</form>\n                </div>\n            </div>\n            <!-- /Review Form -->\n        </div>\n    </div>\n    <!-- /tab3  -->\n                       </div>\n                   \n                 </div>\n\n<h2>Products you might be interested</h2>\n\n<div class=\"col-md-2 col-sm-3\" *ngFor=\"let product of productService.search_results\"  >\n        <!-- tab -->\n        <div  id=\"tab1_\" class=\"tab-pane active\">\n          <div  class=\"products-slick\" data-nav=\"#slick-nav-1\">\n            <!-- product -->\n            <div class=\"product \">\n              <div class=\"product-img\" [routerLink]=\"['/product',{id:product.id}]\">\n                <img src=\"/clientapp/assets/images/{{product.photo}}\" alt=\"\" >\n                <div class=\"product-label\">\n                  <span class=\"sale\">-30%</span>\n                  <span class=\"new\">NEW</span>\n                </div>\n              </div>\n              <div class=\"product-body\">\n                <p class=\"product-category\">Category:{{product.category}}</p>\n                <h3 class=\"product-name\"><a [routerLink]=\"['/product',{id:product.id}]\">{{product.title}}</a></h3>\n                <h4 class=\"product-price\">{{product.price}}$ <del class=\"product-old-price\">{{productService.round(product.price*100/70)}}$</del></h4>\n  \n                <span class=\"product-rating\" *ngFor=\"let i of [].constructor(productService.round(productService.averageRating(product)))\">\n                    <i class=\"fa fa-star\"></i>\n                </span>\n  \n                <div class=\"product-btns\">\n                  <button class=\"add-to-wishlist\"><i class=\"fa fa-heart-o\"></i><span class=\"tooltipp\">add to wishlist</span></button>\n                  <button class=\"add-to-compare\"><i class=\"fa fa-exchange\"></i><span class=\"tooltipp\">add to compare</span></button>\n                  <button class=\"quick-view\"><i class=\"fa fa-eye\"></i><span class=\"tooltipp\">quick view</span></button>\n                </div>\n              </div>\n              <div class=\"add-to-cart\">\n                <button (click)=\"itemService.add(product.id)\" class=\"add-to-cart-btn\"><i class=\"fa fa-shopping-cart\"></i> add to cart</button>\n              </div>\n            </div>\n            <!-- /product -->\n          </div>\n          <div id=\"slick-nav-1_\" class=\"products-slick-nav\"></div>\n        </div>\n        <!-- /tab -->\n      </div>\n\n\n\n</div>\n</div>\n</div>";
    /***/
  },

  /***/
  "../node_modules/raw-loader/dist/cjs.js!./app/components/signup/signup.component.html":
  /*!********************************************************************************************!*\
    !*** ../node_modules/raw-loader/dist/cjs.js!./app/components/signup/signup.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsAppComponentsSignupSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div >\r\n        <section class=\"signup\">\r\n        <!-- <img src=\"images/signup-bg.jpg\" alt=\"\"> -->\r\n        <div class=\"container\">\r\n            <div class=\"signup-content\">\r\n                <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">{{ errorMessage }}</div>\r\n                <form (ngSubmit)=\"onSignUp()\" [formGroup]=\"registerForm\" novalidate id=\"signup-form\" class=\"signup-form\">\r\n                    <h2 class=\"form-title\">Create Account</h2>\r\n\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" formControlName=\"firstName\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" class=\"form-control form-input\" name=\"fname\" id=\"fname\" placeholder=\"First Name\" />\r\n                        <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback form-input-error\">\r\n                            <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" formControlName=\"lastName\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" class=\"form-control form-input\" name=\"lname\" id=\"lname\" placeholder=\"Last Name\" />\r\n                        <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback form-input-error\">\r\n                            <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" formControlName=\"userName\" [ngClass]=\"{ 'is-invalid': submitted && f.userName.errors }\"class=\"form-control form-input\" name=\"uname\" id=\"uname\" placeholder=\"User Name\" />\r\n                        <div *ngIf=\"submitted && f.userName.errors\" class=\"invalid-feedback form-input-error\">\r\n                            <div *ngIf=\"f.userName.errors.required\">User Name is required</div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <input type=\"email\" formControlName=\"email\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" class=\"form-control form-input\" name=\"email\" id=\"email\" placeholder=\"Your Email\" />\r\n                        <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback form-input-error\">\r\n                            <div *ngIf=\"f.email.errors.required\">Email is required</div>\r\n                            <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" formControlName=\"password\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" class=\"form-control form-input\" name=\"password\" id=\"password\" placeholder=\"Password\" />\r\n                        <span toggle=\"#password\" class=\"zmdi zmdi-eye field-icon toggle-password\"></span>\r\n                        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback form-input-error\">\r\n                            <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n                            <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\r\n                            <label class=\"text-danger\" *ngIf=\"f.password.hasError('hasNumber')\">\r\n                                Must have at least 1 number!\r\n                            </label>\r\n                            <label class=\"text-danger\" *ngIf=\"f.password.hasError('hasCapitalCase')\">\r\n                                Must contain at least 1 in Capital Case!!\r\n                            </label>\r\n                            <label class=\"text-danger\" *ngIf=\"f.password.hasError('hasSmallCase')\">\r\n                                Must contain at least 1 in Lower Case!!\r\n                            </label>\r\n                        </div>\r\n                     </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <input type=\"password\" formControlName=\"confirmPassword\" [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\" class=\"form-control form-input\" name=\"re_password\" id=\"re_password\" placeholder=\"Repeat your password\" />\r\n                            <div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"invalid-feedback form-input-error\">\r\n                                <div *ngIf=\"f.confirmPassword.errors.required\">Confirm Password is required</div>\r\n                                <div *ngIf=\"f.confirmPassword.errors.mustMatch\">Passwords must match</div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <input type=\"submit\" name=\"submit\" id=\"submit\" class=\"form-submit\" value=\"Sign up\" />\r\n                        </div>\r\n</form>\r\n                <<h4>\r\n                    Already Have an Account ?\r\n                    <a routerLink=\"/login\" class=\"loginhere-link\">Login here</a>\r\n                </h4>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n</div>";
    /***/
  },

  /***/
  "../node_modules/tslib/tslib.es6.js":
  /*!******************************************!*\
    !*** ../node_modules/tslib/tslib.es6.js ***!
    \******************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    /***/

  },

  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./app/app-routing.module.ts":
  /*!***********************************!*\
    !*** ./app/app-routing.module.ts ***!
    \***********************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function appAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/index/index.component */
    "./app/components/index/index.component.ts");
    /* harmony import */


    var _components_product_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/product/product.component */
    "./app/components/product/product.component.ts");
    /* harmony import */


    var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/cart/cart.component */
    "./app/components/cart/cart.component.ts");
    /* harmony import */


    var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/contact/contact.component */
    "./app/components/contact/contact.component.ts");
    /* harmony import */


    var _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/about/about.component */
    "./app/components/about/about.component.ts");
    /* harmony import */


    var _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/checkout/checkout.component */
    "./app/components/checkout/checkout.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./app/components/login/login.component.ts");
    /* harmony import */


    var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/signup/signup.component */
    "./app/components/signup/signup.component.ts");
    /* harmony import */


    var _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/orders/orders.component */
    "./app/components/orders/orders.component.ts");

    var routes = [{
      path: '',
      component: _components_index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"]
    }, {
      path: 'product',
      component: _components_product_product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"]
    }, {
      path: 'cart',
      component: _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_5__["CartComponent"]
    }, {
      path: 'contact',
      component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"]
    }, {
      path: 'about',
      component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"]
    }, {
      path: 'login',
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"]
    }, {
      path: 'checkout',
      component: _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__["CheckoutComponent"]
    }, {
      path: 'signup',
      component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"]
    }, {
      path: 'orders',
      component: _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_11__["OrdersComponent"]
    }, {
      path: '**',
      redirectTo: ''
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./app/app.component.scss":
  /*!********************************!*\
    !*** ./app/app.component.scss ***!
    \********************************/

  /*! exports provided: default */

  /***/
  function appAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hcHAuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./app/app.component.ts":
  /*!******************************!*\
    !*** ./app/app.component.ts ***!
    \******************************/

  /*! exports provided: AppComponent */

  /***/
  function appAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'ElectroShop';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "../node_modules/raw-loader/dist/cjs.js!./app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./app/app.module.ts":
  /*!***************************!*\
    !*** ./app/app.module.ts ***!
    \***************************/

  /*! exports provided: AppModule */

  /***/
  function appAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "../node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-pagination */
    "../node_modules/ngx-pagination/dist/ngx-pagination.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./app/app.component.ts");
    /* harmony import */


    var _components_product_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/product/product.component */
    "./app/components/product/product.component.ts");
    /* harmony import */


    var _components_index_index_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/index/index.component */
    "./app/components/index/index.component.ts");
    /* harmony import */


    var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/cart/cart.component */
    "./app/components/cart/cart.component.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./app/components/header/header.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./app/components/footer/footer.component.ts");
    /* harmony import */


    var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/contact/contact.component */
    "./app/components/contact/contact.component.ts");
    /* harmony import */


    var _components_about_about_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/about/about.component */
    "./app/components/about/about.component.ts");
    /* harmony import */


    var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pipes/filter.pipe */
    "./app/pipes/filter.pipe.ts");
    /* harmony import */


    var _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/checkout/checkout.component */
    "./app/components/checkout/checkout.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./app/components/login/login.component.ts");
    /* harmony import */


    var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/signup/signup.component */
    "./app/components/signup/signup.component.ts");
    /* harmony import */


    var _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/orders/orders.component */
    "./app/components/orders/orders.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _components_product_product_component__WEBPACK_IMPORTED_MODULE_8__["ProductComponent"], _components_index_index_component__WEBPACK_IMPORTED_MODULE_9__["IndexComponent"], _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_10__["CartComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"], _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_15__["FilterPipe"], _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_16__["CheckoutComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"], _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_18__["SignupComponent"], _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_19__["OrdersComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./app/components/about/about.component.scss":
  /*!***************************************************!*\
    !*** ./app/components/about/about.component.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function appComponentsAboutAboutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./app/components/about/about.component.ts":
  /*!*************************************************!*\
    !*** ./app/components/about/about.component.ts ***!
    \*************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function appComponentsAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");

    var AboutComponent =
    /*#__PURE__*/
    function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about.component.html */
      "../node_modules/raw-loader/dist/cjs.js!./app/components/about/about.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about.component.scss */
      "./app/components/about/about.component.scss"))["default"]]
    })], AboutComponent);
    /***/
  },

  /***/
  "./app/components/cart/cart.component.scss":
  /*!*************************************************!*\
    !*** ./app/components/cart/cart.component.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function appComponentsCartCartComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0L2NhcnQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./app/components/cart/cart.component.ts":
  /*!***********************************************!*\
    !*** ./app/components/cart/cart.component.ts ***!
    \***********************************************/

  /*! exports provided: CartComponent */

  /***/
  function appComponentsCartCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartComponent", function () {
      return CartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/item.service */
    "./app/services/item.service.ts");
    /* harmony import */


    var _services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/order.service */
    "./app/services/order.service.ts");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/product.service */
    "./app/services/product.service.ts");

    var CartComponent =
    /*#__PURE__*/
    function () {
      function CartComponent(activatedRoute, router, productService, itemService, order_service) {
        _classCallCheck(this, CartComponent);

        this.activatedRoute = activatedRoute;
        this.router = router;
        this.productService = productService;
        this.itemService = itemService;
        this.order_service = order_service;
        this.items = [];
        this.total = 0;
      }

      _createClass(CartComponent, [{
        key: "remove",
        value: function remove(id) {}
      }, {
        key: "loadCart",
        value: function loadCart() {}
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // this.items=this.itemService.items;
          // this.total=this.itemService.total;
          this.remove = this.itemService.remove;
          this.loadCart = this.itemService.loadCart;
          this.activatedRoute.params.subscribe(function (params) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee() {
              var id, item, cart, _cart, index, i, _item, _item2;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      id = params['id'];

                      if (!id) {
                        _context.next = 42;
                        break;
                      }

                      _context.next = 4;
                      return this.productService.find(id);

                    case 4:
                      _context.t0 = _context.sent;
                      item = {
                        product: _context.t0,
                        quantity: 1
                      };

                      if (!(localStorage.getItem('cart') == null)) {
                        _context.next = 13;
                        break;
                      }

                      cart = [];
                      cart.push(JSON.stringify(item));
                      _context.next = 11;
                      return localStorage.setItem('cart', JSON.stringify(cart));

                    case 11:
                      _context.next = 39;
                      break;

                    case 13:
                      _context.t1 = JSON;
                      _context.next = 16;
                      return localStorage.getItem('cart');

                    case 16:
                      _context.t2 = _context.sent;
                      _cart = _context.t1.parse.call(_context.t1, _context.t2);
                      index = -1;
                      i = 0;

                    case 20:
                      if (!(i < _cart.length)) {
                        _context.next = 28;
                        break;
                      }

                      _item = JSON.parse(_cart[i]);

                      if (!(_item.product.id == id)) {
                        _context.next = 25;
                        break;
                      }

                      index = i;
                      return _context.abrupt("break", 28);

                    case 25:
                      i++;
                      _context.next = 20;
                      break;

                    case 28:
                      if (!(index == -1)) {
                        _context.next = 34;
                        break;
                      }

                      _cart.push(JSON.stringify(item));

                      _context.next = 32;
                      return localStorage.setItem('cart', JSON.stringify(_cart));

                    case 32:
                      _context.next = 39;
                      break;

                    case 34:
                      _item2 = JSON.parse(_cart[index]);
                      _item2.quantity += 1;
                      _cart[index] = JSON.stringify(_item2);
                      _context.next = 39;
                      return localStorage.setItem("cart", JSON.stringify(_cart));

                    case 39:
                      this.loadCart();
                      _context.next = 43;
                      break;

                    case 42:
                      this.loadCart();

                    case 43:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          });
        }
      }, {
        key: "onOrderCheckout",
        value: function onOrderCheckout() {
          if (this.order_service.loginRequired) {
            //Force Login
            this.router.navigate(["login"]);
          } else {
            //Go to checkout
            this.router.navigate(["checkout"]);
          }
        }
      }]);

      return CartComponent;
    }();

    CartComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]
      }, {
        type: _services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"]
      }, {
        type: _services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]
      }];
    };

    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cart',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cart.component.html */
      "../node_modules/raw-loader/dist/cjs.js!./app/components/cart/cart.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cart.component.scss */
      "./app/components/cart/cart.component.scss"))["default"]]
    })], CartComponent);
    /***/
  },

  /***/
  "./app/components/checkout/checkout.component.scss":
  /*!*********************************************************!*\
    !*** ./app/components/checkout/checkout.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function appComponentsCheckoutCheckoutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".checkout-thumb {\n  max-width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrb3V0L0M6XFxVc2Vyc1xcUm9tYW4gTWF5ZXJzb25cXHNvdXJjZVxccmVwb3NcXEVsZWN0cm9TaG9wLUNvcmVcXENsaWVudEFwcFxcYXBwXFxjb21wb25lbnRzL2NoZWNrb3V0XFxjaGVja291dC5jb21wb25lbnQuc2NzcyIsImNoZWNrb3V0L2NoZWNrb3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSiIsImZpbGUiOiJjaGVja291dC9jaGVja291dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGVja291dC10aHVtYiB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG59XHJcbiIsIi5jaGVja291dC10aHVtYiB7XG4gIG1heC13aWR0aDogMTAwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./app/components/checkout/checkout.component.ts":
  /*!*******************************************************!*\
    !*** ./app/components/checkout/checkout.component.ts ***!
    \*******************************************************/

  /*! exports provided: CheckoutComponent */

  /***/
  function appComponentsCheckoutCheckoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function () {
      return CheckoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/item.service */
    "./app/services/item.service.ts");
    /* harmony import */


    var _services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/order.service */
    "./app/services/order.service.ts");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/product.service */
    "./app/services/product.service.ts");

    var CheckoutComponent =
    /*#__PURE__*/
    function () {
      function CheckoutComponent(activatedRoute, router, productService, itemService, orderService) {
        _classCallCheck(this, CheckoutComponent);

        this.activatedRoute = activatedRoute;
        this.router = router;
        this.productService = productService;
        this.itemService = itemService;
        this.orderService = orderService;
        this.errorMessage = "";
      }

      _createClass(CheckoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onCheckout",
        value: function onCheckout() {
          var _this2 = this;

          // TODO
          //alert("Doing checkout");
          this.orderService.checkout().subscribe(function (success) {
            if (success) {
              _this2.router.navigate(["Shop"]);
            }
          }, function (err) {
            return _this2.errorMessage = "Failed to Save Order";
          });
        }
      }]);

      return CheckoutComponent;
    }();

    CheckoutComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]
      }, {
        type: _services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"]
      }, {
        type: _services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]
      }];
    };

    CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'checkout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./checkout.component.html */
      "../node_modules/raw-loader/dist/cjs.js!./app/components/checkout/checkout.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./checkout.component.scss */
      "./app/components/checkout/checkout.component.scss"))["default"]]
    })], CheckoutComponent);
    /***/
  },

  /***/
  "./app/components/contact/contact.component.scss":
  /*!*******************************************************!*\
    !*** ./app/components/contact/contact.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function appComponentsContactContactComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./app/components/contact/contact.component.ts":
  /*!*****************************************************!*\
    !*** ./app/components/contact/contact.component.ts ***!
    \*****************************************************/

  /*! exports provided: ContactComponent */

  /***/
  function appComponentsContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");

    var ContactComponent =
    /*#__PURE__*/
    function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);

        //contactForm: FormGroup;
        this.contact_form = {
          fname: "",
          lname: "",
          email: "",
          comment: ""
        };
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          alert('Form Submited!! :-)\n\n' + JSON.stringify(this.contact_form));
        }
      }]);

      return ContactComponent;
    }();

    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact.component.html */
      "../node_modules/raw-loader/dist/cjs.js!./app/components/contact/contact.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact.component.scss */
      "./app/components/contact/contact.component.scss"))["default"]]
    })], ContactComponent);
    /***/
  },

  /***/
  "./app/components/footer/footer.component.scss":
  /*!*****************************************************!*\
    !*** ./app/components/footer/footer.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function appComponentsFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./app/components/footer/footer.component.ts":
  /*!***************************************************!*\
    !*** ./app/components/footer/footer.component.ts ***!
    \***************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function appComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "../node_modules/raw-loader/dist/cjs.js!./app/components/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./app/components/footer/footer.component.scss"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./app/components/header/header.component.scss":
  /*!*****************************************************!*\
    !*** ./app/components/header/header.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function appComponentsHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./app/components/header/header.component.ts":
  /*!***************************************************!*\
    !*** ./app/components/header/header.component.ts ***!
    \***************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function appComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/item.service */
    "./app/services/item.service.ts");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/product.service */
    "./app/services/product.service.ts");
    /* harmony import */


    var _services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/order.service */
    "./app/services/order.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "../node_modules/@angular/common/fesm2015/http.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      //public search_term:any;
      function HeaderComponent(itemService, productService, orderService, http) {
        _classCallCheck(this, HeaderComponent);

        this.itemService = itemService;
        this.productService = productService;
        this.orderService = orderService;
        this.http = http;
        this.items = [];
        this.total = 0;
      }

      _createClass(HeaderComponent, [{
        key: "remove",
        value: function remove(id) {}
      }, {
        key: "loadCart",
        value: function loadCart() {}
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          // this.items=this.itemService.items;
          // this.total=this.itemService.total;
          this.remove = this.itemService.remove;
          this.loadCart = this.itemService.loadCart; //this.search_term=this.productService.term;

          this.loadCart();
        }
      }, {
        key: "logOut",
        value: function logOut() {
          this.itemService.username = "";
          this.orderService.resetToken();
          this.itemService.loggedIn = false;
          console.log("LogOUt");
          this.http.get("/Account/Logout");
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"]
      }, {
        type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
      }, {
        type: _services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "../node_modules/raw-loader/dist/cjs.js!./app/components/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./app/components/header/header.component.scss"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./app/components/index/index.component.scss":
  /*!***************************************************!*\
    !*** ./app/components/index/index.component.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function appComponentsIndexIndexComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmRleC9pbmRleC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./app/components/index/index.component.ts":
  /*!*************************************************!*\
    !*** ./app/components/index/index.component.ts ***!
    \*************************************************/

  /*! exports provided: IndexComponent */

  /***/
  function appComponentsIndexIndexComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndexComponent", function () {
      return IndexComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/product.service */
    "./app/services/product.service.ts");
    /* harmony import */


    var _services_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/item.service */
    "./app/services/item.service.ts");
    /* harmony import */


    var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../pipes/filter.pipe */
    "./app/pipes/filter.pipe.ts");

    var IndexComponent =
    /*#__PURE__*/
    function () {
      function IndexComponent(productService, itemService) {
        _classCallCheck(this, IndexComponent);

        //configs for pagination module
        this.productService = productService;
        this.itemService = itemService;
        this.config = {
          itemsPerPage: 6,
          currentPage: 1,
          totalItems: this.itemService.items.length
        };
      }

      _createClass(IndexComponent, [{
        key: "pageChanged",
        value: function pageChanged(event) {
          this.config.currentPage = event;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.productService.findAll();

                  case 2:
                    this.products = _context2.sent;

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return IndexComponent;
    }();

    IndexComponent.ctorParameters = function () {
      return [{
        type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
      }, {
        type: _services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"]
      }];
    };

    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-index',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./index.component.html */
      "../node_modules/raw-loader/dist/cjs.js!./app/components/index/index.component.html"))["default"],
      providers: [_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["FilterPipe"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./index.component.scss */
      "./app/components/index/index.component.scss"))["default"]]
    })], IndexComponent);
    /***/
  },

  /***/
  "./app/components/login/login.component.scss":
  /*!***************************************************!*\
    !*** ./app/components/login/login.component.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function appComponentsLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./app/components/login/login.component.ts":
  /*!*************************************************!*\
    !*** ./app/components/login/login.component.ts ***!
    \*************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function appComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/order.service */
    "./app/services/order.service.ts");
    /* harmony import */


    var _services_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/item.service */
    "./app/services/item.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "../node_modules/@angular/router/fesm2015/router.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(oservice, iservice, router) {
        _classCallCheck(this, LoginComponent);

        this.oservice = oservice;
        this.iservice = iservice;
        this.router = router;
        this.errorMessage = "";
        this.creds = {
          username: "",
          password: ""
        };
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onLogin",
        value: function onLogin() {
          var _this3 = this;

          //Call the Login Service
          // alert(this.creds.username);
          this.oservice.login(this.creds).subscribe(function (success) {
            if (success) {
              //Save Username in Items Service to track logged in user
              _this3.iservice.username = _this3.creds.username;
              _this3.iservice.loggedIn = true;

              if (_this3.iservice.items.length == 0) {
                _this3.router.navigate(["shop"]);
              } else {
                _this3.router.navigate(["checkout"]);
              }
            }
          }, function (err) {
            return _this3.errorMessage = "Failed to login";
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"]
      }, {
        type: _services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "../node_modules/raw-loader/dist/cjs.js!./app/components/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./app/components/login/login.component.scss"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./app/components/orders/orders.component.scss":
  /*!*****************************************************!*\
    !*** ./app/components/orders/orders.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function appComponentsOrdersOrdersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".checkout-thumb {\n  max-width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVycy9DOlxcVXNlcnNcXFJvbWFuIE1heWVyc29uXFxzb3VyY2VcXHJlcG9zXFxFbGVjdHJvU2hvcC1Db3JlXFxDbGllbnRBcHBcXGFwcFxcY29tcG9uZW50cy9vcmRlcnNcXG9yZGVycy5jb21wb25lbnQuc2NzcyIsIm9yZGVycy9vcmRlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKIiwiZmlsZSI6Im9yZGVycy9vcmRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hlY2tvdXQtdGh1bWIge1xyXG4gICAgbWF4LXdpZHRoOiAxMDBweDtcclxufVxyXG4iLCIuY2hlY2tvdXQtdGh1bWIge1xuICBtYXgtd2lkdGg6IDEwMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./app/components/orders/orders.component.ts":
  /*!***************************************************!*\
    !*** ./app/components/orders/orders.component.ts ***!
    \***************************************************/

  /*! exports provided: OrdersComponent */

  /***/
  function appComponentsOrdersOrdersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersComponent", function () {
      return OrdersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/order.service */
    "./app/services/order.service.ts");
    /* harmony import */


    var _services_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/item.service */
    "./app/services/item.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! lodash */
    "../node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__); //for logged username


    var OrdersComponent =
    /*#__PURE__*/
    function () {
      function OrdersComponent(orderService, router, itemService) {
        _classCallCheck(this, OrdersComponent);

        this.orderService = orderService;
        this.router = router;
        this.itemService = itemService;
      }

      _createClass(OrdersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (this.orderService.loginRequired) {
                      //Force Login
                      this.router.navigate(["login"]);
                    }

                    _context3.next = 3;
                    return this.orderService.findAll();

                  case 3:
                    this.orders = _context3.sent;

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "subtotal",
        value: function subtotal(order) {
          return lodash__WEBPACK_IMPORTED_MODULE_5__["sum"](lodash__WEBPACK_IMPORTED_MODULE_5__["map"](order.items, function (i) {
            return i.product.price * i.quantity;
          }));
        }
      }]);

      return OrdersComponent;
    }();

    OrdersComponent.ctorParameters = function () {
      return [{
        type: _services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"]
      }];
    };

    OrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-orders',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./orders.component.html */
      "../node_modules/raw-loader/dist/cjs.js!./app/components/orders/orders.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./orders.component.scss */
      "./app/components/orders/orders.component.scss"))["default"]]
    })], OrdersComponent);
    /***/
  },

  /***/
  "./app/components/product/product.component.scss":
  /*!*******************************************************!*\
    !*** ./app/components/product/product.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function appComponentsProductProductComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./app/components/product/product.component.ts":
  /*!*****************************************************!*\
    !*** ./app/components/product/product.component.ts ***!
    \*****************************************************/

  /*! exports provided: ProductComponent */

  /***/
  function appComponentsProductProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductComponent", function () {
      return ProductComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/product.service */
    "./app/services/product.service.ts");
    /* harmony import */


    var _services_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/item.service */
    "./app/services/item.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "../node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _entities_reviewmodel_entity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../entities/reviewmodel.entity */
    "./app/entities/reviewmodel.entity.ts"); //import { Review } from '../../entities/review.entity';


    var ProductComponent =
    /*#__PURE__*/
    function () {
      function ProductComponent(productService, itemService, activatedRoute, http, fb, router) {
        _classCallCheck(this, ProductComponent);

        this.productService = productService;
        this.itemService = itemService;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.fb = fb;
        this.router = router;
        this.reviewForm = this.fb.group({
          reviewer_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          content: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(5)]],
          rating: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]]
        });
      }

      _createClass(ProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.productService.findAll();

                  case 2:
                    this.products = _context5.sent;
                    this.activatedRoute.params.subscribe(function (params) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this4, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee4() {
                        return regeneratorRuntime.wrap(function _callee4$(_context4) {
                          while (1) {
                            switch (_context4.prev = _context4.next) {
                              case 0:
                                this.id = params['id'];

                                if (!this.id) {
                                  _context4.next = 5;
                                  break;
                                }

                                _context4.next = 4;
                                return this.productService.find(this.id);

                              case 4:
                                this.selected_product = _context4.sent;

                              case 5:
                                ;
                                this.productService.getProductsByCategory(this.selected_product.category); //get all product with same 'category' as selected product 

                              case 7:
                              case "end":
                                return _context4.stop();
                            }
                          }
                        }, _callee4, this);
                      }));
                    });
                    this.prodQuantity = 1;

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        } // convenience getter for easy access to form fields

      }, {
        key: "submitReview",
        value: function submitReview() {
          var _this5 = this;

          if (this.reviewForm.invalid) {
            //alert('NO SUCCESS!! :-)\n\n' + JSON.stringify(this.reviewForm.value))
            return;
          } //console.log("Submitting");
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8') //.set('application/x-www-form-urlencoded')

          }).subscribe( //Refreshing Reviews List on Products page,after new review was submited by calling product Service
          function (response) {
            _this5.UpdateUIafterReviewSubmit();

            console.log(response);
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "UpdateUIafterReviewSubmit",
        value: function UpdateUIafterReviewSubmit() {
          alert("Review Submitted,Thank you");
          this.router.navigate(['/shop']); //console.log("Implement method to refresh UI");
        }
      }, {
        key: "IncProdQuantity",
        value: function IncProdQuantity() {
          if (this.prodQuantity < 25) this.prodQuantity += 1;
        }
      }, {
        key: "DecProdQuantity",
        value: function DecProdQuantity() {
          if (this.prodQuantity >= 2) this.prodQuantity -= 1;
        }
      }, {
        key: "f",
        get: function get() {
          return this.reviewForm.controls;
        }
      }]);

      return ProductComponent;
    }();

    ProductComponent.ctorParameters = function () {
      return [{
        type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
      }, {
        type: _services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product.component.html */
      "../node_modules/raw-loader/dist/cjs.js!./app/components/product/product.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product.component.scss */
      "./app/components/product/product.component.scss"))["default"]]
    })], ProductComponent);
    /***/
  },

  /***/
  "./app/components/signup/signup.component.scss":
  /*!*****************************************************!*\
    !*** ./app/components/signup/signup.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function appComponentsSignupSignupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.signup-content {\n  background: #fff;\n  border-radius: 10px;\n  -moz-border-radius: 10px;\n  -webkit-border-radius: 10px;\n  -o-border-radius: 10px;\n  -ms-border-radius: 10px;\n  padding: 50px 85px;\n}\n.form-group {\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.form-input {\n  width: 100%;\n  border: 1px solid #ebebeb;\n  border-radius: 5px;\n  -moz-border-radius: 5px;\n  -webkit-border-radius: 5px;\n  -o-border-radius: 5px;\n  -ms-border-radius: 5px;\n  padding: 17px 20px;\n  box-sizing: border-box;\n  font-size: 14px;\n  font-weight: 500;\n  color: #222;\n}\n.form-input::-webkit-input-placeholder {\n  color: #999;\n}\n.form-input::-moz-placeholder {\n  color: #999;\n}\n.form-input:-ms-input-placeholder {\n  color: #999;\n}\n.form-input:-moz-placeholder {\n  color: #999;\n}\n.form-input::-webkit-input-placeholder {\n  font-weight: 500;\n}\n.form-input::-moz-placeholder {\n  font-weight: 500;\n}\n.form-input:-ms-input-placeholder {\n  font-weight: 500;\n}\n.form-input:-moz-placeholder {\n  font-weight: 500;\n}\n.form-input:focus {\n  border: 1px solid transparent;\n  -webkit-border-image-source: -webkit-linear-gradient(to right, #9face6, #74ebd5);\n  -moz-border-image-source: -moz-linear-gradient(to right, #9face6, #74ebd5);\n  -o-border-image-source: -o-linear-gradient(to right, #9face6, #74ebd5);\n  border-image-source: linear-gradient(to right, #9face6, #74ebd5);\n  -webkit-border-image-slice: 1;\n  border-image-slice: 1;\n  border-radius: 5px;\n  -moz-border-radius: 5px;\n  -webkit-border-radius: 5px;\n  -o-border-radius: 5px;\n  -ms-border-radius: 5px;\n  background-origin: border-box;\n  background-clip: content-box, border-box;\n}\n.form-input:focus::-webkit-input-placeholder {\n  color: #222;\n}\n.form-input:focus::-moz-placeholder {\n  color: #222;\n}\n.form-input:focus:-ms-input-placeholder {\n  color: #222;\n}\n.form-input:focus:-moz-placeholder {\n  color: #222;\n}\n.form-input-error {\n  width: 100%;\n  padding: 17px 20px;\n  box-sizing: border-box;\n  font-size: 14px;\n  font-weight: 500;\n  color: red;\n}\n.form-submit {\n  width: 100%;\n  border-radius: 5px;\n  -moz-border-radius: 5px;\n  -webkit-border-radius: 5px;\n  -o-border-radius: 5px;\n  -ms-border-radius: 5px;\n  padding: 17px 20px;\n  box-sizing: border-box;\n  font-size: 14px;\n  font-weight: 700;\n  color: #fff;\n  text-transform: uppercase;\n  border: none;\n  background-image: linear-gradient(to left, #74ebd5, #9face6);\n}\ninput[type=checkbox]:not(old) {\n  width: 2em;\n  margin: 0;\n  padding: 0;\n  font-size: 1em;\n  display: none;\n}\ninput[type=checkbox]:not(old) + label {\n  display: inline-block;\n  margin-top: 7px;\n  margin-bottom: 25px;\n}\ninput[type=checkbox]:not(old) + label > span {\n  display: inline-block;\n  width: 13px;\n  height: 13px;\n  margin-right: 15px;\n  margin-bottom: 3px;\n  border: 1px solid #ebebeb;\n  border-radius: 2px;\n  -moz-border-radius: 2px;\n  -webkit-border-radius: 2px;\n  -o-border-radius: 2px;\n  -ms-border-radius: 2px;\n  background: white;\n  background-image: linear-gradient(white, white);\n  vertical-align: bottom;\n}\ninput[type=checkbox]:not(old):checked + label > span {\n  background-image: linear-gradient(white, white);\n}\ninput[type=checkbox]:not(old):checked + label > span:before {\n  content: \"\";\n  display: block;\n  color: #222;\n  font-size: 11px;\n  line-height: 1.2;\n  text-align: center;\n  font-family: \"Material-Design-Iconic-Font\";\n  font-weight: bold;\n}\n.label-agree-term {\n  font-size: 12px;\n  font-weight: 600;\n  color: #555;\n}\n.term-service {\n  color: #555;\n}\n.loginhere {\n  color: #555;\n  font-weight: 500;\n  text-align: center;\n  margin-top: 91px;\n  margin-bottom: 5px;\n}\n.loginhere-link {\n  font-weight: 700;\n  color: #222;\n}\n.field-icon {\n  float: right;\n  margin-right: 17px;\n  margin-top: -32px;\n  position: relative;\n  z-index: 2;\n  color: #555;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiLCJzaWdudXAvQzpcXFVzZXJzXFxSb21hbiBNYXllcnNvblxcc291cmNlXFxyZXBvc1xcRWxlY3Ryb1Nob3AtQ29yZVxcQ2xpZW50QXBwXFxhcHBcXGNvbXBvbmVudHMvc2lnbnVwXFxzaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDMktoQjtFQUNJLGdCQUFBO0VBdEtBLG1CQXVLdUI7RUF0S3ZCLHdCQXNLdUI7RUFyS3ZCLDJCQXFLdUI7RUFwS3ZCLHNCQW9LdUI7RUFuS3ZCLHVCQW1LdUI7RUFDdkIsa0JBQUE7QURyS0o7QUN3S0E7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FEcktKO0FDd0tBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBbExBLGtCQW1MdUI7RUFsTHZCLHVCQWtMdUI7RUFqTHZCLDBCQWlMdUI7RUFoTHZCLHFCQWdMdUI7RUEvS3ZCLHNCQStLdUI7RUFDdkIsa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBOUxVO0FENkJkO0FDNkhJO0VBQ0ksV0F6Sks7QUQ4QmI7QUM4SEk7RUFDSSxXQTdKSztBRGlDYjtBQytISTtFQUNJLFdBaktLO0FEb0NiO0FDZ0lJO0VBQ0ksV0FyS0s7QUR1Q2I7QUN3Skk7RUFDSSxnQkFBQTtBRHRKUjtBQ3lKSTtFQUNJLGdCQUFBO0FEdkpSO0FDMEpJO0VBQ0ksZ0JBQUE7QUR4SlI7QUMySkk7RUFDSSxnQkFBQTtBRHpKUjtBQzRKSTtFQUNJLDZCQUFBO0VBQ0EsZ0ZBQUE7RUFDQSwwRUFBQTtFQUNBLHNFQUFBO0VBQ0EsZ0VBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBbE5KLGtCQW1OMkI7RUFsTjNCLHVCQWtOMkI7RUFqTjNCLDBCQWlOMkI7RUFoTjNCLHFCQWdOMkI7RUEvTTNCLHNCQStNMkI7RUFFdkIsNkJBQUE7RUFDQSx3Q0FBQTtBRHZKUjtBQ3FGSTtFQUNJLFdBM0pNO0FEd0VkO0FDc0ZJO0VBQ0ksV0EvSk07QUQyRWQ7QUN1Rkk7RUFDSSxXQW5LTTtBRDhFZDtBQ3dGSTtFQUNJLFdBdktNO0FEaUZkO0FDK0lBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FENUlKO0FDZ0pBO0VBQ0ksV0FBQTtFQXJPQSxrQkFzT3VCO0VBck92Qix1QkFxT3VCO0VBcE92QiwwQkFvT3VCO0VBbk92QixxQkFtT3VCO0VBbE92QixzQkFrT3VCO0VBQ3ZCLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBS0EsNERBQUE7QUR6SUo7QUM0SUE7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBRHpJSjtBQzRJQTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FEeklKO0FDNElBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQXpRQSxrQkEwUXVCO0VBelF2Qix1QkF5UXVCO0VBeFF2QiwwQkF3UXVCO0VBdlF2QixxQkF1UXVCO0VBdFF2QixzQkFzUXVCO0VBQ3ZCLGlCQUFBO0VBS0EsK0NBQUE7RUFDQSxzQkFBQTtBRHJJSjtBQ3dJQTtFQUtJLCtDQUFBO0FEcklKO0FDd0lBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxXQXJTVTtFQXNTVixlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsaUJBQUE7QURySUo7QUN3SUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FEcklKO0FDd0lBO0VBQ0ksV0FBQTtBRHJJSjtBQ3dJQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRHJJSjtBQ3dJQTtFQUNJLGdCQUFBO0VBQ0EsV0FqVVU7QUQ0TGQ7QUN3SUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QURySUoiLCJmaWxlIjoic2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5zaWdudXAtY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtby1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtbXMtYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogNTBweCA4NXB4O1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5mb3JtLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuICAtby1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC1tcy1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDE3cHggMjBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzIyMjtcbn1cbi5mb3JtLWlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM5OTk7XG59XG4uZm9ybS1pbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjOTk5O1xufVxuLmZvcm0taW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM5OTk7XG59XG4uZm9ybS1pbnB1dDotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM5OTk7XG59XG4uZm9ybS1pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uZm9ybS1pbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uZm9ybS1pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmZvcm0taW5wdXQ6LW1vei1wbGFjZWhvbGRlciB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uZm9ybS1pbnB1dDpmb2N1cyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAtd2Via2l0LWJvcmRlci1pbWFnZS1zb3VyY2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjOWZhY2U2LCAjNzRlYmQ1KTtcbiAgLW1vei1ib3JkZXItaW1hZ2Utc291cmNlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzlmYWNlNiwgIzc0ZWJkNSk7XG4gIC1vLWJvcmRlci1pbWFnZS1zb3VyY2U6IC1vLWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzlmYWNlNiwgIzc0ZWJkNSk7XG4gIGJvcmRlci1pbWFnZS1zb3VyY2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzlmYWNlNiwgIzc0ZWJkNSk7XG4gIC13ZWJraXQtYm9yZGVyLWltYWdlLXNsaWNlOiAxO1xuICBib3JkZXItaW1hZ2Utc2xpY2U6IDE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuICAtby1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC1tcy1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtb3JpZ2luOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94LCBib3JkZXItYm94O1xufVxuLmZvcm0taW5wdXQ6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzIyMjtcbn1cbi5mb3JtLWlucHV0OmZvY3VzOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICMyMjI7XG59XG4uZm9ybS1pbnB1dDpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzIyMjtcbn1cbi5mb3JtLWlucHV0OmZvY3VzOi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzIyMjtcbn1cblxuLmZvcm0taW5wdXQtZXJyb3Ige1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTdweCAyMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5mb3JtLXN1Ym1pdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLW8tYm9yZGVyLXJhZGl1czogNXB4O1xuICAtbXMtYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxN3B4IDIwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzc0ZWJkNSwgIzlmYWNlNik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tcy1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzc0ZWJkNSwgIzlmYWNlNik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjNzRlYmQ1LCAjOWZhY2U2KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzc0ZWJkNSwgIzlmYWNlNik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjNzRlYmQ1LCAjOWZhY2U2KTtcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF06bm90KG9sZCkge1xuICB3aWR0aDogMmVtO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5pbnB1dFt0eXBlPWNoZWNrYm94XTpub3Qob2xkKSArIGxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiA3cHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdOm5vdChvbGQpICsgbGFiZWwgPiBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTNweDtcbiAgaGVpZ2h0OiAxM3B4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ViZWJlYjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDJweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAycHg7XG4gIC1vLWJvcmRlci1yYWRpdXM6IDJweDtcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHdoaXRlLCB3aGl0ZSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tcy1saW5lYXItZ3JhZGllbnQod2hpdGUsIHdoaXRlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHdoaXRlLCB3aGl0ZSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHdoaXRlLCB3aGl0ZSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh3aGl0ZSwgd2hpdGUpO1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xufVxuXG5pbnB1dFt0eXBlPWNoZWNrYm94XTpub3Qob2xkKTpjaGVja2VkICsgbGFiZWwgPiBzcGFuIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQod2hpdGUsIHdoaXRlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1zLWxpbmVhci1ncmFkaWVudCh3aGl0ZSwgd2hpdGUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQod2hpdGUsIHdoaXRlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQod2hpdGUsIHdoaXRlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHdoaXRlLCB3aGl0ZSk7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdOm5vdChvbGQpOmNoZWNrZWQgKyBsYWJlbCA+IHNwYW46YmVmb3JlIHtcbiAgY29udGVudDogXCLviatcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjMjIyO1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiTWF0ZXJpYWwtRGVzaWduLUljb25pYy1Gb250XCI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubGFiZWwtYWdyZWUtdGVybSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM1NTU7XG59XG5cbi50ZXJtLXNlcnZpY2Uge1xuICBjb2xvcjogIzU1NTtcbn1cblxuLmxvZ2luaGVyZSB7XG4gIGNvbG9yOiAjNTU1O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDkxcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmxvZ2luaGVyZS1saW5rIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMyMjI7XG59XG5cbi5maWVsZC1pY29uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDE3cHg7XG4gIG1hcmdpbi10b3A6IC0zMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIGNvbG9yOiAjNTU1O1xufSIsIiRibGFjay1jb2xvcjogIzIyMjtcclxuJGJsdWUtY29sb3I6ICM2ZGFiZTQ7XHJcbiRncmV5LWxpZ2h0OiAjOTk5O1xyXG5cclxuLy8gbWl4aW5cclxuQG1peGluIGJvcmRlci1yYWRpdXMoJHZhbHVlKSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAkdmFsdWU7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6ICR2YWx1ZTtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHZhbHVlO1xyXG4gICAgLW8tYm9yZGVyLXJhZGl1czogJHZhbHVlO1xyXG4gICAgLW1zLWJvcmRlci1yYWRpdXM6ICR2YWx1ZTtcclxufVxyXG5cclxuXHJcblxyXG5AbWl4aW4gYmFja2dyb3VuZC1ncmFkaWVudC10aHJlZSgkY29sb3IxLCAkY29sb3IyLCAkY29sb3IzKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGNvbG9yMSwgJGNvbG9yMiwgJGNvbG9yMyk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgkY29sb3IxLCAkY29sb3IyLCAkY29sb3IzKTtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRjb2xvcjEsICRjb2xvcjIsICRjb2xvcjMpO1xyXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KCRjb2xvcjEsICRjb2xvcjIsICRjb2xvcjMpO1xyXG4gICAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgkY29sb3IxLCAkY29sb3IyLCAkY29sb3IzKTtcclxufVxyXG5cclxuQG1peGluIGJhY2tncm91bmQtZ3JhZGllbnQtc2l4KCRjb2xvcjEsICRjb2xvcjIsICRjb2xvcjMsICRjb2xvcjQsICRjb2xvcjUsICRjb2xvcjYpIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkY29sb3IxLCAkY29sb3IyLCAkY29sb3IzLCAkY29sb3I0LCAkY29sb3I1LCAkY29sb3I2KTtcclxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KCRjb2xvcjEsICRjb2xvcjIsICRjb2xvcjMsICRjb2xvcjQsICRjb2xvcjUsICRjb2xvcjYpO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGNvbG9yMSwgJGNvbG9yMiwgJGNvbG9yMywgJGNvbG9yNCwgJGNvbG9yNSwgJGNvbG9yNik7XHJcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoJGNvbG9yMSwgJGNvbG9yMiwgJGNvbG9yMywgJGNvbG9yNCwgJGNvbG9yNSwgJGNvbG9yNik7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KCRjb2xvcjEsICRjb2xvcjIsICRjb2xvcjMsICRjb2xvcjQsICRjb2xvcjUsICRjb2xvcjYpO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNmb3JtKCR2YWx1ZSkge1xyXG4gICAgdHJhbnNmb3JtOiAkdmFsdWU7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogJHZhbHVlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICR2YWx1ZTtcclxuICAgIC1vLXRyYW5zZm9ybTogJHZhbHVlO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogJHZhbHVlO1xyXG59XHJcblxyXG5AbWl4aW4gYm94LXNoYWRvdygkdmFsdWUpIHtcclxuICAgIGJveC1zaGFkb3c6ICR2YWx1ZTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogJHZhbHVlO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAkdmFsdWU7XHJcbiAgICAtby1ib3gtc2hhZG93OiAkdmFsdWU7XHJcbiAgICAtbXMtYm94LXNoYWRvdzogJHZhbHVlO1xyXG59XHJcblxyXG5AbWl4aW4gZmlsdGVyKCR2YWx1ZSkge1xyXG4gICAgZmlsdGVyOiAkdmFsdWU7XHJcbiAgICAtbW96LWZpbHRlcjogJHZhbHVlO1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6ICR2YWx1ZTtcclxuICAgIC1vLWZpbHRlcjogJHZhbHVlO1xyXG4gICAgLW1zLWZpbHRlcjogJHZhbHVlO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNpdGlvbigkdmFsdWUpIHtcclxuICAgIHRyYW5zaXRpb246ICR2YWx1ZTtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogJHZhbHVlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAkdmFsdWU7XHJcbiAgICAtby10cmFuc2l0aW9uOiAkdmFsdWU7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogJHZhbHVlO1xyXG59XHJcblxyXG5AbWl4aW4gYW5pbWF0aW9uKCR2YWx1ZSkge1xyXG4gICAgYW5pbWF0aW9uOiAkdmFsdWU7XHJcbiAgICAtbW96LWFuaW1hdGlvbjogJHZhbHVlO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246ICR2YWx1ZTtcclxuICAgIC1vLWFuaW1hdGlvbjogJHZhbHVlO1xyXG4gICAgLW1zLWFuaW1hdGlvbjogJHZhbHVlO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNmb3JtLW9yaWdpbigkdmFsdWUpIHtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46ICR2YWx1ZTtcclxuICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogJHZhbHVlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAkdmFsdWU7XHJcbiAgICAtby10cmFuc2Zvcm0tb3JpZ2luOiAkdmFsdWU7XHJcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogJHZhbHVlO1xyXG59XHJcblxyXG5AbWl4aW4gYXBwZWFyYW5jZSgkdmFsdWUpIHtcclxuICAgIGFwcGVhcmFuY2U6ICR2YWx1ZSAhaW1wb3J0YW50O1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiAkdmFsdWUgIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogJHZhbHVlICFpbXBvcnRhbnQ7XHJcbiAgICAtby1hcHBlYXJhbmNlOiAkdmFsdWUgIWltcG9ydGFudDtcclxuICAgIC1tcy1hcHBlYXJhbmNlOiAkdmFsdWUgIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1peGluIGJveC1zaGFkb3ctaW5wdXQoJHZhbHVlKSB7XHJcbiAgICBib3gtc2hhZG93OiAkdmFsdWUgIWltcG9ydGFudDtcclxuICAgIC1tb3otYm94LXNoYWRvdzogJHZhbHVlICFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6ICR2YWx1ZSAhaW1wb3J0YW50O1xyXG4gICAgLW8tYm94LXNoYWRvdzogJHZhbHVlICFpbXBvcnRhbnQ7XHJcbiAgICAtbXMtYm94LXNoYWRvdzogJHZhbHVlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vZmxleFxyXG5AbWl4aW4gZmxleC13cmFwKCR2YWx1ZSkge1xyXG4gICAgZmxleC13cmFwOiAkdmFsdWU7XHJcbiAgICAtbW96LWZsZXgtd3JhcDogJHZhbHVlO1xyXG4gICAgLXdlYmtpdC1mbGV4LXdyYXA6ICR2YWx1ZTtcclxuICAgIC1vLWZsZXgtd3JhcDogJHZhbHVlO1xyXG4gICAgLW1zLWZsZXgtd3JhcDogJHZhbHVlO1xyXG59XHJcblxyXG5AbWl4aW4gZmxleC1kaXJlY3Rpb24oJHZhbHVlKSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogJHZhbHVlO1xyXG4gICAgLW1vei1mbGV4LWRpcmVjdGlvbjogJHZhbHVlO1xyXG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogJHZhbHVlO1xyXG4gICAgLW8tZmxleC1kaXJlY3Rpb246ICR2YWx1ZTtcclxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogJHZhbHVlO1xyXG59XHJcblxyXG5AbWl4aW4gZmxleC1mbG93KCR2YWx1ZSkge1xyXG4gICAgZmxleC1mbG93OiAkdmFsdWU7XHJcbiAgICAtbW96LWZsZXgtZmxvdzogJHZhbHVlO1xyXG4gICAgLXdlYmtpdC1mbGV4LWZsb3c6ICR2YWx1ZTtcclxuICAgIC1vLWZsZXgtZmxvdzogJHZhbHVlO1xyXG4gICAgLW1zLWZsZXgtZmxvdzogJHZhbHVlO1xyXG59XHJcblxyXG5AbWl4aW4ganVzdGlmeS1jb250ZW50KCR2YWx1ZSkge1xyXG4gICAganVzdGlmeS1jb250ZW50OiAkdmFsdWU7XHJcbiAgICAtbW96LWp1c3RpZnktY29udGVudDogJHZhbHVlO1xyXG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6ICR2YWx1ZTtcclxuICAgIC1vLWp1c3RpZnktY29udGVudDogJHZhbHVlO1xyXG4gICAgLW1zLWp1c3RpZnktY29udGVudDogJHZhbHVlO1xyXG59XHJcblxyXG5AbWl4aW4gYWxpZ24taXRlbXMoJHZhbHVlKSB7XHJcbiAgICBhbGlnbi1pdGVtczogJHZhbHVlO1xyXG4gICAgLW1vei1hbGlnbi1pdGVtczogJHZhbHVlO1xyXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogJHZhbHVlO1xyXG4gICAgLW8tYWxpZ24taXRlbXM6ICR2YWx1ZTtcclxuICAgIC1tcy1hbGlnbi1pdGVtczogJHZhbHVlO1xyXG59XHJcblxyXG5AbWl4aW4gb3JkZXIoJHZhbHVlKSB7XHJcbiAgICBvcmRlcjogJHZhbHVlO1xyXG4gICAgLW1vei1vcmRlcjogJHZhbHVlO1xyXG4gICAgLXdlYmtpdC1vcmRlcjogJHZhbHVlO1xyXG4gICAgLW8tb3JkZXI6ICR2YWx1ZTtcclxuICAgIC1tcy1vcmRlcjogJHZhbHVlO1xyXG59XHJcblxyXG5AbWl4aW4gZmxleCgkdmFsdWUpIHtcclxuICAgIGZsZXg6ICR2YWx1ZTtcclxuICAgIC1tb3otZmxleDogJHZhbHVlO1xyXG4gICAgLXdlYmtpdC1mbGV4OiAkdmFsdWU7XHJcbiAgICAtby1mbGV4OiAkdmFsdWU7XHJcbiAgICAtbXMtZmxleDogJHZhbHVlO1xyXG59XHJcblxyXG5cclxuQG1peGluIGlucHV0LXBsYWNlaG9sZGVyKCR2YWx1ZSkge1xyXG4gICAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgY29sb3I6ICR2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAmOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgICAgICBjb2xvcjogJHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgICAgICBjb2xvcjogJHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgICY6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgY29sb3I6ICR2YWx1ZTtcclxuICAgIH1cclxufVxyXG5cclxuLnNpZ251cC1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKDEwcHgpO1xyXG4gICAgcGFkZGluZzogNTBweCA4NXB4O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmZvcm0taW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjM1LCAyMzUsIDIzNSk7XHJcbiAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKDVweCk7XHJcbiAgICBwYWRkaW5nOiAxN3B4IDIwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAkYmxhY2stY29sb3I7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1wbGFjZWhvbGRlcigkZ3JleS1saWdodCk7XHJcblxyXG4gICAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuXHJcbiAgICAmOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG5cclxuICAgICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG5cclxuICAgICY6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAtd2Via2l0LWJvcmRlci1pbWFnZS1zb3VyY2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoMTU5LDE3MiwyMzApLCByZ2IoMTE2LDIzNSwyMTMpKTtcclxuICAgICAgICAtbW96LWJvcmRlci1pbWFnZS1zb3VyY2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoMTU5LDE3MiwyMzApLCByZ2IoMTE2LDIzNSwyMTMpKTtcclxuICAgICAgICAtby1ib3JkZXItaW1hZ2Utc291cmNlOiAtby1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYigxNTksMTcyLDIzMCksIHJnYigxMTYsMjM1LDIxMykpO1xyXG4gICAgICAgIGJvcmRlci1pbWFnZS1zb3VyY2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiKDE1OSwxNzIsMjMwKSwgcmdiKDExNiwyMzUsMjEzKSk7XHJcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItaW1hZ2Utc2xpY2U6IDE7XHJcbiAgICAgICAgYm9yZGVyLWltYWdlLXNsaWNlOiAxO1xyXG4gICAgICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoNXB4KTtcclxuICAgICAgICBAaW5jbHVkZSBpbnB1dC1wbGFjZWhvbGRlcigkYmxhY2stY29sb3IpO1xyXG4gICAgICAgIGJhY2tncm91bmQtb3JpZ2luOiBib3JkZXItYm94O1xyXG4gICAgICAgIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3gsIGJvcmRlci1ib3g7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb3JtLWlucHV0LWVycm9yIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTdweCAyMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG5cclxuLmZvcm0tc3VibWl0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cyg1cHgpO1xyXG4gICAgcGFkZGluZzogMTdweCAyMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjNzRlYmQ1LCM5ZmFjZTYpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW1zLWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjNzRlYmQ1LCM5ZmFjZTYpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICM3NGViZDUsIzlmYWNlNik7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjNzRlYmQ1LCM5ZmFjZTYpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICM3NGViZDUsIzlmYWNlNik7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9Y2hlY2tib3hdOm5vdChvbGQpIHtcclxuICAgIHdpZHRoOiAyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPWNoZWNrYm94XTpub3Qob2xkKSArIGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDdweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9Y2hlY2tib3hdOm5vdChvbGQpICsgbGFiZWwgPiBzcGFuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxM3B4O1xyXG4gICAgaGVpZ2h0OiAxM3B4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ViZWJlYjtcclxuICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoMnB4KTtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsMjU1LDI1NSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudChyZ2IoMjU1LDI1NSwyNTUpLHJnYigyNTUsMjU1LDI1NSkpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW1zLWxpbmVhci1ncmFkaWVudChyZ2IoMjU1LDI1NSwyNTUpLHJnYigyNTUsMjU1LDI1NSkpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHJnYigyNTUsMjU1LDI1NSkscmdiKDI1NSwyNTUsMjU1KSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyZ2IoMjU1LDI1NSwyNTUpLHJnYigyNTUsMjU1LDI1NSkpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYigyNTUsMjU1LDI1NSkscmdiKDI1NSwyNTUsMjU1ICkpO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1jaGVja2JveF06bm90KG9sZCk6Y2hlY2tlZCArIGxhYmVsID4gc3Bhbiwge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQocmdiKDI1NSwyNTUsMjU1KSxyZ2IoMjU1LDI1NSwyNTUpKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1tcy1saW5lYXItZ3JhZGllbnQocmdiKDI1NSwyNTUsMjU1KSxyZ2IoMjU1LDI1NSwyNTUpKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudChyZ2IoMjU1LDI1NSwyNTUpLHJnYigyNTUsMjU1LDI1NSkpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmdiKDI1NSwyNTUsMjU1KSxyZ2IoMjU1LDI1NSwyNTUpKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2IoMjU1LDI1NSwyNTUpLHJnYigyNTUsMjU1LDI1NSApKTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1jaGVja2JveF06bm90KG9sZCk6Y2hlY2tlZCArIGxhYmVsID4gc3BhbjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJ1xcZjI2Yic7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiAkYmxhY2stY29sb3I7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbC1EZXNpZ24tSWNvbmljLUZvbnQnO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5sYWJlbC1hZ3JlZS10ZXJtIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzU1NTtcclxufVxyXG5cclxuLnRlcm0tc2VydmljZSB7XHJcbiAgICBjb2xvcjogIzU1NTtcclxufVxyXG5cclxuLmxvZ2luaGVyZSB7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA5MXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4ubG9naW5oZXJlLWxpbmsge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAkYmxhY2stY29sb3I7XHJcbn1cclxuXHJcbi5maWVsZC1pY29uIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogMTdweDtcclxuICAgIG1hcmdpbi10b3A6IC0zMnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./app/components/signup/signup.component.ts":
  /*!***************************************************!*\
    !*** ./app/components/signup/signup.component.ts ***!
    \***************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function appComponentsSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "../node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _entities_user_entity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../entities/user.entity */
    "./app/entities/user.entity.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../helpers/must-match.validator */
    "./app/helpers/must-match.validator.ts");
    /* harmony import */


    var _helpers_custom_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../helpers/custom-validators */
    "./app/helpers/custom-validators.ts"); // import custom validator to validate that password and confirm password fields match


    var SignupComponent =
    /*#__PURE__*/
    function () {
      function SignupComponent(formBuilder, http, router) {
        _classCallCheck(this, SignupComponent);

        this.formBuilder = formBuilder;
        this.http = http;
        this.router = router;
        this.submitted = false;
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6), // 2. check whether the entered password has a number
            _helpers_custom_validators__WEBPACK_IMPORTED_MODULE_7__["CustomValidators"].patternValidator(/\d/, {
              hasNumber: true
            }), // 3. check whether the entered password has upper case letter
            _helpers_custom_validators__WEBPACK_IMPORTED_MODULE_7__["CustomValidators"].patternValidator(/[A-Z]/, {
              hasCapitalCase: true
            }), // 4. check whether the entered password has a lower-case letter
            _helpers_custom_validators__WEBPACK_IMPORTED_MODULE_7__["CustomValidators"].patternValidator(/[a-z]/, {
              hasSmallCase: true
            })]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          }, {
            validator: Object(_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_6__["MustMatch"])('password', 'confirmPassword')
          });
        } // convenience getter for easy access to form fields

      }, {
        key: "onSignUp",
        value: function onSignUp() {
          var _this6 = this;

          this.submitted = true; // stop here if form is invalid

          if (this.registerForm.invalid) {
            //alert('NO SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
            return;
          } //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))


          var new_user = new _entities_user_entity__WEBPACK_IMPORTED_MODULE_4__["User"]();
          new_user.firstName = this.registerForm.get('firstName').value;
          new_user.lastName = this.registerForm.get('lastName').value;
          new_user.userName = this.registerForm.get('userName').value;
          new_user.email = this.registerForm.get('email').value;
          new_user.password = this.registerForm.get('password').value;
          return this.http.post("/Account/CreateUser", new_user, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8') //.set('application/x-www-form-urlencoded')

          }).subscribe( //Refreshing Reviews List on Products page,after new review was submited by calling product Service
          function (response) {
            _this6.Redirect();

            console.log(response);
          }, function (error) {
            alert("Could not create new user");
            console.log(error);
          });
        }
      }, {
        key: "Redirect",
        value: function Redirect() {
          alert("New User Created");
          this.router.navigate(['/login']); //console.log("Implement method to refresh UI");
        }
      }, {
        key: "f",
        get: function get() {
          return this.registerForm.controls;
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.component.html */
      "../node_modules/raw-loader/dist/cjs.js!./app/components/signup/signup.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.component.scss */
      "./app/components/signup/signup.component.scss"))["default"]]
    })], SignupComponent);
    /***/
  },

  /***/
  "./app/entities/order.entity.ts":
  /*!**************************************!*\
    !*** ./app/entities/order.entity.ts ***!
    \**************************************/

  /*! exports provided: Order */

  /***/
  function appEntitiesOrderEntityTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Order", function () {
      return Order;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");

    var Order = function Order() {
      _classCallCheck(this, Order);
    };
    /***/

  },

  /***/
  "./app/entities/reviewmodel.entity.ts":
  /*!********************************************!*\
    !*** ./app/entities/reviewmodel.entity.ts ***!
    \********************************************/

  /*! exports provided: ReviewModel */

  /***/
  function appEntitiesReviewmodelEntityTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReviewModel", function () {
      return ReviewModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");

    var ReviewModel = function ReviewModel() {
      _classCallCheck(this, ReviewModel);
    };
    /***/

  },

  /***/
  "./app/entities/user.entity.ts":
  /*!*************************************!*\
    !*** ./app/entities/user.entity.ts ***!
    \*************************************/

  /*! exports provided: User */

  /***/
  function appEntitiesUserEntityTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");

    var User = function User() {
      _classCallCheck(this, User);
    };
    /***/

  },

  /***/
  "./app/helpers/custom-validators.ts":
  /*!******************************************!*\
    !*** ./app/helpers/custom-validators.ts ***!
    \******************************************/

  /*! exports provided: CustomValidators */

  /***/
  function appHelpersCustomValidatorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomValidators", function () {
      return CustomValidators;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");

    var CustomValidators =
    /*#__PURE__*/
    function () {
      function CustomValidators() {
        _classCallCheck(this, CustomValidators);
      }

      _createClass(CustomValidators, null, [{
        key: "patternValidator",
        value: function patternValidator(regex, error) {
          return function (control) {
            if (!control.value) {
              // if control is empty return no error
              return null;
            } // test the value of the control against the regexp supplied


            var valid = regex.test(control.value); // if true, return no error (no error), else return error passed in the second parameter

            return valid ? null : error;
          };
        }
      }]);

      return CustomValidators;
    }();
    /***/

  },

  /***/
  "./app/helpers/must-match.validator.ts":
  /*!*********************************************!*\
    !*** ./app/helpers/must-match.validator.ts ***!
    \*********************************************/

  /*! exports provided: MustMatch */

  /***/
  function appHelpersMustMatchValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MustMatch", function () {
      return MustMatch;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js"); // custom validator to check that two fields match


    function MustMatch(controlName, matchingControlName) {
      return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
        } // set error on matchingControl if validation fails


        if (control.value !== matchingControl.value) {
          matchingControl.setErrors({
            mustMatch: true
          });
        } else {
          matchingControl.setErrors(null);
        }
      };
    }
    /***/

  },

  /***/
  "./app/pipes/filter.pipe.ts":
  /*!**********************************!*\
    !*** ./app/pipes/filter.pipe.ts ***!
    \**********************************/

  /*! exports provided: FilterPipe */

  /***/
  function appPipesFilterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterPipe", function () {
      return FilterPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");

    var FilterPipe =
    /*#__PURE__*/
    function () {
      function FilterPipe() {
        _classCallCheck(this, FilterPipe);
      }

      _createClass(FilterPipe, [{
        key: "transform",
        value: function transform(products, term, selected_category) {
          var categorized_products; //filter by category

          if (selected_category === "All Categories") categorized_products = products;else {
            categorized_products = products.filter(function (product) {
              return product.category === selected_category;
            });
          } //check if search term is undefined

          if (term === undefined) return categorized_products; //return all products
          //else filter by title

          return categorized_products.filter(function (product) {
            return product.title.toLowerCase().includes(term.toLowerCase());
          });
        }
      }]);

      return FilterPipe;
    }();

    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'filter'
    })], FilterPipe);
    /***/
  },

  /***/
  "./app/services/item.service.ts":
  /*!**************************************!*\
    !*** ./app/services/item.service.ts ***!
    \**************************************/

  /*! exports provided: ItemService */

  /***/
  function appServicesItemServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemService", function () {
      return ItemService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./product.service */
    "./app/services/product.service.ts");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! lodash */
    "../node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);

    var ItemService =
    /*#__PURE__*/
    function () {
      function ItemService(productService) {
        _classCallCheck(this, ItemService);

        this.productService = productService;
        this.loggedIn = false;
        this.items = [];
        this.total = 0;
      }

      _createClass(ItemService, [{
        key: "loadCart",
        value: function loadCart() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var cart, i, item;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    this.total = 0;
                    this.items = [];
                    _context6.next = 4;
                    return JSON.parse(localStorage.getItem('cart'));

                  case 4:
                    cart = _context6.sent;

                    for (i = 0; i < cart.length; i++) {
                      item = JSON.parse(cart[i]);
                      this.items.push({
                        product: item.product,
                        quantity: item.quantity
                      });
                      this.total += item.product.price * item.quantity;
                    }

                  case 6:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "add",
        value: function add(id, prod_quantity) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var item, cart, _cart2, index, i, _item3, _item4;

            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.productService.find(id);

                  case 2:
                    _context7.t0 = _context7.sent;
                    _context7.t1 = prod_quantity;
                    item = {
                      product: _context7.t0,
                      quantity: _context7.t1
                    };
                    _context7.next = 7;
                    return localStorage.getItem('cart');

                  case 7:
                    _context7.t2 = _context7.sent;

                    if (!(_context7.t2 == null)) {
                      _context7.next = 15;
                      break;
                    }

                    cart = [];
                    cart.push(JSON.stringify(item));
                    _context7.next = 13;
                    return localStorage.setItem('cart', JSON.stringify(cart));

                  case 13:
                    _context7.next = 41;
                    break;

                  case 15:
                    _context7.t3 = JSON;
                    _context7.next = 18;
                    return localStorage.getItem('cart');

                  case 18:
                    _context7.t4 = _context7.sent;
                    _cart2 = _context7.t3.parse.call(_context7.t3, _context7.t4);
                    index = -1;
                    i = 0;

                  case 22:
                    if (!(i < _cart2.length)) {
                      _context7.next = 30;
                      break;
                    }

                    _item3 = JSON.parse(_cart2[i]);

                    if (!(_item3.product.id == id)) {
                      _context7.next = 27;
                      break;
                    }

                    index = i;
                    return _context7.abrupt("break", 30);

                  case 27:
                    i++;
                    _context7.next = 22;
                    break;

                  case 30:
                    if (!(index == -1)) {
                      _context7.next = 36;
                      break;
                    }

                    _cart2.push(JSON.stringify(item));

                    _context7.next = 34;
                    return localStorage.setItem('cart', JSON.stringify(_cart2));

                  case 34:
                    _context7.next = 41;
                    break;

                  case 36:
                    _item4 = JSON.parse(_cart2[index]);
                    _item4.quantity += prod_quantity;
                    _cart2[index] = JSON.stringify(_item4);
                    _context7.next = 41;
                    return localStorage.setItem("cart", JSON.stringify(_cart2));

                  case 41:
                    this.loadCart();

                  case 42:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "remove",
        value: function remove(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            var cart, i, item;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return JSON.parse(localStorage.getItem('cart'));

                  case 2:
                    cart = _context8.sent;
                    i = 0;

                  case 4:
                    if (!(i < cart.length)) {
                      _context8.next = 12;
                      break;
                    }

                    item = JSON.parse(cart[i]);

                    if (!(item.product.id == id)) {
                      _context8.next = 9;
                      break;
                    }

                    cart.splice(i, 1);
                    return _context8.abrupt("break", 12);

                  case 9:
                    i++;
                    _context8.next = 4;
                    break;

                  case 12:
                    _context8.next = 14;
                    return localStorage.setItem("cart", JSON.stringify(cart));

                  case 14:
                    _context8.next = 16;
                    return this.loadCart();

                  case 16:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "subtotal",
        value: function subtotal() {
          return lodash__WEBPACK_IMPORTED_MODULE_3__["sum"](lodash__WEBPACK_IMPORTED_MODULE_3__["map"](this.items, function (i) {
            return i.product.price * i.quantity;
          }));
        }
      }]);

      return ItemService;
    }();

    ItemService.ctorParameters = function () {
      return [{
        type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
      }];
    };

    ItemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ItemService);
    /***/
  },

  /***/
  "./app/services/order.service.ts":
  /*!***************************************!*\
    !*** ./app/services/order.service.ts ***!
    \***************************************/

  /*! exports provided: OrderService */

  /***/
  function appServicesOrderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderService", function () {
      return OrderService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "../node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./item.service */
    "./app/services/item.service.ts");
    /* harmony import */


    var _entities_order_entity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../entities/order.entity */
    "./app/entities/order.entity.ts");

    var OrderService =
    /*#__PURE__*/
    function () {
      function OrderService(http, itemService) {
        _classCallCheck(this, OrderService);

        this.http = http;
        this.itemService = itemService;
        this.token = "";
      }

      _createClass(OrderService, [{
        key: "prepareNewOrder",
        value: function prepareNewOrder() {
          this.new_order = new _entities_order_entity__WEBPACK_IMPORTED_MODULE_5__["Order"]();
          var today = new Date();
          var dd = String(today.getDate()).padStart(2, '0');
          var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!

          var yyyy = today.getFullYear();
          this.new_order.orderNumber = "ORD-" + mm + '-' + dd + '-' + yyyy;
          this.new_order.orderDate = mm + '-' + dd + '-' + yyyy;
          this.new_order.items = this.itemService.items;
        }
      }, {
        key: "loadOrders",
        value: function loadOrders() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.http.get("/api/orders", {
                      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("Authorization", "Bearer " + this.token).set('Content-Type', 'application/json; charset=utf-8')
                    }).toPromise();

                  case 2:
                    this.ordersList = _context9.sent;

                  case 3:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "findAll",
        value: function findAll() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee10() {
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.loadOrders();

                  case 2:
                    return _context10.abrupt("return", this.ordersList);

                  case 3:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "checkout",
        value: function checkout() {
          var _this7 = this;

          this.prepareNewOrder();
          return this.http.post("api/Orders", this.new_order, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("Authorization", "Bearer " + this.token).set('Content-Type', 'application/json; charset=utf-8')
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            alert("Your Order was Submited,Thank you!");
            _this7.new_order = new _entities_order_entity__WEBPACK_IMPORTED_MODULE_5__["Order"](); //Reset Order

            _this7.itemService.items = []; //Reset Shopping Cart

            localStorage.removeItem('cart'); //Reset Local storage

            return true;
          }));
        }
      }, {
        key: "login",
        value: function login(creds) {
          var _this8 = this;

          return this.http.post("/Account/CreateToken", creds).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            _this8.token = data.token;
            _this8.tokenExpiration = data.expiration; //this.currentUser = creds.username;

            return true;
          }));
        }
      }, {
        key: "resetToken",
        value: function resetToken() {
          this.token = "";
        }
      }, {
        key: "loginRequired",
        get: function get() {
          return this.token.length == 0 || this.tokenExpiration > new Date();
        }
      }]);

      return OrderService;
    }();

    OrderService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"]
      }];
    };

    OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], OrderService);
    /***/
  },

  /***/
  "./app/services/product.service.ts":
  /*!*****************************************!*\
    !*** ./app/services/product.service.ts ***!
    \*****************************************/

  /*! exports provided: ProductService */

  /***/
  function appServicesProductServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductService", function () {
      return ProductService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "../node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js"); //import { map } from "rxjs/operators";
    //import { Observable } from "rxjs";


    var ProductService =
    /*#__PURE__*/
    function () {
      function ProductService(http) {
        _classCallCheck(this, ProductService);

        this.http = http;
        this.products = [];
        this.selectedCategory = "All Categories";
      }

      _createClass(ProductService, [{
        key: "loadProducts",
        value: function loadProducts() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee11() {
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.http.get("/api/products").toPromise();

                  case 2:
                    this.products = _context11.sent;

                  case 3:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "findAll",
        value: function findAll() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee12() {
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return this.loadProducts();

                  case 2:
                    return _context12.abrupt("return", this.products);

                  case 3:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        } //loadProducts(): Observable<boolean> {
        //    console.log("got here")
        //    return this.http.get("/api/products")
        //        .pipe(
        //            map((data: any[]) => {
        //                this.products = data;
        //                return true;
        //            })
        //        );
        //}

      }, {
        key: "find",
        value: function find(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee13() {
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return this.getSelectedIndex(id);

                  case 2:
                    _context13.t0 = _context13.sent;
                    return _context13.abrupt("return", this.products[_context13.t0]);

                  case 4:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }, {
        key: "getProductsByCategory",
        value: function getProductsByCategory(ctg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee14() {
            var i;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    this.search_results = [];

                    for (i = 0; i < this.products.length; i++) {
                      if (this.products[i].category == ctg) {
                        this.search_results.push(this.products[i]);
                      }
                    }

                  case 2:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }, {
        key: "getSelectedIndex",
        value: function getSelectedIndex(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee15() {
            var i;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    i = 0;

                  case 1:
                    if (!(i < this.products.length)) {
                      _context15.next = 7;
                      break;
                    }

                    if (!(this.products[i].id == id)) {
                      _context15.next = 4;
                      break;
                    }

                    return _context15.abrupt("return", i);

                  case 4:
                    i++;
                    _context15.next = 1;
                    break;

                  case 7:
                    return _context15.abrupt("return", -1);

                  case 8:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      }, {
        key: "averageRating",
        value: function averageRating(p) {
          if (p.reviews.length) {
            var total = 0;

            for (var i = 0; i < p.reviews.length; i++) {
              total += p.reviews[i].rating;
            }

            return total / p.reviews.length;
          } else return 0;
        }
      }, {
        key: "round",
        value: function round(n) {
          return Math.floor(n);
        }
      }]);

      return ProductService;
    }();

    ProductService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], ProductService);
    /***/
  },

  /***/
  "./environments/environment.ts":
  /*!*************************************!*\
    !*** ./environments/environment.ts ***!
    \*************************************/

  /*! exports provided: environment */

  /***/
  function environmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./main.ts":
  /*!*****************!*\
    !*** ./main.ts ***!
    \*****************/

  /*! no exports provided */

  /***/
  function mainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "../node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***********************!*\
    !*** multi ./main.ts ***!
    \***********************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Roman Mayerson\source\repos\ElectroShop-Core\ClientApp\main.ts */
    "./main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map