Package.describe({
  summary: "Sugar is a Javascript library that extends native objects with helpful methods. It is designed to be intuitive, unobtrusive, and let you do more with less code."
});

Package.on_use(function(api, where) {
  where = where || ['client', 'server']
  api.add_files(['sugar-full.min.js'], where);
});
