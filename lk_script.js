let edit_buttons = document.querySelectorAll(".edit-btn");
        let cancel_buttons = document.querySelectorAll(".cancel-btn");
        let save_buttons = document.querySelectorAll(".save-btn");

        for (let i = 0; i < edit_buttons.length; i++) {
            let inputValue = edit_buttons[i].previousElementSibling.innerText;
            edit_buttons[i].addEventListener('click', () => {
                edit_buttons[i].previousElementSibling.innerHTML = `<input type="text"  id="textInput" class="form-control" value="${inputValue}">`;
                let textInput = document.getElementById('textInput');
                edit_buttons[i].hidden = true;
                cancel_buttons[i].hidden = false;
                save_buttons[i].hidden = false;
            })
            
                cancel_buttons[i].addEventListener('click', () => {
                    edit_buttons[i].previousElementSibling.innerHTML = inputValue;
                    cancel_buttons[i].hidden = true;
                    save_buttons[i].hidden = true;
                    edit_buttons[i].hidden = false;
                })
                
                    save_buttons[i].addEventListener('click', async () => {
                    let newInputValue = edit_buttons[i].previousElementSibling.firstElementChild.value;

                    edit_buttons[i].previousElementSibling.innerText = newInputValue;
                    cancel_buttons[i].hidden = true;
                    save_buttons[i].hidden = true;
                    edit_buttons[i].hidden = false;

                    let data = new FormData();
                    data.append("value", newInputValue);
                    data.append("item", save_buttons[i].dataset.item);
                    
                    let response = await fetch("lk.php", {
                        method: "POST",
                        body: data,
                    })
                })
        
        }