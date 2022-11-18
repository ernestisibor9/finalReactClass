const initialData = {
    cart:[],
    items: [
        {
          itemName:
            "UMIDIGI A13 Pro (6GB,128GB ROM) 5150mAh NFC (48MP+8MP+5MP)+16MP-Sunglow Gold",
          itemImage:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/30/5207801/1.jpg?3545",
          itemPrice: "97900",
        },
        {
          itemName: "Redme C25Y 4GB 128GB Memory- Gray",
          itemImage:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/42/7194331/1.jpg?9567",
          itemPrice: "82612",
        },
        {
          itemName:
            "Mooved 32' HD LED Digital Satellite Color TV + Free Wall Hanger",
          itemImage:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/55/6266311/1.jpg?6461",
          itemPrice: "51990",
        },
    
        {
          itemName: "Syinix 32 Inch LED Digital TV",
          itemImage:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/03/683389/1.jpg?2660",
          itemPrice: "86215",
        },
        {
          itemName: "6 In 1 Bundle Official Shirts For Men - Multi",
          itemImage:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/80/842263/1.jpg?6764",
          itemPrice: "26365",
        },
        {
          itemName:
            "Chrysolite Designs Super Numbers Casual Polo Bundle - Wine, Grey, Navyblue, Red.",
          itemImage:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/20/847454/1.jpg?9932",
          itemPrice: "12200",
        },
      ],
}

function itemReducer(state = initialData, action) {
    switch(action.type){
        case "ADD_ITEM" : return{
            ...state,
            cart: [...state.cart, action.payload],
            items: [...state.items, action.payload]
        }
        case "DELETE_ITEM" : return{
            ...state,
            cart: state.cart.filter((del)=>del !== action.payload)
        }
        default:{
            return state
        }
    }
}

export default itemReducer