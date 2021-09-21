import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [{
            "id": 1,
            "name": "Fridge",
            "createdAt": "2021-09-20T17:01:57.989Z",
            "updatedAt": "2021-09-20T17:01:57.989Z"
        }, {
            "id": 2,
            "name": "Smartphone",
            "createdAt": "2021-09-20T17:02:25.797Z",
            "updatedAt": "2021-09-20T17:02:25.797Z"
        }, {
            "id": 3,
            "name": "Washing machine",
            "createdAt": "2021-09-21T01:16:12.184Z",
            "updatedAt": "2021-09-21T01:16:12.184Z"
        }]

        this._brands = [{
            "id": 1,
            "name": "Samsung",
            "createdAt": "2021-09-20T17:11:15.589Z",
            "updatedAt": "2021-09-20T17:11:15.589Z"
        }, {
            "id": 2,
            "name": "Apple",
            "createdAt": "2021-09-20T17:11:47.100Z",
            "updatedAt": "2021-09-20T17:11:47.100Z"
        }, {"id": 3, "name": "Haier", "createdAt": "2021-09-20T20:49:05.283Z", "updatedAt": "2021-09-20T20:49:05.283Z"}]

        this._devices = {
            "count": 2,
            "rows": [{
                "id": 1,
                "name": "Galaxy S21 5G 256 ГБ серый фантом",
                "price": 73990,
                "rating": 0,
                "img": "b1c8dc53-b3cd-4ddf-b478-479132b76060.jpg",
                "createdAt": "2021-09-20T19:20:35.841Z",
                "updatedAt": "2021-09-20T19:20:35.841Z",
                "typeId": 2,
                "brandId": 1
            }, {
                "id": 2,
                "name": "Двухкамерный холодильник Haier C2F 637 CXRG",
                "price": 45990,
                "rating": 0,
                "img": "daaf359b-0035-4e1d-8ab3-f5f5b962ba96.jpg",
                "createdAt": "2021-09-20T20:49:45.183Z",
                "updatedAt": "2021-09-20T20:49:45.183Z",
                "typeId": 1,
                "brandId": 3
            }]
        }
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }

}