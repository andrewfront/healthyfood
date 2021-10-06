const mail = () => {
    const phoneMask = document.querySelector('.order__phone')
    const im = new Inputmask("+7 (999) 999 99 99", { showMaskOnHover: false });
    im.mask(phoneMask);
    let validateForms = function(selector, rules, successModal, yaGoal) {
        new window.JustValidate(selector, {
            rules: rules,
            submitHandler: function(form) {
                let formData = new FormData(form)
                let xhr = new XMLHttpRequest()
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            console.log('Отправлено')
                        }
                    }
                }
                xhr.open("POST", "mail.php", true)
                xhr.send(formData)
                form.reset()
            }
        });
    }
    validateForms('.order__form', {email: {required: true, email: true}, tel: {required: true, tel: true}}, '.thanks-popup', '.send goal')
}
export default mail