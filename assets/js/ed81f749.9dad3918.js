"use strict";(self.webpackChunkfastura=self.webpackChunkfastura||[]).push([[3427],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>g});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return t?n.createElement(g,o(o({ref:a},d),{},{components:t})):n.createElement(g,o({ref:a},d))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},68374:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=t(87462),r=(t(67294),t(3905));const i={},o="Asistencia de la AI",s={unversionedId:"configuracion-adicional/Asistencia-de-la-IA",id:"configuracion-adicional/Asistencia-de-la-IA",title:"Asistencia de la AI",description:"AI Assist est\xe1 dise\xf1ado para que los agentes generen sugerencias de respuesta, mejoren el contenido del borrador y corrijan la gram\xe1tica, entre otras cosas. En general, AI Assist permite a los agentes manejar consultas de clientes m\xe1s complejas, brindar un soporte m\xe1s personalizado y, en \xfaltima instancia, mejorar la satisfacci\xf3n del cliente.",source:"@site/docs/configuracion-adicional/Asistencia-de-la-IA.md",sourceDirName:"configuracion-adicional",slug:"/configuracion-adicional/Asistencia-de-la-IA",permalink:"/documentacion/configuracion-adicional/Asistencia-de-la-IA",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Asignar prioridad",permalink:"/documentacion/configuracion-adicional/Asignar-prioridad"},next:{title:"Atributos personalizados",permalink:"/documentacion/configuracion-adicional/Atributos-personalizados"}},l={},c=[{value:"\xbfC\xf3mo configurar AI Assist?",id:"c\xf3mo-configurar-ai-assist",level:2},{value:"Funciones admitidas por el AI Assist",id:"funciones-admitidas-por-el-ai-assist",level:2},{value:"Sugerencias de respuesta",id:"sugerencias-de-respuesta",level:3},{value:"Corregir la ortograf\xeda y la gram\xe1tica",id:"corregir-la-ortograf\xeda-y-la-gram\xe1tica",level:3},{value:"Ampliar",id:"ampliar",level:3},{value:"Acortar",id:"acortar",level:3},{value:"Tono amistoso",id:"tono-amistoso",level:3},{value:"Tono formal",id:"tono-formal",level:3},{value:"Resumir",id:"resumir",level:3},{value:"\xbfC\xf3mo usar AI Assist?",id:"c\xf3mo-usar-ai-assist",level:2}],d={toc:c},p="wrapper";function u(e){let{components:a,...i}=e;return(0,r.kt)(p,(0,n.Z)({},d,i,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"asistencia-de-la-ai"},"Asistencia de la AI"),(0,r.kt)("p",null,"AI Assist est\xe1 dise\xf1ado para que los agentes generen sugerencias de respuesta, mejoren el contenido del borrador y corrijan la gram\xe1tica, entre otras cosas. En general, AI Assist permite a los agentes manejar consultas de clientes m\xe1s complejas, brindar un soporte m\xe1s personalizado y, en \xfaltima instancia, mejorar la satisfacci\xf3n del cliente."),(0,r.kt)("admonition",{title:"NOTA:",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Actualmente, estamos utilizando OpenAI como nuestro proveedor de IA, espec\xedficamente el modelo gpt-3.5-turbo. Sin embargo, tenemos planes para apoyar a m\xe1s proveedores en el futuro.")),(0,r.kt)("h2",{id:"c\xf3mo-configurar-ai-assist"},"\xbfC\xf3mo configurar AI Assist?"),(0,r.kt)("p",null,"Dir\xedgete a tu plataforma de Chatb\xfaho, e ingresa a ",(0,r.kt)("strong",{parentName:"p"},"Ajustes \u2699\ufe0f > Aplicaciones"),", luego selecciona ",(0,r.kt)("strong",{parentName:"p"},"Configurar"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:t(501).Z,width:"1916",height:"696"})),(0,r.kt)("p",null,"Cree una nueva clave de ",(0,r.kt)("strong",{parentName:"p"},"OpenAI")," (podr\xe1 crear una clave desde su cuenta de ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://platform.openai.com/account/api-keys"},"OpenAI"))," ) y seleccione en el bot\xf3n ",(0,r.kt)("strong",{parentName:"p"},"Conectar cuenta")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:t(5322).Z,width:"1259",height:"577"})),(0,r.kt)("p",null,"Inserte la clave ",(0,r.kt)("strong",{parentName:"p"},"OpenAI")," y seleccione  en el bot\xf3n ",(0,r.kt)("strong",{parentName:"p"},"Crear"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:t(33260).Z,width:"594",height:"329"})),(0,r.kt)("h2",{id:"funciones-admitidas-por-el-ai-assist"},"Funciones admitidas por el AI Assist"),(0,r.kt)("h3",{id:"sugerencias-de-respuesta"},"Sugerencias de respuesta"),(0,r.kt)("p",null,"Las sugerencias de respuesta proporcionan a los agentes respuestas sugeridas basadas en el historial de conversaciones. Estas sugerencias pueden ayudar a los agentes a responder con rapidez y precisi\xf3n a las consultas de los clientes."),(0,r.kt)("h3",{id:"corregir-la-ortograf\xeda-y-la-gram\xe1tica"},"Corregir la ortograf\xeda y la gram\xe1tica"),(0,r.kt)("p",null,"AI Assist puede corregir errores ortogr\xe1ficos y gramaticales en el borrador actual del agente, asegurando que el cliente reciba un mensaje profesional y preciso."),(0,r.kt)("h3",{id:"ampliar"},"Ampliar"),(0,r.kt)("p",null,"AI Assist puede ampliar el borrador actual del agente, brindando informaci\xf3n adicional y contexto al cliente."),(0,r.kt)("h3",{id:"acortar"},"Acortar"),(0,r.kt)("p",null,"AI Assist puede acortar el borrador actual del agente, simplificando el mensaje y haci\xe9ndolo m\xe1s f\xe1cil de entender para el cliente."),(0,r.kt)("h3",{id:"tono-amistoso"},"Tono amistoso"),(0,r.kt)("p",null,"AI Assist puede cambiar el tono del borrador actual del agente para hacerlo m\xe1s amigable y accesible."),(0,r.kt)("h3",{id:"tono-formal"},"Tono formal"),(0,r.kt)("p",null,"Alternativamente, AI Assist puede ajustar el tono del borrador actual del agente para hacerlo m\xe1s formal y profesional."),(0,r.kt)("h3",{id:"resumir"},"Resumir"),(0,r.kt)("p",null,"AI Assist puede resumir mensajes largos del cliente, proporcionando un resumen breve y conciso para que el agente lo revise. Esta funci\xf3n solo est\xe1 disponible en el editor privado."),(0,r.kt)("h2",{id:"c\xf3mo-usar-ai-assist"},"\xbfC\xf3mo usar AI Assist?"),(0,r.kt)("p",null,"Seleccione el \xedcono de IA dentro del editor del contacto donde enviar\xe1 el mensaje."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:t(52379).Z,width:"1015",height:"142"})),(0,r.kt)("p",null,"Para seleccionar una funci\xf3n deseada, simplemente haga clic en ella."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:t(89926).Z,width:"1261",height:"823"})),(0,r.kt)("p",null,"Una vez que haya hecho clic en una opci\xf3n, se abrir\xe1 el modal de ",(0,r.kt)("strong",{parentName:"p"},"Sugerencia de respuesta con IA")," , que muestra contenido generado por IA. Para insertar el contenido en el editor, haga clic en el bot\xf3n ",(0,r.kt)("strong",{parentName:"p"},"Usar esta sugerencia"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:t(27209).Z,width:"1191",height:"460"})))}u.isMDXComponent=!0},501:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/ia_aplicacion_01-06fd05336cb086858012e313d2a52a56.png"},5322:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/ia_aplicacion_02-af4e602bcfa6273ce0bbc852e9390789.png"},33260:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/ia_aplicacion_03-92685481719b4286108a9a3d4a5d4c2a.png"},52379:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/ia_aplicacion_04-282469b47688348f3c4b69c88f583d24.png"},89926:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/ia_aplicacion_05-4956aea1982ec2d95b15e751fa6e311b.png"},27209:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/ia_aplicacion_06-72e507bb6bdfbb21f0f7638fa3f672e3.png"}}]);