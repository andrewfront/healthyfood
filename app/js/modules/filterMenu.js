const filterMenu = () => {
    const cardsCenter = document.querySelector('.menu__inner')
    let cardsAmount = document.querySelector('.amount')
    let cardsTotal = document.querySelector('.total')
    const cartContent = document.querySelector('.header__cart-wrapper')
    const cartOverlay = document.querySelector('.header__cart-overlay')
    const clearCart = document.querySelector('.footer__reset')
    const cartBtn = document.querySelector('.header__cart')
    let cartCounter = document.querySelector('.header__cart-count')
    let cart = []
    let buttonsDOM = []
    let productArray = []
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
            <div class="menu__item ${product.category}" data-pid="${product.id}">
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
    filterProducts() {
        const menuItems = document.querySelectorAll('.menu__item')
        const filterBtns = [...document.querySelectorAll('.menu__btn')]
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                let btnCategory = e.currentTarget.dataset.id
                menuItems.forEach(elem => {
                    elem.classList.remove('hideItem')
                    elem.classList.add('showItem')
                    if (!elem.classList.contains(btnCategory) && btnCategory!== 'all') {
                        elem.classList.add('hideItem')
                        elem.classList.remove('showItem')
                    }
                })
            })
        })

    }
    getBagButtons() {
        const cartBtns = [...document.querySelectorAll('.menu__addtocart')]
        buttonsDOM = cartBtns
        cartBtns.forEach(button => {
            let id = button.dataset.id
            let inCart = cart.find(item => item.id === id)
            if (inCart) {
                button.innerText = 'In cart'
                button.disabled = true
            }
                button.addEventListener('click', (e) => {
                    e.target.innerText = 'In Cart'
                    button.disabled = true
                    //получить продукты
                    let cartItem = {...Storage.getProduct(id), amount: 1}
                    //добавить в корзину
                    cart = [...cart, cartItem]
                    //добавить в локальное хранилище
                    Storage.saveCart(cart)
                    //установить значение карточек
                    this.setCartValues(cart)
                    //отобразить карточку
                    this.addCartItem(cartItem)
                    //показать карточку
                    // this.showCart()
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
        cartCounter.innerText = itemsTotal
        if (cardsAmount.innerText === '0') {
            this.hideCart()
        }
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
    <button type="button" class="header__cart-close">&#10008</button>
    <img src="images/cart/delete.svg" alt="bucket" class="header__cart-remove" data-id=${item.id}>
    <div class="header__item-count">
    <img src="images/cart/up.svg" alt="" class="header__arrow header__item-up" data-id=${item.id}>
    <span class="header__item-number">${item.amount}</span>
    <img src="images/cart/low.svg" alt="" class="header__arrow header__item-low" data-id=${item.id}>
</div>
    `
    cartContent.appendChild(div)
    }
    showCart() {
    cartOverlay.classList.add('showCart')
    }
    setupAPP() {
    cart = Storage.getCart()
    this.setCartValues(cart)
    this.populateCart(cart)
    cartBtn.addEventListener('click', () => {
        if (cartContent.children.length > 0) {
            this.showCart()
        } else if (cartContent.children.length < 0) {
            this.hideCart()
        }
    })
    }
    populateCart(cart) {
        cart.forEach(item => this.addCartItem(item))
    }
    hideCart() {
        cartOverlay.classList.remove('showCart')
    }
    animateCart() {
        const menuItem = document.querySelectorAll('.menu__item')
        menuItem.forEach(item => {
            let getButton = item.querySelector('.menu__addtocart')
            getButton.addEventListener('click', (e) => {
                e.preventDefault()
                let productImage = item.querySelector(".menu__img")
                let productImageFly = productImage.cloneNode(true)
                let imageFlyWidth = productImage.offsetWidth
                let imageFlyHeight = productImage.offsetHeight
                let imageFlyTop = productImage.getBoundingClientRect().top
                let imageFlyLeft = productImage.getBoundingClientRect().left
                productImageFly.setAttribute('class', 'flyImage')
                productImageFly.style.cssText = `
                width: ${imageFlyWidth}px;
                height: ${imageFlyHeight}px;
                left: ${imageFlyLeft}px;
                top: ${imageFlyTop}px;
                `
                document.body.append(productImageFly)
                const cartFlyLeft = cartCounter.getBoundingClientRect().left
                const cartFlyTop = cartCounter.getBoundingClientRect().top
                productImageFly.style.cssText = `
                left: ${cartFlyLeft}px;
                top: ${cartFlyTop}px;
                width: 0px;
                height: 0px;
                opacity: 0;
                `
                productImageFly.addEventListener('transitionend', () => {
                    if (getButton.disabled = true) {
                        productImageFly.remove()
                    }
                })
            })
        })

    }
    getSendForm() {
        cart = Storage.getCart()
        let title = cart.map(item => item.title)
        let price = cart.map(item => item.price)
        let itemsAmount = cart.map(item => item.amount)
        let totalSum = cardsTotal.textContent
        let priceTotal = `Total price ${totalSum}`
        let objSend = {}
        objSend.title = title
        objSend.price = price
        objSend.productsAmount = itemsAmount
        objSend.totalPrice = priceTotal
        productArray.push(objSend)
            }
            sendForm() {
                document.querySelector('.header__cart-footer__order').addEventListener('submit', (e) => {
                    e.preventDefault()
                    let self = e.currentTarget
                    let Data = new FormData(self)
                    let name = self.querySelector('[name="person-name"]').value
                    let phone = self.querySelector('[name="person-phone"]').value
                    let email = self.querySelector('[name="person-email"]').value
                    Data.append('Goods', JSON.stringify(productArray))
                    Data.append('person-name', name)
                    Data.append('person-phone', phone)
                    Data.append('person-email', email)
                    let validate = function(selector, rules, successModal, yaGoal) {
                        new window.JustValidate(selector, {
                            rules: rules,
                            submitHandler: function(self) {
                                // let formData = new FormData(self)
                                let xhr = new XMLHttpRequest()
                                xhr.onreadystatechange = function() {
                                    if (xhr.readyState === 4) {
                                        if (xhr.status === 200) {
                                            console.log('Your order has been send')
                                        } else {
                                            console.log('PLease try again');
                                        }
                                    }
                                }
                                xhr.open("POST", "mail.php", true)
                                xhr.send(Data)
                                self.reset()
                            }
                        });
                    }
                    validate('.header__cart-footer__order', {email: {required: true, email: true}, tel: {required: true, tel: true}}, '.thanks-popup', '.send goal')
                    // Пример отправки
                    // let xhr = new XMLHttpRequest()
                    // xhr.onreadystatechange = function() {
                    //     if (xhr.readyState === 4) {
                    //         if (xhr.status === 200) {
                    //             console.log('Your order has been send')
                    //         }
                    //     }
                    // }
                    // xhr.open('POST', 'mail.php', true)
                    // xhr.send(formData)
                    // self.reset()
                })
            }
 cartLogic() {
    clearCart.addEventListener('click', (e) => {
    e.preventDefault()
        this.clearCart()
        this.hideCart()

})
cartContent.addEventListener('click', (event) => {
    if (event.target.classList.contains('header__cart-close')) {
        this.hideCart()
    } else if (event.target.classList.contains('header__item-up')) {
        let addAmount = event.target
        let id = addAmount.dataset.id
        let tempItem = cart.find(item => item.id === id)
        tempItem.amount = tempItem.amount +1
        Storage.saveCart(cart)
        this.setCartValues(cart)
        addAmount.nextElementSibling.innerText = tempItem.amount
    } else if (event.target.classList.contains('header__item-low')) {
        let lowerAmount = event.target
        let id = lowerAmount.dataset.id
        let tempItem = cart.find(item => item.id === id)
        tempItem.amount = tempItem.amount -1
        if (tempItem.amount > 0) {
            Storage.saveCart(cart)
            this.setCartValues(cart)
            lowerAmount.previousElementSibling.innerText = tempItem.amount
        } else {
            cartContent.removeChild(lowerAmount.parentElement.parentElement)
            this.removeItem(id)
        }
    }
    if (event.target.classList.contains('header__cart-remove')) {
        let removeItem = event.target
        let id = removeItem.dataset.id
        cartContent.removeChild(removeItem.parentElement)
        this.removeItem(id)
        if (cartContent.children.length <= 0) {
            this.hideCart()
        }
    }
})
    }
    clearCart() {
        let cartItems = cart.map(item => item.id)
        cartItems.forEach(id => this.removeItem(id))
        while(cartContent.children.length > 0) {
            cartContent.removeChild(cartContent.children[0])
        }
        this.hideCart()
    }
    removeItem(id) {
        cart = cart.filter(item => item.id !==id)
        this.setCartValues(cart)
        Storage.saveCart(cart)
        let button = this.getSingleButton(id)
        button.disabled = false
        button.innerText = 'Add to cart'

    }
    getSingleButton(id) {
    return buttonsDOM.find(button => button.dataset.id === id)
    }
    validatePhone() {
        const maskPhone = document.querySelector('.phoneinput')
        const im = new Inputmask("+7 (999) 999 99 99", { showMaskOnHover: false });
        im.mask(maskPhone);
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
    ui.setupAPP()
    products.getProducts().then(products => {
        ui.displayProducts(products)
        // ui.animateCart(products)
        ui.filterProducts(products)
        Storage.saveProducts(products)
        ui.animateCart(products)
    })
    .then(() => {
        ui.getBagButtons()
        ui.cartLogic()
        ui.getSendForm()
        ui.sendForm()
        ui.validatePhone()
    })
    }
    export default filterMenu