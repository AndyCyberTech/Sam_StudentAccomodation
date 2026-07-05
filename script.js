document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('nav.links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  var form = document.querySelector('form.enquiry');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.querySelector('#name').value || 'there';
      var confirmBox = document.getElementById('form-confirm');
      if (confirmBox) {
        confirmBox.textContent = 'Thanks, ' + name + '. Your enquiry details are ready — for now, please also send them to us directly via WhatsApp or email so we see it right away.';
        confirmBox.style.display = 'block';
      }
    });
  }
});
