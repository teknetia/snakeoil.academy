# Snakeoil Academy website

## Build and run

- `npm install` to get everything setup
- `npm run build` to build a fully optimised version of the site into `_site`
- `npm run start` to run a dev server without Tailwind optimisations

### Things it uses

- Icons from [Feather Icons](https://feathericons.com) | [Github Repo](https://github.com/feathericons/feather)
- [Tailwind CSS](https://tailwindcss.com) | [Docs](https://tailwindcss.com/docs)
  - [Typography](https://github.com/tailwindlabs/tailwindcss-typography) plugin to make Markdown look good
  - [Aspect Ratio](https://github.com/tailwindlabs/tailwindcss-aspect-ratio) plugin to make YT embeds not look like trash
- [Eleventy](https://www.11ty.dev) | [Docs](https://www.11ty.dev/docs/)
- [Tailblocks](https://tailblocks.cc) where I needed some design inspiration

## Data structure

### Talks

Talks are structured in a folder for each event. The folder name should match the events associated event file name for consistency. For example `src/talk/event-name`.

#### Adding images to speakers

To add an image to a speaker, put it in the `src/_includes/img/speakers` folder and then add the full file name to the relevent speaker file in `src/speaker`. It will now automatically replace the default icon.

### Speakers

### Events

Add a new file in the `src/event` folder with the name of the event, using hhyphens for spaces. Each event frontmatter should include:

- Title
- Date (in ISO 8601 format)
- Excerpt (short description used mostly on the home page)

And then include the full description as the main content in Markdown format.

# Some example filters

```html
{% for item in collections.talks %}
  {% if item.event === 'pycon-2018' %}
    <li><a href="{{ item.url }}">{{ item.data.title }}</a></li>
  {% endif %}
{% endfor %}

<br><hr><br>

{% for talk in collections.talks | eventFilter('pyconau-2020') %}
  <li><a href="{{ talk.url }}">{{ talk.data.title }}</a></li>
{% endfor %}

<br><hr><br>

{% for talk in collections.talks | talkFilter('elissa-shevinsky') %}
  <li><a href="{{ talk.url }}">{{ talk.data.title }}</a></li>
{% endfor %}
```