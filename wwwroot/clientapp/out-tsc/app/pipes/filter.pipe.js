import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
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
        //else filter by title
        return categorized_products.filter((product) => {
            return product.title.toLowerCase().includes(term.toLowerCase());
        });
    }
};
FilterPipe = tslib_1.__decorate([
    Pipe({
        name: 'filter'
    })
], FilterPipe);
export { FilterPipe };
//# sourceMappingURL=filter.pipe.js.map