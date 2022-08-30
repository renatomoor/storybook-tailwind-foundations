import{S as n}from"./SpacesFoundation.bb05bec8.js";import{g as o}from"./getTheme.60a022e9.js";import"./vue.esm-bundler.12ec22f2.js";const p={parameters:{storySource:{source:`import SpacesFoundation from '../components/SpacesFoundation.vue';
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
`,locationsMap:{screens:{startLoc:{col:17,line:9},endLoc:{col:2,line:15},startBody:{col:17,line:9},endBody:{col:2,line:15}}}}},title:"Foundations/Screens",component:n},t=e=>({components:{SpacesFoundation:n},setup(){return{args:e}},template:'<SpacesFoundation v-bind="args" />'}),s=t.bind({});s.args={spaces:o("screens")};const i=["Screens"];export{s as Screens,i as __namedExportsOrder,p as default};
//# sourceMappingURL=Screens.stories.386af56e.js.map
