

function onload () {
  new TypeIt("#simpleUsage", {
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
  .go();
}
