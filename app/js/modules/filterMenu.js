const filterMenu = () => {
    const cardsCenter = document.querySelector('.menu__inner')
    let cardsAmount = document.querySelector('.amount')
    let cardsTotal = document.querySelector('.total')
    const cartContent = document.querySelector('.header__cart-wrapper')
    const cartOverlay = document.querySelector('.header__cart-overlay')
    const footerReset = document.querySelector('.footer__reset')
    const closeCardBtn = document.querySelector('.header__cart-close')
    const cartBtn = document.querySelector('.header__cart')
    let cart = []
    let buttonsDOM = []
    class Products {
        async getProducts() {
            try {
                let result = await fetch('../products.json')
                let data = await result.json()
                let products = data.items
                products = products.map(item => {
                    const {title, price} = item.fields
                    const {id, category} = item.sys
                    const image = item.fields.image.fields.file.url
                    return {title, price, id, category, image}
                })
                return products
            } catch (error) {
                console.log(error);
            }
        }
    }
    class UI {
    displayProducts(products) {
        let result = ''
        products.forEach(product => {
            result += `
            <div class="menu__item">
            <img src=${product.image} alt="menu" class="menu__img">
        <div class="menu__content">
                <div class="menu__subtitle">${product.title}</div>
                <div class="menu__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro architecto reprehenderit</div>
            <div class="menu__info">
            <div class="menu__amount">Price</div>
                <div class="menu__price">${product.price}$</div>
            </div>
                <button type="button" class="menu__addtocart" data-id=${product.id}>Add to cart</button>
            </div>
         </div>
            `
        })
        cardsCenter.innerHTML = result
    }
    // filterProducts(products) {
    //     const filterBtns = [...document.querySelectorAll('.menu__btn')]
    //     filterBtns.forEach(btn => {
    //         btn.addEventListener('click', (e) => {
    //             const categories = e.currentTarget.dataset.id
    //             console.log(products.category);
    //         })
    //     })
    // }
    getBagButtons() {
        const cartBtns = [...document.querySelectorAll('.menu__addtocart')]
        buttonsDOM = cartBtns
        cartBtns.forEach(button => {
            let id = button.dataset.id
            let inCart = cart.find(item => item.id === id)
            if (inCart) {
                button.innerText = 'add more'
            }
                button.addEventListener('click', (e) => {
                    e.target.innerText = 'Add More'
                    //получить продукты
                    let cartItem = {...Storage.getProduct(id), amount: 1}
                    //добавить в корзину
                    cart = [...cart, cartItem]
                    console.log(cart);
                    //добавить в локальное хранилище
                    Storage.saveCart(cart)
                    //установить значение карточек
                    this.setCartValues(cart)
                    //отобразить карточку
                    this.addCartItem(cartItem)
                    //показать карточку
                    this.showCart()
                })
        })
    }
     setCartValues(cart) {

        let tempTotal = 0
        let itemsTotal = 0
        cart.map(item => {
            tempTotal += item.price * item.amount
            itemsTotal += item.amount
        })
        cardsTotal.innerText = parseFloat(tempTotal.toFixed(2))
        cardsAmount.innerText = itemsTotal
    }
    addCartItem(item) {
    const div = document.createElement('div')
    div.classList.add('header__cart-content')
    div.innerHTML = `
    <img src=${item.image} alt="product" class="header__cart-image">
    <div class="header__cart-info">
        <div class="header__cart-flex">
        <div class="header__cart-title">${item.title}</div>
        <div class="header__cart-price">${item.price} $</div>
    </div>
    </div>
    <img src="images/cart/close.svg" alt="close" class="header__cart-close">
    <img src="images/cart/delete.svg" alt="bucket" class="header__cart-remove">
    `
    cartContent.appendChild(div)
    }
    showCart() {
    cartOverlay.classList.add('showCart')
    }
    setupAPP() {
    cart = Storage.getCart()
    this.setCartValues()
    this.populateCart(cart)
    cartBtn.addEventListener('click', this.showCart)
    closeCardBtn.addEventListener('click', this.hideCart)
    }
    populateCart(cart) {
        cart.forEach(item => this.addCartItem(item))
    }
    hideCart() {
        cartOverlay.classList.remove('showCart')
    }
    }
    class Storage {
    static saveProducts(products) {
        localStorage.setItem("products", JSON.stringify(products))
    }
    static getProduct(id) {
        let products = JSON.parse(localStorage.getItem('products'))
        return products.find(product => product.id === id)
    }
    static saveCart(cart) {
        localStorage.setItem('cart', JSON.stringify(cart))
    }
    static getCart() {
        return localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[]
    }
    }
    const ui = new UI()
    const products = new Products()
    // настройка приложения
    // ui.setupAPP()
    products.getProducts().then(products => {
        ui.displayProducts(products)
        Storage.saveProducts(products)
    })
    .then(() => {
        ui.getBagButtons()
    })
    }
    export default filterMenu