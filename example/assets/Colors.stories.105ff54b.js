import{o as s,a as n,b as e,t as d,F as p,r as m,n as b,d as h,e as u,f as F}from"./vue.esm-bundler.12ec22f2.js";import{_ as f,g as x}from"./getTheme.60a022e9.js";const k={class:"color-section"},B={class:"colors-container"},N={class:"colors-container__wrapper"},T={class:"color-description"},V={class:"key-color"},j=h(),q={class:"hex-color"},C={__name:"ColorsGrid",props:{colors:{type:Object,required:!0},title:{type:String,default:"Root"},useDefaultBackgroundColor:{type:Boolean,default:!1}},setup(t){return(r,c)=>(s(),n("div",k,[e("h3",null,d(t.title),1),e("div",B,[(s(!0),n(p,null,m(t.colors,(l,o)=>(s(),n("div",null,[e("div",N,[e("div",null,[e("div",{class:"color",style:b(`background-color: ${l}`)},null,4),e("div",T,[e("p",V,d(o),1),j,e("p",q,d(l),1)])])])]))),256))])]))}},_=f(C,[["__scopeId","data-v-a95d6979"]]);C.__docgenInfo={exportName:"default",displayName:"ColorsGrid",description:"",tags:{},props:[{name:"colors",type:{name:"object"},required:!0},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"'Root'"}},{name:"useDefaultBackgroundColor",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}]};const G={class:"colors-container"},I={key:0},g={__name:"ColorsFoundation",props:{colors:{type:Object,required:!0}},setup(t){const r=t,c=o=>o&&typeof o=="object",l=()=>{let o={};for(let a in r.colors)c(r.colors[a])||(o[a]=r.colors[a]);return o};return(o,a)=>(s(),n("div",G,[(s(!0),n(p,null,m(t.colors,(i,v)=>(s(),n("div",null,[c(i)?(s(),n("div",I,[u(_,{colors:i,title:v},null,8,["colors","title"])])):F("",!0)]))),256)),u(_,{colors:l(),title:"Root Colors","use-default-background-color":!0},null,8,["colors"])]))}},y=f(g,[["__scopeId","data-v-0cdab366"]]);g.__docgenInfo={exportName:"default",displayName:"ColorsFoundation",description:"",tags:{},props:[{name:"colors",type:{name:"object"},required:!0}]};const D={parameters:{storySource:{source:`import ColorsFoundation from '../components/ColorsFoundation.vue';
import { getTheme } from "storybook-tailwind-foundations";

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
  colors: getTheme('colors'),
}
`,locationsMap:{colors:{startLoc:{col:17,line:9},endLoc:{col:2,line:15},startBody:{col:17,line:9},endBody:{col:2,line:15}}}}},title:"Foundations/Colors",component:y},O=t=>({components:{ColorsFoundation:y},setup(){return{args:t}},template:'<ColorsFoundation v-bind="args" />'}),R=O.bind({});R.args={colors:x("colors")};const L=["Colors"];export{R as Colors,L as __namedExportsOrder,D as default};
//# sourceMappingURL=Colors.stories.105ff54b.js.map
