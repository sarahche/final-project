

function onload () {
  new TypeIt("#typedText", {
  speed: 75,
  deleteSpeed: 100,
  waitUntilVisible: true
})
  .type("sarah chen")
  .break({delay: 500})
  .type("3rd")
  .move(-2)
  .delete(1)
  .type("thi")
  .move(3)
  .type(" year")
  .break({delay: 500})
  .type("psychology + human-computer interaction")
  .move(-1)
  .delete(26)
  .type("hci")

  .break({delay: 500})
  .type("programming usable interfaces ")
  .break({delay: 500})
  .move(-1)
  .delete(30)
  .type("pui final project")
  .break({delay: 500})
  .type("portfolio site")
  .go();
}

let progress = document.getElementById('progressbar');

let totalHeight = document.body.scrollHeight - window.innerHeight; 

let progressHeight = 0;

window.onscroll = function() {
	let progressHeight = (window.pageYOffset / totalHeight) * 100;
	progress.style.height = progressHeight + '%';
}