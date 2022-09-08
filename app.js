const searchIteam = () => {
    const searchBox = document.getElementById('input').value.toUpperCase();
    const storeIteam = document.getElementById('product-list')
    const product = document.querySelectorAll('.product');
    const productName = storeIteam.getElementsByTagName('h4')

    for(let i = 0; i <productName.length; i++){
        
        const match = product[i].getElementsByTagName('h4')[0]
        if(match){
            let textValue = match.textContent || match.innerHTML
            
            if(textValue.toUpperCase().indexOf(searchBox) > -1 ) {
                product[i].style.display = '';
            } else {
                product[i].style.display = 'none'
            }
        }
    }
}