Package.describe({
  summary: "Sugar is a Javascript library that extends native objects with helpful methods. It is designed to be intuitive, unobtrusive, and let you do more with less code."
});

Package.on_use(function(api) {
  api.add_files(['sugar/release/sugar-full.min.js'], ['client', 'server']);
});
