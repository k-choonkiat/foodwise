
export default {
  items: [
    {
      title: true,
      name: '',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Pantry',
      url: '/theme/colors',
      icon: 'icon-pencil',
    },
    {
      name: 'Chatbot',
      url: '/theme/typography',
      icon: 'icon-speech',
    },
    {
      name: 'Profile',
      url: '/dashboards',
      icon: 'icon-user',
    },
    {
      divider: true,
    },
  ],
};
