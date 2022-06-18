import Sauce from './page.sauce';

class InventorySauce extends Sauce {
    open () {
        return super.open('/inventory.html');
    }
}

export default new InventorySauce();
