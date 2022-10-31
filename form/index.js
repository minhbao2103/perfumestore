let $ = document.querySelector.bind(document)
let $$ = document.querySelectorAll.bind(document)

let tabs = $$('.tab-item')
let panes = $$('.tab-pane')
let line =  $('.tabs .line')

tabs.forEach(function (tab,index) {
   let pane = panes[index]
   tab.onclick = function () {
      let tabActive = $('.tab-item.active')
      let tabContentActive = $('.tab-pane.active')
    
      line.style.left = tab.offsetLeft + 'px'
      line.style.width = tab.offsetWidth + 'px'

      tabContentActive.classList.remove('active')
      tabActive.classList.remove('active')
      
      tab.classList.add('active')
      pane.classList.add('active')
   }
})


    
function validators (options) {
   let formElement = document.querySelector(options.form)
     if(formElement) {
      formElement.onsubmit = function(e) {
            e.preventDefault()
      }
        options.rules.forEach((rule) => {
           let inputElement = formElement.querySelector(rule.selector)
           let errorElement = inputElement.parentElement.querySelector('.form-message')
           if(inputElement) {
            inputElement.onblur = function() {
               let errorMessage = rule.test(inputElement.value)
               if(errorMessage) {
                  errorElement.innerText = errorMessage
               }else {
                  errorElement.innerText = ''
               }
            }

            inputElement.oninput = function() {
               errorElement.innerText = ''
            }
           }
        })
     }
  }

  validators.isRequired = function (selector) {
       return {
                 selector:selector,
                 test : function(value) {
                  let nameRegex = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/
                  return nameRegex.test(value) ? undefined : 'Vui lòng nhập họ và tên đầy đủ.'
                 }
       } 
  }

  validators.isEmail = function (selector) {
       return {
                 selector:selector,
                 test : function(value) {
                  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                  return emailRegex.test(value) ? undefined : 'Trường này phải là Email.'
                 }
       } 
  }

  validators.isPassword = function(selector) {
      return {
            selector:selector,
            test : function(value) {
               return value.length < 6 ?' Vui lòng nhập ít nhất 6 ký tự' : undefined
            }
      }
  }

  validators.isPasswordConfirm = function (selector,confirmValue) {
      return {
         selector:selector, 
         test : function(value) {
               return value === confirmValue() ? undefined :'Giá trị nhập lại không chính xác'
         }
      }
  }

