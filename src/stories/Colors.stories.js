import ColorsFoundation from '../components/ColorsFoundation.vue';

export default {
  title: 'Foundations/Colors',
  component: ColorsFoundation,
};

const Template = (args) => ({
  components: { ColorsFoundation },
  setup() {
    return { args };
  },
  template: '<ColorsFoundation v-bind="args" />',
});

export const Colors = Template.bind({});
Colors.args = {
  colors: import.meta.env.STORYBOOK_TAILWIND.colors,
}
