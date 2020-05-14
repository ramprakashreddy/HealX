import { observable } from 'mobx';

class Store {
    @observable userName = '';
    @observable data1 = 0;
    @observable userData = 0;
}

export default new Store;