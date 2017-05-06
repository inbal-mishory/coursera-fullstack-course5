(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
        var toBuy = this;
         toBuy.itemName = "";
         toBuy.quantity = "";

        toBuy.removeItemToBuy = function(itemIndex,itemName,quantity) {
            ShoppingListCheckOffService.removeItemToBuy(itemIndex,itemName,quantity);
        };
        toBuy.items = ShoppingListCheckOffService.getItemsToBuy();
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var alreadyBought = this;
        alreadyBought.itemName = "";
        alreadyBought.itemQuantity = "";

        alreadyBought.items = ShoppingListCheckOffService.getItemsBought();

        alreadyBought.removeItem = function (itemIndex) {
            ShoppingListCheckOffService.removeItem(itemIndex);
        };
    };

    function ShoppingListCheckOffService(){
        var service = this,
            //list of shopping items
            itemsToBuy = [
                { name: "cookies", quantity: 10 },
                { name: "fizzy drinks", quantity: 3 },
                { name: "chips", quantity: 5 },
                { name: "doritos", quantity: 5 },
                { name: "jelly beans", quantity: 20 }
            ],
            itemsBought = [];

        service.removeItemToBuy = function (itemIndex,itemName,quantity) {
            var item = {
                name: itemName,
                quantity: quantity
            };
            itemsBought.push(item);
            itemsToBuy.splice(itemIndex, 1);
        };

        service.getItemsToBuy = function () {
            return itemsToBuy;
        };
        service.getItemsBought = function () {
            return itemsBought;
        };
    }
})();