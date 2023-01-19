// Custom Scripts
const items = document.querySelectorAll('.item')




items.forEach((item, index) => {
    const subname = item.querySelector('.item__subname')
    const card = item.parentNode
    const action = card.querySelector('.card__action')
    const actionButton = action.querySelector('button')
    
     if(item.classList.contains('empty')){
        let emptyTxt 
        switch (index) {
            case 0:
                emptyTxt = 'фуа-гра'
                break;
            case 1:
                emptyTxt = 'рыбой'
                break;
            case 2:
                emptyTxt = 'курой'
                break;
    
            default:
                break;
        }
        action.textContent=''
        action.append(`Печалька, с ${emptyTxt} закончился.`)
        action.style.color = '#FFFF66'
     }

    let actionTxt
    switch (index) {
        case 0:
            actionTxt = 'Печень утки разварная с артишоками.'
            break;
        case 1:
            actionTxt = 'Головы щучьи с чесноком да свежайшая сёмгушка.'
            break;
        case 2:
            actionTxt = 'Филе из цыплят с трюфелями в бульоне.'
            break;

        default:
            break;
    }

      
    actionButton.addEventListener('click', ()=>{
        item.classList.add('target')
        action.textContent=''
        action.append(actionTxt)
    })

    item.addEventListener('click', () => {  
        if (item.classList.contains('empty')) {
            return
        }

        if (item.classList.contains('target')) {
            subname.style.color = '#666666'
            subname.textContent = 'Сказочное заморское яство'
           
            action.textContent = 'Чего сидишь? Порадуй котэ,'
            const p = document.createElement('p')
            const button = document.createElement('button')
            button.addEventListener('click', ()=>{
                item.classList.add('target')
                action.textContent=''
                action.append(actionTxt)
            })
            button.textContent = 'купи'
            p.textContent = '.'
            p.prepend(button)
            action.append(p)
        }else{
            action.textContent=''
            action.append(actionTxt)
        }
        item.classList.toggle('target')
    })


    item.addEventListener('mouseenter', () => {
        
        if (item.classList.contains('empty')) {
            return
        }

        if (item.classList.contains('target')) {
            subname.style.color = '#D91667'
            subname.textContent = 'Котэ не одобряет?'
        }
    })
    item.addEventListener('mouseleave', () => {
           
        if (item.classList.contains('empty')) {
            return
        }
        if (item.classList.contains('target')) {
            subname.style.color = '#666666'
            subname.textContent = 'Сказочное заморское яство'
        }
    })


})





