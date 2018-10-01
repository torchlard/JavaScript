export const customImport = (id, template_name, tag_name) => {

  const getImport = document.querySelector(`#${id}`)
  
  // const getContent = getImport.import.querySelector('#content')
  // document.body.appendChild(document.importNode(getContent, true))
  
  customElements.define(tag_name, class MyHeader extends HTMLElement {
    constructor() {
      super();
  
      const template = getImport.import.getElementById(template_name)
      const templateContent = template.content;
  
      const shadowRoot = this.attachShadow({mode: 'open'})
      shadowRoot.appendChild(templateContent.cloneNode(true))
    }
  })

}






