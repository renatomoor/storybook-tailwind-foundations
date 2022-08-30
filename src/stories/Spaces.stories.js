import SpacesFoundation from '../components/SpacesFoundation.vue';
import { getTheme } from "../bin/getTheme";

export default {
  title: 'Foundations/Spaces',
  component: SpacesFoundation,
};

const Template = (args) => ({
  components: { SpacesFoundation },
  setup() {
    return { args };
  },
  template: '<SpacesFoundation v-bind="args" />',
});

export const Spaces = Template.bind({});
Spaces.args = {
  spaces: getTheme('spacing'),
}
