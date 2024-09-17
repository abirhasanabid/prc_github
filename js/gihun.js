const deleteBtn = document.getElementById('delete-btn');
        document.getElementById('inputField').addEventListener('keyup', function (event) {
            const newInput = event.target.value;
            if (newInput === 'delete') {
                deleteBtn.removeAttribute('disabled')
            }
            else{
                deleteBtn.setAttribute('disabled',true)
            }
        })

        document.getElementById('delete-btn').addEventListener('click', function () {
            document.getElementById('heading1').innerHTML = '';
           const enputText = document.getElementById('inputField');
           const emty = enputText.value;
           enputText.value=''; 
        })