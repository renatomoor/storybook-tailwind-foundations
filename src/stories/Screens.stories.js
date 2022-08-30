import SpacesFoundation from '../components/SpacesFoundation.vue';
import { getTheme } from "storybook-tailwind-foundations";

export default {
  title: 'Foundations/Screens',
  component: SpacesFoundation,
};

const Template = (args) => ({
  components: { SpacesFoundation },
  setup() {
    return { args };
  },
  template: '<SpacesFoundation v-bind="args" />',
});

export const Screens = Template.bind({});
Screens.args = {
  spaces: getTheme('screens'),
}
