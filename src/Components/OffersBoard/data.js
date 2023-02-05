import Watch from '../../Assest/Images/watch-offer-img.png'
import Laptop from '../../Assest/Images/laptop-offer-img.png'
import Camera from '../../Assest/Images/camera-offer-img.png'
import Headphone from '../../Assest/Images/headphone-offer-img.png'
import Phone from '../../Assest/Images/phone-offer-img.png'
import IdRandomGenerator from '../../Utils/IdRandomGenerator'

export const OffersData = [
    { id: IdRandomGenerator(), img: Watch, productName: "Smart watches", offer: 25, price: 102, countOfStack: 50 },
    { id: IdRandomGenerator(), img: Laptop, productName: "Laptops", offer: 45, price: 50, countOfStack: 50 },
    { id: IdRandomGenerator(), img: Camera, productName: "GoPro cameras", offer: 15, price: 30, countOfStack: 50 },
    { id: IdRandomGenerator(), img: Headphone, productName: "Headphones", offer: 5, price: 102, countOfStack: 50 },
    { id: IdRandomGenerator(), img: Phone, productName: "Phone", offer: 35, price: 102, countOfStack: 50 },
]