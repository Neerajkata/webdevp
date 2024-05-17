document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('crud-form');
    const userList = document.getElementById('user-list');
    let selectedRow = null;
    
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const genderInput = document.getElementById('gender');
      const cityInput = document.getElementById('city');
      const mobileInput = document.getElementById('mobile');
      
      const name = nameInput.value;
      const email = emailInput.value;
      const gender = genderInput.value;
      const city = cityInput.value;
      const mobile = mobileInput.value;
      
      if (selectedRow) {
        // Update existing row
        selectedRow.cells[0].textContent = name;
        selectedRow.cells[1].textContent = email;
        selectedRow.cells[2].textContent = gender;
        selectedRow.cells[3].textContent = city;
        selectedRow.cells[4].textContent = mobile;
        selectedRow = null;
      } else {
        // Create new row
        const newRow = userList.insertRow();
        newRow.innerHTML = `
          <td>${name}</td>
          <td>${email}</td>
          <td>${gender}</td>
          <td>${city}</td>
          <td>${mobile}</td>
          <td>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
          </td>
        `;
      }
      
      // Clear input fields
      form.reset();
    });
  
    // Edit and Delete button functionality
    userList.addEventListener('click', function(event) {
      const target = event.target;
      if (target.classList.contains('delete-btn')) {
        const row = target.closest('tr');
        userList.removeChild(row);
      } else if (target.classList.contains('edit-btn')) {
        const row = target.closest('tr');
        selectedRow = row;
        document.getElementById('name').value = row.cells[0].textContent;
        document.getElementById('email').value = row.cells[1].textContent;
        document.getElementById('gender').value = row.cells[2].textContent;
        document.getElementById('city').value = row.cells[3].textContent;
        document.getElementById('mobile').value = row.cells[4].textContent;
      }

      function reset(){
        name.textContent = "";
        email.textContent = "";
      } gender.textContent = "";
      city.textContent = "";
      mobile.textContent = "";
    });
  });
  