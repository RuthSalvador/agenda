window.addEventListener('load', function() {
  // seleccionando los elementos del DOM
  var nameContact = document.getElementById('name');
  var celContact = document.getElementById('cellphone');
  var btnSave = document.getElementById('save');
  var containerContact = document.getElementById('container-contact');

  // agregando evento click al boton Guardar
  btnSave.addEventListener('click', function(event) {
    // previniendo la acción por defecto que tiene el botón: recargar.
    event.preventDefault();

    // creando elemento contenedor 'li' del nuevo contacto
    var newContact = document.createElement('li');

    // creando span de Name
    var newName = document.createElement('span');
    newName.setAttribute('class', 'contact-name');
    newName.textContent = nameContact.value;
    newContact.appendChild(newName);

    // creando span de Celular
    var newCel = document.createElement('span');
    newCel.setAttribute('class', 'contact-cellphone');
    newCel.textContent = celContact.value;
    newContact.appendChild(newCel);

    // insertando el nuevo contacto arriba del elemento anterior
    containerContact.insertBefore(newContact, containerContact.firstElementChild);
  });
});