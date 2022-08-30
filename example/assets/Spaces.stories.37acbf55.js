import{S as n}from"./SpacesFoundation.bb05bec8.js";import{g as o}from"./getTheme.60a022e9.js";import"./vue.esm-bundler.12ec22f2.js";const r={parameters:{storySource:{source:`import SpacesFoundation from '../components/SpacesFoundation.vue';
import { getTheme } from "storybook-tailwind-foundations";

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
`,locationsMap:{spaces:{startLoc:{col:17,line:9},endLoc:{col:2,line:15},startBody:{col:17,line:9},endBody:{col:2,line:15}}}}},title:"Foundations/Spaces",component:n},t=e=>({components:{SpacesFoundation:n},setup(){return{args:e}},template:'<SpacesFoundation v-bind="args" />'}),s=t.bind({});s.args={spaces:o("spacing")};const i=["Spaces"];export{s as Spaces,i as __namedExportsOrder,r as default};
//# sourceMappingURL=Spaces.stories.37acbf55.js.map
