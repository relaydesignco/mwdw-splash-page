const siteURL = 'http://midwestdesignweekapi.local';

export const state = () => ({
  events: [],
});

export const mutations = {
  updateEvents: (state, events) => {
    state.events = events;
  },
};

export const actions = {
  async getEvents({ state, commit, dispatch }) {
    if (state.events.length) return;

    try {
      let events = await fetch(
        `${siteURL}/wp-json/wp/v2/events?page=1&per_page=100&_embed=1`
      ).then((res) => res.json());

      events = events
        // .filter((el) => el.status === 'publish')
        .map(({ id, slug, title, content, acf }) => ({
          id,
          slug,
          title,
          content,
          acf,
        }));

      commit('updateEvents', events);
    } catch (err) {
      console.error('getEvents', err);
    }
  },
};
