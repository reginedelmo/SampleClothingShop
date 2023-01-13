function viewItem(){
    fetch("data/data.json")
    .then(response => response.json())
    .then(data => {
        var item = '';
        for(items of data){
            item += '<div class="modal fade w-100 h-100" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">';
            item += '<div class="modal-dialog modal-dialog-centered modal-lg">';
            item += '<div class="modal-content">';
            item += '<div class="modal-header">';
            item += '<h1 class="modal-title fs-5" id="exampleModalLabel">Product View</h1>'
            item += '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>'
            item += '</div>'
            item += '<div class="modal-body">'
            item += '<div class="card mb-1 w-100 h-100">'
            item += '<div class="row g-0">'
            item += '<div class="col-md-4">'
            item += '<img src="'+items.picture+'" class="img-fluid rounded-start w-100 h-100" alt="'+items.name+'">'
            item += '</div>'
            item += '<div class="col-md-8">'
            item += '<div class="card-body">'
            item += '<h5 class="card-title">'+items.name+'</h5>'
            item += '<p class="card-text fw-light"><em>'+items.description+'</em></p>'
            item += '<p class="card-text fw-bolder fs-4">$'+items.price+'.90</p>'
            item += '<p class="card-text text-muted" style="font-size: 14px;">Available sizes:</p>'
            item += '<div class="btn-group" role="group" aria-label="Basic radio toggle button group">'
            item += '<input type="radio" class="btn-check" name="btnradio" id="btnradio0" autocomplete="off">'
            item += '<label class="btn btn-outline-dark" for="btnradio0">XS</label>'
            item += '<input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off">'
            item += '<label class="btn btn-outline-dark" for="btnradio1">S</label>'
            item += '<input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">'
            item += '<label class="btn btn-outline-dark" for="btnradio2">M</label>'
            item += '<input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">'
            item += '<label class="btn btn-outline-dark" for="btnradio3">L</label>'
            item += '<input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off">'
            item += '<label class="btn btn-outline-dark" for="btnradio4">XL</label>'
            item += '</div>'
            item += '</div>'
            item += '</div>'
            item += '</div>'
            item += '</div>'
            item += '</div>'
            item += '<div class="modal-footer">'
            item += '<button type="button" class="btn btn-dark float-end" id="liveAlertBtn"><i class="bi bi-cart-plus" style="font-size: 20px;"></i>Add to cart</button>'
            item += '</div>'
            item += '</div>'
            item += '</div>'
            item += '</div>'
        }
        document.getElementById('modalItem').innerHTML = item;
    })
}


    fetch("data/data.json")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        var wmn = '';

        for(items of data){
            if(items.category == "women"){
                wmn += '<div class="col-12 col-md-6 col-lg-4">';
                wmn += '<div class="card w-100 h-100" data-bs-toggle="modal" data-bs-target="#exampleModal" id="cardItem">';
                wmn += '<img src="'+items.picture+'" class="card-img-top w-100 h-100" alt="'+items.name+'">';
                wmn += '<div class="card-body">';
                wmn += '<p class="card-title text-center h5">'+items.name+'</p>';
                //wmn += '<p class="card-text" style="font-size: 12px;"><em>'+items.description+'</em></p>';
                wmn += '<hr>';
                wmn += '<h5 class="card-text text-start">$'+items.price+'.90</h5>';
                wmn += '<button type="button" class="btn btn-dark float-end" onclick="viewItem()"><i class="bi bi-eye" style="font-size: 20px;"></i>View Product</button>';
                wmn += '</div>';
                wmn += '</div>';
                wmn += '</div>';
            }
        }
        document.getElementById('wmn-content').innerHTML = wmn;
    })

fetch("data/data.json")
.then(response => response.json())
.then(data => {
    console.log(data)
    var men = '';

    for(items of data){
        if(items.category == "men"){
            console.log(items.category)
            men += '<div class="col-12 col-md-6 col-lg-4">';
            men += '<div class="card w-100 h-100" data-bs-toggle="modal" data-bs-target="#exampleModal" id="cardItem">';
            men += '<img src="'+items.picture+'" class="card-img-top w-100 h-100" alt="'+items.name+'">';
            men += '<div class="card-body">';
            men += '<p class="card-title text-center h5">'+items.name+'</p>';
            //men += '<p class="card-text" style="font-size: 12px;"><em>'+items.description+'</em></p>';
            men += '<hr>';
            men += '<h5 class="card-text text-start">$'+items.price+'.90</h5>';
            men += '<button type="button" class="btn btn-dark float-end" onclick="viewItem()"><i class="bi bi-eye" style="font-size: 20px;"></i>View Product</button>';
            men += '</div>';
            men += '</div>';
            men += '</div>';
        }
    }
    document.getElementById('men-content').innerHTML = men;
})

fetch("data/data.json")
.then(response => response.json())
.then(data => {
    console.log(data)
    var kds = '';

    for(items of data){
        if(items.category == "kids"){
            kds += '<div class="col-12 col-md-6 col-lg-4">';
            kds += '<div class="card w-100 h-100" data-bs-toggle="modal" data-bs-target="#exampleModal" id="cardItem">';
            kds += '<img src="'+items.picture+'" class="card-img-top w-100 h-100" alt="'+items.name+'">';
            kds += '<div class="card-body">';
            kds += '<p class="card-title text-center h5">'+items.name+'</p>';
            //kds += '<p class="card-text" style="font-size: 12px;"><em>'+items.description+'</em></p>';
            kds += '<hr>';
            kds += '<h5 class="card-text text-start">$'+items.price+'.90</h5>';
            kds += '<button type="button" class="btn btn-dark float-end" onclick="viewItem()"><i class="bi bi-eye" style="font-size: 20px;"></i>View Product</button>';
            kds += '</div>';
            kds += '</div>';
            kds += '</div>';
        }
    }
    document.getElementById('kds-content').innerHTML = kds;
})
