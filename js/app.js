$(document).foundation();

$("nav").headroom({
  "offset": 50,
  "tolerance": 5,
  "classes": {
    "pinned": "fadeIn",
    "unpinned": "fadeOut"
  }
});

// to destroy
$("#header").headroom("destroy");