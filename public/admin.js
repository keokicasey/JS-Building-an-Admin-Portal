// Your Code Here
async function updateBook() {
    let response = await fetch("http://localhost:3001/listBooks");
    let books = await response.json();
    books.forEach(renderBook);
}

    function renderBook(book) {
        let body = document.querySelector('#root');
        let uList = document.createElement('ul');
    
        let listItem = document.createElement('li');
        listItem.textContent = book.title;

        let save = document.createElement('button')
        save.textContent = "Save"

        let input = document.createElement('input');
        input.value = book.quantity;



        save.addEventListener("click", ()=>{
            fetch("http://localhost:3001/updateBook", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    },
                body: JSON.stringify({
                id: book.id,
                quantity: input.value,
                }),
            });
        });

        listItem.append(book);
        uList.append(listItem, input, save);
        body.append(uList);
}
updateBook();

// async function main() {
//     let response = await fetch("http://localhost:3001/listBooks");
//     let books = await response.json();
//     books.forEach(renderBook);
//   }
  
//   function renderBook(book) {
//     let root = document.querySelector("#root");
  
//     let li = document.createElement("li");
//     li.textContent = book.title;
  
//     let quantityInput = document.createElement("input");
//     quantityInput.value = book.quantity;
  
//     let saveButton = document.createElement("button");
//     saveButton.textContent = "Save";
  
//     saveButton.addEventListener("click", ()=>{
//       fetch("http://localhost:3001/updateBook", {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           id: book.id,
//           quantity: quantityInput.value,
//         }),
//       });
//     });
  
//     li.append(quantityInput, saveButton);
  
//     root.append(li);
//   }
  
//   main();